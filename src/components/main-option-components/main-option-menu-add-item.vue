<template>
     <li class="menu-add-button" :class="{active : isActive&&!isOpenOption,opened:isOpen&&typeOption==name}" @click="openOption(name)" @mousemove="active" @mouseout="deActive">
        <span :class="'icon-'+icon"></span>
        <p>{{title}}</p>
    </li>
</template>

<script>
import {bus} from '../../main.js'
    export default {
        props:{
            isOpenOption:{
                type:Boolean,
                default:false
            },
            title :{
                type:String,
            },
            icon:{
                type : String
            },
            name : {
                type:String
            },
            typeOption:{
                type :String,
               
            }
        },
        mounted(){
            bus.$on('close',()=>{
                this.isOpen = false
                this.isActive = false
            })
          
        },
        data:function(){
            return{
                isActive :false,
                isOpen:false
            }
        },
        methods:{
            active:function(){
                    this.isActive = true
            },
            deActive:function(){
                this.isActive = false
            },

            openOption:function(type){
                this.isOpen = true
                this.$emit('openOption',{type})
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>