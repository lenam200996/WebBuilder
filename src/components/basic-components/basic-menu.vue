<template>
    <div class="row menu-container" :style="getStyleContainer">
        <basic-logo :height="height" :width="100 - width"></basic-logo>
        <ul :style="getStyle">
            <basic-menu-item :item="'home'" :title="'Home'" :size="15" :height="height"></basic-menu-item>
            <basic-menu-item :item="'about'" :title="'About'" :size="15" :height="height"></basic-menu-item>
            <basic-menu-item :item="'shop'" :title="'Shop'" :size="15" :height="height"></basic-menu-item>
            <basic-menu-item :item="'member'" :title="'Member'" :size="15" :height="height"></basic-menu-item>
            <basic-menu-item :item="'contact'" :title="'Contact'" :size="15" :height="height"></basic-menu-item>
        </ul>
    </div>
</template>

<script>
    export default {
        data:function(){
            return{
                height : 60,
                width : 80
            }
        },
        computed:{
            getStyle:function(){
                return {
                    height : this.height+'px',
                    width : this.width + '%',
                   
                }
            },
            getStyleContainer:function(){
                return {
                    backgroundColor: '#ffffff'
                }
            }
        }
    }
</script>

<style scoped>
    ul>li{
        float: left;
    }
    ul{
        display: inline-flex;
    }
    .menu-container{

    }
</style>