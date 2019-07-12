import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import divDragResize from '@minogin/vue-drag-resize-rotate'
import tinymce from 'vue-tinymce-editor'
import VueTabs from 'vue-nav-tabs/dist/vue-tabs.js'
import EasySlider from 'vue-easy-slider'
import { Slider, SliderItem } from 'vue-easy-slider'
import VueI18n from 'vue-i18n'
import 'vue-nav-tabs/themes/vue-tabs.css'
import './components/basic-components/_basic_components'
import './components/element-option-components/_element_option_components'
import './components/main-option-components/_main_option_components'
import './components/render-components/_render_components'
Vue.use(VueI18n)
Vue.use(VueTabs)
Vue.use(EasySlider)
Vue.component('slide',Slider)
Vue.component('slideItem',SliderItem)
Vue.component('tinymceText',tinymce)
Vue.component('divDragResize',divDragResize) 

Vue.config.productionTip = false;
export const bus = new Vue();

const messages = {
  vn: {
      mess : {
        name : 'Xin chao {name}'
      }
  },
  en: {
      mess : {
        name : 'hello {name}'
      }
  },
};

const i18n = new VueI18n({
  locale: 'vn', // set locale
  messages,
  fallbackLocale: 'vn'
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
