<template>
        <div class="wrap-option" :style="{top: top+'px', left:left+'px'}">
            <div class="close" @click="closeOptionElement">
                <span class="icon-close"></span>
            </div>
            <h2  @mousedown="enableDrag" @mouseup="isDrag =false" @mousemove="drag">{{name}} - {{$t('public.setting')}}</h2>
            <e-option-option-element-item :name="name" :id="id" :index="index"></e-option-option-element-item>
        </div>
</template>

<script>
import {bus} from '../../main'
    export default {
        data:function(){
            return{
                isDrag : false,
                x : 0,
                y : 0,
                top : 70,
                left: ((this.$props.xPointer + 500) < (window.innerWidth))?(this.$props.xPointer+100):(window.innerWidth-400),   
            }
           
        },
        props:{
            name : {
                type :String,
                required :true,
            },
            id: {
                type: Number,
                required:true
            },
            index : {
                type : Number
            },
            xPointer:{
                type:Number,
                default: 300
            }
        },
        methods:{
            closeOptionElement:function(){
                bus.$emit('cls',true);
            },
            enableDrag:function(ev){
                this.isDrag = true
                this.x = ev.clientX
                this.y = ev.clientY
            },
            drag:function(ev){
                if(this.isDrag){
                    this.top += ev.clientY - this.y
                    this.left += ev.clientX -this.x
                    this.x = ev.clientX
                    this.y = ev.clientY
                }
            }
        }
    }
</script>

<style scoped>
    .wrap-option{
        position: fixed;
        z-index: 99999;
        height: 500px;
        /* overflow-y: scroll; */
        width : 330px;
        background: #ffffff;
        box-shadow: 0px 3px 15px rgba(55, 67, 85, 0.15);
        opacity : 1;
        color: #374355;
        border-radius: 5px;
    }
    ::-webkit-scrollbar {
        display: none;
        }
    .wrap-option > h2 {
        cursor: all-scroll;
        height: 40px;
        line-height: 40px;
        text-align: center;
        width: 100%;
        background-color: #EB6641;
        font-size: 18px;
        color: #ffffff;
        margin: 0 !important;
        border-radius: 5px;

    }
    .close{
        position: relative;
        cursor: pointer;
    }
    .close>span{
        font-size: 16px;
        margin: 5px;
    }
    .close>span::before{
        color: #ffffff;
    }
    
    
</style>