<script setup>
import { cardData } from '../../data/data.js';
import DialogsComment from '../../views/knowledgeCenter/dialogsComment.vue'

const tab = ref(0);
</script>


<template>
  <div class="image-top-right">
    <img src="../../assets/bgb1.png" max-width="600" height="600" />
  </div>
  <div class="image-top-left">
    <img src="../../assets/knowledgeCenter/bgl.png" max-width="600" height="200" />
  </div>
  <div class="image-center-right1">
    <img src="../../assets/knowledgeCenter/lgCR.png" max-width="600" height="100" />
  </div>
  <div class="image-center-left">
    <img src="../../assets/knowledgeCenter/vgLC.png" width="70" height="1000" />
  </div>
  <v-container class="fill-height text-white box-container">
    <v-container>
      <div style="margin: 60px 0 60px 0;">
        <img src="../../assets/image458.png" width="266" max-height="88" contain />
        <h1 class="primary_ฺblue">คลังความรู้ (Knowledge Center)</h1>
        <p class="primary_ฺamber">Innovation & Knowledge space : i-Know</p>
      </div>
      <h3 class="primary_ฺblue">ขอเชิญชวนทุกท่าน มาร่วมให้สิ่งแวดล้อมที่ดี...เพื่อเราทุกคน กับกิจกรรม “GLO Give Green”
      </h3>
      <v-row>
        <v-col cols="12" md="6" sm='6'>
          <div class="d-flex align-center mt-3 mb-3 text-black user">
            <div class="d-flex align-center avatar">
              <v-avatar>
                <v-img src="../../assets/promote1.png" alt="avatar"></v-img>
              </v-avatar>
              <span class="ms-2 primary_ฺblue me-3">ชมพู พันธุ์สิทธิ์</span>
            </div>
            <div class="d-flex align-center ga-2">
              <div class="d-flex align-center">
                <v-img alt="calendar" src="../../assets/icon/calendar.png" width="16" max-height="16"></v-img>
                <span class="ms-1">25/07/2024</span>
              </div>

              <div class="d-flex align-center">
                <v-img alt="eye" src="../../assets/icon/eye.png" width="16" max-height="16"></v-img>
                <span class="ms-1">20</span>
              </div>
              <div class="d-flex align-center">
                <v-img alt="saved" src="../../assets/icon/book-saved.png" width="16" max-height="16"></v-img>
                <span class="ms-1">22</span>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" sm='6'>
          <div class="d-flex align-center mt-5 mb-3 text-black share">
            <div class="d-flex align-center ga-2">
              <a class="d-flex align-center">
                <v-img src="../../assets/icon/like.png" width="16" max-height="16"></v-img>
              </a>
              <a class="d-flex align-center">
                <v-img src="../../assets/icon/additem.png" width="16" max-height="16"></v-img>
              </a>
              <a class="d-flex align-center">
                <v-img src="../../assets/icon/archive-add-pink.png" width="16" max-height="16"></v-img>
              </a>
              <a class="d-flex align-center ms-2 me-2">
                แชร์
              </a>
              <a class="d-flex align-center">
                <v-img src="../../assets/icon/Facebook.png" width="20" max-height="20"></v-img>
              </a>
              <a class="d-flex align-center">
                <v-img src="../../assets/icon/Twitter).png" width="20" max-height="20"></v-img>
              </a>
              <a class="d-flex align-center">
                <v-img src="../../assets/icon/LINE.png" width="20" max-height="20"></v-img>
              </a>
            </div>
          </div>
        </v-col>
      </v-row>
      <div style="margin-top: 10px;">
        <img src="../../assets/banner.png" width="100%" contain></img>
      </div>
      <div class="mt-5">
        <v-tabs v-model="tab" hide-slider>
          <v-tab value="one">
            <h4>รายละเอียด</h4>
          </v-tab>
          <v-tab value="two">
            <h4>ไฟล์แนบ</h4>
          </v-tab>
          <v-tab value="three">
            <h4>วิดีโอ</h4>
          </v-tab>
        </v-tabs>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one" class="secondary">
            ทาวน์เฮาส์แทงโก้ฮอตดอก สตริง เอ็นจีโอฮาราคีรี คอลัมน์ทอล์ค คอมเมนท์ตรวจทานยังไงไนท์บูติก
            ซาดิสม์เวเฟอร์เสกสรรค์แบรนด์ เคลื่อนย้ายคอนโด เบิร์ดคอนเทนเนอร์ เฮียยากูซ่าแคชเชียร์พีเรียดฟรังก์
            บัตเตอร์ละติน สไตรค์สตรอเบอรีควิก มาร์เก็ต ชัตเตอร์สตรอว์เบอร์รีแฟนตาซีเที่ยงคืนเพรียวบาง แฮนด์โฮสเตสมาร์ช
            นรีแพทย์เยอร์บีร่าคอนโดมิเนียมโทรโข่งภควัมบดี แซมบ้าเจ็ตออดิชั่น
            <br><br>
            สไลด์เทควันโดทอล์คอาร์ติสต์ตนเอง เฉิ่มเยนโลชั่นเรตติ้งเนิร์สเซอรี่ มวลชนฟาสต์ฟู้ดสตรอเบอร์รี
            ดีมานด์ช็อปปิ้งแจ๊กพ็อต แยมโรล มลภาวะเพลซเวิร์กพลานุภาพฮอต บอยคอตต์ เบนโตะอัลมอนด์ซาบะ
            พลาซ่าล็อตอุเทนพฤหัส
            เคลียร์ไฮบริดตู้เซฟ เฟรชไวอะกร้ารีสอร์ตโทร หม่านโถว แบคโฮตอกย้ำสไลด์ โลโก้แมชีน คลาสสิกคันถธุระ
            อินเตอร์มาม่าวีไอพีตื้บ
            <br><br>
            นิวเชฟช็อปปิ้งห่วย บิ๊กเดชานุภาพมอคค่า จัมโบ้วิทย์กฤษณ์ป๋า ซามูไรเบอร์เกอร์โอเพ่น ไวอากร้าเคสฮาราคีรีวิลล์
            ออดิชั่นโปรโมเตอร์สไปเดอร์แจ๊สจตุคาม เบลอทีวีเชอร์รี่พูลลาเต้ แอพพริคอทสันทนาการ ฮัลโลวีนคาเฟ่ซิ่ง
            ปาสเตอร์ชาร์จ เกย์มหภาคแชมเปญ มิลค์แอปเปิ้ล ฮาร์ด บูมแดนซ์ เมคอัพเทปมั้งซิมโฟนีเวิร์กช็อป
            อิ่มแปร้แฟนตาซีเลิฟวอเตอร์
          </v-tabs-window-item>
          <v-tabs-window-item value="two">
            <File />
          </v-tabs-window-item>
          <v-tabs-window-item value="three">
            <Vdo />
          </v-tabs-window-item>
        </v-tabs-window>
      </div>
      <div class="primary_ฺblue">
        <h3 class="mt-5 mb-3">
          รูปภาพเพิ่มเติม
        </h3>
        <LightboxImg />
        <div class="d-flex tag">
          <p>Tag: </p>
          <div class="ms-3">
            <v-chip density="compact" variant="flat" label class="bg_primary_ฺblue me-2">
              ผลิตภัณฑ์
            </v-chip>
            <v-chip density="compact" variant="flat" label class="bg_primary_ฺblue">
              บริการ
            </v-chip>
          </div>
        </div>
        <v-row>
          <v-col cols="12" md="8" sm='8'>
            <div class="d-flex align-center mt-3 mb-3 text-black user justify-space-between">
              <div class="d-flex align-center avatar">
                <v-avatar>
                  <v-img src="../../assets/promote1.png" alt="avatar"></v-img>
                </v-avatar>
                <span class="ms-2 primary_ฺblue me-3">พิมพ์ใจ ดวงใจ</span>
              </div>
              <div class="d-flex align-center ga-2">
                <div class="d-flex align-center">
                  <DialogsComment/>
                  <v-img src="../../assets/icon/messages-3.png" width="16" max-height="16" class="ms-1"></v-img>
                  <span class="ms-1">22</span>
                </div>
              </div>
            </div>
            <Comment/>
            <v-checkbox label="แสดงความคิดเห็น แบบไม่ระบุตัวตน" class="text-black"></v-checkbox>
          </v-col>
        </v-row>
        <div style="margin-top: 50px; margin-bottom: 20px;" class="d-flex align-center justify-space-between">
          <MainTopic text="คลังความรู้ที่เกี่ยวข้อง" />
          <All text="ดูทั้งหมด" />
        </div>
        <div>
          <v-row>
            <v-col cols="12" md="4" sm="6" v-for="(card, index) in cardData.slice(0, 3)" :key="index">
              <Card :name="card.name" :date="card.date" :views="card.views" :likes="card.likes" :saves="card.saves"
                :title="card.title" :description="card.description" :chip="card.chip" :imageSrc="card.imageSrc"
                :avatarSrc="card.avatarSrc" :archive="card.archive"   link="/knowledgeCenter/detail"/>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </v-container>
  <div class="image-bottom-left">
    <img src="../../assets/bgb2.png" max-width="300" height="400" />
  </div>
  <div class="image-center-right">
    <img src="../../assets/knowledgeCenter/bg-center.png" max-width="500" height="500" />
  </div>
