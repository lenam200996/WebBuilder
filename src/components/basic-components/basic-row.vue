<template>
     <divDragResize
            :id="id"
            class="row md-layout"
            @select="select"
            @deselect="deselect"
            :style="{zindex :isActive? 99999 :1}"
            style="width:100%;position:relative"
            >
    <div :style="getStyle"  class="row" style="width:100%;position:relative">
        <slot></slot>
    </div>
        <e-option-button-option v-if="isActive"
        :isGrid="true" 
        @edit="editOption" 
        @disableEdit="onBlur"
        @deleteItem="deleteItem"
        :styleBtn="styleBtn"
        :elementName="'ROW'"
        ></e-option-button-option>
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
      }
      
    },
    data() {
      return {
        isActive : false,
        styleBtn:{
                    width : 215 +'px',
                    height: 25 +'px',
                    position: 'absolute',
                    zIndex: '99999',
                    bottom: 0 + '!important',
                    left: 50 +'% !important',
                    transform : 'translateX(-50%)',
                    top : 'auto'
                },
      }
    },
    methods:{
        select:function(){
            this.isActive = true
        },
        editOption(){
         bus.$emit('openOption',{name : 'ROW',id:this.id,index : -1})
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
    },
    computed:{
        getStyle: function(){
            return {
                backgroundColor : this.bg,
            }
        },
        getActiveRow:function(){
            return this.$store.getters.getRowSelected
        }
    },
    watch:{
        getActiveRow:function(val){
            console.log(val)
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