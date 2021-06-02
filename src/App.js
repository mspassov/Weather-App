import React, { useState } from 'react';

const api = {
  key: "fcb3f16c75993628e7a50ba4daea89f8",
  base: "http://api.openweathermap.org/data/2.5/"
}

const App = () => {
  let date = String(new window.Date());
  date = date.slice(0, 15);

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  
  const search = (e) =>{
    if(e.key === 'Enter'){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
      });
    }
  }

  return(
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input className="search-bar" type="text" placeholder="Search..." 
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{date}</div>
            </div>
            <div className="weather-box">
              <div className="temperature">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ): ('')}
        
      </main>
    </div>
  );
}

export default App;
