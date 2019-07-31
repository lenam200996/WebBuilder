<template>    
  <div class="container-fluid" >
    <basic-menu></basic-menu>
    <render-section  v-for="section in getSections" :id="section.id" :key="section.id" :styleSec="section.style" :position="section.position" :swapSlide="section.swapSlide">
      <render-row v-for="row in section.row" :key="row.index" :id="section.id" :height="row.size" :bg="row.bg" :rowIndex="row.index" :swapSlide="section.swapSlide">
         <render-column v-for="col in section.layout.filter(itemCol => itemCol.row == row.index)" :key="col.index" :properties="getPropertiesColumn(section,row,col)"  :swapSlide="section.swapSlide">
              <render-text v-for="text in getElements.filter(item => item.type == 'text' && item.parentId == section.id && item.column == col.index && item.row == row.index)" :properties="getPropertiesText(text)" :key="text.id"></render-text>
              <render-image v-for="image in getElements.filter(item => item.type == 'img' && item.parentId == section.id && item.column == col.index && item.row == row.index)" :key="image.id" :properties="getPropertiesImage(image)"></render-image>
              <render-button v-for="btn in getElements.filter(item => item.type == 'btn' && item.parentId == section.id && item.column == col.index && item.row == row.index)" :key="btn.id" :properties="getPropertiesButton(btn)"></render-button>
              <render-line-horizontal v-for="line in getElements.filter(item => item.type == 'lineHorizontal' && item.parentId == section.id && item.column == col.index && item.row == row.index)" :key="line.id" :properties="getPropertiesLineHorizontal(line)" ></render-line-horizontal>
              <render-line-vertical v-for="line in getElements.filter(item => item.type == 'lineVertical' && item.parentId == section.id && item.column == col.index && item.row == row.index)" :key="line.id" :properties="getPropertiesLineVertical(line)"></render-line-vertical>
              
              <render-slide-show v-for="slide in getElements.filter(item => item.type == 'slideshow' && item.parentId == section.id)" :key="slide.id" :id="slide.id">
                  <swiper-slide v-for="sectionC in getElements.filter(item => item.type == 'section' && item.idSlideshow == slide.id).sort(function(a,b){return a.indexSlide - b.indexSlide})" :key="sectionC.id" >
                    <render-section :id="sectionC.id"  :styleSec="sectionC.style" :position="sectionC.position" isItemSlide>
                      <render-row v-for="row in sectionC.row" :key="row.index" :id="sectionC.id" :height="row.size" :bg="row.bg" :rowIndex="row.index">
                        <render-column v-for="col in sectionC.layout.filter(itemCol => itemCol.row == row.index)" :key="col.index" :properties="getPropertiesColumn(sectionC,row,col)"  >
                              <render-text v-for="text in getElements.filter(item => item.type == 'text' && item.parentId == sectionC.id && item.column == col.index && item.row == row.index)" :properties="getPropertiesText(text)" :key="text.id"></render-text>
                              <render-image v-for="image in getElements.filter(item => item.type == 'img' && item.parentId == sectionC.id && item.column == col.index && item.row == row.index)" :key="image.id" :properties="getPropertiesImage(image)"></render-image>
                              <render-button v-for="btn in getElements.filter(item => item.type == 'btn' && item.parentId == sectionC.id && item.column == col.index && item.row == row.index)" :key="btn.id" :properties="getPropertiesButton(btn)"></render-button>
                              <render-line-horizontal v-for="line in getElements.filter(item => item.type == 'lineHorizontal' && item.parentId == sectionC.id && item.column == col.index && item.row == row.index)" :key="line.id" :properties="getPropertiesLineHorizontal(line)" ></render-line-horizontal>
                              <render-line-vertical v-for="line in getElements.filter(item => item.type == 'lineVertical' && item.parentId == sectionC.id && item.column == col.index && item.row == row.index)" :key="line.id" :properties="getPropertiesLineVertical(line)"></render-line-vertical>
                              <render-box v-for="box in getElements.filter(item => item.type == 'box' && item.parentId == sectionC.id && item.column == col.index && item.row == row.index)"  :key="box.id" :properties="getPropertiesBox(box)"></render-box>
                              <render-field v-for="field in getElements.filter(item => item.type == 'field' && item.parentId == sectionC.id && item.column == col.index && item.row == row.index)"  :key="field.id" :properties="getPropertiesField(field)"></render-field>
                              <render-video v-for="video in getElements.filter(item => item.type == 'video' && item.parentId == sectionC.id && item.column == col.index && item.row == row.index)"  :key="video.id" :properties="getPropertiesVideo(video)"></render-video>
                          </render-column>
                        </render-row>
                      </render-section>
                    </swiper-slide>
              </render-slide-show>

              <render-box v-for="box in getElements.filter(item => item.type == 'box' && item.parentId == section.id && item.column == col.index && item.row == row.index)"  :key="box.id" :properties="getPropertiesBox(box)"></render-box>
              <render-field v-for="field in getElements.filter(item => item.type == 'field' && item.parentId == section.id && item.column == col.index && item.row == row.index)"  :key="field.id" :properties="getPropertiesField(field)"></render-field>
              <render-video v-for="video in getElements.filter(item => item.type == 'video' && item.parentId == section.id && item.column == col.index && item.row == row.index)"  :key="video.id" :properties="getPropertiesVideo(video)"></render-video>
        </render-column>
      </render-row>
    </render-section>
    
   </div>

</template>
<script>
import { slider, slideritem } from 'vue-concise-slider'
import {bus} from '../main'
export default {
   
    computed:{
      getElements:function(){
        return this.$store.getters.getElementItems
      },
      getSections:function(){
        return this.getElements.filter( item => item.type === 'section' && item.idSlideshow == null && item.pageIndex == this.$store.getters.getPageIndex)
      },

    }, 
    methods:{
     
      getPropertiesColumn:function(section,row,col){
        return {id: section.id,size:col.size,bgImg:col.bg,height:section.style.height,sizeRow: row.size,rowIndex:row.index,columnIndex:col.index, bgPos : col.bgPosition,bgSize:col.bgSize}
      },
      getPropertiesText:function(text){
        return {id :text.id,  styleText:text.style,position:text.position,text:text.value,parentId : text.parentId,columnIndex : text.column}
      },
      getPropertiesImage:function(image){
        return {id:image.id,styleImg:image.style,position:image.position,url:image.url,parentId : image.parentId,columnIndex : image.column}
      },
      getPropertiesButton :function(btn){
        return { id:btn.id,styleButton:btn.style,position:btn.position,text:btn.style.text,parentId:btn.parentId,columnIndex : btn.column}
      },
      getPropertiesLineHorizontal:function(line){
        return {  id:line.id,styleLine:line.style,position:line.position,parentId:line.parentId,columnIndex : line.column}
      },
      getPropertiesLineVertical:function(line){
        return {id:line.id,styleLine:line.style,position:line.position,parentId:line.parentId,columnIndex : line.column}
      },
      getPropertiesSlide:function(section,slide){
        return {height:section.style.height,list:slide.slideItem}
      },
      getPropertiesBox:function(box){
        return {id:box.id,styleBox:box.style,position:box.position,parentId:box.parentId,columnIndex : box.column}
      },
      getPropertiesField:function(field){
        return {id:field.id,styleInput:field.style,position:field.position,parentId:field.parentId,columnIndex : v.column}
      },
      getPropertiesVideo:function(video){
        return {id:video.id,styleVideo:video.style,position:video.position,parentId:video.parentId,columnIndex : video.column}
      }

    },
   
    
  }
</script>

