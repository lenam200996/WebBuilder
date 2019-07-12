import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import divDragResize from '@minogin/vue-drag-resize-rotate'
import TextBox from './components/basic-components/Text'
import Image from './components/basic-components/Image'
import Button from './components/basic-components/Button'
import LineHorizontal from './components/basic-components/LineHorizontal'
import LineVertical from './components/basic-components/LineVertical'
import Box from './components/basic-components/Box'
import Field from './components/basic-components/Field'
import Video from './components/basic-components/Video'
import tinymce from 'vue-tinymce-editor'
import Section from './components/basic-components/Section'
import SlideShow from './components/basic-components/SlideShow'
import SectionFooter from './components/basic-components/SectionFooter';
import Column from './components/basic-components/Column'
import ToolAdd from './components/main-option-components/ToolAddElement'
import AddElement from './components/main-option-components/AddElement'
import ButtonOptionElement from './components/element-option-components/ButtonOption'
import OptionElement from './components/element-option-components/OptionElement'
import OptionElementItem from './components/element-option-components/OptionElementItem'
import ColumnItem from './components/element-option-components/ColumnItem'
import TopMenu from './components/main-option-components/TopMenu'
import SectionRender from './components/render-components/Section'
import ColumnRender from './components/render-components/Column'
import TextRender from './components/render-components/Text'
import ImageRender from './components/render-components/Image'
import ButtonRender from './components/render-components/Button'
import LineHorizontalRender from './components/render-components/LineHorizontal'
import LineVerticalRender from './components/render-components/LineVertical'
import GridItem from './components/element-option-components/GridItem'
import VueTabs from 'vue-nav-tabs/dist/vue-tabs.js'
import 'vue-nav-tabs/themes/vue-tabs.css'
import EasySlider from 'vue-easy-slider'
import { Slider, SliderItem } from 'vue-easy-slider'
Vue.use(VueTabs)
Vue.use(EasySlider)

Vue.component('slide',Slider)
Vue.component('slideItem',SliderItem)
Vue.component('tinymceText',tinymce)
Vue.component('dragResize',divDragResize)
Vue.component('sectionBasic',Section)
Vue.component('sectionFooter',SectionFooter)
Vue.component('columnBasic',Column)
Vue.component('textBox',TextBox)
Vue.component('boxComponent',Box)
Vue.component('slideShow',SlideShow)
Vue.component('imageComponent',Image)
Vue.component('lineHorizontal',LineHorizontal)
Vue.component('lineVertical',LineVertical)
Vue.component('toolAdd',ToolAdd)
Vue.component('addElement',AddElement)
Vue.component('btnOption',ButtonOptionElement)
Vue.component('divOption',OptionElement)
Vue.component('divOptionItem',OptionElementItem)
Vue.component('itemColumn',ColumnItem)
Vue.component('buttonComponent',Button)
Vue.component('fieldComponent',Field)
Vue.component('topMenu',TopMenu)
Vue.component('sectionRender',SectionRender)
Vue.component('columnRender',ColumnRender)
Vue.component('textRender',TextRender)
Vue.component('imageRender',ImageRender)
Vue.component('buttonRender',ButtonRender)
Vue.component('lineHorizontalRender',LineHorizontalRender)
Vue.component('lineVerticalRender',LineVerticalRender)
Vue.component('gridItem',GridItem)
Vue.component('videoComponent',Video)

Vue.config.productionTip = false;
export const bus = new Vue();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
