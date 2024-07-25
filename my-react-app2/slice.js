import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
        }
    },
});

const loginSlice = createSlice({
    name: "login",
    initialState: { status: false },
    reducers: {
        createSession(state, action) {
            state.status = true;
        }
    }
})

const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        cart: cartSlice.reducer
    },
})

console.log("oncreate store: ", store.getState());

store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 20 }));
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 10 }));
store.dispatch(loginSlice.actions.createSession());
