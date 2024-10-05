<template>
  <div class="box-pagination1">
    <v-pagination :length="5"></v-pagination>
  </div>

</template>


<style lang="scss" scoped>
.box-pagination1 {
  ::v-deep .v-pagination__item--is-active {
    background-color: #0033A1;
    color: #fff;
    height: 32px;
    border-radius: 8px;
    width: 32px;
  }

  ::v-deep .v-pagination__list {
    color: black;
    height: 32px;
    width: 32px;

    .v-btn {
      height: 32px;
      width: 32px;
    }
  }

  ::v-deep .v-pagination__prev {
    border: 1px solid #000;
    border-radius: 8px;
    height: 32px;
    width: 32px;
    margin-right: 20px;

    .v-btn {
      height: 32px;
      width: 32px;
    }

  }

  ::v-deep .v-pagination__next {
    margin-left: 20px;
    border: 1px solid #000;
    border-radius: 8px;
    height: 32px;
    width: 32px;

    .v-btn {
      height: 32px;
      width: 32px;
    }

  }

}
</style>
