import firestore from '@react-native-firebase/firestore'

const tracksCollection = firestore().collection('tracks')
const artistsCollection = firestore().collection('artists')

export const getAllTracks = async() => {
  try{
    const tracksPromise = new Promise((resolve, reject) => {
      tracksCollection.get().then(querySnapshot => {
        if(querySnapshot.empty){
          resolve([])
        }else{
          const tracks: any[] = []
          querySnapshot.forEach(doc =>{
            const data = {
              ...doc.data(),
              id: doc.id,
            }            
            tracks.push(data)
          })
          resolve(tracks)
        }
      }).catch(e => reject(e))
    })
    return await tracksPromise
  }catch(e){
    throw e
  }
} 

export const getAllArtists = async() => {
  try{
    const artistsPromise = new Promise((resolve, reject) => {
      artistsCollection.get().then(querySnapshot => {
        if(querySnapshot.empty){
          resolve([])
        }else{
          const artists: any[] = []
          querySnapshot.forEach(doc =>{
            const data = {
              ...doc.data(),
              id: doc.id,
            }            
            artists.push(data)
          })
          resolve(artists)
        }
      }).catch(e => reject(e))
    })
    return await artistsPromise
  }catch(e){
    throw e
  }
}