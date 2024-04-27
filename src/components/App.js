// App.js
import React, { useState } from 'react';
import './../styles/App.css';

const App = () => {
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [relationship, setRelationship] = useState('');

    const calculateRelationship = () => {
         // Create frequency maps for both names
  const frequencyMap1 = countCharacterOccurrences(name1);
  const frequencyMap2 = countCharacterOccurrences(name2);

        let filteredName1 = '';
  let filteredName2 = '';

  for (let char in frequencyMap1) {
    if (frequencyMap2[char]) {
      const minOccurrence = Math.min(frequencyMap1[char], frequencyMap2[char]);
      filteredName1 += char.repeat(minOccurrence);
      filteredName2 += char.repeat(minOccurrence);
    } else {
      filteredName1 += char.repeat(frequencyMap1[char]);
    }
  }

  for (let char in frequencyMap2) {
    if (!frequencyMap1[char]) {
      filteredName2 += char.repeat(frequencyMap2[char]);
    }
  }

  // Calculate the sum of the lengths of the remaining strings
  const totalLength = filteredName1.length + filteredName2.length;

  // Determine the relationship status based on the modulus by 6
  const relationshipIndex = totalLength % 6;
  const relationships = ['Siblings', 'Friends', 'Love', 'Affection', 'Marriage', 'Enemy'];
  const relationshipStatus = relationships[relationshipIndex];

    // Update the state with the new relationshipStatus
    setRelationship(relationshipStatus);
};

const countCharacterOccurrences = (str) => {
    const frequencyMap = {};
    for (let char of str) {
      frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }
    return frequencyMap;
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
            name="name1"
            data-testid="input1"
        />
        <input
            type="text"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            placeholder="Enter Name 2"
            name="name2"
            data-testid="input2"
        />
        <button onClick={calculateRelationship} data-testid="calculate_relationship">Calculate Relationship</button>
        <button onClick={clearInputs} data-testid="clear">Clear</button>
        <h3 data-testid="answer">{relationship}</h3>
    </div>
);
};

export default App;
