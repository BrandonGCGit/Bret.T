<script setup>
import {onBeforeMount, onMounted, ref, watch} from "vue";
import axios from "axios";
import router from "@/router";

const sessionStorageData = ref({
  id: '',
  token: ''
})

defineProps({
  id: String,
  name: String,
  cost: String,
  description: String,
  created_at: String
})


const deleteJob = async ($id) => {
  console.log("ID de la Card", $id);
  console.log("ID del usuario", sessionStorageData.value.id);
  
  try {
    const response = await axios.get(`http://localhost/demo-bret/public/api/profile_job/destroy/` + $id);
    const response2 = await axios.get(`http://localhost/demo-bret/public/api/job/destroy/` + $id);

  } catch (error){
      console.error('Error al eliminar', error)
  }
  
}

onBeforeMount(async () => {

  // Almacenar los datos del Session
  sessionStorageData.value.id = sessionStorage.getItem('id')
  sessionStorageData.value.token = sessionStorage.getItem('token')

})

</script>

<template>
  <div class="card-works shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-3">
    <div class="d-flex justify-content-between">
      <p class="title-work pt-4 mb-1">{{name}}</p>
      <button @click="deleteJob(id)" class="btn-delete pt-2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
        <path d="M1.41971 19C1.41758 19.2628 1.52652 19.5157 1.72263 19.7031C1.91875 19.8906 2.18602 19.9973 2.46584 20H14.5711C14.8509 19.9973 15.1182 19.8906 15.3143 19.7031C15.5104 19.5157 15.6193 19.2628 15.6172 19V5.66667H1.41971V19ZM2.83946 7H14.1975V18.6667H2.83946V7Z" fill="#1C5D99"/>
        <path d="M6.03401 8.33333H4.61426V16.6667H6.03401V8.33333Z" fill="#1C5D99"/>
        <path d="M9.22834 8.33333H7.80859V16.6667H9.22834V8.33333Z" fill="#1C5D99"/>
        <path d="M12.4227 8.33333H11.0029V16.6667H12.4227V8.33333Z" fill="#1C5D99"/>
        <path d="M11.7129 3V1C11.7129 0.43925 11.292 0 10.7546 0H6.2824C5.74502 0 5.32406 0.43925 5.32406 1V3H0V4.33333H17.037V3H11.7129ZM6.74382 1.33333H10.2932V3H6.74382V1.33333Z" fill="#1C5D99"/>
      </svg></button>
    </div>
    <p class="color-darkblue amount-work mb-2">{{cost}} Colones</p>
    <p class="description-work">{{description}}</p>
    <div class="d-flex justify-content-between mt-5">
      <p class="date-work">Publicado el {{created_at}}</p>
      <div class="d-flex gap-4">
        <button class="btn-imp text-white">Impulsar</button>
        <button class="btn-edit text-dark">Editar detalles</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>