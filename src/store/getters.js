export default {
    getStyleSelectedElement:(state)=>(val) =>{
      var style;
      state.elements.item.map(item=>{
        if(item.id == val){
          style = item.style
        }
      })
      return style
    },
    getSelectedElement:function(state){
      return state.SelectedElement
    },
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
    },
    getArrayGridElement:state=>({id,parentId,column})=>{
      var arrayGrid = []
      state.elements.item.forEach(item =>{
        if(item.id != id && item.type != 'section' && item.parentId == parentId ){
          var gridItem = {
            id : item.id,
            x_left : ((typeof item.style.left)=='string'?parseInt(item.style.left.replace('px','')):item.style.left),
            y_top : ((typeof item.style.top)=='string'?parseInt(item.style.top.replace('px','')):item.style.top ),
            x_right : ((typeof item.style.left)=='string'?parseInt(item.style.left.replace('px','')):item.style.left) +((typeof item.style.width)=='string'?parseInt(item.style.width.replace('px','')):item.style.width),
            y_bottom : ((typeof item.style.top)=='string'?parseInt(item.style.top.replace('px','')):item.style.top )+((typeof item.style.height)=='string'?parseInt(item.style.height.replace('px','')):item.style.height),
            x_center : (typeof item.style.width)=='string'?(parseInt(item.style.width.replace('px',''))/2):(item.style.width/2),
            y_center : (typeof item.style.height)=='string'?(parseInt(item.style.height.replace('px',''))/2):(item.style.height/2),
          }
          arrayGrid.push(gridItem)
        }       
      })
      return arrayGrid
    },
    getAutoAlignBlockId:state=>{
      return state.autoAlignBlockId
    },
    getPageIndex:state =>{
      return state.pageIndex
    },
    getClipboard:state=>{
      return state.clipboard
    },
    getMenu:state=>{
      return state.elements.menu
    },
    // getMenuAttribute:state=>name=>{
    //   var menuitem =  state.elements.menu.find(item => item.name == name)
    //   return {
    //     name : menuitem.name,
    //     title : menuitem.title
    //   }
    // }
  }