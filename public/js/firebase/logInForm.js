import 'regenerator-runtime/runtime';

import Toastify from 'toastify-js'

import { signInWithEmailAndPassword } from "firebase/auth"

import {auth} from "./configuration";



const logInForm = document.querySelector('#logInForm');


logInForm.addEventListener('submit', async (e) =>{
  e.preventDefault()
  const email = logInForm['logIn-Email'].value
  const password = logInForm['logIn-Password'].value


  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)


    window.location.href = "../../profile.html"
    // alert("Se ha iniciado sesion");
  }catch (error){
    console.log("info: ", error.message)
    if(error.code === "auth/invalid-login-credentials"){
      Toastify({
        text: "Email o Contraseña incorrectos",
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        },
        onClick: function(){} // Callback after click

      }).showToast();
    }
  }
})
