<template>    
<keep-alive v-if="!isPreview">
  <div id="app" class="container-fluid" >
    <main-option-top-menu></main-option-top-menu>
    <main-option-tool-add-element></main-option-tool-add-element>
    <e-option-option-element v-if="option.is" :name="option.name" :id="option.id" :index="option.index"></e-option-option-element>
    <basic-section  v-for="section in getSections" :id="section.id" :key="section.id" :styleSec="section.style" :position="section.position">
      <basic-row v-for="row in section.row" :key="row.index" :id="section.id" :height="row.size" :bg="row.bg" :rowIndex="row.index">
         <basic-column v-for="col in section.layout.filter(itemCol => itemCol.row == row.index)" :key="col.index" :properties="getPropertiesColumn(section,row,col)"  >
              <basic-text v-for="text in getElements.filter(item => item.type == 'text' && item.parentId == section.id && item.column == col.index && item.row == row.index)" :properties="getPropertiesText(text)" :key="text.id"></basic-text>
              <basic-image v-for="image in getElements.filter(item => item.type == 'img' && item.parentId == section.id && item.column == col.index && item.row == row.index)" :key="image.id" :properties="getPropertiesImage(image)"></basic-image>
              <basic-button v-for="btn in getElements.filter(item => item.type == 'btn' && item.parentId == section.id && item.column == col.index && item.row == row.index)" :key="btn.id" :properties="getPropertiesButton(btn)"></basic-button>
              <basic-line-horizontal v-for="line in getElements.filter(item => item.type == 'lineHorizontal' && item.parentId == section.id && item.column == col.index && item.row == row.index)" :key="line.id" :properties="getPropertiesLineHorizontal(line)" ></basic-line-horizontal>
              <basic-line-vertical v-for="line in getElements.filter(item => item.type == 'lineVertical' && item.parentId == section.id && item.column == col.index && item.row == row.index)" :key="line.id" :properties="getPropertiesLineVertical(line)"></basic-line-vertical>
              <basic-slide-show v-for="slide in getElements.filter(item => item.type == 'slider' && item.parentId == section.id && item.column == col.index && item.row == row.index)"  :key="slide.id" :properties="getPropertiesSlide(section,slide)"></basic-slide-show>
              <basic-box v-for="box in getElements.filter(item => item.type == 'box' && item.parentId == section.id && item.column == col.index && item.row == row.index)"  :key="box.id" :properties="getPropertiesBox(box)"></basic-box>
              <basic-field v-for="field in getElements.filter(item => item.type == 'field' && item.parentId == section.id && item.column == col.index && item.row == row.index)"  :key="field.id" :properties="getPropertiesField(field)"></basic-field>
              <basic-video v-for="video in getElements.filter(item => item.type == 'video' && item.parentId == section.id && item.column == col.index && item.row == row.index)"  :key="video.id" :properties="getPropertiesVideo(video)"></basic-video>
        </basic-column>
      </basic-row>
    </basic-section>
   </div>
</keep-alive>
<keep-alive v-else>
  <div id="app" class="container-fluid" >
    <top-menu></top-menu>
    <router-view/>      
  </div>  
</keep-alive>

