<script setup lang="ts">
import Banner from "./components/Banner.vue";
import Header from "./components/Header.vue";
import Divider from "./components/Divider.vue";
import Features from "./components/Features.vue";
import Pricing from "./components/Pricing.vue";


</script>

<template>
  <Header />
  <Banner />
  <main id="main" role="main" dark:bg-slate-7 bg-slate-3 transition text-center>
    <Divider theme="dark" />
    <section id="features">
      <Features />
    </section>
    <section id="pricing" dark:bg-dark bg-white>
      <Divider theme="dark" flip />
      <Pricing />
    </section>
  </main>
</template>

<style scoped>

</style>
