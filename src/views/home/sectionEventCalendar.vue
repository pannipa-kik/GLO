<script setup>
import { ref } from 'vue';





const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const attributes = ref([
    {
        key: 'today',
        highlight: {
            fillMode: 'solid',
            contentClass: 'vc-sky-primary',
        },
        dates: new Date(year, month, 1),
    },
    {
        highlight: {
            fillMode: 'solid',
            contentClass: 'vc-sky-turquoise',

        },
        dates: new Date(year, month, 14),
    },
    {
        highlight: {
            color: 'pink',
            fillMode: 'solid',
            contentClass: 'vc-sky-pinks',
        },
        dates: new Date(year, month, 19),
    },
    {
        highlight: {
            fillMode: 'solid',
            contentClass: 'vc-sky-yellow',
        },
        dates: new Date(year, month, 30),
    },
]);
</script>

<template>
    <v-container>
        <div style="margin-top: 50px; margin-bottom: 20px;" class="d-flex align-center justify-space-between">
            <MainTopic text="ปฏิทินกิจกรรม" />
            <All text="ดูทั้งหมด" />
        </div>
        <div>
            <v-card>
                <v-row>
                    <v-col cols="12" md="2" sm="6">
                        <div>
                            <h4 class="mb-3 ms-3 primary_ฺblue">กิจกรรม</h4>
                            <p class="mb-3 ms-3 primary_ฺamber">วันหยุดราชการ</p>
                            <p class="mb-3 ms-3 primary_turquoise">วันหยุด GLO</p>
                            <p class="mb-3 ms-3 primary_pinks">อื่นๆ</p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" sm="6">
                        <div>
                            <VCalendar :locale="'th'" :first-day-of-week="2" :attributes="attributes" />
                        </div>
                    </v-col>
                    <v-col cols="12" md="4" sm="12">
                        <div class="box-list">
                            <h4 class="primary_ฺblue mb-3">รายการกิจกรรมเดือน สิงหาคม</h4>
                            <div>
                              <a>
                                <div class="d-flex align-center">
                                    <img alt="calendar" src="../../assets/icon/calendar1.png" width="16"
                                        max-height="16"></img>
                                    <span class="ms-1">25/07/2024</span>
                                </div>
                                <h5>เช็ก มาร์เก็ตแอสเตอร์แพตเทิร์น เคลียร์ แพนด้า แม่ค้า ราเม็งสเตอ
                                    ริโอแบล็ค ทำงาน แซนด์วิชแมคเคอเรล </h5>

                              </a>
                            </div>
                            <div>
                              <a>
                                <div class="d-flex align-center mt-5">
                                    <img alt="calendar" src="../../assets/icon/calendar1.png" width="16"
                                        max-height="16"></img>
                                    <span class="ms-1">25/07/2024</span>
                                </div>
                                <h5>เช็ก มาร์เก็ตแอสเตอร์แพตเทิร์น เคลียร์ แพนด้า แม่ค้า ราเม็งสเตอ
                                    ริโอแบล็ค ทำงาน แซนด์วิชแมคเคอเรล </h5>
                                  </a>
                            </div>
                            <div>
                              <a>
                                <div class="d-flex align-center mt-5">
                                    <img alt="calendar" src="../../assets/icon/calendar1.png" width="16"
                                        max-height="16"></img>
                                    <span class="ms-1">25/07/2024</span>
                                </div>
                                <h5>เช็ก มาร์เก็ตแอสเตอร์แพตเทิร์น เคลียร์ แพนด้า แม่ค้า ราเม็งสเตอ
                                    ริโอแบล็ค ทำงาน แซนด์วิชแมคเคอเรล </h5>
                              </a>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </div>
    </v-container>
</template>


<style lang="scss" scoped>
a{
    h5{
      &:hover {
      color: #0033A1;
    }

  }

}
.box-list {
    padding: 20px;
    background-color: #F5F5F5;
    height: 100%;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
}

::v-deep .vc-sky-turquoise {
    background-color: #00C6BE !important;
}

::v-deep .vc-sky-primary {
    background-color: #0033A1 !important;
}

::v-deep .vc-sky-pinks {
    background-color: #FE6A7C !important;
}

::v-deep .vc-sky-yellow {
    background-color: #FD9B3A !important;
}

.v-card--variant-elevated {
    padding: 15px;
    border-radius: 22px;
    box-shadow: none;
    border: 1px solid #ddd;
}

::v-deep .vc-bordered {
    border: 0;
    width: 100%;

}

</style>
