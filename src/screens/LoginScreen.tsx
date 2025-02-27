import images from 'assets/images';
import BaseTextInput from 'components/basecomponents/input/BaseTextInput';
import BaseText from 'components/basecomponents/text/BaseText';
import {SignInDto, signInDefaultValue, signInSchema} from 'dto/auth.dto';
import React, {useMemo, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from 'theme/theme';
import {useTranslation} from 'react-i18next';
import ContainedButton from 'components/basecomponents/button/ContainedButton';
import {KeyboardAvoidingView} from 'react-native-keyboard-controller';
import authServices from 'services/auth.services';
import {useAppDispatch} from 'store/store';
import {setUser} from 'store/slices/userSlice';
import {RootNavigationProp} from 'models/Navigationtype';

interface IProps {
  navigation: RootNavigationProp;
}

const LoginScreen: React.FC<IProps> = ({navigation}) => {
  const {t} = useTranslation();
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: {isDirty, isValid, errors},
  } = useForm<SignInDto>({
    defaultValues: signInDefaultValue,
    resolver: signInSchema(),
  });

  const {mutate: signIn} = authServices.useMutationSignIn(
    data => {
      setTimeout(() => {
        dispatch(setUser(data));
        setLoading(false);
        setTimeout(() => {
          navigation.navigate('HomeScreen');
        }, 600);
      }, 1200);
    },
    error => {},
  );

  const disabled = useMemo(() => {
    if (isDirty && isValid) {
      return false;
    }

    return true;
  }, [isDirty, isValid]);

  const _HandleSignIn = handleSubmit(data => {
    setLoading(true);
    signIn({
      idCard: data.idCard,
    });
  });

  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        {paddingTop: insets.top, paddingBottom: insets.bottom + 20},
      ]}>
      <View style={styles.logoContainer}>
        <Image source={images.telehealth_logo} style={styles.logo} />
      </View>
      <View style={styles.centerContainer}>
        <BaseText as="h3" style={styles.title}>
          login.sign_in
        </BaseText>
        <BaseText as="body2">login.id_card_or_passport</BaseText>
        <Controller
          name="idCard"
          control={control}
          render={({field}) => {
            return (
              <BaseTextInput
                {...field}
                placeholder={t('login.id_card_or_passport')}
                onEndEditing={_HandleSignIn}
                returnKeyType="search"
              />
            );
          }}
        />
        <ContainedButton
          label="login.sign_in2"
          disabled={disabled}
          loading={loading}
          onPress={_HandleSignIn}
        />
      </View>
      <View style={[styles.footerContainer, {bottom: insets.bottom + 20}]}>
        <BaseText>login.no_account</BaseText>
        <TouchableOpacity activeOpacity={0.8} style={styles.signup}>
          <BaseText color={COLORS.primary}>login.sign_up</BaseText>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.white},
  signup: {marginLeft: 5},
  footerContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
  },
  title: {textAlign: 'center', marginBottom: 20, marginTop: 40},
  logoContainer: {alignItems: 'center', marginTop: 40},
  logo: {
    width: 118,
    height: 142,
    resizeMode: 'contain',
  },
  centerContainer: {paddingHorizontal: 20},
});
