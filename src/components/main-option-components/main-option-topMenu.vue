<template>
    <!-- <div class="top-menu">
        <button class="preview-btn" @click="preview">{{isPreview ? $t('public.back') :$t('top_menu_editor.preview_site')}}</button>
        <button class="create-template-btn" @click="createTemplate">{{isPreview ? $t('public.back') : $t('top_menu_editor.create_template')}}</button>
        <RadioGroup v-model="locale" type="button">
            <Radio label="vn" ><flag iso="vn" /></Radio>
            <Radio label="en"><flag iso="us" /></Radio>
        </RadioGroup>
        <button v-if="canUndo" @click="undoState">Undo</button>
        <button v-else disabled>Undo</button>

        <button v-if="canRedo" @click="redoState">Redo</button>
        <button v-else disabled>Redo</button>
    </div> -->
    <section class="top-menu-wrap">
        <ul class="ul-top-menu-wrap">
            <li class="wrap-logo">
                <img src="../../assets/GoBuilder.png" alt="Go Builder" class="img-logo">
            </li>
            <li class="wrap-select">
                <span>Page</span>
                <i-select :class="'select-single-page'">
                    <i-option :value="1">item 1</i-option>
                    <i-option :value="2">item 1</i-option>
                    <i-option :value="3">item 1</i-option>
                    <i-option :value="4">item 1</i-option>
                </i-select>
            </li>
            <li class="wrap-responsive">
                 <RadioGroup type="button" size="large">
                    <Radio label="desktop">
                        <img class="svg-button-toolbar" src="../../assets/desktop.svg" width="22" height="22" >
                    </Radio>
                    <Radio label="mobile">
                        <img class="svg-button-toolbar" src="../../assets/mobile.svg" width="22" height="22" >
                    </Radio>
                </RadioGroup>
            </li>
            <li class="wrap-menu">

            </li>
            <li class="wrap-undo-redo">
                <span @click="undoState" class="btn-undo">
                    <img class="svg-button-toolbar" src="../../assets/undo.svg" width="22" height="22" >
                </span>
                <span @click="redoState" class="btn-redo">
                    <img class="svg-button-toolbar" src="../../assets/redo.svg" width="22" height="22" >
                </span>
            </li>
            <li class="wrap-btn-save">
                <span>Save</span>
            </li>
            <li class="wrap-btn-preview">
                <span>{{isPreview ? $t('public.back') :$t('top_menu_editor.preview_site')}}</span>
            </li>
            <li class="wrap-publish">
                <span>{{isPreview ? $t('public.back') : $t('top_menu_editor.publish')}}</span>
            </li>
        </ul>
        
    </section>
</template>

<script>
import { bus } from "../../main";
    export default {
       
        data:function(){
            return{
                isPreview  : false,
                locale : 'en',
               
            }
        },
        methods:{
        undoState(){
            this.$store.dispatch('actionUndo')
        },
        redoState(){
            this.$store.commit('redo')
        },
            preview:function(){
                if(this.isPreview){
                    this.$router.push({ path: '/' })
                    bus.$emit('backEditor',true)
                    this.isPreview = false
                }else{
                    this.$router.push({ path: 'preview' })
                    bus.$emit('preview',true)
                    this.isPreview = true
                }
                
            },
            createTemplate:function(){

            }
        },
        computed:{
            canUndo(){
                return this.$store.getters.getCanUndo
            },
            canRedo(){
                return this.$store.getters.getCanRedo
            }
        }
        ,
    //     watch:{
    //     locale:function(val){
    //         this.$i18n.locale = val
    //     },
        
    // },
    }
</script>

<style scoped>
    .top-menu{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        z-index: 99999;
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.96) 0%,
            rgba(238, 238, 238, 0.96) 100%
        );
        box-shadow: 0 2px 5px 0 rgba(22, 45, 61, 0.58);
    }

    .preview-btn{
        position: absolute;
        right: 0;
        width: 200px;
        height: 50px;
        background-color: blue;
        color: #ffffff;
        text-align: center;
        font-size: 20px;
        border: none;
    }
    .create-template-btn{
        position: absolute;
        right: 210px;
        width: 200px;
        height: 50px;
        background-color: rgb(15, 143, 4);
        color: #ffffff;
        text-align: center;
        font-size: 20px;
        border: none;
    }
</style>