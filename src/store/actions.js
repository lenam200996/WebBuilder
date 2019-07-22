export default {
    actionUndo:function(context){
        context.commit('undo')
        context.commit('enableRedo')
    }
}