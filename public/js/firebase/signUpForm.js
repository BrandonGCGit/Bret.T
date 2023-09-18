import 'regenerator-runtime/runtime';

import Toastify from 'toastify-js'

import { createUserWithEmailAndPassword } from "firebase/auth"

import {auth} from "./configuration";

const signUpForm = document.querySelector('#signUpForm');


signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = signUpForm['signUp-Email'].value
  const password = signUpForm['signUp-Password'].value


  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    console.log("info ",userCredentials);
  }catch (error){
    console.log(error.code);
    console.log(error.message);

    if (error.code === "auth/email-already-in-use"){

      Toastify({
        text: "El email ya esta en uso",
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
    }else if (error.code === "auth/invalid-email"){

      Toastify({
        text: "El email es invalido",
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

    }else if (error.code === "auth/weak-password"){

      Toastify({
        text: "La contraseña es muy débil",
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

    }else if (error.code){

      Toastify({
        text: "Algo salió mal",
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
      alert("Something went wrong");
    }
  }

})

