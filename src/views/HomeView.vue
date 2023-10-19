<script setup>
import MainNavbar from "@/components/layout/MainNavbar.vue";
import HomeSearchBar from "@/components/home/Home-SearchBar.vue";
import HomeAboutUs from "@/components/home/Home-AboutUs.vue";
import HomeCardJobList from "@/components/home/Home-CardJobList.vue";
import HomeCardPopularList from "@/components/home/Home-CardPopularList.vue";
import MainFooter from "@/components/layout/MainFooter.vue";
</script>

<template>
  <main>
    <MainNavbar></MainNavbar>
    <HomeSearchBar></HomeSearchBar>
    <HomeAboutUs></HomeAboutUs>
    <HomeCardJobList></HomeCardJobList>
    <HomeCardPopularList></HomeCardPopularList>
    <MainFooter></MainFooter>
  </main>
</template>
