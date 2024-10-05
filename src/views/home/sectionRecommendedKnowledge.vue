<script setup>
import { ref } from 'vue';
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import promote from '../../assets/promote1.png';
import archive from '../../assets/icon/archive-add.png';
import archiveAdd from '../../assets/icon/archive-add1.png';

const itemsToShow = ref(1.5);

const slides = ref([
  {
    imgSrc: promote,
    title: "หลักสูตรสร้างโอกาสแห่งความสุขที่ยั่งยืน",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    author: "ธัญญารัตน์ อดิศัย",
    date: "25/07/2024",
    views: 20,
    archiveImg: archiveAdd,
  },
  {
    imgSrc: promote,
    title: "หลักสูตรพัฒนาทักษะการทำงาน",
    description:
      "ไฮแจ็คนอมินีลดตัวซาบะรับช่วง ไฮแจ็ค แซวรัชทายาทพาสตางอหายฮันนีมูนลูกรังแฟรี่ รวบยอดวางตาป๊อปนอนก้น ทนายความปลดปล่อยนพศูลฉุนเฉียวเหนื่อยหน่าย",
    author: "สมชาย แก้วมณี",
    date: "01/08/2024",
    views: 50,
    archiveImg: archiveAdd,
  },
  {
    imgSrc: promote,
    title: "หลักสูตรฝึกฝนทักษะการเรียนรู้",
    description:
      "ไฮแจ็คนอมินีลดตัวซาบะรับช่วง ไฮแจ็ค แซวรัชทายาทพาสตางอหายฮันนีมูนลูกรังแฟรี่ รวบยอดวางตาป๊อปนอนก้น ทนายความปลดปล่อยนพศูลฉุนเฉียวเหนื่อยหน่าย",
    author: "พรทิพย์ รุ่งโรจน์",
    date: "15/09/2024",
    views: 30,
    archiveImg: archiveAdd,
  },
]);

const toggleArchiveImg = (slide) => {
  slide.archiveImg = slide.archiveImg === archiveAdd ? archive : archiveAdd;
};

const updateItemsToShow = () => {
  itemsToShow.value = window.innerWidth <= 768 ? 1 : 1.5;
};

onMounted(() => {
  updateItemsToShow();
  window.addEventListener('resize', updateItemsToShow);
});
</script>

<template>
  <div class="position-relative" style="z-index: 1;">
    <div class="image-top-left">
      <img src="../../assets/Vector 14.png" max-width="100" height="100"></img>
    </div>
    <v-container>
      <div style="margin-top: 30px;" class="d-flex align-center justify-space-between">
        <MainTopic text="คลังความรู้ที่แนะนำ" />
        <router-link to="/knowledgeCenter" class="text-decoration-none">
          <All text="ดูทั้งหมด" />
        </router-link>
      </div>
    </v-container>
    <div>
      <Carousel :items-to-show="itemsToShow" :wrap-around="true" :autoplay="8000" :snap-align="'center'">
      <Slide v-for="(slide, index) in slides" :key="index">
        <div class="carousel__item">
          <a>
          <v-card class="mb-8" elevation="16"  >
            <v-row>
              <v-col cols="12" md="6" sm="12">
                <img :src="promote" alt="Event image" height="100%" />
              </v-col>
              <v-col cols="12" md="6" sm="12">
                <div class="pa-2 ms-5 mt-5 me-5 content">
                  <div>
                    <div class="d-flex align-center avatar mb-2">
                      <img :src="promote" alt="avatar"></img>
                      <span class="ms-2 primary_ฺblue">{{ slide.author }}</span>
                    </div>
                    <h3 class="primary_ฺblue mb-2">{{ slide.title }}</h3>
                    <span>{{ slide.description }}</span>
                  </div>

                  <div>
                    <div class="d-flex align-center justify-space-between mt-3 mb-8">
                      <div class="d-flex align-center ga-2 box-Action ">
                        <v-chip size="x-small" type="button" class="bg_primary_ฺblue text-white">
                          <h3>ภารกิจหลัก</h3>
                        </v-chip>
                        <div class="d-flex align-center">
                          <v-img alt="calendar" src="../../assets/icon/calendar.png" width="16" max-height="16"></v-img>
                          <span class="ms-1">{{ slide.date }}</span>
                        </div>
                        <div class="d-flex align-center">
                          <v-img alt="eye" src="../../assets/icon/eye.png" width="16" max-height="16"></v-img>
                          <span class="ms-1">{{ slide.views }}</span>
                        </div>
                      </div>
                      <a class="ms-2"  @click="toggleArchiveImg(slide)">
                        <v-img :src="slide.archiveImg" alt="archive add" width="32" max-height="32"></v-img>
                      </a>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </a>
        </div>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
    </div>

  </div>
</template>


<style scoped lang="scss">
a{
  transition: transform 0.5s ease-in-out;

    &:hover {
        transform: translate(0, -5px);
    }
}
.content span {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}


.image-top-left img {
  position: absolute !important;
  top: 38px !important;
  right: 323px !important;
  z-index: -1;
}


::v-deep .carousel__pagination-button::after {
  background-color: #0033A1;
  border-radius: 50%;
  height: 9px;
  width: 9px;
  opacity: 0.5;
}

::v-deep .carousel__pagination-button--active::after {
  background-color: #0033A1;
  opacity: 1;
  width: 15px;
  height: 9px;
  border-radius: 56px;
}


.content {
  position: relative;
  height: 100%;
  display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.primary_ฺblue {
  color: #1976D2;
}


.carousel__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1140px;
}

.v-card {
  text-align: left;
margin-top: 10px;
  border: 1px solid #ddd;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px !important;

  img {
    width: 100%;
  }
  .avatar img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  border-radius: 12px;


}

.carousel__slide {
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease, margin 0.5s ease;
  width: 1140px;
  transform: scale(0.9);

}

.carousel__slide--active {
  transform: scale(1);

}

.carousel__container {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 960px) {
    .v-card {
      margin: 0 30px !important;
    }

   }

</style>
