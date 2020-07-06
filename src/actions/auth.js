import { firebase, googleAuthProvider } from "../firebase/firebase"

export const login=(uid)=>({
    type:'LOGIN',
    uid
})

export const startLogin=()=>{
return ()=>{
//call firebase related method
return firebase.auth().signInWithPopup(googleAuthProvider)
}
}

export const logout=()=>({
    type:'LOGOUT'
})

export const startLogout=()=>{
    return ()=>{
        return firebase.auth().signOut();
    }
}
//start the login process
