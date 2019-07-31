<template>
<div class="row md-layout">
    <swiper  ref="slider" :options="{
        effect:'slide',
          thresholdDistance: 500,
          thresholdTime: 100,
          autoplay:1000,
          loop:true,
          loopedSlides:1,
          slidesToScroll:1,
          timingFunction: 'ease',
          speed: 300
    }">
        <slot></slot>
    </swiper >
</div>
</template>

<script>

    export default {
        
        props: {
            id:{
                type :Number,
                required : true 
            },
           
        },
        mounted(){
            this.$refs.slider.$emit('autoplayStart',1000)
        },
    }
</script>

<style scoped>
    span{
        position: absolute;
        font-size: 30px;
        color: #000000;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 20px;
        /* background-blend-mode: color-burn; */
    }   
    .blur-div{
        filter: blur(8px);
        width: 50%;
        height: 30%;
        background-color: #ffffff80;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .navSlide{
        position: absolute;
        left: 50%;
        z-index: 999999;
        transform: translateX(-50%);
        top: 0px;
        border-radius: 20px;
    }
    .navSlide>button{
        color: green;
        margin: 5px;
        background-color: #ffffff;
    }
</style>