<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import router from "@/router";
import {useRoute} from "vue-router";

const formData = ref({
  image: '',
  full_name: '',
  phone: 0,
  province: ''
});

const defaultDataJob = ref({
  nameJob: 'defaultName.png',
  description: 'Unknown',
  cost: 0,
  categories_id: 'Unknown',
})

//Tiene los ids de los trabajos del usuario, tabla tbl_profile_jobs
const listProvince = ref(["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limón"])



//const idJob = useRoute().params.id
const idJob = 1

const sessionStorageData = ref({
  id: '',
  token: ''
})
//--------------------------------------------------------------------------
//REGISTER USER
// START
//--------------------------------------------------------------------------

const contentRegisterUser = ref('');
const contactDefaulft = ref('');

const updateUser = async () => {
  console.log("Update")

    try {
      const response = await axios.put(`http://localhost/demo-bret/public/api/profile/update/${idJob}`, {
        image: formData.value.image, // Reemplaza con los nuevos datos
        name: formData.value.full_name, // Reemplaza con los nuevos datos
        phone_number: formData.value.phone, // Reemplaza con los nuevos datos
        province: formData.value.province, // Reemplaza con los nuevos datos
    });

    router.push('/profile')

    } catch (error) {
      console.error('Error al mostrar las categorias', error);
    }
};

function handleImageChange(event) {
  console.log("FOTOOOOO");
  const file = event.target.files[0];
  if (file) {
    // Puedes realizar alguna validación aquí si es necesario
    formData.value.image = file.name;
    console.log(file.name);
    console.log(file);
  }
  console.log(formData.value.image);
};
//--------------------------------------------------------------------------
//REGISTER USER
// END
//--------------------------------------------------------------------------

onMounted(async () => {
  try {

  }
  catch (error)
  {
    console.log("Error con getListCategories", error)
  }
})

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
          </div>
          <h1 class="ff-popins text-white d-flex justify-content-center mb-5">Editar Perfil</h1>
          <form @submit.prevent="updateUser" id="signUpForm" class="ff-popins mb-5">
            <!-- Image Upload -->
            <div class="form-floating mb-4">
              <input @change="handleImageChange" type="file" class="form-control rounded-register-input" id="signUp-Image" accept="image/*">
            </div>
            <!--          full_name-->
            <div class="form-floating mb-4">
              <input v-model="formData.full_name" type="text" class="form-control rounded-register-input" id="signUp-Name" placeholder="nameJob@example.com" required="">
              <label class="opacity-50 custom-label fs-5" for="signUp-Name"><i class="bi bi-envelope pe-2 "></i>Nombre Completo</label>
            </div>
            <!--          Phone-->
            <div class="form-floating my-4">
              <input v-model="formData.phone" type="text" class="form-control rounded-register-input" id="signUp-Cost" placeholder="nameJob@example.com" required="">
              <label class="opacity-50 custom-label fs-5" for="signUp-Cost"><i class="bi bi-envelope pe-2 "></i>Número de Teléfono</label>
            </div>
            <!--          Categorias-->
            <select v-model="formData.province" class="form-select my-4 rounded-register-input fs-5" aria-label="Default select example">
              <option v-for="(province, index) in listProvince" :value="province" :key="index">
                <div class="opacity-50 custom-label fs-5">
                  <i class="bi bi-envelope pe-2"></i>
                  {{ province }}
                </div>
              </option>
            </select>
            <div class="d-flex justify-content-center">
              <button
                  type="submit"
                  class="btn btn-primary rounded-4 w-100 bg-navbar-blue text-white border-0 ff-popins fw-light fs-5 hvr-sweep-to-right clr-dark-yellow">Agregar Trabajo
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
  </body>
</template>

<style scoped>

</style>