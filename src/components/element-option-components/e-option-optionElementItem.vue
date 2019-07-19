<template>
    <div>
        <ul class="ul-wrap">
            <li v-for="(itemOption) in item" :key="itemOption.name+itemOption.ref" :class="{classItemDiv : itemOption.ref == 'sectionGrid' || itemOption.ref == 'sectionColumnManagement'}">
                <span>{{$t('style.'+itemOption.ref)}}</span>
                <slider v-if="itemOption.ref == 'opacity'" :min="0.1" :max="1" :step="0.1" v-model="style.opacity"></slider>
                <slider v-if="itemOption.ref == 'fontSize'"  v-model="style.fontSize" :min="8"></slider>
                <slider v-if="itemOption.ref == 'fontWeight'"  v-model="style.fontWeight" :min="500" :max="900" :step="100"></slider>
                <slider v-if="itemOption.ref == 'lineHeight'"  v-model="style.lineHeight"></slider>
                <slider v-if="itemOption.ref == 'letterSpacing'"  v-model="style.letterSpacing"></slider>
                <slider v-if="itemOption.ref == 'shadow'"  v-model="style.shadow" :min="0" :step="1" :max="24"></slider>
                <slider v-if="itemOption.ref == 'wordSpacing'"  v-model="style.wordSpacing"></slider>
                <slider v-if="itemOption.ref == 'borderWidth'"  v-model="style.border.width"></slider>
                <slider v-if="itemOption.ref == 'sizeLine'" v-model="style.size"></slider>
                <slider v-if="itemOption.ref == 'borderRadius'"  v-model="style.borderRadius" :max="parseInt(style.height.replace('px',''))/2"></slider>
                <i-input v-if="itemOption.ref == 'videoUrl'" type="text" v-model="style.url"/>
                <i-switch v-if="itemOption.ref == 'autoPlay'" v-model="style.autoPlay"/>
                <i-switch v-if="itemOption.ref == 'loop'" v-model="style.loop"/>
                <i-switch v-if="itemOption.ref == 'required'" v-model="style.required"/>
                <slider v-if="itemOption.ref == 'paddingLeft' " v-model="style.paddingLeft" :disabled="style.textAlign != 'left'"></slider>
                <slider v-if="itemOption.ref == 'paddingRight' " v-model="style.paddingRight" :disabled="style.textAlign != 'right'"></slider>
                <i-input v-if="itemOption.ref == 'textValue'" type="text" v-model="style.text"/>
                <i-input v-if="itemOption.ref == 'placeholder'" type="text" v-model="style.placeholder"/>
                <ColorPicker  v-if="itemOption.ref == 'color'" type="color" v-model="style.color" alpha />
                <input class="bg" v-if="backgroundColor == 1 && itemOption.ref == 'Columnbackground'"  type="color" :value="getColorColumn" @change="updateColor($event)" />
                <ColorPicker v-if="itemOption.ref == 'colorHover'" type="color" v-model="style.colorHover" alpha />
                <ColorPicker v-if="itemOption.ref == 'borderColorHover'" type="color" v-model="style.borderColorHover" alpha />
                <ColorPicker v-if="itemOption.ref == 'backgroundColorHover'" type="color" v-model="style.backgroundColorHover" alpha />
                <ColorPicker v-if="itemOption.ref == 'borderColor'" type="color" v-model="style.border.color" alpha />
                <ColorPicker v-if="itemOption.ref == 'backgroundColor'" type="color" v-model="style.backgroundColor" alpha />
                <InputNumber  v-if="itemOption.ref == 'height'" type="number" v-model="style.height" :min="10" :max="1000" :step="50"></InputNumber>
                <input type="radio" v-if="itemOption.ref == 'Columnbackground'" name="bgColor" v-model="backgroundColor" value="1"><i v-if="itemOption.ref == 'Columnbackground'">{{$t('option.color')}}</i> 
                <input type="radio" v-if="itemOption.ref == 'Columnbackground'" name="bgColor" v-model="backgroundColor" value="2"><i v-if="itemOption.ref == 'Columnbackground'">{{$t('option.image')}}</i>
                <input v-if="backgroundColor == 2 && itemOption.ref == 'Columnbackground'" type="file" id="files" @change="onFileChange($event,'bg')" class="hidden">
                <label v-if="backgroundColor == 2 && itemOption.ref == 'Columnbackground'" class="inputFile bg" style="line-height: 30px; color:red;cursor:pointer;user-select:none;"   for="files">{{$t('option.select')}}</label>
                <input type="file" id="files" @change="onFileChange($event,'url')" class="hidden">
                <label v-if="itemOption.ref == 'imgUrl'" class="inputFile" style="line-height: 30px; color:red;cursor:pointer;user-select:none;"   for="files">{{$t('option.select')}}</label>
                <RadioGroup v-if="itemOption.ref == 'borderPosition'" v-model="style.borderPosition" type="button">
                    <Radio label="All" checked>
                        <span>{{$t('style.all')}}</span>
                    </Radio>
                    <Radio label="Bottom">
                        <span>{{$t('style.bottom')}}</span>
                    </Radio>
                </RadioGroup>
                <i-select v-if="itemOption.ref == 'alignBlock'" v-model="style.alignBlock">
                    <i-option v-for="option in itemOption.item" :key="option.name" :value="option.value">{{option.name}}</i-option>
                </i-select> 
                <i-select v-if="itemOption.ref == 'textAlign'" v-model="style.textAlign">
                    <i-option v-for="option in itemOption.item" :key="option.name" :value="option.value">{{option.name}}</i-option>
                </i-select> 
                <i-select v-if="itemOption.ref == 'fontFamily'" v-model="style.fontFamily">
                    <i-option v-for="option in itemOption.item" :key="option.name" :value="option.value">{{option.name}}</i-option>
                </i-select>
                <i-select v-if="itemOption.ref == 'borderType'" v-model="style.border.type">
                    <i-option v-for="option in itemOption.item" :key="option.name" :value="option.value">{{option.name}}</i-option>
                </i-select>
                <i-select v-if="itemOption.ref == 'stretched'" v-model="style.stretched">
                    <i-option value="container" >Page</i-option>
                    <i-option value="container-fluid" selected>Screen</i-option>
                </i-select>
                <i-select v-if="itemOption.ref == 'textTransform'" v-model="style.textTransform">
                    <i-option v-for="option in itemOption.item" :key="option.name" :value="option.value">{{option.name}}</i-option>
                </i-select>
                <i-select v-if="itemOption.ref == 'fontStyle'" v-model="style.fontStyle">
                    <i-option v-for="option in itemOption.item" :key="option.name" :value="option.value">{{option.name}}</i-option>
                </i-select>
                <i-select v-if="itemOption.ref == 'backgroundSize'" v-model="bgSize">
                    <i-option v-for="option in itemOption.item" :key="option.name" :value="option.value">{{option.name}}</i-option>
                </i-select>
                <i-select v-if="itemOption.ref == 'backgroundPosition'" v-model="bgPosition">
                    <i-option v-for="option in itemOption.item" :key="option.name" :value="option.value">{{option.name}}</i-option>
                </i-select>
                <i-switch v-if="itemOption.ref == 'keepProportion'" v-model="style.keepProportion"/>
                <e-option-div-row-manager v-if="itemOption.ref == 'rowManager'" :getNumRow="getNumRow" @addRow="addRow" @deleteRow="deleteRow" @swapRow="swapRow"></e-option-div-row-manager>
                <e-option-div-slide-item-manager v-if="itemOption.ref == 'itemSlideManager'" :getNumItemSlide="getNumItemSlide" @addItem="addItem" @deleteItem="deleteItem" @swapItem="swapItem"></e-option-div-slide-item-manager>
                <e-option-div-column-manager v-if="itemOption.ref == 'sectionColumnManagement'" :getNumColumn="getNumColumn" @addRow="addColumn" @deleteRow="deleteColumn" @swapRow="swapColumn"></e-option-div-column-manager>
                <div v-if="itemOption.ref == 'sectionGrid'" class="div-grid-manager">
                    <h2>{{$t('option.grid_manager')}}</h2>
                    <ul class="ul-grid" >
                        <e-option-grid-item v-for="(grid,index) in arrayGridManager" :key="index" :grid="grid"></e-option-grid-item>
                    </ul>
                    
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Default from '../../api/OptionItem'
import {bus} from '../../main'
import Grid from '../../api/static-data.json'
    export default {
        props:{
            name : {
                type : String,
                required : true
            },
            id : {
                type : Number,
                required : true
            },
            index : {
                type : Number,
                
            }
        },
        data:function(){
            return {
                item :[],
                common : [],
                backgroundColor: 1,
                enableOptionColumn : false,
                arrayGridManager : [],
                enableOptionRow: false
            }
        },
        computed:{
            style :function(){
                    return this.$store.getters.getElementItemById(this.id).style 
            },
            getColorColumn:function(){
                return this.$store.getters.getColumnColorColumn
            },
            getNumColumn:function(){
                return this.$store.getters.getNumColumn
            },
            getNumRow:function(){
                return this.$store.getters.getNumRow
            },
            getNumItemSlide:function(){
                return this.$store.getters.getNumItemSlide(this.id) 
            },
            bgPosition:{
                get:function(){
                    this.$store.getters.getColumnBgPosition
                },
                set:function(val){
                    this.$store.commit('setBackgroundPosition',{
                        id : this.id,
                        value :  val
                    })
                }
            },
            bgSize:{
                get:function(){
                    this.$store.getters.getColumnBgSize
                },
                set:function(val){
                    this.$store.commit('setBackgroundSize',{
                        id : this.id,
                        value :  val
                    })
                }
            }
        },

        methods:{
            addItem:function(){

            },
            deleteItem:function(){
                this.$store.commit('deleteItemSlide')
            },
            swapItem:function(ev){
                 this.$store.commit('swapItem',ev.toIndex)
            },
            addRow:function(){
                this.$store.commit('addRow')
            },
            deleteRow:function(){
                this.$store.commit('deleteRow')
            },
            swapColumn:function(ev){
                this.$store.commit('swapColumn',ev.toIndex) 
            },
            swapRow:function(ev){
                this.$store.commit('swapRow',ev.toIndex) 
            },
            addColumn:function(){
                this.$store.commit('addColumn')
            },
            deleteColumn:function(){
                if(this.getNumColumn > 1){
                    this.$store.commit('deleteColumn',{index : this.$store.getters.getSelectColumn , id :this.$store.getters.getSelectID, row : this.$store.getters.getRowSelected })
                }
            },
            updateColor:function(ev){
                // console.log(ev)
                this.$store.commit('updateColorColumn',{value : ev.target.value})
            },
            onFileChange(e,type) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0],type);
            },
            
            createImage(file,type) {
                var image = new Image();
                var reader = new FileReader();

                reader.onload = (e) => {
                    if(type == 'url'){
                        this.$store.commit('setImageUrlById',{
                        id : this.id,
                        value :  e.target.result
                        })
                    }
                    if(type == 'bg'){
                        this.$store.commit('setBackgroundImageById',{
                            id : this.id,
                            value :  e.target.result
                        })
                    }
                    
                };
                reader.readAsDataURL(file);
            },
        },
        mounted(){
            bus.$on('enableOptionColumn',()=>{
                if(this.getNumColumn > 1){
                    this.enableOptionColumn = true
                }
            })
           
            this.item = Default.Default[this.name]
            this.arrayGridManager = Grid.grid_manager[this.getNumColumn]
        },
        watch:{
            getNumColumn:function(val){
                if(val == 1){
                    this.enableOptionColumn = false
                }
                this.arrayGridManager = Grid.grid_manager[val]
            },
            getNumRow:function(val){
                 if(val == 1){
                    this.enableOptionRow = false
                }
            }
        }

    }
