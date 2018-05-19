import config from './config'
import firebase from 'firebase'

function checkForUser(email,password,router){    
  const auth = firebase.auth()
  auth.signInWithEmailAndPassword(email,password).then(()=>{
    auth.onAuthStateChanged(function(user){
        if(user){
            return true
        }
    })
  })
  .catch(function(error){
      alert(error.message)
  })
}

// EXPORT LIST
export function logInUser(email,password,router){
    checkForUser(email,password,router)
}