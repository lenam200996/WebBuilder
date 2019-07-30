<template>
    <div class="div-column-manager">
        <h2>{{$t('option.column_manager')}}</h2>
        <i-button type="success" class="addColumn" @click="addColumn">{{$t('option.add_column')}}</i-button>
        <ul>
            <e-option-column-item v-for="(n,index) in getNumColumn" :key="index" :n="n"></e-option-column-item>
        </ul>
        <div class="div-column-manager-option">
            <button v-if="enableOptionColumn" @click="deleteColumn"><Icon size="26" type="md-trash" /></button>
            <button v-if="enableOptionColumn" @click="swapColumn('toLeft')"><Icon size="26" type="ios-arrow-back" /></button>
            <button v-if="enableOptionColumn" @click="swapColumn('toRight')"><Icon size="26" type="ios-arrow-forward" /></button>
        </div>
    </div>
</template>

<script>
    import {bus} from '../../main'

    export default {
        data:function(){
            return{
             enableOptionColumn: false
            }
        },
       props :{
           getNumColumn :{
               type : Number,
               required :true
           }
       },
       methods:{
           deleteColumn:function(){
               this.$emit('deleteRow')
           },
           swapColumn:function(toIndex){
               this.$emit('swapRow',{toIndex})
           },
           addColumn:function(){
               this.$emit('addRow')
           }
       },
       mounted:function(){
            bus.$on('enableOptionColumn',()=>{
                if(this.getNumColumn > 1){
                    this.enableOptionColumn = true
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
         background-color: #374355;
         margin-right: 2px;
         position: relative;
         cursor: pointer;
     }
    
     .div-column-manager>ul>li:hover{
         background-color: #EB6641;
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
        border:1px solid #EB6641;
        margin: 5px;    
    }
</style>