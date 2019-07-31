 <template>
    <div :style="getStyleWrap">
        <div class="wrap-img">
            <img :src="properties.url" :style="getStyleImage" :class="'md-image md-elevation-'+properties.styleImg.shadow">
        </div>
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
        computed:{
            getStyleWrap:function(){
                if(this.properties.styleImg.alignBlock == 'center'){
                var style = {
                    top: this.properties.styleImg.top,
                    transform: 'rotate(' + this.properties.styleImg.rotation + 'deg)',
                    left : '50%',
                    transform : 'translateX(-50%)',
                    maxWidth : '100%',
                     zIndex : this.properties.id,
            position:"absolute",
            height: this.properties.styleImg.height,
            width : this.properties.styleImg.width
                }
                }else if( this.properties.styleImg.alignBlock == 'left'){
                var style = {
                    top: this.properties.styleImg.top,
                    transform: 'rotate(' + this.properties.styleImg.rotation + 'deg)',
                    left : 0,
                    transform :'none',
                    right : 'auto',
                    maxWidth : '100%',
                     zIndex : this.properties.id,
            position:"absolute",
            height: this.properties.styleImg.height,
            width : this.properties.styleImg.width
                }
                }else if( this.properties.styleImg.alignBlock == 'right'){
                var style = {
                    top: this.properties.styleImg.top,
                    transform: 'rotate(' + this.properties.styleImg.rotation + 'deg)',
                    right : 0,
                    transform :'none',
                    left : 'auto',
                    maxWidth : '100%',
                    zIndex : this.properties.id,
            position:"absolute",
            height: this.properties.styleImg.height,
            width : this.properties.styleImg.width
                }
                }else{
                return {
                    left:this.properties.styleImg.left,
                    top: this.properties.styleImg.top,
                    transform: 'rotate(' + this.properties.styleImg.rotation + 'deg)',
                    maxWidth : '100%',
                     zIndex : this.properties.id,
            position:"absolute",
            height: this.properties.styleImg.height,
            width : this.properties.styleImg.width
                };
                }
                return style
            },
            getStyleImage:function(){
            return {
                border : this.properties.styleImg.border.width+'px '+this.properties.styleImg.border.type +' '+this.properties.styleImg.border.color ,
                borderRadius: this.properties.styleImg.borderRadius +'%',

            }
        }
        },
        
     }
 </script>
 
 <style scoped>
    img{
        width: 100%;
        height: 100%;
    }
    .wrap-img{
        width: 100%;
        height: 100%;
    }
 </style>