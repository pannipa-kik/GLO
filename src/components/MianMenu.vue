<script setup>
import { ref } from 'vue';

const drawer = ref(false);
const activeMainMenu = ref(null);
const activeSubMenu = ref(null);
const openMenus = ref([]);

const subMenus = ref({
  'ข่าวสาร': [
    {
      title: 'ข่าวประชาสัมพันธ์',
      link: '/news/sub-menu1',
    },
    { title: 'ปฎิทินกิจกรรม', link: '/news/sub-menu2' },
  ],
  'คลังความรู้': [
    { title: 'ภารกิจหลัก', link: '/knowledgeCenter/mainMission' },
    { title: 'ภารกิจสนับสนุน', link: '/knowledge/sub-menu1' },
  ],
  'การจัดการนวัตกรรม': [
    {
      title: 'บริหารโอกาศแห่งนวัตกรรม',
      link: '/innovation/sub-menu1',
      subMenu: [
        { title: 'ประเด็นปัญหา', link: '/Innovation_management_system' },
        { title: 'ไอเดียนวัตกรรม', link: '/innovative_ideas' }
      ]
    },
    {
      title: 'บริหารโครงการ',
      link: '/Innovation_projects',
      subMenu: [
        { title: 'นวัตกรรม', link: '/Innovation_projects' },
      ]
    }
  ],
  'ระบบการเรียนออนไลน์ (e-Learning)': [
    { title: 'เลื่อนระดับ', link: '/learning' },
    { title: 'นวัฒกรรม', link: '/elearning/sub-menu2' },
    { title: 'อื่นๆ', link: '/elearning/sub-menu3' }
  ],
  'ระบบจองคิวพิชชิ่งไอเดียออนไลน์': [
    { title: 'แบ่ง 4 หมวดหมู่', link: '/quizs' }
  ]
});

const toggleMenu = (menu) => {
  openMenus.value[menu] = !openMenus.value[menu];
  // Update active menus
  if (activeMainMenu.value === menu) {
    activeMainMenu.value = null;
  } else {
    activeMainMenu.value = menu;
  }
};

// Toggle the active main menu
const toggleMainMenu = (menu) => {
  if (activeMainMenu.value === menu) {
    activeMainMenu.value = null;
    activeSubMenu.value = null;
  } else {
    activeMainMenu.value = menu;
    activeSubMenu.value = null;
  }
};

// Toggle the active submenu
const toggleSubMenu = (menu, index) => {
  if (activeMainMenu.value === menu && activeSubMenu.value === index) {
    activeSubMenu.value = null;
  } else {
    activeMainMenu.value = menu;
    activeSubMenu.value = index;
  }
};
</script>


