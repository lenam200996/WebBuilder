import Element from '../api/ElementClass.js'
import Template from '../api/template.json'
import {bus} from '../main.js'
let snapshotState  = []
let snapShotStateRedo = []
export default {
  setGridLineMinMax(state,{min,max}){
    
    state.gridLine.min = min
    state.gridLine.max = max
    console.log('min:'+state.gridLine.min+' - max:'+max)
  },
  setSizeRowGrid(state,grid){
    state.elements.item = state.elements.item.filter(item =>{
      if(item.id == state.selectId ){
        item.row = item.row.filter(itemLayout =>{
            itemLayout.size = grid[itemLayout.index - 1]
          return itemLayout
        })
      }
      return item
    })
  },
  setFooterText(state,{val}){
    state.elements.footer.text = val
    console.log("set text"+val)
  },
  setFooterBackground(state,{val}){
    state.elements.footer.background = val
  },
  setFooterColor(state,{val}){
    state.elements.footer.color =val
  },
  setFooterFontSize(state,{val}){
    state.elements.footer.fontSize = val
  },
  setFooterTextAlign(state,{val}){
    state.elements.footer.textAlign = val
  },
  setFooterPadding(state,{val}){
    state.elements.footer.padding = val
  },
  setFooterHeight(state,{val}){
    state.elements.footer.height = val
  },
  
  setMenuFill(state,{val}){
    state.elements.menu.fill = val
  },
  setMenuColor(state,{val}){
    state.elements.menu.color = val
  },
  setMenuColorActive(state,{val}){
    state.elements.menu.colorActive = val
  },
  setLogoDisplay(state,{val}){
    state.elements.logo.display = val
  },
  setLogoImage(state,{uri}){
    state.elements.logo.data = uri
  },
  deleteItemMenu(state,{name}){
    this.commit('enableUndo')
    state.elements.menu.item = state.elements.menu.item.filter(item => item.name != name)
  },
  sortingMenu(state,payload){
    this.commit('enableUndo')
    var itemSort = state.elements.menu.item[payload.removedIndex]
    state.elements.menu.item.splice(payload.removedIndex,1)
    state.elements.menu.item.splice(payload.addedIndex, 0,itemSort);
  },
  addNewItemMenu:function(state){
    this.commit('enableUndo')
    state.elements.menu.item.push({
      name : 'new menu'+state.elements.menu.item.length,
      title : 'new menu',
      display: true
    })
  },
  changeDisplayMenu:function(state,{val,name}){
    state.elements.menu.item.filter(item =>{
      if(item.name == name){
        item.display = val
      }
      return item
    })
  },
  changeTitleMenu:function(state,{val,name}){
    state.elements.menu.item.filter(item =>{
      if(item.name == name){
        item.title = val
      }
      return item
    })
  },
  changeNameMenu:function(state,{val,name}){
    if(state.pageIndex == name){
      state.pageIndex = val
    }
    state.elements.item.filter(item=>{
      if(item.type == 'section' && item.pageIndex == name){
        item.pageIndex = val
      }
      return item
    })
    state.elements.menu.item.filter(item =>{
      if(item.name == name){
        item.name = val
      }
      return item
    })
  },
  saveState:function(state){
    localStorage.setItem('states',JSON.stringify(state))
   
  },
  readStateStorage:function(state){
    this.replaceState(JSON.parse(localStorage.getItem('states')))
  },
  fisrtLoad:function(state){
    state.canUndo = false
    state.canRedo = false
    // this.commit('status/fisrtLoad',null,{root:true})
    snapshotState  = []
    snapShotStateRedo = []
  },
  copyElement:function(state){
    state.clipboard = new Object()
    Object.assign(state.clipboard, state.elements.item.find(item => item.id === state.SelectedElement))
  },
  pasteElement:function(state){
    var position = {}
    var border = {}
    var style = {}
    var item = {}
    Object.assign(item,state.clipboard)
    Object.assign(position,state.clipboard.position)
    Object.assign(style,state.clipboard.style)
    Object.assign(border,state.clipboard.style.border)
    item.id = state.indexItem;
    item.parentId = state.selectId;
    item.column = state.Selectedcolumn;
    item.row = state.SelectedRow;
    item.position = position
    item.style = style
    item.style.border = border
    item.position.y = item.position.y + 20
    item.style.top = (parseFloat(item.style.top.replace('px','')) + 20 )+'px'
    item.position.x = item.position.x + 20
    item.style.left = (parseFloat(item.style.left.replace('px','')) + 20 )+'px'

    // Object.assign(item.style.border,border)
    // Object.assign(item.position,position)
    // Object.assign(item.style,style)
    this.commit('addItem',item)
    this.commit('updatePositionElement',{id: item.id,val: item.style})

  },
  duplicateElement:function(){
    this.commit('copyElement')
    this.commit('pasteElement')
  },
  setPageIndex:function(state,{val}){
    state.pageIndex = val
  },
  setSelectedElement:function(state,id){
    state.SelectedElement = id
  },
  setAutoAlignBlockId:function(state,id){
    state.autoAlignBlockId = id
  },
  undo(state){
    if(snapshotState.length > 0){
      var snapshotLast = snapshotState[snapshotState.length - 1]
      {snapShotStateRedo.push(JSON.stringify(state))}
      snapshotState.pop()
      this.replaceState(JSON.parse(snapshotLast))
    }
    
  },
  redo(state){
      if(snapShotStateRedo.length > 0){
        var snapshotLast = snapShotStateRedo[snapShotStateRedo.length - 1]
        snapshotState.push(JSON.stringify(state))
        snapShotStateRedo.pop()
        this.replaceState(JSON.parse(snapshotLast))
        if(snapShotStateRedo.length == 0) {state.canRedo = false}
      }
        
     
  },
  enableUndo:function(state){
    snapshotState.push(JSON.stringify(state))
    snapShotStateRedo = []
    state.canRedo = false
    state.canUndo = true
  },
  enableRedo:function(state){
    state.canRedo = true
  },
    swapItem:function(state,toIndex){
    this.commit('enableUndo')

      switch (toIndex) {
        case 'toLeft':
          {
            if(state.selectItemSlideIndex == 1) {return}
            state.elements.item = state.elements.item.filter(item =>{
              if(item.idSlideshow == state.selectSlideId){
                if(item.indexSlide == state.selectItemSlideIndex){
                  item.indexSlide = state.selectItemSlideIndex - 1
                  return item
                }
                if(item.indexSlide == state.selectItemSlideIndex - 1){
                  item.indexSlide = state.selectItemSlideIndex 
                  return item
                }
                return item
              }
              return item
            })

            // state.elements.item = state.elements.item.sort(function(a,b){
            //   return a.indexSlide - b.indexSlide
            // })
          }
          break;
        case 'toRight':
          {
            if(state.selectItemSlideIndex == this.getters.getNumItemSlide(state.selectSlideId)){return}
            state.elements.item = state.elements.item.filter(item =>{
              if(item.idSlideshow == state.selectSlideId){
                if(item.indexSlide == state.selectItemSlideIndex){
                  item.indexSlide = state.selectItemSlideIndex + 1
                  return item
                }
                if(item.indexSlide == state.selectItemSlideIndex + 1){
                  item.indexSlide = state.selectItemSlideIndex 
                  return item
                }
                return item
              }
              return item
            })

            // state.elements.item = state.elements.item.sort(function(a,b){
            //   return a.indexSlide - b.indexSlide
            // })
          }
          break;
        default:
          break;
      }
    },
    deleteItemSlide:function(state){
      this.commit('enableUndo')

      this.commit('deleteSection',state.selectId)
      state.elements.item = state.elements.item.filter(item => {
        if(item.id == state.selectSlideId){
          item.itemList = item.itemList.filter(itemList => itemList.index != state.selectItemSlideIndex)
        }
        return item
      })
    },
    setSelectSlideId:function(state){
      var slideshowId = state.elements.item.find(item => item.parentId == state.selectId).id
      state.selectSlideId = slideshowId
    },
    setSelectSlideItem:function(state,index){
      var itemSelected = state.elements.item.find(item => (item.type == 'section' && item.indexSlide == index && item.idSlideshow == state.selectSlideId))
      this.commit('setSelectId',itemSelected.id)
      state.selectItemSlideIndex = index
    },
    swapSection:function(state,{toIndex}){
      this.commit('enableUndo')

      switch (toIndex) {
        case 'up':
          {
            if(state.elements.item.find(item => item.id == state.selectId).indexSection == 1)
            {
              return
            }
            var indexSwap =state.elements.item.find(item => item.id == state.selectId).indexSection ;
            state.elements.item = state.elements.item.filter(item =>{
              if(item.id == state.selectId){
                item.indexSection = item.indexSection - 1
                return item
              }
              if(item.type == 'section' && item.indexSection == (indexSwap - 1)){
                item.indexSection = indexSwap
                return item
              }
              return item
            })
          }
          break;
        case 'down':
          {
            if(state.elements.item.find(item => item.id == state.selectId).indexSection == state.indexSection-1 )
            {
              return
            }
            var indexSwap =state.elements.item.find(item => item.id == state.selectId).indexSection ;
            state.elements.item = state.elements.item.filter(item =>{
              if(item.id == state.selectId){
                item.indexSection= item.indexSection + 1
                return item
              }
              if(item.type == 'section' && item.indexSection == (indexSwap + 1)){
                item.indexSection= item.indexSection - 1
                return item
              }
              return item
            })
          }
          break;
        default:
          break;
      }

      state.elements.item = state.elements.item.sort(function(a,b){
        if(typeof a.indexSection ==  'undefined' || typeof b.indexSection ==  'undefined')
        {
          return 0
        }else{
          return a.indexSection - b.indexSection
        }

      })
    },
    setSelectRow:function(state,rowIndex){
      state.SelectedRow = rowIndex
    },
    swapRow:function(state,toIndex){
      this.commit('enableUndo')

      switch (toIndex) {
        case 'toUp':
          {
              if(state.SelectedRow == 1){
                return
              } 
              
             state.elements.item = state.elements.item.filter(item =>{
               if(item.id != state.selectId && item.parentId != state.selectId) {
               } 
               if(item.parentId == state.selectId && item.row == state.SelectedRow){
                 item.row = state.SelectedRow -1
               }
               if(item.parentId == state.selectId && item.row == state.SelectedRow - 1)
               {
                 item.row = state.SelectedRow
               }
             

             if(item.id == state.selectId){

                item.layout = item.layout.filter(itemLayout =>{
                  if(itemLayout.row  == state.SelectedRow){
                    itemLayout.row = state.SelectedRow - 1
                    return itemLayout
                  }
                  if(itemLayout.row == state.SelectedRow - 1){
                    itemLayout.row = state.SelectedRow
                    return itemLayout
                  }
                  return itemLayout
                })
                item.layout = item.layout.sort(function(a,b){return a.index - b.index})
                item.row = item.row.filter(itemRow =>{
                  if(itemRow.index == state.SelectedRow){
                    itemRow.index = state.SelectedRow - 1
                    return itemRow
                  }
                  if(itemRow.index == state.SelectedRow - 1){
                    itemRow.index = state.SelectedRow
                    return itemRow
                  }
                  return itemRow
                })
                item.row = item.row.sort(function(a,b){return a.index - b.index})
             } 
             return item
             
            })
          }
          break;
          case 'toDown':
          {
            if(state.SelectedRow == this.getters.getNumRow){
                return
              } 
              
             state.elements.item = state.elements.item.filter(item =>{
               if(item.id != state.selectId && item.parentId != state.selectId) {
               } 
               if(item.parentId == state.selectId && item.row == state.SelectedRow){
                 item.row = state.SelectedRow +1
               }
               if(item.parentId == state.selectId && item.row == state.SelectedRow + 1)
               {
                 item.row = state.SelectedRow
               }
             

             if(item.id == state.selectId){

                item.layout = item.layout.filter(itemLayout =>{
                  if(itemLayout.row  == state.SelectedRow){
                    itemLayout.row = state.SelectedRow + 1
                    return itemLayout
                  }
                  if(itemLayout.row == state.SelectedRow +1){
                    itemLayout.row = state.SelectedRow
                    return itemLayout
                  }
                  return itemLayout
                })
                item.layout = item.layout.sort(function(a,b){return a.index - b.index})
                item.row = item.row.filter(itemRow =>{
                  if(itemRow.index == state.SelectedRow){
                    itemRow.index = state.SelectedRow + 1
                    return itemRow
                  }
                  if(itemRow.index == state.SelectedRow + 1){
                    itemRow.index = state.SelectedRow
                    return itemRow
                  }
                  return itemRow
                })
                item.row = item.row.sort(function(a,b){return a.index - b.index})
             } 
             return item
             
            })
          }
          break;
        default:
          break;
      }
    },
    swapColumn:function(state,toIndex){
      this.commit('enableUndo')

      switch (toIndex) {
        case 'toLeft':
          {
            if(state.Selectedcolumn == 1)
            {
              return
            }
            state.elements.item = state.elements.item.filter(item =>{
              if(item.parentId == state.selectId && item.row == state.SelectedRow) {
                if(item.column == state.Selectedcolumn ){
                  item.column = state.Selectedcolumn - 1
                  return item
                }
                if(item.column == state.Selectedcolumn - 1){
                  item.column = state.Selectedcolumn
                  return item
                }
                return item
              }
              if(item.id == state.selectId){
                item.layout = item.layout.filter(itemLayout =>{
                  if(itemLayout.index == state.Selectedcolumn  && itemLayout.row == state.SelectedRow){
                    itemLayout.index = state.Selectedcolumn-1
                    return itemLayout
                  }
                  if(itemLayout.index == state.Selectedcolumn -1  && itemLayout.row == state.SelectedRow){
                    itemLayout.index = state.Selectedcolumn
                    return itemLayout
                  }
                  return itemLayout
                })
                item.layout = item.layout.sort(function(a,b){return a.index - b.index})
                return item
              }
              return item
            })
            
          }
          break;
        case 'toRight':
        {
          if(state.Selectedcolumn == state.elements.item.find(item => item.id == state.selectId).layout.filter(itemLayout => itemLayout.row == state.SelectedRow).length){
              return
          }
          state.elements.item = state.elements.item.filter(item =>{
            if(item.parentId == state.selectId && item.row == state.SelectedRow) {
              if(item.column == state.Selectedcolumn){
                item.column = state.Selectedcolumn + 1
                return item
              }
              if(item.column == state.Selectedcolumn + 1){
                item.column = state.Selectedcolumn
                return item
              }
              return item
            }
            if(item.id == state.selectId){
              item.layout = item.layout.filter(itemLayout =>{
                if(itemLayout.index == state.Selectedcolumn && itemLayout.row == state.SelectedRow){
                  itemLayout.index = state.Selectedcolumn+1
                  return itemLayout
                }
                if(itemLayout.index == state.Selectedcolumn +1 && itemLayout.row == state.SelectedRow){
                  itemLayout.index = state.Selectedcolumn
                  return itemLayout
                }
                return itemLayout
              })
              item.layout = item.layout.sort(function(a,b){return a.index - b.index})
              return item
            }
            return item
          })
        }    
          break;
        default:
          break;
      }
    },
    setSizeColumnGrid:function(state,grid){
      state.elements.item = state.elements.item.filter(item =>{
        if(item.id == state.selectId ){
          item.layout = item.layout.filter(itemLayout =>{
            if(itemLayout.row == state.SelectedRow){
              itemLayout.size = grid[itemLayout.index - 1]
            }
            return itemLayout
          })
        }
        return item
      })
    },
    addTemplate:function(state,payload){

      var ObjectSectionTemplate = new Element.Section()
      var ObjectTextTemplate = new Element.TextParagraph()
      var ObjectButtonTemplate = new Element.Button()
      var ObjectImgTemplate = new Element.Image()
      var ObjectLineTemplate = new Element.LineHorizontal()

      switch (payload.type) {
        case 'text':
            {
              var item = {
                id : state.indexItem,
                type : 'text',
                style : payload.style,
                parentId : state.selectId != null ? state.selectId : null,
                column : state.Selectedcolumn,
                position :payload.position,
                value : payload.value,
                row : state.SelectedRow
              }
              this.commit('addItem',item)
            }
          break;
          case 'strip':
          {
            payload.elements.forEach(item=>{
              switch (item.type) {
                case 'section':
                  {
                    
                    ObjectSectionTemplate.setTemplate(item)
                    var itemSection = new Object()
                    itemSection = {
                      id : state.indexItem,
                      type : 'section',
                      style: ObjectSectionTemplate.style,
                      parentId : -1,
                      layout: ObjectSectionTemplate.layout,
                      position :ObjectSectionTemplate.position,
                      row : ObjectSectionTemplate.row,
                      indexSection : state.indexSection,
                      idSlideshow : null,
                      indexSlide:null
                    }
                    state.selectId = state.indexItem
                    state.Selectedcolumn = 1
                    state.indexSection++
                    this.commit('addItem',itemSection) 
                  }
                break;
                case 'text':
                  {
                    
                    ObjectTextTemplate.setTemplate(item)
                    var itemText = {
                      id : state.indexItem,
                      type : 'text',
                      style : ObjectTextTemplate.style,
                      parentId : state.selectId != null ? state.selectId : null,
                      column : item.column,
                      position :ObjectTextTemplate.position,
                      value : ObjectTextTemplate.value,
                      row : item.row
                    }
                    this.commit('addItem',itemText)
                  }
                  break;  
                  case 'btn':
                    {
                      
                      ObjectButtonTemplate.setTemplate(item)
                      var itembtn = {
                        id : state.indexItem,
                        type : 'btn',
                        style : ObjectButtonTemplate.style,
                        parentId : state.selectId != null ? state.selectId : null,
                        column :item.column,
                        position : ObjectButtonTemplate.position,
                        row : item.row
                      } 
                      this.commit('addItem',itembtn)  
                    }
                  break;
                  case 'image':
                    {
                      ObjectImgTemplate.setTemplate(item)
                      var itemImg = {
                        id  :state.indexItem,
                        type : 'img',
                        style : ObjectImgTemplate.style,
                        parentId : state.selectId != null ? state.selectId : null,
                        column : item.column,
                        position: ObjectImgTemplate.position,
                        url : ObjectImgTemplate.url,
                        row : item.row
                      }    
                      this.commit('addItem',itemImg)
                    }
                  break;
                  case 'lineHorizontal':
                  {
                    ObjectLineTemplate.setTemplate(item)
                    var itemLine = {
                      id : state.indexItem,
                      type : 'lineHorizontal',
                      style : ObjectLineTemplate.style,
                      parentId : state.selectId != null ? state.selectId : null,
                      column :item.column,
                      position : ObjectLineTemplate.position,
                      row : item.row
                    }    
                    this.commit('addItem',itemLine) 
                  }
                  break;
                default:
                  break;
              }
            })
          }
          break;
          case 'contact':
              {
                payload.elements.map(item=>{              
                  switch (item.type) {
                    case 'section':
                      {
                        var itemSection = {
                          id : state.indexItem,
                          type : 'section',
                          style: item.style,
                          parentId : -1,
                          layout: item.layout,
                          position : item.position,
                          row : item.row,
                          indexSection : state.indexSection
                        }
                        state.selectId = state.indexItem
                        state.Selectedcolumn = 1
                        state.indexSection++
                        this.commit('addItem',itemSection)    
                      }
                    break;
                    case 'text':
                      {
                        var itemText = {
                          id : state.indexItem,
                          type : 'text',
                          style : item.style,
                          parentId : state.selectId != null ? state.selectId : null,
                          column : item.column,
                          position :item.position,
                          value : item.value,
                          row : item.row
                        }
                        this.commit('addItem',itemText)
                      }
                      break;  
                      case 'btn':
                        {
                          var itembtn = {
                            id : state.indexItem,
                            type : 'btn',
                            style : item.style,
                            parentId : state.selectId != null ? state.selectId : null,
                            column :item.column,
                            position : item.position,
                            row : item.row
                          } 
                          this.commit('addItem',itembtn)  
                        }
                      break;
                      case 'image':
                        {
                          var itemImg = {
                            id  :state.indexItem,
                            type : 'img',
                            style : item.style,
                            parentId : state.selectId != null ? state.selectId : null,
                            column : item.column,
                            position: item.position,
                            url : item.url,
                            row : item.row
                          }    
                          this.commit('addItem',itemImg)
                        }
                      case 'field':
                        {
                          var itemFeild = {
                            id : state.indexItem,
                            type : 'field',
                            style: item.style, 
                            parentId : state.selectId != null ? state.selectId : null,
                            column : item.column,
                            position : item.position,
                            row : item.row
                          }
                          this.commit('addItem',itemFeild)
                        }
                      break;
                    default:
                      break;
                  }
                })
              }
          break;
          default:
          break;
        }
    },
    bindingPosition:function(state,{id,val}){
      var grid = ['section','row','column']
      state.elements.item = state.elements.item.filter(item =>{
        if(item.id == id&& !grid.includes(item.type)){
          item.position.x = val.x
          item.position.y = val.y
          item.position.w = val.w
          item.position.h = val.h
          item.position.angle = val.angle
        }
        return item
      })
    },
    bindingMenuPosition:function(state,{val}){
      state.elements.menu.position.x = val.x
      state.elements.menu.position.y = val.y
      state.elements.menu.position.w = val.w
      state.elements.menu.position.h = val.h
    },
    updatePositionElement:function(state,{id,val}){
      var grid = ['section','row','column']
      // this.commit('enableUndo')
      state.elements.item = state.elements.item.filter(item =>{
        if(item.id == id && !grid.includes(item.type)){
          item.style.top = val.top,
          item.style.left = val.left
          item.style.width  =val.width
          item.style.height = val.height
          item.style.rotation = val.rotation
        }
        return item
      })
    },
    setWindowSize :function(state,{height , width}){
      state.window.height = height
      state.window.width = width
    },
    setBackgroundSize:function(state,{id,value}){
      this.commit('enableUndo')

      state.elements.item = state.elements.item.filter(item => {
        if(item.id == id){
          item.layout.filter(itemLayout =>{
            if(itemLayout.index == state.Selectedcolumn && itemLayout.row == state.SelectedRow){
              itemLayout.bgSize = value
            }
            return itemLayout
          })
        }
        return item
      })
    },
    setBackgroundPosition:function(state,{id,value}){
      this.commit('enableUndo')

      state.elements.item = state.elements.item.filter(item => {
        if(item.id == id){
          item.layout.filter(itemLayout =>{
            if(itemLayout.index == state.Selectedcolumn && itemLayout.row == state.SelectedRow){
              itemLayout.bgPosition = value
            }
            return itemLayout
          })
        }
        return item
      })
    },
    setBackgroundImageById:function(state,{id,value}){
      this.commit('enableUndo')

      state.elements.item = state.elements.item.filter(item => {
        if(item.id == id){
          item.layout.filter(itemLayout =>{
            if(itemLayout.index == state.Selectedcolumn && itemLayout.row == state.SelectedRow){
              itemLayout.bg = value
            }
            return itemLayout
          })
        }
        return item
      })
    },
    setImageUrlById:function(state,{id,value}){
      this.commit('enableUndo')

      state.elements.item = state.elements.item.filter(item =>{
        if(item.id == id ){
          item.url = value
        }
        return item
      })
    },
    updateColorColumn:function(state,{value}){
      this.commit('enableUndo')

      state.elements.item = state.elements.item.filter(item =>{
        if(item.id == state.selectId){
          item.layout = item.layout.filter(itemLayout => {
            if(itemLayout.index == state.Selectedcolumn && itemLayout.row == state.SelectedRow){
              itemLayout.bg = value
            }
            return itemLayout
          })
        }
        return item
      })
    },
    
    setSelectColumn:function(state,index){
      state.Selectedcolumn = index
    },
    setValueText:function(state, {id,val}){
      this.commit('enableUndo')

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
      bus.$emit('close',true)
      state.elements.item.push(item)
      state.indexItem++
    },
    addSection:function(state){
      bus.$emit('close',true)
      var ObjectSection = new Element.Section();
      var item = {
        id : state.indexItem,
        type : 'section',
        style: ObjectSection.style,
        parentId : -1,
        layout:ObjectSection.layout,
        position :ObjectSection.position,
        row : ObjectSection.row,
        indexSection : state.indexSection,
        idSlideshow : null,
        swapSlide: false,
        indexSlide: null,
        pageIndex : state.pageIndex,
        form : state.SelectedElement

      }
      state.selectId = state.indexItem
      state.Selectedcolumn = 1
      state.indexSection++
      this.commit('addItem',item)
    },
    addElement:function(state,{type, name}){
      this.commit('enableUndo')
      switch (type) {
        case 'text':
            {
              var ObjectText = new Element.TextParagraph()
              var item = {
                id : state.indexItem,
                type : 'text',
                style : ObjectText.style,
                parentId : state.selectId != null ? state.selectId : null,
                column : state.Selectedcolumn,
                row : state.SelectedRow,
                position :ObjectText.position,
                value : ObjectText.value,
              }
              this.commit('addItem',item)
            }
          break;
        case 'image':
            {
              var ObjectImg = new Element.Image()
              var item = {
                id  :state.indexItem,
                type : 'img',
                style : ObjectImg.style,
                parentId : state.selectId != null ? state.selectId : null,
                column : state.Selectedcolumn,
                row : state.SelectedRow,
                position: ObjectImg.position,
                url : ObjectImg.url,

              }    
              this.commit('addItem',item)
            }
        break;
        case 'button':
            {
              var ObjectButton = new Element.Button()
              var item = {
                id : state.indexItem,
                type : 'btn',
                style : ObjectButton.style,
                parentId : state.selectId != null ? state.selectId : null,
                column :state.Selectedcolumn,
                row : state.SelectedRow,
                position : ObjectButton.position,

              } 
              this.commit('addItem',item)     
            }
        break;
        case 'lineHorizontal':
          {
            var ObjectLine = new Element.LineHorizontal()
            var item = {
              id : state.indexItem,
              type : 'lineHorizontal',
              style : ObjectLine.style,
              parentId : state.selectId != null ? state.selectId : null,
              column :state.Selectedcolumn,
              row : state.SelectedRow,
              position : ObjectLine.position,

            }    
            this.commit('addItem',item) 
          }
        break;
        case 'lineVertical':
          {
            var ObjectLineVertical = new Element.LineVertical()
            var item = {
              id : state.indexItem,
              type : 'lineVertical',
              style : ObjectLineVertical.style,
              parentId : state.selectId != null ? state.selectId : null,
              column :state.Selectedcolumn,
              row : state.SelectedRow,
              position : ObjectLineVertical.position,

            }    
            this.commit('addItem',item) 
          }
        break;
        case 'sildeShow':
        {
          var templateSlide = Template["slideshow"].find(item => item.name == name).elements
          var ObjectSection = new Element.Section();
          var item = {
            id : state.indexItem,
            type : 'section',
            style: ObjectSection.style,
            parentId : -1,
            layout:ObjectSection.layout,
            position :ObjectSection.position,
            row : ObjectSection.row,
            indexSection : state.indexSection,
            idSlideshow : null,
            swapSlide:true,
            pageIndex : state.pageIndex

          }
          state.selectId = state.indexItem
          state.Selectedcolumn = 1
          this.commit('addItem',item)
          
          var idSlide = null;
          var itemS = {
            id : state.indexItem,
            type : 'slideshow',
            parentId : state.selectId != null ? (state.selectId) : null,
            itemList :  templateSlide
          }
          idSlide = state.indexItem;
          this.commit('addItem',itemS)
          state.elements.item.find(item => item.id == (state.indexItem -1)).itemList.forEach((itemSlide,index) => {
            var ObjectSection = new Element.Section();
            ObjectSection.setItemSlideshow(itemSlide)
            var item = {
              id : state.indexItem,
              type : 'section',
              style: ObjectSection.style,
              parentId : -1,
              layout:ObjectSection.layout,
              position :ObjectSection.position,
              row : ObjectSection.row,
              indexSection : state.indexSection,
              idSlideshow : idSlide,
              swapSlide:false,
              indexSlide : index+1,
              pageIndex : state.pageIndex

            }
            this.commit('addItem',item)
          })
          state.indexSection++
        }
        break;
        case 'box':
        {
          var ObjectBox = new Element.Box()
          var item = {
            id : state.indexItem,
            type : 'box',
            style: ObjectBox.style, 
            parentId : state.selectId != null ? state.selectId : null,
            column : state.Selectedcolumn,
            row : state.SelectedRow,
            position : ObjectBox.position,

          }
          this.commit('addItem',item)
        }
        break;
        case 'field':
        {
          var ObjectField = new Element.Field()
          var item = {
            id : state.indexItem,
            type : 'field',
            style: ObjectField.style, 
            parentId : state.selectId != null ? state.selectId : null,
            column : state.Selectedcolumn,
            row : state.SelectedRow,
            position : ObjectField.position,

          }
          this.commit('addItem',item)
        }
        break;
        case 'video':
        {
          var ObjectVideo = new Element.Video()
          var item = {
            id : state.indexItem,
            type : 'video',
            style: ObjectVideo.style, 
            parentId : state.selectId != null ? state.selectId : null,
            column : state.Selectedcolumn,
            row : state.SelectedRow,
            position : ObjectVideo.position,

          }
          this.commit('addItem',item)
        }
        break;
        case 'form':
        {
          var ObjectForm = new Element.Form()
          var item = {
            id : state.indexItem,
            type: 'form',
            style: ObjectForm.style,
            parentId : state.selectId != null ? state.selectId : null,
            column : state.Selectedcolumn,
            row : state.SelectedRow,
            position : ObjectForm.position,
          }
          this.commit('addItem',item)
          var ObjectSection = new Element.Section();
          var item = {
            id : state.indexItem,
            type : 'section',
            style: ObjectSection.style,
            parentId : -1,
            layout:ObjectSection.layout,
            position :ObjectSection.position,
            row : ObjectSection.row,
            indexSection : state.indexSection,
            idSlideshow : null,
            swapSlide: false,
            indexSlide: null,
            pageIndex : state.pageIndex,
            form : state.indexItem-1

          }
          state.selectId = state.indexItem
          state.Selectedcolumn = 1
          state.indexSection++
          this.commit('addItem',item)
        }
        break;
        default:
          break;
      }
      
    },
    deleteItemById:function(state,id){
      state.SelectedElement = null
      state.elements.item = state.elements.item.filter(item => item.id != id)
    },
    preColumn:function(state,id){
      this.commit('enableUndo')

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
      this.commit('enableUndo')

      state.elements.item = state.elements.item.filter(item =>{
        if(item.id == id){
          var parent = state.elements.item.find(itemP => itemP.id == item.parentId)
          if(item.column < parent.layout.filter(itemLayout => itemLayout.row == state.SelectedRow).length){
            item.column = item.column + 1
          }
        }
        return item
      })
    },

    deleteSection:function(state,id){
      this.commit('enableUndo')

      state.elements.item  = state.elements.item.filter(item => {
        if(item.id != id && item.parentId != id){
          return item
        }
      })
      state.selectId = null
    },
    deleteRow:function(state){
      this.commit('enableUndo')
      state.elements.item = state.elements.item.filter(item =>{
        if(item.row != state.SelectedRow || item.parentId != state.selectId){
          return item
        }
      }) // xoa item con
      if(this.getters.getNumRow == 1){
        this.commit('deleteSection',state.selectId)
        return
      } // xoa section
      state.elements.item = state.elements.item.filter(item =>{
        if(item.id == state.selectId ){
          var sizeOld = 0;
          item.row = item.row.filter(itemRow =>{
            if(itemRow.index != state.SelectedRow){
              return itemRow
            }else{
              sizeOld = itemRow.size
            }
          }) // xoa row va lay size old

          item.layout = item.layout.filter(itemLayout =>{
            if(itemLayout.row != state.SelectedRow){
              return itemLayout
            }
          }) 
          var index = 1;
          item.row = item.row.filter(itemRow =>{
            item.layout = item.layout.filter(itemLayout =>{
              if(itemLayout.row == itemRow.index){
                itemLayout.row = index
              }
              return itemLayout
            })
            state.elements.item = state.elements.item.filter(itemC =>{
              if(itemC.row == itemRow.index && itemC.parentId == state.selectId){
                itemC.row = index
              }
              return itemC
            })

            itemRow.index = index
            index == 1 ? itemRow.size += sizeOld : null
            index++
            return itemRow
          })
        }
        return item
      })
    },
    deleteColumn:function(state ,{index, id,row}){
      this.commit('enableUndo')
      state.elements.item = state.elements.item.filter(item =>{
        if(item.column != index || item.row != row || item.parentId != id){
          return item
        }
      })
      // state.elements.item = state.elements.item.filter(item => {
      //   if(item.id != id || item.column != index || item.row != row){
      //     return item
      //   }
      // })
      if(state.elements.item.find(item => item.id == id).layout.length == 1){
        this.commit('deleteSection',id)
        return
      }
      if(state.elements.item.find(item => item.id == id ).layout.filter(itemLayout => itemLayout.row == row).length == 1){
        this.commit('deleteRow')
        return
      }
      state.elements.item = state.elements.item.filter(item => {
        if(item.id == id ){
          if(item.layout.length > 1){
            var size = parseInt(100 / (this.getters.getNumColumn - 1));
            item.layout = item.layout.filter(itemLayout => {
              if(itemLayout.index != index || itemLayout.row != row){
                return itemLayout // edited
              }
            })
            var itemLayoutNew = [] ;
            item.layout = item.layout.filter(itemLayout => {
              if(itemLayout.row == row){
                itemLayoutNew.push(itemLayout)
              }else{
                return itemLayout //edited
              }
            }) 
            itemLayoutNew.forEach(itemNew =>{
              itemNew.size = size
              item.layout.push(itemNew)     
            })
            
          }
        } 
        return item
      })

      state.elements.item = state.elements.item.filter(item => {
        var indexColumn = 1
        if(item.id == id){
            item.layout = item.layout.filter(itemLayout =>{
              if(itemLayout.row == row){
                state.elements.item = state.elements.item.filter(itemChild =>{
                  if(itemChild.parentId == id && itemChild.column == itemLayout.index && itemChild.row == row){
                    itemChild.column = indexColumn
                  }else{
                    return itemChild
                  }
                })
                itemLayout.index = indexColumn
                indexColumn++
              }
            return itemLayout
          })
        }
        return item
      })
    },
    addColumn:function(state){
      this.commit('enableUndo')

      if(this.getters.getNumColumn < 5){
        var size = parseInt(100 / (this.getters.getNumColumn + 1))
        
        state.elements.item = state.elements.item.filter(item =>{
          if(item.id == state.selectId){
            item.layout.push({index : this.getters.getNumColumn + 1, size : 0,bg : '#ffffff',row : state.SelectedRow})
            item.layout = item.layout.filter(itemLayout =>{
              if(itemLayout.row == state.SelectedRow){
                itemLayout.size = size
              }
              return itemLayout
            })
          }
          return item
        })
      }
    },
    addRow:function(state){
      this.commit('enableUndo')

      if(this.getters.getNumRow < 5){
        var size = parseInt(100/(this.getters.getNumRow + 1))
        state.elements.item = state.elements.item.filter(item =>{
          if(item.id == state.selectId){
            item.row.push({index: -1,size : size,bg:'none' })
            item.layout.push({index: 1,row: (this.getters.getNumRow),size: 100,bg:'none'})
            var index  = 1
            item.row = item.row.filter(itemRow =>{
              itemRow.index = index
              itemRow.size = size
              index++
              return itemRow
            })
          }
          return item
        })
      }
    },


  }