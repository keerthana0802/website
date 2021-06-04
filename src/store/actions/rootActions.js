// ! Checkout related actions
const cartDrawerOpen = () => {
  return {
    type: "CART_DRAWER_OPEN",
  };
};
const addToCart = (data) => {
  let cart = window.localStorage.cart
    ? JSON.parse(window.localStorage.cart)
    : [];
  window.localStorage.setItem("cart", JSON.stringify([...cart, data]));

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
  console.log("from actions");
  return {
    type: "PAYMENT_SUCCESSFUL",
  };
};
export {
  cartDrawerOpen,
  addToCart,
  addQtyToCart,
  removeQtyFromCart,
  paymentSuccessful,
};
