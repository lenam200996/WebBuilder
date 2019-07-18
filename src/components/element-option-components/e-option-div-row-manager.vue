<template>
    <div class="div-row-manager">
        <h2>{{$t('option.row_manager')}}</h2>
        <i-button type="success"  class="addColumn" @click="addRow">{{$t('option.add_row')}}</i-button>
        <ul>
            <e-option-row-item v-for="(n,index) in getNumRow" :key="index" :n="n"></e-option-row-item>
        </ul>
        <div class="div-column-manager-option">
            <button v-if="enableOptionRow" @click="deleteRow"><Icon size="26" type="md-trash" /></button>
            <button v-if="enableOptionRow" @click="swapRow('toUp')"><Icon  size="26"  type="md-arrow-round-up" /></button>
            <button v-if="enableOptionRow" @click="swapRow('toDown')"><Icon  size="26"  type="md-arrow-round-down" /></button>
        </div>
    </div>
</template>

<script>
import {bus} from '../../main'

    export default {
        data:function(){
            return{
             enableOptionRow: false
            }
        },
       props :{
           getNumRow :{
               type : Number,
               required :true
           }
       },
       methods:{
           deleteRow:function(){
               this.$emit('deleteRow')
           },
           swapRow:function(toIndex){
               this.$emit('swapRow',{toIndex})
           },
           addRow:function(){
               this.$emit('addRow')
           }
       },
       mounted:function(){
            bus.$on('enableOptionRow',()=>{
                 if(this.getNumRow > 1){
                    this.enableOptionRow = true
                }
            })
       }
    }
    
</script>

<style scoped>
.div-row-manager{
    width: 100%;
}
.div-row-manager>h2{
        margin: 20px auto;
    }
.div-row-manager>button{
        width: 150px;
        height: 40px;
        margin: auto;
        border-radius: 10px;
    }
.div-row-manager>ul{
        width: 100%;
        margin: 10px auto;
    }
 .div-row-manager>ul>li{
         width: 90%;
         height: 60px;
         display: inline-flex;
         background-color: green;
         margin-right: 2px;
         position: relative;
         cursor: pointer;
         margin-bottom: 0;
     }
    .div-row-manager>ul>li:hover{
         background-color: red;
     }
    .div-row-manager>ul>li.active{
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