import { configureStore } from "@reduxjs/toolkit";
import voucherReducer from "./voucherSlice";

const store = configureStore({
  reducer: {
    voucher: voucherReducer,
  },
});

export default store;
