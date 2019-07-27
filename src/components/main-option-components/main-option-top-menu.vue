<template>
    <section class="top-menu-wrap">
        <ul class="ul-top-menu-wrap">
            <li class="wrap-logo">
                <img src="../../assets/GoBuilder.png" alt="Go Builder" class="img-logo">
            </li>
            <li class="wrap-select">
                <span>Page</span>
                <i-select v-model="pageIndex" :class="'select-single-page'">
                    <i-option :value="1">Trang chủ</i-option>
                    <i-option :value="2">Giới thiệu</i-option>
                    <i-option :value="3">Liên hệ</i-option>
                </i-select>
            </li>
            <li class="wrap-responsive">
                 <RadioGroup v-model="responsive" type="button" size="large">
                    <Radio label="desktop">
                        <span class="icon-desktop"></span>
                    </Radio>
                    <Radio label="mobile">
                        <span class="icon-mobile"></span>
                    </Radio>
                </RadioGroup>
            </li>
            <li class="wrap-menu">
                <ul class="menu" 
                v-click-outside="closeSubMenu"                
                >
                        <li @click="openSubMenu($event,'Site')">
                            Site
                        </li>
                        <li @click="openSubMenu($event,'Setting')">
                            Setting
                        </li>
                        <li @click="openSubMenu($event,'Tools')">
                            Tools
                        </li>
                        <li @click="openSubMenu($event,'DevMode')">
                            Dev Mode
                        </li>
                        <li @click="openSubMenu($event,'Help')">
                            Help
                        </li>
                        <li @click="openSubMenu($event,'Upgrade')">
                            Upgrade
                        </li>
                   
                </ul>

            <main-option-sub-menu :class="{activeSub:openedSubMenu}" :x="x" :name="name" :item="{toolbar: getOpenedToolbar}"></main-option-sub-menu>

            </li>
            <li class="wrap-undo-redo">
                <span @click="undoState" class="btn-undo" :class="{active : canUndo}">
                        <span class="icon-undo"></span>
                </span>
                <span @click="redoState" class="btn-redo" :class="{active : canRedo}">
                        <span class="icon-redo"></span>
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
import { setTimeout } from 'timers';
    export default {
        props:{
            openedToolbar :{
                type:Boolean
            }
        },
        data:function(){
            return{
                isPreview  : false,
                locale : 'en',
                responsive : 'desktop',
                pageIndex: 1,
                openedSubMenu:false,
                name: '',
                x : 0
            }
        },
        methods:{
        openSubMenu(ev,name){
            if(this.openedSubMenu){
                if(this.name == name){
                        this.openedSubMenu = false
                }
                this.name = name
                this.x = ev.clientX
            }else{
                this.name = name
                this.x = ev.clientX
                this.openedSubMenu = true
            }
            
        },

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

        },
        closeSubMenu:function(){
                this.openedSubMenu = false
        }
        },
        computed:{
            canUndo(){
                return this.$store.getters.getCanUndo
            },
            canRedo(){
                return this.$store.getters.getCanRedo
            },
            getOpenedToolbar(){
                return this.openedToolbar
            }
        }
        ,
        mounted(){
           
        },
        watch:{
        // locale:function(val){
        //     this.$i18n.locale = val
           name:function(val,old){
                
               
           }
        },
        
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