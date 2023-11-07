// InputComponent.js
import React, { useState } from 'react';

export const MainInput = () =>  {
  const [selectedOption, setSelectedOption] = useState(''); // State to hold the selected option

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // Update the selected option when the user makes a choice
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}