<template>
    <div class="div-column-manager">
        <h2>{{$t('option.item_manager')}}</h2>
        <!-- <i-button type="success" class="addColumn" @click="addItem">{{$t('option.add_item')}}</i-button> -->
        <ul>
            <e-option-slide-item v-for="(n,index) in getNumItemSlide" :key="index" :n="n"></e-option-slide-item>
        </ul>
        <div class="div-column-manager-option">
            <button v-if="enableOptionItem" @click="deleteItem"><Icon size="26" type="md-trash" /></button>
            <button v-if="enableOptionItem" @click="swapItem('toLeft')"><Icon size="26" type="ios-arrow-back" /></button>
            <button v-if="enableOptionItem" @click="swapItem('toRight')"><Icon size="26" type="ios-arrow-forward" /></button>
        </div>
    </div>
</template>

<script>
    import {bus} from '../../main'

    export default {
        data:function(){
            return{
             enableOptionItem: false
            }
        },
       props :{
           getNumItemSlide :{
               type : Number,
               required :true
           }
       },
       methods:{
           deleteItem:function(){
               this.$emit('deleteItem')
           },
           swapItem:function(toIndex){
               this.$emit('swapItem',{toIndex})
           },
           addItem:function(){
               this.$emit('addItem')
           }
       },
       mounted:function(){
            bus.$on('enableOptionColumn',()=>{
                if(this.getNumItemSlide > 1){
                    this.enableOptionItem = true
                }
            })
       }
    }
</script>

<style scoped>
    .div-column-manager{
        width: 100%;
    }

    .div-column-manager>h2{
        margin: 20px auto;
    }
    .div-column-manager>button{
        width: 150px;
        height: 40px;
        margin: auto;
        border-radius: 10px;
    }
    .div-column-manager>ul{
        width: 100%;
        margin: 10px auto;
    }
     .div-column-manager>ul>li{
         width: 16.2%;
         height: 60px;
         display: inline-flex;
         background-color: green;
         margin-right: 2px;
         position: relative;
         cursor: pointer;
     }
    
     .div-column-manager>ul>li:hover{
         background-color: red;
     }
    .div-column-manager>ul>li.active{
        background-color: yellow;
    }
    .div-column-manager-option{
        width: 100%;
        height: 30px;
    }
    .div-column-manager-option>button{
        width: 30px;
        height: 30px;
        background: none;
        border:1px solid green;
        margin: 5px;    
    }
</style>