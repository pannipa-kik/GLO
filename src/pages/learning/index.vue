<script setup>
import { ref } from 'vue';
import cardELearning from '../../views/e_learning/index'
import slide from '../../views/e_learning/slide';

const text = ref('left')
const value = ref(0)

const handleTextUpdate = (newValue) => {
  text.value = newValue;
};
</script>


<template>
  <div class="image-top-left">
    <img src="../../assets/VectorG1.png" max-width="300" height="300"></img>
  </div>
  <div class="image-top-right">
    <img src="../../assets/VectorG2.png" max-width="300" height="1000"></img>
  </div>

  <v-container>
    <div style="margin-top: 141px; z-index: 5; position: relative;">
      <h1 class="primary_ฺblue">ระบบการเรียนออนไลน์ (e-Learning)</h1>
      <p class="primary_ฺamber">Innovation & Knowledge space : i-Know</p>
    </div>
  </v-container>
  <slide />
  <v-container style="z-index: 5;  position: relative;">
    <v-container>

      <div class="bg_secondary_grey2 box-button">
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
      <div class="search ">
        <v-row justify="center">
          <v-col cols="12" md="10" sm='12'>
            <v-text-field prepend-inner-icon="mdi-magnify" density="compact" label="ค้นหา" variant="solo" hide-details
              single-line></v-text-field>
          </v-col>
          <v-col cols="12" md="2" sm='12'>
            <v-btn class="text-white">
              ค้นหาข้อมูล
            </v-btn>
          </v-col>
        </v-row>
      </div>

      <div class="filter mt-5 mb-5">
        <v-btn variant="outlined" class="mx-2">ภารกิจจำหน่าย</v-btn>
        <v-btn variant="outlined" class="mx-2">ภารกิจการพิมพ์</v-btn>
        <v-btn variant="outlined" class="mx-2">กองควบคุมคุณภาพ</v-btn>
        <v-btn variant="outlined" class="mx-2">กองออกรายวัล</v-btn>
        <v-btn variant="outlined" class="mx-2">งานสลาก</v-btn>
        <v-btn variant="outlined" class="mx-2">CG</v-btn>
      </div>
      <div>
        <cardELearning />
      </div>

    </v-container>
  </v-container>
  <div class="image-center-left">
    <img src="../../assets/Learning/bgCenter.png" max-width="300" height="1000"></img>
  </div>
  <div class="image-bottom-right">
    <img src="../../assets/Learning/bg-botton.png" max-width="300" height="700"></img>
  </div>
</template>

<style lang="scss" scoped>
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
  margin: 0 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  ::v-deep .v-field--variant-solo {
    box-shadow: none !important;

  }

  ::v-deep .v-input__control {
    border: 1px solid #E2E2E2;
    border-radius: 8px;


  }

  .v-btn--variant-elevated {
    background: #0033A1 !important;
    border-radius: 8px;
    padding: 0 16px;

    @media (max-width: 960px) {
      margin-top: 3px;
    }
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

.image-top-left img {
  position: absolute !important;
  top: 10px !important;
  left: 0 !important;
  z-index: 0;
}

.image-top-right img {
  position: absolute !important;
  top: 15px !important;
  right: 0;
  z-index: 0;
}

.image-center-left {
  position: absolute !important;
  top: 25%;
  left: 0;
  z-index: 0;
}

.image-bottom-right {
  position: absolute !important;
  bottom: 10%;
  right: 0;
  z-index: 0;
}

@media (max-width: 960px) {
  .search {
    margin: 0 !important;
    margin-top: 20px !important;
  }

  .filter {
    flex-wrap: wrap;
    justify-content: flex-start !important;
    gap: 10px;
  }
}
</style>
