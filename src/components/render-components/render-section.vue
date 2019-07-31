<template>
    <div
    class="row"
    :class="classS"
    :style ="getStyle"
    style="width:100%;margin:0;z-index:1"
    >
        <div :class="getStretched"> 
            <slot></slot>
        </div>
    </div>
   
</template>

<script>
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
            classS:{
                type:String
            },
            isItemSlide : {
                type : Boolean,
                default : false
            },
            swapSlide:{
                type : Boolean,
                default :false
            },
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