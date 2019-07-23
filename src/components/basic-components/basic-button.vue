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
            >
      <div class="button" @active="onActive()" @mouseover="isHover = true" @mouseleave="isHover = false" :class="{autoAlign : isAutoAlign}">
          <button :style="getStyle" :class="'md-elevation-'+properties.styleButton.shadow">
              <span v-html="properties.text" ></span>
          </button>
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
        type:Object,
        required :true
      },
      
    },
    data() {
      return {
        isActive : false,
        isHover :false,
        name : 'BUTTON',
        isAutoAlign:false
      }
    },
    extends:mixins.mixin,
    computed:{
      getAutoAlignBlockId:function(){
        return this.$store.getters.getAutoAlignBlockId
      },
      getStyle: function(){
        
        return {
            backgroundColor : !this.isHover?this.properties.styleButton.backgroundColor:this.properties.styleButton.backgroundColorHover,
            border: this.properties.styleButton.border.width + 'px '+this.properties.styleButton.border.type+' '+(!this.isHover?this.properties.styleButton.border.color:this.properties.styleButton.borderColorHover),
            borderRadius: this.properties.styleButton.borderRadius + 'px',
            color: !this.isHover?this.properties.styleButton.color:this.properties.styleButton.colorHover,
            textTransform : this.properties.styleButton.textTransform,
            paddingLeft:  this.properties.styleButton.textAlign == 'left'?this.properties.styleButton.paddingLeft+'px' : 0,
            paddingRight:  this.properties.styleButton.textAlign == 'right'?this.properties.styleButton.paddingRight+'px' : 0,
            fontFamily : this.properties.styleButton.fontFamily,
            textAlign : this.properties.styleButton.textAlign,
            fontSize : this.properties.styleButton.fontSize+'px',
            fontWeight :this.properties.styleButton.fontWeight,
            fontStyle :this.properties.styleButton.fontStyle
        }
      },
      getStyleWrap:function(){
        if(this.properties.styleButton.alignBlock == 'center'){
          var style = {
            top: this.properties.styleButton.top,
            transform: 'rotate(' + this.properties.styleButton.rotation + 'deg)',
            left : '50%',
            transform : 'translateX(-50%)',
            maxWidth : '90%',
            zIndex : this.isActive ? 99999 : 1,
          }
        }else if( this.properties.styleButton.alignBlock == 'left'){
          var style = {
            top: this.properties.styleButton.top,
            transform: 'rotate(' + this.properties.styleButton.rotation + 'deg)',
            left : 0,
            transform :'none',
            right : 'auto',
            maxWidth : '90%',
            zIndex : this.isActive ? 99999 : 1,
          }
        }else if( this.properties.styleButton.alignBlock == 'right'){
          var style = {
            top: this.properties.styleButton.top,
            transform: 'rotate(' + this.properties.styleButton.rotation + 'deg)',
            right : 0,
            transform :'none',
             left : 'auto',
             maxWidth : '90%',
             zIndex : this.isActive ? 99999 : 1,
          }
        }else{
          var style ={
            left: this.properties.styleButton.left,
            top: this.properties.styleButton.top,
            transform: 'rotate(' + this.properties.styleButton.rotation + 'deg)',
            maxWidth : '90%',
          };
        }
        return style
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
    }

  }
</script>

<style>
  .button, .button>button {
    width: 100%;
    height: 100%;
    padding: 0;
  }
  .autoAlign{
    border: 1px solid red;
  }




</style>