import config from './config'
import firebase from 'firebase'

export function logout(router){
  firebase.auth().signOut().then(function() {
    router.push("/")
  }).catch(function(error) {
    console.log(error.message)
  });
} 