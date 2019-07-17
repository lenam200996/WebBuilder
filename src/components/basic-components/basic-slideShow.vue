<template>
<div class="row md-layout">
    <slick
    ref="slick"
    :options="{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                }">
                <slot></slot>
    </slick>
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
            // properties:{
            //     type:Object,
            //     required:true
            // },
        },
        data() {
            return {
                isActive : true,
                styleBtn:{
                    width : 245 +'px',
                    height: 25 +'px',
                    position: 'absolute',
                    zIndex: '99999',
                    bottom: -30 + 'px!important',
                    // right: -10 +'px !important',
                    top : 'auto',
                    left: 0
                },
            }
        },
        methods:{
            deleteItem:function(){
                this.$store.commit('deleteSection',this.id)
                bus.$emit('closeOptionElement',{name : 'SLIDE',id:this.id})
            },
            edit:function(){
                bus.$emit('openOption',{name : 'SLIDE',id:this.id,index: -1})
            },
            onBlur:function(){
                bus.$emit('closeOptionElement',{name : 'SLIDE',id:this.id})
            },
            swapSection:function(ev){
                this.$store.commit('swapSection',{toIndex : ev})
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
</style>