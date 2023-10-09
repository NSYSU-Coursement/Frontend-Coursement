<template>
    <img v-if="props.starFullControl" class="star icon mr-4 cursor-pointer" src="@/assets/images/star-full.png" @click.stop="$emit('toggleStar')"/>
    <img v-else class="star icon mr-4 cursor-pointer" src="@/assets/images/star.png" @click.stop="$emit('toggleStar')"/>
</template>
<script setup>
import { defineProps } from 'vue';
const props=defineProps({
    starFullControl:Boolean
})
</script>