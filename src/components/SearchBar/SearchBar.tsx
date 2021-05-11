import React, { useEffect, useState } from 'react'

import styles from './styles'

import { View, TextInput, Image } from 'react-native'

import { validateArray } from 'utils/utils/validateArray'
import { ISearchBar} from 'types'

import SearchIcon from 'assets/images/loupe.png'

const SearchBar = (props: ISearchBar) => {

  const [searchText, setSearchText] = useState('') 
  
  useEffect(() => {    
    if(props.items && searchText){
      if(searchText !== '' && searchText.length > 1){
        searchItem(searchText)
      }else{        
        props.onResult(props.items, false)
      }
    }
  }, [searchText])

  const searchItem = (query: string) => {
    if(query && props.items && props.searchParams){
      const items = props.items        
      if(validateArray(items)){
        const formattedQuery = query.toLowerCase()
        const filteredData = items.map(item => {          
         if(validateArray(contains(item, formattedQuery))){
            return item
          }          
        }).filter(x => x)
        // console.log('filteredDta ' + JSON.stringify(filteredData))
        props.onResult(filteredData, true)
      }

    }
  }

  const contains = (item: any, query: string) => {
    let queryItems: any[] = []
    const params = props.searchParams
    Object.keys(item).forEach(key => {      
      if(item[key] != null && params.includes(key)){        
        // console.log('item query ' + JSON.stringify(item) + 'item value ' + item[key] + 'item key ' + key + ' params...' + params)
        let formattedItem = item[key].toString().toLowerCase()
        // console.log('........ formattedItem ....... ' + formattedItem)
        if(formattedItem.includes(query)){          
          queryItems.push(item)
        } 
      }
    })
    return queryItems  
  }
  
  return(
    <View style={styles.container}>
      <TextInput
        style={styles.input}        
        onChangeText={(text) => {
          setSearchText(text)
          if(props.onChangeText){
            props.onChangeText(text)
          }
        }}
        placeholder={props.placeholder ? props.placeholder : 'Buscar'}
        value={searchText}
        maxLength={40}
      />
      <View style={styles.iconContainer}>
        <Image source={SearchIcon} style={styles.icon} />
      </View>
      
    </View>
  )
}

export default SearchBar