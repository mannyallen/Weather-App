import React, {useState} from "react";
const api = {
  key: "0cf7838ca23d9afb24e138de0dce0293",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === 'Enter'){
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        setQuery('');
        console.log(result);
      });
    }
  }
  return (
    <div className="app">
      <main>
        <div className="search-parent">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter a ZIP Code"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          ></input>
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-parent">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date"></div>
          </div>
          <div className="weather-parent">
            <div className="temp">{Math.round(weather.main.temp)}°F</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
