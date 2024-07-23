// reducer

import { legacy_createStore } from "redux";

const cardReducer = (state = {
    cart: [{id:1, qty:20}],
}, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state, cart: [...state.cart, action.payload]
            };
        default:
            return state;
    }
}

// store
const store = legacy_createStore(cardReducer);
console.log("Oncreate Store: ", store.getState());
// subscribe
store.subscribe(() => {
    console.log("Store Change: ", store.getState());
})
// dispatch
const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 20 } }
store.dispatch(action1);

const action2 = { type: "ADD_TO_CART", payload: { id: 10, qty: 5 } }
store.dispatch(action2);