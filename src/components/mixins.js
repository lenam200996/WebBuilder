import {bus} from '../main'
var mixin= {
    data() {
        return {
            isAutoAlign:false
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
        select:function(){
            this.isActive = true 
        },
        editOption(){
            bus.$emit('openOption',{name : this.name,id:this.properties.id,index : -1})
        },
        onBlur() {
            bus.$emit('closeOptionElement',{name : this.name,id:this.properties.id})
        },  
        deselect:function(){
            this.isActive = false
            this.$store.commit('setAutoAlignBlockId',null)
        },
        deleteItem:function(){
            this.$store.commit('deleteItemById',this.properties.id)
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
