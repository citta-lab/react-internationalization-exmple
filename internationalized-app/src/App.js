import React from 'react';

import Cards from './components/Cards';
import CardManager from './components/cards/CardManager';

function App() {
  return (
    <div >
      <header className="App-header">
        <title>Internationalization</title>
      </header>
      <Cards />
      <CardManager />
    </div>
  );
}

export default App;
