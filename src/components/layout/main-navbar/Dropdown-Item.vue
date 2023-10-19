<script setup>


defineProps({
  jobs: []
})

</script>

<template>
  <div class="section-dropdown">
    <div v-bind:key="index" v-for="(item, index) in jobs">
      <a href="#">{{item.job}}<i class="bi bi-arrow-up-short fs-5"></i></a>
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