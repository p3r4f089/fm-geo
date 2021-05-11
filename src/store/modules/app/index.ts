import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IArtists, ITrack } from 'types'

const appSlice = createSlice({
    name: 'app',
    initialState: {
      artists: [] as IArtists[],
      tracks: [] as ITrack[]
    },
    reducers: {
        setArtists: (state, action: PayloadAction<IArtists[]>) => {
            state.artists = action.payload
        },  
        setTracks: (state, action: PayloadAction<ITrack[]>) => {
            state.tracks = action.payload
        } 
    },
})

export const { setArtists, setTracks } = appSlice.actions
export default appSlice.reducer