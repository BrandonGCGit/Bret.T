<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
const listCategories = ref([])
const getListCategories = async () => {
  try {
    const response = await axios.get("http://localhost/demo-bret/public/api/category/all");
    listCategories.value = response.data.data.map(item => ({
      categoryname: item.nameCategory,
      image: '/src/assets/img/'+ item.image}));
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
})
</script>

<template>
  <div class="category-homecard card mx-3 rounded-3 my-3" v-for="(item, index) in listCategories" v-bind:key="index">
    <img :src="item.image" class="card-img-top img-cards mx-auto mt-5 mb-4" alt="a">
    <div class="card-body">
      <h5 class="card-title cards-font bt-3 mb-3">{{ item.categoryname }}</h5>
    </div>
  </div>
</template>
<style scoped>
</style>