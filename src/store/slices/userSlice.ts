import {createSlice} from '@reduxjs/toolkit';
import {IUser} from 'models/user.model';

export interface IUserLocation {
  lat: number;
  lng: number;
}

interface UserModel {
  isLogin: boolean;
  user: IUser;
}

export const initialUserState = {
  id: '',
  first_name: '',
  last_name: '',
};

const initialState: UserModel = {
  isLogin: false,
  user: initialUserState,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLogin = true;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    clearUser: () => {
      return initialState;
    },
  },
});

export const {setUser, setIsLogin, clearUser} = userSlice.actions;

export default userSlice.reducer;
