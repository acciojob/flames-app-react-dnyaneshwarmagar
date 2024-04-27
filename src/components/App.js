// App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [relationship, setRelationship] = useState('');
  
  const calculateRelationship = () => {
    // Convert names to lowercase to handle case sensitivity
    const lowerName1 = name1.toLowerCase();
    const lowerName2 = name2.toLowerCase();

    // Remove common letters
    const filteredName1 = lowerName1
      .split('')
      .filter(char => !lowerName2.includes(char))
      .join('');
    const filteredName2 = lowerName2
      .split('')
      .filter(char => !lowerName1.includes(char))
      .join('');

    // Calculate the sum of remaining string lengths
    const totalLength = filteredName1.length + filteredName2.length;

    // Determine the relationship status based on the sum
    const relationshipIndex = totalLength % 6;
    const relationships = ['Siblings', 'Friends', 'Love', 'Affection', 'Marriage', 'Enemy'];
    const relationshipStatus = relationships[relationshipIndex];

    setRelationship(relationshipStatus);
  };

  const clearInputs = () => {
    setName1('');
    setName2('');
    setRelationship('');
  };

  return (
    <div className="App" id='main'>
      <h1>FLAMES Game</h1>
      <input
        type="text"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        placeholder="Enter Name 1"
        data-testid="input1"
      />
      <input
        type="text"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        placeholder="Enter Name 2"
        data-testid="input2"
      />
      <button onClick={calculateRelationship} data-testid="calculate_relationship">Calculate Relationship</button>
      <button onClick={clearInputs} data-testid="clear">Clear</button>
      <h3 data-testid="answer">{relationship || 'Please enter valid input'}</h3>
    </div>
  );
};

export default App;
