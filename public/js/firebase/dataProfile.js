import 'regenerator-runtime/runtime'

import { onAuthStateChanged } from "firebase/auth"

import {auth} from "./configuration";

const importName = document.getElementById("profile-name");

const monitorAuthState = async  () => {
  onAuthStateChanged (auth, user => {
    if (user){
      console.log("Info: ",user)
      importName.innerText = user.email;
    }else {
    }
  })
}

monitorAuthState();
