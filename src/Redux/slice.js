import { createSlice } from '@reduxjs/toolkit'

const spotify = createSlice({
    name: 'data-spotify',
    initialState: {
        data: [],
        albums: [],
        podcasts: [],
        episodes:[],
        PlayPodcast:[],
    },
    reducers: {
        spotifyData: (state, action) => {
            // console.log(action.payload);
            state.data = action.payload
        },
        spotifyAlbum: (state, action) => {
            state.albums = action.payload
        },
        spotifyPodcasts
        : (state, action) => {
            state.podcasts= action.payload
        },
        spotifyEpisodes: (state, action) => {
            state.episodes= action.payload
        },
        spotifyPlayPodcasts:(state,action)=>{
            state.PlayPodcast=action.payload
        }
    },
})
export const { spotifyData, spotifyAlbum, spotifyPodcasts, spotifyEpisodes,spotifyPlayPodcasts } = spotify.actions
export default spotify.reducer