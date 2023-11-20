<script setup>

import DropdownList from "@/components/layout/main-navbar/Dropdown-List.vue";
import {onBeforeMount, ref} from "vue";
import axios from "axios";

const sessionStorageData = ref({
  id: '',
  token: ''
})


const logOut = async () => {
  try {
    // content.value = `email=${formData.value.email} &password=${formData.value.password}`
    // const content = `token=`

    console.log("Token: " , sessionStorage.getItem('token'))
    // 'Authorization': Bearer ${localStorage.getItem('access_token')}
    const config = {
      headers: {
        Accept: 'application/json',
        // Authorization: `Bearer ${token}`,
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      },
    };

    const response = await axios.get('http://localhost/demo-bret/public/api/logout', config);
    console.log("Response del LotOut", response)
    // Realiza otras operaciones con la respuesta si es necesario.
    sessionStorage.clear()
    location.reload()

  } catch (error) {
    console.error('Error con cargar datos del profile: ', error);
  }
};


onBeforeMount(async () => {
  // Almacenar los datos del Session
  sessionStorageData.value.id = sessionStorage.getItem('id')
  sessionStorageData.value.token = sessionStorage.getItem('token')
})

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
              <RouterLink

                  v-if="!sessionStorageData.token"
                  class="nav-link active hvr-underline-from-left text-white fw-light fs-5" to="login">Iniciar Sesión</RouterLink>
              <RouterLink
                  v-else
                  class="nav-link active hvr-underline-from-left text-white fw-light fs-5" to="profile">Perfil</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                  v-if="!sessionStorageData.token"
                  class="nav-link active hvr-underline-from-left text-white fw-light fs-5" to="register">Registrarse</RouterLink>
              <RouterLink
                  v-else
                  @click="logOut"
                  class="nav-link active hvr-underline-from-left text-white fw-light fs-5" to="/">Cerrar Sesión</RouterLink>
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