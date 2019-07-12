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
        <iframe class="re-iframe-video" :src="getUrl" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <btnOption v-if="isActive"
        :isGrid="false" 
        @edit="editOption" 
        @disableEdit="onBlur"
        @deleteItem="deleteItem"
        @preColumn="preColumn"
        @nextColumn="nextColumn"
        :elementName="'VIDEO'"
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
      styleVideo :{
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
         bus.$emit('openOption',{name : 'VIDEO',id:this.id,index : -1})
        },
        onBlur() {
            bus.$emit('closeOptionElement',{name : 'VIDEO',id:this.id})
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
        getUrl:function() {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var match = this.styleVideo.url.match(regExp);

            if (match && match[2].length == 11) {
                return 'https://www.youtube.com/embed/'+match[2];
            } else {
                return 'error';
            }
            
        },
        getStyle: function(){
            return {
                backgroundColor : this.styleVideo.backgroundColor,
                borderRadius: this.styleVideo.borderRadius + 'px',
                border: this.styleVideo.border.width + 'px '+this.styleVideo.border.type +' '+this.styleVideo.border.color
            }
        },
        getStyleWrap:function(){
            if(this.styleVideo.alignBlock == 'center'){
            var style = {
                top: this.styleVideo.top,
                // width: this.styleInput.width ,
                // height: this.styleInput.height ,
                transform: 'rotate(' + this.styleVideo.rotation + 'deg)',
                left : '50%',
                transform : 'translateX(-50%)',
                maxWidth : '90%',
                zIndex : this.isActive ? 99999 : 1,
            }
            }else if( this.styleVideo.alignBlock == 'left'){
            var style = {
                top: this.styleVideo.top,
                // width: this.styleInput.width ,
                // height: this.styleInput.height ,
                transform: 'rotate(' + this.styleVideo.rotation + 'deg)',
                left : 0,
                transform :'none',
                right : 'auto',
                maxWidth : '90%',
                zIndex : this.isActive ? 99999 : 1,
            }
            }else if( this.styleVideo.alignBlock == 'right'){
            var style = {
                top: this.styleVideo.top,
                // width: this.styleInput.width ,
                // height: this.styleInput.height ,
                transform: 'rotate(' + this.styleVideo.rotation + 'deg)',
                right : 0,
                transform :'none',
                left : 'auto',
                maxWidth : '90%',
                zIndex : this.isActive ? 99999 : 1,
            }
            }else{
            return {
                left: this.styleVideo.left,
                top: this.styleVideo.top,
                // width: this.styleInput.width ,
                // height: this.styleInput.height ,
                transform: 'rotate(' + this.styleVideo.rotation + 'deg)',
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
    .re-iframe-video{
        width: 100%;
        height: 100%;
    }
</style>