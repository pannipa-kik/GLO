<script setup>
import { cardIssue, cardIssueAll } from '../../data/cardIssue.js';


const value = ref(0);
const tags = ref([
  'กฏหมาย',
  'ความรู้ออนไลน์',
  'สุขภาพ',
  'ความรู้ออนไลน์',
  'สุขภาพ',
  'ความรู้ออนไลน์',

]);
</script>

<template>
  <div class="image-top-right">
    <img src="../../assets/bg_Innovation_management2.png" max-width="500" height="800"></img>
  </div>
  <div class="image-top-left">
    <img src="../../assets/bg_Innovation_management3.png" max-width="500" height="800"></img>
  </div>
  <div class="image-center-right">
    <img src="../../assets/Innovation/bgCr.png" max-width="500" height="400"></img>
  </div>
  <v-container class="fill-height text-white">
    <v-container>
      <div class="box-head">
        <div style="margin-top: 141px;">
          <h1 class="primary_ฺblue">ระบบบริหารโอกาสนวัตกรรม : ประเด็นปัญหา</h1>
          <p class="primary_ฺamber">Innovation & Knowledge space : i-Know</p>
        </div>
        <img src="../../assets/bg_Innovation_management.png" width="400" max-height="330" contain
          class="index-head-img"></img>
      </div>
      <div class="search" style="margin-top: 167px;">
        <v-row>
          <v-col cols="12" md="5" sm="6">
            <v-text-field prepend-inner-icon="mdi-magnify" density="compact" label="ค้นหา" variant="solo" hide-details
              single-line>
            </v-text-field>
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <div class="select">
              <v-select label="Select" density="compact" single-line
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="outlined">
              </v-select>
            </div>
          </v-col>
          <v-col cols="12" md="4" sm="2">
            <v-btn class="text-white">ค้นหาข้อมูล</v-btn>
          </v-col>
        </v-row>
      </div>
      <div style="margin-top: 20px;">
        <v-row>
          <v-col cols="12" md="8" sm="6">
            <MainTopic text="ประเด็นปัญหาล่าสุด" class="mb-3" />
            <v-row>
              <v-col cols="12" md="12" sm="12" v-for="(card, index) in cardIssue" :key="index">
                <CardIssue :title="card.title" :author="card.author" :date="card.date" :views="card.views"
                  :comments="card.comments" :avatarSrc="card.avatarSrc" :imageSrc="card.imageSrc"
                  :chipText="card.chipText" />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <MainTopic text="หมวดหมู่แนะนำ" />
            <div class="filter">
              <v-layout class="overflow-visible" style="height: 100px;">
                <v-bottom-navigation v-model="value" active grow wrap>
                  <v-btn>ภารกิจจำหน่าย</v-btn>
                  <v-btn>กระบวนการ</v-btn>
                  <v-btn>ธุรกิจใหม่</v-btn>
                  <v-btn>บริการ</v-btn>
                </v-bottom-navigation>
              </v-layout>
            </div>
            <div class="featured-author">
              <MainTopic text="ผู้เขียนแนะนำ" />
              <div class="list">
                <div class="d-flex align-center mt-5" v-for="i in 3" :key="i">
                  <v-avatar>
                    <img src="../../assets/banner.png" width="43" height="43" alt="avatar"></img>
                  </v-avatar>
                  <span class="ms-2 primary_ฺblue">ชยาภา ชุมชอบ</span>
                </div>
              </div>
            </div>
            <div class="tag">
              <MainTopic text="Tag ยอดฮิต" />
              <div>
                <v-sheet class="py-4 px-1">
                  <v-chip-group column>
                    <v-chip v-for="tag in tags" :key="tag" :text="tag" type="button"></v-chip>
                  </v-chip-group>
                </v-sheet>

              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div style="margin-top: 50px;">
        <v-row>
          <v-col cols="12" md="12" sm="12">
            <div style="margin-top: 30px;" class="d-flex align-center justify-space-between">
              <MainTopic text="ประเด็นปัญหาล่าสุด" class="mb-3" />
              <All text="ดูทั้งหมด" style="margin-top: -15px;" />
            </div>
            <v-row>
              <v-col cols="12" md="12" sm="12" v-for="(card, index) in cardIssueAll" :key="index">
                <CardIssue :title="card.title" :author="card.author" :date="card.date" :views="card.views"
                  :comments="card.comments" :avatarSrc="card.avatarSrc" :imageSrc="card.imageSrc"
                  :chipText="card.chipText" :description="card.description" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-container>
  <div class="image-center-left">
    <img src="../../assets/Innovation/bgCl.png" max-width="500" height="400"></img>
  </div>
  <div class="image-botton-left">
    <img src="../../assets/Innovation/bgbl.png" max-width="500" height="400"></img>
  </div>
  <div class="image-botton-right">
    <img src="../../assets/Innovation/bgbr.png" max-width="500" height="400"></img>
  </div>
</template>

<style lang="scss" scoped>

.v-container.fill-height {
  position: relative;
  z-index: 2;
}
.box-head {
  margin-top: 133px;
  position: relative;

  .index-head-img {
    right: 0;
    top: -120px;
    position: absolute;


    @media (max-width: 1600px) {

      display: none;
    }
  }

}

.tag {
  margin-top: 50px;



  ::v-deep .v-chip {
    margin: 5px;
    padding: 10px;
    background-color: #0033A1;
    color: white;
    border-radius: 8px;

  }


}

.featured-author {
  margin-top: 50px;

  .list {
    margin-top: 16px;
  }
}

.filter {
  margin-top: 20px !important;
  display: flex;
  justify-content: center;

  .v-btn--active {
    background-color: #0033A1;
    color: #fff !important;
  }

  ::v-deep .v-bottom-navigation__content {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .v-bottom-navigation {
    background-color: transparent;
    box-shadow: none;
    height: 100px !important;
    top: 0px !important;
  }

  .v-bottom-navigation .v-bottom-navigation__content>.v-btn {
    border: 1px solid;
    margin: 0px 5px;
    border-radius: 8px;
    height: 38px;
    color: #0033A1;
  }
}

.search {
  margin-top: 137px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

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
    }
  }
}

.image-top-left img {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  z-index: 0;
}

.image-top-right img {
  position: absolute !important;
  top: 65px !important;
  right: 0 !important;
  z-index: 0;
}

.image-botton-left {
  position: absolute !important;
  bottom: 20%;
  left: 0 !important;
  z-index: 0;
}

.image-botton-right {
  position: absolute !important;
  bottom: 10%;
  right: 0 !important;
  z-index: 0;
}

.image-center-right {
  position: absolute !important;
  top: 30%;
  right: 0 !important;
  z-index: 0;
}

.image-center-left {
  position: absolute !important;
  top: 30%;
  left: 0 !important;
  z-index: 0;
}



@media (max-width: 1600px) {
  .image-top-right img {
    display: none;
  }

  .search {
    margin-top: 70px !important;
  }

}
</style>
