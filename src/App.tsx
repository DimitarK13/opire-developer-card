import { useState } from 'react';

import Card from './components/Card';
import { developers } from './developers.ts';

function App() {
  const [developerIndex, setDeveloperIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleChange = (id: number) => {
    setDeveloperIndex(id);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevValue) => !prevValue);
  };

  return (
    <main className={`theme--${isDarkMode ? 'dark' : 'light'}`}>
      <Card developer={developers[developerIndex]} />

      <div className="options">
        <h5>Toggle Dark Mode</h5>
        <button onClick={toggleDarkMode}>Toggle</button>

        <h5>Change Developer</h5>
        {developers.map((dev, index) => (
          <button key={index} onClick={() => handleChange(index)}>
            {dev.name}
          </button>
        ))}
      </div>
    </main>
  );
}

export default App;
