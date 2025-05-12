import React, { useState } from "react";
import DateRangeModal from "./components/DateRangeModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // სრულ ეკრანზე ცენტრი
        flexDirection: "column",
        backgroundColor: "#f7f7f7",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Airbnb Calendar Clone</h1>

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
