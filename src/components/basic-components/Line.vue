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
    <div :style="getStyle" class="re-line">
        
    </div>
        <btnOption v-if="isActive"
        :isGrid="false" 
        @edit="editOption" 
        @disableEdit="onBlur"
        @deleteItem="deleteItem"
        @preColumn="preColumn"
        @nextColumn="nextColumn"
        :elementName="'LINE'"
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
      styleLine :{
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
         bus.$emit('openOption',{name : 'LINE',id:this.id,index : -1})
        },
        onBlur() {
            bus.$emit('closeOptionElement',{name : 'LINE',id:this.id})
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
         height : this.styleLine.size +'px',
         backgroundColor : this.styleLine.backgroundColor
        }
        },
        getStyleWrap:function(){
            if(this.styleLine.alignBlock == 'center'){
            var style = {
                top: this.styleLine.top,
                width: this.styleLine.width ,
                height: this.styleLine.height ,
                transform: 'rotate(' + this.styleLine.rotation + 'deg)',
                left : '50%',
                transform : 'translateX(-50%)',
                maxWidth : '90%',
            }
            }else if( this.styleLine.alignBlock == 'left'){
            var style = {
                top: this.styleLine.top,
                width: this.styleLine.width ,
                height: this.styleLine.height ,
                transform: 'rotate(' + this.styleLine.rotation + 'deg)',
                left : 0,
                transform :'none',
                right : 'auto',
            }
            }else if( this.styleLine.alignBlock == 'right'){
            var style = {
                top: this.styleLine.top,
                width: this.styleLine.width ,
                height: this.styleLine.height ,
                transform: 'rotate(' + this.styleLine.rotation + 'deg)',
                right : 0,
                transform :'none',
                left : 'auto',
            }
            }else{
            return {
                left: this.styleLine.left,
                top: this.styleLine.top,
                width: this.styleLine.width ,
                height: this.styleLine.height ,
                transform: 'rotate(' + this.styleLine.rotation + 'deg)',
            };
            }
            return style
        }
        },
    }
</script>

<style  scoped>
    .re-line{
        width: 100%;
    }
</style>