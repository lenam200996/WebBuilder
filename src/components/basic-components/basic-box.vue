<template>
     <divDragResize
            :id="properties.id"
            :column="properties.columnIndex"
            :parentId="properties.parentId"
            :x ="properties.position.x"
            :y ="properties.position.y"
            :angle="properties.position.angle"
            :w="properties.position.w"
            :h="properties.position.h"
            @select="select"
            @deselect="deselect"
             v-click-outside="deselect"
            :selected="isActive"
            :style="getStyleWrap"
            :class="{autoAlign : isAutoAlign}"
            >
    <div :style="getStyle" class="re-box" :class="'md-elevation-'+properties.styleBox.shadow" >
        <slot></slot>
    </div>
<transition name="bounce">
        <e-option-button-option v-if="isActive"
        :isGrid="false" 
        @edit="editOption" 
        @disableEdit="onBlur"
        @deleteItem="deleteItem"
        @preColumn="preColumn"
        @nextColumn="nextColumn"
        :elementName="name"
        ></e-option-button-option>
</transition>
     </divDragResize>
</template>

<script>
import {bus} from '../../main'
import mixins from '../mixins.js'
    export default {
        props:{
            properties:{
                type : Object,
                required:true
            },
      
    },
    data() {
      return {
        isActive : false,
        name : 'BOX',
      }
    },
    extends: mixins.mixin,
    computed:{
        
        getStyle: function(){
        return {
            backgroundColor : this.properties.styleBox.backgroundColor,
            opacity : this.properties.styleBox.opacity,
            border : this.properties.styleBox.border.width +'px '+this.properties.styleBox.border.type+' '+this.properties.styleBox.border.color,
            borderRadius: this.properties.styleBox.borderRadius + 'px',
        }
        },
        getStyleWrap:function(){
            if(this.properties.styleBox.alignBlock == 'center'){
            var style = {
                top: this.properties.styleBox.top,
                transform: 'rotate(' + this.properties.styleBox.rotation + 'deg)',
                left : '50%',
                transform : 'translateX(-50%)',
                maxWidth : '90%',
            }
            }else if( this.properties.styleBox.alignBlock == 'left'){
            var style = {
                top: this.properties.styleBox.top,
                transform: 'rotate(' + this.properties.styleBox.rotation + 'deg)',
                left : 0,
                transform :'none',
                right : 'auto',
                maxWidth : '90%',
            }
            }else if( this.properties.styleBox.alignBlock == 'right'){
            var style = {
                top: this.properties.styleBox.top,
                transform: 'rotate(' + this.properties.styleBox.rotation + 'deg)',
                right : 0,
                transform :'none',
                left : 'auto',
                maxWidth : '90%',
            }
            }else{
            return {
                left: this.properties.styleBox.left,
                top: this.properties.styleBox.top,
                transform: 'rotate(' + this.properties.styleBox.rotation + 'deg)',
                maxWidth : '90%',
            };
            }
            return style
        }
        },
         
      
    }
</script>

<style  scoped>
    .re-box{
        width: 100%;
        height: 100%;
    }
</style>