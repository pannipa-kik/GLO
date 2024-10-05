<template>
  <v-footer app >
    <v-container class="fill-height text-white">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" sm='12'>
            <div class="d-flex flex-wrap">
              <img src="../assets/footer.png" width="166" height="54" contain class="me-3 mb-2"> </img>
              <div >
                <h4>ระบบจัดเก็บองค์ความรู้ <br>(Innovation & Knowledge space : i-Know)</h4>
                <p>สำนักงานสลากกินแบ่งรัฐบาล</p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6" sm='12'>
            <v-row>
              <v-col cols="4" md="4" sm='4'>
                  <div class="primary_ฺamber">Services</div>
                <ul class="no-bullet mt-5">
                  <li>คลังความรู้</li>
                  <li>การจัดการนวัตกรรม</li>
                  <li>การเรียนออนไลน์ (e-Learning)</li>
                </ul>
              </v-col>
              <v-col cols="4" md="4" sm='4'>
                <div class="primary_ฺamber">About</div>
                <ul class="no-bullet mt-5">
                  <li>เกี่ยวกับเรา</li>
                  <li>ติดต่อเรา</li>
                </ul>
              </v-col>
              <v-col cols="4" md="4" sm='4'>
                <div class="primary_ฺamber">    Follow Us</div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <div class="copyright">Copyright © 2024. LogoIpsum. All rights reserved.</div>
      </v-container>
    </v-container>
  </v-footer>
</template>

<script setup>

</script>

<style scoped lang="scss">
p {
  font-size:14px ;
}
.copyright{
  text-align: center;
  margin-top: 86px;
  color: #FFFFFF;
}
  .no-bullet {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      margin-top: 16px;

    }
  }

  footer {
    background: #0033A1;
  }

</style>
