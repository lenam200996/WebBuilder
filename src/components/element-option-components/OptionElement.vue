<template>
 
    <div class="wrap-option" :style="{top: top+'px', right:right+'px'}">
        <div class="close" @click="closeOptionElement"><span>x</span></div>
        <h2  @mousedown="enableDrag" @mouseup="isDrag =false" @mousemove="drag">{{name}} OPTIONS</h2>
        <div-option-item :name="name" :id="id"></div-option-item>
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
        width : 25%;
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
    }
    .close{
        width: 20px;
        height: 20px;
        background: #ffffff;
        box-shadow: 0 2px 5px 0 rgba(22, 45, 61, 0.58);
        border-radius: 50%;
        padding: 5px;
        position: relative;
        cursor: pointer;
    }
    .close>span{
        font-size: 15px;
        position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
        left: 50%;
        color:red;
        cursor: pointer;
    }
</style>