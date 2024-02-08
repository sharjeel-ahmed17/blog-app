import {auth , onAuthStateChanged, signOut} from "./firebase.js"




let email = document.getElementById("email");
let userName = document.getElementById("userName");
// ** observer start 
const load = ()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {

          
          // userName.innerHTML = user.email.slice(0, user.email.indexof("@"));   
        email.innerHTML = user.email;
          console.log(user)
          const uid = user.uid;
          if(location.pathname !== "/profile.html"){
            location.pathname = "/profile.html"
          }
          console.log(user)
        } else {
          console.log("not login")

          if(location.pathname !== "/index.html"  && location.pathname !== "/rejister.html"){
            location.pathname = "/index.html"
          }
        }
      });
}

load();

// ** observer end 

let logout = ()=>{
  signOut(auth).then(() => {
    console.log("signout successfullly");
  }).catch((error) => {
console.log(error)
  });
}


let logoutBtn = document.getElementById("logoutBtn");
logoutBtn && logoutBtn.addEventListener("click", logout);
