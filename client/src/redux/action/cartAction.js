export const ADD_CART_SUCCESSFUL = "ADD_CART_SUCCESSFUL";
export const DELETE_CART = "DELETE_CART";

export const addCart = () => {
  return {
    type: ADD_CART_SUCCESSFUL,
  };
};
export const deleteCart = () => {
  return {
    type: DELETE_CART,
  };
};
