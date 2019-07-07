<template>
  <div id="app" class="container-fluid">
    <tool-add></tool-add>
    <div-option v-if="option.is" :name="option.name" :id="option.id" :index="option.index"></div-option>
    <section-basic  v-for="section in getElements.filter( item => item.type === 'section')" :id="section.id" :key="section.id" :styleSec="section.style">
        <column-basic v-for="col in section.layout" :key="col.index" :columnIndex="col.index"  :id="section.id" :size="col.size" :bgImg="col.bg">
              <text-box v-for="text in getElements.filter(item => item.type == 'text' && item.parentId == section.id && item.column == col.index)" :id ="text.id" :key="text.id" :styleText="text.style" :position="text.position" :text="text.value"></text-box>
              <image-component v-for="image in getElements.filter(item => item.type == 'img' && item.parentId == section.id && item.column == col.index)" :id="image.id" :key="image.id" :styleImg="image.style" :position="image.position" :url="image.url"></image-component>
        </column-basic>
    </section-basic>
  </div>
  <!-- <text-box :id="'1'"></text-box> -->
  
</template>
<script>
import {bus} from './main'
export default {

    methods:{
      resizeStop:function(reg ,startRect){
        console.log(reg)
      },
    },
        data:function(){
          return {
            option :{
              is : false,
              name : '',
              id : '',
              index :1
              }
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
        }
        // mounted(){
        //   window.addEventListener("mousemove",(ev)=>{
        //     console.log('x '+ev.clientX+' y '+ev.clientY)
        //   })
        // }
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

</style>
