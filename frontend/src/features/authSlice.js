import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStart(state) {
      state.loading = true;
      state.error = null;
    },
    authSuccess(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
    },
    authFail(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { authStart, authSuccess, authFail, logout } = authSlice.actions;

export const signIn = (email, password) => async (dispatch) => {
  dispatch(authStart());
  try {
    const response = await axios.post('http://localhost:5000/api/auth/signin', { email, password });
    dispatch(authSuccess(response.data));
    console.log(response.data);

    localStorage.setItem('token', response.data.token);

  } catch (error) {
    dispatch(authFail(error.response?.data?.message || 'Sign In Failed'));
  }
};

export const signUp = (email, password) => async (dispatch) => {
  dispatch(authStart());
  try {
    const response = await axios.post('http://localhost:5000/api/auth/signup', { email, password });
    dispatch(authSuccess(response.data));
    console.log(response.data);

    localStorage.setItem('token', response.data.token);
  } catch (error) {
    dispatch(authFail(error.response?.data?.message || 'Sign Up Failed'));
  }
};

export default authSlice.reducer;
