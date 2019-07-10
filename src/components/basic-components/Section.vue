<template>
    <dragResize
    :id="id"
    class="row"
    :resizable="false"
    :rotatable="false"
    @select="select"
    @deselect="deselect"
    :style ="getStyle"
    style="width:100%;margin:0;position:relative"
    >
    <div :class="getStretched">
        <div class="row" :style ="getStyle" style="width:100%;margin:0;position:relative">
            <slot></slot>
            <btnOption v-if="isActive"
            :isGrid="true" 
            @edit="edit" 
            @disableEdit="onBlur"
            @deleteItem="deleteItem"
            :styleBtn="styleBtn"
            :elementName="'SECTION'"
            ></btnOption> 
        </div>
    </div>
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
        computed:{
            getStyle :function(){
                return{
                    backgroundColor :this.styleSec.backgroundColor,
                    // boxShadow : this.styleSec.boxShadow,
                    margin : this.styleSec.margin,
                    height : this.styleSec.height + 'px'
                }
            },
            getStretched:function(){
                return this.styleSec.stretched
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