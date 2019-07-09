<template>
    <div class="top-menu">
        <button class="preview-btn" @click="preview">{{isPreview ? 'BACK' :'PREVIEW'}}</button>
        <button class="create-template-btn" @click="createTemplate">{{isPreview ? 'BACK' : 'Create Template'}}</button>
    </div>
</template>

<script>
import { bus } from "../../main";
    export default {
        data:function(){
            return{
                isPreview  : false
            }
        },
        methods:{
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
                 if(this.isPreview){
                    this.$router.push({ path: '/' })
                    bus.$emit('backEditor',true)
                    this.isPreview = false
                }else{
                    this.$router.push({ path: 'createtemplate' })
                    bus.$emit('preview',true)
                    this.isPreview = true
                }
               
            }
        }
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