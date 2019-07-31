<template>
    <div :style="getStyleWrap">
        <div :style="getStyle" class="re-line-v" :class="'md-elevation-'+properties.styleLine.shadow">
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            properties:{
                type : Object,
                required:true
            },      
    },
    computed:{
        getStyle: function(){
        return {
         width : this.properties.styleLine.size +'px',
         backgroundColor : this.properties.styleLine.backgroundColor
        }
        },
        getStyleWrap:function(){
            if(this.properties.styleLine.alignBlock == 'center'){
            var style = {
                top: this.properties.styleLine.top,
                transform: 'rotate(' + this.properties.styleLine.rotation + 'deg)',
                left : '50%',
                transform : 'translateX(-50%)',
                maxWidth : '90%',
                zIndex : this.properties.id,
            position:"absolute",
            height: this.properties.styleLine.height,
            width : this.properties.styleLine.width
            }
            }else if( this.properties.styleLine.alignBlock == 'left'){
            var style = {
                top: this.properties.styleLine.top,
                transform: 'rotate(' + this.properties.styleLine.rotation + 'deg)',
                left : 0,
                transform :'none',
                right : 'auto',
                maxWidth : '90%',
                zIndex : this.properties.id,
            position:"absolute",
            height: this.properties.styleLine.height,
            width : this.properties.styleLine.width
            }
            }else if( this.properties.styleLine.alignBlock == 'right'){
            var style = {
                top: this.properties.styleLine.top,
                transform: 'rotate(' + this.properties.styleLine.rotation + 'deg)',
                right : 0,
                transform :'none',
                left : 'auto',
                maxWidth : '90%',
                zIndex : this.properties.id,
            position:"absolute",
            height: this.properties.styleLine.height,
            width : this.properties.styleLine.width
            }
            }else{
            return {
                left: this.properties.styleLine.left,
                top: this.properties.styleLine.top,
                transform: 'rotate(' + this.properties.styleLine.rotation + 'deg)',
                maxWidth : '90%',
                zIndex : this.properties.id,
            position:"absolute",
            height: this.properties.styleLine.height,
            width : this.properties.styleLine.width
            };
            }
            return style
        }
        },
    }
</script>

<style  scoped>
    .re-line-v{
        height: 100%;
    }
</style>