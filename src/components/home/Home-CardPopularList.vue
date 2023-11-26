<script setup>

import HomeCardPoular from "@/components/home/Home-CardPoular.vue";
</script>

<template>
  <!--Popular Start-->
  <div class="col-12 ">
    <div class="bg-container-popular py-5">
      <div class="col-10 container-fluid">
        <div class="row justify-content-center align-items-center text-center">
          <h1 class="my-4 title-font text-black ">Populares ahora</h1>
          <p class="text-center subtitle-font text-black fw-light">En BreT, nos enorgullecemos de nuestro equipo excepcional. Conoce a algunos de nuestros trabajadores más destacados cuya dedicación, pasión y experiencia han impulsado el éxito de su trabajo.
          </p>

          <div class="card-group mx-3 my-3 justify-content-center">
            <HomeCardPoular></HomeCardPoular>
          </div>
<!--          <a class="text-decoration-none text-black footer-font justify-content-center" href="">Ver todos</a>-->
        </div>
      </div>
    </div>
  </div>
  <!--Popular End-->
</template>

<style scoped>

</style>