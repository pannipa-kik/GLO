<script setup>
import { ref } from 'vue';

const dialog = ref(false);

const comments = ref([
  {
    author: 'พิมพ์ใจ ดวงใจ',
    date: '25/07/2024',
    time: '12:01',
    message:
      'Lorem ipsum dolor sit amet consectetur. Duis viverra elementum sit diam. Lorem ipsum dolor sit amet consectetur. Duis viverra elementum sit diam.',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    author: 'พิมพ์ใจ ดวงใจ',
    date: '25/07/2024',
    time: '12:01',
    message:
      'Lorem ipsum dolor sit amet consectetur. Duis viverra elementum sit diam. Lorem ipsum dolor sit amet consectetur. Duis viverra elementum sit diam.',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    author: 'พิมพ์ใจ ดวงใจ',
    date: '25/07/2024',
    time: '12:01',
    message:
      'Lorem ipsum dolor sit amet consectetur. Duis viverra elementum sit diam. Lorem ipsum dolor sit amet consectetur. Duis viverra elementum sit diam.',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    author: 'พิมพ์ใจ ดวงใจ',
    date: '25/07/2024',
    time: '12:01',
    message:
      'Lorem ipsum dolor sit amet consectetur. Duis viverra elementum sit diam. Lorem ipsum dolor sit amet consectetur. Duis viverra elementum sit diam.',
    avatar: 'https://via.placeholder.com/50',
  },
]);
</script>

<template>
  <v-dialog max-width="1200">
    <template v-slot:activator="{ props: activatorProps }">
      <a v-bind="activatorProps">ความคิดเห็นอื่นๆ</a>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card  class="pa-7">
        <v-card-title class="d-flex justify-space-between pa-0 mb-3">
          แสดงความคิดเห็น
            <v-icon @click="isActive.value = false"  type="button">mdi-close</v-icon>
        </v-card-title>
        <v-row>
          <v-col cols="12" md="12" sm='12'>
            <div class="d-flex align-center mt-3 mb-3 text-black user justify-space-between">
              <div class="d-flex align-center avatar">
                <v-avatar>
                  <v-img src="../../assets/promote1.png" alt="avatar"></v-img>
                </v-avatar>
                <span class="ms-2 primary_ฺblue me-3">พิมพ์ใจ ดวงใจ</span>
              </div>
              <div class="d-flex align-center ga-2">
                <div class="d-flex align-center">
                  <a class="ms-1 me-1">ความคิดเห็นอื่นๆ</a>
                  <v-img src="../../assets/icon/messages-3.png" width="16" max-height="16"></v-img>
                  <span class="ms-1">22</span>
                </div>
              </div>
            </div>
            <Comment />
            <v-checkbox label="แสดงความคิดเห็น แบบไม่ระบุตัวตน" class="text-black"></v-checkbox>
          </v-col>
        </v-row>
        <div class="comments-container">
          <!-- Header Section -->
          <div class="comments-header">
            <a class="comments-title">ความคิดเห็นอื่นๆ</a>
            <img src="../../assets/icon/messages-3.png" width="16" height="16"></img>
            <span class="comments-count">22</span>
          </div>
          <!-- Comment Section -->
          <div class="comment-item" v-for="(comment, index) in comments" :key="index">
            <div class="comment-avatar">
              <img :src="comment.avatar" alt="User Avatar" />
            </div>
            <div class="comment-content">
              <div class="comment-header">
                <span class="comment-author">{{ comment.author }}</span>
                <span class="comment-date">
                  <v-img alt="calendar" src="../../assets/icon/calendar.png" width="16" max-height="16"></v-img>
                 <p>
                  {{ comment.date }} เวลา {{ comment.time }} น.
                 </p>
                </span>
              </div>
              <div class="comment-body">
                {{ comment.message }}
              </div>
              <div class="comment-footer">
                <v-img src="../../assets/icon/like.png" width="20" max-height="20"></v-img>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </template>
  </v-dialog>
</template>


<style scoped>

.user {
  @media (max-width: 960px) {
    padding: 10px 10px;

  }
}
.comments-container {
  width: 100%;
  margin: 20px auto;
  padding: 10px 30px;
  border-radius: 12px;
  @media (max-width: 960px) {
    padding: 10px 10px;

  }
}

.comments-header {
  padding: 10px 20px;
    font-size: 18px;
    font-weight: 600;
    color: #0033a1;
    display: flex;
    align-items: center;
    margin-left: -40px;
}

.comments-header .comments-title {
  margin-right: 10px;
  text-decoration: none;
  color: #0033a1;
  font-size: 18px;
}

.comments-header .comments-count {
  margin-left: 10px;
  font-size: 16px;
  color: #595d62;
}

.comment-item {
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #eee;
  @media (max-width: 960px) {
    padding: 20px 10px;

  }
}

.comment-item:last-child {
  border-bottom: none;
}

.comment-avatar {
  margin-right: 15px;
}

.comment-avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.comment-content {
  flex: 1;
}

.comment-header {
  display: flex;
    align-items: flex-start;
    margin-bottom: 5px;
    flex-direction: column;
}

.comment-author {
  font-weight: bold;
  margin-right: 15px;
  font-size: 16px;
}

.comment-date {
  font-size: 14px;
    color: #666;
    display: flex;
    gap: 10px;
    align-items: center;
    p{
      margin-top: 3px;
    }
}

.comment-body {
  margin: 10px 0;
  line-height: 1.5;
  color: #333;
  margin-left: -60px;
}

.comment-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #ff5e5e;
  font-size: 16px;
  cursor: pointer;
  margin-left: auto;
  width: 20px;
}

.comment-footer:hover {
  color: #e44e4e;
}
</style>
