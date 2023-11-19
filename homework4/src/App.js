import React, { useState } from 'react';

function App() {
  const handleCombine = () => {
    setCombined(Number(input1) + Number(input2));
  }
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [combined, setCombined] = useState('');
  return (
    <div>
      <input type="number" placeholder='enter the first number' value={input1} onChange={(e) => setInput1(e.target.value)} />
      <input type="number" placeholder='enter the second number' value={input2} onChange={(e) => setInput2(e.target.value)} />
      <button onClick={handleCombine}>Combine</button>
      <input type="number" placeholder='here is sum' value={combined} readOnly />
    </div>
  );
}
export default App;