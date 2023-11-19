<script setup>
import ProfileCardJob from "@/components/profile/Profile-CardJob.vue";
import {onBeforeMount, onMounted, ref, watch} from "vue";
import axios from "axios";

defineProps({
  listJobs: Array,
  isLogged: Boolean
})


function getCategoryName ($number) {
  console.log(keyValueObject);
  for (let i = 0; i < keyValueObject.length; i++) {
    if(keyValueObject[i] == $number) {
      return keyValueObject[i+1]
    }
  }
}


const keyValueObject = []

onBeforeMount(async () =>{

})

onMounted(async () => {
  try {

    const response = await axios.get(`http://localhost/demo-bret/public/api/category/all`);
    const myObject = response.data.data
    
    for (let i = 0; i < myObject.length; i++) {
      keyValueObject.push(myObject[i].id);
      keyValueObject.push(myObject[i].nameCategory);
    }

  }
  catch (error)
  {
    console.log("Error con getListCategories", error)
  }
})


</script>

<template>

  <div v-for="job in listJobs" :key="job.id">
    <ProfileCardJob
        :is-logged="this.isLogged"
        :id="job.id"
        :name="job.nameJob"
        :categories_id=" getCategoryName(job.categories_id)"
        :cost="job.cost"
        :description="job.description"
        :created_at="job.created_at"
    ></ProfileCardJob>
  </div>

</template>

<style scoped>

</style>