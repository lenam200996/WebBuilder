<template>    
<keep-alive >
  <div id="app" class="container-fluid"  v-if="!isPreview">
    <main-option-top-menu :openedToolbar="openToolbar"></main-option-top-menu>
    <main-option-menu-add></main-option-menu-add>
    <main-option-toolbar :open="openToolbar"></main-option-toolbar>
    <basic-menu-container editor></basic-menu-container>
    <main-option-ruler></main-option-ruler>
    <transition name="slide-fade"><e-option-option-element v-if="option.is" :name="option.name" :id="option.id" :index="option.index" :xPointer="option.x"></e-option-option-element></transition>
    <basic-section  v-for="section in getSections" :id="section.id" :key="section.id" :styleSec="section.style" :position="section.position" :swapSlide="section.swapSlide">
      <basic-row v-for="row in section.row" :key="row.index" :id="section.id" :height="row.size" :bg="row.bg" :rowIndex="row.index" :swapSlide="section.swapSlide">
        <basic-column v-for="col in section.layout.filter(itemCol => itemCol.row == row.index)" :key="col.index" :properties="getPropertiesColumn(section,row,col)"  :swapSlide="section.swapSlide">
          <basic-container-form  v-for="form in getElements.filter(item => item.type == 'form' && item.parentId == section.id && item.column == col.index && item.row == row.index)" :key="form.id" 
            :properties="{
              id : form.id,
              style : form.style,
              position: form.position,
              columnIndex: col.index,
              parentId: section.id
            }"></basic-container-form>


          <basic-component-child :sectionID="section.id" :columnIndex="col.index" :rowIndex="row.index"></basic-component-child>
          <basic-slide-show v-for="slide in getElements.filter(item => item.type == 'slideshow' && item.parentId == section.id)" :key="slide.id" :id="slide.id">
            <swiper-slide v-for="sectionC in getElements.filter(item => item.type == 'section' && item.idSlideshow == slide.id).sort(function(a,b){return a.indexSlide - b.indexSlide})" :key="sectionC.id" >
              <basic-section :id="sectionC.id"  :styleSec="sectionC.style" :position="sectionC.position" isItemSlide>
                <basic-row v-for="row in sectionC.row" :key="row.index" :id="sectionC.id" :height="row.size" :bg="row.bg" :rowIndex="row.index">
                  <basic-column v-for="col in sectionC.layout.filter(itemCol => itemCol.row == row.index)" :key="col.index" :properties="getPropertiesColumn(sectionC,row,col)"  >
                    <basic-component-child :sectionID="sectionC.id" :columnIndex="col.index" :rowIndex="row.index"></basic-component-child>
                  </basic-column>
                </basic-row>
              </basic-section>
            </swiper-slide>
          </basic-slide-show>
        </basic-column>
      </basic-row>
    </basic-section>
    <basic-footer></basic-footer>
   </div>
  <div id="app" class="container-fluid"  v-else>
    <main-option-top-menu :openedToolbar="openToolbar"></main-option-top-menu>
    <router-view/>      
  </div>  
</keep-alive>

</template>
<script>
import { slider, slideritem } from 'vue-concise-slider'
import {bus} from '../main'
export default {
    data:function(){
      return {
        option :{
            is : false,
            name : '',
            id : '',
            index :1,
            x:200
          },
          isPreview : false,
          openToolbar : true
      }
    },
    computed:{
      getElements:function(){
        return this.$store.getters.getElementItems
      },
      getSections:function(){
        return this.getElements.filter( item => item.type === 'section' && item.idSlideshow == null && item.form == null && item.pageIndex == this.$store.getters.getPageIndex)
      },

    }, 
    methods:{
     
      getPropertiesColumn:function(section,row,col){
        return {id: section.id,size:col.size,bgImg:col.bg,height:section.style.height,sizeRow: row.size,rowIndex:row.index,columnIndex:col.index, bgPos : col.bgPosition,bgSize:col.bgSize}
      },

    },
    created(){
      if(localStorage.length>1){
        this.$store.commit('readStateStorage')
      }
      this.$store.commit('fisrtLoad')
    },
    mounted(){

      bus.$on('openOption',({name,id,index,x})=>{
        this.option.is = true
        this.option.name = name
        this.option.id = id
        this.option.index = index,
        this.option.x = x
      })
      bus.$on('closeOptionElement',({name,id})=>{
        this.option.is = false
        this.option.name = name
        this.option.id = id
      })
      bus.$on('cls',()=>{
        this.option.is = false
      })
      bus.$on('preview',()=>{
        this.isPreview = true
      })
      bus.$on('backEditor',()=>{
        this.isPreview = false
      })
      bus.$on('closeToolbar',()=>{
        this.openToolbar = false
      })
      bus.$on('switchToolbar',(ev)=>{
        this.openToolbar = ev.value
      })
      window.addEventListener('resize',(ev)=>{
      this.$store.commit('setWindowSize',{height :  ev.currentTarget.innerHeight , width :  ev.currentTarget.innerWidth})
      })
     
    },  
  }
</script>

