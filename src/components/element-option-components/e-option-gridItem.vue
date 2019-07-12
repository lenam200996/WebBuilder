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
        border-right: 2px solid #c8e5f7;
        display: flex;
        background-color:rgb(127,204,247);
        margin-bottom: 10px;
        border-left: 2px solid #c8e5f7;
        
    }
    .grid{
        height: 55px;
        width: 100%;
        /* margin-right: 20px; */
        display: flex;
        margin: 0;
        text-align: center;
        border: 10px solid #c8e5f7;
        border-radius: 10px;
        cursor: pointer;
    }
    .grid:hover,.grid.active{
        border: 10px solid #3899ec;
    }
    .grid:hover>.grid-item,.grid.active>.grid-item{
        border-left: 2px solid #3899ec;
        border-right: 2px solid #3899ec;
    }
</style>