import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../css/DateRangeModal.css";

export default function DateRangeModal({ onClose }) {
  const today = new Date();

  const [selectionRange, setSelectionRange] = useState([
    {
      startDate: undefined, // არ ვუთითებთ
      endDate: undefined,
      key: "selection",
    },
  ]);

  const clearDates = () => {
    setSelectionRange([
      {
        startDate: null,
        endDate: null,
        key: "selection",
      },
    ]);
  };

  const formatDate = (date) =>
    date
      ? date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
      : "Add date";

  const { startDate, endDate } = selectionRange[0];

  // ფუნქცია დღეების რაოდენობის დასათვლელად
  const getNights = () => {
    if (!startDate || !endDate) return 0;
    const diff = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    return diff;
  };

  const nights = getNights();
  const isValidSelection = startDate && endDate && nights >= 2;

  const handleReserve = () => {
    alert(
      `Reserved from ${formatDate(startDate)} to ${formatDate(
        endDate
      )} (${nights} nights)`
    );
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Select dates</h3>
        <p>Minimum stay: 2 nights</p>

        <div className="date-inputs">
          <div className="date-box">
            <label>Check-in</label>
            <span>{formatDate(startDate)}</span>
          </div>
          <div className="date-box">
            <label>Check-out</label>
            <span>{formatDate(endDate)}</span>
          </div>
        </div>

        <DateRange
          ranges={selectionRange}
          onChange={(item) => setSelectionRange([item.selection])}
          months={2}
          direction="horizontal"
          minDate={today}
          moveRangeOnFirstSelection={false}
        />

        {/* შეცდომის მიგნება */}
        {startDate && endDate && nights < 2 && (
          <div className="error-text">⚠️ Minimum stay is 2 nights</div>
        )}

        <div className="footer-buttons">
          <button onClick={clearDates}>Clear dates</button>
          <button onClick={onClose}>Close</button>

          {isValidSelection && (
            <button
              onClick={handleReserve}
              style={{ backgroundColor: "#ff385c", color: "white" }}
            >
              Reserve
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
