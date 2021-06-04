const initState = {
  cartDrawer: false,
  cart: window.localStorage.cart ? JSON.parse(window.localStorage.cart) : [],
  paid: window.localStorage.paid ? JSON.parse(window.localStorage.paid) : [],
};

const rootReducer = (state = initState, action) => {
  let currentCart;
  switch (action.type) {
    // ! Cart related reducers
    case "CART_DRAWER_OPEN":
      return { ...state, cartDrawer: !state.cartDrawer };
    case "ADD_TO_CART":
      return {
        ...state,
        cartDrawer: true,
        cart: [...state.cart, action.payload],
      };
    case "ADD_QTY_TO_CART":
      currentCart = state.cart;
      currentCart.forEach((course) => {
        if (course.courseId === action.payload) {
          course.qty += 1;
        }
      });
      window.localStorage.setItem("cart", JSON.stringify([...currentCart]));
      return window.location.pathname === "/checkout"
        ? { ...state, cartDrawer: false, cart: [...currentCart] }
        : { ...state, cartDrawer: true, cart: [...currentCart] };
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
      window.localStorage.setItem("cart", JSON.stringify([...currentCart]));
      return window.location.pathname === "/checkout"
        ? { ...state, cartDrawer: false, cart: [...currentCart] }
        : { ...state, cartDrawer: true, cart: [...currentCart] };
    case "PAYMENT_SUCCESSFUL":
      window.localStorage.setItem("paid", JSON.stringify([...state.cart]));
      window.localStorage.setItem("cart", JSON.stringify([]));
      return { ...state, paid: [...state.cart], cart: [] };
    default:
      return state;
  }
};

export default rootReducer;
