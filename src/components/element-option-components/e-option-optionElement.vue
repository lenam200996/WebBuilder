<template>
 
    <div class="wrap-option" :style="{top: top+'px', right:right+'px'}">
        <div class="close" @click="closeOptionElement"><Icon type="ios-close-circle" /></div>
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
                right: 20,   
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
                    this.right -= ev.clientX -this.x
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
        height: 400px;
        overflow-y: scroll;
        width : 400px;
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.96) 0%,
            rgba(238, 238, 238, 0.96) 100%
        );
        box-shadow: 0 2px 5px 0 rgba(22, 45, 61, 0.58);
        border-radius: 10px 10px 0 0;
        opacity : 1;
    }
    ::-webkit-scrollbar {
        display: none;
        }

    .wrap-option > h2 {
        cursor: all-scroll;
        height: 50px;
        line-height: 50px;
        text-align: center;
        width: 100%;
        background-color: cornflowerblue;
        padding: 5px 0;
        font-size: 20px;
        color: #ffffff;
        text-transform: uppercase;
        border-radius: 10px 10px 0 0;
        margin: 0 !important;
    }
    .close{
        position: relative;
        cursor: pointer;
    }
    .close>i{
        color: red;
        opacity: 1;
        text-shadow: none;
    }
    
    
</style>