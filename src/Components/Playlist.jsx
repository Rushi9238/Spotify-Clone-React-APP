import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useSelector } from 'react-redux'
const Playlist = () => {
    const { PlayPodcast } = useSelector((select) => select.slice)
    console.log(PlayPodcast);
    return (
        <>
        {PlayPodcast !== undefined ? <div  className='playlist'>
            <div className="rightSide">
            <img src={PlayPodcast && PlayPodcast.images[0].url} alt="" />
               <div className="child">
               <h2>{PlayPodcast && PlayPodcast.name}</h2>
            <p>{PlayPodcast && PlayPodcast.description}</p>
            <p style={{fontSize:'1.3rem'}}> Followers : {PlayPodcast && PlayPodcast.followers.total}   <span> Songs : {PlayPodcast && PlayPodcast.tracks.items.length}</span></p> 
            <p>Artist name :{PlayPodcast && PlayPodcast.owner.display_name}</p>
               </div>
            </div>
            <PlayCircleIcon color="secondary" sx={{ fontSize: 70 }}/>
           
        </div> : ''}
        </>
    )
}

export default Playlist