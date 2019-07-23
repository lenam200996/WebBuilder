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
        <iframe :class="'md-elevation-'+properties.styleVideo.shadow" class="re-iframe-video" :src="getUrl" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                required:true
            },
    },
    data() {
      return {
        isActive : false,
        name:'VIDEO'
      }
    },
    extends:mixins.mixin,
    computed:{
        getUrl:function() {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var match = this.properties.styleVideo.url.match(regExp);

            if (match && match[2].length == 11) {
                return 'https://www.youtube.com/embed/'+match[2]+"?autoplay="+this.properties.styleVideo.autoPlay+"&playlist="+match[2]+"&loop="+this.properties.styleVideo.loop;
            } else {
                return 'error';
            }
            
        },
        getStyle: function(){
            return {
                backgroundColor : this.properties.styleVideo.backgroundColor,
                borderRadius: this.properties.styleVideo.borderRadius + 'px',
                border: this.properties.styleVideo.border.width + 'px '+this.properties.styleVideo.border.type +' '+this.properties.styleVideo.border.color
            }
        },
        getStyleWrap:function(){
            if(this.properties.styleVideo.alignBlock == 'center'){
            var style = {
                top: this.properties.styleVideo.top,
                transform: 'rotate(' + this.properties.styleVideo.rotation + 'deg)',
                left : '50%',
                transform : 'translateX(-50%)',
                maxWidth : '90%',
                zIndex : this.isActive ? 99999 : 1,
            }
            }else if( this.properties.styleVideo.alignBlock == 'left'){
            var style = {
                top: this.properties.styleVideo.top,
                transform: 'rotate(' + this.properties.styleVideo.rotation + 'deg)',
                left : 0,
                transform :'none',
                right : 'auto',
                maxWidth : '90%',
                zIndex : this.isActive ? 99999 : 1,
            }
            }else if( this.properties.styleVideo.alignBlock == 'right'){
            var style = {
                top: this.properties.styleVideo.top,
                transform: 'rotate(' + this.properties.styleVideo.rotation + 'deg)',
                right : 0,
                transform :'none',
                left : 'auto',
                maxWidth : '90%',
                zIndex : this.isActive ? 99999 : 1,
            }
            }else{
            return {
                left: this.properties.styleVideo.left,
                top: this.properties.styleVideo.top,
                transform: 'rotate(' + this.properties.styleVideo.rotation + 'deg)',
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