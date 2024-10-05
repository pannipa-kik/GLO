<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  },

});
</script>

<template>
  <div class="d-flex">
    <p>{{ text }}</p>
    <img src="../assets/icon/arrow-right.png" width="24" max-height="24" contain />
  </div>
</template>

<style scoped>
p {
  color: black;
  transition: color 0.3s; /* Add transition for smooth color change */
}

a:hover p {
  color: #0033A1; /* Change text color on hover */
}
</style>
