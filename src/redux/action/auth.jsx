import axios from 'axios';

const apiUrl = import.meta.env.VITE_BASE_URL;

export const authLogin = (credentials) => {
  return async (dispatch) => {
    dispatch({ type: 'POST_LOGIN_REQUEST' });
    try {
      const response = await axios.post(apiUrl + '/auth', credentials);
      dispatch({ type: 'POST_LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'POST_LOGIN_FAILURE', payload: error });
    }
  };
};

export const authRegister = (userData) => {
  return async (dispatch) => {
    dispatch({ type: 'POST_REGISTER_REQUEST' });
    try {
      const response = await axios.post(apiUrl + '/auth/create', userData);
      dispatch({ type: 'POST_REGISTER_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'POST_REGISTER_FAILURE', payload: error });
    }
  };
};

export const requestOTP = (email) => {
  return async (dispatch) => {
    dispatch({ type: 'POST_OTP_REQUEST' });
    try {
      const response = await axios.post(apiUrl + '/auth/otp', email);
      dispatch({ type: 'POST_OTP_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'POST_OTP_FAILURE', payload: error });
    }
  };
};

export const inputOTP = (otp) => {
  return async (dispatch) => {
    dispatch({ type: 'POST_INPUTOTP_REQUEST' });
    try {
      const response = await axios.post(apiUrl + '/auth/otp', otp);
      dispatch({ type: 'POST_INPUTOTP_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'POST_INPUTOTP_FAILURE', payload: error });
    }
  };
};

export const setPassword = (dataPassword) => {
  return async (dispatch) => {
    dispatch({ type: 'POST_INPUTOTP_REQUEST' });
    try {
      const response = await axios.post(apiUrl + '/auth/otp', dataPassword);
      dispatch({ type: 'POST_INPUTOTP_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'POST_INPUTOTP_FAILURE', payload: error });
    }
  };
};

export const authLogout = () => {
  localStorage.clear();
  return { type: 'LOGOUT' };
};