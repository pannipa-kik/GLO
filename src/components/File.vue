<template>
  <v-container>
    <v-table>
      <thead>
        <tr>
          <th class="text-center">ลำดับ</th>
          <th class="text-center">รายการ</th>
          <th class="text-center">ประเภท</th>
          <th class="text-center">ดาวน์โหลด</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData.slice(0, 5)" :key="index">
          <td class="text-center">{{ index + 1 }}</td>
          <td>
            {{ item.title }} <br />
            <span class="item-subtitle">{{ item.subtitle }}</span>
          </td>
          <td  class="text-center">
            <img :src="item.fileTypeIcon" width="24" height="27" />
          </td>
          <td  class="text-center">
            <button class="download-button">ดาวน์โหลด</button>
          </td>
        </tr>
      </tbody>
    </v-table>
    <div class="show-more">
      <span>ดูเพิ่มเติม</span> <v-icon>mdi-chevron-down</v-icon>
    </div>
  </v-container>
</template>

<script setup>
import IconPdf from '../assets/icon/PDF.png';
import { ref } from 'vue';

const tableData = ref([
  { title: 'ขอเชิญชวนทุกท่าน มาร่วมให้สิ่งแวดล้อมที่ดี...เพื่อเราทุกคนกับกิจกรรม', subtitle: '“GLO Give Green”', fileTypeIcon: IconPdf },
  { title: 'ขอเชิญชวนทุกท่าน มาร่วมให้สิ่งแวดล้อมที่ดี...เพื่อเราทุกคนกับกิจกรรม', subtitle: '“GLO Give Green”', fileTypeIcon: IconPdf },
  { title: 'ขอเชิญชวนทุกท่าน มาร่วมให้สิ่งแวดล้อมที่ดี...เพื่อเราทุกคนกับกิจกรรม', subtitle: '“GLO Give Green”', fileTypeIcon: IconPdf },
  { title: 'ขอเชิญชวนทุกท่าน มาร่วมให้สิ่งแวดล้อมที่ดี...เพื่อเราทุกคนกับกิจกรรม', subtitle: '“GLO Give Green”', fileTypeIcon: IconPdf },
  { title: 'ขอเชิญชวนทุกท่าน มาร่วมให้สิ่งแวดล้อมที่ดี...เพื่อเราทุกคนกับกิจกรรม', subtitle: '“GLO Give Green”', fileTypeIcon: IconPdf },
]);
</script>

<style scoped>

.v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td,
.v-table .v-table__wrapper > table > thead > tr > th {
  border-bottom:0;
}
v-container {
  max-width: 900px;
  margin: 0 auto;
}

v-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 16px;
}

thead th {
  background-color: transparent;
  padding: 12px;
  color: #00237a;
  text-align: center;

}

tbody td {
  padding: 12px;

}

.item-subtitle {
  font-size: 14px;
}

.download-button {
  background-color: #0033A1;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 14px;
}

.download-button:hover {
  background-color: #00237a;
}

.show-more {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #0033A1;
  margin-top: 20px;
  font-size: 16px;
}
</style>
