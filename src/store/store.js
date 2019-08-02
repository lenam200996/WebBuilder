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
      menu:{
        item : [
            {
              name : 'home',  
              title:'Trang chủ',
              display:true    
            },
            {
              name : 'about',   
              title:'Giới thiệu',
              display:true    
            },
            {
              name : 'shop',     
              title:'Shop',
              display:true
            },
            {
              name : 'member',   
              title:'Thành Viên',
              display:true      
            },
            {
              name : 'contact',  
              title:'Liên hệ',
              display:true      
            },
          ],
        color: "#374355",
        colorActive : "#eb6641",
        fill : "#ffffff"
      }
      ,
      logo: {
        data:{
          dataUrl:'',
          lastModified:'',
          lastModifiedDate:'',
          name:'',
          type:'',
        },
        display: true
          
      },
      footer:{
        text :'&copy; Copyright',
        background : '#000000',
        color: '#ffffff',
        fontSize : 14,
        textAlign : 'center',
        padding: 0,
        height: 40
      }
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
