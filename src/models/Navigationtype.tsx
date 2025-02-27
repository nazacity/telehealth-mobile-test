import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type NavigationParamsList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  SearchDoctorScreen: undefined;
};

export type RootNavigationProp =
  NativeStackNavigationProp<NavigationParamsList>;

export const useAppNavigation = useNavigation<RootNavigationProp>;
