<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";

const listCategories = ref([])
// <<<<<<< HEAD
const listCategoriesImages = ref([])
// =======

// const imgpath = "../../assets/img/a.png"
// >>>>>>> 9f727d2055ffef4643ff393e02a12e7f1c76e0ab

const getListCategories = async () => {
  try {
    const response = await axios.get(`http://localhost/demo-bret/public/api/category/all`);
// <<<<<<< HEAD
    listCategories.value = response.data.data.map(item => item.nameCategory);
    // listCategoriesImages.value = response.data.data.map(item2 => item.image);
// =======
//     listCategories.value.push(response.data.data)

// >>>>>>> 9f727d2055ffef4643ff393e02a12e7f1c76e0ab
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
<!--<<<<<<< HEAD-->
  <div class="category-homecard card mx-3 rounded-3 my-3" v-for="(item, item2, index) in listCategoriesImages" v-bind:key="index">
    <img v-bind:src="require(`@/assets/img/${item}`)" class="card-img-top img-cards mx-auto mt-5 mb-4"
         alt="a">
    <div class="card-body">

<!--=======-->
<!--  <div class="category-homecard card mx-3 rounded-3 my-3" v-for="(item, index) in listCategories[0]" v-bind:key="index">-->
<!--    <img-->
<!--        src="@/assets/img/a.png"-->
<!--        class="card-img-top img-cards mx-auto mt-5 mb-4"-->
<!--        :alt="item.image">-->
<!--    <div class="card-body">-->
<!--      <h5 class="card-title cards-font bt-3 mb-5">{{ item.nameCategory }}</h5>-->
<!--&gt;>>>>>> 9f727d2055ffef4643ff393e02a12e7f1c76e0ab-->
    </div>
  </div>
</template>

<style scoped>

</style>