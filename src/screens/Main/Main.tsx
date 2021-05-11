import React, { useEffect, useState } from 'react'
import styles from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView, View, Text } from 'react-native'

import ListCard from 'components/ListCard/ListCard'
import SearchBar from 'components/SearchBar/SearchBar'

import { getTopArtists, getTopTracks } from 'services/api'
import { RootState } from 'store'
import { setArtists, setTracks } from 'store/modules/app'

import { validateArray } from 'utils/utils/validateArray'

const MainScreen = () => {

  const dispatch = useDispatch()

  const artists = useSelector((state: RootState) => state.app.artists)
  const tracks = useSelector((state: RootState) => state.app.tracks)
  
  const [items, setItems] = useState([])

  useEffect(() => {
    setDataTracks()
    setDataArtists()
  }, [])

  useEffect(() => {    

    if(validateArray(tracks) && validateArray(artists)){      
      setItems([])
      let io: any[] = []
      const aux = io.concat(tracks).concat(artists)      
      setItems(aux)
    }

  }, [artists, tracks])

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

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <SearchBar 
          items={items}
          searchParams={['name']}    
          placeholder={`Buscar Top`}        
          onResult={(result, searchMode) => {console.log('result ' + JSON.stringify(result) ) }}
        />

        <Text style={styles.title}>Top Artists</Text>      
        <ListCard items={artists}/>
        <Text style={styles.title}>Top Tracks</Text>
        <ListCard items={tracks}/>        
      </View>
    </SafeAreaView>
  )
}

export default MainScreen