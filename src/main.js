import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'  // นำเข้า Vuetify
import 'vuetify/styles'  // นำเข้าสตไตล์หลักของ Vuetify
import * as components from 'vuetify/components'  // นำเข้าคอมโพเนนต์ทั้งหมด
import * as directives from 'vuetify/directives'  // นำเข้า directives ของ Vuetify

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(router)  // ใช้ router ในแอป
app.use(vuetify) // ใช้ Vuetify ในแอป
app.mount('#app')
