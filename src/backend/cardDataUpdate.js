import firebase from 'firebase'
import config from './config'


const auth = firebase.auth()
const db = firebase.database() 

export function updateCard(message,name){
  
  var ref = db.ref('cardData/BCA')
  var obj = {
      message: message,
      name: name
  }
  ref.push(obj)
}