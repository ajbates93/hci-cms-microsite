<template>
  <div id="divider" :class="[theme === 'dark' ? 'dark' : 'light', !flip ? 'dark:bg-slate-7 bg-slate-3' : 'dark:bg-dark bg-slate-4']">
    <svg v-if="!flip" viewBox="0 0 500 125" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.99 C133.41,87.33 271.49,-49.99 500.00,49.99 L500.00,0.00 L0.00,0.00 Z" style="stroke: none;"></path></svg>
    <svg v-else viewBox="0 0 500 125" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C93.40,180.11 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style="stroke: none;"></path></svg>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    theme: string,
    flip?: boolean
  }
  const { theme, flip } = defineProps<Props>()

  // const { theme, flip } = defineProps({
  //   theme: {
  //     type: String,
  //     required: true
  //   },
  //   flip: {
  //     type: Boolean,
  //     required: false
  //   }
  // })
</script>