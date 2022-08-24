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
    background: '#FFFFFF',
    contentText: '#666666',
    tagBg: '#E9EBF4',
    tagText: '#2F419B',
    title: '#555555',
    cardAngle: '#E9EBF4',
    searchInputBg: '#E6E6E6',
    btnBg: '#FFFFFF',
    link: '#666666',
    listHover: '#E9EBF4'
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
    background: '#26252A',
    contentText: '#F2F2F2',
    tagBg: '#343338',
    tagText: '#FED32C',
    title: '#FFFFFF',
    cardAngle: '#FED32C',
    searchInputBg: '#26252A',
    btnBg: '#FED32C',
    listHover: '#26252A'
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
