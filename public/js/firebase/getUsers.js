import 'regenerator-runtime/runtime';

import { collection, getDocs, query, where } from "firebase/firestore";

import {db} from "./configuration";

// ArrayList with the info from the database
export let userList = [];




// Crea la lista de las cards con usando el arreglo userList
function listCards(){
  try {

    const cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = "";
    // console.log(userList)
    userList.forEach((item, index) =>{
      const dataToSend = item.idUser
      const encodedData = encodeURIComponent(JSON.stringify(dataToSend));

      const card = document.createElement("div");
      card.classList.add('card')

      const cardTittle = document.createElement('div');
      cardTittle.classList.add('card-title');
      cardTittle.textContent = item.name;

      const cardLink = document.createElement('a');
      cardLink.href = `../../profile.html?data=${encodedData}`
      cardLink.textContent = item.name

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
      cardBody.textContent = item.lastname;

      card.appendChild(cardLink)
      card.appendChild(cardTittle);
      card.appendChild(cardBody);
      cardsContainer.appendChild(card);
    })
  }catch (e){
    console.log(e)
  }

}

// Trae los datos de Firebase para el arreglo userList
// Se ejecuta la funcion de listCards();
async function miFunction(){
  try {
    if (userList.length === 0){
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        // console.log(doc.data())
        userList.push(doc.data())
      });
      listCards();
    }
  }catch (e){
    console.log(e)
  }
}

miFunction();


// Filters
const button_Alajuela= document.getElementById("btn_Alajuela")
const button_Puntarenas = document.getElementById("btn_Puntarenas")

// EventsListener
button_Alajuela.addEventListener("click", async function () {

  // Connection with the database
  const provinceRef = collection(db, "users")
  // Query to ask the database
  const q = query(provinceRef, where("province", "==", "Alajuela"))
  // Wait for the results
  const querySnapshot = await getDocs(q);
  // Set userList to 0, so we can add the new elements according to the query
  userList.length = 0;
  // Set the result of the query in the arraylist userList
  querySnapshot.forEach((doc) => {
    userList.push(doc.data())
  });
  // Put the new cards
  listCards();
})
button_Puntarenas.addEventListener("click", async function (){

  // Connection with the database
  const provinceRef = collection(db, "users")
  // Query to ask the database
  const q = query(provinceRef, where("province", "==", "Puntarenas"))
  // Wait for the results
  const querySnapshot = await getDocs(q);
  // Set userList to 0, so we can add the new elements according to the query
  userList.length = 0;
  // Set the result of the query in the arraylist userList
  querySnapshot.forEach((doc) => {
    userList.push(doc.data())
  });
  // Put the new cards
  listCards();
})
