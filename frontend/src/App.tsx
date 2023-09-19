import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LabelButton from './components/LabelButton';
import LabelsComponent from './components/Labels'
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchData } from './redux/actions';


function App() {
  const labels = useAppSelector((state) => state.app.labels);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Dispatch the fetchData action when the app loads
    dispatch(fetchData());
  }, []);

  return (
    <div className="App">
      <h1>Spotify Album Catalog</h1>
      <LabelButton />
      {labels.length > 0 ?
        (
          <div className="labelsComponent">
            <LabelsComponent />
          </div>
        ) : (<p>No labels.</p>)
      }

    </div >
  );
}

export default App;
