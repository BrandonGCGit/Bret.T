import 'regenerator-runtime/runtime';

import Toastify from 'toastify-js'

import { signOut } from "firebase/auth"

import {auth} from "./configuration";

const btnSignOut = document.querySelector('#btnSignOut');

btnSignOut.addEventListener('click', async (e) =>{
  e.preventDefault();

  console.log("Log out")

  try {
    await signOut(auth);
    window.location.href = "../../index.html"
    Toastify({
      text: "Se ha cerrado la sesión con exito",
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
  }catch (error){

  }
})
