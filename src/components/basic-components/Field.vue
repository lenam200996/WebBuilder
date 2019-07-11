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
        <input :type="getType" :placeholder="styleInput.placeholder" :required="styleInput.required" :style="getStyle" class="re-field">
        <btnOption v-if="isActive"
        :isGrid="false" 
        @edit="editOption" 
        @disableEdit="onBlur"
        @deleteItem="deleteItem"
        @preColumn="preColumn"
        @nextColumn="nextColumn"
        :elementName="'FIELD'"
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
      styleInput :{
        type :Object,
      },

      
    },
    data() {
      return {
        isActive : false,
      }
    },
    methods:{
        select:function(){
        this.isActive = true
        },
        editOption(){
         bus.$emit('openOption',{name : 'FIELD',id:this.id,index : -1})
        },
        onBlur() {
            bus.$emit('closeOptionElement',{name : 'FIELD',id:this.id})
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
        getType:function(){
            return this.styleInput.type
        },
        getStyle: function(){
            return {
                backgroundColor : this.styleInput.backgroundColor,
                borderRadius: this.styleInput.borderRadius + 'px',
                border: this.styleInput.border.width + 'px '+this.styleInput.border.type +' '+this.styleInput.border.color
            }
        },
        getStyleWrap:function(){
            if(this.styleInput.alignBlock == 'center'){
            var style = {
                top: this.styleInput.top,
                // width: this.styleInput.width ,
                // height: this.styleInput.height ,
                transform: 'rotate(' + this.styleInput.rotation + 'deg)',
                left : '50%',
                transform : 'translateX(-50%)',
                maxWidth : '90%',
                zIndex : this.isActive ? 99999 : 1,
            }
            }else if( this.styleInput.alignBlock == 'left'){
            var style = {
                top: this.styleInput.top,
                // width: this.styleInput.width ,
                // height: this.styleInput.height ,
                transform: 'rotate(' + this.styleInput.rotation + 'deg)',
                left : 0,
                transform :'none',
                right : 'auto',
                maxWidth : '90%',
                zIndex : this.isActive ? 99999 : 1,
            }
            }else if( this.styleInput.alignBlock == 'right'){
            var style = {
                top: this.styleInput.top,
                // width: this.styleInput.width ,
                // height: this.styleInput.height ,
                transform: 'rotate(' + this.styleInput.rotation + 'deg)',
                right : 0,
                transform :'none',
                left : 'auto',
                maxWidth : '90%',
                zIndex : this.isActive ? 99999 : 1,
            }
            }else{
            return {
                left: this.styleInput.left,
                top: this.styleInput.top,
                // width: this.styleInput.width ,
                // height: this.styleInput.height ,
                transform: 'rotate(' + this.styleInput.rotation + 'deg)',
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
    .re-field{
        width: 100%;
        height: 100%;
    }
</style>