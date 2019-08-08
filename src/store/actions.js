export default {
    actionUndo:function(context){
        setTimeout(()=>{
            context.commit('undo')
            context.commit('enableRedo')
        },100)
    },
    actionRedo:function(context){
        setTimeout(()=>{
            context.commit('redo')
        },100)
    },
    setSelectedElementAction:function(context,payload){
        var timeout = 500
        timeout = payload.val==null ? 250:500
        setTimeout(()=>{
            context.commit('setSelectedElement',payload.val)
        },timeout)
        clearTimeout()
    },
    deleteItemByIdAction:function(context,{id}){
        context.commit('deleteItemById',id)
    },
    setSelectRowAction:function(context,val){
        context.commit('setSelectRow',val)
    },
    setGridLineMinMaxAction:function(context,{min,max}){
        
        context.commit('setGridLineMinMax',{min:min,max:max})
    }
}