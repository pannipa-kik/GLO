<script setup>
import pressRelease from '../../assets/pressRelease-img.png';
import pressRelease2 from '../../assets/pressRelease-img2.png';
import pressRelease3 from '../../assets/pressRelease-img3.png';
import pressRelease4 from '../../assets/pressRelease-img4.png';

// Mock data for press releases
const pressReleases = [
  {
    imgSrc: pressRelease,
    title: 'ขอเชิญชวนทุกท่าน มาร่วมให้สิ่งแวดล้อมที่ดี...เพื่อเราทุกคน กับ กิจกรรม “GLO Give Green”',
    description: 'ราเมนพริตตี้รีวิว ดั๊มพ์ตังค์เอสเปรสโซ คาสิโนรีวิวสเปกตุ๊กตุ๊กเพนกวินแจ็กพ็อตโมเต็ลไหร่ยาวี...',
    date: '25/07/2024',
    views: 22,
    isHorizontal: false,
  },
  {
    imgSrc: pressRelease2,
    title: 'ขอเชิญชวนทุกท่าน มาร่วมให้สิ่งแวดล้อมที่ดี',
    description: 'โดนักเวิร์ลด์ เด้อ อัลไซเมอร์น็อค ออร์เดอร์ซิฟฟอนปูอัดสันทนาการ...',
    date: '01/08/2024',
    views: 18,
    isHorizontal: true,
  },
  {
    imgSrc: pressRelease3,
    title: 'กิจกรรมเพื่อสังคมและสิ่งแวดล้อม',
    description: 'โซลูชั่นคันธาระแม็กกาซีนอัลมอนด์บลูทูธหลวงปู่แขนง...',
    date: '05/08/2024',
    views: 30,
    isHorizontal: true,
  },
  {
    imgSrc: pressRelease4,
    title: 'การร่วมมือสร้างสรรค์การอนุรักษ์ธรรมชาติ',
    description: 'จิตวิญญาณไฮบริดไฟนอลเฟิร์มเอาท์บอร์ดโมเดลลิ่งซิงก์...',
    date: '10/08/2024',
    views: 45,
    isHorizontal: true,
  },
];
</script>



<template>
  <v-container>
    <div style="margin-top: 50px;" class="d-flex align-center justify-space-between">
      <MainTopic text="ข่าวประชาสัมพันธ์" />
      <All text="ดูทั้งหมด" />
    </div>

    <div class="mt-5">
      <v-row>
        <v-col cols="12" md="6" sm="12">
          <div class="box-card" v-if="!pressReleases[0].isHorizontal">
            <a>
              <v-card>
              <v-img :src="pressReleases[0].imgSrc" width="100%" contain />
              <v-row>
                <v-col cols="12" md="12" sm="6">
                  <div class="box-content">
                    <h3 class="primary_ฺblue mb-2">{{ pressReleases[0].title }}</h3>
                    <p>{{ pressReleases[0].description }}</p>
                    <div class="d-flex align-center justify-space-between">
                      <div class="d-flex align-center justify-space-start mt-3 mb-3">
                        <div class="d-flex align-center ga-2 box-Action">
                          <div class="d-flex align-center">
                            <v-img alt="calendar" src="../../assets/icon/calendar.png" width="16" max-height="16" />
                            <span class="ms-1">{{ pressReleases[0].date }}</span>
                          </div>
                          <div class="d-flex align-center">
                            <v-img alt="eye" src="../../assets/icon/eye.png" width="16" max-height="16" />
                            <span class="ms-1">{{ pressReleases[0].views }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card>
            </a>

          </div>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <v-row>
            <v-col cols="12" md="12" sm="12" v-for="(release, index) in pressReleases.slice(1)" :key="index">
              <div class="card-horizontal">
                <a>
                <v-card>
                  <v-row>
                    <v-col cols="12" md="6" sm="12">
                      <v-img :src="release.imgSrc" alt="Event image" height="100%" />
                    </v-col>
                    <v-col cols="12" md="6" sm="12">
                        <div class="pa-1 pt-2 pe-2">
                        <h4 class="text-primary mb-2">{{ release.title }}</h4>
                        <span>{{ release.description }}</span>
                        <div class="d-flex align-center justify-space-between">
                          <div class="d-flex align-center justify-space-start mt-3 mb-3">
                            <div class="d-flex align-center ga-2 box-Action">
                              <div class="d-flex align-center">
                                <v-img alt="calendar" src="../../assets/icon/calendar.png" width="16" max-height="16" />
                                <span class="ms-1">{{ release.date }}</span>
                              </div>
                              <div class="d-flex align-center">
                                <v-img alt="eye" src="../../assets/icon/eye.png" width="16" max-height="16" />
                                <span class="ms-1">{{ release.views }}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </v-col>
                  </v-row>
                </v-card>
              </a>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>



<style scoped lang="scss">


::v-deep .v-img__img--contain {
    object-fit: cover !important;
    transition: transform 0.3s ease;
}

::v-deep a:hover .v-img__img--contain {
  transform: scale(1.1); // ซูมภาพเมื่อชี้เมาส์ที่ <a>
  transition: transform 0.3s ease; // แอนิเมชันนุ่มนวล
}


.card-horizontal {
    ::v-deep .v-card--variant-elevated {
        // padding: 15px;
        border-radius: 12px;
    }
}

.box-card {
  height: 100%;
    .box-content {

        padding: 15px;
    }

    span {
        font-size: 12px;
    }

    .v-card--variant-elevated {
        // padding: 15px;
        border-radius: 12px;
        height: 100%;
    }

    .v-avatar {
        width: 16px;
        height: 16px;
    }

}
</style>
