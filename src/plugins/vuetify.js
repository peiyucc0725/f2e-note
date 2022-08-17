// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
const lightTheme = {
  dark: false,
  colors: {
    primary: '#2F419B',
    drawerText: '#ffffff',
    text: '#555555',
    pageDrawerBg: '#F4F6F7',
    pageDrawerBorder: '#E6E6E6',
    background: '#FFFFFF'
  }
}
const darkTheme = {
  dark: true,
  colors: {
    primary: '#26252A',
    drawerText: '#ffffff',
    text: '#A3A3A3',
    pageDrawerBg: '#343338',
    pageDrawerBorder: '#666666',
    background: '#26252A'
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
      darkTheme
    }
  }
})
