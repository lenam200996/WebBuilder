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
             <!-- :hasActiveContent="true" -->
      <div class="button" @active="onActive()" >
          <button :style="getStyle">
              <span v-html="text" ></span>
          </button>
      </div>
     
      <btnOption v-if="isActive"
        :isGrid="false" 
        @edit="editOption" 
        @disableEdit="onBlur"
        @deleteItem="deleteItem"
        @preColumn="preColumn"
        @nextColumn="nextColumn"
        :elementName="'BUTTON'"
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
      text: {
        type :String,
        required: true,
      },
      styleButton :{
        type :Object,

      }
      
    },
    data() {
      return {
        isActive : false,
      }
    },

    methods: {

      editOption(){
        this.textActive  = false
         bus.$emit('openOption',{name : 'BUTTON',id:this.id,index : -1})
      },
      onBlur() {
        bus.$emit('closeOptionElement',{name : 'BUTTON',id:this.id})
      },     
      select:function(){
        this.isActive = true
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
    mounted(){

    },
    computed:{
      getStyle: function(){
        
        return {
            backgroundColor : this.styleButton.backgroundColor,
            border: this.styleButton.border.width + 'px '+this.styleButton.border.type+' '+this.styleButton.border.color,
            borderRadius: this.styleButton.borderRadius + 'px',
            color: this.styleButton.color,
            textTransform : this.styleButton.textTransform,
            fontFamily : this.styleButton.fontFamily,
        }
      },
      getStyleWrap:function(){
        if(this.styleButton.alignBlock == 'center'){
          var style = {
            left : '50%',
            transform : 'translateX(-50%)'
          }
        }else if( this.styleButton.alignBlock == 'left'){
          var style = {
            left : 0,
            transform :'none',
            right : 'auto'
          }
        }else if( this.styleButton.alignBlock == 'right'){
          var style = {
            right : 0,
            transform :'none',
             left : 'auto',
          }
        }else{
          return '';
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