<script setup lang="ts">
  import { useImage } from '@vueuse/core'
  
  const bannerUrl = '/images/homeheropage.jpg'
  const { isLoading } = useImage({ src: bannerUrl })  

</script>

<template>
  <div id="banner" min-h-screen>
    <div style="top: 50%; left: 50%; transform: translate(-50%, -50%);"
        absolute text-5xl text-center font-bold text-dark dark:text-white>
      <div id="title">Content Management Systems</div>
      <div id="subtitle" text-xl mt-10 font-mono style="letter-spacing: 2px;">By HCI</div>
    </div>
    <div absolute bottom-0 flex justify-center w-full p10>
      <button inline-block align-middle i="iconoir-arrow-down-circled" text-3xl text-dark dark:text-white></button>
    </div>
  </div>
</template>