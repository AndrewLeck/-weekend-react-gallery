import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';

function App() {
  const [galleryList, setGalleryList] = useState([]);

useEffect(() =>{
  getGalleryList()
},[])

  function getGalleryList(){
    axios({
      url:'/gallery',
      method: 'GET'
    })
    .then((results) => {
      setGalleryList(results.data)
      console.log('Get Sucessful', results.data)
    })
    .catch((err) => {
      console.log('failed to GET data', err)
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
          <div>
            <GalleryList/>
          </div>
      </div>
    );
}

export default App;
