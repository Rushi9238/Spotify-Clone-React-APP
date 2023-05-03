import React, { useEffect, useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import { spotifyData,spotifyAlbum,spotifyPodcasts,spotifyEpisodes } from './Redux/slice';
import { useDispatch } from 'react-redux';
import './App.css';
import { options } from './Const-files/dataFetch';
import SideBar from './Components/SideBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import SongDetails from './Components/SongDetails';


function App() {
  const dispatch=useDispatch();
 useEffect(()=>{
  const mainData= async()=>{
    const url='https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=10'
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        const arrayOfObj = Object.entries(result).map((e) => ( { [e[0]]: e[1] } ));
        dispatch(spotifyData(arrayOfObj))
      
        dispatch(spotifyAlbum(arrayOfObj[4].playlists.items))
        dispatch(spotifyEpisodes(arrayOfObj[2].episodes.items))
        dispatch(spotifyPodcasts(arrayOfObj[5].podcasts.items))
        console.log(arrayOfObj);
    } catch (error) {
        console.error(error);
    }
}
mainData()
 },[])
  return (
    <div className="App">
     
    <div className='App-top'>
    <SideBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:name/:id' element={<SongDetails/>}/>
    </Routes>
    </div>
      
    </div>
  );
}

export default App;
