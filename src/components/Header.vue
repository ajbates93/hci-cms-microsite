<script setup lang="ts">
  import { useToggle, useDark, useWindowScroll } from '@vueuse/core'
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
  const imageUrl = "./images/logo.png"
  const imageUrlLight = "./images/logo-light.svg"
  const { x, y } = useWindowScroll()
</script>

<template>
  <header absolute top-0 w-full>
    <nav flex items-start justify-between p5>
      <picture max-w-30 inline-block w-full>
        <img :src="isDark ? imageUrl : imageUrlLight" alt="logo" title="HCI York" />
      </picture>
      <button @click="toggleDark()" flex items-center p="y1 x2" rounded bg-brand-green text-white border-b="2px #36986c" hover:bg="[#3cab7a]">
        <i inline-block align-middle i="carbon-moon dark:carbon-sun"></i>
        <span font-bold ml2 dark:text-white>{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
      </button>
    </nav>
  </header>
</template>

<style lang="less" scoped>

</style>