<script setup>

import {ref} from 'vue';
import {useRouter} from "vue-router";
import axios from 'axios';
import {useNotification} from "@/stores/notification";

const formData = ref({
  email: ""
});


//Pinia Store
const notificationStore = useNotification()

const contactDefaulft = ref('');
const recoverPassword = async () => {

  try {
    contactDefaulft.value = `email=${formData.value.email}`
    const response = await axios.post('http://localhost/demo-bret/public/api/recoverpassword', contactDefaulft.value);
    console.log(response)
    notificationStore.notifyNormalToast("success","Su nueva contraseña es: " + response.data.password, 99999999999, false)
  } catch (error) {
    console.error('Error al crear la tabla', error);
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
        </div>
        <h1 class="text-decoration-none text-black footer-font d-flex justify-content-center mb-5">¿Has olvidado tu contraseña?</h1>
        <form @submit.prevent id="logInForm" class="ff-popins mb-5">
          <!--          Email-->
          <div class="form-floating my-4">
            <input v-model="formData.email" type="email" class="form-control rounded-register-input" id="signUp-Email" placeholder="name@example.com" required="">
            <label class="opacity-50 custom-label fs-5" for="recover-Email"><i class="bi bi-envelope pe-2 "></i>Email</label>
          </div>
          <div class="d-flex justify-content-center">
            <button @click="recoverPassword" type="submit" class="btn btn-primary rounded-4 w-100 bg-navbar-blue text-white border-0 ff-popins fw-light fs-5 hvr-sweep-to-right clr-dark-yellow">Enviar</button>
          </div>
        </form>
      </div>


  </div>
</div>
</body>
</template>

<style scoped>

</style>

