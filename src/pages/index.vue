<script setup>
import sectionSarvices from '../views/home/sectionSarvices.vue'
import sectionKnowledgeBase from '../views/home/sectionKnowledgeBase.vue'
import sectionPressRelease from '../views/home/sectionPressRelease.vue'
import sectionStatistics from '../views/home/sectionStatistics.vue'
import sectionEventCalendar from '../views/home/sectionEventCalendar.vue'
import sectionLeaderBoard from '../views/home/sectionLeaderBoard.vue'
import sectionRecommendedKnowledge from '../views/home/sectionRecommendedKnowledge.vue'

import { onMounted, ref } from 'vue';
</script>


<template>
  <v-container>
    <div class="box-head">
      <img src="../assets/Isolation_Mode.png" width="266" max-height="88" contain></img>
      <h1 class="primary_ฺblue mt-3">Innovation & Knowledge space : i-Know</h1>
      <p class="primary_ฺamber">The Government Lottery Office </p>
      <img src="../assets/index-head.png" width="400" max-height="330" contain class="index-head-img"></img>
    </div>
    <sectionSarvices />
    <sectionLeaderBoard />
  </v-container>
  <sectionRecommendedKnowledge />
  <sectionKnowledgeBase />
  <sectionPressRelease />
  <sectionEventCalendar />
  <sectionStatistics ref="sectionStatisticsRef" />
  <div class="image-top-left">
    <img src="../assets/bg-index-top.png" max-width="500" height="800"></img>
  </div>
  <div class="image-top-left-center">
    <img src="../assets/indexCenter.png" max-width="500" height="800"></img>
  </div>
  <div class="image-top-left-2">
    <img src="../assets/bg-index-top2.png" width="200" height="1000"></img>
  </div>
  <div class="image-bottom-left-Knowledge">
    <img src="../assets/bg-knowledge.png" max-width="100" height="100"></img>
  </div>
  <div class="image-bottom-right-Knowledge">
    <img src="../assets/bg-knowledge2.png" max-width="300" height="400"></img>
  </div>
  <div class="image-bottom-left">
    <img src="../assets/bg-index-botton.png" max-width="500" height="300"></img>
  </div>
</template>


<style scoped lang="scss">

.box-head {
  margin-top: 133px;
  position: relative;

  .index-head-img {
    right: 0;
    top: -120px;
    position: absolute;

    @media (max-width: 900px) {
      display: none;
    }
  }


}

.image-top-left-center {
  position: absolute !important;
    top: 33% !important;
    z-index: 0;
    left: 0;
    transform: translateX(-50%);
    @media (max-width: 960px) {
        display: none;
  }
}
.image-bottom-left-Knowledge img {
  position: absolute !important;
    top: 58% !important;
    z-index: 0;
    left: 200px;
    transform: translateX(-50%);

    @media (max-width: 960px) {
        display: none;
  }
}

.image-bottom-right-Knowledge img {
  position: absolute !important;
    top: 52% !important;
    z-index: 0;
    right: -52px;
    transform: translateX(-50%);

    @media (max-width: 960px) {
        display: none;
  }
}


.image-top-left-2 img {
  position: absolute !important;
  top: 6% !important;
  right: 0 !important;
  z-index: 0;
}

.image-top-left img {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
}

.image-bottom-left img {
  position: absolute !important;
  bottom: 215px !important;
  left: 0 !important;
  z-index: 0;
  width: 800px;
  height: 400px;

  @media (max-width: 960px) {
        display: none;
  }
}
</style>
