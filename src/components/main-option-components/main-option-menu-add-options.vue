<template>
 <!-- v-click-outside="close" -->
    <div class="wrap-menu-add-option" :style="getStyle">
        <div class="menu-add-option-tabs">
            <ul v-if="typeOption == 'menu'">
                <li :class="[tab === 'menu'?'active' : '']" @click="setTab('menu')">Menu</li>
                <li :class="[tab === 'logo'?'active' : '']" @click="setTab('logo')">Logo</li>
                <li :class="[tab === 'footer'?'active' : '']" @click="setTab('footer')">Footer</li>
            </ul>
             <ul v-if="typeOption == 'add'">
                <li :class="[tab === 'text'?'active' : '']" @click="setTab('text')">Text</li>
                <li :class="[tab === 'strip'?'active' : '']" @click="setTab('strip')">Section</li>
                <li :class="[tab === 'button'?'active' : '']" @click="setTab('button')">Button</li>
                <li :class="[tab === 'image'?'active' : '']" @click="setTab('image')">Image</li>
                <li :class="[tab === 'shape'?'active' : '']" @click="setTab('shape')">Shape</li>
                <li :class="[tab === 'slideshow'?'active' : '']" @click="setTab('slideshow')">Slideshow</li>
                <li :class="[tab === 'boxandfield'?'active' : '']" @click="setTab('boxandfield')">Box & Field</li>
                <li :class="[tab === 'video'?'active' : '']" @click="setTab('video')">Video</li>
                <li :class="[tab === 'form'?'active' : '']" @click="setTab('form')">Form</li>

            </ul>
        </div>
        <div v-if="typeOption == 'menu'" class="wrap-option-content">
            <h2 class="wrap-option-content-header">{{$t('public.'+typeOption.toLowerCase())}}
                    <span class="icon-close" @click="close"></span>
                    <span class="icon-help"></span>
            </h2>
            <div class="option-content">
                <div v-if="tab === 'menu'" class="option-content-menu">
                    <Container @drop="onDrop" >
                        <Draggable v-for="menuitem in getMenu" :key="menuitem.name" >{{menuitem.title}}
                            <span class="icon-eye-regular" @click="changeDisplayMenuItem(menuitem.display,menuitem.name)" :class="menuitem.display?'active':'inactive'"></span>
                            <span class="icon-delete" @click="deleteItemMenu(menuitem.name)"></span>
                            <span @click="enableEditMenuItem(menuitem.name)"> <md-icon>more_horiz</md-icon></span>
                        </Draggable>
                    </Container>
                    <div :class="isEnableEditMenuItem?'active':''" class="edit-menu-item">
                        <h6>Edit Menu Item
                            <span class="icon-close" @click="closeEdit"></span>
                        </h6>
                        <ul>
                            <li><span>Title</span><i-input type="text" :value="getMenuAttribute.title" @on-change="changeTitle"></i-input></li>
                            <li><span>Name</span><i-input type="text" :value="getMenuAttribute.name" @on-change="changeName"></i-input></li>
                        </ul>
                    </div>
                    <div class="add-menu-item">
                        <button @click="addNewItemMenu">ADD MENU</button>
                        <button class="designMenu" @click="designMenu"><md-icon>brush</md-icon></button>
                    </div>
                    <div  :class="isEnableEditMenuStyle?'active':''" class="edit-menu-style">
                         <h6>Edit Menu Style
                            <span class="icon-close" @click="designMenu"></span>
                        </h6>
                        <!-- do something-->
                        <span>Fill
                            <ColorPicker v-model="menuFill" type="color" alpha />
                        </span><br>
                        <span>Color
                            <ColorPicker v-model="menuColor" type="color" alpha />
                        </span><br>
                        <span>Color Active
                            <ColorPicker v-model="menuColorActive" type="color" alpha />
                        </span>
                        
                    </div>
                </div>
                <div v-if="tab === 'logo'" class="option-content-logo">
                   <image-uploader
                        :preview="true"
                        :className="['fileinput', { 'fileinput--loaded': hasImage }]"
                        capture="environment"
                        :debug="1"
                        doNotResize="gif"
                        :autoRotate="true"
                        outputFormat="verbose"
                        @input="setImage"
                        :uriPreview="image.dataUrl"
                    >
                        <label for="fileInput" slot="upload-label" class="label-upload-image">
                            <md-icon>photo_camera</md-icon>
                            <span class="upload-caption">{{
                                hasImage ? "Replace" : "Click to upload"
                            }}</span>
                        </label>
                   </image-uploader>
                   <span>Display logo <i-switch v-model="displayLogo"></i-switch></span>
                </div>
                <div v-if="tab === 'footer'" class="option-content-footer">
                    <ul>
                        <li>
                            <span>Background <ColorPicker v-model="backgroundFooter" type="color" alpha /></span>
                        </li>
                        <li>
                            <span>Text 
                                <i-input v-model="textFooter" type="text" />                                
                            </span>
                        </li>
                        <li>
                            <span>Color <ColorPicker v-model="colorFooter" type="color" alpha /></span>
                        </li>
                        <li>
                            <span>Font Size 
                                <slider v-model="fontSizeFooter"></slider>                                
                            </span>
                        </li>
                        <li>
                            <span>Text Align 
                                <RadioGroup v-model="textAlignFooter" type="button" >
                                <Radio :label="'left'" >
                                    <Tooltip placement="top">
                                        <span :class="'icon-align-left'"></span>
                                        <div slot="content">
                                            <p><i>Left</i></p>
                                        </div>
                                    </Tooltip>
                                </Radio>
                                 <Radio :label="'center'" >
                                    <Tooltip placement="top">
                                        <span :class="'icon-align-center'"></span>
                                        <div slot="content">
                                            <p><i>Center</i></p>
                                        </div>
                                    </Tooltip>
                                </Radio>
                                 <Radio :label="'right'" >
                                    <Tooltip placement="top">
                                        <span :class="'icon-align-right'"></span>
                                        <div slot="content">
                                            <p><i>Right</i></p>
                                        </div>
                                    </Tooltip>
                                </Radio>
                            </RadioGroup>
                            </span>
                        </li>
                        <li>
                            <span>Padding
                                <slider v-model="paddingFooter" :disabled="this.textAlignFooter == 'center'"></slider>                                
                            </span>
                        </li>
                        <li>
                            <span>Height
                                <slider v-model="heightFooter" :min="40"></slider>                                
                            </span>
                        </li>
                    </ul>
                </div>

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
                    <li v-if="tab === 'strip'" @click="$store.commit('addSection')">Classic Section</li>
                    <li v-if="tab === 'button'" @click="$store.commit('addElement',{type : 'button'})">Simple Button</li>
                    <li v-if="tab === 'image'" @click="$store.commit('addElement',{type : 'image'})">Image</li>
                    <li v-if="tab === 'shape'" @click="$store.commit('addElement',{type : 'lineHorizontal'})">Line Horizontal</li>
                    <li v-if="tab === 'shape'" @click="$store.commit('addElement',{type : 'lineVertical'})">Line Vertical</li>
                    <li v-if="tab === 'slideshow'" @click="$store.commit('addElement',{type : 'sildeShow',name:'slide basic'})">Fullwidth Slideshow</li>
                    <li v-if="tab === 'boxandfield'" @click="$store.commit('addElement',{type : 'box'})">Box</li>
                    <li v-if="tab === 'boxandfield'" @click="$store.commit('addElement',{type : 'field'})">Field</li>
                    <li v-if="tab === 'video'" @click="$store.commit('addElement',{type : 'video'})">Video</li>
                    <li v-if="tab === 'form'" @click="$store.commit('addElement',{type : 'form'})">Form</li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {bus} from '../../main'

