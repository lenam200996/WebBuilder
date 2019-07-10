<template>
  <div class="about container-fluid">
    <section-render  v-for="section in getElements.filter( item => item.type === 'section')"  :key="section.id" :styleSec="section.style">
          <column-render v-for="col in section.layout" :key="col.index" :columnIndex="col.index"   :size="col.size" :bgImg="col.bg" :height="section.style.height">
                <text-render v-for="text in getElements.filter(item => item.type == 'text' && item.parentId == section.id && item.column == col.index)"  :key="text.id" :styleText="text.style" :position="text.position" :text="text.value"></text-render>
                <image-render v-for="image in getElements.filter(item => item.type == 'img' && item.parentId == section.id && item.column == col.index)"  :key="image.id" :styleImg="image.style" :position="image.position" :url="image.url"></image-render>
                <button-render v-for="btn in getElements.filter(item => item.type == 'btn' && item.parentId == section.id && item.column == col.index)" :key="btn.id" :styleButton="btn.style" :position="btn.position" :text="btn.style.text"></button-render>
                <line-horizontal-render v-for="line in getElements.filter(item => item.type == 'lineHorizontal' && item.parentId == section.id && item.column == col.index)" :key="line.id" :styleLine="line.style" :position="line.position" ></line-horizontal-render>
                <line-vertical-render v-for="line in getElements.filter(item => item.type == 'lineVertical' && item.parentId == section.id && item.column == col.index)" :key="line.id" :styleLine="line.style" :position="line.position" ></line-vertical-render>
          </column-render>
      </section-render>
  </div>
</template>

<script>
  export default {
    computed:{
          getElements:function(){
            return this.$store.getters.getElementItems
          }
        }, 
  }
</script>

<style lang="scss" scoped>

</style>
