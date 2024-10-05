<script setup>
const props = defineProps({
  gradient: {
    type: String,
    default: 'linear-gradient(45deg, #009BEE, #04E6FF)'
  },
  imageSrc: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  width: {
    type: [String, Number],
    default: 180
  },
  height: {
    type: [String, Number],
    default: 151
  }
});
</script>

<template>
    <v-card :style="{ background: props.gradient }" type="button">
        <img :src="imageSrc" :width="width" :height="height" contain></img>
        <div class="box-text">
            <h4 class="primary_ฺblue">{{ text }}</h4>
            <p>{{ details }}</p>
        </div>
    </v-card>
</template>

<style scoped lang="scss">
.v-card {
    border-radius: 12px;
    padding: 15px;
    position: relative;
    height: 159px;
    transition: transform 0.5s ease-in-out;

    &:hover {
        transform: translate(0, -5px);
    }

    img {
        position: absolute;
        top: 0;
        right: 10px;
    }

    .box-text {
        position: absolute;
        bottom: 10px;
    }
}
</style>
