<template>
    <div>
        <ul>
            <li v-for="(itemOption) in item" :key="itemOption.name">
                <span v-if="itemOption.ref == 'alignBlock'" v-html="itemOption.name" ></span>
                <select v-if="itemOption.ref == 'alignBlock'" v-model="style.alignBlock">
                    <option value="none">Custom</option>
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select> 
                <span v-if="itemOption.ref == 'fontSize'" v-html="itemOption.name"></span>
                <input v-if="itemOption.ref == 'fontSize'" type="range" v-model="style.fontSize">
                <span v-if="itemOption.ref == 'lineHeight'" v-html="itemOption.name"></span>
                <input v-if="itemOption.ref == 'lineHeight'" type="range" v-model="style.lineHeight">
                <span v-if="itemOption.ref == 'fontFamily'" v-html="itemOption.name"></span>
                <select v-if="itemOption.ref == 'fontFamily'" v-model="style.fontFamily">
                    <option value="Roboto">Roboto</option>
                    <option value="Open Sans">Open Sans</option>
                    <option value="Literata">Literata</option>
                    <option value="Oswald">Oswald</option>
                    <option value="Source Sans Pro">Source Sans Pro</option>
                    <option value="Merriweather">Merriweather</option>
                    <option value="Roboto Mono">Roboto Mono</option>
                    <option value="DM Sans">DM Sans</option>
                    <option value="Roboto Slab">Roboto Slab</option>
                </select>
                <span v-if="itemOption.ref == 'letterSpacing'" v-html="itemOption.name"></span>
                <input v-if="itemOption.ref == 'letterSpacing'" type="range" v-model="style.letterSpacing">
                <span v-if="itemOption.ref == 'wordSpacing'" v-html="itemOption.name"></span>
                <input v-if="itemOption.ref == 'wordSpacing'" type="range" v-model="style.wordSpacing">

                <span v-if="itemOption.ref == 'Columnbackground'" v-html="itemOption.name"></span>
                <input type="radio" v-if="itemOption.ref == 'Columnbackground'" name="bgColor" v-model="backgroundColor" value="1"><i v-if="itemOption.ref == 'Columnbackground'">Color</i>
                <input type="radio" v-if="itemOption.ref == 'Columnbackground'" name="bgColor" v-model="backgroundColor" value="2"><i v-if="itemOption.ref == 'Columnbackground'">Image</i>
                <input class="bg" v-if="backgroundColor == 1 && itemOption.ref == 'Columnbackground'"  type="color" :value="getColorColumn" @change="updateColor($event)" >
                <input v-if="backgroundColor == 2 && itemOption.ref == 'Columnbackground'" type="file" id="files" @change="onFileChange($event,'bg')" class="hidden">
                <label v-if="backgroundColor == 2 && itemOption.ref == 'Columnbackground'" class="inputFile bg" style="line-height: 30px; color:red;cursor:pointer;user-select:none;"   for="files">image</label>
                <span v-if="itemOption.ref == 'imgUrl'" v-html="itemOption.name"></span>
                <input type="file" id="files" @change="onFileChange($event,'url')" class="hidden">
                <label v-if="itemOption.ref == 'imgUrl'" class="inputFile" style="line-height: 30px; color:red;cursor:pointer;user-select:none;"   for="files">Select</label>
                <span v-if="itemOption.ref == 'borderWidth'" v-html="itemOption.name"></span>
                <input v-if="itemOption.ref == 'borderWidth'" type="range" v-model="style.border.width">
                <span v-if="itemOption.ref == 'borderType'" v-html="itemOption.name"></span>
                <select v-if="itemOption.ref == 'borderType'" v-model="style.border.type">
                    <option value="none">None</option>
                    <option value="solid" selected>Solid</option>
                    <option value="dotted">Dotted</option>
                    <option value="inset">Inset</option>
                    <option value="double">Double</option>
                    <option value="groove">Groove</option>
                    <option value="outset">Outset</option>
                    <option value="ridge">Ridge</option>
                    <option value="dashed">Dashed</option>
                    <option value="hidden">Hidden</option>
                </select>
                <span v-if="itemOption.ref == 'borderColor'" v-html="itemOption.name"></span>
                <input v-if="itemOption.ref == 'borderColor'" type="color" v-model="style.border.color">
                <span v-if="itemOption.ref == 'borderRadius'" v-html="itemOption.name"></span>
                <input v-if="itemOption.ref == 'borderRadius'" class="form-control-range" type="range" v-model="style.borderRadius" max="50" min="0" step="1">
                <span v-if="itemOption.ref == 'keepProportion'" v-html="itemOption.name"></span>
                <span class="group-radio">
                    <input  v-if="itemOption.ref == 'keepProportion'" type="radio" name="keepProportion" value="true" v-model="style.keepProportion"><i v-if="itemOption.ref == 'keepProportion'">True</i>
                    <input  v-if="itemOption.ref == 'keepProportion'" type="radio" name="keepProportion" value="false" v-model="style.keepProportion"><i v-if="itemOption.ref == 'keepProportion'">False</i>
                </span>
                <div v-if="itemOption.ref == 'sectionColumnManagement'" class="div-column-manager">
                    <h2>Column Manager</h2>
                    <button class="addColumn" @click="addColumn">Add Column</button>
                    <ul>
                        <item-column v-for="n in getNumColumn" :key="n" :n="n"></item-column>
                    </ul>
                    <!-- <div style="clear:left;"></div> -->
                    <div class="div-column-manager-option">
                        <button v-if="enableOptionColumn" @click="deleteColumn"><img src="../../assets/delete.svg"/></button>
                    </div>
                </div>
                <span v-if="itemOption.ref == 'color'" v-html="itemOption.name"></span>
                <input v-if="itemOption.ref == 'color'" type="color" v-model="style.color">
                <span v-if="itemOption.ref == 'textValue'" v-html="itemOption.name"></span>
                <input v-if="itemOption.ref == 'textValue'" type="text" v-model="style.text">
                <span v-if="itemOption.ref == 'textTransform'" v-html="itemOption.name"></span>
                <select v-if="itemOption.ref == 'textTransform'" v-model="style.textTransform">
                    <option value="none" selected>None</option>
                    <option value="capitalize" >Capitalize</option>
                    <option value="uppercase">Uppercase</option>
                    <option value="lowercase">Lowercase</option>
                    <option value="initial">Initial</option>
                    <option value="inherit">Inherit</option>
                </select>
                <span v-if="itemOption.ref == 'backgroundColor'" v-html="itemOption.name"></span>
                <input v-if="itemOption.ref == 'backgroundColor'" type="color" v-model="style.backgroundColor">
                <span v-if="itemOption.ref == 'height'" v-html="itemOption.name"></span>
                <input v-if="itemOption.ref == 'height'" type="number" v-model="style.height" min="300" max="1000" step="50">
            </li>
        </ul>
    </div>
