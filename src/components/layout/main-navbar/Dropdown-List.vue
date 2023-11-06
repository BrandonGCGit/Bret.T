<script setup>
import DropdownItem from "@/components/layout/main-navbar/Dropdown-Item.vue";
import {onMounted, ref} from "vue";
import axios from "axios";

//const jobs = ref([{ job: 'Chef' }, { job: 'Programador' }])

</script>

<template>
  <li class="nav-item dropdown text-white">
    <div class="sec-center">
      <input class="dropdown" type="checkbox" id="dropdown1" name="dropdown"/>
      <label class="for-dropdown ff-popins fs-5" for="dropdown1">Trabajos <i class="bi bi-arrow-up-short fs-3"></i></label>
      <DropdownItem></DropdownItem>
    </div>
  </li>
</template>

<style scoped>

</style>