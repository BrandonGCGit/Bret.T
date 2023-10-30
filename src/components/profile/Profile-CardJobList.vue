<script setup>
import ProfileCardJob from "@/components/profile/Profile-CardJob.vue";

defineProps({
  listJobs: Array
})



</script>

<template>

  <div v-for="job in listJobs" :key="job.id">
    <ProfileCardJob
        :name="job.nameJob"
        :cost="job.cost"
        :description="job.description"
        :created_at="job.created_at"
    ></ProfileCardJob>
  </div>

</template>

<style scoped>

</style>