import config from './config'
import firebase from 'firebase'

export default function confirmUser(router){
    firebase.auth().onAuthStateChanged(function(user){
        if(!user){
           router.push('/404');
        }
    })
}