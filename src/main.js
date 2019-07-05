import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import divDragResize from '@minogin/vue-drag-resize-rotate'
import TextBox from './components/basic-components/Text'
import tinymce from "vue-tinymce-editor";
import Section from './components/basic-components/Section'
import Column from './components/basic-components/Column'
import ToolAdd from './components/main-option-components/ToolAddElement'
import AddElement from './components/main-option-components/AddElement'
import ButtonOptionElement from './components/element-option-components/ButtonOption'
import OptionElement from './components/element-option-components/OptionElement'
import OptionElementItem from './components/element-option-components/OptionElementItem'


Vue.component('tinymceText',tinymce)
Vue.component('dragResize',divDragResize)
Vue.component('sectionBasic',Section)
Vue.component('columnBasic',Column)
Vue.component('textBox',TextBox)
Vue.component('toolAdd',ToolAdd)
Vue.component('addElement',AddElement)
Vue.component('btnOption',ButtonOptionElement)
Vue.component('divOption',OptionElement)
Vue.component('divOptionItem',OptionElementItem)

Vue.config.productionTip = false;
export const bus = new Vue();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
