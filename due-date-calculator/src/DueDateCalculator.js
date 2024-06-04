// src/DueDateCalculator.js
import React, { useState } from 'react';

const DueDateCalculator = () => {
  const [startDate, setStartDate] = useState('');
  const [days, setDays] = useState('');
  const [dueDate, setDueDate] = useState('');

  const calculateDueDate = () => {
    if (startDate && days) {
      const start = new Date(startDate);
      const result = new Date(start);
      result.setDate(start.getDate() + parseInt(days, 10));
      setDueDate(result.toDateString());
    }
  };

  return (
    <div>
      <h1>Due Date Calculator</h1>
      <div>
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Number of Days:
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateDueDate}>Calculate Due Date</button>
      {dueDate && (
        <div>
          <h2>Due Date: {dueDate}</h2>
        </div>
      )}
    </div>
  );
};

export default DueDateCalculator;
