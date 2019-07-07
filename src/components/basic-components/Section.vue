<template>
    <dragResize
    :id="id"
    :x = 150
    :y = 100
    :angle=0
    :w=300
    :h=200
    class="row"
    :resizable="false"
    :rotatable="false"
    @select="select"
    @deselect="deselect"
    :style ="styleSec"
    
    style="width:100%;margin:0;position:relative"
    >
        <slot></slot>
        <btnOption v-if="isActive"
        :isGrid="true" 
        @edit="edit" 
        @disableEdit="onBlur"
        @deleteItem="deleteItem"
        :styleBtn="styleBtn"
        :elementName="'SECTION'"
        ></btnOption>
    </dragResize>
</template>

<script>
import {bus} from '../../main'
    export default {
        props:{
            id:{
                type :Number,
                required : true
            },
            attribute : {
                type : Object,
                // required : true
            },
            styleSec : {
                type : Object
            }
        },
        data:function(){
            return {
                isActive : false,
                styleBtn:{
                    width : 215 +'px',
                    height: 25 +'px',
                    position: 'absolute',
                    zIndex: '99999',
                    bottom: 0 + '!important',
                    right: -10 +'px !important',
                    top : 'auto'
                }
            }
        },
        mounted(){
            bus.$on('gridActive',()=>{
                this.isActive = true
            })
        },
        methods: {
            select:function(){
                this.isActive = true
            },
            deselect:function(){
                this.isActive = false
            },
            deleteItem:function(){
                this.$store.commit('deleteSection',this.id)
            },
            edit:function(){
                bus.$emit('openOption',{name : 'SECTION',id:this.id,index: -1})
            },
            onBlur:function(){
                bus.$emit('closeOptionElement',{name : 'SECTION',id:this.id})
            }

        }
    }
</script>

<style scoped>

</style>