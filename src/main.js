import {createApp} from 'vue'
import VScrollLock from 'v-scroll-lock'
import NewApp from './NewApp.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'semantic-ui-css/semantic.min.css';
import VueDisqus from 'vue-disqus'
import VueClipboard from 'vue-clipboard2'


new AOS.init()

const vueApp = createApp(NewApp)

vueApp.mount('#app')
vueApp.use(VScrollLock)
vueApp.use(VueClipboard)
vueApp.use(VueDisqus, { shortname: 'sungsu-parks-tech-blog'})
vueApp.config.productionTip = false