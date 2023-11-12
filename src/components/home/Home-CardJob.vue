<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";

const listCategories = ref([])
const listCategoriesImages = ref([])

const getListCategories = async () => {
  try {
    const response = await axios.get(`http://localhost/demo-bret/public/api/category/all`);
    listCategories.value = response.data.data.map(item => item.nameCategory);
    listCategoriesImages.value = response.data.data.map(item2 => item.image);
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
  <div class="category-homecard card mx-3 rounded-3 my-3" v-for="(item, item2, index) in listCategoriesImages" v-bind:key="index">
    <img v-bind:src="require(`@/assets/img/${item}`)" class="card-img-top img-cards mx-auto mt-5 mb-4"
         alt="a">
    <div class="card-body">

    </div>
  </div>
</template>

<style scoped>

</style>