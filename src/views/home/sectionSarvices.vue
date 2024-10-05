<script setup>
import propertyImage from '@/assets/Property34.png';
import book from '@/assets/book1.png';
import file from '@/assets/file.png';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import Sarvicesimg3 from '@/assets/Sarvices-img3.png';
import promote from '@/assets/promote.png';
import promote1 from '@/assets/promote1.png';

const images = [
  promote,
  promote1,
];
</script>

<template>
  <div style="margin-top: 47px; position: relative;z-index: 1;">
    <v-row>
      <v-col cols="12" md="6" sm="12">
        <MainTopic text="โปรโมท" class="mb-3" />
        <div class="box-carousel">
          <Carousel  :autoplay="5000"  :wrap-around="true">
            <Slide v-for="(image, index) in images" :key="index">
              <div class="carousel__item">
                <img :src="image" class="profile" alt="Image slide" />
              </div>
            </Slide>
            <template #addons>
            <Pagination />
          </template>
        </Carousel>
        </div>
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <MainTopic text="บริการของเรา" class="mb-3" />
        <v-row>
          <v-col cols="12" md="6" sm="12">
            <CardServices :imageSrc="propertyImage" text="คลังความรู้" details="Lorem ipsum dolor sit amet " />
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <CardServices gradient="linear-gradient(45deg,#05E37B, #01C6BD)" :imageSrc="book" width="141" height="141"
              text="e-Learning" details="Lorem ipsum dolor sit amet " />
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <CardServices gradient="linear-gradient(45deg,#FF9AA7, #FE6A7C)" :imageSrc="Sarvicesimg3"
              text="โอกาสแห่งนวัตกรรม" details="Lorem ipsum dolor sit amet " width="240" height="130" />
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <CardServices :imageSrc="file" text="บริหารโครงการ" width="151" height="141"
              details="Lorem ipsum dolor sit amet " />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>

</template>


<style lang="scss" scoped>
.box-carousel {
  height: 100%;

  img {
    width: 100%;
    height: 313px;
    border-radius: 12px;
  }
  .carousel *{
    border-radius: 12px !important;
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

}
</style>
