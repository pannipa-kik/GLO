<script setup>
import { cardIdeas, TopVoted, Issue } from '../../data/cardIdeas.js';


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
  <div class="image-top-left">
    <img src="../../assets/VectorP1.png" max-width="300" height="500"></img>
  </div>
  <div class="image-top-right1">
    <img src="../../assets/innovative_ideas/bgtr.png" max-width="600" height="300"></img>
  </div>
  <div class="image-top-right">
    <img src="../../assets/VectorP2.png" max-width="600" height="500"></img>
  </div>
  <v-container class="fill-height text-white box-container">
    <v-container>
      <div style="margin-top: 141px;">
        <h1 class="primary_ฺblue">ระบบบริหารโอกาสนวัตกรรม : ไอเดียนวัตกรรม</h1>
        <p class="primary_ฺamber">Innovation & Knowledge space : i-Know</p>
      </div>
      <div class="search">
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
            <v-btn class="text-white mt-1">ค้นหาข้อมูล</v-btn>
          </v-col>
        </v-row>
      </div>
      <div style="margin-top: 20px;">
        <v-row>
          <v-col cols="12" md="12" sm="12">
            <MainTopic text="ไอเดียนวัตกรรมล่าสุด" class="mb-3" />
            <v-row>
              <v-col cols="12" md="12" sm="12" v-for="(card, index) in cardIdeas" :key="index">
                <CardIssue :title="card.title" :author="card.author" :date="card.date" :views="card.views"
                  :comments="card.comments" :avatarSrc="card.avatarSrc" :imageSrc="card.imageSrc"
                  :chipText="card.chipText" :description="card.description" :archive="card.archive" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <div style="margin-top: 50px;">
        <v-row>
          <v-col cols="12" md="8" sm="6">
            <MainTopic text="ไอเดียนวัตกรรมที่มียอดโหวตมากที่สุด 5 อันดับ" class="mb-5" />
            <v-row>
              <v-col cols="12" md="12" sm="12" v-for="(card, index) in TopVoted" :key="index">
                <CardIssue :title="card.title" :author="card.author" :date="card.date" :views="card.views"
                  :comments="card.comments" :avatarSrc="card.avatarSrc" :imageSrc="card.imageSrc"
                  :chipText="card.chipText" :archive="card.archive" />
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
      <div style="margin-top: 60px;">
        <v-row>
          <v-col cols="12" md="12" sm="12">
            <div style="margin-top: 50px; margin-bottom: 20px;"
              class="d-flex align-center justify-space-between flex-wrap select">
              <MainTopic text="ประเด็นปัญหา" class="mb-5" />
              <div style="width: 240px;"> <v-select label="Select" density="compact" single-line class="issue"
                  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="outlined">
                </v-select></div>
            </div>

            <All text="ดูทั้งหมด" class="text-black justify-end" />
            <MainTopic text="" class="mb-5" />
            <v-row>
              <v-col cols="12" md="4" sm="6" v-for="(card, index) in Issue" :key="index">
                <CardIssue :title="card.title" :author="card.author" :date="card.date" :views="card.views" radius="8px"
                  :comments="card.comments" :avatarSrc="card.avatarSrc" :imageSrc="card.imageSrc"
                  :chipText="card.chipText" :archive="card.archive" :description="card.description"
                  :approved="card.approved" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-container>
  <div class="image-center-left">
    <img src="../../assets/innovative_ideas/bgCl.png" max-width="500" height="700"></img>
  </div>
  <div class="image-bottom-left">
    <img src="../../assets/innovative_ideas/bgbl.png" max-width="500" height="700"></img>
  </div>
  <div class="image-bottom-right">
    <img src="../../assets/innovative_ideas/bgCr.png" max-width="500" height="700"></img>
  </div>
</template>

<style lang="scss" scoped>
.select-issue {}

.box-container {
  position: relative;
  z-index: 1;
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

.select {
  ::v-deep .mdi-menu-down::before {
    color: black !important;
  }

  .issue {
    ::v-deep .v-input__control {
      width: 240px;

    }
  }

}

::v-deep .v-field--center-affix .v-label.v-field-label {
  color: black;
}

::v-deep .v-field {
  border: 1px solid #ddd;
  border-radius: 8px;
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

}

.image-top-left img {
  position: absolute !important;
  top: 10px !important;
  left: 0 !important;
  z-index: 0;
}

.image-top-right img {
  position: absolute !important;
  top: 700px;
  right: 0;
  z-index: 0;
}

.image-bottom-left img {
  position: absolute !important;
  bottom: 11% !important;
  left: 0 !important;
  z-index: 0;

  @media (max-width: 960px) {

    bottom: 8% !important;
  }
}

.image-bottom-right {
  position: absolute !important;
  bottom: 20% !important;
  right: 0 !important;
  z-index: 0;

}

.image-top-right1 {
  position: absolute !important;
  top: 30%;
  right: 0;
  z-index: 0;
}

.image-center-left {
  position: absolute !important;
  top: 11% !important;
  left: 0 !important;
  z-index: 0;
}
</style>
