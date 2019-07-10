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
    :class="'column-'+size" 
    @select="select"
    @deselect="deselect"
    style="width:100%;height:100%;margin:0;position:relative;"
    
    :selected="$store.getters.getSelectID == id"
    :style="{background : getBackground,
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    backgroundRepeat:' no-repeat',
    zIndex : isActive? 9999 : 1,
    }"
    >
    <!-- +' col-md-12'"  -->
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
                default : 100,
                
            },
            columnIndex:{
                type : Number,
                required :true,
            },
            bgImg : {
                type :String,
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
        computed:{
            getBackground : function(){
                return this.bgImg.includes('#')?this.bgImg : 'url('+this.bgImg +')';
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
                bus.$emit('openOption',{name : 'Column',id:this.id,index: this.columnIndex})
            },
            onBlur:function(){
                 bus.$emit('closeOptionElement',{name : 'Column',id:this.id})
            }
            
        }       
    }
</script>

<style scoped>

</style>