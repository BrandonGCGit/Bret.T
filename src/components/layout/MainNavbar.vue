<script setup>

import DropdownList from "@/components/layout/main-navbar/Dropdown-List.vue";
</script>

<template>
  <!--Navbar Start-->
  <div class="col-12 p-0 m-0">
    <nav class="navbar navbar-expand-lg ff-popins pt-4 bg-navbar-blue">
      <div class="col-10 container-fluid">
        <a class="navbar-brand hvr-grow" href="#"><img src="@/assets/img/Bre.T.png" alt="Logo Bre.T"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <!--Dropdowns Start-->
            <DropdownList></DropdownList>
           <!--Dropdowns End-->
            <li class="nav-item">
              <a class="nav-link active text-white fw-light fs-5 hvr-underline-from-left" aria-current="page" href="#">Ser vendedor</a>
            </li>
          </ul>
          <ul class="navbar-nav gap-4">
            <li class="nav-item">
              <RouterLink class="nav-link active hvr-underline-from-left text-white fw-light fs-5" to="login">Iniciar Sesión</RouterLink>
<!--              <a  aria-current="page" to="/login" >Iniciar Sesión</a>-->
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active hvr-underline-from-left text-white fw-light fs-5" to="register">Registrarse</RouterLink>
<!--              <a class="nav-link active hvr-underline-from-left text-white fw-light fs-5" aria-current="page" href="./register.html">Registrarse</a>-->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <!--Navbar End-->
</template>

<style scoped>

</style>