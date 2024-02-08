const ADD_CART = "ADD_CART";

export const addCart = (item) => {
  type: ADD_CART;
  payload: item;
};

const initialState = {
  cartItems: [],
};

const ItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        cartItems: [
          ...state.cartItems,
          {
            name: state.payload.name,
            price: state.payload.price,
            count: state.payload.count,
          },
        ],
      };
    default:
      return state;
  }
};

export default ItemReducer;
