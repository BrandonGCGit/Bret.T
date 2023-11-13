<script setup>

//Reactividad, cualquier cambio con ref se vera alterado automaticamente
import {ref} from "vue";

import axios from 'axios';
import router from "@/router";
import {useNotification} from "@/stores/notification";

const formData = ref({
  email: '',
  password: ''
})

const content = ref('');

//Pinia Store
const notificationStore = useNotification()


const loginUser = async () => {

  if (!formData.value.email)
  {
    notificationStore.notifyNormalToast("warning","El campo del email esta vacío")
  }
  else if (!formData.value.password)
  {
    notificationStore.notifyNormalToast("warning", "El campo de la contraseña esta vacío")
  }
  else
  {
    content.value = `email=${formData.value.email} &password=${formData.value.password}`

    try {
      const response = await axios.post('http://localhost/demo-bret/public/api/login', content.value);
      notificationStore.notifyLoadingToast("info", "Cargando su usuario")
      console.log("response: ", response.data)
      let item = response.data.data;
      sessionStorage.setItem('id', item.id);
      sessionStorage.setItem('token', item.token);

      router.push('/profile')
    }catch (error){
      console.error('Error al iniciar sesión', error.response.data.data.error)
      if (error.response.data.data.error === "Unauthorised")
      {
        notificationStore.notifyNormalToast("error", "Su correo o contraseña con incorrectos")
      }
    }
  }


}

</script>

<template>
  <body>
  <div class="container-fluid">
    <div class="row">
      <!--    Img Background-->
      <div class="col-5 bg-image vh-100 d-none d-sm-block"></div>
      <!--    From-->
      <div class="col bg-light-blue d-flex flex-column justify-content-center align-items-center vh-100">
        <div class="d-flex justify-content-center mb-5">
          <RouterLink class="navbar-brand hvr-grow" to="/"><img src="@/assets/img/Bre.T.png" alt="Bre.T Logo"></RouterLink>
<!--          <a class="navbar-brand hvr-grow" href="./index.html"><img src="@/assets/img/Bre.T.png" alt="Logo Bre.T"></a>-->
        </div>
        <h1 class="ff-popins text-white d-flex justify-content-center mb-5">Iniciar Sesión</h1>
        <form @submit.prevent="onClickLogin" id="logInForm" class="ff-popins mb-5">
          <!--          Email-->
          <div class="form-floating my-4">
            <input v-model="formData.email" type="email" class="form-control rounded-register-input" id="logIn-Email" placeholder="name@example.com" required="">
            <label class="opacity-50 custom-label fs-5" for="logIn-Email"><i class="bi bi-envelope pe-2 "></i>Email</label>
          </div>
          <!--          Password-->
          <div class="form-floating my-4">
            <input v-model="formData.password" type="password" class="form-control rounded-register-input" id="logIn-Password" placeholder="name@example.com" required="">
            <label class="opacity-50 custom-label fs-5" for="logIn-Password"><i class="bi bi-envelope pe-2 "></i>Constraseña</label>
          </div>
          <div class="d-flex justify-content-center">
            <button
                @click="loginUser"
                @keyup.enter="loginUser"
                type="submit"
                class="btn btn-primary rounded-4 w-100 bg-navbar-blue text-white border-0 ff-popins fw-light fs-5 hvr-sweep-to-right clr-dark-yellow">Iniciar Sesión</button>
          </div>
        </form>
        <div class="d-flex flex-column justify-content-center align-items-center">
          <h4 class="ff-popins text-white">Inicia sesión</h4>
          <a href="./register.html" class="ff-popins">¿No tienes una cuenta? <router-link to="/register" class="ms-1 clr-blue"> Registrate</router-link></a>
          <a href="./register.html" class="ff-popins"> <router-link to="/recover" class="ms-1 clr-blue">¿Se te olvido la contraseña?</router-link></a>
          <div class="d-flex gap-5 fs-2 mt-3">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-google"></i>
            <i class="bi bi-linkedin"></i>
          </div>
        </div>
      </div>


    </div>
  </div>
  </body>
<!--  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>-->
<!--  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>-->
<!--  <script type="module" src="./js/firebase/logInForm.js"></script>-->
</template>


<!--<script>-->
<!--  import axios from 'axios'-->

<!--  export default{-->
<!--    data(){-->

<!--    },-->
<!--    mounted() {-->
<!--    },-->
<!--    methods: {-->
<!--      onClickLogin() {-->
<!--        let bodyContent = 'email=' + this.email + '&password=' + this.password;-->
<!--        -->
<!--        axios-->
<!--          .post(-->
<!--            'http://localhost/demo-bret/public/api/login',-->
<!--            bodyContent-->
<!--          )-->
<!--          .then(-->
<!--            response => {-->
<!--              let item = response.data.data;-->
<!--              console.log(response.data.data);-->
<!--              -->
<!--              localStorage.setItem('id', item.id);-->
<!--              localStorage.setItem('name', item.name);-->
<!--              localStorage.setItem('email', this.email);-->
<!--              localStorage.setItem('token', item.token);-->

<!--              alert(response.data.message);-->
<!--              this.$router.push({ name: 'home' }); // Redirige a la página de destino-->
<!--            }-->
<!--          )-->
<!--          .catch(-->
<!--            error => {-->
<!--              console.log(error);-->
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
<!--      }-->
<!--      -->
<!--    }-->
<!--  }-->
<!--</script>-->