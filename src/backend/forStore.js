import firebase from 'firebase'
import config from './config'


const auth = firebase.auth()
const db = firebase.database() 
const storage = firebase.storage()


export function getUid(){
  return auth.currentUser.uid
}