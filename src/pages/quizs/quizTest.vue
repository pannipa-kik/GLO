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
          <div>
            <v-radio-group color="indigo-darken-4">
              <v-radio label="ประกาศที่ 012/2562 เรื่อง จริยธรรมธุรกิจและข้อพึงปฏิบัติในการทำงานของ"
                value="one"></v-radio>
              <v-radio label="ประกาศที่ 012/2562 เรื่อง จริยธรรมธุรกิจและข้อพึงปฏิบัติในการทำงานของ"
                value="two"></v-radio>
              <v-radio label="ประกาศที่ 012/2562 เรื่อง จริยธรรมธุรกิจและข้อพึงปฏิบัติในการทำงานของ"
                value="three"></v-radio>
              <v-radio label="ประกาศที่ 012/2562 เรื่อง จริยธรรมธุรกิจและข้อพึงปฏิบัติในการทำงานของ"
                value=" four"></v-radio>
            </v-radio-group>
          </div>
        </v-card>
      </div>
      <router-link to="/quizs/quizTest_Img" class="d-flex justify-end bg-btns">
        <v-btn class="bg_primary_blue text-white mt-5">
          เริ่มทำข้อสอบ
          <img src="../../assets/icon/Line arrow-right.png" width="24" max-height="24" contain class="ms-1" />
        </v-btn>
      </router-link>
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
