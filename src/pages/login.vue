<script setup>
import { ref } from 'vue';

const tab = ref(1);
</script>

<template>
      <!-- Image Positions -->
  <div class="image-top-left">
    <img src="../assets/Group31164.png" max-width="300" height="500"></img>
  </div>

  <div class="image-top-right">
    <img src="../assets/Group31165.png" max-width="300" height="500"></img>
  </div>
  <div class="image-bottom-left">
    <img src="../assets/Group31166.png" max-width="300" height="300"></img>
  </div>

  <div class="image-bottom-right">
    <img src="../assets/Group31167.png" max-width="300" height="500"></img>
  </div>

  <v-container class="fill-height position-relative">
    <!-- Main Content -->
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6" class="text-center">
          <v-img src="../assets/image 332.png" width="114" max-height="103" style="margin: 0 auto;"></v-img>
          <div class="mt-5">
            <h3 class="primary_ฺblue">สำนักงานสลากกินแบ่งรัฐบาล</h3>
            <p>ระบบจัดเก็บองค์ความรู้ (Innovation & Knowledge space : i-Know)</p>
          </div>
          <div class="mt-3">
            <v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4">
              <v-tab :value="1">ผู้ใช้งานทั่วไป</v-tab>
              <v-tab :value="2">บุคลากรสำนักงานสลากกินแบ่งรัฐบาล</v-tab>
            </v-tabs>
            <div class="mt-5 box-input">
              <v-text-field class="box-input-top" density="compact" label="บัญชีผู้ใช้งาน" variant="solo" hide-details
                single-line></v-text-field>
              <v-text-field class="box-input-bottom" density="compact" label="รหัสผ่าน" variant="solo" hide-details
                single-line></v-text-field>
            </div>
          </div>
          <p class="mt-5 mb-5 text-decoration-underline text-left">ลืมรหัสผ่าน ?</p>
          <v-btn block class="bg_primary_ฺblue text-white height-btn">เข้าสู่ระบบ</v-btn>
          <div class="divider-text mt-5 mb-5">หรือเข้าสู่ระบบด้วย</div>
          <div class="height-btn box-social">
            <img src="../assets/Icongg.png" max-width="24" height="24"></img>
            <h4>Continue with Google</h4>
          </div>
          <div class="height-btn box-social mt-3">
            <img src="../assets/Icon.png" max-width="24" height="24"></img>
            <h4>Continue with Facebook</h4>
          </div>
          <p class="mt-5">หากไม่มีบัญชี คลิก <span class="text-decoration-underline">ลงทะเบียนใช้งานระบบ</span></p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style scoped lang="scss">
.box-center {
  margin-top: 71px;
  margin-bottom: 87px;
}

.divider-text {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0033A1;
  font-size: 16px;
  font-weight: bold;
}

.divider-text:before,
.divider-text:after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #0033A1;
  margin: 0 15px;
}

.image-top-left img,
.image-top-right img,
.image-bottom-left img,
.image-bottom-right img {
  position: absolute !important;
}

.image-top-left img {
  top: 0 !important;
  left: 0 !important;
}

.image-top-right img {
  top: 0 !important;
  right: 0 !important;
}

.image-bottom-right img {
  bottom: 15% !important;
  right: 0 !important;
}

.image-bottom-left img {
  bottom: 25% !important;
  left: 0 !important;
}

.height-btn {
  height: 58px !important;
}

.box-social {
  border: 1px solid #E2E2E2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    position: absolute;
    left: 16px;
  }
}

.box-input-top {
  height: 56px;

  ::v-deep .v-field--variant-solo {
    box-shadow: none !important;
  }

  ::v-deep .v-input__control {
    border: 1px solid #E2E2E2;
    border-radius: 8px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
}

.box-input-bottom {
  height: 56px;
  margin-top: -8px;

  ::v-deep .v-field--variant-solo {
    box-shadow: none !important;
  }

  ::v-deep .v-input__control {
    border: 1px solid #E2E2E2;
    border-radius: 8px;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
  }
}
</style>
