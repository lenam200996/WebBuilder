<template>
     <divDragResize
            :id="properties.id"
            :x ="properties.position.x"
            :y ="properties.position.y"
            :angle="properties.position.angle"
            :w="properties.position.w"
            :h="properties.position.h"
            @select="select"
            @deselect="deselect"
            :style="getStyleWrap"
            >
        <input :type="getType" :placeholder="properties.styleInput.placeholder" :required="properties.styleInput.required" :style="getStyle" class="re-field">
        <e-option-button-option v-if="isActive"
        :isGrid="false" 
        @edit="editOption" 
        @disableEdit="onBlur"
        @deleteItem="deleteItem"
        @preColumn="preColumn"
        @nextColumn="nextColumn"
        :elementName="'FIELD'"
        ></e-option-button-option>
     </divDragResize>
</template>

<script>
import {bus} from '../../main'
    export default {
        props:{
            properties:{
                type:Object,
                required:true
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
         bus.$emit('openOption',{name : 'FIELD',id:this.properties.id,index : -1})
        },
        onBlur() {
            bus.$emit('closeOptionElement',{name : 'FIELD',id:this.properties.id})
        },  
        deselect:function(){
            this.isActive = false
        },
        deleteItem:function(){
            this.$store.commit('deleteItemById',this.properties.id)
        },
        preColumn:function(){
            this.$store.commit('preColumn',this.properties.id)
        },
        nextColumn:function(){
            this.$store.commit('nextColumn',this.properties.id)
        }
    },
    computed:{
        getType:function(){
            return this.properties.styleInput.type
        },
        getStyle: function(){
            return {
                backgroundColor : this.properties.styleInput.backgroundColor,
                borderRadius: this.properties.styleInput.borderRadius + 'px',
                border: this.properties.styleInput.border.width + 'px '+this.properties.styleInput.border.type +' '+this.properties.styleInput.border.color
            }
        },
        getStyleWrap:function(){
            if(this.properties.styleInput.alignBlock == 'center'){
            var style = {
                top: this.properties.styleInput.top,
                transform: 'rotate(' + this.properties.styleInput.rotation + 'deg)',
                left : '50%',
                transform : 'translateX(-50%)',
                maxWidth : '90%',
                zIndex : this.isActive ? 99999 : 1,
            }
            }else if( this.properties.styleInput.alignBlock == 'left'){
            var style = {
                top: this.properties.styleInput.top,
                transform: 'rotate(' + this.properties.styleInput.rotation + 'deg)',
                left : 0,
                transform :'none',
                right : 'auto',
                maxWidth : '90%',
                zIndex : this.isActive ? 99999 : 1,
            }
            }else if( this.properties.styleInput.alignBlock == 'right'){
            var style = {
                top: this.properties.styleInput.top,
                transform: 'rotate(' + this.properties.styleInput.rotation + 'deg)',
                right : 0,
                transform :'none',
                left : 'auto',
                maxWidth : '90%',
                zIndex : this.isActive ? 99999 : 1,
            }
            }else{
            return {
                left: this.properties.styleInput.left,
                top: this.properties.styleInput.top,
                transform: 'rotate(' + this.properties.styleInput.rotation + 'deg)',
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