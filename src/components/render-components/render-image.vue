<template>
        <div class="wrap-img" :style="getStyleWrap">
            <img :src="url" :style="getStyleImage">
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
            styleImg :{
                type :Object,
            },
            url :{
                type: String,
                required : true
            }
        },
        computed:{
            getStyleWrap:function(){
                if(this.styleImg.alignBlock == 'center'){
                    var style = {
                        top: this.styleImg.top,
                        width: this.styleImg.width ,
                        height: this.styleImg.height ,
                        transform: 'rotate(' + this.styleImg.rotation + 'deg)',
                        left : '50%',
                        transform : 'translateX(-50%)',
                        maxWidth : '90%',
                    }
                }else if( this.styleImg.alignBlock == 'left'){
                    var style = {
                        top: this.styleImg.top,
                        width: this.styleImg.width ,
                        height: this.styleImg.height ,
                        transform: 'rotate(' + this.styleImg.rotation + 'deg)',
                        left : 0,
                        transform :'none',
                        right : 'auto',
                        maxWidth : '90%',
                    }
                }else if( this.styleImg.alignBlock == 'right'){
                    var style = {
                        top: this.styleImg.top,
                        width: this.styleImg.width ,
                        height: this.styleImg.height ,
                        transform: 'rotate(' + this.styleImg.rotation + 'deg)',
                        right : 0,
                        transform :'none',
                        left : 'auto',
                        maxWidth : '90%',
                    }
                }else{
                    var style = {
                        left:this.styleImg.left,
                        top: this.styleImg.top,
                        width: this.styleImg.width ,
                        height: this.styleImg.height ,
                        transform: 'rotate(' + this.styleImg.rotation + 'deg)',
                        maxWidth : '90%',
                    };
                }
                return style
            },
            getStyleImage:function(){
                return {
                    border : this.styleImg.border.width+'px '+this.styleImg.border.type +' '+this.styleImg.border.color ,
                    borderRadius: this.styleImg.borderRadius +'%',
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
        position: absolute;
        max-width: 90%;
    }
 </style>