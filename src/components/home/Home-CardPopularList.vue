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
          <p class="text-center subtitle-font text-black fw-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quia ipsam, doloremque accusantium recusandae voluptatibus saepe officia blandit
          </p>

          <div class="card-group mx-5 my-3">
            <HomeCardPoular></HomeCardPoular>
          </div>
<!--          <a class="text-decoration-none text-black footer-font" href="">Ver todos</a>-->
        </div>
      </div>
    </div>
  </div>
  <!--Popular End-->
</template>

<style scoped>

</style>