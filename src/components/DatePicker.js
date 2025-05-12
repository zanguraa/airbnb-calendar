import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function DatePicker({ startDateProp, endDateProp }) {
  const today = new Date();

  const [state, setState] = useState([
    {
      startDate: startDateProp || today,
      endDate: endDateProp || today,
      key: "selection",
    },
  ]);

  return (
    <div style={{ padding: 20 }}>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        months={2}
        direction="horizontal"
        showDateDisplay={true}
        minDate={today} // ❗ ეს ზღუდავს წარსულ თარიღებზე არჩევას
      />

      <div style={{ marginTop: "1rem" }}>
        <strong>Selected Range:</strong>
        <br />
        {state[0].startDate.toDateString()} → {state[0].endDate.toDateString()}
      </div>
    </div>
  );
}
