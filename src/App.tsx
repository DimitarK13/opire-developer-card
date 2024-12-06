import { useState } from 'react';

import Card from './components/Card';
import { developers } from './developers.ts';

function App() {
  const [developerIndex, setDeveloperIndex] = useState(0);

  const handleChange = (id: number) => {
    setDeveloperIndex(id);
  };

  return (
    <main>
      <Card developer={developers[developerIndex]} />

      <div className="developers">
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
