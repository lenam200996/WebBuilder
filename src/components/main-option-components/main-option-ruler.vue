<template>
    <div class="ruler-container">
        <div class="vertical-ruler">
            <div class="ruler-vertical-tick-repeat" ref="verticalRuler">
                
                    <div v-for="(value,index) in getRulerVertical" :key="index" class="ruler-vertical-number">
                        <span>{{value}}</span>
                    </div>
            </div>
        </div>
        <div class="horizontal-ruler">
            <div class="ruler-horizontal-tick-repeat" :style="{backgroundPosition: getCenterRuler+'px center'}">
                <div class="wrap-ruler-number" :style="{left:getCenterRuler+'px'}">
                    <div v-for="(value,index) in getRulerHorizontal" :key="index" class="ruler-horizontal-number"  >
                        <span>{{(value)}}</span>
                    </div>
                </div>
            </div>
        </div>
        <main-option-grid-align :min="getCenterRuler-1" :max="getCenterRuler+979"></main-option-grid-align>
    </div>
</template>

<script>
import {bus} from '../../main'
    export default {
        data:()=>({
            widthScreen : window.innerWidth,
            heightScreen:window.innerHeight,
            startValueHorizontal  : 100
        }),
        computed:{
            getRulerHorizontal:function(){
                return [0,100,200,300,400,500,600,700,800,900]
            },
            getRulerVertical:function(){
                 var rulerV= []
                for(var step = 100 ; step <= this.heightScreen ; step+=100){
                    rulerV.push(step)
                }
                return rulerV
            },
            getCenterRuler:function(){ // min container (store)
                return (this.widthScreen - 980)/2 > 0 ? (this.widthScreen - 980)/2  : 0
            }
           
        },
        mounted(){
            window.addEventListener("resize",()=>{
                this.widthScreen = window.innerWidth
            })

            window.addEventListener('scroll',()=>{
                this.heightScreen = this.$refs.verticalRuler.scrollHeight
            })
            this.$store.dispatch('setGridLineMinMaxAction',{min: this.getCenterRuler, max: this.getCenterRuler + 979})
            bus.$on('resetGridLineMinMax',()=>{
                this.$store.dispatch('setGridLineMinMaxAction',{min: this.getCenterRuler, max: this.getCenterRuler + 979})
            })
        },
        watch:{
            getCenterRuler:function(val){
                this.$store.dispatch('setGridLineMinMaxAction',{min: val, max:val+979})
            },

        }
       
    } 
</script>

<style scoped>
    .vertical-ruler,.horizontal-ruler{
        opacity: 0.5;
        background-color: #ffffff;
    }
    .vertical-ruler{
        position: absolute;
        z-index: 999;
        right: 0;
        top: 0;
        width: 20px;
        height: 100%;
        box-shadow: 0px 3px 15px rgba(55, 67, 85, 0.068);
    }
    .horizontal-ruler{
        position: fixed;
        z-index: 9999999;
        left: 0;
        top: 55px;
        width:100%;
        height:20px;
    }
    .ruler-vertical-tick-repeat,.ruler-horizontal-tick-repeat{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
    .ruler-vertical-tick-repeat{
        background: url('../../assets/ruler_ticks_vertical.png');
        background-repeat: repeat-y;
        background-position-x: center;
    }
    .ruler-horizontal-tick-repeat{
        background: url('../../assets/ruler_ticks.png');
        background-repeat: repeat-x;
    }
    .ruler-horizontal-number,.ruler-vertical-number{
        float: left;
        color: #000000;
        position: relative;
        font-size: 10px;
     }
    .ruler-horizontal-number{
        width: 100px;
        height: 100%;
    }

    .ruler-vertical-number{
        width: 100%;
        height: 100px;
    }
    .ruler-vertical-number>span,.ruler-horizontal-number>span{
        position: absolute;
        bottom: 0;
    }
    .ruler-vertical-number>span{
        left:1px;
        width: 2px;
        word-wrap: break-word;
        transform: translateY(100%);
    }
    .ruler-horizontal-number>span{
        left: 1px;
        line-height: 10px;
    }
    .wrap-ruler-number{
        height: 100%;
        position: absolute;
    }
    
</style>