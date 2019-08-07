import {bus} from '../main'
var mixin= {
    data() {
        return {
            isAutoAlign:false,
            showButton:false
        }
    },
    mounted() {
        // window.addEventListener('contextmenu',()=>{return false})
        window.oncontextmenu = function(){
            return false
        }
    },
    computed:{
        getAutoAlignBlockId:function(){
            return this.$store.getters.getAutoAlignBlockId
        },
        getRowSelected:function(){
            return $store.getters.getRowSelected
        }
    },
    watch:{
        getAutoAlignBlockId:function(val){
          if(this.properties.id === val){
            this.isAutoAlign = true
          }else{
            this.isAutoAlign = false
          }
        }
      },
    methods:{
        draging:function(){
            this.showButton = false
        },
        dragStop:function(){
            this.showButton = true
            setTimeout(()=>{
                this.$store.dispatch('setSelectedElementAction',{val : this.properties.id})
            },100)
        },
        select:function(){
            this.isActive = true 
            this.showButton = true
            // this.$store.commit('setSelectedElement',this.properties.id)
            this.$store.commit('setSelectColumn',this.properties.columnIndex)
            setTimeout(()=>{
                this.$store.dispatch('setSelectedElementAction',{val : this.properties.id})
            },100)  
            this.$store.dispatch('setSelectRowAction',this.properties.rowIndex)
        },
        editOption(ev){
            bus.$emit('openOption',{name : this.name,id:this.properties.id,index : -1,x:ev.x})
        },
        onBlur() {
            bus.$emit('closeOptionElement',{name : this.name,id:this.properties.id})
        },  
        deselect:function(){
            this.isActive = false
            this.showButton = false
            this.$store.commit('setAutoAlignBlockId',null)
            // this.$store.commit('setSelectedElement',null)
            this.$store.dispatch('setSelectedElementAction',{val : null})
        },
        deleteItem:function(){
            // this.$store.commit('deleteItemById',this.properties.id)
            this.$store.dispatch('deleteItemByIdAction',{id:this.properties.id})
            bus.$emit('closeOptionElement',{name : this.name,id:this.properties.id})
        },
        preColumn:function(){
            this.$store.commit('preColumn',this.properties.id)
        },
        nextColumn:function(){
            this.$store.commit('nextColumn',this.properties.id)
        }
    },
}
export default {mixin}
