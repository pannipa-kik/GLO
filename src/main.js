// main.js

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import 'vuetify/styles' // นำเข้าสไตล์ของ Vuetify
import { createApp } from 'vue'
import { createVuetify } from 'vuetify' // นำเข้า createVuetify
import 'swiper/swiper-bundle.css';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import vuetify from './plugins/vuetify'

const app = createApp(App)

app.use(vuetify)
app.use(VCalendar, {})
registerPlugins(app)
app.mount('#app')
