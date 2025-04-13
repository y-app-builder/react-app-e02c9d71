import React, { useState, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('black');

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
    setColor(getRandomColor());
  }, []);

  const getRandomColor = useCallback(() => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1 style={{ color, fontSize: '48px' }}>{count}</h1>
      <button onClick={incrementCount} style={{ padding: '10px 20px', fontSize: '18px', marginTop: '20px' }}>
        Click me
      </button>
    </div>
  );
}

export default App;