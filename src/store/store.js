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
    autoAlignBlockId:null,
    selectId : false,
    selectSlideId : null,
    selectItemSlideIndex: null,
    indexItem : 1,
    indexSection: 1,
    Selectedcolumn : null,
    SelectedRow : null,
    SelectedElement: null,
    elements : {
      item:[],
      menu:[
        {
          name : 'home',  
          title:'Trang chủ'      
        },
        {
          name : 'about',   
          title:'Giới thiệu'       
        },
        {
          name : 'shop',     
          title:'Shop'     
        },
        {
          name : 'member',   
          title:'Thành Viên'       
        },
        {
          name : 'contact',  
          title:'Liên hệ'        
        },
      ]
    },
    canUndo : false,
    canRedo : false,
    pageIndex: 'home',
    clipboard : null
  },  
  mutations,
  getters,
  actions
});
