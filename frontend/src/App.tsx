import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LabelsComponent from './components/LabelsComponent';
import AlbumsComponent from './components/AlbumsComponent';
import './App.css';
import { useAppDispatch } from './redux/hooks';
import { fetchData } from './redux/actions';


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Dispatch the fetchData action when the app loads
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Spotify Album Catalog</h1>
      <div className='dashboard'>
        <div className='albumsComponent'>
          <AlbumsComponent />
        </div>

        <div className='labelsComponent'>
          <LabelsComponent />
        </div>
      </div>
    </div >
  );
}

export default App;
