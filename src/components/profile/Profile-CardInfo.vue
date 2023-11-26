<script setup>

import {ref} from "vue";
import router from "@/router";

defineProps({
  infoProfile: ref([]),
  isLogged: Boolean,
  dataStatus: Boolean,
  dataShow: Boolean
})
const editProfile = async ($id) => {
  console.log("ID PROFILE CARD-INFO",$id)
  router.push(`/editProfile/${$id}`)
}

</script>

<template>
  <div class="card-info bg-light-blue">
    <div class="d-flex justify-content-center">
      <img :src="infoProfile.image" class="icon-info" alt="profile">
    </div>
    <div class="d-flex justify-content-center pt-3">
      <p class="name-prof"> {{infoProfile.name}} <span class="ms-1"><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
        <rect x="4" y="3.99995" width="19" height="19" fill="#1C5D99"/>
        <rect y="10.6304" width="19.5183" height="19.5183" transform="rotate(-33 0 10.6304)" fill="#1C5D99"/>
        <rect x="0.615234" y="18.446" width="19.5183" height="19.5183" transform="rotate(-66 0.615234 18.446)" fill="#1C5D99"/>
        <path d="M7 13L11.2279 16.805C11.6495 17.1845 12.3019 17.1377 12.665 16.7019L19.5 8.49998" stroke="#BBCDE5" stroke-width="2"/>
      </svg></span></p>
    </div>
    <div class="d-flex justify-content-center">
    </div>
    <div v-if="dataShow" class="d-flex justify-content-center pt-2">
      <p class="subs-prof color-darkblue"><i class="bi bi-geo-alt icon-ubi text-dark me-1"></i>{{infoProfile.province}}</p>
    </div>
    
    <div class="d-flex justify-content-center pt-3">
      <button v-if="isLogged" @click="editProfile(infoProfile.id)" class="work-prof color-darkblue p-0 m-0">Añadir información</button>
    </div>
    <div v-if="dataShow" class="d-flex justify-content-between pt-3">
      <p class="subs-prof m-0">DESCRIPCIÓN</p>
      <button v-if="isLogged" @click="editProfile(infoProfile.id)" class="work-prof color-darkblue p-0 m-0">Editar</button>
    </div>
    <div v-if="dataShow" class="d-flex pt-2">
      <p class="description-prof m-0">{{infoProfile.description}}</p>
    </div>
    <div v-if="dataShow" class="d-flex pt-4">
      <p class="subs-prof m-0">HABILIDADES</p>
    </div>
    <div v-if="dataShow" class="d-flex pt-2">
      <p class="description-prof m-0">{{infoProfile.abilities}}</p>
    </div>
    <div v-if="dataShow" class="d-flex pt-4">
      <p class="subs-prof m-0">CONTACTAR</p>
    </div>
    <div v-if="dataShow" class="pt-2 color-darkblue">
      <p class="description-prof m-0">{{infoProfile.phone_number}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>