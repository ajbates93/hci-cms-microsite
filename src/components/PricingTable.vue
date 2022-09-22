<script setup lang="ts">
  
</script>

<template>
  <div id="pricingTable">
    <div class="table-inner"
      grid grid-cols-5 my20>
      <div class="pt-column" bg-transparent>
        <div class="pt-col-title"></div>
        <div class="pt-col-subtitle" min-h-26></div>
        <div class="pt-col-features" bg-gray>
          <div border="t b #eee" flex justify-center items-center py1 text-2xl p3>Feature 1</div>
          <div border="b #eee" flex justify-center items-center py1 text-2xl p3>Feature 2</div>
          <div border="b #eee" flex justify-center items-center py1 text-2xl p3>Feature 3</div>
          <div border="b #eee" flex justify-center items-center py1 text-2xl p3>Feature 4</div>
          <div border="b #eee" flex justify-center items-center py1 text-2xl p3>Feature 5</div>
        </div>
      </div>
      <div class="pt-column" shadow rounded-lg bg-white py3>
        <div class="pt-col-title" text-2xl font-bold px3>Basic</div>
        <div class="pt-col-subtitle" text-left text-gray-5 my3 px3>Lorem ipsum dolor, sit amet consectetur adipisicing elit!</div>
        <div class="pt-col-features" text-center>
          <div border="t b #eee" flex justify-center items-center py1><i text-green-6 text-5xl inline-block i="iconoir-check"></i></div>
          <div border="b #eee" flex justify-center items-center py1><i text-orange-3 text-5xl inline-block i="iconoir-cancel"></i></div>
          <div border="b #eee" flex justify-center items-center py1><i text-orange-3 text-5xl inline-block i="iconoir-cancel"></i></div>
          <div border="b #eee" flex justify-center items-center py1><i text-orange-3 text-5xl inline-block i="iconoir-cancel"></i></div>
          <div border="b #eee" flex justify-center items-center py1><i text-orange-3 text-5xl inline-block i="iconoir-cancel"></i></div>
        </div>
      </div>
      <div class="pt-column" shadow rounded-lg bg-white py3>
        <div class="pt-col-title" text-2xl font-bold px3>Standard</div>
        <div class="pt-col-subtitle" text-left text-gray-5 my3 px3>Lorem ipsum dolor, sit amet consectetur adipisicing elit!</div>
        <div class="pt-col-features" text-center>
          <div border="t b #eee" flex justify-center items-center py1><i text-green-6 text-5xl inline-block i="iconoir-check"></i></div>
          <div border="b #eee" flex justify-center items-center py1><i text-green-6 text-5xl inline-block i="iconoir-check"></i></div>
          <div border="b #eee" flex justify-center items-center py1><i text-orange-3 text-5xl inline-block i="iconoir-cancel"></i></div>
          <div border="b #eee" flex justify-center items-center py1><i text-orange-3 text-5xl inline-block i="iconoir-cancel"></i></div>
          <div border="b #eee" flex justify-center items-center py1><i text-orange-3 text-5xl inline-block i="iconoir-cancel"></i></div>
        </div>
      </div>
      <div class="pt-column" 
      style="scale: 1.1;" bg-green-7 shadow rounded-lg text-white p3>
        <div class="pt-col-title" text-4xl font-bold mb2>Premium</div>
        <div class="pt-col-subtitle" text-left>Lorem ipsum dolor, sit amet consectetur adipisicing elit!</div>
        <div class="pt-col-features" text-center>
          <div border="t b green-8" flex justify-center items-center py1><i text-white text-5xl inline-block i="iconoir-check"></i></div>
          <div border="b green-8" flex justify-center items-center py1><i text-white text-5xl inline-block i="iconoir-check"></i></div>
          <div border="b green-8" flex justify-center items-center py1><i text-white text-5xl inline-block i="iconoir-cancel"></i></div>
          <div border="b green-8" flex justify-center items-center py1><i text-white text-5xl inline-block i="iconoir-cancel"></i></div>
          <div border="b green-8" flex justify-center items-center py1><i text-orange-3 text-5xl inline-block i="iconoir-cancel"></i></div>
        </div>
      </div>
      <div class="pt-column" shadow rounded-lg bg-white py3>
        <div class="pt-col-title" text-2xl font-bold px3>Bespoke</div>
        <div class="pt-col-subtitle" text-left text-gray-5 my3 px3>Lorem ipsum dolor, sit amet consectetur adipisicing elit!</div>
        <div class="pt-col-features" text-center>
          <div border="t b #eee" flex justify-center items-center py1><i text-green-6 text-5xl inline-block i="iconoir-check"></i></div>
          <div border="b #eee" flex justify-center items-center py1><i text-green-6 text-5xl inline-block i="iconoir-check"></i></div>
          <div border="b #eee" flex justify-center items-center py1><i text-green-6 text-5xl inline-block i="iconoir-check"></i></div>
          <div border="b #eee" flex justify-center items-center py1><i text-green-6 text-5xl inline-block i="iconoir-check"></i></div>
          <div border="b #eee" flex justify-center items-center py1><i text-green-6 text-5xl inline-block i="iconoir-check"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>