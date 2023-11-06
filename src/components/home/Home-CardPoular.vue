<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";

const listProfiles = ref([])
const getListProfiles = async () => {
  try {
    const response = await axios.get(`http://localhost/demo-bret/public/api/profile/all`);
    /*listProfiles.value = response.data.data.map(item => item.nameCategory);*/

    const profileData = response.data.data.map(item => ({
      nameProfile: item.name,
      image: 'src/assets/img/'+ item.image
    }));
    listProfiles.value = profileData;

  }catch (error){
    console.error("Error con a cargar lista perfiles: ", error)
  }
}

onMounted(async () => {
  try {
    await getListProfiles()
    console.log(listProfiles);
  }
  catch (error)
  {
    console.log("Error con getListProfiles", error)
  }
})

</script>

<template>
  <div class="card mx-3 rounded-3 my-3 profile-homecard" v-for="(item, index) in listProfiles" v-bind:key="index">
    <img :src="item.image" class="card-img-top img-cards mx-auto mt-5 mb-4"
         alt="a">
    <div class="card-body">
      <h5 class="card-title cards-font bt-3 mb-5">{{ item.nameProfile }}</h5>
    </div>
  </div>
</template>

<style scoped>

</style>