import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Deal } from '@/_utils/Types';

interface DealSlice {
  deals: Deal[];

}

const initialState: DealSlice = {
  deals: [],
};

export const dealSlice = createSlice({
  name: 'deal',
  initialState,
  reducers: {
    addDeal: (state, action: PayloadAction<Deal>) => {
      state.deals.push(action.payload);
    },
  },
});

export const { addDeal } = dealSlice.actions;
export default dealSlice.reducer;
