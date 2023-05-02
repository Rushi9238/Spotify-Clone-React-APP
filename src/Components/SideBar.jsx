import React from 'react'
import '../CSS_files/SideBar.css'
import logo from '../Const-files/Images/spotifyLogo.png'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="logo">
        <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png' alt="" />
      </div>
      <div className="side-contain">
        <ul>
          <li><HomeIcon/> Home</li>
          <li> <SearchIcon/> Search</li>
          <li> <LibraryMusicIcon/> Your Library</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar