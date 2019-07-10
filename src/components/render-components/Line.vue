<template>
<div :style="getStyleWrap" class="wrap-line">
    <div :style="getStyle" class="line">
    </div>
</div>
    
</template>
<script>

    export default {
    props:{
        position : {
            type : Object,
            required :true
        },
        styleLine :{
            type :Object,

        }
    },
    computed:{
        getStyle: function(){
        return {
         height : this.styleLine.size +'px',
         backgroundColor : this.styleLine.backgroundColor
        }
        },
        getStyleWrap:function(){
            if(this.styleLine.alignBlock == 'center'){
            var style = {
                top: this.styleLine.top,
                width: this.styleLine.width ,
                transform: 'rotate(' + this.styleLine.rotation + 'deg)',
                left : '50%',
                transform : 'translateX(-50%)',
                maxWidth : '90%',
            }
            }else if( this.styleLine.alignBlock == 'left'){
            var style = {
                top: this.styleLine.top,
                width: this.styleLine.width ,
                transform: 'rotate(' + this.styleLine.rotation + 'deg)',
                left : 0,
                transform :'none',
                right : 'auto',
            }
            }else if( this.styleLine.alignBlock == 'right'){
            var style = {
                top: this.styleLine.top,
                width: this.styleLine.width ,
                transform: 'rotate(' + this.styleLine.rotation + 'deg)',
                right : 0,
                transform :'none',
                left : 'auto',
            }
            }else{
            return {
                left: this.styleLine.left,
                top: this.styleLine.top,
                width: this.styleLine.width ,
                transform: 'rotate(' + this.styleLine.rotation + 'deg)',
            };
            }
            return style
        }
        },
    }
</script>

<style  scoped>
.line{
    width: 100%;
}
.wrap-line{
    position: absolute;
}
</style>