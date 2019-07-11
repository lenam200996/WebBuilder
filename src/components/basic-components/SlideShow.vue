<template>
    
        <slider 
        animation="fade"
        >
            <slider-item
                v-for="(i, index) in list"
                :key="index"
                :style="i"
            >
                <div class="column-100" :style="{
                width : '100%',
                height: height + 'px',
                margin : 0,
                position: 'relative',
                background : 'url('+i.backgroundColor+')',
                }">
                <div class="blur-div"></div>
                    <span v-html="i.text"></span>
                </div>
            </slider-item>
        </slider>

</template>

<script>
    export default {
        props: {
            height : {
                type : Number
            },
            list:{
                type : Array,
                required : true
            }
        },
        data() {
            return {
            // list: [
            //     { backgroundColor: '#3f51b5', width: '100%', height: '100%' },
            //     { backgroundColor: '#eee', width: '100%', height: '100%' },
            //     { backgroundColor: '#f44336', width: '100%', height: '100%' },
            // ],
            }
        },
    }
</script>

<style scoped>
    span{
        position: absolute;
        font-size: 30px;
        color: #000000;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 20px;
        /* background-blend-mode: color-burn; */
    }   
    .blur-div{
        filter: blur(8px);
        width: 50%;
        height: 30%;
        background-color: #ffffff80;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
</style>