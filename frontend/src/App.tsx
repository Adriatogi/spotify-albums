import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LabelsComponent from './components/LabelsComponent';
import AlbumsComponent from './components/AlbumsComponent';
import UserComponent from './components/UserComponent';
import './styles.css';
import { useAppDispatch } from './redux/hooks';
import { fetchLabels, fetchUserAlbums } from './redux/actions';


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Dispatch actions when the app loads
    dispatch(fetchLabels());
    dispatch(fetchUserAlbums('0'));
  }, [dispatch]);

  return (
    <div className="App">
      <h1 className='header'>Spotify Album Catalog</h1>
      <div className='dashboard'>
        <div className='albumsComponent'>
          <AlbumsComponent />
        </div>

        <div className='labelsComponent'>
          <LabelsComponent />
        </div>
      </div>
      <div>
        <UserComponent />
      </div>
    </div >
  );
}

export default App;
