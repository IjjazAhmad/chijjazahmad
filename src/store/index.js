import { configureStore } from "@reduxjs/toolkit";
import quoteRequestReducer from "./slices/quoteRequestSlice";
import subscriberReducer from "./slices/subscriberSlice";

const store = configureStore({
  reducer: {
    quoteRequest: quoteRequestReducer,
    subscriber: subscriberReducer,
  },
});

export default store;
