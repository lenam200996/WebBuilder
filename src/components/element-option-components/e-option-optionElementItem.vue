<template>
    <div>
        <ul class="ul-wrap">
            <li v-for="(itemOption) in item" :key="itemOption.name+itemOption.ref" :class="{classItemDiv : itemOption.ref == 'sectionGrid' || itemOption.ref == 'sectionColumnManagement'}">
                <span v-html="itemOption.name" ></span>
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
                <input type="radio" v-if="itemOption.ref == 'Columnbackground'" name="bgColor" v-model="backgroundColor" value="1"><i v-if="itemOption.ref == 'Columnbackground'">Color</i>
                <input type="radio" v-if="itemOption.ref == 'Columnbackground'" name="bgColor" v-model="backgroundColor" value="2"><i v-if="itemOption.ref == 'Columnbackground'">Image</i>
                <input v-if="backgroundColor == 2 && itemOption.ref == 'Columnbackground'" type="file" id="files" @change="onFileChange($event,'bg')" class="hidden">
                <label v-if="backgroundColor == 2 && itemOption.ref == 'Columnbackground'" class="inputFile bg" style="line-height: 30px; color:red;cursor:pointer;user-select:none;"   for="files">image</label>
                <input type="file" id="files" @change="onFileChange($event,'url')" class="hidden">
                <label v-if="itemOption.ref == 'imgUrl'" class="inputFile" style="line-height: 30px; color:red;cursor:pointer;user-select:none;"   for="files">Select</label>
                <RadioGroup v-if="itemOption.ref == 'borderPosition'" v-model="style.borderPosition" type="button">
                    <Radio label="All" checked>
                        <span>All</span>
                    </Radio>
                    <Radio label="Bottom">
                        <span>Bottom</span>
                    </Radio>
                </RadioGroup>
                <i-select v-if="itemOption.ref == 'alignBlock'" v-model="style.alignBlock">
                    <i-option value="none">Custom</i-option>
                    <i-option value="center">Center</i-option>
                    <i-option value="left">Left</i-option>
                    <i-option value="right">Right</i-option>
                </i-select> 
                <i-select v-if="itemOption.ref == 'textAlign'" v-model="style.textAlign">
                    <i-option value="center">Center</i-option>
                    <i-option value="left" selected>Left</i-option>
                    <i-option value="right">Right</i-option>
                </i-select> 
                <i-select v-if="itemOption.ref == 'fontFamily'" v-model="style.fontFamily">
                    <i-option value="Roboto">Roboto</i-option>
                    <i-option value="Open Sans">Open Sans</i-option>
                    <i-option value="Literata">Literata</i-option>
                    <i-option value="Oswald">Oswald</i-option>
                    <i-option value="Source Sans Pro">Source Sans Pro</i-option>
                    <i-option value="Merriweather">Merriweather</i-option>
                    <i-option value="Roboto Mono">Roboto Mono</i-option>
                    <i-option value="DM Sans">DM Sans</i-option>
                    <i-option value="Roboto Slab">Roboto Slab</i-option>
                </i-select>
                <i-select v-if="itemOption.ref == 'borderType'" v-model="style.border.type">
                    <i-option value="none">None</i-option>
                    <i-option value="solid" selected>Solid</i-option>
                    <i-option value="dotted">Dotted</i-option>
                    <i-option value="inset">Inset</i-option>
                    <i-option value="double">Double</i-option>
                    <i-option value="groove">Groove</i-option>
                    <i-option value="outset">Outset</i-option>
                    <i-option value="ridge">Ridge</i-option>
                    <i-option value="dashed">Dashed</i-option>
                    <i-option value="hidden">Hidden</i-option>
                </i-select>
                <i-select v-if="itemOption.ref == 'stretched'" v-model="style.stretched">
                    <i-option value="container" >Page</i-option>
                    <i-option value="container-fluid" selected>Screen</i-option>
                </i-select>
                <i-select v-if="itemOption.ref == 'textTransform'" v-model="style.textTransform">
                    <i-option value="none" selected>None</i-option>
                    <i-option value="capitalize" >Capitalize</i-option>
                    <i-option value="uppercase">Uppercase</i-option>
                    <i-option value="lowercase">Lowercase</i-option>
                    <i-option value="initial">Initial</i-option>
                    <i-option value="inherit">Inherit</i-option>
                </i-select>
                <i-select v-if="itemOption.ref == 'fontStyle'" v-model="style.fontStyle">
                    <i-option value="normal" selected>Normal</i-option>
                    <i-option value="italic" >Italic</i-option>
                    <i-option value="oblique">oblique</i-option>
                    <i-option value="initial">Initial</i-option>
                    <i-option value="inherit">Inherit</i-option>
                </i-select>
                <i-select v-if="itemOption.ref == 'backgroundSize'" v-model="bgSize">
                    <i-option value="auto" selected>Auto</i-option>
                    <i-option value="cover" >Cover</i-option>
                    <i-option value="contain" >Contain</i-option>
                    <i-option value="100% 100%" >Full</i-option>

                </i-select>
                <i-select v-if="itemOption.ref == 'backgroundPosition'" v-model="bgPosition">
                    <i-option value="center center" selected>center center</i-option>
                    <i-option value="center bottom" >center bottom</i-option>
                    <i-option value="center top">center top</i-option>
                    <i-option value="right bottom">right bottom</i-option>
                    <i-option value="right center">right center</i-option>
                    <i-option value="right top" >right top</i-option>
                    <i-option value="left bottom">left bottom</i-option>
                    <i-option value="left center">left center</i-option>
                    <i-option value="left top">left top</i-option>
                </i-select>

                <i-switch v-if="itemOption.ref == 'keepProportion'" v-model="style.keepProportion"/>
                <div v-if="itemOption.ref == 'rowManager'" class="div-row-manager">
                    <h2>Row Manager</h2>
                    <i-button type="success"  class="addColumn" @click="addRow">Add Row</i-button>
                    <ul>
                        <e-option-row-item v-for="(n,index) in getNumRow" :key="index" :n="n"></e-option-row-item>
                    </ul>
                    <div class="div-column-manager-option">
                        <button v-if="enableOptionRow" @click="deleteRow"><Icon size="26" type="md-trash" /></button>
                        <button v-if="enableOptionRow" @click="swapRow('toUp')"><Icon  size="26"  type="md-arrow-round-up" /></button>
                        <button v-if="enableOptionRow" @click="swapRow('toDown')"><Icon  size="26"  type="md-arrow-round-down" /></button>
                    </div>
                </div>
                <div v-if="itemOption.ref == 'itemSlideManager'" class="div-row-manager">
                    <h2>Item Manager</h2>
                    <i-button type="success"  class="addColumn" @click="addRow">Add Row</i-button>
                    <ul>
                        <e-option-row-item v-for="(n,index) in getNumItemSlide" :key="index" :n="n"></e-option-row-item>
                    </ul>
                    <div class="div-column-manager-option">
                        <button v-if="enableOptionRow" @click="deleteRow"><Icon size="26" type="md-trash" /></button>
                        <button v-if="enableOptionRow" @click="swapRow('toUp')"><Icon  size="26"  type="md-arrow-round-up" /></button>
                        <button v-if="enableOptionRow" @click="swapRow('toDown')"><Icon  size="26"  type="md-arrow-round-down" /></button>
                    </div>
                </div>
                <div v-if="itemOption.ref == 'sectionColumnManagement'" class="div-column-manager">
                    <h2>Column Manager</h2>
                    <i-button type="success" class="addColumn" @click="addColumn">Add Column</i-button>
                    <ul>
                        <e-option-column-item v-for="(n,index) in getNumColumn" :key="index" :n="n"></e-option-column-item>
                    </ul>
                    <div class="div-column-manager-option">
                        <button v-if="enableOptionColumn" @click="deleteColumn"><Icon size="26" type="md-trash" /></button>
                        <button v-if="enableOptionColumn" @click="swapColumn('toLeft')"><Icon size="26" type="ios-arrow-back" /></button>
                        <button v-if="enableOptionColumn" @click="swapColumn('toRight')"><Icon size="26" type="ios-arrow-forward" /></button>
                    </div>
                </div>
                <div v-if="itemOption.ref == 'sectionGrid'" class="div-grid-manager">
                    <h2>Grid Manager</h2>
                    <ul class="ul-grid" >
                        <e-option-grid-item v-for="(grid,index) in arrayGridManager" :key="index" :grid="grid"></e-option-grid-item>
                    </ul>
                    
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Default from '../../OptionItem'
import {bus} from '../../main'
import Grid from '../../data.json'
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
            addRow:function(){
                this.$store.commit('addRow')
            },
            deleteRow:function(){
                this.$store.commit('deleteRow')
            },
            swapColumn:function(toIndex){
                this.$store.commit('swapColumn',toIndex) 
            },
            swapRow:function(toIndex){
                this.$store.commit('swapRow',toIndex) 
            },
            addColumn:function(){
                this.$store.commit('addColumn')
            },
            deleteColumn:function(){
                if(this.getNumColumn > 1){
                    this.$store.commit('deleteColumn',{index : this.$store.getters.getSelectColumn , id :this.$store.getters.getSelectID, row : this.$store.getters.getRowSelected })
                }
            },
            changePositionBg:function(ev){
                console.log(ev)
                this.$store.commit('setBackgroundPosition',{
                    id : this.id,
                    value :  ev
                })
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
            bus.$on('enableOptionRow',()=>{
                 if(this.getNumRow > 1){
                    this.enableOptionRow = true
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

    .div-column-manager,.div-row-manager{
        width: 100%;
    }

    .div-column-manager>h2,.div-row-manager>h2{
        margin: 20px auto;
    }
    .div-column-manager>button,.div-row-manager>button{
        width: 150px;
        height: 40px;
        margin: auto;
        border-radius: 10px;
    }
    .div-column-manager>ul,.div-row-manager>ul{
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
     .div-row-manager>ul>li{
         width: 90%;
         height: 60px;
         display: inline-flex;
         background-color: green;
         margin-right: 2px;
         position: relative;
         cursor: pointer;
         margin-bottom: 0;
     }
     .div-column-manager>ul>li:hover,.div-row-manager>ul>li:hover{
         background-color: red;
     }
    .div-column-manager>ul>li.active,.div-row-manager>ul>li.active{
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