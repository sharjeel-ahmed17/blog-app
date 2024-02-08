import {auth , createUserWithEmailAndPassword} from "./firebase.js"

let email = document.getElementById("email");
let password = document.getElementById("password");
let rejisterForm = document.getElementById("rejisterForm");


// todo : sign up new user start
const rejister = () => {
    createUserWithEmailAndPassword (auth, email.value, password.value)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
  
        console.log(`${user} ========>>>>>>>>>`)
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
  // todo : sign up new user end


  rejisterForm && rejisterForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    rejister();
  })
