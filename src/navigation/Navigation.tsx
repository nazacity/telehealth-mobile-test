import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from 'screens/HomeScreen';
import LoginScreen from 'screens/LoginScreen';
import SearchDoctorScreen from 'screens/SearchDoctor/SearchDoctorScreen';
import {useAppSelector} from 'store/store';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const isLogin = useAppSelector(state => state.user.isLogin);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      {isLogin ? (
        <>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="SearchDoctorScreen"
            component={SearchDoctorScreen}
            options={{animation: 'slide_from_right'}}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigation;
