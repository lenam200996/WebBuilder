<template>
    <div class="logo-container" :style="getStyle">
        <img class="md-image" src="../../assets/logo.png" :height="height">
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
}
</style>