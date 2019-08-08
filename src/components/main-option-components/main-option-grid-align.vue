<template>
    <div class="grid-main-align-block">
        <span class="grid-container-min" :style="styleMin"></span>
        <span class="grid-container-max" :style="styleMax"></span>
    </div>
</template>

<script>
    export default {
        props:{
            min:{
                type:Number // save store
            },
            max:{
                type:Number //save store
            }
        },
        data:()=>({
            isDisplay: true,
        }),
        mounted(){
            window.addEventListener('resize',()=>{
                this.isDisplay =  window.innerWidth < 980 ?false :true
            })

        },
        computed:{
            styleMin:function(){
                return {
                    left : this.min + 'px',
                    display: this.isDisplay?'block':'none'
                }
            },
            styleMax:function(){
                return {
                    left : this.max +'px',
                    display: this.isDisplay?'block':'none'
                }
            },
            
        }
    }
</script>

<style scoped>
    .grid-container-min{
        position: absolute;
        z-index: 999999;
        height: 100%;
        top: 0;
        border: 1px dashed #EB6641;
        opacity: 0.5;
    }
    .grid-container-max{
        position: absolute;
        z-index: 999999;
        height: 100%;
        top: 0;
        border: 1px dashed #EB6641;
        opacity: 0.5;
    }
</style>