import { useEffect, useState } from "react";
import "./App.scss";
import Routes from "./pages/Routes";
import PerformanceMonitor from "./components/Performance/PerformanceMonitor";

function App() {
  const [isApploading, setIsApploading] = useState(true);

  useEffect(() => {
    // Reduce loading time for better performance metrics
    const timer = setTimeout(() => {
      setIsApploading(false);
    }, 500); // Reduced from 2000ms to 500ms

    return () => clearTimeout(timer);
  }, []);

  if (isApploading) {
    return (
      <div className="loader-container">
        <div className="loader" aria-label="Loading website content">
          <span></span>
        </div>
        <div className="loading-text">Loading</div>
      </div>
    );
  }

  return (
    <>
      <PerformanceMonitor />
      <Routes />
    </>
  );
}

export default App;