<template>
  <v-app-bar :elevation="2" class="ps-5 pe-5 pt-1 pb-1">
    <img src="../assets/image 332.png" width="65" height="59" contain />
    <v-spacer></v-spacer>

    <!-- Desktop Menu -->
    <div class="box-menu d-none d-md-flex">
      <!-- หน้าหลัก Menu -->
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <router-link to="/" class="text-decoration-none">
            <v-btn text v-bind="attrs" v-on="on">
              <h4>หน้าหลัก</h4>
            </v-btn>
          </router-link>
        </template>
      </v-menu>

      <!-- เกี่ยวกับเรา Menu -->
      <v-menu>

        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <h4>เกี่ยวกับเรา</h4>
          </v-btn>
        </template>
      </v-menu>

      <!-- ข่าวสาร Menu -->
      <v-btn @click="toggleMainMenu('ข่าวสาร')" :class="{ 'active-menu': activeMainMenu === 'ข่าวสาร' }">
        <h4 :style="{ color: activeMainMenu === 'ข่าวสาร' ? '#0033A1' : 'black' }">ข่าวสาร</h4>
        <img src="../assets/icon/arrow-down.png" width="16" height="16" contain class="ms-1" />
        <v-menu activator="parent" offset-y :close-on-content-click="false">
          <v-list>
            <v-list-item v-for="(item, index) in subMenus['ข่าวสาร']" :key="index">
              <div @click.stop="toggleSubMenu('ข่าวสาร', index)" class="d-flex align-items-center">
                <router-link :to="item.link" class="text-decoration-none">
                  <v-list-item-title>
                    {{ item.title }}
                  </v-list-item-title>
                </router-link>
              </div>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>

      <!-- คลังความรู้ Menu -->
      <v-btn @click="toggleMainMenu('คลังความรู้')" :class="{ 'active-menu': activeMainMenu === 'คลังความรู้' }">
        <h4 :style="{ color: activeMainMenu === 'คลังความรู้' ? '#0033A1' : 'black' }">คลังความรู้</h4>
        <img src="../assets/icon/arrow-down.png" width="16" height="16" contain class="ms-1" />
        <v-menu activator="parent" offset-y :close-on-content-click="false">
          <v-list>
            <v-list-item v-for="(item, index) in subMenus['คลังความรู้']" :key="index">
              <div @click.stop="toggleSubMenu('คลังความรู้', index)" class="d-flex align-items-center">
                <router-link :to="item.link" class="text-decoration-none">
                  <v-list-item-title>
                    {{ item.title }}
                  </v-list-item-title>
                </router-link>
              </div>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
      <!-- การจัดการนวัตกรรม Menu -->
      <v-btn @click="toggleMainMenu('การจัดการนวัตกรรม')"
        :class="{ 'active-menu': activeMainMenu === 'การจัดการนวัตกรรม' }">
        <h4 :style="{ color: activeMainMenu === 'การจัดการนวัตกรรม' ? '#0033A1' : 'black' }">การจัดการนวัตกรรม</h4>
        <img src="../assets/icon/arrow-down.png" width="16" height="16" contain class="ms-1" />
        <v-menu activator="parent" offset-y :close-on-content-click="false">
          <v-list>
            <v-list-item v-for="(item, index) in subMenus['การจัดการนวัตกรรม']" :key="index">
              <div @click.stop="toggleSubMenu('การจัดการนวัตกรรม', index)" class="d-flex align-items-center">
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
                <v-icon>
                  {{ activeMainMenu === 'การจัดการนวัตกรรม' && activeSubMenu === index ? 'mdi-chevron-up' :
                    'mdi-chevron-down'
                  }}
                </v-icon>
              </div>

              <v-expand-transition class="sub">
                <div v-show="activeMainMenu === 'การจัดการนวัตกรรม' && activeSubMenu === index"
                  :key="`sublist-${index}`">
                  <v-list class="ml-4">
                    <v-list-item v-for="(subItem, subIndex) in item.subMenu" :key="subIndex">
                      <router-link :to="subItem.link" class="text-decoration-none">
                        <v-list-item-title>{{ subItem.title }}</v-list-item-title>
                      </router-link>
                    </v-list-item>
                  </v-list>
                </div>
              </v-expand-transition>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>

      <!-- ระบบการเรียนออนไลน์ (e-Learning) Menu -->
      <v-btn @click="toggleMainMenu('ระบบการเรียนออนไลน์ (e-Learning)')"
        :class="{ 'active-menu': activeMainMenu === 'ระบบการเรียนออนไลน์ (e-Learning)' }">
        <h4 :style="{ color: activeMainMenu === 'ระบบการเรียนออนไลน์ (e-Learning)' ? '#0033A1' : 'black' }">
          ระบบการเรียนออนไลน์ (e-Learning)</h4>
        <img src="../assets/icon/arrow-down.png" width="16" height="16" contain class="ms-1" />
        <v-menu activator="parent" offset-y :close-on-content-click="false">
          <v-list>
            <v-list-item v-for="(item, index) in subMenus['ระบบการเรียนออนไลน์ (e-Learning)']" :key="index">
              <div @click.stop="toggleSubMenu('ระบบการเรียนออนไลน์ (e-Learning)', index)"
                class="d-flex align-items-center">
                <router-link :to="item.link" class="text-decoration-none">
                  <v-list-item-title>
                    {{ item.title }}
                  </v-list-item-title>
                </router-link>
              </div>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>

      <!-- ระบบจองคิวพิชชิ่งไอเดียออนไลน์ Menu -->
      <v-btn @click="toggleMainMenu('ระบบจองคิวพิชชิ่งไอเดียออนไลน์')"
        :class="{ 'active-menu': activeMainMenu === 'ระบบจองคิวพิชชิ่งไอเดียออนไลน์' }">
        <h4 :style="{ color: activeMainMenu === 'ระบบจองคิวพิชชิ่งไอเดียออนไลน์' ? '#0033A1' : 'black' }">
          ระบบจองคิวพิชชิ่งไอเดียออนไลน์</h4>
        <img src="../assets/icon/arrow-down.png" width="16" height="16" contain class="ms-1" />
        <v-menu activator="parent" offset-y :close-on-content-click="false">
          <v-list>
            <v-list-item v-for="(item, index) in subMenus['ระบบจองคิวพิชชิ่งไอเดียออนไลน์']" :key="index">
              <div @click.stop="toggleSubMenu('ระบบจองคิวพิชชิ่งไอเดียออนไลน์', index)"
                class="d-flex align-items-center">
                <router-link :to="item.link" class="text-decoration-none">

                  <v-list-item-title
                    :style="{ color: activeMainMenu === 'ระบบจองคิวพิชชิ่งไอเดียออนไลน์' && activeSubMenu === index ? '#0033A1' : '' }">
                    {{ item.title }}
                  </v-list-item-title>
                </router-link>
              </div>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>

      <!-- ติดต่อหน่วยงาน Button -->
      <v-btn class="primary_blue">
        <h4>ติดต่อหน่วยงาน</h4>
      </v-btn>
    </div>

  <div class="d-flex align-center">
    <router-link to="/login">
      <v-btn class="bg_primary_blue text-white">
        <img src="../assets/icon/arrow-right2.png" width="24" max-height="24" contain />
        เข้าสู่ระบบ/ลงทะเบียน
      </v-btn>
    </router-link>
    <v-app-bar-nav-icon class="d-md-none">
      <v-icon  @click="drawer = !drawer">mdi-menu</v-icon>
    </v-app-bar-nav-icon>
  </div>


