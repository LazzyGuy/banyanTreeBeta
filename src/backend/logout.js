import config from './config'
import firebase from 'firebase'

export function logout(){
  firebase.auth().signOut().then(function() {
    console.log('loged out');
  }).catch(function(error) {
    console.log(error.message)
  });
} 