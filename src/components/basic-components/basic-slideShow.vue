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
        <e-option-button-option v-if="isActive"
            :isGrid="false"
            :isSection="true"
            @edit="edit" 
            @disableEdit="onBlur"
            @deleteItem="deleteItem"
            @swapSection="swapSection"
            :styleBtn="styleBtn"
            :elementName="'SLIDE'"
        ></e-option-button-option> 
        <!-- <div class="navSlide">
            <md-button class="md-icon-button" @click="prev"><md-icon>skip_previous</md-icon></md-button>
            <md-button class="md-icon-button" @click="next"><md-icon>skip_next</md-icon></md-button>
        </div> -->
        
</div>
</template>

<script>
import { bus } from "../../main";

    export default {
        
        props: {
            id:{
                type :Number,
                required : true 
            },
           
        },
        data() {
            return {
                isActive : true,
                styleBtn:{
                    width : 245 +'px',
                    height: 25 +'px',
                    position: 'absolute',
                    zIndex: '99999',
                    bottom: 0+ 'px!important',
                    // right: -10 +'px !important',
                    top : 'auto',
                    left: 0
                },
            }
        },
        mounted(){
            this.$refs.slider.$emit('autoplayStart',1000)
        },
        methods:{
            deleteItem:function(){
                this.$store.commit('deleteSection',this.id)
                bus.$emit('closeOptionElement',{name : 'SLIDE',id:this.id})
            },
            edit:function(){
                bus.$emit('openOption',{name : 'SLIDE',id:this.id,index: -1})
                this.$store.commit('setSelectSlideId',this.id)
            },
            onBlur:function(){
                bus.$emit('closeOptionElement',{name : 'SLIDE',id:this.id})
            },
            swapSection:function(ev){
                this.$store.commit('swapSection',{toIndex : ev})
            },
             next() {
            this.$refs.slick.next();
            },
    
            prev() {
                this.$refs.slick.prev();
            },
        }
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