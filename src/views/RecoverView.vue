<script setup>

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
        <form id="logInForm" class="ff-popins mb-5">
          <!--          Email-->
          <div class="form-floating my-4">
            <input type="email" class="form-control rounded-register-input px-5" id="logIn-Email" placeholder="name@example.com">
            <label class="opacity-50 custom-label fs-5" for="recover-Email"><i class="bi bi-envelope pe-2 "></i>Correo de recuperación</label>
          </div>
          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary rounded-4 w-100 bg-navbar-blue text-white border-0 ff-popins fw-light fs-5 hvr-sweep-to-right clr-dark-yellow">Enviar</button>
          </div>
        </form>
      </div>


  </div>
</div>
</body>
</template>

<style scoped>

</style>

