import 'regenerator-runtime/runtime'

// Verificar si esta logeado, si no lo esta no se muestra la info
import {onAuthStateChanged, signOut} from "firebase/auth"
import {auth} from "./configuration";

import Toastify from "toastify-js";

// Get user
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "./configuration";

// Usado para poner la info, de los perfiles cuando un usario no dueno del perfil entra (solo vista)
const urlParams = new URLSearchParams(window.location.search);
const encodedData = urlParams.get("data");
const decodedData = JSON.parse(decodeURIComponent(encodedData));
// console.log(decodedData);


// Container of the button
const buttonLogOut = document.getElementById("container-button-logOut");

// Crate a button with the user is login, and turn of the button if the user is log out
function logOutButton(){
  // Creation of the button
  const button = document.createElement("button");
  button.id = "btnSignOut"
  button.type = "submit"
  button.classList.add("btn")
  button.textContent = "Log Out"
  buttonLogOut.appendChild(button);

  // Add and event listener for the button, when is clicked the session is over for the user
  button.addEventListener("click", async (e) =>{
    e.preventDefault();

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
}

// Esta verificando constatemente que el usuario este logeado.
const monitorAuthState = async  () => {
  onAuthStateChanged (auth, user => {
    if (user){
      // console.log("Info: ",user)
      logOutButton();
    }else {
      fillData();
    }
  })
}

monitorAuthState();

// Llena los espacio con los datos del id del usuario recibido en decodeData
async function fillData(){

  let user;

  // Creo una referencia con la base de datos users
  const usersRef = collection(db, "users");
  // Hago la query sobre la referencia
  const q = query(usersRef, where("idUser", "==", decodedData));
  // Espero la respuesta del Firebase y guardo la informacion
  const querySnapshot = await getDocs(q)

  querySnapshot.forEach((doc) =>{
    console.log(doc.data())
    user = doc.data();
  })

  const profileEmail = document.getElementById("profile-email");
  const profileName = document.getElementById("profile-name-2");
  const profileLastname = document.getElementById("profile-lastname");
  const profileProvince = document.getElementById("profile-province");

  profileEmail.textContent = user.name
  profileName.textContent = user.name
  profileLastname.textContent = user.lastname
  profileProvince.textContent = user.province

}
