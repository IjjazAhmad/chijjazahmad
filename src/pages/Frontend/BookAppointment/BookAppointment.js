import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getAvailableSlots,
  bookAppointment,
  resetAppointmentStatus,
  clearSlots,
} from "../../../store/slices/appointmentSlice";
import {
  trackFormSubmission,
  trackCTAClick,
} from "../../../components/Analytics/GoogleAnalytics";
import SEOHead from "../../../components/SEO/SEOHead";

const BookAppointment = () => {
  const dispatch = useDispatch();
  const {
    loading: isSubmitting,
    slotsLoading,
    success,
    error,
    availableSlots,
    isAvailable,
    unavailableReason,
  } = useSelector((state) => state.appointment);

  // Multi-step state: 'select-time' | 'enter-details' | 'confirmed'
  const [step, setStep] = useState("select-time");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Reset on success
  useEffect(() => {
    if (success) {
      trackFormSubmission("appointment_booking");
      setStep("confirmed");
      const timer = setTimeout(() => {
        dispatch(resetAppointmentStatus());
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [success, dispatch]);

  // Auto-clear error
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => dispatch(resetAppointmentStatus()), 10000);
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  // Fetch slots when date selected
  useEffect(() => {
    if (selectedDate) {
      const dateStr = formatDateToISO(selectedDate);
      dispatch(getAvailableSlots(dateStr));
      setSelectedSlot("");
    }
  }, [selectedDate, dispatch]);

  // Calendar helpers
  const formatDateToISO = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const isDateDisabled = (date) => {
    if (!date) return true;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    if (date < tomorrow) return true;
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 2);
    if (date > maxDate) return true;
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) return true;
    return false;
  };

  const isDateSelected = (date) => {
    if (!date || !selectedDate) return false;
    return formatDateToISO(date) === formatDateToISO(selectedDate);
  };

  const handleDateClick = useCallback((date) => {
    if (!isDateDisabled(date)) {
      setSelectedDate(date);
      trackCTAClick("select_date");
    }
  }, []);

  const handleSlotSelect = useCallback((slot) => {
    setSelectedSlot(slot);
    trackCTAClick("select_time_slot");
  }, []);

  const handleContinue = () => {
    if (selectedSlot) {
      setStep("enter-details");
    }
  };

  const handleBack = () => {
    setStep("select-time");
  };

  const handleStartOver = () => {
    reset();
    setStep("select-time");
    setSelectedDate(null);
    setSelectedSlot("");
    dispatch(clearSlots());
    dispatch(resetAppointmentStatus());
  };

  const onSubmit = useCallback(
    (data) => {
      if (!selectedSlot || !selectedDate) return;
      dispatch(
        bookAppointment({
          clientName: data.clientName,
          clientEmail: data.clientEmail,
          clientPhone: data.clientPhone,
          date: formatDateToISO(selectedDate),
          timeSlot: selectedSlot,
          meetingType: data.meetingType,
          topic: data.topic,
          description: data.description,
        }),
      );
    },
    [dispatch, selectedDate, selectedSlot],
  );

  const monthYear = useMemo(() => {
    return currentMonth.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  }, [currentMonth]);

  const days = useMemo(() => getDaysInMonth(currentMonth), [currentMonth]);

  const goToPrevMonth = () => {
    const prev = new Date(currentMonth);
    prev.setMonth(prev.getMonth() - 1);
    const today = new Date();
    if (
      prev.getMonth() >= today.getMonth() ||
      prev.getFullYear() > today.getFullYear()
    ) {
      setCurrentMonth(prev);
    }
  };

  const goToNextMonth = () => {
    const next = new Date(currentMonth);
    next.setMonth(next.getMonth() + 1);
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 2);
    if (next <= maxDate) {
      setCurrentMonth(next);
    }
  };

  const formatSelectedDate = () => {
    if (!selectedDate) return "";
    return selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const bookingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Book a Meeting with Ijjaz Ahmad",
    description:
      "Schedule a 30-minute consultation meeting with Ijjaz Ahmad to discuss your web development projects.",
    provider: {
      "@type": "Person",
      name: "Ijjaz Ahmad",
      email: "ijjazahmad@hotmail.com",
    },
    areaServed: "Worldwide",
  };

  // Confirmed view
  if (step === "confirmed") {
    return (
      <div className="calendly-page">
        <SEOHead
          title="Booking Confirmed | Ijjaz Ahmad"
          description="Your meeting has been scheduled successfully."
          canonical="/book-appointment"
          schemaData={bookingSchema}
        />
        <div className="calendly-container">
          <div className="calendly-confirmed">
            <div className="confirmed-icon">
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <h2>You're Scheduled!</h2>
            <p className="confirmed-subtitle">
              A calendar invitation has been sent to your email address.
            </p>
            <div className="confirmed-details">
              <div className="detail-item">
                <i className="fa-solid fa-calendar"></i>
                <span>{formatSelectedDate()}</span>
              </div>
              <div className="detail-item">
                <i className="fa-solid fa-clock"></i>
                <span>{selectedSlot}</span>
              </div>
              <div className="detail-item">
                <i className="fa-solid fa-video"></i>
                <span>Web conferencing details to follow</span>
              </div>
            </div>
            <button className="btn-schedule-another" onClick={handleStartOver}>
              Schedule Another Meeting
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="calendly-page">
      <SEOHead
        title="Book a Meeting - 30 Min Free Consultation | Ijjaz Ahmad"
        description="Schedule a free 30-minute consultation with Ijjaz Ahmad. Discuss your web development, mobile app, or software project."
        keywords="book meeting developer, schedule consultation, free developer consultation"
        canonical="/book-appointment"
        schemaData={bookingSchema}
      />

      <div className="calendly-container">
        <div className="calendly-widget">
          {/* Left Sidebar - Host Info */}
          <div className="calendly-sidebar">
            <div className="host-avatar">
              <img
                src="/images/me.png"
                alt="Ijjaz Ahmad"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://ui-avatars.com/api/?name=Ijjaz+Ahmad&background=6366f1&color=fff&size=128";
                }}
              />
            </div>
            <p className="host-name">Ijjaz Ahmad</p>
            <h1 className="meeting-title">30 Minute Meeting</h1>

            <div className="meeting-info">
              <div className="info-item">
                <i className="fa-regular fa-clock"></i>
                <span>30 min</span>
              </div>
              <div className="info-item">
                <i className="fa-solid fa-video"></i>
                <span>Google Meet / Zoom</span>
              </div>
              <div className="info-item">
                <i className="fa-solid fa-globe"></i>
                <span>Pakistan Standard Time</span>
              </div>
            </div>

            <p className="meeting-description">
              Let's discuss your project requirements, technical architecture,
              timeline, and how I can help bring your vision to life.
            </p>

            {selectedDate && selectedSlot && (
              <div className="selected-datetime">
                <div className="datetime-item">
                  <i className="fa-solid fa-calendar-check"></i>
                  <span>{formatSelectedDate()}</span>
                </div>
                <div className="datetime-item">
                  <i className="fa-solid fa-clock"></i>
                  <span>{selectedSlot}</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Content */}
          <div className="calendly-content">
            {step === "select-time" ? (
              <>
                <h2 className="content-title">Select a Date & Time</h2>

                <div className="calendar-slots-wrapper">
                  {/* Calendar */}
                  <div className="calendar-section">
                    <div className="calendar-header">
                      <button
                        className="nav-btn"
                        onClick={goToPrevMonth}
                        aria-label="Previous month"
                      >
                        <i className="fa-solid fa-chevron-left"></i>
                      </button>
                      <span className="month-year">{monthYear}</span>
                      <button
                        className="nav-btn"
                        onClick={goToNextMonth}
                        aria-label="Next month"
                      >
                        <i className="fa-solid fa-chevron-right"></i>
                      </button>
                    </div>

                    <div className="calendar-grid">
                      <div className="weekdays">
                        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                          (day) => (
                            <div key={day} className="weekday">
                              {day}
                            </div>
                          ),
                        )}
                      </div>
                      <div className="days">
                        {days.map((date, index) => (
                          <button
                            key={index}
                            className={`day-btn ${!date ? "empty" : ""} ${
                              isDateDisabled(date) ? "disabled" : ""
                            } ${isDateSelected(date) ? "selected" : ""}`}
                            onClick={() => handleDateClick(date)}
                            disabled={!date || isDateDisabled(date)}
                          >
                            {date ? date.getDate() : ""}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Time Slots */}
                  {selectedDate && (
                    <div className="slots-section">
                      <h3 className="slots-title">
                        {selectedDate.toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "short",
                          day: "numeric",
                        })}
                      </h3>

                      {slotsLoading ? (
                        <div className="slots-loading">
                          <div className="spinner"></div>
                          <p>Loading available times...</p>
                        </div>
                      ) : !isAvailable ? (
                        <div className="slots-empty">
                          <i className="fa-regular fa-calendar-xmark"></i>
                          <p>{unavailableReason || "Not available"}</p>
                        </div>
                      ) : availableSlots.length === 0 ? (
                        <div className="slots-empty">
                          <i className="fa-regular fa-calendar-xmark"></i>
                          <p>No available times</p>
                        </div>
                      ) : (
                        <div className="slots-list">
                          {availableSlots.map((slot) => (
                            <button
                              key={slot}
                              className={`slot-btn ${
                                selectedSlot === slot ? "selected" : ""
                              }`}
                              onClick={() => handleSlotSelect(slot)}
                            >
                              {selectedSlot === slot ? (
                                <>
                                  <span>{slot}</span>
                                  <button
                                    className="confirm-btn"
                                    onClick={handleContinue}
                                  >
                                    Confirm
                                  </button>
                                </>
                              ) : (
                                <span>{slot}</span>
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </>
            ) : (
              /* Enter Details Form */
              <div className="details-form">
                <button className="back-btn" onClick={handleBack}>
                  <i className="fa-solid fa-arrow-left"></i>
                  Back
                </button>

                <h2 className="content-title">Enter Details</h2>

                {error && (
                  <div className="alert alert-error">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label htmlFor="clientName">Name *</label>
                    <input
                      type="text"
                      id="clientName"
                      className={errors.clientName ? "error" : ""}
                      placeholder="Your full name"
                      {...register("clientName", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                    />
                    {errors.clientName && (
                      <span className="error-msg">
                        {errors.clientName.message}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="clientEmail">Email *</label>
                    <input
                      type="email"
                      id="clientEmail"
                      className={errors.clientEmail ? "error" : ""}
                      placeholder="your@email.com"
                      {...register("clientEmail", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.clientEmail && (
                      <span className="error-msg">
                        {errors.clientEmail.message}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="clientPhone">Phone (Optional)</label>
                    <input
                      type="tel"
                      id="clientPhone"
                      placeholder="+1 234 567 8900"
                      {...register("clientPhone")}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="meetingType">Meeting Platform *</label>
                    <select
                      id="meetingType"
                      className={errors.meetingType ? "error" : ""}
                      {...register("meetingType", {
                        required: "Please select a platform",
                      })}
                    >
                      <option value="">Select platform</option>
                      <option value="google_meet">Google Meet</option>
                      <option value="zoom">Zoom</option>
                    </select>
                    {errors.meetingType && (
                      <span className="error-msg">
                        {errors.meetingType.message}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="topic">
                      What would you like to discuss? *
                    </label>
                    <input
                      type="text"
                      id="topic"
                      className={errors.topic ? "error" : ""}
                      placeholder="e.g., New website project, App development"
                      {...register("topic", {
                        required: "Topic is required",
                        minLength: {
                          value: 5,
                          message: "Topic must be at least 5 characters",
                        },
                      })}
                    />
                    {errors.topic && (
                      <span className="error-msg">{errors.topic.message}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">
                      Additional Information (Optional)
                    </label>
                    <textarea
                      id="description"
                      rows="3"
                      placeholder="Share any additional details about your project..."
                      {...register("description")}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="btn-spinner"></span>
                        Scheduling...
                      </>
                    ) : (
                      "Schedule Event"
                    )}
                  </button>

                  <p className="form-note">
                    By proceeding, you confirm that you have read and agree to
                    our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="calendly-footer">
          <a href="https://chijjazahmad.vercel.app" className="powered-by">
            Powered by <strong>Ijjaz Ahmad</strong>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
