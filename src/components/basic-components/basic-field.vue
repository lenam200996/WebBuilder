<template>
     <divDragResize
            :id="properties.id"
            :parentId="properties.parentId"
            :column="properties.columnIndex"
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
            :typeName="name"
             @drag="draging" 
            @dragstop="dragStop"
            >
        <mdb-input :type="getType" :label="properties.styleInput.placeholder"  :class="'md-elevation-'+properties.styleInput.shadow" :required="properties.styleInput.required" :style="getStyle" class="re-field"></mdb-input>
<transition name="bounce">      
        <e-option-button-option v-if="isActive&&showButton" 
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
                type:Object,
                required:true
            },      
    },
    data() {
      return {
        isActive : false,
        name :'FIELD',

      }
    },
    extends: mixins.mixin,
    computed:{

        getType:function(){
            return this.properties.styleInput.type
        },
        getStyle: function(){
            return {
                backgroundColor : this.properties.styleInput.backgroundColor,
                borderRadius: this.properties.styleInput.borderRadius + 'px',
                borderStyle:this.properties.styleInput.border.type ,
                borderColor: this.properties.styleInput.border.color,
                borderWidth: this.properties.styleInput.borderPosition == 'All'?this.properties.styleInput.border.width+'px': '0px 0px '+this.properties.styleInput.border.width+'px 0px',
                textAlign : this.properties.styleInput.textAlign,
                paddingLeft:  this.properties.styleInput.textAlign == 'left'?this.properties.styleInput.paddingLeft+'px' : 0,
                paddingRight:  this.properties.styleInput.textAlign == 'right'?this.properties.styleInput.paddingRight+'px' : 0,
                fontFamily : this.properties.styleInput.fontFamily,
                fontStyle: this.properties.styleInput.fontStyle,
                fontSize:this.properties.styleInput.fontSize+'px',
                fontWeight: this.properties.styleInput.fontWeight,
                color:this.properties.styleInput.color,
                
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
                marginTop : this.properties.styleInput.marginTop + 'px',
                marginLeft : this.properties.styleInput.marginLeft + 'px',
                marginRight : this.properties.styleInput.marginRight + 'px',
                marginBottom : this.properties.styleInput.marginBottom + 'px',
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
                marginTop : this.properties.styleInput.marginTop + 'px',
                marginLeft : this.properties.styleInput.marginLeft + 'px',
                marginRight : this.properties.styleInput.marginRight + 'px',
                marginBottom : this.properties.styleInput.marginBottom + 'px',
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
                marginTop : this.properties.styleInput.marginTop + 'px',
                marginLeft : this.properties.styleInput.marginLeft + 'px',
                marginRight : this.properties.styleInput.marginRight + 'px',
                marginBottom : this.properties.styleInput.marginBottom + 'px',
            }
            }else{
            return {
                left: this.properties.styleInput.left,
                top: this.properties.styleInput.top,
                transform: 'rotate(' + this.properties.styleInput.rotation + 'deg)',
                maxWidth : '90%',
                zIndex : this.isActive ? 99999 : 1,
                marginTop : this.properties.styleInput.marginTop + 'px',
                marginLeft : this.properties.styleInput.marginLeft + 'px',
                marginRight : this.properties.styleInput.marginRight + 'px',
                marginBottom : this.properties.styleInput.marginBottom + 'px',
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