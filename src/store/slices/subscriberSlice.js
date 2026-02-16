import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../../config/api";

// Async thunk to subscribe to newsletter
export const subscribeNewsletter = createAsyncThunk(
  "subscriber/subscribe",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch(API_ENDPOINTS.SUBSCRIBERS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name || undefined,
          email: formData.email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message || "Failed to subscribe");
      }

      return data;
    } catch (error) {
      return rejectWithValue(
        error.message || "Network error. Please try again.",
      );
    }
  },
);

const subscriberSlice = createSlice({
  name: "subscriber",
  initialState: {
    loading: false,
    success: false,
    alreadySubscribed: false,
    error: null,
    message: null,
  },
  reducers: {
    resetSubscribeStatus: (state) => {
      state.success = false;
      state.alreadySubscribed = false;
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(subscribeNewsletter.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.alreadySubscribed = false;
        state.error = null;
        state.message = null;
      })
      .addCase(subscribeNewsletter.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success) {
          state.success = true;
          state.message = action.payload.message;
        } else {
          // Already subscribed
          state.alreadySubscribed = true;
          state.message = action.payload.message;
        }
      })
      .addCase(subscribeNewsletter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { resetSubscribeStatus } = subscriberSlice.actions;
export default subscriberSlice.reducer;