</template>


<style lang="scss" scoped>
.user {
  @media (max-width: 960px) {
    flex-wrap: wrap !important;

    .avatar {
      margin-bottom: 10px;
    }
  }
}

.share {
  justify-content: flex-end;
  margin-top: 21px !important;

  @media (max-width: 960px) {
    justify-content: flex-start;
    margin: 0 !important;
    margin-bottom: 5px !important;
  }
}

.tag {
  margin-top: 40px;
}

.v-container {
  position: relative;
  z-index: 2;
}

.v-tab.v-tab.v-btn {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

::v-deep .v-tab--selected {
  background-color: #fff !important;
  color: #0033A1 !important;
}

::v-deep .v-btn.v-btn--density-default {
  color: #595D62;
  background-color: #E2E2E2;
}

.v-window {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 0 12px 12px 12px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15), 0px 6px 6px rgba(0, 0, 0, 0.10);
  background-color: #fff;
}

// bg
.image-top-right img {
  position: absolute !important;
  top: 0;
  right: 0;
  z-index: 0;

  @media (max-width: 1600px) {
    display: none;
  }

}

.image-bottom-left img {
  position: absolute !important;
  bottom: 5% !important;
  left: 0 !important;
  z-index: 0;

}

.image-center-right img {
  position: absolute !important;
  bottom: 11% !important;
  right: 0 !important;
  z-index: 0;
}

.image-top-right {
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;

}

.image-top-left {
  position: absolute !important;
  bottom: 5% !important;
  top: 10% !important;
  z-index: 0;
}

.image-center-right1 {
  position: absolute !important;
  top: 25% !important;
  right: 20% !important;
  z-index: 0;
}

.image-center-left {
  position: absolute !important;
  top: 40% !important;
  left: 0 !important;
  z-index: 0;
}

</style>
