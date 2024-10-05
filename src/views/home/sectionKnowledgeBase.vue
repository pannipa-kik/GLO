<script setup>
import { ref, onMounted } from 'vue';
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import promote from '../../assets/promote.png';
import archive from '../../assets/icon/archive-add.png';
import archiveAdd from '../../assets/icon/archive-add1.png';

const itemsToShow = ref(1.5);

const slides = ref([
  {
    imgSrc: promote,
    title: "หลักสูตรสร้างโอกาสแห่งความสุขที่ยั่งยืน",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    author: "ธัญญารัตน์ อดิศัย",
    date: "25/07/2024",
    views: 20,
    archiveImg: archive,
  },
  {
    imgSrc: promote,
    title: "หลักสูตรพัฒนาทักษะการทำงาน",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "สมชาย แก้วมณี",
    date: "01/08/2024",
    views: 50,
    archiveImg: archive,
  },
  {
    imgSrc: promote,
    title: "หลักสูตรฝึกฝนทักษะการเรียนรู้",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "พรทิพย์ รุ่งโรจน์",
    date: "15/09/2024",
    views: 30,
    archiveImg: archive,
  },
  {
    imgSrc: promote,
    title: "หลักสูตรฝึกฝนทักษะการเรียนรู้",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "พรทิพย์ รุ่งโรจน์",
    date: "15/09/2024",
    views: 30,
    archiveImg: archive,
  },
]);

const toggleArchiveImg = (index) => {
  slides.value[index].archiveImg = slides.value[index].archiveImg === archiveAdd
    ? archive
    : archiveAdd;
};

const updateItemsToShow = () => {
  itemsToShow.value = window.innerWidth <= 768 ? 1 : 2.5;
};

onMounted(() => {
  updateItemsToShow();
  window.addEventListener('resize', updateItemsToShow);
});
</script>


<template>
  <div class="position-relative" style="z-index: 1;">
    <v-container>
      <div style="margin-top: 30px;" class="d-flex align-center justify-space-between">
        <MainTopic text="คอร์สแนะนำ" />
        <All text="ดูทั้งหมด" />
      </div>
    </v-container>
    <Carousel :items-to-show="itemsToShow" :wrap-around="true" :snap-align="'center'">
      <Slide v-for="(slide, index) in slides" :key="index">
        <div class="carousel__item">
          <a>
            <dic class="mx-8 my-8" elevation="16" max-width="600">
              <div class="image-wrapper">
                <img :src="slide.imgSrc" width="100%" />
              </div>
              <div class="box-card">
                <v-chip size="x-small" type="button" class="mt-3 bg_primary_ฺblue text-white">
                  <h3>ภารกิจหลัก</h3>
                </v-chip>
                <h3 class="primary_ฺblue mt-2">{{ slide.title }}</h3>
                <p class="mt-3">{{ slide.description }}</p>
                <div class="d-flex align-center justify-space-between     flex-wrap">
                  <div class="d-flex align-center justify-space-start mt-3 mb-3">
                    <div class="d-flex align-center ga-2 box-Action">
                      <div class="d-flex align-center avatar">
                        <v-avatar>
                          <img src="../../assets/image.png" alt="avatar" />
                        </v-avatar>
                        <span class="ms-2 primary_ฺblue">{{ slide.author }}</span>
                      </div>
                      <div class="d-flex align-center">
                        <v-img alt="calendar" src="../../assets/icon/calendar.png" width="16" max-height="16"></v-img>
                        <span class="ms-1">{{ slide.date }}</span>
                      </div>
                      <div class="d-flex align-center ">
                        <v-img alt="eye" src="../../assets/icon/eye.png" width="16" max-height="16"></v-img>
                        <span class="ms-1">{{ slide.views }}</span>
                      </div>
                    </div>
                  </div>
                  <a class="ms-2" @click="toggleArchiveImg(index)">
                    <v-img :src="slide.archiveImg" alt="archive add" width="32" max-height="32" />
                  </a>
                </div>
              </div>
            </dic>
          </a>

        </div>
      </Slide>
      <template #addons>
        <div class="navigate">
          <Navigation />
          <Pagination />
        </div>
      </template>
    </Carousel>
  </div>
</template>


<style scoped lang="scss">
.navigate {
  position: relative;
  width: 200px;
  margin: 0 auto;

  ::v-deep .carousel__prev {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  ::v-deep .carousel__next {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
}

::v-deep .carousel__pagination-button::after {
  background-color: #E2E2E2;
  border-radius: 50%;
  height: 9px;
  width: 9px;

}

::v-deep .carousel__pagination-button--active::after {
  background-color: #FD9B3A;
  opacity: 1;
}



.carousel__item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel {
  text-align: left;
}


.primary_ฺblue {
  color: #1976D2;
}

.ga-2 {
  gap: 10px;
}

.carousel__slide {
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease;
  transform: scale(0.85);
  transform-origin: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .image-wrapper {
    position: relative;

}

  .image-wrapper::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 3;
    transition: opacity 0.3s ease;
    border-radius: 12px;
  }

  .image-wrapper img {
    display: block;
    position: relative;
    z-index: 2;
    transition: margin-top 0.3s ease;
}


  &.carousel__slide--active {
    transform: scale(1);
    opacity: 1;
    .image-wrapper::before {
      background-color: transparent;
    }

  }

  .box-card {
    display: none;
  }

  img {
    transition: margin-top 0.3s ease;

  }


}


.carousel__slide--active {
  .box-card {
    display: block;
  }

  img {
    margin-top: 0;
  }


}

.box-card p {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

a{
  @media (max-width: 900px) {
    margin: 20px;
    }
}
</style>