</template>

<script>
import Default from '../../OptionItem'
import {bus} from '../../main'
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
                enableOptionColumn : false
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
            }
        },

        methods:{
            addColumn:function(){
                this.$store.commit('addColumn')
            },
            deleteColumn:function(){
                if(this.getNumColumn > 1){
                    this.$store.commit('deleteColumn',{index : this.$store.getters.getSelectColumn , id :this.$store.getters.getSelectID })
                }
            },
            updateColor:function(ev){
                this.$store.commit('updateColorColumn',{value : ev.target.value })
                // console.log(ev)
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
        },
        watch:{
            getNumColumn:function(val){
                if(val == 1){
                    this.enableOptionColumn = false
                }
            }
            // styleCache:function(val){
            //     this.$store.commit('updateStyle',{id : this.id, val : val})
            // }
        }

    }
</script>

<style scoped>
    ul{
        list-style-type: none;
        margin-top: 20px;
        padding: 10px;
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
    
    ul>li>input[type=range] , ul>li>input[type=text],ul>li>input[type=color], ul>li>select,ul>li>label,ul>li>input[type=number]{
        position: absolute;
        width: 120px;
        height: 30px;
        border-radius: 9px;
        right: 10px;
        border: 1px solid cornflowerblue;
        outline: none;
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
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.96) 0%,
            rgba(238, 238, 238, 0.96) 100%
        );
        box-shadow: 0 2px 5px 0 rgba(22, 45, 61, 0.58);

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
    }
    

</style>