import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import IconSelect from './components/IconSelect.vue'
import TextSelect from './components/TextSelect.vue'

const app = createApp(App)
  .use(router)
  .use(vuetify)
  
app.component('icon-select', IconSelect)
app.component('text-select', TextSelect)

app.mount('#app')
