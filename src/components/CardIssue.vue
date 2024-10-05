<script setup>
import archive from '../assets/icon/archive-add.png';
import archiveAdd from '../assets/icon/archive-add1.png';


const props = defineProps({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  views: {
    type: Number,
    required: true
  },
  comments: {
    type: Number,
    required: true
  },
  avatarSrc: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  },
  chipText: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  archive: {
    type: Boolean,
    default: true
  },
  approved: {
    type: String,
    required: true
  },
  radius: {
    type: String,
    default: 'border-radius: 22px'
  },
});

const chipClass = computed(() => {
  if (props.chipText === 'ภารกิจสนับสนุน' || props.chipText === 'CG') {
    return 'bg_primary_ฺamber text-white';
  }
  return 'bg_primary_ฺblue text-white';
});

const archiveImg = ref(archive);

const toggleArchiveImg = () => {
  archiveImg.value = archiveImg.value === archive
    ? archiveAdd
    : archive;
};

</script>

<template>
  <div class="box-card">
    <v-card :style="radius">
      <v-row>
        <v-col v-if='props.imageSrc' cols="12" md="3" sm='6'>
          <div class="imageSrc">
            <img :src="imageSrc" width="100%" contain></img>
          </div>
        </v-col>
        <v-col :cols="12" :md="imageSrc ? 9 : 12" sm='6'>
          <h3 class="primary_ฺblue mb-2">{{ title }}</h3>
          <p v-if='props.description'>{{ description }}</p>
          <div class="d-flex align-center justify-space-between mt-2">
            <div>
              <v-avatar>
                <v-img :src="avatarSrc" alt="avatar"></v-img>
              </v-avatar>
              <span class="ms-2 primary_ฺblue">{{ author }}</span>
            </div>
            <v-chip size="x-small" type="button" variant="outlined" v-if="approved" color="success">
              {{ approved }}
            </v-chip>
          </div>
          <div class="d-flex align-center justify-space-between">
            <div class="d-flex align-center justify-space-start mt-4 mb-3">
              <v-chip size="x-small" type="button" :class="chipClass">
                {{ chipText }}
              </v-chip>
              <div class="d-flex align-center ga-2 box-Action">
                <div class="d-flex align-center">
                  <v-img alt="calendar" src="../assets/icon/calendar.png" width="16" max-height="16"></v-img>
                  <span class="ms-1">{{ date }}</span>
                </div>
                <div class="d-flex align-center">
                  <v-img alt="eye" src="../assets/icon/eye.png" width="16" max-height="16"></v-img>
                  <span class="ms-1">{{ views }}</span>
                </div>
                <div class="d-flex align-center">
                  <v-img alt="like" src="../assets/icon/messages-3.png" width="16" max-height="16"></v-img>
                  <span class="ms-1">{{ comments }}</span>
                </div>
              </div>
            </div>
            <a class="ms-2" v-if="archive" @click="toggleArchiveImg">
              <v-img :src="archiveImg" alt="archive add" width="32" max-height="32"></v-img>
            </a>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<style scoped lang="scss">


p {
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}


.box-card {
  .imageSrc {
    height: 100%;
    display: flex;
    align-items: center;

    img {
      border-radius: 12px;
      min-height: 100px;
    }
  }

  span {
    font-size: 12px;
  }

  .v-card--variant-elevated {
    padding: 15px;
    // border-radius: 22px;
  }

  .v-avatar {
    width: 16px;
    height: 16px;
  }

  .box-Action {
    margin-left: 10px;
  }
}
</style>
