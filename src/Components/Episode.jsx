import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useSelector } from 'react-redux'
const Episode = () => {
      const {PlayPodcast}=useSelector((select)=>select.slice)
      // console.log(typeof(PlayPodcast));

  return (
  <>
   {PlayPodcast ? <div style={{backgroundImage:`url(${ PlayPodcast.coverArt.sources[2].url})`}} className='episode'>
        <PlayCircleIcon color="secondary" sx={{ fontSize: 70 }}/>
        <h1>{PlayPodcast && PlayPodcast.name} <span style={{marginLeft:'3rem',color:'white',fontSize:'1.5rem'}}>{new Date(PlayPodcast && PlayPodcast.duration.totalMilliseconds).toISOString().slice(11, 19)}</span> </h1> 
</div> : <h1>Data Not Found</h1>}
  </>
  )
}

export default Episode