import { createSlice } from "@reduxjs/toolkit";
import { getCurrentTab } from "../common/utils";

const initialState = {
  activeTab: "Bronze",

  schemes: [
    {
      id: 1,
      name: "Bronze",
      reward: 10000,
      maxProductValue: 30000,
      maxVoucherValue: 150000,
    },
    {
      id: 2,
      name: "Silver",
      reward: 25000,
      maxProductValue: 60000,
      maxVoucherValue: 250000,
    },
    {
      id: 3,
      name: "Gold",
      reward: 60000,
      maxProductValue: 60000,
      maxVoucherValue: 50000,
    },
  ],

  maxValues: {
    Bronze: 150000,
    Silver: 250000,
    Gold: 500000,
  },

  maxProductValues: {
    Bronze: 30000,
    Silver: 60000,
    Gold: 90000,
  },

  rewardProductValue: "0",
  voucherValue: "0",
};

const voucherSlice = createSlice({
  name: "voucher",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    updateRewardValue: (state, action) => {
      state.rewardProductValue = action.payload;
      state.activeTab = getCurrentTab(state)
    },
    updateVoucherValue: (state, action) => {
      state.voucherValue = action.payload;
      state.activeTab = getCurrentTab(state)
    },
  },
});

export const { setActiveTab, updateRewardValue, updateVoucherValue } =
  voucherSlice.actions;
export default voucherSlice.reducer;
