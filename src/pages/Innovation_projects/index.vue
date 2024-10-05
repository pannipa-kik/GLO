
<script setup>
import { cardData } from '../../data/cardLatestProjects.js';
import { cardIssue} from '../../data/cardIssue.js';


const value = ref(0);
const tags = ref([
    'กฏหมาย',
    'ความรู้ออนไลน์',
    'สุขภาพ',
    'ความรู้ออนไลน์',
    'สุขภาพ',
    'ความรู้ออนไลน์',

]);
</script>


<template>
    <div class="image-top-left"> 
    <img src="../../assets/bgOr1.png" max-width="500" height="400"></img>
  </div>
  <div class="image-top-right"> 
    <img src="../../assets/bgOr2.png" max-width="500" height="700"></img>
  </div>
    <v-container class="fill-height text-white">
        <v-container>
            <div style="margin-top: 150px;">
                <h1 class="primary_ฺblue">รระบบบริหารโครงการนวัตกรรม : <br> โครงงานนวัตกรรม</h1>
                <p class="primary_ฺamber">Innovation & Knowledge space : i-Know</p>
            </div>
            <div class="search">
                <v-row>
                    <v-col cols="12" md="5" sm="6">
                        <v-text-field prepend-inner-icon="mdi-magnify" density="compact" label="ค้นหา" variant="solo"
                            hide-details single-line>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="3" sm="6">
                        <div class="select">
                            <v-select label="Select" density="compact" single-line
                                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                                variant="outlined">
                            </v-select>
                        </div>
                    </v-col>
                    <v-col cols="12" md="4" sm="2">
                        <v-btn class="text-white">ค้นหาข้อมูล</v-btn>
                    </v-col>
                </v-row>
            </div>
            <div style="margin-top: 20px;">
                <v-row>
                    <v-col cols="12" md="12" sm="12">
                        <MainTopic text="ประเด็นปัญหาล่าสุด" class="mb-5"/>
                        <v-row>
                            <v-col cols="12" md="4" sm="6" v-for="(card, index) in cardData" :key="index">
                                <CardIssue :title="card.title" :author="card.author" :date="card.date"
                                    :views="card.views" :comments="card.comments" :avatarSrc="card.avatarSrc"
                                    :imageSrc="card.imageSrc" :chipText="card.chipText" :description="card.description" />
                            </v-col>
                        </v-row>
                    </v-col>

                </v-row>
            </div>
            <div style="margin-top: 60px;">
                <v-row>
                    <v-col cols="12" md="8" sm="6">
                        <MainTopic text="ประเด็นปัญหาล่าสุด" />
                        <v-row>
                            <v-col cols="12" md="12" sm="12" v-for="(card, index) in cardIssue" :key="index">
                                <CardIssue :title="card.title" :author="card.author" :date="card.date"
                                    :views="card.views" :comments="card.comments" :avatarSrc="card.avatarSrc"
                                    :imageSrc="card.imageSrc" :chipText="card.chipText" />
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                        <MainTopic text="หมวดหมู่แนะนำ" />
                        <div class="filter">
                            <v-layout class="overflow-visible" style="height: 100px;">
                                <v-bottom-navigation v-model="value" active grow wrap>
                                    <v-btn>โครงการที่ตอบตามภารกิจหลัก</v-btn>
                                    <v-btn>โครงการที่ตอบตามภารกิจสนับสนุน</v-btn>
                                </v-bottom-navigation>
                            </v-layout>
                        </div>
                        <div class="tag">
                            <MainTopic text="Tag ยอดฮิต" />
                            <div>
                                <v-sheet class="py-4 px-1">
                                    <v-chip-group column>
                                        <v-chip v-for="tag in tags" :key="tag" :text="tag" type="button"></v-chip>
                                    </v-chip-group>
                                </v-sheet>

                            </div>
                        </div>
                    </v-col>
                </v-row>
            </div>

            <div style="margin-top: 60px;">
                <v-row>
                    <v-col cols="12" md="12" sm="12">
                        <MainTopic text="โครงการนวัตกรรม" class="mb-5"/>
                        <v-row>
                            <v-col cols="12" md="4" sm="6" v-for="(card, index) in cardData" :key="index">
                                <CardIssue :title="card.title" :author="card.author" :date="card.date"
                                    :views="card.views" :comments="card.comments" :avatarSrc="card.avatarSrc"
                                    :imageSrc="card.imageSrc" :chipText="card.chipText" :description="card.description" />
                            </v-col>
                        </v-row>
                    </v-col>

                </v-row>
            </div>
        </v-container>
    </v-container>
</template>

<style lang="scss" scoped>
.tag {
    margin-top: 50px;



    ::v-deep .v-chip {
        margin: 5px;
        padding: 10px;
        background-color: #0033A1;
        color: white;
        border-radius: 8px;

    }


}

.featured-author {
    margin-top: 50px;

    .list {
        margin-top: 16px;
    }
}

.filter {
    margin-top: 20px !important;
    display: flex;
    justify-content: center;

    .v-btn--active {
        background-color: #0033A1;
        color: #fff !important;
    }

    ::v-deep .v-bottom-navigation__content {
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .v-bottom-navigation {
        background-color: transparent;
        box-shadow: none;
        height: 100px !important;
        top: 0px !important;
    }

    .v-bottom-navigation .v-bottom-navigation__content>.v-btn {
        border: 1px solid;
        margin: 0px 5px;
        border-radius: 8px;
        height: 38px;
        color: #0033A1;
        text-align: left;
    }
}

.search {
    margin-top: 137px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    ::v-deep .v-field--variant-solo {
        box-shadow: none !important;
    }

    ::v-deep .v-input__control {
        border: 1px solid #e2e2e2;
        border-radius: 8px;
    }

    .v-btn--variant-elevated {
        background: #0033a1 !important;
        width: 95px;
        border-radius: 8px;
        padding: 0 16px;
    }

    .select {
        ::v-deep .mdi-menu-down::before {
            color: black !important;
        }

        ::v-deep .v-field--center-affix .v-label.v-field-label {
            color: black;
        }

        .v-select {
            color: black !important;
        }
    }
}

.image-top-left img {
  position: absolute !important;
  top: 70px !important;
    left: 0 !important;
}

.image-top-right img {
  position: absolute !important;
  top: 0 !important;
    right: 0 !important;
}


</style>
