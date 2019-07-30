<template>
    <li>
        <div class="grid" :class="{active :isActive}" @click="setSizeColumnGrid(grid)" v-click-outside="deActive">
            <span v-for="(itemGrid,index) in grid" :key="index" class="grid-item" :style="{width : (itemGrid)+'%',}"></span>
        </div>
    </li>
</template>

<script>
import ClickOutside from 'vue-click-outside'
    export default {
        props:{
            grid :
            {
                type:Array,
                required:true
            }
        },
        data:function(){
            return{
                isActive : false
            }
        },
        methods:{
            setSizeColumnGrid:function(grid){
                this.isActive = true
                this.$store.commit('setSizeColumnGrid',grid)
            },
            deActive:function(){
                this.isActive = false
            }
        },
        directives: {
            ClickOutside
        },
    }
</script>

<style scoped>
    ul.ul-grid>li{
        width: 130px;
        float: left;
        margin-top: 10px;
        margin-right: 10px;
        margin-bottom: 30px;
        
    }

    
    .grid-item{
        height: 100%;
        border-right: 2px solid rgba(208, 208, 208, 0.68);
        display: flex;
        background-color:#EB6641;
        margin-bottom: 10px;
        border-left: 2px solid rgba(208, 208, 208, 0.68);
    }

    .grid{
        height: 55px;
        width: 100%;
        /* margin-right: 20px; */
        display: flex;
        margin: 0;
        text-align: center;
        border: 10px solid rgba(235, 102, 65, 0.507);
        border-radius: 10px;
        cursor: pointer;
    }
    .grid:hover,.grid.active{
        border: 10px solid #EB6641;
       
    }
    .grid-item:hover{
        background-color: rgba(235, 102, 65, 0.507);
    }

    .grid:hover>.grid-item,.grid.active>.grid-item{
        border-left: 2px solid rgba(235, 102, 65, 0.507);
        border-right: 2px solid rgba(235, 102, 65, 0.507);
        background-color: rgba(235, 102, 65, 0.507);
    }
</style>