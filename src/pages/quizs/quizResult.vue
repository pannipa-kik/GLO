<script setup lang="ts">
import { onMounted } from 'vue';
import confetti from 'canvas-confetti';

const throwFullScreenConfetti = (canvas: HTMLCanvasElement | null) => {
  if (!canvas) return;

  const myConfetti = confetti.create(canvas, { resize: true });

  let animationFrame: number;
  const end = Date.now() + 2000;

  (function frame() {
    myConfetti({
      particleCount: 10,
      angle: 120,
      spread: 250,
      startVelocity: 60,
      origin: { x: 0, y: Math.random() }
    });

    myConfetti({
      particleCount: 10,
      angle: 120,
      spread: 250,
      startVelocity: 60,
      origin: { x: 1, y: Math.random() }
    });

    if (Date.now() < end) {
      animationFrame = requestAnimationFrame(frame);
    } else {
      cancelAnimationFrame(animationFrame);
    }
  })();
};

onMounted(() => {
  const canvas = document.querySelector('canvas');
  throwFullScreenConfetti(canvas);
});
</script>


<template>
    <div class="image-top-left">
    <img src="../../assets/quizs/q1.png" max-width="600" height="500"></img>
  </div>
  <div class="image-top-right">
    <img src="../../assets/quizs/q2.png" max-width="400" height="400"></img>
  </div>
  <canvas style="position: fixed; top: 0; left: 0; width: 100%; height: 100vh; pointer-events: none; z-index: 10;"></canvas>
  <v-container class="fill-height text-white"  style="position:relative; z-index: 1;">
    <div class=" box-center">
      <h2 class="primary_ฺblue text-center">Quiz & Test</h2>
      <div class="mt-7">
        <v-card class="d-flex justify-center ">
          <img src="../../assets/Group1st.png" width="160" max-height="165" contain class="ms-1" />
          <div>
            <h2 class="primary_ฺblue text-center mt-5">ขอแสดงความยินดี !</h2>
            <p class="primary_ฺblue text-center">คะแนนของคุณ คือ</p>
            <h2 class="primary_ฺblue text-center">10 / <span>10</span></h2>
          </div>
        </v-card>
      </div>
      <div class="d-flex justify-center mt-5">
        <router-link to="/" class="d-flex justify-end bg-btn">
          <v-btn class="bg_primary_blue text-white mt-5" variant="outlined">
            ออก
          </v-btn>
        </router-link>
        <router-link to="/quizs/quizTest_Img" class="d-flex justify-end bg-btns ms-3">
          <v-btn class="bg_primary_blue text-white mt-5">
            ดูคำตอบ
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
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: none;
  flex-direction: column;
  align-items: center;

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
