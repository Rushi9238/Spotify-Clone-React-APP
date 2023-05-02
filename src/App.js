import React, { useEffect, useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import { spotifyData } from './Redux/slice';
import { useDispatch } from 'react-redux';
import './App.css';
import { options } from './Const-files/dataFetch';
import SideBar from './Components/SideBar';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  const dispatch=useDispatch();
 useEffect(()=>{
  const mainData= async(setData)=>{
    const url='https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=10'
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        dispatch(spotifyData(result))
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
    </Routes>
    </div>
      <Footer/>
    </div>
  );
}

export default App;
