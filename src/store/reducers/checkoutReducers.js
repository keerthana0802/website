const initState = {
  cartDrawer: false,
  cartTooltip: false,
  cartTooltipData: "",
  cart: [],
  paid: [],
  promoCode: "",
  address: {},
};
const checkoutReducers = (state = initState, action) => {
  let currentCart;
  switch (action.type) {
    // ! Cart related reducers
    case "CART_DRAWER_OPEN":
      return { ...state, cartDrawer: !state.cartDrawer };
    case "CART_TOOLTIP_OPEN":
      return {
        ...state,
        cartTooltip: true,
        cartTooltipData: action.payload,
      };
    case "CART_TOOLTIP_CLOSE":
      return {
        ...state,
        cartTooltip: false,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartTooltip: true,
        cart: [...state.cart, action.payload],
      };
    case "ADD_QTY_TO_CART":
      currentCart = state.cart;
      currentCart.forEach((course) => {
        if (course.courseId === action.payload) {
          course.qty += 1;
        }
      });
      return window.location.pathname === "/checkout"
        ? { ...state, cartTooltip: false, cart: [...currentCart] }
        : { ...state, cartTooltip: true, cart: [...currentCart] };
    case "REMOVE_QTY_FROM_CART":
      currentCart = state.cart;
      let indexOfZero;
      currentCart.forEach((course, index) => {
        if (course.courseId === action.payload) {
          course.qty -= 1;
          if (course.qty === 0) {
            indexOfZero = index;
          }
        }
      });
      if (indexOfZero !== undefined) {
        currentCart.splice(indexOfZero, 1);
      }
      return window.location.pathname === "/checkout"
        ? { ...state, cartTooltip: false, cart: [...currentCart] }
        : { ...state, cartTooltip: true, cart: [...currentCart] };
    case "PAYMENT_SUCCESSFUL":
      window.location.href = "/payment-successful";
      return { ...state, paid: [...state.cart], cart: [] };
    case "SET_PROMO_CODE":
      return { ...state, promoCode: action.payload };
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    default:
      return state;
  }
};
export { checkoutReducers };
