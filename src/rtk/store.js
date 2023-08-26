import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishList from "./wishlist";

const store = configureStore({
    reducer : {
        product : cartSlice,
        wishlist : wishList,
    }
});

export default store;