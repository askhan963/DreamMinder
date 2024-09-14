import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

// Async thunk for login
export const login = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
  try {
    const { token } = await authService.login(email, password);

    // Save token to localStorage (optional for persistence)
    localStorage.setItem('token', token);

    return token;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
});

// Async thunk for signup
export const signup = createAsyncThunk('auth/signup', async ({ name, email, password }, thunkAPI) => {
  try {
    const { token } = await authService.signup(name, email, password);

    // Save token to localStorage (optional for persistence)
    localStorage.setItem('token', token);

    return token;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
});

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
