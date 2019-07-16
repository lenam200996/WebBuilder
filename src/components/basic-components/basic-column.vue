<template>
    <divDragResize
    :id="properties.id"
    :resizable="false"
    :rotatable="false"
    :draggable="false"
    :class="'column-'+properties.size" 
    @select="select"
    @deselect="deselect"
    :selected="$store.getters.getSelectID == properties.id" 
    :style="{
        background : getBackground,
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        backgroundRepeat:' no-repeat',
        zIndex : isActive? 9999 : 1,
        width : '100%',
        height: properties.height*properties.sizeRow/100 + 'px',
        margin : 0,
        position: 'relative'
    }"
    >
    <e-option-button-option v-if="isActive"
        :isGrid="true" 
        @edit="edit" 
        @disableEdit="onBlur"
        @deleteItem="deleteItem"
        :styleBtn="styleBtn"
        :elementName="'COLUMN'"
    ></e-option-button-option>
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
        computed:{
            getBackground : function(){
                return this.properties.bgImg.includes('#')?this.properties.bgImg : 'url('+this.properties.bgImg +')';
            },
            getColumnSelected : function(){
                return this.$store.getters.getSelectColumn
            },
            getActiveRow:function(){
            return this.$store.getters.getRowSelected
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
            edit:function(){
                bus.$emit('openOption',{name : 'Column',id:this.properties.id,index: this.properties.columnIndex})
            },
            onBlur:function(){
                 bus.$emit('closeOptionElement',{name : 'Column',id:this.properties.id})
            }
            
        }       
    }
</script>

<style scoped>

</style>