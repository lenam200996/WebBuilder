import Vue from "vue";
import Vuex from "vuex";
import Element from './ElementClass'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectId : false,
    indexItem : 1,
    Selectedcolumn : null,
    elements : {
      item :
      [
        
      ]
    }
  },
  mutations: {
   
    setSelectColumn:function(state,index){
      state.Selectedcolumn = index
    },
    setValueText:function(state, {id,val}){
      state.elements.item = state.elements.item.filter(item => {
        if(item.id == id){
          item.value = val
        }
        return item
      })
    },
    setSelectId :function(state,id){
      state.selectId = id
    },
    addItem:function(state,item){
      state.elements.item.push(item)
      state.indexItem++
    },
    addSection:function(state){
      var ObjectSection = new Element.Section();
      var item = {
        id : state.indexItem,
        type : 'section',
        style: ObjectSection.getStyle(),
        parentId : -1,
        layout: [
          {
              index: 1,
              size : 6
          },
          {
              index : 2,
              size : 6
          }
        ]
      }
      state.selectId = state.indexItem
      state.Selectedcolumn = 1
      this.commit('addItem',item)
    },
    addElement:function(state,{type}){
      var ObjectText = new Element.TextParagraph()
      var item = {
        id : state.indexItem,
        type : 'text',
        style : ObjectText.style,
        parentId : state.selectId != null ? state.selectId : null,
        column : state.Selectedcolumn,
        position :ObjectText.position,
        value : ObjectText.value
      }
      this.commit('addItem',item)
    },
    deleteItemById:function(state,id){
      state.elements.item = state.elements.item.filter(item => item.id != id)
    },
    preColumn:function(state,id){
      state.elements.item = state.elements.item.filter(item =>{
        if(item.id == id){
          if(item.column > 1){
            item.column = item.column - 1
          }
        }
        return item
      })
    },
    nextColumn:function(state,id){
      state.elements.item = state.elements.item.filter(item =>{
        if(item.id == id){
          var parent = state.elements.item.find(itemP => itemP.id == item.parentId)
          if(item.column < parent.layout.length){
            item.column = item.column + 1
          }
        }
        return item
      })
    },

    deleteSection:function(state,id){
      state.elements.item  = state.elements.item.filter(item => {
        if(item.id != id && item.parentId != id){
          return item
        }
      })
      state.selectId = null
    },

    deleteColumn:function(state ,{index, id}){
      state.elements.item = state.elements.item.filter(item => {
        if(item.parentId != id || item.column != index){
          return item
        }
      })
      if(state.elements.item.find(item => item.id == id).layout.length == 1){
        this.commit('deleteSection',id)
        return
      }
      state.elements.item = state.elements.item.filter(item => {
        if(item.id == id ){
          if(item.layout.length > 1){
            var sizeOld = 0;
            item.layout = item.layout.filter(itemLayout => {
              if(itemLayout.index == index){
                sizeOld = itemLayout.size 
              }else{
                return item
              }
            })
            if(index > 1){
              item.layout = item.layout.filter(itemLayout => {
                if(itemLayout.index == 1){
                  itemLayout.size = itemLayout.size + sizeOld
                }
                return item
              })
            }else{
              item.layout = item.layout.filter(itemLayout => {
                if(itemLayout.index == (index+1)){
                  itemLayout.size = itemLayout.size + sizeOld
                }
                return item
              })
            }
            
          }
        } return item
      })

      state.elements.item = state.elements.item.filter(item => {
        var index = 1
        if(item.id == id){
            item.layout = item.layout.filter(itemLayout =>{
            itemLayout.index = index
            index++
            return itemLayout
          })
        }
        return item
      })
    }
  },
  getters:{
    getSelectID:function(state){
      return state.selectId
    },
    getElementItems:function(state){
      return state.elements.item
    },
    getElementItemById: (state) =>(id)=>{
      return state.elements.item.find(item => item.id == id)
    }
  },
  actions: {}
});
