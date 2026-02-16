import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../../config/api";

// Async thunk to get available slots for a date
export const getAvailableSlots = createAsyncThunk(
  "appointment/getAvailableSlots",
  async (date, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${API_ENDPOINTS.APPOINTMENTS}?date=${date}`,
      );
      const data = await response.json();

      if (!response.ok || !data.success) {
        return rejectWithValue(data.message || "Failed to get available slots");
      }

      return data.data;
    } catch (error) {
      return rejectWithValue(
        error.message || "Network error. Please try again.",
      );
    }
  },
);

// Async thunk to book an appointment
export const bookAppointment = createAsyncThunk(
  "appointment/book",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch(API_ENDPOINTS.APPOINTMENTS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName: formData.clientName,
          clientEmail: formData.clientEmail,
          clientPhone: formData.clientPhone || undefined,
          date: formData.date,
          timeSlot: formData.timeSlot,
          meetingType: formData.meetingType,
          topic: formData.topic,
          description: formData.description || undefined,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        return rejectWithValue(data.message || "Failed to book appointment");
      }

      return data;
    } catch (error) {
      return rejectWithValue(
        error.message || "Network error. Please try again.",
      );
    }
  },
);

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    loading: false,
    slotsLoading: false,
    success: false,
    error: null,
    message: null,
    availableSlots: [],
    allSlots: [],
    bookedSlots: [],
    isAvailable: true,
    unavailableReason: null,
  },
  reducers: {
    resetAppointmentStatus: (state) => {
      state.success = false;
      state.error = null;
      state.message = null;
    },
    clearSlots: (state) => {
      state.availableSlots = [];
      state.allSlots = [];
      state.bookedSlots = [];
      state.isAvailable = true;
      state.unavailableReason = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get available slots
      .addCase(getAvailableSlots.pending, (state) => {
        state.slotsLoading = true;
        state.error = null;
      })
      .addCase(getAvailableSlots.fulfilled, (state, action) => {
        state.slotsLoading = false;
        state.availableSlots = action.payload.slots || [];
        state.allSlots = action.payload.allSlots || [];
        state.bookedSlots = action.payload.bookedSlots || [];
        state.isAvailable = action.payload.available;
        state.unavailableReason = action.payload.reason || null;
      })
      .addCase(getAvailableSlots.rejected, (state, action) => {
        state.slotsLoading = false;
        state.error = action.payload || "Failed to get available slots";
      })
      // Book appointment
      .addCase(bookAppointment.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
        state.message = null;
      })
      .addCase(bookAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
      })
      .addCase(bookAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { resetAppointmentStatus, clearSlots } = appointmentSlice.actions;
export default appointmentSlice.reducer;
