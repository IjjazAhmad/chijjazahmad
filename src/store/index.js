import { configureStore } from "@reduxjs/toolkit";
import quoteRequestReducer from "./slices/quoteRequestSlice";
import subscriberReducer from "./slices/subscriberSlice";
import appointmentReducer from "./slices/appointmentSlice";

const store = configureStore({
  reducer: {
    quoteRequest: quoteRequestReducer,
    subscriber: subscriberReducer,
    appointment: appointmentReducer,
  },
});

export default store;
