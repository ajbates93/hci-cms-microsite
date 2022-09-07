<script setup lang="ts">
import Banner from "./components/Banner.vue";
import Header from "./components/Header.vue";
import DarkDivider from "./components/DarkDivider.vue";
import { ref } from 'vue'
import { useIntersectionObserver } from "@vueuse/core";

const target = ref<HTMLDivElement>()
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  target, 
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting
  })

</script>

<template>
  <Header />
  <Banner />
  <main id="main" role="main" bg-white min-h-300 text-center>
    <DarkDivider />
    <div ref="target" v-if="targetIsVisible">
      <div>Fully Bespoke</div>
      <div>Membership Management</div>
      <div>Daily & Weekly Backups</div>
      <div>Cloud Based</div>
    </div>
  </main>
</template>

<style scoped>

</style>
