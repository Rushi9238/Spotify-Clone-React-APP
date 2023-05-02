import { createSlice } from '@reduxjs/toolkit'

const spotify = createSlice({
    name: 'data-spotify',
    initialState: {
        data: [],
       
    },
    reducers: {
        spotifyData: (state, action) => {
            // console.log(action.payload);
            state.data = action.payload
        },
       
    },
})
export const { spotifyData } = spotify.actions
export default spotify.reducer