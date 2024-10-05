<template>
  <div class="image-top-left">
    <img src="../../assets/quizs/q1.png" max-width="600" height="500"></img>
  </div>
  <div class="image-top-right">
    <img src="../../assets/quizs/q2.png" max-width="400" height="400"></img>
  </div>
  <v-container class="fill-height text-white">
    <div class="text-center box-center">
      <v-img src="../../assets/image 332.png" width="114" max-height="103" style="margin: 0 auto;"></v-img>
      <div class="mt-5">
        <h3 class="primary_ฺblue">สำนักงานสลากกินแบ่งรัฐบาล</h3>
        <p class="text-black">ระบบจัดเก็บองค์ความรู้ (Innovation & Knowledge space : i-Know)</p>
      </div>
      <h3 class="primary_ฺblue mt-5">Quiz & Test</h3>
      <v-card class="mt-5">
        <h3 class="primary_ฺblue mt-3">ข้อสอบ : การส่งเสริมจริยธรรมและจรรยาบรรณ</h3>
        <p class="mt-3 mb-3">ขอให้พนักงานทุกคนตอบกลับแบบทดสอบให้ครบทุกข้อโดยระบบจะยึดการทำแบบทดสอบครั้งล่าสุดเป็นหลัก
        </p>
        <p class="secondary">Available time from <span class="ms-2 me-2">2022-03-28 8:30:00</span> to <span
            class="ms-2">2022-03-28 8:30:00</span> </p>
        <div class="d-flex mt-5 justify-center">
          <div class="d-flex">
            <v-img src="../../assets/icon/timer.png" width="24" max-height="24" style="margin: 0 auto;"></v-img>
            <p class="secondary ms-2">Duration : <span class="ms-2 me-2">30</span> Min.</p>
          </div>
          <div class="d-flex ms-7">
            <v-img src="../../assets/icon/message-question.png" width="24" max-height="24"
              style="margin: 0 auto;"></v-img>
            <p class="secondary ms-2">Question : <span class="ms-2 me-2">10</span></p>
          </div>
        </div>
      </v-card>
      <router-link to="/quizs/quizTest">
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


<style scoped lang="scss">

.v-btn {
  background-color: #0033A1;
  border-radius: 8px;
}
.box-center {
  // width: 558px;
  margin: 0 auto;
  margin-top: 71px;
  margin-bottom: 87px;
  position: relative;
  z-index: 2;

}

.v-card {
  padding: 30px 50px;
  border-radius: 12px;
  background-color: #F5F5F5;
}

.image-top-left img {
    position: absolute !important;
    top: 1% !important;
    left: 0 !important;
    z-index: 0;
}

.image-top-right img {
    position: absolute !important;
    top: 0!important;
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
