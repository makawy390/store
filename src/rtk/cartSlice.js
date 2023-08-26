import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    amountItem : 0,
    cartAdd : [],
    quantity : 1,
}
const cartSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {
        addCart : (state , action)=>{
            const {title} = action.payload;
            const item = state.cartAdd.findIndex(cart => cart.title === title);
            if (item >= 0) {
                state.cartAdd[item].amountItem +=1;
            }
            else{
                const finalCart = action.payload;
                state.cartAdd.push(finalCart);
                state.amountItem +=1;
            }

        },
        deleteCart : (state, action)=>{
            state.cartAdd = state.cartAdd.filter((cart)=> cart.title !== action.payload);
            state.amountItem -=1;
        },
        clearAllCart : (state)=>{
            state.cartAdd = [];
            state.amountItem = 0;
        },
        increaseQuantity : (state)=>{
            state.quantity +=1;
        },
        decreaseQuantity : (state)=>{
            if (state.quantity < 0) {
                state.quantity= 1;
            }
            else {
                state.quantity -=1;
            }
        //    state.totalPrice =  state.cartAdd.price / state.quantity;
        }

    }
})

export const {addCart , deleteCart , clearAllCart , increaseQuantity , decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;