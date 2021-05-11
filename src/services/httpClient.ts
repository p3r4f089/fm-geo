import axios, {AxiosResponse, AxiosRequestConfig } from 'axios'

import CONFIG from 'utils/config'

export const request = async (method: AxiosRequestConfig["method"], url: string) => {
  try {
    
    const headers = {
      'Content-Type': 'application/json', 
      'Accept': 'application/json',      
    }

    console.log('method ' + method + ' url ' + url)
    
    const options: AxiosRequestConfig = { method, headers, data: null, url, timeout: CONFIG.AXIOSTIMEOUT }
    const response: AxiosResponse  = await axios(options)
    return response.data
  } catch (e) {   
    if(e.response){      
      console.error(`response error ${url} ,  ${e}` )
      let status = null
      let message = null
      if(e.response['data'] && e.response['data'].status){
        status = e.response['data'].status
      }

      if(e.response['data'] && e.response['data'].error && e.response['data'].error.message){
        console.error('response error message' + e.response['data'].error.message)
        message = e.response['data'].error.message
      }      
      throw {
        error: e,
        status,
        message
      }
    }else if (e.request) {      
      console.error('request error ' + e)      
    } else {
      console.error('axios error ' + JSON.stringify(e)) 
    }
    throw e
  }
}


