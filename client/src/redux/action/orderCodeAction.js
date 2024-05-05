export const UPDATE_ORDER_CODE = "UPDATE_ORDER_CODE";

export const updateOrderCode = (data) => {
  return {
    type: UPDATE_ORDER_CODE,
    payload: data,
  };
};
