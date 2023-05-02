import React from 'react'
import '../CSS_files/Home.css'
import { useSelector } from 'react-redux'
const Home = () => {
  const {data} = useSelector((select) => select.slice
  )
  console.log(data);
  return (
    <div className='home'>
      <div className="navbar">
        <button style={{ background: 'transparent' }}>Signup</button>
        <button>Login</button>
      </div>
      <div className="home-contain">
        <div className="st1-row ListRow">
          <h1>Albums</h1>
         
        </div>
        <div className="nd2-row ListRow">
          <h1>Episode</h1>
         
        </div>
        <div className="rd3-row ListRow">
          <h1 style={{ marginTop: '2rem' }}>Podcasts</h1>
          
        </div>
      </div>

    </div>
  )
}

export default Home