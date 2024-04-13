import { createContext, useReducer } from "react";

// this is for save the state
const TotalPriceContext = createContext(null);

// this is for save the action
const TotalPriceDispatchContext = createContext(null);

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        total: action.payload.total,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

function TotalPriceProvider({ children }) {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
}

export { TotalPriceContext, TotalPriceDispatchContext, TotalPriceProvider };
