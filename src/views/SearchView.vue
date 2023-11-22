<script setup>
import MainNavbar from "@/components/layout/MainNavbar.vue";
import SearchViewBar from "@/components/SearchView/SearchViewBar.vue";
import MainFooter from "@/components/layout/MainFooter.vue";
import Loader from "@/components/layout/Loader.vue";
</script>

<template>
  <main>
    <Loader></Loader>
    <MainNavbar></MainNavbar>
    <SearchViewBar></SearchViewBar>
    <MainFooter></MainFooter>
  </main>
</template>
