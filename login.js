import {auth , signInWithEmailAndPassword, GoogleAuthProvider , signInWithPopup} from "./firebase.js"


let email = document.getElementById("email");
let password = document.getElementById("password");
let loginForm = document.getElementById("loginForm");

let loginWithGoogleBtn = document.getElementById("googleBtn");
const provider = new GoogleAuthProvider;
// todo : sign in new user start
const login = () => {
    signInWithEmailAndPassword (auth, email.value, password.value)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
  
        console.log(`${user.uid} ========>>>>>>>>>`)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
  
        console.log(errorMessage)
        // ..
      });
  
      email.value = ""
      password.value = ""
  };
  // todo : sign in new user end

  // ** sign in with google start

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        });
}
  // ** sign in with googel end

  loginWithGoogleBtn && loginWithGoogleBtn.addEventListener("click", signInWithGoogle);


  loginForm && loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    login();
  })
  