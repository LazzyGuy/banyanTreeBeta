import config from './config'
import firebase from 'firebase'

export default function confirmUser(router,logout){
    firebase.auth().onAuthStateChanged(function(user){
        if(logout){
            router.push('/')            
        }
        else if(user){
        }else{
            router.push('/404');
        }
    })
}