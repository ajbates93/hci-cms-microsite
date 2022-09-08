<script setup lang="ts">
import Banner from "./components/Banner.vue";
import Header from "./components/Header.vue";
import DarkDivider from "./components/DarkDivider.vue";
import { ref } from 'vue'
import { useElementVisibility } from "@vueuse/core";

const target = ref<HTMLDivElement>()
const targetIsVisible = useElementVisibility(target)

</script>

<template>
  <Header />
  <Banner />
  <main id="main" role="main" dark:bg-white bg-slate-3 transition min-h-300 text-center>
    <DarkDivider />
    <div ref="target" :class="targetIsVisible ? ['active'] : ''">
      <div>Fully Bespoke</div>
      <div>Membership Management</div>
      <div>Daily & Weekly Backups</div>
      <div>Cloud Based</div>
    </div>
  </main>
</template>

<style scoped>

</style>
