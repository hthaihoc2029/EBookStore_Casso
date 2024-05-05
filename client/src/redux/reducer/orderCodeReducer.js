import { UPDATE_ORDER_CODE } from "../action/orderCodeAction";

const INITIAL_STATE = {
  orderCode: -1,
};
const orderCodeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_ORDER_CODE:
      console.log("check actions:", action);
      return {
        ...state,
        orderCode: action?.payload,
      };
    default:
      return state;
  }
};

export default orderCodeReducer;
