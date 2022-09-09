<script setup lang="ts">
  
</script>

<template>
  <div id="pricingTable">
    <div class="table-inner"
      grid grid-cols-5>
      <div class="pt-column" bg-gray></div>
      <div class="pt-column" shadow rounded-lg bg-white>
        <div class="pt-col-header" text-xl>Basic</div>
      </div>
      <div class="pt-column" shadow rounded-lg bg-white>
        <div class="pt-col-header" text-xl>Standard</div>
        
      </div>
      <div class="pt-column" 
        style="scale: 1.2;" bg-green-7 shadow rounded-lg bg-white>
        <div class="pt-col-header" text-3xl>Premium</div>
        
      </div>
      <div class="pt-column" shadow rounded-lg bg-white>
        <div class="pt-col-header" text-xl>Bespoke</div>

      </div>
    </div>
  </div>
</template>
<style scoped>

</style>