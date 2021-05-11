import { request } from './httpClient'

import CONFIG from 'utils/config'
import { IArtists, ITrack } from 'types'

export const getTopArtists = async (country?: string | null) => {  
  try{
    let co = 'spain'
    if(country){
      co = country
    }

    const url = CONFIG.API_URL + CONFIG.TOP_ARTISTS_ENDPOINT
                  .replace('${country}', co)
                  .replace('${apikey}', CONFIG.API_KEY) 
    const response = await request('GET', url)    
    if(response != null && response['topartists'] != null && response['topartists']['artist']){
      return response['topartists']['artist'] as IArtists[]      
    } 
    return []
  }catch(e){
    throw e
  }  
}

export const getTopTracks = async (country?: string | null) => {  
  try{
    let co = 'spain'
    if(country){
      co = country
    }

    const url = CONFIG.API_URL + CONFIG.TOP_TRACKS_ENDPOINT
                  .replace('${country}', co)
                  .replace('${apikey}', CONFIG.API_KEY) 
    const response = await request('GET', url)    
    if(response != null && response['tracks'] != null && response['tracks']['track']){
      return response['tracks']['track'] as ITrack[]
    }
    return []
  }catch(e){
    throw e
  }  
}