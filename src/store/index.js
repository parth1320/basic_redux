import { configureStore } from "@reduxjs/toolkit";

import countReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: {
    counter: countReducer,
    auth: authReducer,
  },
});

export default store;

// const countSubscription = () => {
//   store.getState();
// };

// store.subscribe(countSubscription);

// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });
