<template>
    <li v-click-outside="deActive" :class="{active : active}" @click="enableActive">
        <span>{{n}}</span>
    </li>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import {bus} from '../../main'
    export default {
        data:function(){
            return{
                active : false,
            }
        },
        props:{
            n :{
                type : Number,
            }
        },
        methods:{
            enableActive:function(){
                 this.active = true
                 this.$store.commit('setSelectRow',this.n)
                 bus.$emit('enableOptionRow',true)
            },
            deActive:function(){
                this.active = false
            }
        },
        directives: {
            ClickOutside
        },
    }
</script>

<style  scoped>
    li{
        width: 100%;
    }
    span{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        color: #ffffff;
        user-select: none;
    }
    li.active >span {
        color: #000000; 
    }
</style>