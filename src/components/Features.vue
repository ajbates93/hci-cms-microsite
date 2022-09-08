<script setup lang="ts">
import { ref } from 'vue'
import { useElementVisibility } from "@vueuse/core";

const target = ref<HTMLDivElement>()
const targetIsVisible = useElementVisibility(target)
</script>

<template>
  <div ref="target" :class="targetIsVisible ? ['active'] : ''">
    <div>Fully Bespoke</div>
    <div>Membership Management</div>
    <div>Daily & Weekly Backups</div>
    <div>Cloud Based</div>
  </div>
</template>

<style scoped>

</style>