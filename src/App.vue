<template>    
<keep-alive v-if="!isPreview">
  <div id="app" class="container-fluid" >
    <top-menu></top-menu>
    <tool-add></tool-add>
    <div-option v-if="option.is" :name="option.name" :id="option.id" :index="option.index"></div-option>
    <section-basic  v-for="section in getElements.filter( item => item.type === 'section')" :id="section.id" :key="section.id" :styleSec="section.style">
        <column-basic v-for="col in section.layout" :key="col.index" :columnIndex="col.index"  :id="section.id" :size="col.size" :bgImg="col.bg">
              <text-box v-for="text in getElements.filter(item => item.type == 'text' && item.parentId == section.id && item.column == col.index)" :id ="text.id" :key="text.id" :styleText="text.style" :position="text.position" :text="text.value"></text-box>
              <image-component v-for="image in getElements.filter(item => item.type == 'img' && item.parentId == section.id && item.column == col.index)" :id="image.id" :key="image.id" :styleImg="image.style" :position="image.position" :url="image.url"></image-component>
              <button-component v-for="btn in getElements.filter(item => item.type == 'btn' && item.parentId == section.id && item.column == col.index)" :id="btn.id" :key="btn.id" :styleButton="btn.style" :position="btn.position" :text="btn.style.text"></button-component>
        </column-basic>
    </section-basic>
    <!-- <section-footer></section-footer> -->
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

    methods:{
      
    },
        data:function(){
          return {
            option :{
                is : false,
                name : '',
                id : '',
                index :1
              },
              isPreview : false,
          }
        },
        computed:{
          getElements:function(){
            return this.$store.getters.getElementItems
          }
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

.col-xl-6,.col-md-12 {
  z-index: 1;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;

}
.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-6,.col-xl-12,.col-md-12{
  padding: 0;
}
.column-1,.column-2,.column-3,.column-4,.column-5{
  z-index: 1;
 background-position: center !important;
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;
}
.column-1{
  max-width: 100%;
  display: flex;
}
.column-2{
  max-width: 50%;
  display: flex;
}
.column-3{
  max-width: 33.33%;
  display: flex;
}
.column-4{
  max-width: 25%;
  display: flex;
}
.column-5{
  max-width:20%;
  display: flex;
}

@media only screen and (max-width: 992px){
  .column-1{
  max-width: 100%;
  display: flex;
  }
  .column-2{
    max-width: 50%;
    display: flex;
  }
  .column-3{
    max-width: 33.33%;
    display: flex;
  }
  .column-4{
    max-width: 33.33%;
    display: flex;
  }
  .column-5{
    max-width:33.33%;
    display: flex;
  }
}
@media only screen and (max-width: 768px){
  .column-1{
  max-width: 100%;
  display: flex;
  }
  .column-2{
    max-width: 50%;
    display: flex;
  }
  .column-3{
    max-width: 50%;
    display: flex;
  }
  .column-4{
    max-width: 50%;
    display: flex;
  }
  .column-5{
    max-width:50%;
    display: flex;
  }
}

@media only screen and (max-width: 576px){
  .column-1{
  max-width: 100%;
  display: flex;
  }
  .column-2{
    max-width: 100%;
    display: flex;
  }
  .column-3{
    max-width: 100%;
    display: flex;
  }
  .column-4{
    max-width: 100%;
    display: flex;
  }
  .column-5{
    max-width:100%;
    display: flex;
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

</style>
