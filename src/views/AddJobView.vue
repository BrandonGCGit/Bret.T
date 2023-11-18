<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import router from "@/router";
import {useRoute} from "vue-router";

const formData = ref({
  nameJob: '',
  description: '',
  cost: 0,
  categories_id: ''
});

const defaultDataJob = ref({
  nameJob: 'defaultName.png',
  description: 'Unknown',
  cost: 0,
  categories_id: 'Unknown',
})

//Tiene los ids de los trabajos del usuario, tabla tbl_profile_jobs
const listCategories = ref([])
const getListCategories = async () => {
  try {
    const response = await axios.get(`http://localhost/demo-bret/public/api/category/all`);
    listCategories.value = response.data.data.map(item => item.nameCategory);
  }catch (error){
    console.error("Error con a cargar lista categorias: ", error)
  }
}


const idProfile = useRoute().params.id

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
const newJobId = ref('');

const registerUser = async () => {
  try {
    const response =  await axios.get(`http://localhost/demo-bret/public/api/category_id/${formData.value.categories_id}`);
    formData.value.categories_id = response.data.data.id;

    try {
      contentRegisterUser.value = `nameJob=${formData.value.nameJob}&description=${formData.value.description}&cost=${formData.value.cost}&categories_id=${formData.value.categories_id}`;
      const response =  await axios.post('http://localhost/demo-bret/public/api/job/store', contentRegisterUser.value);
      newJobId.value = response.data.data.id
      try {
        contactDefaulft.value = `profiles_id=${idProfile}&jobs_id=${newJobId.value}`
        const response = await axios.post('http://localhost/demo-bret/public/api/profile_job/store', contactDefaulft.value);
        router.push('/profile')
      } catch (error) {
        console.error('Error al crear la tabla', error);
      }

    } catch (error) {
      console.error('Error al registrar el trabajp:', error);
    }

  } catch (error) {
    console.error('Error al registrar el trabajp:', error);
  }
};
//--------------------------------------------------------------------------
//REGISTER USER
// END
//--------------------------------------------------------------------------

onMounted(async () => {
  try {
    await getListCategories()
    
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
          <h1 class="ff-popins text-white d-flex justify-content-center mb-5">Datos de Publicación</h1>
          <form @submit.prevent="registerUser" id="signUpForm" class="ff-popins mb-5">
            <!--          Name-->
            <div class="form-floating mb-4">
              <input v-model="formData.nameJob" type="text" class="form-control rounded-register-input" id="signUp-Name" placeholder="nameJob@example.com" required="">
              <label class="opacity-50 custom-label fs-5" for="signUp-Name"><i class="bi bi-envelope pe-2 "></i>Nombre</label>
            </div>
            <!--          Description-->
            <div class="form-floating my-4">
              <input v-model="formData.description" type="text" class="form-control rounded-register-input" id="signUp-Description" placeholder="nameJob@example.com" required="">
              <label class="opacity-50 custom-label fs-5" for="signUp-Description"><i class="bi bi-envelope pe-2 "></i>Descripción</label>
            </div>
            <!--          Tarifa-->
            <div class="form-floating my-4">
              <input v-model="formData.cost" type="text" class="form-control rounded-register-input" id="signUp-Cost" placeholder="nameJob@example.com" required="">
              <label class="opacity-50 custom-label fs-5" for="signUp-Cost"><i class="bi bi-envelope pe-2 "></i>Tarifa (Colones)</label>
            </div>
            <!--          Categorias-->
            <select v-model="formData.categories_id" class="form-select my-4 rounded-register-input fs-5" aria-label="Default select example">
              <option v-for="(categories_id, index) in listCategories" :value="categories_id" :key="index">
                <div class="opacity-50 custom-label fs-5">
                  <i class="bi bi-envelope pe-2"></i>
                  {{ categories_id }}
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