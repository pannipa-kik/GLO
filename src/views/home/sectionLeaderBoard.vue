<script setup lang="ts">
import { onMounted, ref } from 'vue';
import sabsectionLeaderBoard from './sabsectionLeaderBoard.vue'
const tab = ref(0);

const getRankColor = (rank: number) => {
  if (rank === 1) return 'default-bg  ';
  if (rank === 2) return 'pink-bg ';
  if (rank === 3) return 'green-bg';
  return '';
};
const users = [
  { rank: 1, username: 'กฤติธัช จิตราพรชัยวัฒน์', points: 11238 },
  { rank: 2, username: 'สุธารัตน์ อักษรสวัสดิ์', points: 10294 },
  { rank: 3, username: 'สมชาย สายทองคำ', points: 9875 },
  { rank: 4, username: 'พิทักษ์ ภูวงศ์', points: 8764 },
  { rank: 5, username: 'มาลี อินทรีย์', points: 8650 },

];

</script>

<template>
  <v-container>
    <div style="margin-top: 60px;">
      <MainTopic text="Leader Board" />
    </div>
    <div class="box-tabs mt-5">
      <v-row>
        <v-col cols="12" md="6" sm="6" class="pa-0">
          <sabsectionLeaderBoard/>
        </v-col>
        <v-col cols="12" md="6" sm="6" class="pa-0">
          <v-tabs v-model="tab" hide-slider>
            <v-tab value="one">
              <h4>ผู้รู้ยอดนิยม</h4>
            </v-tab>
            <v-tab value="two">
              <h4>ผู้เรียนยอดนิยม</h4>
            </v-tab>
          </v-tabs>
          <v-tabs-window v-model="tab">
            <v-tabs-window-item value="one" >
              <div  class="h-100 position-relative">
                <div class="mt-4 mb-4 primary_ฺblue ps-4">
                  <h4>ข้อมูลผู้รู้ยอดนิยมประจำเดือนสิงหาคม</h4>
                </div>
                <div class="primary_ฺblue ps-5">
                  <v-row>
                    <v-col cols="1">#</v-col>
                    <v-col cols="7" class="ps-3">Username</v-col>
                    <v-col cols="4" class="text-end pe-7">Points</v-col>
                  </v-row>
                </div>
                <div class="mt-5 scrollable-list ps-4">
                  <div style=" margin-top: 25px;">
                    <v-row v-for="user in users" :key="user.rank" class="row-num" style="margin-bottom: 5px;">
                      <v-col cols="1">
                        <div :class="getRankColor(user.rank)" class="number">
                          <h3 >{{ user.rank }}</h3>
                        </div>
                      </v-col>
                      <v-col cols="7">
                        <p class="ps-3">{{ user.username }}</p>
                      </v-col>
                      <v-col cols="4">
                        <p class="text-end">{{ user.points }} <span>pt</span></p>
                      </v-col>
                    </v-row>
                  </div>
                </div>
                <div class="box-user">
                  <v-row >
                      <v-col cols="1">
                        <div class="number  ms-1">
                          <h3 class=""lass="mt-5 mb-5">99</h3>
                        </div>
                      </v-col>
                      <v-col cols="7">
                        <h4 class="ps-3 pt-1">นภัสสร สว่างวิทยา</h4>
                      </v-col>
                      <v-col cols="4">
                        <h4 class="text-end pt-1 pe-1">512 <span>pt</span></h4>
                      </v-col>
                    </v-row>
                </div>
              </div>
            </v-tabs-window-item>
            <v-tabs-window-item value="two">
              Two
            </v-tabs-window-item>
          </v-tabs-window>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>

::v-deep .v-window.v-theme--light.v-tabs-window {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0 12px 12px 0;
}s

.row-num {
  @media (max-width: 900px) {
       margin-bottom: -10px !important;
    }
}
.box-user {
  background: linear-gradient(180deg, #01C6BD 0%, #05E37B 100%);
  padding: 10px;
  border-radius: 8px 8px 8px 0px;
  position: absolute;
  bottom: 15px;
  width: 100%;
  .number{
    background-color: #4E46B4 !important;
    color: #fff !important;
  }
}
::v-deep .v-slide-group__content {
  // background-color: white;
  color: black;
}

.v-btn.v-btn--density-default {
  background-color: #E2E2E2;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;

}

::v-deep .v-tab--selected {
  background-color: white !important;
  border-bottom: none;
  border-top: 1px solid #ddd;;
  border-left: 1px solid #ddd;;
  border-right: 1px solid #ddd;;
  color: #0033A1;
  border-radius: 0 12px 0 0 !important;
}

.scrollable-list {
  max-height: 330px;
  // overflow-y: auto;
  padding-right: 15px;


  // &::-webkit-scrollbar {
  //   width: 10px;
  // }

  // &::-webkit-scrollbar-track {
  //   background: #f1f1f1;
  //   border-radius: 10px;
  // }

  // &::-webkit-scrollbar-thumb {
  //   background: #C1C1C1;
  //   border-radius: 10px;
  //   border: 2px solid transparent;
  //   background-clip: padding-box;
  // }

  // &::-webkit-scrollbar-thumb:hover {
  //   background: #C1C1C1;
  // }

  // &::-webkit-scrollbar-corner {
  //   background: transparent;
  // }
}


.box-tabs {
  .v-window-item {
    max-height: 482px;
    height: 558px;
    border: 1px solid #ddd;
    border-radius: 0 8px 8px 0;
    border-left: none;
    background: white;
  }

  .number {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 32px;
    width: 32px;
    color: black;
    background-color: #F5F5F5;

  }

  .default-bg {
    background-color: #fd9b3a;
    color: white;
    max-height: 80px;
    height: 32px;
    width: 32px;
    position: relative;
    // margin-top: 25px;

    &::before {
      content: "";
      position: absolute;
      left: 2px;
      top: -15px;
      transform: translateY(-49%);
      height: 20px;
      width: 26px;
      background-image: url(/src/assets/1.png);
      background-size: cover;
      background-repeat: no-repeat;

    }
  }

  .pink-bg {
    background-color: #FE6A7C;
    color: white;

  }

  .green-bg {
    background-color: #00C6BE;
    color: white;
  }

}
</style>
