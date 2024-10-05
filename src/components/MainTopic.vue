<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  }
});
</script>

<template>
    <h2 class="primary_ฺblue">{{ text }}</h2>
</template>
