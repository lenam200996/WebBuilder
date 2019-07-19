<template>
    <divDragResize
    :id="id"
    
    class="row"
    :class="classS"
    :resizable="false"
    :rotatable="false"
    @select="select"
    @deselect="deselect"
    :style ="getStyle"
    style="width:100%;margin:0;z-index:1"
    >
    <div :class="getStretched"> 
            <slot></slot>
            <e-option-button-option v-if="isActive && !swapSlide"
            :isGrid="false"
            :isSection="true"
            :isItemSlide="true"
            @edit="edit" 
            @disableEdit="onBlur"
            @deleteItem="deleteItem"
            @swapSection="swapSection"
            :styleBtn="styleBtn"
            :elementName="'SECTION'"
            ></e-option-button-option> 
    </div>
    </divDragResize>
   
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
            },
            isItemSlide : {
                type : Boolean,
                default : false
            },
            swapSlide:{
                type : Boolean,
                default :false
            },
            classS:{
                type:String
            }
        },
        data:function(){
            return {
                isActive : false,
                styleBtn:{
                    width : this.$props.isItemSlide?(145 +'px'):(245 +'px'),
                    height: 25 +'px',
                    position: 'absolute',
                    zIndex: '99999',
                    bottom: 0 + '!important',
                    // right: -10 +'px !important',
                    top : 'auto'
                },
               
            }
        },
        computed:{
           
            getStyle :function(){
                return{
                    backgroundColor :this.styleSec.backgroundColor,
                    margin : this.styleSec.margin, 
                    left:0,
                    position : this.isItemSlide ? 'static' : 'relative'
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
            swapSection:function(ev){
                if(isItemSlide){return}
                this.$store.commit('swapSection',{toIndex : ev})
            },
            select:function(){
                this.isActive = true
            },
            deselect:function(){
                this.isActive = false
            },
            deleteItem:function(){
                this.$store.commit('deleteSection',this.id)
                bus.$emit('closeOptionElement',{name : 'SECTION',id:this.id})
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