import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { options } from '../Const-files/dataFetch'
import Prodcast from './Prodcast'

const SongDetails = () => {

  const { name, id } = useParams()
  // console.log(name,id);
  const [songData,setSongData]=useState({})
  useEffect(() => {
    const url = `https://spotify23.p.rapidapi.com/${name}/?id=${id}`;
    const fetch_songdata = async () => {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setSongData(result)
    }
    fetch_songdata()
  }, [])
// console.log(songData.data.podcastUnionV2.episodesV2.items);
  return (
    
    <div className='details'>
       {/* {
        // songData.data.podcastUnionV2.episodesV2.items.map((ele)=>{
          console.log( songData.data.podcastUnionV2.episodesV2.items)
        // })
        } */}
      {name==='podcast_episodes'? <> 
      <h1>Prodcast</h1>
      <Prodcast data={songData}/>
      
      
      </> : name==='episode'? <>
      <h1>episode</h1>
      </> : name==='playlist'? <>
      <h1>playlist</h1>
      </> : null}
    </div>
  )
}

export default SongDetails