<template>
  <div class="video-list-container">
    <div v-for="(item, index) in videoData" :key="index" class="video-item">
      <div class="video-thumbnail">
        <img :src="item.thumbnail" alt="Video Thumbnail" />
        <div v-if="item.isPlaying" class="play-icon">
          <v-icon>mdi-play-circle</v-icon>
        </div>
      </div>
      <div class="video-info">
        <a href="#" class="video-title">{{ item.title }}</a>
      </div>
    </div>
    <div class="show-more">
      <span>ดูเพิ่มเติม</span> <v-icon>mdi-chevron-down</v-icon>
    </div>
  </div>
</template>

<script setup>
import thumbnail from '../assets/promote.png';
import { ref } from 'vue';

const videoData = ref([
  { title: 'การเปิดคลังให้ความรู้กฎหมายภายในองค์กรแบบออนไลน์ ดีกว่า แบบ On-site อย่างไร ?', thumbnail:thumbnail, isPlaying: true },
  { title: 'การเปิดคลังให้ความรู้กฎหมายภายในองค์กรแบบออนไลน์ ดีกว่า แบบ On-site อย่างไร ?', thumbnail: thumbnail, isPlaying: true },
  { title: 'การเปิดคลังให้ความรู้กฎหมายภายในองค์กรแบบออนไลน์ ดีกว่า แบบ On-site อย่างไร ?', thumbnail: thumbnail, isPlaying: true },
  { title: 'การเปิดคลังให้ความรู้กฎหมายภายในองค์กรแบบออนไลน์ ดีกว่า แบบ On-site อย่างไร ?', thumbnail: thumbnail, isPlaying: true },
  { title: 'การเปิดคลังให้ความรู้กฎหมายภายในองค์กรแบบออนไลน์ ดีกว่า แบบ On-site อย่างไร ?', thumbnail: thumbnail, isPlaying: true },
]);
</script>

<style scoped>
.video-list-container {
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
}

.video-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
}

.video-item:last-child {
  border-bottom: none;
}

.video-thumbnail {
  position: relative;
  margin-right: 20px;
}

.video-thumbnail img {
  width: 100px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
}

.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.8);
  font-size: 32px;
}

.video-info {
  flex: 1;
}

.video-title {
  font-size: 16px;
  font-weight: bold;
  color: #0033a1;
  text-decoration: none;
}

.video-title:hover {
  text-decoration: underline;
}

.show-more {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #0033a1;
  font-size: 16px;
  padding: 15px;
}

.show-more span {
  margin-right: 5px;
}
</style>