</template>
<script>
import {bus} from './main'
export default {
    data:function(){
      return {
        option :{
            is : false,
            name : '',
            id : '',
            index :1
          },
          isPreview : false,
          locale : 'vn'
      }
    },
    computed:{
      getElements:function(){
        return this.$store.getters.getElementItems
      },
      getSections:function(){
        return this.getElements.filter( item => item.type === 'section')
      },

    }, 
    methods:{
      getPropertiesColumn:function(section,row,col){
        return {id: section.id,size:col.size,bgImg:col.bg,height:section.style.height,sizeRow: row.size,rowIndex:row.index,columnIndex:col.index}
      },
      getPropertiesText:function(text){
        return {id :text.id,  styleText:text.style,position:text.position,text:text.value}
      },
      getPropertiesImage:function(image){
        return {id:image.id,styleImg:image.style,position:image.position,url:image.url}
      },
      getPropertiesButton :function(btn){
        return { id:btn.id,styleButton:btn.style,position:btn.position,text:btn.style.text}
      },
      getPropertiesLineHorizontal:function(line){
        return {  id:line.id,styleLine:line.style,position:line.position}
      },
      getPropertiesLineVertical:function(line){
        return {id:line.id,styleLine:line.style,position:line.position}
      },
      getPropertiesSlide:function(section,slide){
        return {height:section.style.height,list:slide.slideItem}
      },
      getPropertiesBox:function(box){
        return {id:box.id,styleBox:box.style,position:box.position}
      },
      getPropertiesField:function(field){
        return {id:field.id,styleInput:field.style,position:field.position}
      },
      getPropertiesVideo:function(video){
        return {id:video.id,styleVideo:video.style,position:video.position}
      }

    },
    watch:{
      locale:function(val){
        this.$i18n.locale = val
      },
    },
    mounted(){
      bus.$on('openOption',({name,id,index})=>{
        this.option.is = true
        this.option.name = name
        this.option.id = id
        this.option.index = index
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
      window.addEventListener('resize',(ev)=>{
      this.$store.commit('setWindowSize',{height :  ev.currentTarget.innerHeight , width :  ev.currentTarget.innerWidth})
      })
    },  
  }
</script>


<style>
.container-fluid{
  padding: 0; 
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.drr {
  z-index: 999;
}
.row{
  padding: 0;
  margin: 0;
}

.column-25,.column-50,
.column-75,.column-33,
.column-100,.column-20,
.column-40,.column-60,
.column-66 ,.column-80
{
  position: relative;
  height: 100%;
  display: flex;
  background-position: center !important;
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;
}
.column-40{
  max-width: 40%;
}
.column-60{
  max-width: 60%;
}
.column-66{
  max-width: 66.66%;
}
.column-80{
  max-width: 80%;
}
.column-100{
  max-width: 100%;
}
.column-50{
  max-width: 50%;
}
.column-75{
  max-width: 75%;
}
.column-33{
  max-width: 33.33%;
}
.column-25{
  max-width: 25%;
}
.column-20{
  max-width:20%;
}

@media only screen and (max-width: 992px){
  .column-100{
  max-width: 100%;
  }
  .column-75{
    max-width: 66.66%;
  }
  .column-50{
    max-width: 50%;
  }
  .column-33{
    max-width: 33.33%;
  }
  .column-25{
    max-width: 33.33%;
  }
  .column-20{
    max-width:33.33%;
  }
  .column-40{
  max-width: 40%;
  }
  .column-60{
    max-width: 60%;
  }
  .column-66{
    max-width: 66.66%;
  }
  .column-80{
    max-width: 80%;
  }
}
@media only screen and (max-width: 768px){
  .column-100{
  max-width: 100%;
  }
  .column-50{
    max-width: 100%;
  }
  .column-75{
    max-width: 100%;
  }
  .column-33{
    max-width: 100%;
  }
  .column-25{
    max-width: 100%;
  }
  .column-20{
    max-width:100%;
  }
  .column-40{
    max-width: 100%;
  }
  .column-60{
    max-width: 100%;
  }
  .column-66{
    max-width:100%;
  }
  .column-80{
    max-width: 100%;
  }
}

@media only screen and (max-width: 576px){
  .column-100{
  max-width: 100%;
  }
  .column-50{
    max-width: 100%;
  }
  .column-75{
    max-width: 100%;
  }
  .column-33{
    max-width: 100%;
  }
  .column-25{
    max-width: 100%;
  }
  .column-20{
    max-width:100%;
  }
  .column-40{
  max-width: 100%;
}
.column-60{
  max-width: 100%;
}
.column-66{
  max-width: 100%;
}
.column-80{
  max-width: 100%;
}
}
.left-vertical-tabs{
  width: 150px;
  background-color: #ffffff;
  border-radius: 0 0 0 10px;
  height: 450px;
  position: fixed;
  left: 0;
  top:60px;
  border-left: 1px solid #000000;
  border-bottom: 1px solid #000000;
}
.tab >a>span{
  color: #000000;
  user-select: none;
}
.tab.active{
  border-radius: 0;
}
.nav-pills>li{
  width: 100%;
}
.vue-tabs.stacked{
  position: relative;
}
.nav-pills>li{
  margin-bottom: 10px;
}
.tab-content.right-text-tabs{
  width: 70%;
  position: absolute;
  right: 0;
  top: 2px;
  height: 450px;
  overflow-y: scroll;
  background-color: #3899ec;
  border-radius: 0 0 10px 0;
  border-right: 1px solid #000000;
  border-bottom: 1px solid #000000;
}
.tab-content.right-text-tabs>section>ul{
  list-style-type: none;
  width: 100%;
  padding: 0;
  margin: 0;
}

.tab-content.right-text-tabs>section>ul>li  {
  color: #ffffff;
  width: 100%;
  /* margin: 15px 0;  */
  position: relative;
  cursor: pointer;
  padding: 10px 0 10px 10px;
  text-align: left;
  
}
.tab-content.right-text-tabs>section>ul>li.item-group-list:hover{
  color: red;
}

.tab-content.right-text-tabs>section>ul>li:after{
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #ffffff;
}

.group-list{
  user-select: none;
  text-align: left;
  margin: 0 !important;
  position: relative;
}
.group-list::after{
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #ffffff;
}
.group-list>span{
  padding-left: 5px;
  /* color: #000000; */
  position: relative;
  color: #f1fd46;
  text-transform: uppercase;
}
 ::-webkit-scrollbar {
        display: none;
        }
.slider{
  width : 100% !important;
  height : 100% !important;
}
.vue-tabs .nav-pills > li > a{
  padding: 0 !important;
}
.nav-pills>li{
  margin-bottom: 0 !important;
}

input {
  padding: 0 5px;
}

.ivu-icon{
  font-size: 16px;
}
.ivu-icon-md-trash{
  color: red;
}
.ivu-icon-ios-brush{
  color: green;
}
.ivu-icon-ios-close-circle,.ivu-icon-md-arrow-dropleft,.ivu-icon-md-arrow-dropright{
  font-size: 24px;
}
.ivu-icon-md-arrow-dropleft,.ivu-icon-md-arrow-dropright{
  color:blue;
}
</style>
