<template>
    <div class="row menu-container" :style="getStyleContainer">
        <basic-logo :height="height" :width="100 - width"></basic-logo>
        <ul :style="getStyle">
            <basic-menu-item v-for="item in getMenu.filter(item => item.display == true)" :key="item.name" :item="item.name" :title="item.title" :size="size" :height="height"></basic-menu-item>
        </ul>
    </div>
</template>

<script>
    export default {
        data:function(){
            return{
                height : 60,
                width : 80,
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
                    backgroundColor: this.getMenuStyle.fill
                }
            },
            getMenu:function(){
                return this.$store.getters.getMenu
            },
            size:function(){
                return  80/this.getMenu.filter(item => item.display == true).length
            },
            getMenuStyle:function(){
              return this.$store.getters.getMenuStyle
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