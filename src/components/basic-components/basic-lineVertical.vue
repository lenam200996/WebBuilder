<template>
     <divDragResize
            :id="properties.id"
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
    <div :style="getStyle" class="re-line-v" :class="'md-elevation-'+properties.styleLine.shadow">
        
    </div>
        <e-option-button-option v-if="isActive"
        :isGrid="false" 
        @edit="editOption" 
        @disableEdit="onBlur"
        @deleteItem="deleteItem"
        @preColumn="preColumn"
        @nextColumn="nextColumn"
        :elementName="name"
        ></e-option-button-option>
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
        name : 'LINE'
      }
    },
    extends:mixins.mixin,
    computed:{
        getStyle: function(){
        return {
         width : this.properties.styleLine.size +'px',
         backgroundColor : this.properties.styleLine.backgroundColor
        }
        },
        getStyleWrap:function(){
            if(this.properties.styleLine.alignBlock == 'center'){
            var style = {
                top: this.properties.styleLine.top,
                transform: 'rotate(' + this.properties.styleLine.rotation + 'deg)',
                left : '50%',
                transform : 'translateX(-50%)',
                maxWidth : '90%',
                zIndex : this.isActive ? 99999 : 1,
            }
            }else if( this.properties.styleLine.alignBlock == 'left'){
            var style = {
                top: this.properties.styleLine.top,
                transform: 'rotate(' + this.properties.styleLine.rotation + 'deg)',
                left : 0,
                transform :'none',
                right : 'auto',
                maxWidth : '90%',
                zIndex : this.isActive ? 99999 : 1,
            }
            }else if( this.properties.styleLine.alignBlock == 'right'){
            var style = {
                top: this.properties.styleLine.top,
                transform: 'rotate(' + this.properties.styleLine.rotation + 'deg)',
                right : 0,
                transform :'none',
                left : 'auto',
                maxWidth : '90%',
                zIndex : this.isActive ? 99999 : 1,
            }
            }else{
            return {
                left: this.properties.styleLine.left,
                top: this.properties.styleLine.top,
                transform: 'rotate(' + this.properties.styleLine.rotation + 'deg)',
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
    .re-line-v{
        height: 100%;
    }
</style>