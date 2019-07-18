import Vue from "vue";
import Vuex from "vuex";
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    window : {
      height : window.innerHeight,
      width : window.innerWidth
    },
    selectId : false,
    selectSlideId : null,
    indexItem : 1,
    indexSection: 1,
    Selectedcolumn : null,
    SelectedRow : null,
    SelectedElement: null,
    elements : {
      item :[]
    }
  },  
  mutations,
  getters,
  actions
});
