import { TYPES } from "../actions/shoppingActions";

export const shoppingInitlaState = {
    products: [
        {id: 1, name: "Product 1", price: 100, description: 'Product 1 description'},
        {id: 2, name: "Product 2", price: 200, description: 'Product 2 description'},
        {id: 3, name: "Product 3", price: 300, description: 'Product 3 description'},
        {id: 4, name: "Product 4", price: 400, description: 'Product 4 description'},
        {id: 5, name: "Product 5", price: 500, description: 'Product 5 description'},
        {id: 6, name: "Product 6", price: 600, description: 'Product 6 description'},
        {id: 7, name: "Product 7", price: 700, description: 'Product 7 description'},
        {id: 8, name: "Product 8", price: 800, description: 'Product 8 description'},
        {id: 9, name: "Product 9", price: 900, description: 'Product 9 description'},
    ],
    cart: [],
}

export const shoppingReducer = (state, action) => {
    switch (action.type) {
        case TYPES.ADD_TO_CART:
            return [...state, { id: 1, name: "Product 7", price: 700 }];
        case TYPES.REMOVE_ONE_FROM_CART:
            return {};
        case TYPES.REMOVE_ALL_FROM_CART:
            return {};
        case TYPES.CLEAR_CART:
            return {};
        default:
            // throw Error('Unknown action: ' + action.type);
            return state;
    }
}