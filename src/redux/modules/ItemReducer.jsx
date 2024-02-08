const ADD_ITEM1 = "ADD_ITEM1";
const ADD_ITEM2 = "ADD_ITEM2";

const initialState = {
  item1name: "",
  item1price: "",
  item2name: "",
  item2price: "",
};

export const addItem1 = (name, price) => {
  type: ADD_ITEM1;
  name: name;
  price: price;
};
function ItemReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM1:
      return {
        ...state,
        item1name: state.name,
        item1price: state.price,
      };
    case ADD_ITEM2:
      return {
        ...state,
        item2name: state.name,
        item2price: state.price,
      };
    default:
      return state;
  }
}

export default ItemReducer;
