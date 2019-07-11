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
    <div :style="getStyle" class="re-box">
        
    </div>
        <btnOption v-if="isActive"
        :isGrid="false" 
        @edit="editOption" 
        @disableEdit="onBlur"
        @deleteItem="deleteItem"
        @preColumn="preColumn"
        @nextColumn="nextColumn"
        :elementName="'BOX'"
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
      styleBox :{
        type :Object,

      }
      
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
         bus.$emit('openOption',{name : 'BOX',id:this.id,index : -1})
        },
        onBlur() {
            bus.$emit('closeOptionElement',{name : 'BOX',id:this.id})
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
        getStyle: function(){
        return {
            backgroundColor : this.styleBox.backgroundColor,
            opacity : this.styleBox.opacity,
            border : this.styleBox.border.width +'px '+this.styleBox.border.type+' '+this.styleBox.border.color,
            borderRadius: this.styleBox.borderRadius + 'px',
        }
        },
        getStyleWrap:function(){
            if(this.styleBox.alignBlock == 'center'){
            var style = {
                top: this.styleBox.top,
                width: this.styleBox.width ,
                height: this.styleBox.height ,
                transform: 'rotate(' + this.styleBox.rotation + 'deg)',
                left : '50%',
                transform : 'translateX(-50%)',
                maxWidth : '90%',
            }
            }else if( this.styleBox.alignBlock == 'left'){
            var style = {
                top: this.styleBox.top,
                width: this.styleBox.width ,
                height: this.styleBox.height ,
                transform: 'rotate(' + this.styleBox.rotation + 'deg)',
                left : 0,
                transform :'none',
                right : 'auto',
                maxWidth : '90%',
            }
            }else if( this.styleBox.alignBlock == 'right'){
            var style = {
                top: this.styleBox.top,
                width: this.styleBox.width ,
                height: this.styleBox.height ,
                transform: 'rotate(' + this.styleBox.rotation + 'deg)',
                right : 0,
                transform :'none',
                left : 'auto',
                maxWidth : '90%',
            }
            }else{
            return {
                left: this.styleBox.left,
                top: this.styleBox.top,
                width: this.styleBox.width ,
                height: this.styleBox.height ,
                transform: 'rotate(' + this.styleBox.rotation + 'deg)',
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