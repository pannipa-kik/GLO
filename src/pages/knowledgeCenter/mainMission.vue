<script setup>
import { ref } from 'vue';
import cardKnowledgeCenter from '../../views/knowledgeCenter/index';
import Pagination from '../../components/PaginationPang.vue'

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
  <v-container class="fill-height text-white box-container">
    <v-container>
      <div style="margin: 60px 0 60px 0;">
        <img src="../../assets/image458.png" width="266" max-height="88" contain />
        <h1 class="primary_ฺblue">คลังความรู้ (Knowledge Center)</h1>
        <p class="primary_ฺamber">Innovation & Knowledge space : i-Know</p>
      </div>
      <h3 class="primary_ฺblue">ภารกิจหลัก</h3>
      <div class="search">
        <v-row>
          <v-col cols="12" md="4" sm="6">
            <v-text-field prepend-inner-icon="mdi-magnify" density="compact" label="ค้นหา" variant="solo" hide-details
            single-line></v-text-field>
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <div class="select">
            <v-select label="Select" density="compact" single-line
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="outlined">
              </v-select>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <div class="select">
            <v-select label="Select" density="compact" single-line
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="outlined">
              </v-select>
            </div>
          </v-col>
          <v-col cols="12" md="2" sm="2">
            <v-btn class="text-white">
              ค้นหาข้อมูล
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <div class="">
        <cardKnowledgeCenter />
      </div>
      <div class="pagination">
        <Pagination/>
      </div>

      <div style="margin-top: 50px;">
        <img src="../../assets/banner.png" width="100%"  contain></img>
    </div>
    </v-container>
  </v-container>
  <div class="image-bottom-left">
    <img src="../../assets/bgb2.png" max-width="300" height="400" />
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

::v-deep  .v-text-field .v-input__details {
  display: none;
}

.pagination {
    text-align: center;
    margin-top: 20px;
}

.search {
  margin-top: 20px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;

  ::v-deep .v-field--variant-solo {
    box-shadow: none !important;
  }

  ::v-deep .v-input__control {
    border: 1px solid #e2e2e2;
    border-radius: 8px;
  }

  .v-btn--variant-elevated {
    background: #0033a1 !important;
    width: 95px;
    border-radius: 8px;
    padding: 0 16px;
    margin-top: 3px;
  }

  .select {
    ::v-deep .mdi-menu-down::before {
      color: black !important;
    }

    ::v-deep .v-field--center-affix .v-label.v-field-label {
      color: black;
    }

    .v-select {
      color: black !important;
      background-color: white;
    }
  }
}


// bg
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

.image-center-right img {
  position: absolute !important;
  bottom: 11% !important;
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

</style>
