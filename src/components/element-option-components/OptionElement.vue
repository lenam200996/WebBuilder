<template>
    <div class="wrap-option">
        <h2>{{name}} OPTIONS</h2>
        <div-option-item :name="name" :id="id"></div-option-item>
    </div>
</template>

<script>
    export default {
        props:{
            name : {
                type :String,
                required :true,
            },
            id: {
                type: Number,
                required:true
            }
        }
    }
</script>

<style scoped>
    .wrap-option{
        position: absolute;
        z-index: 99999;
        top: 20px;
        right:20px;
        height: 400px;
        overflow-y: scroll;
        width : 25%;
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.96) 0%,
            rgba(238, 238, 238, 0.96) 100%
        );
        box-shadow: 0 2px 5px 0 rgba(22, 45, 61, 0.58);
    }
    ::-webkit-scrollbar {
        display: none;
        }

    .wrap-option > h2 {
        height: 30px;
        width: 100%;
        background-color: cornflowerblue;
        padding: 5px 0;
        font-size: 20px;
        color: #ffffff;
        text-transform: uppercase;
    }
</style>