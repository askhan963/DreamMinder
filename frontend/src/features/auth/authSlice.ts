import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import authService from './authService';

interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface SignupCredentials extends LoginCredentials {
  name: string;
}

// Async thunk for login
export const login = createAsyncThunk<string, LoginCredentials, { rejectValue: string }>(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const { token } = await authService.login(email, password);

      // Save token to localStorage (optional for persistence)
      localStorage.setItem('token', token);

      return token;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Async thunk for signup
export const signup = createAsyncThunk<string, SignupCredentials, { rejectValue: string }>(
  'auth/signup',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const { token } = await authService.signup(name, email, password);

      // Save token to localStorage (optional for persistence)
      localStorage.setItem('token', token);

      return token;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Initial state typed with `AuthState`
const initialState: AuthState = {
  token: localStorage.getItem('token'),
  loading: false,
  error: null,
};

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
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
      .addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload || 'Login failed';
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(signup.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload || 'Signup failed';
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
