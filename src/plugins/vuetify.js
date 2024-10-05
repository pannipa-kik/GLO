// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify imports
import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'
import { VTabs, VTab } from 'vuetify/components'
import '../styles/fonts.css'

// Create the Vuetify instance
const vuetify = createVuetify({
  components: {
    // Explicitly import Vuetify components if using tree-shaking
    VTabs,
    VTab,
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        primary: colors.blue.darken2, // You can customize colors here
        secondary: colors.red.lighten4,
      },

      variables: {
        fontFamily: 'Kanit, sans-serif' // หรือฟอนต์ที่คุณต้องการ
      }
    },
  },
})

export default vuetify
