<template>
    <div class="row menu-container" :style="getStyleContainer">
        <basic-logo :height="height" :width="100 - width"></basic-logo>
        <basic-menu :editor="editor" ></basic-menu>
    </div>
</template>

<script>
    export default {
        props:{
            editor:{
                type: Boolean
            }
        },
        data:function(){
            return{
                height : 60,
                width : 80,
            }
        },
        computed:{
            getStyleContainer:function(){
                return {
                    backgroundColor: this.getMenuStyle.fill
                }
            },
             getMenuStyle:function(){
              return this.$store.getters.getMenuStyle
            }
          
        }
    }
</script>

<style scoped>
</style>