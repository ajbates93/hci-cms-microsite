<script setup lang="ts">
  import { useImage } from '@vueuse/core'
  
  const bannerUrl = '/images/homeheropage.jpg'
  const { isLoading } = useImage({ src: bannerUrl })  

</script>

<template>
  <div id="banner" min-h-screen>
    <div id="title"
      style="top: 50%; left: 50%; transform: translate(-50%, -50%);"
      absolute text-5xl text-center font-bold text-dark dark:text-white>Content Management Systems</div>
  </div>
</template>