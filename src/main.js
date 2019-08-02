import Vue from "vue";
import App from "./components/App.vue";
import router from "./router";
import store from "./store/store";
import divDragResize from '@minogin/vue-drag-resize-rotate'
import tinymce from 'vue-tinymce-editor'
import VueTabs from 'vue-nav-tabs/dist/vue-tabs.js'
import VueI18n from 'vue-i18n'
import VueMaterial from 'vue-material'
import iView from 'iview';
import lang from 'iview/dist/locale/en-US';
import Slick from 'vue-slick';
import en from './lang/en.json'
import vn from './lang/vn.json'
import 'vue-nav-tabs/themes/vue-tabs.css'
import './components/basic-components/_basic_components'
import './components/element-option-components/_element_option_components'
import './components/main-option-components/_main_option_components'
import './components/render-components/_render_components'
import 'iview/dist/styles/iview.css';
import './assets/css/main.css'
import './assets/css/fonts.css'
import './assets/css/animated.css'
import 'vue-material/dist/vue-material.min.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FlagIcon from 'vue-flag-icon'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import vClickOutside from 'v-click-outside'
// require styles
import 'swiper/dist/css/swiper.css'
import ImageUploader from 'vue-image-upload-resize'
Vue.use(ImageUploader);
Vue.use(vClickOutside)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(FlagIcon);
Vue.use(VueMaterial)
Vue.use(VueI18n)
Vue.use(VueTabs)
Vue.use(iView);
iView.locale(lang)

Vue.component('tinymceText',tinymce)
Vue.component('divDragResize',divDragResize) 
Vue.component('slick',Slick) 

Vue.config.productionTip = false;
export const bus = new Vue();

const messages = {
  vn: vn,
  en: en
};

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages,
  fallbackLocale: 'en'
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
