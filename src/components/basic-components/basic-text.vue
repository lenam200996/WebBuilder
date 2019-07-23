<template>
    <divDragResize
            :id="properties.id"
            :x ="properties.position.x"
            :y ="properties.position.y"
            :parentId="properties.parentId"
            :angle="properties.position.angle"
            :w="properties.position.w"
            :h="properties.position.h"
            @select="select"
            @deselect="deselect"
             v-click-outside="deselect"
            :selected="isActive"
            :style="getStyleWrap"
        >
      <div class="text" @active="onActive()" v-if="!textActive"  >
          <span v-html="Value" :style="getStyle" :class="'md-elevation-'+properties.styleText.shadow"></span>
          
      </div>
      <div v-else class="edit">
          <tinymceText ref="area" id="d1"  v-model="Value" @editorInit="initEdit" :style="getStyle"></tinymceText>
      </div>
      <e-option-button-option v-if="isActive"
        :isGrid="false" 
        @editText="edit"
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
        required : true
      },
      
    },
    data() {
      return {
        textActive: false,
        isActive : false,
        name :'TEXT'
      }
    },
    extends: mixins.mixin,
    methods: {
      initEdit:function(){
        this.$refs.area.editor.setContent(this.properties.text);
      },
      edit() {
        this.textActive = true
      },
      editOption(){
        this.textActive  = false
         bus.$emit('openOption',{name : 'TEXT',id:this.properties.id,index : -1})
      },
      onBlur() {
        this.textActive = false
        bus.$emit('closeOptionElement',{name : 'TEXT',id:this.properties.id})
      },  
    },
    computed:{
      Value :{
        get : function(){ 
          return this.properties.text
        },
        set: function(val){
          this.$store.commit('setValueText',{id :this.properties.id , val : val})
        }
      },
      getStyle: function(){
        
        return {
          fontFamily : this.properties.styleText.fontFamily,
          letterSpacing : this.properties.styleText.letterSpacing+'px',
          wordSpacing : this.properties.styleText.wordSpacing+'px',
          lineHeight : this.properties.styleText.lineHeight+'px',

        }
      },
      getStyleWrap:function(){
        if(this.properties.styleText.alignBlock == 'center'){
          var style = {
            top: this.properties.styleText.top,
            transform: 'rotate(' + this.properties.styleText.rotation + 'deg)',
            left : '50%',
            transform : 'translateX(-50%)',
            maxWidth : '90%',
            zIndex : this.textActive? 999999: 1
          }
        }else if( this.properties.styleText.alignBlock == 'left'){
          var style = {
            top: this.properties.styleText.top,
            transform: 'rotate(' + this.properties.styleText.rotation + 'deg)',
            left : 0,
            transform :'none',
            right : 'auto',
            maxWidth : '90%',
             zIndex : this.textActive? 999999: 1
          }
        }else if( this.properties.styleText.alignBlock == 'right'){
          var style = {
            top: this.properties.styleText.top,
            transform: 'rotate(' + this.properties.styleText.rotation + 'deg)',
            right : 0,
            transform :'none',
             left : 'auto',
             maxWidth : '90%',
              zIndex : this.textActive? 999999: 1
          }
        }else{
          return {
            left: this.properties.styleText.left,
            top: this.properties.styleText.top,
            transform: 'rotate(' + this.properties.styleText.rotation + 'deg)',
            maxWidth : '90%',
            zIndex : this.textActive? 999999: 1
          };
        }
        return style
      }
    },
  }
</script>

<style>
  .text {
    width: 100%;
    height: 100%;
    /* border: 1px solid lightgrey; */
    
  }
  .textarea {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 99999999999;
  }
  .edit{
      position: relative;
  }

</style>