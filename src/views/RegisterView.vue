<script setup>

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
      <div class="col-7 bg-light-blue d-flex flex-column justify-content-center align-items-center">
        <div class="col-5">
          <div class="d-flex justify-content-center mb-5">
            <RouterLink class="navbar-brand hvr-grow mt-5" to="/"><img src="@/assets/img/Bre.T.png" alt="BreT Logo"></RouterLink>
<!--            <a class="navbar-brand hvr-grow"><img src="@/assets/img/Bre.T.png" alt="Logo Bre.T"></a>-->
          </div>
          <h1 class="ff-popins text-white d-flex justify-content-center mb-5">Registro</h1>
          <form @submit.prevent="onClickRegister" id="signUpForm" class="ff-popins mb-2">
            <!--          Name-->
            <div class="form-floating mb-4">
              <input v-model="name" type="text" class="form-control rounded-register-input" id="signUp-Name" placeholder="name@example.com" required="">
              <label class="opacity-50 custom-label fs-5" for="signUp-Name"><i class="bi bi-envelope pe-2 "></i>Nombre</label>
            </div>
            <!--          Lastname-->
            <div class="form-floating my-4">
              <input v-model="lastname" type="text" class="form-control rounded-register-input" id="signUp-Lastname" placeholder="name@example.com" required="">
              <label class="opacity-50 custom-label fs-5" for="signUp-Lastname"><i class="bi bi-envelope pe-2 "></i>Apellidos</label>
            </div>
            <!--          Email-->
            <div class="form-floating my-4">
              <input v-model="email" type="email" class="form-control rounded-register-input" id="signUp-Email" placeholder="name@example.com" required="">
              <label class="opacity-50 custom-label fs-5" for="signUp-Email"><i class="bi bi-envelope pe-2 "></i>Email</label>
            </div>
            <!--          Password-->
            <div class="form-floating my-4">
              <input v-model="password" type="password" class="form-control rounded-register-input" id="signUp-Password" placeholder="name@example.com" required="">
              <label class="opacity-50 custom-label fs-5" for="signUp-Password"><i class="bi bi-envelope pe-2 "></i>Constraseña</label>
            </div>
            <!--          Confirm Password-->
            <div class="form-floating my-4">
              <input v-model="confirm_password" type="password" class="form-control rounded-register-input" id="signUp-ConfirmPassword" placeholder="name@example.com" required="">
              <label class="opacity-50 custom-label fs-5" for="signUp-ConfirmPassword"><i class="bi bi-envelope pe-2 "></i>Confirmar Contraseña</label>
            </div>
            <div class="d-flex justify-content-center">
              <button type="submit" class="btn btn-primary rounded-4 w-100 bg-navbar-blue text-white border-0 ff-popins fw-light fs-5 hvr-sweep-to-right clr-dark-yellow">Registrarse</button>
            </div>
            <div class="mt-2 text-center">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label ff-popins ms-2" for="exampleCheck1">Quiero recibir correos</label>
            </div>
          </form>
          <div class="d-flex flex-column justify-content-center align-items-center">
          <RouterLink class="ff-popins mb-3" to="login">¿Ya tienes una cuenta? <span class="ms-1 clr-blue"> Inicia Sesión</span></RouterLink>
            <h4 class="ff-popins text-white">Inicia sesión</h4>
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

<style scoped>

</style>

<script>
  import axios from 'axios'

  export default{
    data(){

    },
    mounted() {
    },
    methods: {
      onClickRegister() {
        let bodyContent = 'name=' + this.name + ' ' + this.lastname + '&email=' + this.email + '&password=' + this.password + '&confirm_password=' + this.confirm_password;
        
        axios
          .post(
            'http://localhost/demo-bret/public/api/register',
            bodyContent
          )
          .then(
            response => {
              let items = response.data;
              alert(items.message);
              this.$router.push({ name: 'login' }); // Redirige a la página de destino
            }
          )
          .catch(
            error => {
              if (error.response) {
                const errorResponse = error.response.data;
                const errorMessages = [];

                for (const key in errorResponse.data) {
                  if (errorResponse.data.hasOwnProperty(key)) {
                    errorMessages.push(errorResponse.data[key][0]);
                  }
                }

                const errorMessageString = errorMessages.join('\n');

                alert(`${errorMessageString}`);
              } else {
                alert(`Error en la solicitud`);
              }
            }
          )
          
        /*
        axios
          .get(
            'http://localhost/laravel_taller/demo/public/api/job/all'
          )
          .then(
            response => {
              let items = response.data.data;
              console.log(items)
            }
          )
          .catch(
            e => console.log(e)
          )
        */
      }
      
    }
  }
</script>