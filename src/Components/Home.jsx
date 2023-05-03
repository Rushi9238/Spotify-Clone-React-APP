import React from 'react'
import '../CSS_files/Home.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()

  const { albums, podcasts, episodes } = useSelector((select) => select.slice)
  // console.log(data);
  const handelDetils = (id) => {
    // const Sarr=id.split(':')
    // console.log(Sarr);
    // navigate(`/${Sarr[1]}/${Sarr[2]}`)
    // console.log(id);
    if (id[1] === 'playlist') {
      // console.log('playlist');
      navigate(`/${id[1]}/${id[2]}`)
    }
    else if (id[1] === 'episode') {
      // console.log('episodes');
      navigate(`/${id[1]}/${id[2]}`)
    }
    else if(id[1]==='show'){
        id[1]='podcast_episodes'
        // console.log(id[1]);
        navigate(`/${id[1]}/${id[2]}`)
    }


  }
  return (
    <div className='home'>
      <div className="navbar">
        <button style={{ background: 'transparent' }}>Signup</button>
        <button>Login</button>
      </div>
      <div className="home-contain">
        <div className="st1-row ListRow">
          <h1>Albums</h1>
          <div className="card-contain">
            {albums !== 'undefine' ? albums.map((ele) => {
              return <div onClick={() => {
                handelDetils(ele.data.uri.split(':'))
              }} className="card">
                <img src={ele.data.images.items[0].sources[0].url} alt="" />
                <h3>{ele.data.name}</h3>
              </div>
              // console.log();
            }) : null
            }
          </div>
        </div>
        <div className="nd2-row ListRow">
          <h1>Episode</h1>
          <div className="card-contain">
            {episodes !== 'undefine' ? episodes.map((ele) => {
              return <div onClick={() => {
                handelDetils(ele.data.uri.split(':'))
              }} className="card">
                <img src={ele.data.coverArt.sources[0].url} alt="" />
                <h3 style={{ fontSize: '1rem' }}>{ele.data.name}</h3>
              </div>
              // console.log(ele);
            }) : null
            }
          </div>
        </div>
        <div className="rd3-row ListRow">
          <h1 style={{ marginTop: '2rem' }}>Podcasts</h1>
          <div className="card-contain">
            {podcasts !== 'undefine' ? podcasts.map((ele) => {
              return <div onClick={() => {
                handelDetils(ele.data.uri.split(':'))
              }} className="card">
                <img src={ele.data.coverArt.sources[0].url} alt="" />
                <h3>{ele.data.name}</h3>
              </div>
              // console.log();
            }) : null
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home