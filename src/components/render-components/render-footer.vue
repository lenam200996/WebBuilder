<template>
    <div class="row footer" :style="getStyle">
        <span v-html="getText"></span>
    </div>
</template>

<script>
    export default {
        computed:{
            getFooterStyle:function(){
                return this.$store.getters.getFooterStyle
            },
            getStyle:function(){
                var padding =  ''
                if(this.getFooterStyle.textAlign == 'left') padding =  '0 0 0 '+this.getFooterStyle.padding+'px' 
                if(this.getFooterStyle.textAlign == 'right') padding =  '0 '+this.getFooterStyle.padding+'px 0 0'
                return {
                    backgroundColor : this.getFooterStyle.background,
                    color: this.getFooterStyle.color,
                    fontSize :this.getFooterStyle.fontSize + 'px',
                    textAlign : this.getFooterStyle.textAlign,
                    padding : padding,
                    lineHeight : this.getFooterStyle.height + 'px',
                    height : this.getFooterStyle.height + 'px'
                }
            },
            getText(){
                return this.getFooterStyle.text
            }
        }
    }
</script>

<style scoped>
    .footer>span{
        width: 100%;
    }
</style>