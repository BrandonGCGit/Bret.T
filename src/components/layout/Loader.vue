<template>
  <div>
    <div v-show="loading" class="position-fixed top-100 start-50 translate-middle z-2" style="width: 100%; height: 100vh;">
      <img class="d-flex mx-auto " src="@/assets/img/loader.gif" alt="loading">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    };
  },
  mounted() {
   
    setTimeout(() => {
      this.loading = false; 
    }); 
  }
};
</script>

<style scoped>

</style>
