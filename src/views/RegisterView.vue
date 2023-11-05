<script setup>
import { ref } from 'vue';
import {useRouter} from "vue-router";
import axios from 'axios';
import {useNotification} from "@/stores/notification";


//Pinia Store
const notificationStore = useNotification()

const router = useRouter();

const formData = ref({
  name: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
});


const defaultDataProfile = ref({
  image: 'default.png',
  name: 'Unknown',
  phone_number: 'Unknown',
  province: 'Unknown',
  contacts_id: '',
  ratings_id: '',
  users_id: ''
})


//--------------------------------------------------------------------------
//REGISTER USER
// START
//--------------------------------------------------------------------------

const contentRegisterUser = ref('');
const registerUser = async () => {

  if (!formData.value.name)
  {
    notificationStore.notifyNormalToast("warning", "Escriba su nombre")
  }
  else if(!formData.value.lastName)
  {
    notificationStore.notifyNormalToast("warning", "Escriba sus apellidos")
  }
  else if(!formData.value.email)
  {
    notificationStore.notifyNormalToast("warning", "Escriba su email")
  }
  else if(!formData.value.password)
  {
    notificationStore.notifyNormalToast("warning", "Escriba su contraseña")
  }
  else if (!formData.value.confirmPassword)
  {
    notificationStore.notifyNormalToast("warning", "Escriba la confirmación de la contraseña")
  }
  else {
    contentRegisterUser.value = `name=${formData.value.name} ${" "+formData.value.lastName} &email=${formData.value.email}&password=${formData.value.password}&confirm_password=${formData.value.confirmPassword}`;

    try {
      const response =  await axios.post('http://localhost/demo-bret/public/api/register', contentRegisterUser.value);
      defaultDataProfile.value.name = formData.value.name + " " + formData.value.lastName
      defaultDataProfile.value.users_id = response.data.data.id
      //---------------------
      //Create table contacts
      //---------------------
      try {
        await createTableContacts();

        try {
          //---------------------
          //Create table rating
          await createTableRating();
          //---------------------
          try {
            //---------------------
            //Create table profile
            //---------------------
            await registerProfile()
          }catch (error){
            console.log(error)
          }
        }catch (error){
          console.log(error)
        }
      }catch (error){
        console.error(error)
      }
      await router.push("/login")
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  }


};
//--------------------------------------------------------------------------
//REGISTER USER
// END
//--------------------------------------------------------------------------


//----------------------------------------------------------------
// Crear un la tabla de Contacts para asignarla al perfil
// START
//----------------------------------------------------------------
const contactDefaulft = ref('');
const createTableContacts = async () => {
  try {
    contactDefaulft.value = `info=${formData.value.email}`
    const response = await axios.post('http://localhost/demo-bret/public/api/contact/store', contactDefaulft.value);
    //Guardamos el id para darlo al profile
    defaultDataProfile.value.contacts_id = response.data.data.id
  } catch (error) {
    console.error('Error al crear la tabla', error);
  }
}
//----------------------------------------------------------------
// Crear un la tabla de Contacts para asignarla al perfil
// END
//----------------------------------------------------------------


//----------------------------------------------------------------
// Crear un la tabla de rating para crear profile
// START
//----------------------------------------------------------------
const ratingDefaulft = ref('');
const createTableRating = async () => {
  try {
    ratingDefaulft.value = `calification=${'0'}`
    const response = await axios.post('http://localhost/demo-bret/public/api/rating/store', ratingDefaulft.value);
    //Guardamos el id para darlo al profile
    defaultDataProfile.value.ratings_id = response.data.data.id
  } catch (error) {
    console.error('Error al crear la tabla rating', error);
  }
}
//----------------------------------------------------------------
// Crear un la tabla de rating para crear profile
// END
//----------------------------------------------------------------

//----------------------------------------------------------------
// Crear un profile para el usuario registrado
// START
//----------------------------------------------------------------


const contentRegisterProfile = ref('');
const registerProfile = async () => {
  contentRegisterProfile.value =
      `image=${defaultDataProfile.value.image}
       &name=${defaultDataProfile.value.name}
       &phone_number=${'0'}
       &province=${'Unknown'}
       &contacts_id=${defaultDataProfile.value.contacts_id}
       &ratings_id=${defaultDataProfile.value.ratings_id}
       &users_id=${defaultDataProfile.value.users_id}`

  try {
    console.log("Datos default: " , contentRegisterProfile.value)
    const response = await axios.post('http://localhost/demo-bret/public/api/profile/store', contentRegisterProfile.value);
    //Guardamos el id para darlo al profile
    console.log("Creacion del perfil: ", response.data)
  } catch (error) {
    console.error('Error al crear la tabla profile', error);
  }
}
//----------------------------------------------------------------
// Crear un profile para el usuario registrado E
// END
//----------------------------------------------------------------

</script>

<template>
  <body>
  <div class="container-fluid">
    <div class="row">
      <!--    Img Background-->
      <div class="col-5">
        <img class="vh-100" src="@/assets/img/bg-register.png" alt="">
      </div>
      <!--    From-->
      <div class="col-7 bg-light-blue d-flex flex-column justify-content-center align-items-center rounded-start-5">
        <div class="col-5">
          <div class="d-flex justify-content-center mb-5">
            <RouterLink class="navbar-brand hvr-grow" to="/"><img src="@/assets/img/Bre.T.png" alt="BreT Logo"></RouterLink>
            <!--            <a class="navbar-brand hvr-grow"><img src="@/assets/img/Bre.T.png" alt="Logo Bre.T"></a>-->
          </div>
          <h1 class="ff-popins text-white d-flex justify-content-center mb-5">Registro</h1>
          <!--          <form @submit.prevent="registerUser" id="signUpForm" class="ff-popins mb-5">-->
          <form @submit.prevent id="signUpForm" class="ff-popins mb-5">
            <!--          Name-->
            <div class="form-floating mb-4">
              <!--                            <input v-model="name" type="text" class="form-control rounded-register-input" id="signUp-Name" placeholder="name@example.com" required="">-->
              <input v-model="formData.name" type="text" class="form-control rounded-register-input" id="signUp-Name" placeholder="name@example.com" required="">
              <label class="opacity-50 custom-label fs-5" for="signUp-Name"><i class="bi bi-envelope pe-2 "></i>Nombre</label>
            </div>
            <!--          Lastname-->
            <div class="form-floating my-4">
              <input v-model="formData.lastName" type="text" class="form-control rounded-register-input" id="signUp-Lastname" placeholder="name@example.com" required="">
              <!--                            <input v-model="lastName" type="text" class="form-control rounded-register-input" id="signUp-Lastname" placeholder="name@example.com" required="">-->
              <label class="opacity-50 custom-label fs-5" for="signUp-Lastname"><i class="bi bi-envelope pe-2 "></i>Apellidos</label>
            </div>
            <!--          Email-->
            <div class="form-floating my-4">
              <!--                            <input v-model="email" type="email" class="form-control rounded-register-input" id="signUp-Email" placeholder="name@example.com" required="">-->
              <input v-model="formData.email" type="email" class="form-control rounded-register-input" id="signUp-Email" placeholder="name@example.com" required="">
              <label class="opacity-50 custom-label fs-5" for="signUp-Email"><i class="bi bi-envelope pe-2 "></i>Email</label>
            </div>
            <!--          Password-->
            <div class="form-floating my-4">
              <input v-model="formData.password" type="password" class="form-control rounded-register-input" id="signUp-Password" placeholder="name@example.com" required="">
              <!--                            <input v-model="password" type="password" class="form-control rounded-register-input" id="signUp-Password" placeholder="name@example.com" required="">-->
              <label class="opacity-50 custom-label fs-5" for="signUp-Password"><i class="bi bi-envelope pe-2 "></i>Constraseña</label>
            </div>
            <!--          Confirm Password-->
            <div class="form-floating my-4">
              <input v-model="formData.confirmPassword" type="password" class="form-control rounded-register-input" id="signUp-ConfirmPassword" placeholder="name@example.com" required="">
              <!--                            <input v-model="confirm_password" type="password" class="form-control rounded-register-input" id="signUp-ConfirmPassword" placeholder="name@example.com" required="">-->
              <label class="opacity-50 custom-label fs-5" for="signUp-ConfirmPassword"><i class="bi bi-envelope pe-2 "></i>Confirmar Contraseña</label>
            </div>
            <div class="d-flex justify-content-center">
              <button
                  @click="registerUser"
                  type="submit"
                  class="btn btn-primary rounded-4 w-100 bg-navbar-blue text-white border-0 ff-popins fw-light fs-5 hvr-sweep-to-right clr-dark-yellow">Registrarse
              </button>
            </div>
          </form>
          <div class="d-flex flex-column justify-content-center align-items-center">
            <h4 class="ff-popins text-white">Inicia sesión</h4>
            <router-link to="/login" class="ff-popins">¿Ya tienes una cuenta? <span class="ms-1 clr-blue"> Inicia Sesión</span></router-link>
            <div class="d-flex gap-5 fs-2 mt-3">
              <i class="bi bi-facebook"></i>
              <i class="bi bi-google"></i>
              <i class="bi bi-linkedin"></i>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  </body>
</template>


<!--<script>-->
<!--  import axios from 'axios'-->

<!--  export default{-->
<!--    data(){-->

<!--    },-->
<!--    mounted() {-->
<!--    },-->
<!--    methods: {-->
<!--      onClickRegister() {-->
<!--        let bodyContent = 'name=' + this.name + ' ' + this.lastname + '&email=' + this.email + '&password=' + this.password + '&confirm_password=' + this.confirm_password;-->

<!--        axios-->
<!--          .post(-->
<!--            'http://localhost/demo-bret/public/api/register',-->
<!--            bodyContent-->
<!--          )-->
<!--          .then(-->
<!--            response => {-->
<!--              let items = response.data;-->
<!--              alert(items.message);-->
<!--              this.$router.push({ name: 'login' }); // Redirige a la página de destino-->
<!--            }-->
<!--          )-->
<!--          .catch(-->
<!--            error => {-->
<!--              if (error.response) {-->
<!--                const errorResponse = error.response.data;-->
<!--                const errorMessages = [];-->

<!--                for (const key in errorResponse.data) {-->
<!--                  if (errorResponse.data.hasOwnProperty(key)) {-->
<!--                    errorMessages.push(errorResponse.data[key][0]);-->
<!--                  }-->
<!--                }-->

<!--                const errorMessageString = errorMessages.join('\n');-->

<!--                alert(`${errorMessageString}`);-->
<!--              } else {-->
<!--                alert(`Error en la solicitud`);-->
<!--              }-->
<!--            }-->
<!--          )-->

<!--        /*-->
<!--        axios-->
<!--          .get(-->
<!--            'http://localhost/laravel_taller/demo/public/api/job/all'-->
<!--          )-->
<!--          .then(-->
<!--            response => {-->
<!--              let items = response.data.data;-->
<!--              console.log(items)-->
<!--            }-->
<!--          )-->
<!--          .catch(-->
<!--            e => console.log(e)-->
<!--          )-->
<!--        */-->
<!--      }-->

<!--    }-->
<!--  }-->
<!--</script>-->