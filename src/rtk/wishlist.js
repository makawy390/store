import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    wishlist : 0,
    wishlistCart : [],
}
const WishList = createSlice({
    name : 'wishlist',
    initialState,
    reducers : {
        addWishList : (state , action)=>{
            const {title} = action.payload;
            const item = state.wishlistCart.findIndex(wish => wish.title === title);
            if (item >= 0) {
                state.wishlistCart[item].wishlist +=1;
            }
            else{
                const finalCart = action.payload;
                state.wishlistCart.push(finalCart);
                state.wishlist +=1;
            }
        },
        deleteWishList : (state, action)=>{
            state.wishlistCart = state.wishlistCart.filter((cart)=> cart.title !== action.payload);
            state.wishlist -=1;
        },
        clearAllWishList : (state)=>{
            state.wishlistCart = [];
            state.wishlist = 0;
        },
    }
})
export const {addWishList , deleteWishList , clearAllWishList} = WishList.actions;
export default WishList.reducer;