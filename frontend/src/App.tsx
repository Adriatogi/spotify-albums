import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LabelButton from './components/LabelButton';
import './App.css';
import Card from "react-bootstrap/Card"

function App() {
  const [labels, setLabels] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const updateLabels = (newLabels: string[]) => {
    setLabels(newLabels);
  };

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
      <LabelButton labelList={labels} updateLabels={updateLabels} />
      {labels.length > 0 ?
        (
          <div className="labels"> {
            labels.map((label, index) =>
              <React.Fragment key={index}>
                <Card className="text-center" style={{ width: '5rem' }}>
                  <Card.Text>{label}</Card.Text>
                </Card>
              </React.Fragment>
            )
          } </div>
        ) : (<p>No labels.</p>)
      }

    </div >
  );
}

export default App;
