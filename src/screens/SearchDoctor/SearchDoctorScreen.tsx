import BackButtonHeader from 'components/basecomponents/header/BackButtonHeader';
import VectorIcon from 'components/basecomponents/icon/VectorIcon';
import {RootNavigationProp} from 'models/Navigationtype';
import React, {useCallback, useMemo} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from 'react-native';
import {COLORS, SHADOW, FONTS} from 'theme/theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ReadyDoctorScreen from './ReadyDoctorScreen';
import OfflineDoctorScreen from './OfflineDoctorScreen';
import {useTranslation} from 'react-i18next';
import {useForm} from 'react-hook-form';
import SearchDoctorCategoryCard from 'components/basecomponents/card/SearchDoctorCategoryCard';
import {IDoctorCategory, categoryLists} from 'models/doctor.model';

const Tab = createMaterialTopTabNavigator();

interface IProps {
  navigation: RootNavigationProp;
}

const SearchDoctorScreen: React.FC<IProps> = ({navigation}) => {
  const {t} = useTranslation();

  const {watch, setValue} = useForm({
    defaultValues: {
      selectedCategory: categoryLists[0].id,
    },
  });

  const _renderItem = useCallback<ListRenderItem<IDoctorCategory>>(
    ({item}) => {
      return (
        <SearchDoctorCategoryCard
          item={item}
          active={watch('selectedCategory') === item.id}
          onPress={() => {
            setValue('selectedCategory', item.id);
          }}
        />
      );
    },
    [t],
  );

  return (
    <View style={styles.container}>
      <BackButtonHeader
        onBack={() => {
          navigation.goBack();
        }}
        title="search_doctor.title"
        rightIcon={
          <TouchableOpacity activeOpacity={0.8}>
            <VectorIcon type="Ionicons" name="search" size={24} />
          </TouchableOpacity>
        }
      />
      <View style={styles.insideContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          removeClippedSubviews={false}
          contentContainerStyle={styles.flatListContainer}
          ItemSeparatorComponent={() => <View style={styles.gap} />}
          data={categoryLists}
          renderItem={_renderItem}
        />
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray[2],
          tabBarLabelStyle: {...FONTS.body1},
        }}>
        <Tab.Screen
          name="ReadyDoctorScreen"
          component={ReadyDoctorScreen}
          options={{
            title: t('search_doctor.ready'),
          }}
        />
        <Tab.Screen
          name="OfflineDoctorScreen"
          component={OfflineDoctorScreen}
          options={{
            title: t('search_doctor.offline'),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default SearchDoctorScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.blue[1]},
  insideContainer: {
    marginTop: 20,
    paddingVertical: 20,
    backgroundColor: COLORS.white,
    ...SHADOW[3],
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  gap: {margin: 5},
  flatListContainer: {paddingHorizontal: 20},
});
