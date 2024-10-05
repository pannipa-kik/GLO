<script>
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import { VCard, VImg, VRow, VCol, VIcon } from 'vuetify/components';
import 'vue3-carousel/dist/carousel.css';
import propertyImage from '../../assets/Image.png';

export default defineComponent({
  name: 'CustomCarousel',
  components: {
    Carousel,
    Pagination,
    Navigation,
    Slide,
    VCard,
    VImg,
    VRow,
    VCol,
    VIcon,
  },
  setup() {
    const currentSlide = ref(1);
    const slides = ref([
      { title: 'CG', img: propertyImage },
      { title: 'ภารกิจหลัก', img: propertyImage },
      { title: 'การดำเนินงาน', img: propertyImage },
      { title: 'ภารกิจสนับสนุน', img: propertyImage },
      { title: 'อื่น ๆ', img: propertyImage },
    ]);

    const itemsToShow = ref(4);

    const updateItemsToShow = () => {
      if (window.innerWidth <= 1600) {
        itemsToShow.value = 2;
      } else {
        itemsToShow.value = 4;
      }
    };

    onMounted(() => {
      updateItemsToShow();
      window.addEventListener('resize', updateItemsToShow);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateItemsToShow);
    });

    return {
      currentSlide,
      slides,
      itemsToShow,
    };
  },
  methods: {
    getCardClass(index, currentSlide) {
      if (index === currentSlide) {
        return 'main-card';
      } else if (index === currentSlide - 1 || (currentSlide === 0 && index === this.slides.length - 1)) {
        return 'left-card';
      } else if (index === currentSlide + 1 || (currentSlide === this.slides.length - 1 && index === 0)) {
        return 'right-card';
      } else {
        return 'far-right-card';
      }
    },
  },
});
</script>



<template>
  <div class="custom-carousel-container">
    <Carousel v-model="currentSlide" :itemsToShow="itemsToShow" :autoplay="5000"   :wrapAround="true" :transition="100" snapAlign="center-even" class="custom-carousel">
      <Slide v-for="(slide, index) in slides" :key="index">
        <v-card class="carousel__item" :class="getCardClass(index, currentSlide)">
          <v-img :src="slide.img" height="100%" class="carousel__image">
            <template #default>
              <v-row class="fill-height align-end">
                <v-col class="text-center pa-0 pe-2">
                  <div
                    :class="['overlay-title', { 'main-title': getCardClass(index, currentSlide) === 'main-card', 'highlight-title': slide.title === 'ภารกิจสนับสนุน' }]">
                    {{ slide.title }}
                  </div>
                </v-col>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>


<style scoped lang="scss">
.carousel__pagination {
  position: absolute;
  left: 38%;
  margin-top: 30px;
  transform: translateX(-50%);

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
  width: 9px;
  height: 9px;
  border-radius: 56px;
}

@media (max-width: 1600px){
  display: none;
}
}

::v-deep .carousel__prev {
    color: white;
    position: absolute;
    left: 52%;
    top: 90%;
    font-size: 26px;
    background-color: #595D62;
    border-radius: 50%;
    height: 42px;
    width: 42px;
  }

  ::v-deep .carousel__next {
    color: white;
    position: absolute;
    left: 54%;
    top: 100%;
    font-size: 26px;
    background-color: #FE6A7C;
    border-radius: 50%;
    height: 42px;
    width: 42px;
  }




.overlay-title {
  font-weight: bold;
  text-align: end;
  padding-right: 15px;
}

.overlay-title {
  font-size: 20px;
  text-align: start;
  padding-left: 20px;
  color: #ffcc00;
}

.main-title {
  font-size: 40px;
  text-align: end;
  /* color: #ff4c61;  */
}

.highlight-title {
  color: #ff4c61;
}

.custom-carousel-container {
  position: relative;
  margin-top: 20px;
  left: 12%;
  padding-bottom: 50px;
}

.custom-carousel {
  position: relative;
}

.nav-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: #ff4c61;
  color: white;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.nav-button:hover {
  background-color: #ff1c33;
}

.prev-button {
  position: absolute;
  top: 50%;
  left: -20px;
  transform: translateY(-50%);
  z-index: 10;
}

.next-button {
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  z-index: 10;
}

.carousel__slide {
  padding: 10px;
}

.carousel__item {
  margin: 0px 10px;
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.5s ease, opacity 0.5s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.main-card {
  width: 558px;
  height: 300px;
  z-index: 3;
  margin: 10px;
  transform: translateX(0px) scale(1.1);
}

.left-card {
  width: 267px;
  height: 250px;
  transform: translateX(20px) scale(0.9);
  margin-top: -7px;
  z-index: 2;
}

.right-card {
  width: 267px;
  margin-top: -7px;
  height: 250px;
  transform: translateX(-20px) scale(0.9);
  opacity: 0.9;
  z-index: 2;
}

.far-right-card {
  width: 200px;
  height: 200px;
  transform: translateX(-150px);
  opacity: 0.7;
  z-index: 1;

  @media (max-width: 1600px){
    transform: translateX(0px);

  }
}

.carousel__image {
  border-radius: 15px;
}

::v-deep .carousel__viewport {
  perspective: 2000px;
  overflow: inherit !important;
  @media (max-width: 1600px){
    perspective: 100%;
  }
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  align-items: flex-start !important;
}

::v-deep .v-img__img--contain {
  object-fit: cover !important;
}


@media (max-width: 1600px){
  ::v-deep .carousel__prev,
  ::v-deep .carousel__next{
    display: none;
  }
  .main-title {
  font-size: 20px;
  }
}

</style>
