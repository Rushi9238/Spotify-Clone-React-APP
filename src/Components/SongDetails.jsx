import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { options } from '../Const-files/dataFetch'
import Prodcast from './Prodcast'
import { spotifyPlayPodcasts } from '../Redux/slice'
import { useDispatch } from 'react-redux'
import '../CSS_files/SongDetails.css'
import Episode from './Episode'
import Playlist from './Playlist'
const SongDetails = () => {
  const dispatch = useDispatch()

  const { name, id } = useParams()
  // console.log(name,id);
  useEffect(() => {
    const url = `https://spotify23.p.rapidapi.com/${name}/?id=${id}`;
    const fetch_songdata = async () => {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      // setSongData(result)
      if (name === 'podcast_episodes') {
        dispatch(spotifyPlayPodcasts(result.data.podcastUnionV2.episodesV2))
      }
      else if(name==='episode'){
        dispatch(spotifyPlayPodcasts(result.data.episodeUnionV2))
      }
      else if(name==='playlist'){
        dispatch(spotifyPlayPodcasts(result))
      }
    }
    fetch_songdata()
  }, [])
  // console.log(songData);
  return (

    <div className='details'>

      {name === 'podcast_episodes' ? <>
        <h1>Prodcast</h1>
        <Prodcast/>
      </> : name === 'episode' ? <>
        <h1>Episode</h1>
        <Episode/>
      </> : name === 'playlist' ? <>
        <h1>Playlist</h1>
        <Playlist/>
      </> : null}
    </div>
  )
}

export default SongDetails