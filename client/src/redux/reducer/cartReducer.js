import { ADD_CART_SUCCESSFUL } from "../action/cartAction";
import { DELETE_CART } from "../action/cartAction";

const INITIAL_STATE = {
  isAddCart: false,
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CART_SUCCESSFUL:
      console.log("check actions:", action);
      return {
        ...state,
        isAddCart: true,
      };
    case DELETE_CART:
      console.log("check actions:", action);
      return {
        ...state,
        isAddCart: false,
      };
    default:
      return state;
  }
};

export default cartReducer;
