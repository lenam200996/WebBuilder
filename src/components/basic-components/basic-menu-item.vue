<template>
    <li class="menu-item" @click="linkTo" :style="getStyle" @mousemove="enableHover" @mouseout="denableHover">
        {{title}}
    </li>
</template>

<script>
    export default {
        props:{
            size : {
                type :Number,
                default: 20
            },
            height: {
                type : Number,
                default: 50
            },
            title:{
                type:String,
                default: "Empty"
            },
            item:{
                type:String,
                default: "home"
            },
            editor:{
                type:Boolean
            }
            
        },
        data:function(){
            return{
                ishover: false,
                isActive:false
            }
        },
        methods:{
            enableHover:function(){
                this.ishover = true
            },
            denableHover:function(){
                this.ishover = false
            },
            linkTo:function(){
                if(!this.editor){
                    this.isActive = true
                    this.$store.commit('setPageIndex',{val : this.item})
                }
            },
            deActive:function(){
                this.isActive = false
            }

        },
        mounted(){
            if(this.item == this.getPageIndex){
                this.isActive = true
            }else{
                this.deActive()
            }
            
        },
        computed: {
          getStyle:function(){
              return {
                  width :this.size + '%',
                  lineHeight: this.height + 'px',
                  fontWeight : 600,
                  color: this.ishover||this.isActive? this.getMenuStyle.colorActive : this.getMenuStyle.color,
              }
          },
          getPageIndex:function(){
              return this.$store.getters.getPageIndex
          },
          getMenuStyle:function(){
              return this.$store.getters.getMenuStyle
          }

        },
        watch:{
            getPageIndex:function(val){
                if(this.item == val){
                    this.isActive = true
                }else{
                    this.deActive()
                }
            }
        }
    }
</script>

<style scoped>
    .menu-item{
        height: 100%;
        text-align: center;
        font-size: 14px;
        cursor: pointer;
    }
</style>