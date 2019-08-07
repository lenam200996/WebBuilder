<template>
    <div :style="getStyle">
        <ul>
            <render-menu-item :editor="editor" v-for="item in getMenu.filter(item => item.display == true)" :key="item.name" :item="item.name" :title="item.title" :size="size" :height="getHeight"></render-menu-item>
        </ul>
    </div>
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
                    zIndex : '9999999',
                    position: 'absolute'
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
        width: 100%;
        
    }

</style>