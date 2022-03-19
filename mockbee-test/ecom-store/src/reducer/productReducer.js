export const productReducer = (state, { type, payload }) => {
    switch (type) {
      case "RANGE":
        return {
          ...state,
          minPrice: payload
        };
      case "LOW_TO_HIGH":
        return {
          ...state,
          sortBy: type
        };
      case "HIGH_TO_LOW":
        return {
          ...state,
          sortBy: type
        };
      case "DISCOUNT":
        return {
          ...state,
          discount: payload
        };
      case "OUT_OF_STOCK_CHECK":
        return {
          ...state,
          includeOutOfStock: !state.includeOutOfStock
        };
      case "DELIVERY":
        return {
          ...state,
          fastDelivery: !state.fastDelivery
        };
      case "CATEGORY":
        return {
          ...state,
          category: payload
        };
      case "RATING":
        return {
          ...state,
          rating: payload
        };
      case "CLEAR":
        return {
          ...state,
          minPrice: 4000,
          includeOutOfStock: false,
          fastDelivery: false,
          discount: "",
          sortBy: "",
          category: "all",
          rating: ""
        };
  
      default:
        return state;
    }
  };
  