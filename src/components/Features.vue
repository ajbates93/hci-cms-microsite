<script setup lang="ts">
import { ref } from 'vue'
import { useElementVisibility } from "@vueuse/core";

const features = ref<HTMLDivElement>()
const targetIsVisible = useElementVisibility(features)
</script>

<template>
  <section ref="features" transition opacity-0 dark:text="#fff"
    max-w-300 mx-auto px10
    :class="targetIsVisible ? ['active opacity-100'] : ''">
    <div class="section" mb15 text-left flex justify-between>
      <div class="section-content">
        <div text-5xl mb5 font-bold class="feature-title">Fully Bespoke</div>
        <div text-xl mb5 font-mono class="feature-subtitle">Fully Bespoke lorem ipsum delorum</div>
      </div>
      <div class="section-image" max-w-110 rounded-lg overflow-auto ml5>
        <picture>
          <img src="/images/feature-1.png" alt="feature image" title="Fully Bespoke and Customisable Interface" />
        </picture>
      </div>
    </div>
    <div class="section" mb15 text-right flex justify-between>
      <div class="section-image" max-w-110 rounded-lg overflow-auto mr5>
        <picture>
          <img src="/images/feature-2.png" alt="feature image" title="Membership Management" />
        </picture>
      </div>
      <div class="section-content">
        <div text-5xl mb5 font-bold class="feature-title">Membership Management</div>
        <div text-xl mb5 font-mono class="feature-subtitle">Have full control over your memberships</div>
      </div>
    </div>
    <div class="section" mb10 text-left>
      <div text-5xl mb5 font-bold class="feature-title">Daily & Weekly Backups</div>
      <div text-xl mb5 font-mono class="feature-subtitle">We keep your data safe</div>
    </div>
    <div class="section" mb10 text-right>
      <div text-5xl mb5 font-bold class="feature-title">Cloud Based</div>
      <div text-xl mb5 font-mono class="feature-subtitle">Something about cloud lorem ipsum delorum</div>
    </div>
  </section>
</template>

<style scoped>

</style>