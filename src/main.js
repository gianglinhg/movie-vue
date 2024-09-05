import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from './utils/axios';
import VueClickAway from "vue3-click-away";
// app.config.globalProperties.$axios = axios;
window.axios = axios;

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, far)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia())
app.use(VueClickAway)
app.use(router)

app.mount('#app')
