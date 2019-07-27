<template>
    <div class="wrap-menu-add-option" :style="getStyle" v-click-outside="close">
        <div class="menu-add-option-tabs">
            <ul v-if="typeOption == 'menu'">
                <li class="active">Menu</li>
                <li>Site</li>
            </ul>
             <ul v-if="typeOption == 'add'">
                <li :class="[tab === 'text'?'active' : '']" @click="setTab('text')">Text</li>
                <li :class="[tab === 'strip'?'active' : '']" @click="setTab('strip')">Strip</li>
                <li :class="[tab === 'button'?'active' : '']" @click="setTab('button')">Button</li>
                <li :class="[tab === 'image'?'active' : '']" @click="setTab('image')">Image</li>
                <li :class="[tab === 'shape'?'active' : '']" @click="setTab('shape')">Shape</li>
                <li :class="[tab === 'slideshow'?'active' : '']" @click="setTab('slideshow')">Slideshow</li>
                <li :class="[tab === 'boxandfield'?'active' : '']" @click="setTab('boxandfield')">Box & Field</li>
                <li :class="[tab === 'video'?'active' : '']" @click="setTab('video')">Video</li>

            </ul>
        </div>
        <div v-if="typeOption == 'menu'" class="wrap-option-content">
            <h2 class="wrap-option-content-header">{{$t('public.'+typeOption.toLowerCase())}}
                <!-- <img class="svg-button-toolbar btn-close-option" src="../../assets/close.svg" width="18" height="18"  @click="close">                                 -->
                    <span class="icon-close" @click="close"></span>
                    <span class="icon-help"></span>
                <!-- <img class="svg-button-toolbar btn-help-option" src="../../assets/help.svg" width="18" height="18"> -->
            </h2>
            <div class="option-content">
                
            </div>
        </div>
        <div v-if="typeOption == 'background'" class="wrap-option-content">
            <h2 class="wrap-option-content-header">{{$t('public.'+typeOption.toLowerCase())}}
                <span class="icon-close" @click="close"></span>
                <span class="icon-help"></span>
            </h2>
            <div class="option-content">
                
            </div>
        </div>
        <div v-if="typeOption == 'add'" class="wrap-option-content">
            <h2 class="wrap-option-content-header">{{$t('public.'+typeOption.toLowerCase())}}
                <span class="icon-close" @click="close"></span>
                <span class="icon-help"></span>
            </h2>
            <div class="option-content">
                <ul>
                    <li v-if="tab === 'text'" @click="$store.commit('addElement',{type : 'text'})">Blank</li>
                    <li v-if="tab === 'strip'" @click="$store.commit('addSection')">Classic Strip</li>
                    <li v-if="tab === 'button'" @click="$store.commit('addElement',{type : 'button'})">Simple Button</li>
                    <li v-if="tab === 'image'" @click="$store.commit('addElement',{type : 'image'})">Image</li>
                    <li v-if="tab === 'shape'" @click="$store.commit('addElement',{type : 'lineHorizontal'})">Line Horizontal</li>
                    <li v-if="tab === 'shape'" @click="$store.commit('addElement',{type : 'lineVertical'})">Line Vertical</li>
                    <li v-if="tab === 'slideshow'" @click="$store.commit('addElement',{type : 'sildeShow',name:'slide basic'})">Fullwidth Slideshow</li>
                    <li v-if="tab === 'boxandfield'" @click="$store.commit('addElement',{type : 'box'})">Box</li>
                    <li v-if="tab === 'boxandfield'" @click="$store.commit('addElement',{type : 'field'})">Field</li>
                    <li v-if="tab === 'video'" @click="$store.commit('addElement',{type : 'video'})">Video</li>

                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {bus} from '../../main'
    export default {
        props:{
            y: {
                type: Number,
                required:true,
            },
            typeOption:{
                type :String,
            }
            
        },
        data:function(){
            return{
                tab : 'text'
            }
        },
        computed:{
            getStyle:function(){
                return {
                    left : 90 +'px',
                    top : 80+'px'
                }
            },
           
        },
        methods:{
            close:function(){
                bus.$emit('close',true)
            },
            setTab:function(tabName){
                this.tab = tabName
            }
        }
    }
</script>

<style scoped>

</style>