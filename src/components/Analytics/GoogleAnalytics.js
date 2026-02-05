import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Replace with your actual GA4 Measurement ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== "undefined" && !window.gtag) {
    // Load the GA script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: true,
    });
  }
};

// Track page views
export const trackPageView = (url, title) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: title,
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track outbound links
export const trackOutboundLink = (url, label) => {
  trackEvent("click", "outbound_link", label || url);
};

// Track CTA clicks
export const trackCTAClick = (ctaName) => {
  trackEvent("click", "cta", ctaName);
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent("submit", "form", formName);
};

// Track resume downloads
export const trackResumeDownload = () => {
  trackEvent("download", "resume", "Ijjaz Ahmad Resume");
};

// Track project views
export const trackProjectView = (projectName) => {
  trackEvent("view", "project", projectName);
};

// Track social shares
export const trackSocialShare = (platform, url) => {
  trackEvent("share", "social", platform, url);
};

// Google Analytics Provider Component
const GoogleAnalytics = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    // Track page view on route change
    trackPageView(location.pathname + location.search, document.title);
  }, [location]);

  return children || null;
};

export default GoogleAnalytics;
