<template>
    <div class="wrap-option-content">
        <ul class="ul-wrap">
            <li v-for="(itemOption) in item" :key="itemOption.name+itemOption.ref" :class="{classItemDiv : itemOption.ref == 'sectionGrid' || itemOption.ref == 'sectionColumnManagement'||itemOption.ref == 'rowManager'}">
                <span>{{$t('style.'+itemOption.ref)}}</span>
                <slider v-if="itemOption.ref == 'opacity'" :min="0.1" :max="1" :step="0.1" v-model="style.opacity"></slider>
                <div v-if="itemOption.ref == 'opacity'" class="value">{{style.opacity}}</div>
                <slider v-if="itemOption.ref == 'fontSize'"  v-model="style.fontSize" :min="8"></slider>
                <div v-if="itemOption.ref == 'fontSize'" class="value">{{style.fontSize}}</div>
                <slider v-if="itemOption.ref == 'fontWeight'"  v-model="style.fontWeight" :min="500" :max="900" :step="100"></slider>
                <div v-if="itemOption.ref == 'fontWeight'" class="value">{{style.fontWeight}}</div>
                <slider v-if="itemOption.ref == 'lineHeight'"  v-model="style.lineHeight"></slider>
                <div v-if="itemOption.ref == 'lineHeight'" class="value">{{style.lineHeight}}</div>
                <slider v-if="itemOption.ref == 'marginLeft'"  v-model="style.marginLeft"></slider>
                <div v-if="itemOption.ref == 'marginLeft'" class="value">{{style.marginLeft}}</div>
                <slider v-if="itemOption.ref == 'marginRight'"  v-model="style.marginRight"></slider>
                <div v-if="itemOption.ref == 'marginRight'" class="value">{{style.marginRight}}</div>
                <slider v-if="itemOption.ref == 'marginTop'"  v-model="style.marginTop"></slider>
                <div v-if="itemOption.ref == 'marginTop'" class="value">{{style.marginTop}}</div>
                <slider v-if="itemOption.ref == 'marginBottom'"  v-model="style.marginBottom"></slider>
                <div v-if="itemOption.ref == 'marginBottom'" class="value">{{style.marginBottom}}</div>
                <slider v-if="itemOption.ref == 'letterSpacing'"  v-model="style.letterSpacing"></slider>
                <div v-if="itemOption.ref == 'letterSpacing'" class="value">{{style.letterSpacing}}</div>
                <slider v-if="itemOption.ref == 'shadow'"  v-model="style.shadow" :min="0" :step="1" :max="24"></slider>
                <div v-if="itemOption.ref == 'shadow'" class="value">{{style.shadow}}</div>
                <slider v-if="itemOption.ref == 'wordSpacing'"  v-model="style.wordSpacing"></slider>
                <div v-if="itemOption.ref == 'wordSpacing'"  class="value">{{style.wordSpacing}}</div>
                <slider v-if="itemOption.ref == 'borderWidth'"  v-model="style.border.width"></slider>
                <div v-if="itemOption.ref == 'borderWidth'" class="value">{{style.border.width}}</div>
                <slider v-if="itemOption.ref == 'sizeLine'" v-model="style.size"></slider>
                <div v-if="itemOption.ref == 'sizeLine'"  class="value">{{style.sizeLine}}</div>
                <slider v-if="itemOption.ref == 'borderRadius'"  v-model="style.borderRadius" :max="parseInt(style.height.replace('px',''))/2"></slider>
                <div v-if="itemOption.ref == 'borderRadius'" class="value">{{style.borderRadius}}</div>
                <slider v-if="itemOption.ref == 'paddingLeft' " v-model="style.paddingLeft" :disabled="style.textAlign != 'left'"></slider>
                <div v-if="itemOption.ref == 'paddingLeft'" class="value">{{style.paddingLeft}}</div>
                <slider v-if="itemOption.ref == 'paddingRight' " v-model="style.paddingRight" :disabled="style.textAlign != 'right'"></slider>
                <div v-if="itemOption.ref == 'paddingRight'" class="value">{{style.paddingRight}}</div>
                <i-input v-if="itemOption.ref == 'videoUrl'" type="text" v-model="style.url"/>
                <i-switch v-if="itemOption.ref == 'autoPlay'" v-model="style.autoPlay"/>
                <i-switch v-if="itemOption.ref == 'loop'" v-model="style.loop"/>
                <i-switch v-if="itemOption.ref == 'required'" v-model="style.required"/>
                <i-input v-if="itemOption.ref == 'textValue'" type="text" v-model="style.text"/>
                <i-input v-if="itemOption.ref == 'placeholder'" type="text" v-model="style.placeholder"/>
                <ColorPicker  v-if="itemOption.ref == 'color'" type="color" v-model="style.color" alpha />
                <ColorPicker v-if="itemOption.ref == 'colorHover'" type="color" v-model="style.colorHover" alpha />
                <ColorPicker v-if="itemOption.ref == 'borderColorHover'" type="color" v-model="style.borderColorHover" alpha />
                <ColorPicker v-if="itemOption.ref == 'backgroundColorHover'" type="color" v-model="style.backgroundColorHover" alpha />
                <ColorPicker v-if="itemOption.ref == 'borderColor'" type="color" v-model="style.border.color" alpha />
                <ColorPicker v-if="itemOption.ref == 'backgroundColor'" type="color" v-model="style.backgroundColor" alpha />
                <InputNumber  v-if="itemOption.ref == 'height'" type="number" v-model="style.height" :min="10" :max="1000" :step="50"></InputNumber>
                <RadioGroup v-if="itemOption.ref == 'Columnbackground'" v-model="backgroundColor" type="button">
                    <Radio label="1">
                        <Tooltip placement="top">
                            <i class="material-icons">color_lens</i>
                            <div slot="content">
                                <p><i>Color</i></p>
                            </div>
                        </Tooltip>
                    </Radio>
                    <Radio label="2">
                        <Tooltip placement="top">
                            <i class="material-icons">collections</i>
                            <div slot="content">
                                <p><i>Image</i></p>
                            </div>
                        </Tooltip>
                    </Radio>
                </RadioGroup>
                <input class="bg" v-if="backgroundColor == 1 && itemOption.ref == 'Columnbackground'"  type="color" :value="getColorColumn" @change="updateColor($event)" />                
                <input v-if="backgroundColor == 2 && itemOption.ref == 'Columnbackground'" type="file" id="files" @change="onFileChange($event,'bg')" class="hidden">
                <label v-if="backgroundColor == 2 && itemOption.ref == 'Columnbackground'" class="inputFile bg" style="line-height: 30px; color:red;cursor:pointer;user-select:none;"   for="files">{{$t('option.select')}}</label>
                <input type="file" id="files" @change="onFileChange($event,'url')" class="hidden">
                <label v-if="itemOption.ref == 'imgUrl'" class="inputFile" style="line-height: 30px; color:#EB6641;cursor:pointer;user-select:none;"   for="files">{{$t('option.select')}}</label>
                <RadioGroup v-if="itemOption.ref == 'borderPosition'" v-model="style.borderPosition" type="button">
                    <Radio label="All" checked>
                        <span>{{$t('style.all')}}</span>
                    </Radio>
                    <Radio label="Bottom">
                        <span>{{$t('style.bottom')}}</span>
                    </Radio>
                </RadioGroup>
                <div class="wrap-select-radio" v-if="itemOption.ref == 'alignBlock'">
                    <RadioGroup v-model="style.alignBlock" type="button" checked>
                        <Radio :label="option.value"  v-for="option in itemOption.item" :key="option.name">
                            <Tooltip placement="top">
                                <span :class="'icon-'+option.name"></span>
                                <div slot="content">
                                    <p><i>{{option.name}}</i></p>
                                </div>
                            </Tooltip>
                        </Radio>
                    </RadioGroup>
                </div>
                <div class="wrap-select-radio" v-if="itemOption.ref == 'textAlign'">
                    <RadioGroup v-model="style.textAlign" type="button" checked>
                        <Radio :label="option.value" v-for="option in itemOption.item" :key="option.name" >
                            <Tooltip placement="top">
                                <span :class="'icon-'+option.name"></span>
                                <div slot="content">
                                    <p><i>{{option.name}}</i></p>
                                </div>
                            </Tooltip>
                        </Radio>
                    </RadioGroup>
                </div>
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
                        <e-option-grid-item isRow v-for="(grid,index) in arrayGridRowManager" :key="index" :grid="grid"></e-option-grid-item>
                    </ul>
                    
                </div>
                <div v-if="itemOption.ref == 'rowGrid'" class="div-grid-manager">
                    <h2>{{$t('option.grid_manager')}}</h2>
                    <ul class="ul-grid" >
                        <e-option-grid-item :isRow="false" v-for="(grid,index) in arrayGridColumnManager" :key="index" :grid="grid"></e-option-grid-item>
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
                backgroundColor: "1",
                enableOptionColumn : false,
                arrayGridColumnManager : [],
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
            this.arrayGridColumnManager = Grid.grid_manager[this.getNumColumn]
            this.arrayGridRowManager = Grid.grid_manager[this.getNumRow]
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
                this.arrayGridRowManager = Grid.grid_manager[val]

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
    ul.ul-wrap>li{
        width: 100%;
        position: relative;
        margin-bottom: 10px;
        height: 70px;
    }
    ul.ul-wrap>li::after{
        position: absolute;
        top:0;
        content: "";
        left: 0;
        height: 1px;
        width: 100%;
        background-color: #EB6641;
        opacity: 0.4;
    }
    ul.ul-wrap>li:first-child:after{
        background-color: #ffffff;
    }

    ul.ul-wrap>li>span{
        position: absolute;
        left: 10px;
        top: 5px;
        font-size: 14px;
    }
    
    ul>li>input[type=range] ,.ivu-radio-group.ivu-radio-group-default.ivu-radio-default, .ivu-input-wrapper.ivu-input-wrapper-default.ivu-input-type,ul>li>input[type=color], ul>li>select,ul>li>label,ul>li>input[type=number],.ivu-select.ivu-select-single.ivu-select-default,span.ivu-switch.ivu-switch-default,div.ivu-slider,div.ivu-color-picker,div.wrap-select-radio{
        position: absolute;
        width: 200px;
        height: 30px;
        border-radius: 9px;
        outline: none;
        left: 15px;
        bottom: 5px;
    }
    ul>li>div.value{
        position: absolute;
        bottom: 5px;
        right: 20px;
        color: #EB6641;
        height: 30px;
        font-size: 14px;
        line-height: 30px;
    }
    div.ivu-color-picker{
        width: auto !important;

    }
    span.ivu-switch.ivu-switch-default{
        width: 45px !important;
        height: 21px !important;
        top: auto !important;
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
         background-color: #EB6641;
         margin-right: 2px;
         position: relative;
         cursor: pointer;
     }
    
     .div-column-manager>ul>li:hover{
         background-color:#374355;
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
        border:1px solid #EB6641;
        margin: 5px;    
    }
    .ivu-color-picker>.ivu-select-dropdown{
        transform: scale(0.7,0.7) !important;
    }
    .wrap-option-content{
        height: 460px;
        overflow-y: scroll;
        width: 100%;
    }

</style>