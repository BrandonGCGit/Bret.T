<script setup>
import ProfileNavbar from "@/components/layout/ProfileNavbar.vue";
import ProfileCardJobList from "@/components/profile/Profile-CardJobList.vue";
import ProfileCardInfo from "@/components/profile/Profile-CardInfo.vue";
import {onBeforeMount, onMounted, ref, watch} from "vue";
import axios from "axios";





const loading = ref(false);

const dataProfile = ref({
  id: '',
  name: '',
  phone_number: '',
  province: '',
  image: '',
  ratings_id: '',
  contacts_id: '',
  users_id: '',
  profile_id: ''
})

const sessionStorageData = ref({
  id: '',
  token: ''
})

//Tiene los ids de los trabajos del usuario, tabla tbl_profile_jobs
const listJobsID = ref('')

//Lista con los trabajos para imprimirlos en html
const listJobs = ref([])




const getProfileData = async () =>{
  loading.value = true;
  try {
    const response = await axios.get(`http://localhost/demo-bret/public/api/profile/${sessionStorageData.value.id}`);

    dataProfile.value.id = response.data.data.id
    dataProfile.value.name = response.data.data.name
    dataProfile.value.phone_number = response.data.data.phone_number
    dataProfile.value.province = response.data.data.province
    dataProfile.value.image = response.data.data.image
    dataProfile.value.ratings_id = response.data.data.ratings_id
    dataProfile.value.contacts_id = response.data.data.contacts_id
    dataProfile.value.users_id = response.data.data.users_id

    // console.log("Full name response?: ", response.data.data.name)
    // console.log("Full name?: ", dataProfile.value)

  }catch (error){
    console.error("Error con cargar datos del profile: ", error)
  }finally {
    loading.value = false;
  }
}

const getListJobsID = async () =>{
  try {
    const response = await axios.get(`http://localhost/demo-bret/public/api/profile_job/${dataProfile.value.id}`);
    listJobsID.value = response.data.data
    // console.log('Datos de getlistjobs',listJobsID.value)
  }catch (error){
    console.error("Error con a cargar lista jobs: ", error)
  }finally {
    loading.value = false;
  }
}

const getListJobs = async () => {
  try {
    for (let i = 0; i < listJobsID.value.length; i++) {
      const response = await axios.get(`http://localhost/demo-bret/public/api/job/${listJobsID.value[i].jobs_id}`);
      //Recorriendo el arreglo de jobs lo voy poniendo uno a uno en el arreglo listJobs.value.jobs
      listJobs.value.push(response.data.data)
    }
    // console.log('Datos get job: ', listJobs)
  }catch (error){
    console.error("Error con a cargar lista jobs: ", error)
  }finally {
    loading.value = false;
  }
}


onBeforeMount(async () => {

  // Almacenar los datos del Session
  sessionStorageData.value.id = sessionStorage.getItem('id')
  sessionStorageData.value.token = sessionStorage.getItem('token')


  try {
    await getProfileData()

    try {
      await getListJobsID()

      try {
        await getListJobs()

      }catch (error){
        console.error('Error con getListJobs', error)
      }
    } catch (error) {
      console.log('Error con getListJobsID', error)
    }
  } catch (error) {
    console.error('Error con GetProfileData', error)
  }


})

</script>

<template>

  <ProfileNavbar :token="sessionStorageData.token"></ProfileNavbar>


  <!--Info User-->

  <div class="col-12 p-0 m-0">
    <div class="col-10 container-fluid pt-4">
      <div class="d-flex justify-content-start">
        <div class="card-profile bg-light-blue">
          <p class="title-pf">Hola, {{dataProfile.name}}</p>
          <p class="pub-pf">Crea una publicaciones para mostrar tus habilidades y conseguir clientes </p>

          <div class="d-flex justify-content-end">
            <button class="btn-pub text-white">Publicar</button>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="col-6">
          <ProfileCardJobList
              v-if="listJobs.length > 0"
              :list-jobs="listJobs" ></ProfileCardJobList>
          <div v-else>Cargando Datos...</div>
        </div>
          <ProfileCardInfo
              :info-profile="dataProfile"
          ></ProfileCardInfo>
      </div>
    </div>

  </div>

  <!--Info User-->
</template>

<style scoped>

</style>