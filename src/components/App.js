// App.js
import React, { useState } from 'react';
import './../styles/App.css';

const App = () => {
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [relationship, setRelationship] = useState('');

    const calculateRelationship = () => {
        // Convert names to arrays to manipulate
        let name1Array = name1.split('');
        let name2Array = name2.split('');

        // Iterate through each character of the first name
        for (let char of name1Array) {
            // Check if the character exists in the second name
            const index = name2Array.indexOf(char);
            if (index !== -1) {
                // If the character exists, remove one occurrence from both names
                name1Array.splice(name1Array.indexOf(char), 1);
                name2Array.splice(index, 1);
            }
        }

        // Calculate the sum of the lengths of the remaining characters in both names
        const totalLength = name1Array.length + name2Array.length;

        // Determine the relationship status based on the total length modulus 6
        const relationshipIndex = totalLength % 6;
        const relationships = ['Siblings', 'Friends', 'Love', 'Affection', 'Marriage', 'Enemy'];
        const relationshipStatus = relationships[relationshipIndex];

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
