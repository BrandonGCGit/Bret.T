<script setup>

import HomeCardJob from "@/components/home/Home-CardJob.vue";
/*
import {onMounted, ref} from "vue";
import axios from "axios";

const listCategories = ref({
  name: "",
  img: ""
})
const getListCategories = async () => {
  try {
    const response = await axios.get(`http://localhost/demo-bret/public/api/category/all`);
    console.log(response)
    // listCategories.value.name = response.data.data.map(item => item.nameCategory);
    // listCategories.value.img = response.data.data.map(item => item.img);

  }catch (error){
    console.error("Error con a cargar lista categorias: ", error)
  }
}
onMounted(async () => {
  try {
    await getListCategories()
  }
  catch (error)
  {
    console.log("Error con getListCategories", error)
  }
})*/

</script>

<template>

  <!--Cards Job Start-->
  <div class="col-12 p-0 m-0">
    <div class="bg-container-categories py-5">
      <div class="col-10 container-fluid">
        <div class="row justify-content-center align-items-center text-center mb-5">
          <h1 class="my-4 title-font">Servicios más importantes</h1>
          <p class="text-center subtitle-font fw-light">Descubre nuestra amplia gama de servicios esenciales, cuidadosamente diseñados para mejorar tu experiencia
          </p>

          <div class="card-group mx-5 my-3">
            <HomeCardJob></HomeCardJob>
          </div>
          <!--<div class="card-group mx-5 my-3">
            <HomeCardJob></HomeCardJob>
            <HomeCardJob></HomeCardJob>
            <HomeCardJob></HomeCardJob>
            <HomeCardJob></HomeCardJob>
          </div>-->

        </div>
      </div>
    </div>
  </div>
  <!--Cards Job End-->


</template>

<style scoped>

</style>