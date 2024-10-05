<script setup>
import { ref } from 'vue';
import promote from '../assets/promote.png';
import promote1 from '../assets/promote1.png';

const isLightboxOpen = ref(false);
const currentIndex = ref(0);

const images = ref([
 promote,
 promote1,
 promote,
 promote1,
 promote,
 promote1,
]);

function openLightbox(index) {
  currentIndex.value = index;
  isLightboxOpen.value = true;
}


function closeLightbox() {
  isLightboxOpen.value = false;
}

function nextImage() {
  if (currentIndex.value < images.value.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
}

function prevImage() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = images.value.length - 1;
  }
}
</script>



<template>
  <div class="gallery">
    <!-- Display only the first 4 images -->
    <div
      class="gallery-item"
      v-for="(image, index) in images.slice(0, 4)"
      :key="index"
      @click="openLightbox(index)"
    >
      <img :src="image" :alt="'Image ' + (index + 1)"  />
    </div>

    <!-- Overlay for remaining images -->
    <div
      v-if="images.length > 4"
      class="gallery-item overlay"
      @click="openLightbox(4)"
    >
      <img
        :src="images[4]"
        :alt="'Image ' + (5)"

      />
      <span>+{{ images.length - 4 }}</span>
    </div>
  </div>
  <!-- Lightbox -->
  <div class="lightbox" v-if="isLightboxOpen">
    <span class="close" @click="closeLightbox">&times;</span>
    <img
      class="lightbox-content"
      :src="images[currentIndex]"
      alt="Full Image"
    />
    <div class="navigation">
      <span class="prev" @click="prevImage">&#10094;</span>
      <span class="next" @click="nextImage">&#10095;</span>
    </div>
  </div>
</template>



<style lang="less" scoped>
.gallery {
  display: flex;
  gap: 10px;
}

.gallery-item {

  img {
    height: 120px;
    border-radius: 8px;
  }

}
.gallery-item.overlay {
  position: relative;
  cursor: pointer;

}

.gallery-item.overlay span {
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
}

.lightbox {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9;
}

.lightbox-content {
  max-width: 90%;
  max-height: 80%;
}

.close {
  position: absolute;
  top: 80px;
  right: 50px;
  color: white;
  font-size: 40px;
  cursor: pointer;
}

.navigation .prev, .navigation .next {
  cursor: pointer;
  color: white;
  font-size: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.navigation .prev {
  left: 20px;
}

.navigation .next {
  right: 20px;
}
</style>
