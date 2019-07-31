<template>
    <div :style="getStyleWrap">
        <div class="text">
            <span v-html="Value" :style="getStyle" :class="'md-elevation-'+properties.styleText.shadow"></span>
        </div>
    </div>
</template>

<script>
  export default {
    props:{
      properties:{
        type:Object,
        required : true
      },
      
    },
    computed:{
      Value :{
        get : function(){ 
          return this.properties.text
        }
      },
      
      getStyle: function(){
        
        return {
          fontFamily : this.properties.styleText.fontFamily,
          letterSpacing : this.properties.styleText.letterSpacing+'px',
          wordSpacing : this.properties.styleText.wordSpacing+'px',
          lineHeight : this.properties.styleText.lineHeight+'px',

        }
      },
      getStyleWrap:function(){
        if(this.properties.styleText.alignBlock == 'center'){
          var style = {
            top: this.properties.styleText.top,
            transform: 'rotate(' + this.properties.styleText.rotation + 'deg)',
            left : '50%',
            transform : 'translateX(-50%)',
            maxWidth : '90%',
            zIndex : this.properties.id,
            position:"absolute",
            height: this.properties.styleText.height,
            width : this.properties.styleText.width
          }
        }else if( this.properties.styleText.alignBlock == 'left'){
          var style = {
            top: this.properties.styleText.top,
            transform: 'rotate(' + this.properties.styleText.rotation + 'deg)',
            left : 0,
            transform :'none',
            right : 'auto',
            maxWidth : '90%',
            zIndex : this.properties.id,
            position:"absolute",
            height: this.properties.styleText.height,
            width : this.properties.styleText.width
          }
        }else if( this.properties.styleText.alignBlock == 'right'){
          var style = {
            top: this.properties.styleText.top,
            transform: 'rotate(' + this.properties.styleText.rotation + 'deg)',
            right : 0,
            transform :'none',
            left : 'auto',
            maxWidth : '90%',
            zIndex : this.properties.id,
            position:"absolute",
            height: this.properties.styleText.height,
            width : this.properties.styleText.width
          }
        }else{
          return {
            left: this.properties.styleText.left,
            top: this.properties.styleText.top,
            transform: 'rotate(' + this.properties.styleText.rotation + 'deg)',
            maxWidth : '90%',
            position:"absolute",
            height: this.properties.styleText.height,
            width : this.properties.styleText.width
          };
        }
        return style
      }
    },
  }
</script>

<style>
  .text {
    width: 100%;
    height: 100%;
    /* border: 1px solid lightgrey; */
    
  }
  .textarea {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 99999999999;
  }
  .edit{
      position: relative;
      height: 100%;
  }
  .edit>div{
    height: 100%;
  }
  .btn-save-edit-text{
    position: absolute;
    width: 80px;
    height: 30px;
    right: -40px;
    top: -15px;
    z-index: 99999;
    background-color: #EB6641;
    color: #ffffff;
    border: none;
    border-radius: 10px;
    letter-spacing: 2px;
}

</style>