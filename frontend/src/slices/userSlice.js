import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/userService";

const initialState = {
  users: [],
  user: {},
  error: false,
  success: false,
  loading: false,
  message: null,
};

// Create a User
export const createUser = createAsyncThunk("user/create", async (user, thunkAPI) => {
  console.log(user)
  const data = await userService.createUser(user);

  // Check for errors
  if (data.errors) {
    return thunkAPI.rejectWithValue(data.errors[0]);
  }

  return data;
});

export const userSlice = createSlice({
  name: "publish",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = action.payload;
        state.message = "User criado com sucesso";
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
      });
  },
});

export const { resetMessage } = userSlice.actions;
export default userSlice.reducer;
