import { createApp } from 'vue'
import VScrollLock from 'v-scroll-lock'
import App from './App.vue'
import Divider from './components/Divider.vue'
import Button from './components/Button.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueClipboard from 'vue-clipboard2'

new AOS.init()

const vueApp = createApp(App)

vueApp.mount('#app')
vueApp.use(VScrollLock)
vueApp.use(VueClipboard)
vueApp.use(Divider)
vueApp.use(Button)
vueApp.config.productionTip = false