 <template>
    <div :class="'column-'+size" :style="{background : getBackground,zIndex : 1, width : '100%',position: 'relative',height: height +'px'}">
        <slot></slot>
    </div>
</template>

<script>
import {bus} from '../../main'
    export default {
        props:{
            size : {
                type: Number,
                required :true,
                
            },
            bgImg : {
                type :String,
            },
            height : {type:  Number }
        },
        computed:{
            getBackground : function(){
                return this.bgImg.includes('#')?this.bgImg : 'url('+this.bgImg +')';
            }
        },
    }
</script>

<style scoped>

</style>