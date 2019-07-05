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
      <div class="text" @active="onActive()" v-if="!textActive"  >
          <span v-html="Value" :style="getStyle"></span>
          
      </div>
      <div v-else class="edit">
          <tinymceText ref="area" id="d1"  v-model="Value" @editorInit="initEdit" :style="getStyle"></tinymceText>
      </div>
      <btnOption v-if="isActive"
        :isGrid="false" 
        @editText="edit"
        @edit="editOption" 
        @disableEdit="onBlur"
        @deleteItem="deleteItem"
        @preColumn="preColumn"
        @nextColumn="nextColumn"
        :elementName="'TEXT'"
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
      styleText :{
        type :Object,

      }
      
    },
    data() {
      return {
        textActive: false,
        isActive : false,
      }
    },

    methods: {
      initEdit:function(){
        this.$refs.area.editor.setContent(this.text);
      },
      edit() {
        this.textActive = true
      },
      editOption(){
         bus.$emit('openOption',{name : 'TEXT',id:this.id})
      },
      onBlur() {
        // this.isActive = false
        this.textActive = false
        bus.$emit('closeOptionElement',{name : 'TEXT',id:this.id})
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
      Value :{
        get : function(){
          return this.text
        },
        set: function(val){
          this.$store.commit('setValueText',{id :this.id , val : val})
        }
      },
      getStyle: function(){
        
        return {
          fontFamily : this.styleText.fontFamily,
          letterSpacing : this.styleText.letterSpacing+'px',
          wordSpacing : this.styleText.wordSpacing+'px',
          lineHeight : this.styleText.lineHeight+'px',

        }
      },
      getStyleWrap:function(){
        if(this.styleText.alignBlock == 'center'){
          var style = {
            left : '50%',
            transform : 'translateX(-50%)'
          }
        }else if( this.styleText.alignBlock == 'left'){
          var style = {
            left : 0,
            transform :'none',
            right : 'auto'
          }
        }else if( this.styleText.alignBlock == 'right'){
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
      // getValue: function(){
      //   console.log("change text")
      // }
    }
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