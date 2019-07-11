<template>
    <dragResize
    :id="id"
    :x ="position.x"
    :y ="position.y"
    :angle="position.angle"
    :w="position.w"
    :h="position.h"
    class="row"
    :resizable="false"
    :rotatable="false"
    @select="select"
    @deselect="deselect"
    :style ="getStyle"
    style="width:100%;margin:0;position:absolute;z-index:1"
    >
    <div :class="getStretched">
        <div v-if="isActive" class="drag-div-top">
        <img src="../../assets/drag-arrow.svg" alt=""> Drag
        </div>
        <div class="row" :style ="getStyle" style="width:100%;margin:0;position:relative">
            <slot></slot>
            <btnOption v-if="isActive"
            :isGrid="true" 
            @edit="edit" 
            @disableEdit="onBlur"
            @deleteItem="deleteItem"
            :styleBtn="styleBtn"
            :elementName="'SECTION'"
            ></btnOption> 
        </div>
    </div>
    </dragResize>
   
</template>

<script>
import {bus} from '../../main'
    export default {
        props:{
            id:{
                type :Number,
                required : true
            },
            position : {
                type : Object,
                // required : true
            },
            styleSec : {
                type : Object
            }
        },
        data:function(){
            return {
                isActive : false,
                styleBtn:{
                    width : 215 +'px',
                    height: 25 +'px',
                    position: 'absolute',
                    zIndex: '99999',
                    bottom: 0 + '!important',
                    right: -10 +'px !important',
                    top : 'auto'
                },
               
            }
        },
        computed:{
           
            getStyle :function(){
                return{
                    backgroundColor :this.styleSec.backgroundColor,
                    // boxShadow : this.styleSec.boxShadow,
                    margin : this.styleSec.margin, 
                    left:0,
                    // height : this.getWindowSize.width <= 768 ? (this.styleSec.height*this.$store.getters.getNumColumnById(this.id)) +'px' :this.styleSec.height + 'px'
                }
            },
            getStretched:function(){
                return this.styleSec.stretched
            },

        },
        mounted(){
            bus.$on('gridActive',()=>{
                this.isActive = true
            })
           
            
        },
        methods: {
           
            select:function(){
                this.isActive = true
            },
            deselect:function(){
                this.isActive = false
            },
            deleteItem:function(){
                this.$store.commit('deleteSection',this.id)
            },
            edit:function(){
                bus.$emit('openOption',{name : 'SECTION',id:this.id,index: -1})
            },
            onBlur:function(){
                bus.$emit('closeOptionElement',{name : 'SECTION',id:this.id})
            }

        },
        watch:{
          
        }
    }
</script>

<style scoped>
    .drag-div-top{
         width: 80px;
        height: 30px;
        border-radius: 15px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999999;
        background: linear-gradient(to bottom,rgba(255, 255, 255, 0.96) 0%,rgba(238, 238, 238, 0.96) 100%);
        box-shadow: 0 2px 5px 0 rgba(22, 45, 61, 0.58);
        padding-top: 2px;
        cursor:ns-resize;
    }
    .drag-div-top{ 
        top: -15px;
    }

    .drag-div-top>img{
        height: 20px;
        width: 20px;
        opacity: 0.5;
    }
</style>