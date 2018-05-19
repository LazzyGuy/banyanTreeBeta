import config from './config'
import firebase from 'firebase'

export function logout(router){
  firebase.auth().signOut().then(function() {
    return true
  }).catch(function(error) {
    console.log(error.message)
  });
} 