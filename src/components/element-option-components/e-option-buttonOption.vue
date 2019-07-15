<template>
    <div :style="styleBtn">
        <ul>
            <li class="name">
                <button @click="editText">{{elementName}}</button>
            </li>
            <li>
                <button @click="edit"><Icon type="ios-brush" /></button>
            </li>
            <li>
                <button @click="deleteItem"><Icon type="md-trash" /></button>
            </li>
            <li  v-if="!isGrid && !isSection">
                <button @click="preColumn"><Icon type="md-arrow-dropleft" /></button>
            </li>
            <li v-if="!isGrid && !isSection">
                <button @click="nextColumn"><Icon type="md-arrow-dropright" /></button>
            </li>
            <li v-if="isSection">
                <button @click="swapSection('up')"><Icon type="md-arrow-dropup" /></button>
            </li>
            <li v-if="isSection">
                <button @click="swapSection('down')"><Icon type="md-arrow-dropdown" /></button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            isGrid :{
                type : Boolean,
                required : true,
                default : false
            },
            isSection :{
                type : Boolean,
                default : false
            },
            styleBtn :{
                type : Object,
            },
            elementName : {
                type : String,
                required: true
            }
        },
        data:function(){
            return{
                isEdit: true
            }
        },
        methods:{
            swapSection:function(toIndex){
                this.$emit('swapSection',toIndex)
            },
            edit :function(){
                if(this.isEdit){
                    this.$emit('edit',true)
                    this.isEdit = false
                }else{
                    this.$emit('disableEdit',true)
                    this.isEdit = true
                }
               
            },
            editText:function(){
                if(this.elementName == 'TEXT'){
                    this.$emit('editText',true)
                }
                return
            },
            deleteItem:function(){
                this.$emit('deleteItem',true)
            },
            preColumn:function(){
                this.$emit('preColumn',true)
            },
            nextColumn:function(){
                this.$emit('nextColumn',true)
            }
        }
    }
</script>

<style scoped>
    div{ 
        width : 265px;
        height: 25px;
        position: absolute;
        z-index: 99999999;
        bottom: -30px;
        right: 0px;
        opacity: 0.8;
    }
    ul{
        list-style-type: none;
    }
    ul > li {
        width : 25px;
        height: 25px;
        float: left;
        border-radius: 50%;
        margin-right: 5px;
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.96) 0%,
            rgba(238, 238, 238, 0.96) 100%
        );
        box-shadow: 0 2px 5px 0 rgba(22, 45, 61, 0.58);
    }
    ul > li >button {
        width:25px;
        height:25px;
        border-radius: 50%;
        border:none;
        background-color: none;
    }

    button > img {
        width: 100%;
        height: 100%;
    }

    li.name, li.name>button{
        width : 100px;
        height: 25px;
        border-radius: 10px;
        user-select: none;
        
    }
</style>