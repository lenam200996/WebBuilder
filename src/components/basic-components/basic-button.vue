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
      <div class="button" @active="onActive()" >
          <button :style="getStyle">
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
        :elementName="'BUTTON'"
        ></e-option-button-option>
        
    </divDragResize>
</template>

<script>
import {bus} from '../../main'
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
      }
    },

    methods: {

      editOption(){
        this.textActive  = false
         bus.$emit('openOption',{name : 'BUTTON',id:this.properties.id,index : -1})
      },
      onBlur() {
        bus.$emit('closeOptionElement',{name : 'BUTTON',id:this.properties.id})
      },     
      select:function(){
        this.isActive = true
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
    mounted(){

    },
    computed:{
      getStyle: function(){
        
        return {
            backgroundColor : this.properties.styleButton.backgroundColor,
            border: this.properties.styleButton.border.width + 'px '+this.properties.styleButton.border.type+' '+this.properties.styleButton.border.color,
            borderRadius: this.properties.styleButton.borderRadius + 'px',
            color: this.properties.styleButton.color,
            textTransform : this.properties.styleButton.textTransform,
            fontFamily : this.properties.styleButton.fontFamily,
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

    }
  }
</script>

<style>
  .button, .button>button {
    width: 100%;
    height: 100%;
    padding: 0;
  }


</style>