// authService.js
import { loginSuccess, logoutSuccess } from './authSlice';
import axios from 'axios' 

export const authService = {
  async login(userData) {
    // Replace this with your actual login logic (e.g., API call)
    const user = await axios.post('API URL')
    
    // Dispatch the loginSuccess action with the user data
    store.dispatch(loginSuccess(user));
    
    return user;
  },

  async logout() {
    // Replace this with your actual logout logic (e.g., clearing tokens)
    await yourLogoutFunction();

    // Dispatch the logoutSuccess action
    store.dispatch(logoutSuccess());
  },
};