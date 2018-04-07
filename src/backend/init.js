import config from './config'
import firebase from 'firebase'

export function checkIfLoggedIn(router){
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            router.push('/home')
        }
    })
}