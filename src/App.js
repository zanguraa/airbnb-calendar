import React, { useState, useEffect } from "react";
import DateRangeModal from "./components/DateRangeModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // დაბლოკე გვერდის scroll
    } else {
      document.body.style.overflow = "auto"; // აღადგინე scroll
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "#f7f7f7",
      }}
    >
      <h1>Airbnb Calendar Clone</h1>
      <button
        onClick={() => setShowModal(true)}
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "16px",
          borderRadius: "8px",
          backgroundColor: "#ff385c",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Choose Dates
      </button>

      {showModal && <DateRangeModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
