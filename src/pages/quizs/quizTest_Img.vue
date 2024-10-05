<template>
  <div class="image-top-left">
    <img src="../../assets/quizs/q1.png" max-width="600" height="500"></img>
  </div>
  <div class="image-top-right">
    <img src="../../assets/quizs/q2.png" max-width="400" height="400"></img>
  </div>
  <v-container class="fill-height text-white">
    <div class=" box-center">
      <h2 class="primary_ฺblue text-center">Quiz & Test</h2>
      <div class="mt-7">
        <v-card>
          <h3 class="primary_ฺblue mb-5">1. <sapn>หน่วยงาน มีข้อกำหนดทางจริยธรรม ชื่ออะไร</sapn>
          </h3>
          <div style="max-width: 450px;">
            <div class="mb-5">
              <img src="../../assets/promote.png" width="100%" />
            </div>
            <v-radio-group color="indigo-darken-4">
              <v-row>
                <v-col cols="12" md="6" sm="6">
                  <div class="d-flex align-start ">
                    <div class="radio">
                      <v-radio value="one"> </v-radio>
                    </div>
                    <img src="../../assets/promote.png" width="145" max-height="82" contain class="ms-1" />
                  </div>
                </v-col>
                <v-col cols="12" md="6" sm="6">
                  <div class="d-flex align-start ">
                    <div class="radio"> <v-radio value="two"> </v-radio></div>
                    <img src="../../assets/promote.png" width="145" max-height="82" contain class="ms-1" />
                  </div>
                </v-col>
                <v-col cols="12" md="6" sm="6">
                  <div class="d-flex align-start ">
                    <div class="radio"> <v-radio value="three"> </v-radio></div>
                    <img src="../../assets/promote.png" width="145" max-height="82" contain class="ms-1" />
                  </div>
                </v-col>
                <v-col cols="12" md="6" sm="6">
                  <div class="d-flex align-start ">
                    <div class="radio"> <v-radio value="four"> </v-radio></div>
                    <img src="../../assets/promote.png" width="145" max-height="82" contain class="ms-1" />
                  </div>
                </v-col>
              </v-row>
            </v-radio-group>
          </div>
        </v-card>
      </div>
      <div class="d-flex justify-space-between mt-5">
        <router-link to="/quizs/quizTest" class="d-flex justify-end bg-btn">
          <v-btn class="bg_primary_blue text-white mt-5" variant="outlined">
            <img src="../../assets/icon/arrow-left.png" width="24" max-height="24" contain class="me-1" />
            คำถามก่อนหน้านี้
          </v-btn>
        </router-link>
        <router-link to="/quizs/quizResult" class="d-flex justify-end bg-btns">
          <v-btn class="bg_primary_blue text-white mt-5">
            คำถามถัดไป
            <img src="../../assets/icon/Line arrow-right.png" width="24" max-height="24" contain class="ms-1" />
          </v-btn>
        </router-link>
      </div>
    </div>
  </v-container>
  <div class="image-bottom-left">
    <img src="../../assets/quizs/qb1.png" max-width="600" height="500"></img>
  </div>
  <div class="image-bottom-right">
    <img src="../../assets/quizs/qb2.png" max-width="600" height="500"></img>
  </div>
</template>

<style lang="css" scoped>
.radio {
  width: 30px;
  margin-right: 10px;
  margin-top: -10px;
}

.bg-btn {
  text-decoration: none !important;

  .v-btn {
    background-color: transparent !important;
    color: #0033A1 !important;
    border-radius: 8px;
  }
}

.bg-btns {
  text-decoration: none !important;

  .v-btn {
    background-color: #0033A1;
    border-radius: 8px;
    text-align: end;
  }
}

.box-center {
  margin: 0 auto;
  margin-top: 71px;
  margin-bottom: 87px;
  position: relative;
  z-index: 2;
}

.v-card {
  padding: 50px 100px;
  border-radius: 12px;
  background-color: #F5F5F5;
  border: 0;
  box-shadow: none;


  @media (max-width: 960px) {
    padding: 30px 20px;
  }
}

::v-deep .v-selection-control .v-label {
  color: black;
  opacity: 1;
}

::v-deep .v-selection-control-group {
  gap: 5px;

  @media (max-width: 960px) {
    gap: 20px;
  }
}


.image-top-left img {
  position: absolute !important;
  top: 1% !important;
  left: 0 !important;
  z-index: 0;
}

.image-top-right img {
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  z-index: 0;
}

.image-bottom-left img {
  position: absolute !important;
  bottom: 12% !important;
  left: 0 !important;
  z-index: 0;
}

.image-bottom-right img {
  position: absolute !important;
  bottom: 10% !important;
  right: 0 !important;
  z-index: 0;
}
</style>
