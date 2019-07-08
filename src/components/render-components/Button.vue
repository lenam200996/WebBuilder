 <template>
    <div class="button" :style="getStyleWrap">
        <button :style="getStyle">
            <span v-html="text" ></span>
        </button>
    </div>
</template>

<script>
import {bus} from '../../main'
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
      styleButton :{
        type :Object,
      }
      
    },
    computed:{
      getStyle: function(){
        return {
            backgroundColor : this.styleButton.backgroundColor,
            border: this.styleButton.border.width + 'px '+this.styleButton.border.type+' '+this.styleButton.border.color,
            borderRadius: this.styleButton.borderRadius + 'px',
            color: this.styleButton.color,
            textTransform : this.styleButton.textTransform,
            fontFamily : this.styleButton.fontFamily,
        }
      },
      getStyleWrap:function(){
        if(this.styleButton.alignBlock == 'center'){
          var style = {
            top: this.styleButton.top,
            width: this.styleButton.width ,
            height: this.styleButton.height ,
            transform: 'rotate(' + this.styleButton.rotation + 'deg)',
            left : '50%',
            transform : 'translateX(-50%)'
          }
        }else if( this.styleButton.alignBlock == 'left'){
          var style = {
            top: this.styleButton.top,
            width: this.styleButton.width ,
            height: this.styleButton.height ,
            transform: 'rotate(' + this.styleButton.rotation + 'deg)',
            left : 0,
            transform :'none',
            right : 'auto'
          }
        }else if( this.styleButton.alignBlock == 'right'){
          var style = {
            top: this.styleButton.top,
            width: this.styleButton.width ,
            height: this.styleButton.height ,
            transform: 'rotate(' + this.styleButton.rotation + 'deg)',
            right : 0,
            transform :'none',
             left : 'auto',
          }
        }else{
          return {
            left: this.styleButton.left,
            top: this.styleButton.top,
            width: this.styleButton.width ,
            height: this.styleButton.height ,
            transform: 'rotate(' + this.styleButton.rotation + 'deg)',
          };
        }
        return style
      }
    },
    watch:{

    }
  }
</script>

<style>
.button{
    position: absolute;
}

</style>