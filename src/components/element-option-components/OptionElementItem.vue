<template>
    <div>
        <ul>
            <li v-for="(itemOption) in common" :key="itemOption.name">
                <span v-if="itemOption.ref == 'alignBlock'" v-html="itemOption.name" ></span>
                <select v-if="itemOption.ref == 'alignBlock'" v-model="style.alignBlock">
                    <option value="none">Custom</option>
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
            </li>
            <li v-for="(itemOption) in item" :key="itemOption.name">
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
                
            </li>
        </ul>
    </div>
</template>

<script>
import Default from '../../OptionItem'
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
                backgroundColor: 1
            }
        },
        computed:{
            style :function(){
                    return this.$store.getters.getElementItemById(this.id).style 
            },
            getColorColumn:function(){
                return this.$store.getters.getColumnColorColumn
            }
        },
        methods:{
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
            this.item = Default.Default[this.name]
            this.common = Default.Default['Common']
        },
        watch:{
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
    
    ul>li>input[type=range] , ul>li>input[type=text],ul>li>input[type=color], ul>li>select,ul>li>label{
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
</style>