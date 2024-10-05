<script setup lang="ts">
import { onMounted, ref } from 'vue';
import confetti from 'canvas-confetti';

const throwConfetti = (canvas: HTMLCanvasElement | null) => {
  if (!canvas) return;

  const myConfetti = confetti.create(canvas, { resize: true });

  (function frame() {
    myConfetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });

    myConfetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    requestAnimationFrame(frame);
  })();
};

const isRanking1Visible = ref(false);
const isRanking2Visible = ref(false);
const isRanking3Visible = ref(false);

onMounted(() => {
  const canvas = document.querySelector('.popular canvas');
  throwConfetti(canvas);

  setTimeout(() => {
    isRanking1Visible.value = true;
  }, 500);
  setTimeout(() => {
    isRanking2Visible.value = true;
  }, 1000);
  setTimeout(() => {
    isRanking3Visible.value = true;
  }, 1500);
});


</script>

<template>
  <div class="popular" style="position: relative;">
    <canvas
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 2;"></canvas>
    <div class="box-text">
      <h3 class="primary_ฺblue">อันดับผู้รู้ยอดนิยม</h3>
      <h1 class="primary_ฺblue">ประจำเดือนสิงหาคม</h1>
    </div>
    <div class="ranking">
      <div v-if="isRanking2Visible" class="person ranking-2 animate-scale-in">
        <img src="../../assets/Image4.png" class="profile">
        <div class="name">ชวิกา</div>
        <div class="score">10600 </div>
        <div>คะแนน</div>
      </div>
      <div v-if="isRanking1Visible" class="person ranking-1 animate-scale-in">
        <img src="../../assets/Image4.png" class="profile">
        <div class="name">กฤติธัช</div>
        <div class="score" style="font-size: 32px;">11238</div>
        <div>คะแนน</div>
      </div>
      <div v-if="isRanking3Visible" class="person ranking-3 animate-scale-in">
        <img src="../../assets/Image4.png" class="profile">
        <div class="name">พิชช์</div>
        <div class="score">9488 </div>
        <div>คะแนน</div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
::v-deep .v-slide-group__content {
  background-color: white;
  color: black;
}

@keyframes scale-in-ver-bottom {
  0% {
    transform: scaleY(0);
    transform-origin: bottom;
    opacity: 0;
  }

  100% {
    transform: scaleY(1);
    transform-origin: bottom;
    opacity: 1;
  }
}

.animate-scale-in {
  animation: scale-in-ver-bottom 0.5s ease-out forwards;
}

.popular {
  box-shadow: rgba(0, 0, 0, 0.24) -3px 3px 8px;
  position: relative;
  width: 100%;
  height: 500px;
  background-image: url('../../assets/BG.png');
  background-size: cover;
  background-position: center;
  display: flex;
  height: 100%;
  align-items: flex-end;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  justify-content: center;


  .box-text {
    position: absolute;
    top: 36px;
    text-align: center;
  }

  .ranking {
    // display: flex;
    // justify-content: center;
    // width: 80%;
    position: relative;
    left: -10%;
    transform: translateX(-50%);
    // align-items: flex-end;

    @media (max-width: 900px) {
      height: 520px;
      left: -18%;
    }
  }

  .person {
    text-align: center;
    margin: 0 20px;
    position: relative;
  }

  .ranking-1 {
    background: linear-gradient(180deg, #00c6ff 0%, #0072ff 100%);
    color: white;
    width: 122px;
    height: 341px;
    border-radius: 30px 30px 0 0;
    position: relative;
    margin: 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    &:hover {
      cursor: pointer;
    }

    .profile {
      width: 90px;
      height: 90px;
      position: absolute;
      top: -45px;
      left: 50%;
      transform: translateX(-50%);
      border: 3px solid #fd9b3a;
    }

    .name {
      margin-top: 57px;
    }

    &::before {
      content: "";
      position: absolute;
      top: -75px;
      transform: translateY(-49%);
      height: 27px;
      width: 34px;
      background-image: url(../../assets/1.png);
      background-size: cover;
      background-repeat: no-repeat;
      left: 50%;
      transform: translateX(-50%);
    }

    &::after {
      content: "1";
      position: absolute;
      left: 42%;
      top: 42px;
      transform: translateY(-50%);
      height: 20px;
      width: 20px;
      font-size: 11px;
      background-image: url(../../assets/Rectangle7.png);
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .ranking-2 {
    background: linear-gradient(180deg, #001645 0%, #E2E2E2 100%);
    color: white;
    width: 122px;
    height: 280px;
    border-radius: 12px 0 0 0;
    margin: 0;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;

    &:hover {
      background: linear-gradient(180deg, #00c6ff 0%, #0072ff 100%);
      cursor: pointer;
    }


    .profile {
      width: 75px;
      height: 75px;
      position: absolute;
      top: -45px;
      left: 50%;
      transform: translateX(-50%);
      border: 3px solid #FE6A7C;
    }

    .name {
      margin-top: 40px;
    }

    &::after {
      content: "2";
      position: absolute;
      left: 42%;
      top: 28px;
      transform: translateY(-50%);
      height: 20px;
      width: 20px;
      font-size: 11px;
      background-image: url(../../assets/Rectangle6.png);
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .ranking-3 {
    background: linear-gradient(180deg, #001645 0%, #E2E2E2 100%);
    color: white;
    width: 122px;
    height: 280px;
    border-radius: 0 12px 0 0;
    margin: 0;
    position: absolute;
    left: 122px;
    bottom: 0;

    &:hover {
      background: linear-gradient(180deg, #00c6ff 0%, #0072ff 100%);
      cursor: pointer;

    }


    .profile {
      width: 75px;
      height: 75px;
      position: absolute;
      top: -45px;
      left: 50%;
      transform: translateX(-50%);
      border: 3px solid #00C6BE;
    }

    .name {
      margin-top: 40px;
    }

    &::after {
      content: "3";
      position: absolute;
      left: 42%;
      top: 28px;
      transform: translateY(-50%);
      height: 20px;
      width: 20px;
      font-size: 11px;
      background-image: url(../../assets/Rectangle8.png);
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }


  .profile {
    width: 100px;
    height: 100px;
    border-radius: 50%;

  }

  .name {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;

  }

  .score {
    font-size: 16px;
    color: #FD9B3A;
    margin-top: 5px;
    font-size: 20px;
    font-weight: bold;
  }
}

@media (max-width: 900px) {
  .v-tabs {

    margin-top: 20px;
  }

  .scrollable-list{
    .v-row {
    margin: -15px !important;

    }
  }

}

</style>
