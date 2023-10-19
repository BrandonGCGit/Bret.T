<script setup>

import ProfileNavbar from "@/components/layout/ProfileNavbar.vue";
import ProfileCardJobList from "@/components/profile/Profile-CardJobList.vue";
import ProfileCardInfo from "@/components/profile/Profile-CardInfo.vue";
</script>

<template>

  <ProfileNavbar></ProfileNavbar>


  <!--Info User-->

  <div class="col-12 p-0 m-0">
    <div class="col-10 container-fluid pt-4">
      <div class="d-flex justify-content-start">
        <div class="card-profile bg-light-blue">
          <p class="title-pf">Hola, usuario</p>
          <p class="subtitle-pf">Desarrollador web</p>
          <p class="pub-pf">Crea una publicaciones para mostrar tus habilidades y conseguir clientes </p>

          <div class="d-flex justify-content-end">
            <button class="btn-pub text-white">Publicar</button>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <ProfileCardJobList></ProfileCardJobList>
        <ProfileCardInfo></ProfileCardInfo>
      </div>
    </div>

  </div>

  <!--Info User-->
</template>

<style scoped>

</style>