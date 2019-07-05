<template>
    <dragResize
    :id="id"
    :x = 150
    :y = 100
    :angle=0
    :w=300
    :h=200
    :resizable="false"
    :rotatable="false"
    :draggable="false"
    :class="'col-xl-'+size+' col-md-12'"
    @select="select"
    @deselect="deselect"
    style="width:100%;height:100%;margin:0;position:relative"
    :selected="$store.getters.getSelectID == id"
    
    >
    <btnOption v-if="isActive"
        :isGrid="true" 
        @edit="edit" 
        @disableEdit="onBlur"
        @deleteItem="deleteItem"
        :styleBtn="styleBtn"
        :elementName="'COLUMN'"
    ></btnOption>
        <slot></slot>
    </dragResize>
</template>

<script>
import {bus} from '../../main'
    export default {
        props:{
            id:{
                type:Number,
                required:true
            },
            size : {
                type: Number,
                required :true,
                default : 12,
                validator:function(val){
                    return (val > 0 && val < 13)
                }
            },
            columnIndex:{
                type : Number,
                required :true,
            }
        },
        data:function(){
            return{
                isActive : false,
                styleBtn:{
                     width : 275 +'px',
                    height: 25 +'px',
                    position: 'absolute',
                    zIndex: '99999',
                    top: 0,
                    right:-60 +'px'
                }
            }
        },
        methods:{
            select : function(){
                this.$store.commit('setSelectId',this.id)
                this.$store.commit('setSelectColumn',this.columnIndex)
                this.isActive = true
                bus.$emit('gridActive',true)
            },
            deselect:function(){
                this.isActive = false
                
            },
            deleteItem:function(){
                this.$store.commit('deleteColumn',{index : this.columnIndex , id :this.id })
            },
            edit:function(){
                
            },
            onBlur:function(){

            }
            
        }       
    }
</script>

<style scoped>

</style>