<script setup lang="ts">
import Banner from "./components/Banner.vue";
import Header from "./components/Header.vue";
import DarkDivider from "./components/DarkDivider.vue";
import Features from "./components/Features.vue";


</script>

<template>
  <Header />
  <Banner />
  <main id="main" role="main" dark:bg-slate-7 bg-slate-3 transition min-h-300 text-center>
    <DarkDivider />
    <Features />
  </main>
</template>

<style scoped>

</style>
