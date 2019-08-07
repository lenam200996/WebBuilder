<template>
     <divDragResize
            :id="id"
            class="row md-layout"
            @select="select"
            @deselect="deselect"
            :style="{zIndex :isActive? 99999999 :1}"
            :resizable="false"
            :rotatable="false"
            :draggable="false"
            v-click-outside="deselect"
            isGrid
            style="width:100%;position:relative"
            >
    <div :style="getStyle"  class="row" style="width:100%;position:relative">
        <slot></slot>
    </div>
<transition name="bounce">
        <e-option-button-option v-if="isActive && !swapSlide"
        :isGrid="true" 
        @edit="editOption" 
        @disableEdit="onBlur"
        @deleteItem="deleteItem"
        :styleBtn="styleBtn"
        :elementName="'ROW'"
        ></e-option-button-option>
</transition>
     </divDragResize>
</template>

<script>
import {bus} from '../../main'
    export default {
        props:{
      id :{
        type : Number,
        required: true
      },
      height:{
          type : Number
      },
      bg :{
          type : String
      },
      rowIndex:{
          type: Number
      },
      swapSlide:{
                type : Boolean,
                default :false
            }
      
    },
    data() {
      return {
        isActive : false,
        styleBtn:{
                    width : 'auto',
                    height: 30 +'px',
                    position: 'absolute',
                    zIndex: '99999',
                    bottom: 0 + '!important',
                    right: 50 +'% !important',
                    // transform : 'translateX(-50%)',
                    top : 'auto'
                },
      }
    },
    methods:{
        select:function(){
            this.isActive = true
        },
        editOption(ev){
         bus.$emit('openOption',{name : 'ROW',id:this.id,index : -1,x:ev.x})
        },
        onBlur() {
            bus.$emit('closeOptionElement',{name : 'ROW',id:this.id})
        },  
        deselect:function(){
            this.isActive = false
        },
        deleteItem:function(){
            this.$store.commit('deleteRow')
            bus.$emit('closeOptionElement',{name : 'ROW',id:this.id})
        },
    },
    mounted:function(){
        bus.$on('gridActive',()=>{
            this.isActive = true
        })
        window.oncontextmenu = function(){
                return false
            }
    },
    computed:{
        getStyle: function(){
            return {
                // backgroundColor : this.bg,
                height: this.height +'%',
            }
        },
        getActiveRow:function(){
            return this.$store.getters.getRowSelected
        }
    },
    watch:{
        getActiveRow:function(val){
            if(this.rowIndex == val){
                this.select()
            }else{
                this.deselect()
            }   
        }
    }

    }
</script>

<style  scoped>

</style>