</v-app-bar>
<div class="menu-item">
  <v-navigation-drawer v-model="drawer" class="d-md-none custom-drawer" temporary right>
  <v-list>
    <div v-for="(menu, index) in Object.keys(subMenus)" :key="index">
      <v-list-item @click="toggleMenu(menu)" :class="{ 'active-menu': activeMainMenu === menu }">
        <div class="d-flex justify-space-between">
          <v-list-item-content>
            <v-list-item-title>{{ menu }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>
              {{ openMenus[menu] ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
            </v-icon>
          </v-list-item-icon>
        </div>
      </v-list-item>

      <v-expand-transition>
        <div v-if="openMenus[menu]">
          <v-list>
            <div v-for="(item, subIndex) in subMenus[menu]" :key="subIndex">
              <div v-if="item.subMenu">
                <v-list-item @click="toggleMenu(item.title)" class="ml-4" :class="{ 'active-menu': activeSubMenu === item.title }">
                  <div class="d-flex justify-space-between">
                    <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-icon>
                      <v-icon>
                        {{ openMenus[item.title] ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                      </v-icon>
                    </v-list-item-icon>
                  </div>
                </v-list-item>

                <v-expand-transition>
                  <div v-if="openMenus[item.title]">
                    <v-list>
                      <v-list-item v-for="(subItem, nestedIndex) in item.subMenu" :key="nestedIndex" class="ml-6">
                        <router-link :to="subItem.link" class="text-decoration-none">
                          <v-list-item-title>{{ subItem.title }}</v-list-item-title>
                        </router-link>
                      </v-list-item>
                    </v-list>
                  </div>
                </v-expand-transition>
              </div>
              <div v-else>
                <v-list-item class="ml-4">
                  <router-link :to="item.link" class="text-decoration-none">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </router-link>
                </v-list-item>
              </div>
            </div>
          </v-list>
        </div>
      </v-expand-transition>
    </div>
    <!-- Additional menu items -->
    <v-list-item>
      <v-list-item-content>
        <router-link to="/contact" class="text-decoration-none">
          <v-list-item-title><p class="primary_ฺblue">ติดต่อหน่วยงาน</p></v-list-item-title>
        </router-link>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</v-navigation-drawer>

</div>



</template>

<style scoped lang="scss">
/* Ensure overlays are transparent */
::v-deep .v-btn[aria-haspopup=menu][aria-expanded=true]>.v-btn__overlay {
  opacity: 0 !important;
}

::v-deep .v-btn:hover>.v-btn__overlay {
  opacity: 0 !important;
}

/* Submenu Styles */
.sub {
  .v-list {
    border: 0;
    padding: 0;
    margin: 0;
  }

  .v-list-item--density-default {
    padding: 0;
    margin: 0;
  }
}

/* App Bar Styles */
.v-app-bar {
  max-width: 100%;
  overflow-x: hidden;
}

/* Box Menu Styles */
.box-menu {
  ::v-deep .v-btn {
    background-color: transparent !important;
    color: black;

    &:hover {
      background-color: transparent !important;
      color: #0033A1;
    }

    &.active-menu {
      background-color: transparent !important;
      color: #0033A1 !important;
    }

    &:focus {
      background-color: transparent !important;
    }
  }
}


.v-list-item {
  a {
    color: #000;
  }
}


::v-deep .v-list {
  border-radius: 0 0 12px 12px !important;
  border: 1px solid #ddd;
  margin-top: 10px;
}

::v-deep .v-list-item--density-default {
  margin-inline: 16px !important;
  border-radius: 8px !important;
}

/* Padding Utilities */
.ps-5 {
  padding-left: 5rem;
}

.pe-5 {
  padding-right: 5rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.ml-4 {
  margin-left: 1.5rem;
}

/* Toolbar Positioning */
.v-toolbar {
  position: fixed !important; // Default to fixed
}

/* Display Utilities */
.d-none {
  display: none !important;
}

.d-md-flex {
  display: flex !important;
}

.d-md-none {
  display: none !important;
}


.active-menu h4 {
  color: #0033A1 !important;

}

h4 {
  transition: color 0.3s ease;
}


.v-navigation-drawer {
  position: fixed !important;
  overflow: hidden !important;
  height: 100vh;

      &.active-menu {
      background-color: transparent !important;
      color: #0033A1 !important;
    }

  .v-list-item-content {
    width: 280px; /* Adjust the width as needed */

  }

  .v-list-group__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .v-list-item-title {
    word-wrap: break-word;
    word-break: break-all;
    white-space: normal;
  }

  .v-btn {
    white-space: normal !important;
    text-align: left;
  }

  .v-expand-transition {
  transition: height 0.3s ease;
}
}

.primary_blue {
  background-color: #0033A1 !important;
}

.bg_primary_blue {
  background-color: #0033A1 !important;
}

/* Responsive Styles */
@media (max-width: 960px) {
  .d-md-none {
    display: block !important;
    // width: 250px !important;
  }

  .v-navigation-drawer__content {
    overflow-y: auto ;
  }


  .d-md-flex {
    display: none !important;
  }

  .v-toolbar {
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }

  .v-list {
    height: 100%;
  }

  .v-list-item--density-default {
    margin: 0;
  }

  .v-navigation-drawer {
    width: 100%;
    max-width: 100%;
  }

}

@media (max-width: 1600px) {
  .d-md-none {
    display: block !important;
    // width: 400px !important;
  }
  .v-navigation-drawer__content {
    overflow-y: hidden;
  }

  .custom-drawer.v-navigation-drawer--active {
    width: 350px !important;
  }

  .d-md-flex {
    display: none !important;
  }

  .v-toolbar {
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }

  .v-list {
    height: 100%;
    border-radius: 0 !important;
  }

  .v-list-item--density-default {
    margin: 0;
  }

  .menu-item{


    .active-menu {
      background-color: transparent !important;
      color: #0033A1 !important;

      :hover {
        color: #0033A1 !important;
      }

    }
}

}

</style>