import { Container, Draggable } from "vue-smooth-dnd";

    export default {
        components:{
            Container, Draggable
        },
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
                tab : 'text',
                isEnableEditMenuItem:false,
                isEnableEditMenuStyle:false,
                nameMenuItem : 'home',
                indexMenuItem : -1,
                customImageMaxSize: 3, // megabytes
                hasImage: false,
                image: null
            }
        },
        computed:{
            getStyle:function(){
                return {
                    left : 90 +'px',
                    top : 80+'px'
                }
            },
            getMenu:function(){
                return this.$store.getters.getMenu
            },
            getMenuAttribute(){
                    var att = this.getMenu.find(item=>item.name == this.nameMenuItem)
                    return {
                        name : att.name,
                        title:att.title
                    }
           },
           getMenuStyle:function(){
               return this.$store.getters.getMenuStyle
           },
           menuFill:{
               get(){
                  return this.getMenuStyle.fill
               },
               set(val){
                    this.$store.commit('setMenuFill',{val})
               }
           },
           menuColor:{
               get(){
                   return this.getMenuStyle.color
               },
               set(val){
                   this.$store.commit('setMenuColor',{val})
               }
           },
            menuColorActive:{
                get(){
                  return  this.getMenuStyle.colorActive
                },
                set(val){
                    this.$store.commit('setMenuColorActive',{val})
                }
           },
           displayLogo:{
               get(){
                   return this.$store.getters.getLogoDisplay
               },
               set(val){
                   this.$store.commit('setLogoDisplay',{val})
               }
           },
            getFooterStyle:function(){
                return this.$store.getters.getFooterStyle
            },
            textFooter:{
                get(){
                    return this.getFooterStyle.text
                },
                set(val){
                    this.$store.commit('setFooterText',{val})
                }
            },
            backgroundFooter : {
                get(){
                    return this.getFooterStyle.background
                },
                set(val){
                    this.$store.commit('setFooterBackground',{val})
                }
            },
            colorFooter:{
                get(){
                    return this.getFooterStyle.color
                },
                set(val){
                    this.$store.commit('setFooterColor',{val})
                }
            },
            fontSizeFooter:{
                get(){
                    return this.getFooterStyle.fontSize
                },
                set(val){
                    this.$store.commit('setFooterFontSize',{val})
                }
            },
            textAlignFooter:{
                get(){
                    return this.getFooterStyle.textAlign
                },
                set(val){
                    this.$store.commit('setFooterTextAlign',{val})
                }
            },
            paddingFooter:{
                get(){
                    return this.getFooterStyle.padding
                },
                set(val){
                     this.$store.commit('setFooterPadding',{val})
                }
            },
            heightFooter:{
                get(){
                    return this.getFooterStyle.height
                },
                set(val){
                    this.$store.commit('setFooterHeight',{val})
                }
            }
        },
        mounted(){
            this.image = this.$store.getters.getLogoImage
            if(this.image.dataUrl != ""){
                this.hasImage = true
            }
           
        },
        methods:{
            designMenu:function(){
                this.isEnableEditMenuStyle = !this.isEnableEditMenuStyle
            },
            changeDisplayMenuItem:function(val,name){
                this.$store.commit('changeDisplayMenu',{val:!val,name})
            },
            setImage: function(output) {
                this.hasImage = true;
                this.image = output;
                this.$store.commit('setLogoImage',{uri:this.image})
            },
            close:function(){
                bus.$emit('close',true)
            },
            closeEdit:function(){
                this.isEnableEditMenuItem = false
            },
            setTab:function(tabName){
                this.tab = tabName
            },
            enableEditMenuItem:function(name){
                this.isEnableEditMenuItem = true
                this.nameMenuItem = name
            },
            changeTitle:function(ev){
                this.$store.commit('changeTitleMenu',{val:ev.target.value, name: this.nameMenuItem})
            },
            changeName:function(ev){
                this.$store.commit('changeNameMenu',{val:ev.target.value,name:this.nameMenuItem})
                this.nameMenuItem = ev.target.value
            },
            addNewItemMenu:function(){
                this.$store.commit('addNewItemMenu')
            },
            onDrop(dropResult){
                this.$store.commit('sortingMenu',dropResult)
            },
            deleteItemMenu:function(name){
                this.$store.commit('deleteItemMenu',{name})
            }
        },

    }
