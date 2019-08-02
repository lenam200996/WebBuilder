<template>
    <div class="logo-container" :style="getStyle">
        <img class="md-image" v-if="displayLogo" :src="getLogo.dataUrl" :height="height/2">
    </div>
</template>

<script>
    export default {
        props:{
            height : {
                type :Number,
                default : 50
            },
            width:{
                type :Number,
                default: 20
            }
        },
        computed:{
            getStyle:function(){
                return {
                    height : this.height + 'px',
                    width :this.width + '%'
                }
            },
            getLogo:function(){
                return this.$store.getters.getLogoImage
            },
            displayLogo:function(){
                return this.$store.getters.getLogoDisplay
            }
        }
    }
</script>

<style scoped>
.logo-container{
    display: flex;
    position: relative;
}
.logo-container>img{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}
</style>