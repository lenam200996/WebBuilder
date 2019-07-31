<template>
    <div
    :class="' md-layout-item '+classResponsive" 
    :style="{
        background : getBackground,
        backgroundPosition: properties.bgPos,
        backgroundSize:  properties.bgSize,
        backgroundRepeat:' no-repeat',
        width : '100%',
        height: properties.height*properties.sizeRow/100 + 'px',
        margin : 0,
        position: 'relative'
    }"
    >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props:{
            properties:{
                type:Object,
                required:true
            },
        },
        data:function(){
            return{
                    classResponsive : ''
            }
        },
        computed:{
            getBackground : function(){
                return this.properties.bgImg.indexOf('#') != -1 ?this.properties.bgImg : 'url('+this.properties.bgImg +')';
            },
            getSizeColumn:function(){
                return this.properties.size
            },

        },
        mounted:function(){
            if(this.properties.size == 100){
                this.classResponsive = 'md-large-size-'+this.properties.size
            }
            else if(this.properties.size >50){
                this.classResponsive = 'md-large-size-'+this.properties.size+' md-medium-size-33 md-small-size-50 md-xsmall-size-100'
            }
            else{
                this.classResponsive = 'md-large-size-'+this.properties.size+' md-medium-size-'+this.properties.size+' md-small-size-50 md-xsmall-size-100'
            }
        },
        watch:{
            getSizeColumn:function(val){
                if(val == 100){
                    this.classResponsive = 'md-large-size-'+this.properties.size
                }
                else if(val >50){
                    this.classResponsive = 'md-large-size-'+val+' md-medium-size-33 md-small-size-50 md-xsmall-size-100'
                }
                else{
                    this.classResponsive = 'md-large-size-'+val+' md-medium-size-'+val+' md-small-size-50 md-xsmall-size-100'
                }
            }
        },
       
    }
</script>

<style scoped>

</style>