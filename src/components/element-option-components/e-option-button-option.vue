<template>
    <div :style="styleBtn">
            <ul>
                <li class="name">
                    <button @click="editText">{{elementName}}</button>
                </li>
                <li>
                    <button @click="edit">
                        <!-- <img class="svg-button-toolbar" src="../../assets/setting.svg" width="15" height="15" >                                                 -->
                        <span class="icon-setting"></span>
                    </button>
                </li>
                <li>
                    <button @click="deleteItem">
                        <!-- <img class="svg-button-toolbar" src="../../assets/deleteOption.svg" width="15" height="15" >                         -->
                        <span class="icon-deleteOption"></span>
                    </button>
                </li>
                <li  v-if="!isGrid && !isSection">
                    <button @click="preColumn"><Icon type="md-arrow-dropleft" /></button>
                </li>
                <li v-if="!isGrid && !isSection">
                    <button @click="nextColumn"><Icon type="md-arrow-dropright" /></button>
                </li>
                <li v-if="isSection && !isItemSlide">
                    <button @click="swapSection('up')"><Icon type="md-arrow-dropup" /></button>
                </li>
                <li v-if="isSection && !isItemSlide">
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
            },
            isItemSlide:{
                type:Boolean,
                default: false
            },

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
            edit :function(ev){
                if(this.isEdit){
                    this.$emit('edit',{x:ev.clientX})
                    this.isEdit = false
                }else{
                    this.$emit('disableEdit',true)
                    this.isEdit = true
                }
               
            },
            editText:function(){
                if(this.elementName == 'EDIT TEXT'){
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
        width : 248px;
        height: 30px;
        position: absolute;
        z-index: 99999999;
        bottom: -30px;
        right: 5px;
        opacity: 1;
        border-radius: 5px;
    }
    ul{
        list-style-type: none;
        width: 100%;
        height: 100%;
        box-shadow: 0 2px 5px 0 rgba(22, 45, 61, 0.58);
    }
    ul > li {
        width : 37px;
        height: 30px;
        float: left;
        /* border-radius: 50%; */
        /* margin-right: 5px; */
        /* background: #3743553f; */
        position: relative;
        /* box-shadow: 0 2px 5px 0 rgba(22, 45, 61, 0.58); */
    }
    ul > li:first-child{
        border-radius: 5px 0 0 5px;
    }
    ul>li:last-child{
        border-radius: 0 5px 5px 0;
    }

    ul > li >button {
        width: 100%;
        height:30px;
        /* border-radius: 50%; */
        border:none;
        background-color: #3743553f;
        color: #EB6641;
    }

    button > li {
        width: 100%;
        height: 100%;
    }
    button > span::before{
        color: #EB6641;
    }

    li.name, li.name>button{
        width : 100px;
        height: 30px;
        /* border-radius: 10px; */
        user-select: none;
        /* letter-spacing: 2px;     */
    }
    
    .name>button{
        cursor: all-scroll;
    }
 

</style>