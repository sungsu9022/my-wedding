import {createApp} from 'vue'
import VScrollLock from 'v-scroll-lock'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'fomantic-ui-css/semantic.min.css'
import VueDisqus from 'vue-disqus'
import VueClipboard from 'vue-clipboard2'
// import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'


new AOS.init()

const vueApp = createApp(App)

vueApp.mount('#app');
vueApp.use(VScrollLock);
vueApp.use(VueClipboard);
vueApp.use(VueDisqus);
vueApp.use(Viewer);
vueApp.config.productionTip = false;