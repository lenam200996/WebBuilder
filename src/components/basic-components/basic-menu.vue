<template>
<divDragResize
            :id="1"
            :column="1"
            :parentId="1"
            :x ="getMenuStyle.position.x"
            :y ="getMenuStyle.position.y"
            :angle="getMenuStyle.position.angle"
            :w="getMenuStyle.position.w"
            :h="getMenuStyle.position.h"
            isMenu
            :rotatable="false"
            :typeName="'Menu'"
            >
    <ul :style="getStyle">
        <basic-menu-item :editor="editor" v-for="item in getMenu.filter(item => item.display == true)" :key="item.name" :item="item.name" :title="item.title" :size="size" :height="getHeight"></basic-menu-item>
    </ul>
</divDragResize>
</template>

<script>
    export default {
         props:{
            editor:{
                type: Boolean
            },
           
        },
        data:function(){
            return{
               
               
            }
        },
        
         computed:{
            getStyle:function(){
                return {
                    height : (this.getMenuStyle.position.h)+'px',
                    width :  ( this.getMenuStyle.position.w) + 'px',
                    left: (this.getMenuStyle.position.x - this.getMenuStyle.position.w/2) + 'px',
                    top: (this.getMenuStyle.position.y - this.getMenuStyle.position.h/2) + 'px',
                    zIndex : '9999999'
                }
            },
            getHeight:function(){
                return (this.getMenuStyle.position.h)
            },
              getMenu:function(){
                return this.$store.getters.getMenu
            },
            size:function(){
                return  100/this.getMenu.filter(item => item.display == true).length
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

</style>