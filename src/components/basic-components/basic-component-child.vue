<template>
    <div>
        <basic-text v-for="text in getElements.filter(item => item.type == 'text' && item.parentId == sectionID && item.column == columnIndex && item.row == rowIndex)" :properties="getPropertiesText(text)" :key="text.id"></basic-text>
        <basic-image v-for="image in getElements.filter(item => item.type == 'img' && item.parentId == sectionID && item.column == columnIndex && item.row == rowIndex)" :key="image.id" :properties="getPropertiesImage(image)"></basic-image>
        <basic-button v-for="btn in getElements.filter(item => item.type == 'btn' && item.parentId == sectionID && item.column == columnIndex && item.row == rowIndex)" :key="btn.id" :properties="getPropertiesButton(btn)"></basic-button>
        <basic-line-horizontal v-for="line in getElements.filter(item => item.type == 'lineHorizontal' && item.parentId == sectionID && item.column == columnIndex && item.row == rowIndex)" :key="line.id" :properties="getPropertiesLineHorizontal(line)" ></basic-line-horizontal>
        <basic-line-vertical v-for="line in getElements.filter(item => item.type == 'lineVertical' && item.parentId == sectionID && item.column == columnIndex && item.row == rowIndex)" :key="line.id" :properties="getPropertiesLineVertical(line)"></basic-line-vertical>
        <basic-box v-for="box in getElements.filter(item => item.type == 'box' && item.parentId == sectionID && item.column == columnIndex && item.row == rowIndex)"  :key="box.id" :properties="getPropertiesBox(box)"></basic-box>
        <basic-field v-for="field in getElements.filter(item => item.type == 'field' && item.parentId == sectionID && item.column == columnIndex && item.row == rowIndex)"  :key="field.id" :properties="getPropertiesField(field)"></basic-field>
        <basic-video v-for="video in getElements.filter(item => item.type == 'video' && item.parentId == sectionID && item.column == columnIndex && item.row == rowIndex)"  :key="video.id" :properties="getPropertiesVideo(video)"></basic-video>
    </div>
</template>

<script>
    export default {
        props:{
            sectionID :{
                type: Number,
                required :true
            },
            columnIndex :{
                type: Number,
                required :true
            },
            rowIndex :{
                type: Number,
                required :true
            }
        },
        computed:{
            getElements:function(){
                return this.$store.getters.getElementItems
            },
        },
        methods:{
            getPropertiesText:function(text){
                return {id :text.id,  styleText:text.style,position:text.position,text:text.value,parentId : text.parentId,columnIndex : text.column,rowIndex : text.row}
            },
            getPropertiesImage:function(image){
                return {id:image.id,styleImg:image.style,position:image.position,url:image.url,parentId : image.parentId,columnIndex : image.column,rowIndex : image.row}
            },
            getPropertiesButton :function(btn){
                return { id:btn.id,styleButton:btn.style,position:btn.position,text:btn.style.text,parentId:btn.parentId,columnIndex : btn.column,rowIndex : btn.row}
            },
            getPropertiesLineHorizontal:function(line){
                return {  id:line.id,styleLine:line.style,position:line.position,parentId:line.parentId,columnIndex : line.column,rowIndex : line.row}
            },
            getPropertiesLineVertical:function(line){
                return {id:line.id,styleLine:line.style,position:line.position,parentId:line.parentId,columnIndex : line.column,rowIndex : line.row}
            },
            getPropertiesSlide:function(section,slide){
                return {height:section.style.height,list:slide.slideItem}
            },
            getPropertiesBox:function(box){
                return {id:box.id,styleBox:box.style,position:box.position,parentId:box.parentId,columnIndex : box.column,rowIndex : box.row}
            },
            getPropertiesField:function(field){
                return {id:field.id,styleInput:field.style,position:field.position,parentId:field.parentId,columnIndex : field.column,rowIndex : field.row}
            },
            getPropertiesVideo:function(video){
                return {id:video.id,styleVideo:video.style,position:video.position,parentId:video.parentId,columnIndex : video.column,rowIndex : video.row}
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>