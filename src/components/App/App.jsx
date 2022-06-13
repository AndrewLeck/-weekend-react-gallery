import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';


function App() {
  const [galleryItems, setGalleryItems] = useState([]);

useEffect(() =>{
  getGalleryList()
},[])

  function getGalleryList(){
    axios({
      url:'/gallery',
      method: 'GET'
    })
    .then((results) => {
      setGalleryItems(results.data)
      console.log('Get Sucessful', results.data)
    })
    .catch((err) => {
      console.log('failed to GET data', err)
    })
  }
  function likeTheImage(id){
    console.log('In LikeTheImage')
    axios({
      url:`gallery/like/${id}`,
      method:'PUT'
    })
    .then((results) => {
      console.log('PUT sucessfull', results.data)
      getGalleryList()
    })
    .catch((err) => {
      console.log('PUT failed', err)
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
          <div>
            <GalleryList GalleryList={galleryItems} likeTheImage={likeTheImage}/>
          </div>
      </div>
    );
}

export default App;
