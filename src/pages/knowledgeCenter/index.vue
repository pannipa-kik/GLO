<script setup>
import { ref } from 'vue';
import cardKnowledgeCenter from '../../views/knowledgeCenter/index';
import leaderBoard from '../../views/home/sectionLeaderBoard';
import slide from '../../views/knowledgeCenter/slide';
const text = ref('left');
const value = ref(0);

const handleTextUpdate = (newValue) => {
  text.value = newValue;
};
const handleNavigationUpdate = (newValue) => {
  value.value = newValue;
};
</script>

<template>
  <div class="image-top-right">
    <img src="../../assets/bgb1.png" max-width="600" height="600" />
  </div>
  <div class="image-top-left">
    <img src="../../assets/knowledgeCenter/bgl.png" max-width="600" height="200" />
  </div>
  <div class="image-center-right1">
    <img src="../../assets/knowledgeCenter/lgCR.png" max-width="600" height="100" />
  </div>
    <div class="image-center-left">
    <img src="../../assets/knowledgeCenter/vgLC.png" width="70" height="1000" />
  </div>
  <v-container>
    <div style="margin: 60px 0 60px 0;">
      <img src="../../assets/image458.png" width="266" max-height="88" contain />
      <h1 class="primary_ฺblue">คลังความรู้ (Knowledge Center)</h1>
      <p class="primary_ฺamber">Innovation & Knowledge space : i-Know</p>
    </div>
  </v-container>
  <div>
    <slide />
  </div>
  <v-container>
    <div class="bg_secondary_grey2 box-button">
      <!-- Replace v-model with explicit change handling -->
      <v-btn-toggle :model-value="text" @update:modelValue="handleTextUpdate" color="deep-purple-accent-3" rounded="0"
        group>
        <v-btn value="left">
          <h4>ล่าสุด</h4>
        </v-btn>
        <v-btn value="center">
          <h4>แนะนำ</h4>
        </v-btn>
        <v-btn value="right">
          <h4>ยอดนิยม</h4>
        </v-btn>
      </v-btn-toggle>
    </div>

    <div class="search">
      <v-text-field prepend-inner-icon="mdi-magnify" density="compact" label="ค้นหา" variant="solo" hide-details
        single-line />
      <v-btn class="text-white ms-5">ค้นหาข้อมูล</v-btn>
    </div>
    <div class="filter mt-5 mb-5">
        <v-btn variant="outlined" class="mx-2">ภารกิจจำหน่าย</v-btn>
        <v-btn variant="outlined" class="mx-2">ภารกิจการพิมพ์</v-btn>
        <v-btn variant="outlined" class="mx-2">ภารกิจการพิมพ์</v-btn>
        <v-btn variant="outlined" class="mx-2">ภารกิจการพิมพ์</v-btn>
        <v-btn variant="outlined" class="mx-2">ภารกิจการพิมพ์</v-btn>
    </div>

    <div class="leaderBoard">
      <cardKnowledgeCenter />
    </div>

    <div style="margin-top: 50px;">
        <img src="../../assets/banner.png" width="100%"  contain></img>
    </div>
    <div class="text-black leaderBoard">
      <leaderBoard />
    </div>
  </v-container>
  <div class="image-bottom-left">
    <img src="../../assets/bgb2.png" max-width="300" height="400" />
  </div>
  <div class="image-bottom-right">
    <img src="../../assets/bgb3.png" max-width="500" height="700" />
  </div>
  <div class="image-center-right">
    <img src="../../assets/knowledgeCenter/bg-center.png" max-width="500" height="500" />
  </div>
</template>

<style lang="scss" scoped>
.v-container {
  position: relative;
  z-index: 2;
}

.leaderBoard {
  position: relative;
  z-index: 2;
}

.filter {
  display: flex;
  justify-content: center;
  .v-btn.v-btn--density-default {
    border-radius: 8px;
    color: #0033A1;
    border: 1px solid #0033A1;
  }
}

.search {
  margin-top: 20px !important;
  height: 40px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 695px;
  margin: 0 auto;

  ::v-deep .v-field--variant-solo {
    box-shadow: none !important;

  }

  ::v-deep .v-input__control {
    border: 1px solid #E2E2E2;
    border-radius: 8px;

  }

  .v-btn--variant-elevated {
    background: #0033A1 !important;
    width: 95px;
    border-radius: 8px;
    padding: 0 16px;
  }

  .v-btn v-btn--active {
    background-color: white important;
  }
}


.box-button {
  width: 300px;
  margin: 0 auto;
  border-radius: 12px;
  padding: 0 20px;
  margin-top: 70px;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #F5F5F5 !important;
  justify-content: center;

  ::v-deep .v-btn-toggle>.v-btn.v-btn--active:not(.v-btn--disabled)>.v-btn__overlay {
    opacity: 1 !important;
    background-color: white !important;
  }

  h4 {
    color: #0033A1;
    z-index: 1;
  }

}

.v-btn--variant-elevated {
  background-color: #F5F5F5 !important;
}

.bg-deep-purple-accent-3 {
  color: #0033A1 !important;
  border-radius: 12px !important;
}

.v-btn-group--density-default.v-btn-group {
  height: 35px;
}

.image-top-right img {
  position: absolute !important;
  top: 0;
  right: 0;
  z-index: 0;

  @media (max-width: 1600px) {
    display: none;
  }

}

.image-bottom-left img {
  position: absolute !important;
  bottom: 5% !important;
  left: 0 !important;
  z-index: 0;

}

.image-bottom-right img {
  position: absolute !important;
  bottom: 11% !important;
  right: 0 !important;
  z-index: 0;
}

.image-center-right img {
  position: absolute !important;
  bottom: 40% !important;
  right: 0 !important;
  z-index: 0;
}

.image-top-right {
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;

}

.image-top-left {
  position: absolute !important;
  bottom: 5% !important;
  top: 10% !important;
  z-index: 0;
}

.image-center-right1 {
  position: absolute !important;
  top: 25% !important;
  right: 20% !important;
  z-index: 0;
}

.image-center-left {
  position: absolute !important;
  top: 40% !important;
  left: 0 !important;
  z-index: 0;
}


@media (max-width: 960px) {

  .filter {
    flex-wrap: wrap;
    justify-content: flex-start !important;
    gap: 10px;
  }
}
</style>
