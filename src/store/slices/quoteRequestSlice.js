import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../../config/api";

// Async thunk to submit a quote request
export const submitQuoteRequest = createAsyncThunk(
  "quoteRequest/submit",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch(API_ENDPOINTS.QUOTE_REQUESTS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          projectType: formData.projectType || undefined,
          budgetRange: formData.budget || undefined,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        return rejectWithValue(
          data.message || "Failed to submit quote request",
        );
      }

      return data;
    } catch (error) {
      return rejectWithValue(
        error.message || "Network error. Please try again.",
      );
    }
  },
);

const quoteRequestSlice = createSlice({
  name: "quoteRequest",
  initialState: {
    loading: false,
    success: false,
    error: null,
    message: null,
  },
  reducers: {
    resetQuoteStatus: (state) => {
      state.success = false;
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitQuoteRequest.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
        state.message = null;
      })
      .addCase(submitQuoteRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
      })
      .addCase(submitQuoteRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { resetQuoteStatus } = quoteRequestSlice.actions;
export default quoteRequestSlice.reducer;
