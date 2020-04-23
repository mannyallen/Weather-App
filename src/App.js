import React from 'react';
const api ={
  key: '0cf7838ca23d9afb24e138de0dce0293',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter a ZIP Code"
          ></input>
        </div>
      </main>
    </div>
  );
}

export default App;
