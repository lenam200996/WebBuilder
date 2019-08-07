<template>
<divDragResize
            :id="properties.id"
            :column="properties.columnIndex"
            :parentId="properties.parentId"
            
            @select="select"
            @deselect="deselect"
             v-click-outside="deselect"
            :selected="isActive"
            :class="{autoAlign : isAutoAlign}"
            :typeName="name"
            :hasActiveContent="false"
            :style="getStyleSwrap"
            >
            <!-- :x ="properties.position.x"
            :y ="properties.position.y"
            :angle="properties.position.angle"
            :w="properties.position.w"
            :h="properties.position.h" -->
    <div class="container-form" :style="getStyle">
        <basic-section :id="getSection.id" :styleSec="getSection.style" :position="getSection.position" :swapSlide="getSection.swapSlide">
            <basic-row v-for="row in getSection.row" :key="row.index" :id="getSection.id" :height="row.size" :bg="row.bg" :rowIndex="row.index" :swapSlide="getSection.swapSlide">
                <basic-column v-for="col in getSection.layout.filter(itemCol => itemCol.row == row.index)" :key="col.index" :properties="getPropertiesColumn(getSection,row,col)"  :swapSlide="getSection.swapSlide">
                    <basic-component-child :sectionID="getSection.id" :columnIndex="col.index" :rowIndex="row.index"></basic-component-child>
                </basic-column>
            </basic-row>
        </basic-section>
    </div>
    <transition name="bounce">
        <e-option-button-option v-if="isActive"
        :isGrid="false" 
        @edit="editOption" 
        @disableEdit="onBlur"
        @deleteItem="deleteItem"
        @preColumn="preColumn"
        @nextColumn="nextColumn"
        :elementName="name"
        ></e-option-button-option>
</transition>
</divDragResize>
</template>

<script>
import {bus} from '../../main'
import mixins from '../mixins.js'
    export default {
         extends: mixins.mixin,
        props:{
            properties :{
                type : Object,
            }
        },
        data:function(){
            return{
                isActive : false,
                name : 'FORM',
            }
        },
        mounted(){
            console.log(this.getSection)
        },
        computed:{
            getStyle:function(){
                return {
                    backgroundColor : this.properties.style.backgroundColor,
                    zIndex : this.properties.id,
                }
            },
            getSection:function(){
                return this.getElementItems.find(item => item.type == 'section' && item.form == this.properties.id)
            },
            getElementItems:function(){
                return this.$store.getters.getElementItems
            },
            getStyleSwrap:function(){
                return {
                    left: "50%",
                    transform : 'translateX(-50%)',
                    width : '80%'
                }
            }
        },
        methods:{
              getPropertiesColumn:function(section,row,col){
                return {id: section.id,size:col.size,bgImg:col.bg,height:section.style.height,sizeRow: row.size,rowIndex:row.index,columnIndex:col.index, bgPos : col.bgPosition,bgSize:col.bgSize}
            },

        }
    }
</script>

<style scoped>
    .container-form{
        position: absolute;
        width: 100%;
        height: 100%;
       
    }
</style>