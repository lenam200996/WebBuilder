<template>
     <dragResize
            :id="id"
            :x ="position.x"
            :y ="position.y"
            :angle="position.angle"
            :w="position.w"
            :h="position.h"
            @select="select"
            @deselect="deselect"
            :style="getStyleWrap"
            >
    <div :style="getStyle" class="row">
        
    </div>
        <btnOption v-if="isActive"
        :isGrid="false" 
        @edit="editOption" 
        @disableEdit="onBlur"
        @deleteItem="deleteItem"
        @preColumn="preColumn"
        @nextColumn="nextColumn"
        :elementName="'ROW'"
        ></btnOption>
     </dragResize>
</template>

<script>
import {bus} from '../../main'
    export default {
        props:{
      id :{
        type : Number,
        required: true
      },
      position : {
        type : Object,
        required :true
      },
      styleRow :{
        type :Object,

      }
      
    },
    data() {
      return {
        isActive : false,
      }
    },
    methods:{
        select:function(){
            this.$store.commit('setSelectId',this.id)
            this.$store.commit('setSelectColumn',this.columnIndex)
            this.isActive = true
            bus.$emit('gridActive',true)
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
            this.$store.commit('deleteItemById',this.id)
        },
        preColumn:function(){
            this.$store.commit('preColumn',this.id)
        },
        nextColumn:function(){
            this.$store.commit('nextColumn',this.id)
        }
    },
    computed:{
        getStyle: function(){
        return {
         height : this.styleRow.size +'px',
         backgroundColor : this.styleRow.backgroundColor
        }
        },
        getStyleWrap:function(){
            if(this.styleRow.alignBlock == 'center'){
            var style = {
                top: this.styleRow.top,
                // width: this.styleLine.width ,
                // height: this.styleLine.height ,
                transform: 'rotate(' + this.styleRow.rotation + 'deg)',
                left : '50%',
                transform : 'translateX(-50%)',
                maxWidth : '90%',
                zIndex : this.isActive ? 99999 : 1,
            }
            }else if( this.styleRow.alignBlock == 'left'){
            var style = {
                top: this.styleRow.top,
                // width: this.styleLine.width ,
                // height: this.styleLine.height ,
                transform: 'rotate(' + this.styleRow.rotation + 'deg)',
                left : 0,
                transform :'none',
                right : 'auto',
                maxWidth : '90%',
                zIndex : this.isActive ? 99999 : 1,
            }
            }else if( this.styleRow.alignBlock == 'right'){
            var style = {
                top: this.styleRow.top,
                // width: this.styleLine.width ,
                // height: this.styleLine.height ,
                transform: 'rotate(' + this.styleRow.rotation + 'deg)',
                right : 0,
                transform :'none',
                left : 'auto',
                maxWidth : '90%',
                zIndex : this.isActive ? 99999 : 1,
            }
            }else{
            return {
                left: this.styleRow.left,
                top: this.styleRow.top,
                // width: this.styleLine.width ,
                // height: this.styleLine.height ,
                transform: 'rotate(' + this.styleRow.rotation + 'deg)',
                maxWidth : '90%',
                zIndex : this.isActive ? 99999 : 1,
            };
            }
            return style
        }
        },
    }
</script>

<style  scoped>

</style>