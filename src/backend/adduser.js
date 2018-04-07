import firebase from 'firebase'
import config from './config'


const auth = firebase.auth()
const db = firebase.database() 


// function adding user to the auth data base
function addEmailAndPassword(email,password,fname,lname,username,router){
 auth.createUserWithEmailAndPassword(email,password).then(() => {
    addEmailAndPasswordToDb(email,fname,lname,username,router)
 }).catch(error => {
     alert(error.message)
 })   
}
function addEmailAndPasswordToDb(email,fname,lname,username,router){
    var userId = auth.currentUser.uid
    db.ref('users/'+userId).set({
        email: email,
        fname: fname,
        lname: lname,
        username: username,
        verified: false
    }).then(()=>{
        router.push('/home')
    })
}
 
// function used by the frontend
export function addUser(email,password,fname,lname,username,router){
    addEmailAndPassword(email,password,fname,lname,username,router)
}

// export function loginUserWithEmailAndPassword(email,password){
//      return auth.signInWithEmailAndPassword(email,password)
// }

