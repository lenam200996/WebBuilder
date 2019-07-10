 <template>
        <dragResize
            :id="id"
            :x ="position.x"
            :y ="position.y"
            :angle="position.angle"
            :w="position.w"
            :h="position.h"
            @select="select"
            @deselect="deselect"
            :style="getStyleWrap"
            :aspectRatio="styleImg.keepProportion == 'true'"
            >
            <!-- :style="getStyleWrap" -->
             <!-- :hasActiveContent="true" -->
        <div class="wrap-img">
            <img :src="url" :style="getStyleImage">
        </div>
        <btnOption v-if="isActive"
            :isGrid="false" 
            @edit="editOption" 
            @disableEdit="closeEdit"
            @deleteItem="deleteItem"
            @preColumn="preColumn"
            @nextColumn="nextColumn"
            :elementName="'IMAGE'"
        ></btnOption>
        
    </dragResize>
 </template>
 
 <script>
 import {bus} from '../../main'
     export default {
         props:{
        id :{
            type : Number,
            required: true
        },
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
        data:function(){
            return {
                isActive :false
            }
        },
        methods:{
            select:function(){
                this.isActive = true
            },
            deselect:function(){
                this.isActive = false
            },
            deleteItem:function(){
                this.$store.commit('deleteItemById',this.id)
            },
            preColumn:function(){
                this.$store.commit('preColumn',this.id)
            },
            nextColumn:function(){
                this.$store.commit('nextColumn',this.id)
            },
            editOption(){
                bus.$emit('openOption',{name : 'IMAGE',id:this.id,index : -1})
            },
            closeEdit() {
                bus.$emit('closeOptionElement',{name : 'IMAGE',id:this.id})
            },    
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
                    maxWidth : '100%',
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
                    maxWidth : '100%',
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
                    maxWidth : '100%',
                }
                }else{
                return {
                    left:this.styleImg.left,
                    top: this.styleImg.top,
                    width: this.styleImg.width ,
                    height: this.styleImg.height ,
                    transform: 'rotate(' + this.styleImg.rotation + 'deg)',
                    maxWidth : '100%',
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
        width: 100%;
        height: 100%;
    }
 </style>