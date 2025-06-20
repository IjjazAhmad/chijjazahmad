import React, { useEffect } from "react";

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      function sendToAnalytics(metric) {
        // Send to console for now, replace with your analytics service
        console.log("Web Vital:", metric.name, metric.value, metric.rating); // Example: Send to Google Analytics
        if (
          typeof window !== "undefined" &&
          typeof window.gtag !== "undefined"
        ) {
          window.gtag("event", metric.name, {
            event_category: "Web Vitals",
            value: Math.round(
              metric.name === "CLS" ? metric.value * 1000 : metric.value
            ),
            event_label: metric.id,
            non_interaction: true,
          });
        }
      }

      getCLS(sendToAnalytics);
      getFID(sendToAnalytics);
      getFCP(sendToAnalytics);
      getLCP(sendToAnalytics);
      getTTFB(sendToAnalytics);
    });

    // Monitor largest contentful paint
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log("LCP candidate:", lastEntry.startTime, lastEntry);
    });

    if ("PerformanceObserver" in window) {
      observer.observe({ type: "largest-contentful-paint", buffered: true });
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
