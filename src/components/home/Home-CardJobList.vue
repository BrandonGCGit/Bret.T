<script setup>

import HomeCardJob from "@/components/home/Home-CardJob.vue";
</script>

<template>

  <!--Cards Job Start-->
  <div class="col-12 p-0 m-0">
    <div class="bg-container-categories py-5">
      <div class="col-10 container-fluid">
        <div class="row justify-content-center align-items-center text-center">
          <h1 class="my-4 title-font">Servicios más importantes</h1>
          <p class="text-center subtitle-font fw-light">Descubre nuestra amplia gama de servicios esenciales, cuidadosamente diseñados para mejorar tu experiencia
          </p>

          <div class="card-group mx-5">
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