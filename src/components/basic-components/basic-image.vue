 <template>
        <divDragResize
            :id="properties.id"
            :x ="properties.position.x"
            :y ="properties.position.y"
            :parentId="properties.parentId"
            :angle="properties.position.angle"
            :w="properties.position.w"
            :h="properties.position.h"
            @select="select"
            @deselect="deselect"
             v-click-outside="deselect"
            :selected="isActive"
            :style="getStyleWrap"
            :class="{autoAlign : isAutoAlign}"
            :aspectRatio="properties.styleImg.keepProportion"
            >
        <div class="wrap-img">
            <img :src="properties.url" :style="getStyleImage" :class="'md-image md-elevation-'+properties.styleImg.shadow">
        </div>
<transition name="bounce">    
        <e-option-button-option v-if="isActive"
            :isGrid="false" 
            @edit="editOption" 
            @disableEdit="onBlur"
            @deleteItem="deleteItem"
            @preColumn="preColumn"
            @nextColumn="nextColumn"
            :elementName="'IMAGE'"
        ></e-option-button-option>
</transition>
    </divDragResize>
 </template>
 
 <script>
 import {bus} from '../../main'
 import mixins from '../mixins.js'
     export default {
         props:{
             properties:{
                 type:Object,
                 required:true
             },
        },
        data:function(){
            return {
                isActive :false,
                name : 'IMAGE'
            }
        },
        extends :mixins.mixin,
        computed:{
            getStyleWrap:function(){
                if(this.properties.styleImg.alignBlock == 'center'){
                var style = {
                    top: this.properties.styleImg.top,
                    transform: 'rotate(' + this.properties.styleImg.rotation + 'deg)',
                    left : '50%',
                    transform : 'translateX(-50%)',
                    maxWidth : '100%',
                    zIndex : this.isActive ? 99999 : 1,
                }
                }else if( this.properties.styleImg.alignBlock == 'left'){
                var style = {
                    top: this.properties.styleImg.top,
                    transform: 'rotate(' + this.properties.styleImg.rotation + 'deg)',
                    left : 0,
                    transform :'none',
                    right : 'auto',
                    maxWidth : '100%',
                    zIndex : this.isActive ? 99999 : 1,
                }
                }else if( this.properties.styleImg.alignBlock == 'right'){
                var style = {
                    top: this.properties.styleImg.top,
                    transform: 'rotate(' + this.properties.styleImg.rotation + 'deg)',
                    right : 0,
                    transform :'none',
                    left : 'auto',
                    maxWidth : '100%',
                    zIndex : this.isActive ? 99999 : 1,
                }
                }else{
                return {
                    left:this.properties.styleImg.left,
                    top: this.properties.styleImg.top,
                    transform: 'rotate(' + this.properties.styleImg.rotation + 'deg)',
                    maxWidth : '100%',
                    zIndex : this.isActive ? 99999 : 1,
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