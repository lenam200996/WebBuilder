<template>
<div :class="getStretched"> 
    <div class="row" style="width:100%;margin:0;position:relative" :style ="getStyle">
        <slot></slot>
    </div>
</div>
</template>

<script>
import {bus} from '../../main'
    export default {
        props:{
            styleSec : {
                type : Object
            }
        },
        data:function(){
            return {

            }
        },
        computed:{
            getStyle :function(){
                return{
                    // backgroundColor :this.styleSec.backgroundColor,
                    // boxShadow : this.styleSec.boxShadow,
                    margin : this.styleSec.margin,
                    // height : this.styleSec.height + 'px'
                }
            },
            getStretched:function(){
                return this.styleSec.stretched
            },
        },
    }
</script>

<style scoped>

</style>