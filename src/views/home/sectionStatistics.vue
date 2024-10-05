<template>
  <v-container>
    <div style="margin-top: 50px;" class="text-center">
      <MainTopic text="สถิติภายในเว็บไซต์" />
    </div>
    <div style="margin-top: 20px ; margin-bottom: 30px; position: relative;  z-index:2;">
      <div class="box-statistics">
        <div class="box">
          <a>
            <v-card style="background: linear-gradient(45deg, #FED653, #FEFE53)">
              <img src="../../assets/book1.png" width="86" height="86" contain></img>
              <div class="box-text">
                <h3 class="primary_ฺblue">คอร์สเรียนออนไลน์</h3>
                <h3 class="text-white">500</h3>
                <p class="primary_ฺblue"> บทเรียน </p>
              </div>
            </v-card>
          </a>
        </div>
        <div class="box">
          <a>
            <v-card style="background: linear-gradient(45deg, #FF9AA7, #FE6A7C)">
              <img src="../../assets/book1.png" width="86" height="86" contain></img>
              <div class="box-text">
                <h3 class="primary_ฺblue">สมาชิก</h3>
                <h3 class="text-white">500</h3>
                <p class="primary_ฺblue"> ผู้ใช้งาน </p>
              </div>
            </v-card>
          </a>
        </div>
        <div class="box">
        <a>
          <v-card style="background: linear-gradient(45deg, #05E37B, #01C6BD)">
            <img src="../../assets/book1.png" width="86" height="86" contain></img>
            <div class="box-text">
              <h3 class="primary_ฺblue">คลังความรู้</h3>
              <h3 class="text-white">500</h3>
              <p class="primary_ฺblue"> บทเรียน </p>
            </div>
          </v-card>
        </a>
        </div>
      </div>

    </div>
  </v-container>
</template>

<style scoped lang="scss">
.box-statistics {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

}


.v-card {
  border-radius: 12px;
  padding: 15px;
  position: relative;
  width: 291px;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: translate(0, -5px);
  }

  img {
    position: absolute;
    top: 15px;
    right: 10px;
  }



}
</style>
