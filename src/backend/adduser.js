import firebase from 'firebase'
import config from './config'


const auth = firebase.auth()
const db = firebase.database() 
const storage = firebase.storage()

// function adding user to the auth data base
function addEmailAndPassword(email,password,fname,lname,username,des,fileUrl,router){
 auth.createUserWithEmailAndPassword(email,password).then(() => {
    addEmailAndPasswordToDb(email,fname,lname,username,des,fileUrl,router)
 }).catch(error => {
     alert(error.message)
 })   
}
function addEmailAndPasswordToDb(email,fname,lname,username,des,fileUrl,router){
    var userId = auth.currentUser.uid
    db.ref('users/'+userId).set({
        email: email,
        fname: fname,
        lname: lname,
        username: username,
        description: des,
        verified: false
    }).then(()=>{
        var storageRef = storage.ref('profileImages/'+ userId);
        var task =  storageRef.put(fileUrl);
        router.push('/home')
    })   
}
 
// function used by the frontend
export function addUser(email,password,fname,lname,username,des,fileUrl,router){
    addEmailAndPassword(email,password,fname,lname,username,des,fileUrl,router)
}

// export function loginUserWithEmailAndPassword(email,password){
//      return auth.signInWithEmailAndPassword(email,password)
// }

