<template>
      <div class="text" :style="getStyleWrap">
          <span v-html="Value" :style="getStyle"></span>
      </div>    
</template>
<script>
  export default {
    props:{
      position : {
        type : Object,
        required :true
      },
      text: {
        type :String,
        required: true,
      },
      styleText :{
        type :Object,
      }
      
    },

    computed:{
      Value : function(){
          return this.text
      },
      getStyle: function(){
        return {
          fontFamily : this.styleText.fontFamily,
          letterSpacing : this.styleText.letterSpacing+'px',
          wordSpacing : this.styleText.wordSpacing+'px',
          lineHeight : this.styleText.lineHeight+'px',
        }
      },
      getStyleWrap:function(){
        if(this.styleText.alignBlock == 'center'){
          var style = {
            top: this.styleText.top,
            width: this.styleText.width ,
            height: this.styleText.height ,
            transform: 'rotate(' + this.styleText.rotation + 'deg)',
            left : '50%',
            transform : 'translateX(-50%)',
            maxWidth : '90%',
            zIndex : 1,
          }
        }else if( this.styleText.alignBlock == 'left'){
          var style = {
            top: this.styleText.top,
            width: this.styleText.width ,
            height: this.styleText.height ,
            transform: 'rotate(' + this.styleText.rotation + 'deg)',
            left : 0,
            transform :'none',
            right : 'auto',
            maxWidth : '90%',
            zIndex :  1
          }
        }else if( this.styleText.alignBlock == 'right'){
          var style = {
            top: this.styleText.top,
            width: this.styleText.width ,
            height: this.styleText.height ,
            transform: 'rotate(' + this.styleText.rotation + 'deg)',
            right : 0,
            transform :'none',
            left : 'auto',
            zIndex :  1,
            maxWidth : '90%',
          }
        }else{
          var style = {
            left: this.styleText.left,
            top: this.styleText.top,
            width: this.styleText.width ,
            height: this.styleText.height ,
            transform: 'rotate(' + this.styleText.rotation + 'deg)',
            zIndex : 1,
            maxWidth : '90%',
          };
        }
        return style
      }
    },

  }
</script>

<style>
  .text{
    position: absolute;
  }
</style>