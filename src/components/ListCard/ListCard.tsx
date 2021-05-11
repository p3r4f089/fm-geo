import React from 'react'
import styles from './styles'

import { View, VirtualizedList, Text, ImageBackground } from 'react-native'

import { IListCard } from 'types'

const ListCard = (props: IListCard) => {  

  const getItem = (data: Array<any>, index: number) => {
    return data[index]        
  }

  const getItemCount = (data: Array<any>) => {
    if(Array.isArray(data)){
      return data.length
    }
    return 0
  } 

  return(
    <View style={styles.container}>
      <VirtualizedList
        horizontal
        showsHorizontalScrollIndicator
        data={props.items}
        initialNumToRender={4}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.card}>
            <ImageBackground source={{uri: item.image[2]['#text']}} style={styles.cardImage}>
              <Text style={styles.name}>{item.name}</Text>
            </ImageBackground>
          </View>
        )
          
        }
        keyExtractor={item => item.name.toString()}        
        getItemCount={getItemCount}
        getItem={getItem}        
      />
    </View>
  )
}

export default ListCard