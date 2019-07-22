export default {
    
    getSelectID:function(state){
      return state.selectId
    },
    getSelectColumn:function(state){
      return state.Selectedcolumn
    },
    getElementItems:function(state){
      return state.elements.item
    },
    getElementItemById: (state) =>(id)=>{
      return state.elements.item.find(item => item.id == id)
    },
    // getColumnColorColumn:function(state){
    //   return state.elements.item.find(item => item.id == state.selectId).layout.find(itemLayout => itemLayout.index == state.Selectedcolumn).bg
    // },
    getNumColumn:function(state){
      var length = 0;
      var section =  state.elements.item.find(item => item.id == state.selectId)
      var layout = section.layout
      layout.map(item =>{
        if(item.row == state.SelectedRow){
          length++;
        }
      })
      return length

    },
    getNumRow:function(state){
      var section  = state.elements.item.find(item => item.id == state.selectId)
      var row = section.row
      return row.length
    },
    getNumItemSlide:state => id => {
      console.log("id ="+id) 
      var itemSlide = []
      state.elements.item.forEach(item =>{
        if(item.type == 'section' && item.idSlideshow == id)
        itemSlide.push(item)
      })
      console.log(itemSlide)
      return itemSlide.length
    },
    getNumColumnById:(state)=>(id)=>{
      return state.elements.item.find(item => item.id == id).layout.length
    },
    getWindowSize:function(state){
      return state.window
    },
    getHeightDom:function(state){
      var height = 0;
      state.elements.item.map(item =>{
        if(item.type == 'section'){
          height += item.style.height
        }
        return item
      })
      return height
    },
    getRowSelected :function(state){
      return state.SelectedRow
    },
    getColumnBgPosition:function(state){
      return state.elements.item.find(item => item.id == state.selectId).layout.find(itemLayout => itemLayout.index == state.Selectedcolumn && itemLayout.row == state.SelectedRow).bgPosition
    },
    getColumnBgSize:function(state){
      return state.elements.item.find(item => item.id == state.selectId).layout.find(itemLayout => itemLayout.index == state.Selectedcolumn && itemLayout.row == state.SelectedRow).bgSize
    },
    getCanUndo:function(state){
      return state.canUndo
    },
    getCanRedo:function(state){
      return state.canRedo
    }
  }