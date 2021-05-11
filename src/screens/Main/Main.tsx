import React, { useEffect } from 'react'
import styles from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { View, Text } from 'react-native'

import ListCard from 'components/ListCard/ListCard'
import SearchBar from 'components/SearchBar/SearchBar'

import { getTopArtists, getTopTracks } from 'services/api'
import { RootState } from 'store'
import { setArtists, setTracks } from 'store/modules/app'

import { IArtists, ITrack } from 'types'
import { validateArray } from 'utils/utils/validateArray'

const MainScreen = () => {

  const dispatch = useDispatch()

  const artists = useSelector((state: RootState) => state.app.artists)
  const tracks = useSelector((state: RootState) => state.app.tracks)  

  useEffect(() => {
    setDataTracks()
    setDataArtists()
  }, [])

  // useEffect(() => {
  //   console.log(tracks)
  //   console.log(artists)

  // }, [artists, tracks])

  const setDataTracks = async () => {
    try{
      const data = await getTopTracks(null)
      // console.log('tracks ' + JSON.stringify(data))
      dispatch(setTracks(data))
    }catch(e){
      console.error(e)
    }
  }

  const setDataArtists = async () => {
    try{
      const data = await getTopArtists(null)
      // console.log('artists ' + JSON.stringify(data))
      if(validateArray(data)){
        dispatch(setArtists(data))

      }
    }catch(e){
      console.error(e)
    }
  }

  const buildTop = (data: Array<IArtists | ITrack>) => {
    if(validateArray(data)){      
      return <ListCard items={data}/>
    }
    return null
  }

  return(
    <View style={styles.container}>
      <View style={styles.content}>

        <SearchBar 
          items={[]}
          searchParams={['name']}    
          placeholder={`Buscar Top`}        
          onResult={(result, searchMode) => {console.log(result) }}
        />

        <Text style={styles.title}>Top Artists</Text>      
        <ListCard items={artists}/>
        {/* {buildTop(artists)} */}
        <Text style={styles.title}>Top Tracks</Text>
        <ListCard items={tracks}/>
        {/* {buildTop(tracks)} */}
      </View>
    </View>
  )
}

export default MainScreen