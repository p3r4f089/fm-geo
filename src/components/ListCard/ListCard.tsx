import React from 'react'
import styles from './styles'

import { FlatList, View, Text, Image } from 'react-native'

import { IListCard, IArtists, ITrack } from 'types'

const ListCard = (props: IListCard) => {
  

  const renderItem = (item: any) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  )

  return(
    <View style={styles.container}>
      <FlatList
        data={props.items}        
        renderItem={({ item }) =>  {return renderItem(item)} }
        keyExtractor={item => item.name}
        horizontal
      />
    </View>
  )
}

export default ListCard