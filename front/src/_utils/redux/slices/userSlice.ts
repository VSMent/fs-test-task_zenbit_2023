import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/_utils/Types';

interface UserSlice {
  currentUser: User | null;
}

const initialState: UserSlice = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logUserIn: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    logUserOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const { logUserIn, logUserOut } = userSlice.actions;
export default userSlice.reducer;
