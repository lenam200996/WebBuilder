 <template>
    <div :class="'column-'+size" :style="{background : getBackground,zIndex : 1, width : '100%',position: 'relative',height: '100%'}">
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
                validator:function(val){
                    return (val > 0 && val < 5)
                }
            },
            bgImg : {
                type :String,
            }
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