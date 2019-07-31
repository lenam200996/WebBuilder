<template>
     <div :style="getStyleWrap">
        <div :style="getStyle" class="re-box" :class="'md-elevation-'+properties.styleBox.shadow" >
            <slot></slot>
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
            backgroundColor : this.properties.styleBox.backgroundColor,
            opacity : this.properties.styleBox.opacity,
            border : this.properties.styleBox.border.width +'px '+this.properties.styleBox.border.type+' '+this.properties.styleBox.border.color,
            borderRadius: this.properties.styleBox.borderRadius + 'px',
        }
        },
        getStyleWrap:function(){
            if(this.properties.styleBox.alignBlock == 'center'){
            var style = {
                top: this.properties.styleBox.top,
                transform: 'rotate(' + this.properties.styleBox.rotation + 'deg)',
                left : '50%',
                transform : 'translateX(-50%)',
                maxWidth : '90%',
                 zIndex : this.properties.id,
            position:"absolute",
            height: this.properties.styleBox.height,
            width : this.properties.styleBox.width
            }
            }else if( this.properties.styleBox.alignBlock == 'left'){
            var style = {
                top: this.properties.styleBox.top,
                transform: 'rotate(' + this.properties.styleBox.rotation + 'deg)',
                left : 0,
                transform :'none',
                right : 'auto',
                maxWidth : '90%',
                 zIndex : this.properties.id,
            position:"absolute",
            height: this.properties.styleBox.height,
            width : this.properties.styleBox.width
            }
            }else if( this.properties.styleBox.alignBlock == 'right'){
            var style = {
                top: this.properties.styleBox.top,
                transform: 'rotate(' + this.properties.styleBox.rotation + 'deg)',
                right : 0,
                transform :'none',
                left : 'auto',
                maxWidth : '90%',
                 zIndex : this.properties.id,
            position:"absolute",
            height: this.properties.styleBox.height,
            width : this.properties.styleBox.width
            }
            }else{
            return {
                left: this.properties.styleBox.left,
                top: this.properties.styleBox.top,
                transform: 'rotate(' + this.properties.styleBox.rotation + 'deg)',
                maxWidth : '90%',
                 zIndex : this.properties.id,
            position:"absolute",
            height: this.properties.styleBox.height,
            width : this.properties.styleBox.width
            };
            }
            return style
        }
        },
    }
</script>

<style  scoped>
    .re-box{
        width: 100%;
        height: 100%;
    }
</style>