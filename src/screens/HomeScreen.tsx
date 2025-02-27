import BaseText from 'components/basecomponents/text/BaseText';
import {RootNavigationProp} from 'models/Navigationtype';
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {clearUser} from 'store/slices/userSlice';
import {useAppDispatch} from 'store/store';
import {COLORS} from 'theme/theme';
interface IProps {
  navigation: RootNavigationProp;
}

const HomeScreen: React.FC<IProps> = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();

  const _HanldeSignOut = () => {
    dispatch(clearUser());
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 600);
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top + 20,
        },
      ]}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SearchDoctorScreen');
        }}
        style={styles.welcomeButton}>
        <BaseText as="h3" color={COLORS.primary}>
          home.welcome
        </BaseText>
      </TouchableOpacity>
      <TouchableOpacity onPress={_HanldeSignOut} style={styles.signoutButton}>
        <BaseText>login.sign_out</BaseText>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeButton: {
    borderWidth: 1,
    borderColor: '#C4DAFF80',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  signoutButton: {},
});
