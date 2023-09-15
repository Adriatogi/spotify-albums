import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [labels, setLabels] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy
    fetch("/ping").then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        setMessage(data.message);
      })
    );
  }, []);

  return (
    <div className="App">
      <h1>Spotify Album Catalog</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
