<script setup>
import archive from '../assets/icon/archive-add.png';
import archiveAdd from '../assets/icon/archive-add1.png';

const props = defineProps({
  name: {
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
  likes: {
    type: Number,
    required: true
  },
  saves: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  chip: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  },
  avatarSrc: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

const chipClass = computed(() => {
  return props.chip === 'ภารกิจสนับสนุน' ? 'bg_primary_ฺamber text-white' : 'bg_primary_ฺblue text-white';
});

const archiveImg = ref(archive);

const toggleArchiveImg = () => {
  archiveImg.value = archiveImg.value === archive
    ? archiveAdd
    : archive;
};
</script>

<template>
  <router-link :to="props.link" class="text-decoration-none">
    <v-card class="mx-auto" max-width="344">
      <v-img :src="imageSrc" height="200px" cover class="zoom-on"></v-img>
        <v-expand-transition>
            <div class="content">
                <div class="d-flex align-center">
                    <v-avatar>
                        <v-img :src="avatarSrc" alt="avatar"></v-img>
                    </v-avatar>
                    <span class="ms-2 primary_ฺblue">{{ name }}</span>
                </div>
                <div class="d-flex align-center justify-space-between mt-3 mb-3">
                    <v-chip size="x-small" :class="chipClass"  type="button">
                        {{chip}}
                    </v-chip>
                    <div class="d-flex align-center ga-2">
                        <div class="d-flex align-center">
                            <v-img alt="calendar" src="../assets/icon/calendar.png" width="16" max-height="16"></v-img>
                            <span class="ms-1">{{ date }}</span>
                        </div>

                        <div class="d-flex align-center">
                            <v-img alt="eye" src="../assets/icon/eye.png" width="16" max-height="16"></v-img>
                            <span class="ms-1">{{ views }}</span>
                        </div>

                        <div class="d-flex align-center">
                            <v-img alt="like" src="../assets/icon/like.png" width="16" max-height="16"></v-img>
                            <span class="ms-1">{{ likes }}</span>
                        </div>

                        <div class="d-flex align-center">
                            <v-img alt="saved" src="../assets/icon/book-saved.png" width="16" max-height="16"></v-img>
                            <span class="ms-1">{{ saves }}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 class="primary_ฺblue">{{ title }}</h4>
                    <p>{{ description }}</p>
                </div>
                <div class="d-flex align-center justify-end mt-3">
                    <div>
                        <v-img alt="add item" src="../assets/icon/additem.png" width="32" max-height="32"></v-img>
                    </div>
                    <a class="ms-2" @click="toggleArchiveImg">
                      <v-img :src="archiveImg" alt="archive add" width="32" max-height="32"></v-img>
                    </a>
                </div>
            </div>
        </v-expand-transition>
    </v-card>
  </router-link>
</template>

<style lang="scss" scoped>
p {
    overflow: hidden;
    height: 44px;
}
span {
    font-size: 12px;
}

.v-card--variant-elevated {
    border-radius: 8px;
}
.content {
    padding: 15px;

    .v-avatar {
        width: 16px;
        height: 16px;
    }
}

::v-deep .zoom-on {
    object-fit: cover;
    transition: transform 0.5s ease;

}

::v-deep .zoom-on:hover {
    transform: scale(1.1);

}

</style>
