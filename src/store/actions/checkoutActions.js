// ! Checkout related actions
const cartDrawerOpen = () => {
  return {
    type: "CART_DRAWER_OPEN",
  };
};
const cartTooltipOpen = (data) => {
  return {
    type: "CART_TOOLTIP_OPEN",
    payload: data,
  };
};
const cartTooltipClose = () => {
  return {
    type: "CART_TOOLTIP_CLOSE",
  };
};
const addToCart = (data) => {
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
};
const addQtyToCart = (data) => {
  return {
    type: "ADD_QTY_TO_CART",
    payload: data,
  };
};
const removeQtyFromCart = (data) => {
  return {
    type: "REMOVE_QTY_FROM_CART",
    payload: data,
  };
};
const paymentSuccessful = () => {
  return {
    type: "PAYMENT_SUCCESSFUL",
  };
};
const setPromoCode = (data) => {
  return {
    type: "SET_PROMO_CODE",
    payload: data,
  };
};

const setAddress = (data) => {
  return { type: "SET_ADDRESS", payload: data };
};
export {
  cartDrawerOpen,
  cartTooltipOpen,
  cartTooltipClose,
  addToCart,
  addQtyToCart,
  removeQtyFromCart,
  paymentSuccessful,
  setPromoCode,
  setAddress,
};
