<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";

const listJobs = ref([])
const getListJobs = async () => {
  try {
    const response = await axios.get(`http://localhost/demo-bret/public/api/job/all`);
    listJobs.value = response.data.data.map(item => item.nameJob);

  }catch (error){
    console.error("Error con a cargar lista trabajos: ", error)
  }
}

onMounted(async () => {
  try {
    await getListJobs()
  }
  catch (error)
  {
    console.log("Error con getListJobs", error)
  }
})

/*defineProps({
  listJobs: []
})*/

</script>

<template>
  <div class="section-dropdown">
    <div v-bind:key="index" v-for="(item, index) in listJobs">
      <a href="#">{{item}}<i class="bi bi-arrow-up-short fs-5"></i></a>
    </div>
<!--    <input class="dropdown-sub" type="checkbox" id="dropdown-sub1" name="dropdown-sub"/>-->
<!--    <label class="for-dropdown-sub" for="dropdown-sub1">Web<i class="bi bi-plus-lg"></i></label>-->
<!--    <div class="section-dropdown-sub">-->
<!--      <a class=" dropdown-edit-pers " href="#">Diseñador Web<i class="bi bi-arrow-up-short fs-5 "></i></a>-->
<!--      <a href="#">Programador<i class="bi bi-arrow-up-short fs-5"></i></a>-->
<!--    </div>-->
<!--    <a href="#">Mecanica<i class="bi bi-arrow-up-short fs-5"></i></a>-->
<!--    <a href="#">Hogar<i class="bi bi-arrow-up-short fs-5"></i></a>-->
  </div>
</template>

<style scoped>

</style>