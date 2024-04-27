// App.js
import React, { useState } from 'react';
import './../styles/App.css';

const App = () => {
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [relationship, setRelationship] = useState('');

    const calculateRelationship = () => {
        const lowerName1 = name1.toLowerCase();
        const lowerName2 = name2.toLowerCase();

        const filteredName1 = lowerName1.split('').filter(char => !lowerName2.includes(char)).join('');
        const filteredName2 = lowerName2.split('').filter(char => !lowerName1.includes(char)).join('');

        const totalLength = filteredName1.length + filteredName2.length;

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
            <h3 data-testid="answer">{relationship || 'Please enter valid input'}</h3>
        </div>
    );
};

export default App;