</script>

<style scoped>
    .option-content-menu{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .option-content-menu>.smooth-dnd-container{
        position: absolute;
        top: 0;
        height: 85%;
        width: 100%;
        overflow: scroll;
    }
    .option-content-menu>.smooth-dnd-container>.smooth-dnd-draggable-wrapper{
        width: 95%;
        margin: auto;
        height: 40px;
        line-height: 40px;
        margin-bottom: 3px;
        border: 1px solid #eb664179;
        text-align: left;
        padding-left: 15px;
        position: relative;
        border-radius: 5px;
        user-select: none;
        cursor: ns-resize;
    }
    .option-content-menu>.smooth-dnd-container>.smooth-dnd-draggable-wrapper>span>i{
        position: absolute;
        right: 5px;
        font-size: 16px;
        border: 1px solid #eb6641;
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
    
    .option-content-menu>.smooth-dnd-container>.smooth-dnd-draggable-wrapper>span.icon-delete{
        position: absolute;
        right: 35px;
        font-size: 12px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        border: 1px solid #eb6641;
        border-radius: 50%;
        padding: 5px;
    }
    .option-content-menu>.smooth-dnd-container>.smooth-dnd-draggable-wrapper>span.icon-eye-regular{
        position: absolute;
        right: 65px;
        font-size: 12px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        border: 1px solid #eb6641;
        border-radius: 50%;
        padding: 5px;
    }
    .option-content-menu>.smooth-dnd-container>.smooth-dnd-draggable-wrapper>.inactive::after{
        position: absolute;
        content: "";
        height: 90%;
        width: 2px;
        background-color: #162d3d;
        border: 1px solid #162d3d !important;
        left: 48%;
        top: 1px;
        transform: rotate(-45deg);
    }
     .option-content-menu>.smooth-dnd-container>.smooth-dnd-draggable-wrapper>.active::after{
         display: none;
     }
    .option-content-menu>.smooth-dnd-container>.smooth-dnd-draggable-wrapper>span.icon-eye-regular::before{
        color: #162d3d;
    }
    .option-content-menu>.smooth-dnd-container>.smooth-dnd-draggable-wrapper>span.icon-eye-regular.active::before{
        color: #EB6641;
    }
    .option-content-menu>.smooth-dnd-container>.smooth-dnd-draggable-wrapper>span.icon-delete::before{
        color: #f32424a6;
    }

    .option-content-menu>.smooth-dnd-container>.smooth-dnd-draggable-wrapper>span>i:hover{
        color: #EB6641;
        border: 1px solid #162d3d;
    }
    .add-menu-item{
        position: absolute;
        bottom: 0;
        height: 15%;
        width: 100%;
    }
    .add-menu-item>button{
        height: 35px;
        width: 130px;
        border-radius: 17px;
        border: 1px solid #EB6641;
        background-color: #EB6641;
        color: #ffffff;
    }
    .add-menu-item>.designMenu{
        width: 35px;
        margin-left: 10px;
        font-size: 18px;
    }
    
    .edit-menu-item{
        position: absolute;
        z-index: 999999;
        right: -220px;
        width: 200px;
        height: 200px;
        background-color: #ffffff;
        box-shadow: 0px 3px 15px rgba(55, 67, 85, 0.15);
        border-radius: 10px;
        transform: scale(0,0);
        opacity: 0;
        transition: .5s all;
    }
    .edit-menu-item>h6{
        color: #EB6641;
        position: relative;
        height: 50px;
        line-height: 50px;
        margin: 0;
        font-size: 16px;

    }
    .edit-menu-item>h6>span{
        position: absolute;
        font-size: 14px;
        top: 5px;
        right: 5px;
    }
    .edit-menu-item>ul{
        width: 95%;
        margin: auto;
    }
    .edit-menu-item.active{
        transform: scale(1,1);
        opacity: 1;
    }
    .label-upload-image{
        margin-top: 10px;
        cursor: pointer;
        color: #EB6641;
    }
     .label-upload-image>span{
         margin: 0 5px;
     }
  
    .option-content-logo>span{
        float: left;
        padding-left: 15px;
        margin-top: 10px;
    }

    .edit-menu-style{
        position: absolute;
        z-index: 999999;
        right: -220px;
        width: 200px;
        height: 300px;
        background-color: #ffffff;
        box-shadow: 0px 3px 15px rgba(55, 67, 85, 0.15);
        border-radius: 10px;
        transform: scale(0,0);
        opacity: 0;
        transition: .5s all;
    }
    .edit-menu-style.active{
        transform: scale(1,1);
        opacity: 1;
    }
    .edit-menu-style>span{
        text-align: left;
        float: left;
        padding-left: 15px;
        margin-bottom: 20px;
        position: relative;
        width: 100%;
    }

    .edit-menu-style>span>.ivu-color-picker{
        position: absolute;
        right: 15px;
    }

    .option-content-footer>ul{
        width: 100%;
    }
    .option-content-footer>ul>li{
        position: relative;
        width: 100%;
        height: 40px;
        margin-bottom: 5px;
        text-align: left;
        padding-left: 15px;
    }
    .option-content-footer>ul>li>span>.ivu-color-picker , .option-content-footer>ul>li>span>.ivu-input-wrapper.ivu-input-wrapper-default.ivu-input-type{
        position: absolute;
        right: 20px;
    }
     .option-content-footer>ul>li>span>.ivu-input-wrapper.ivu-input-wrapper-default.ivu-input-type{
        width: 50% !important;
     }
</style>