</script>

<style scoped>
    
    .classItemDiv{
        height: auto !important;
    }
    ul{
        list-style-type: none;
        margin-top: 20px;
        padding: 10px;
        
    }
    ul.ul-wrap{
        height: 400px;
    }
    ul>li{
        width: 100%;
        height: 30px;
        position: relative;
        margin-bottom: 10px;
    }

    ul>li>span{
        position: absolute;
        left: 5px;
        
    }
    
    ul>li>input[type=range] ,.ivu-radio-group.ivu-radio-group-default.ivu-radio-default, .ivu-input-wrapper.ivu-input-wrapper-default.ivu-input-type,ul>li>input[type=color], ul>li>select,ul>li>label,ul>li>input[type=number],.ivu-select.ivu-select-single.ivu-select-default{
        position: absolute;
        width: 200px;
        height: 30px;
        border-radius: 9px;
        right: 10px;
        /* border: 1px solid cornflowerblue; */
        outline: none;
    }
    span.ivu-switch.ivu-switch-default,div.ivu-slider{
        position: absolute;
        right: 10px !important;
        left: auto !important;
    }
    div.ivu-slider{
        width: 200px;
    }
    
    .bg{

        width: 60px !important;

    }

    .group-radio{
        left: auto !important;
        right: 20px;
    }
    .group-radio>input,.group-radio>i{
        margin-right: 5px;
    }

    .div-column-manager{
        width: 100%;
    }

    .div-column-manager>h2{
        margin: 20px auto;
    }
    .div-column-manager>button{
        width: 150px;
        height: 40px;
        margin: auto;
        border-radius: 10px;
    }
    .div-column-manager>ul{
        width: 100%;
        margin: auto;
    }
     .div-column-manager>ul>li{
         width: 16.2%;
         height: 60px;
         display: inline-flex;
         background-color: green;
         margin-right: 2px;
         position: relative;
         cursor: pointer;
     }
    
     .div-column-manager>ul>li:hover{
         background-color: red;
     }
    .div-column-manager>ul>li.active{
        background-color: yellow;
    }
    .div-column-manager-option{
        width: 100%;
        height: 30px;
    }
    .div-column-manager-option>button{
        width: 30px;
        height: 30px;
        background: none;
        border:1px solid green;
        margin: 5px;    
    }
    .ivu-color-picker>.ivu-select-dropdown{
        transform: scale(0.7,0.7) !important;
    }
    

</style>