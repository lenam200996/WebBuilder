<template>
    <divDragResize
    :id="properties.id"
    :resizable="false"
    :rotatable="false"
    :draggable="false"
    :class="' md-layout-item '+classResponsive" 
    @select="select"
    @deselect="deselect"
    v-click-outside="deselect"
    :selected="isActive"
    :style="{
        background : getBackground,
        backgroundPosition: properties.bgPos,
        backgroundSize:  properties.bgSize,
        backgroundRepeat:' no-repeat',
        zIndex : isActive? 9999 : 1,
        width : '100%',
        height: properties.height*properties.sizeRow/100 + 'px',
        margin : 0,
        position: 'relative'
    }"
    >
     <!-- backgroundSize: '100% 100%', -->
<transition name="bounce">    
    <e-option-button-option v-if="isActive && !swapSlide"
        :isGrid="true" 
        @edit="edit" 
        @disableEdit="onBlur"
        @deleteItem="deleteItem"
        :styleBtn="styleBtn"
        :elementName="'COLUMN'"
    ></e-option-button-option>
</transition>
        <slot></slot>
    </divDragResize>
</template>

<script>
import {bus} from '../../main'
    export default {
        props:{
            properties:{
                type:Object,
                required:true
            },
           swapSlide:{
                type : Boolean,
                default :false
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
                },
                    classResponsive : ''
            }
        },
        computed:{
            getBackground : function(){
                return this.properties.bgImg.indexOf('#') != -1 ?this.properties.bgImg : 'url('+this.properties.bgImg +')';
            },
            getColumnSelected : function(){
                return this.$store.getters.getSelectColumn
            },
            getActiveRow:function(){
            return this.$store.getters.getRowSelected
            },
            getSizeColumn:function(){
                return this.properties.size
            },

        },
        mounted:function(){
            if(this.properties.size == 100){
                this.classResponsive = 'md-large-size-'+this.properties.size
            }
            else if(this.properties.size >50){
                this.classResponsive = 'md-large-size-'+this.properties.size+' md-medium-size-33 md-small-size-50 md-xsmall-size-100'
            }
            else{
                this.classResponsive = 'md-large-size-'+this.properties.size+' md-medium-size-'+this.properties.size+' md-small-size-50 md-xsmall-size-100'
            }
            // window.addEventListener('contextmenu',()=>{return false})
            window.oncontextmenu = function(){
                return false
            }
        },
        watch:{
            getSizeColumn:function(val){
                if(val == 100){
                    this.classResponsive = 'md-large-size-'+this.properties.size
                }
                else if(val >50){
                    this.classResponsive = 'md-large-size-'+val+' md-medium-size-33 md-small-size-50 md-xsmall-size-100'
                }
                else{
                    this.classResponsive = 'md-large-size-'+val+' md-medium-size-'+val+' md-small-size-50 md-xsmall-size-100'
                }
            }
        },
        methods:{
            select : function(){
                this.$store.commit('setSelectId',this.properties.id)
                this.$store.commit('setSelectColumn',this.properties.columnIndex)
                this.$store.commit('setSelectRow',this.properties.rowIndex)
                this.isActive = true
                bus.$emit('gridActive',true)
            },
            deselect:function(){
                this.isActive = false
            },
            deleteItem:function(){
                this.$store.commit('deleteColumn',{index : this.properties.columnIndex , id :this.properties.id ,row :this.properties.rowIndex})
                 bus.$emit('closeOptionElement',{name : 'Column',id:this.properties.id})
            },
            edit:function(ev){
                bus.$emit('openOption',{name : 'Column',id:this.properties.id,index: this.properties.columnIndex,x:ev.x})
            },
            onBlur:function(){
                 bus.$emit('closeOptionElement',{name : 'Column',id:this.properties.id})
            }
            
        }       
    }
</script>

<style scoped>

</style>