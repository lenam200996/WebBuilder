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
                <input v-if="itemOption.ref == 'fontSize'" type="number" v-model="style.fontSize">
                <span v-if="itemOption.ref == 'lineHeight'" v-html="itemOption.name"></span>
                <input v-if="itemOption.ref == 'lineHeight'" type="number" v-model="style.lineHeight">
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
                <input v-if="itemOption.ref == 'letterSpacing'" type="number" v-model="style.letterSpacing">
                <span v-if="itemOption.ref == 'wordSpacing'" v-html="itemOption.name"></span>
                <input v-if="itemOption.ref == 'wordSpacing'" type="number" v-model="style.wordSpacing">

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

            
        },
        data:function(){
            return {
                item :[],
                common : []
            }
        },
        computed:{
            style :function(){
                    return this.$store.getters.getElementItemById(this.id).style 
                }
            
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
    
    ul>li>input[type=number] , ul>li>input[type=text], ul>li>select{
        position: absolute;
        width: 120px;
        height: 30px;
        border-radius: 9px;
        right: 10px;
        border: 1px solid cornflowerblue;
        outline: none;
    }
</style>