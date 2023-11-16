<template>
  <div class="w-full" v-if="canDrag">
    <input
      class="slider w-full"
      type="range"
      :value="props.data"
      min="0"
      max="10"
    />
  </div>
  <div class="w-full" v-else>
    <progress class="slider-progress w-full" :value="props.data" max="10"></progress>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  data: Number,
  canDrag: Boolean,
});
</script>

<style lang="scss" scoped>
.slider-progress {
  -webkit-appearance: none;
  appearance: none;
  height: 8px; 
  border-radius: 4px; 
  background: #d7d7d7; 
}

.slider-progress::-webkit-progress-bar {
  background-color: #d7d7d7;
}

.slider-progress::-webkit-progress-value {
  background-color: #ffed86; 
}
</style>
