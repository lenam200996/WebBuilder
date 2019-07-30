<template>
    <div class="wrap-sub-menu" :style="getStyle" >
        <i class="ivu-icon ivu-icon-md-arrow-dropleft"></i>
        <div class="switch-label" v-if="name == 'Tools'">
            <label>Show Toolbar</label>
            <div class="switch">
                <i-switch  v-model="item.toolbar" @on-change="changeToolbar"/>
            </div>
        </div>
        
    </div>
</template>

<script>
import { bus } from "../../main";
import { setTimeout } from 'timers';

    export default {
        props:{
            name:{
                type : String,
                required:true
            },
            item:{
                type: Object
            },
            x:{
                type:Number,
                default:window.innerWidth/2
            }
        },
        computed:{
            getStyle:function(){
                return{
                    left : (this.x -30) +'px'
                }
            },

        },
        methods:{
            changeToolbar(value){
                bus.$emit('switchToolbar',{value})
            },
          

        },
        watch:{

        }
    }
</script>

<style scoped>
.switch-label{
    width:  100%;
    height: 30px;
    position: relative;
}
.switch-label>.switch{
    right: 40px;
}
.switch-label>label , .switch-label>.switch{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.switch-label>label{
    left: 20px;
}
</style>