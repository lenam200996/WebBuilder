<template>
    <div class="wrap-toolbar" :style="styles">
        <div class="head-toolbar">
            <div class="help-toolbar">
                <span class="icon-help"></span>
            </div>
            <div class="handle-drag" @mousedown="enableDrag"  >
                <span class="icon-draging" @mousedown="enableDrag"></span>
            </div>
            <div class="close-toolbar" @click="close">
                <span class="icon-close"></span>
            </div>
        </div>
        <div class="group-toolbar-button">
            <div class="group-toolbar-button-grid">
                <span class="toolbar-button" :class="[!selected ?'disabled':'']" @click="copyElement">
                    <Tooltip placement="top">
                        <span class="icon-copy"></span>
                        <div slot="content">
                            <p><i>Copy Element</i></p>
                        </div>
                    </Tooltip>
                </span>
                <span class="toolbar-button" :class="[!canPaste?'disabled':'']" @click="pasteElement">
                    <Tooltip placement="top">
                        <span class="icon-paste"></span>
                        <div slot="content">
                            <p><i>Paste Element</i></p>
                        </div>
                    </Tooltip>
                </span>
                <span class="toolbar-button" :class="[!selected ?'disabled':'']" @click="duplicateElement">
                    <Tooltip placement="top">
                        <span class="icon-duplicate"></span>
                        <div slot="content">
                            <p><i>Duplicate</i></p>
                        </div>
                    </Tooltip>
                </span>
                <span class="toolbar-button"  :class="[!selected ?'disabled':'']" @click="deleteElement">
                    <Tooltip placement="top">
                        <span class="icon-delete"></span>
                        <div slot="content">
                            <p><i>Delete</i></p>
                        </div>
                    </Tooltip>
                </span>
            </div>
            <div class="group-toolbar-button-grid">
                 <RadioGroup v-model="getStyleElement.alignBlock" type="button" checked>
                    <Radio label="none" :class="[!selected ?'disabled':'']">
                        <Tooltip placement="top">
                            <span class="icon-none"></span>
                            <div slot="content">
                                <p><i>None</i></p>
                            </div>
                        </Tooltip>
                    </Radio>
                    <Radio label="center" :class="[!selected ?'disabled':'']">
                        <Tooltip placement="top">
                            <span class="icon-align-center"></span>
                            <div slot="content">
                                <p><i>Align center</i></p>
                            </div>
                        </Tooltip>
                    </Radio>
                    <Radio label="right" :class="[!selected ?'disabled':'']">
                        <Tooltip placement="top">
                            <span class="icon-align-right"></span>
                            <div slot="content">
                                <p><i>Align right</i></p>
                            </div>
                        </Tooltip>
                    </Radio>
                    <Radio label="left" :class="[!selected ?'disabled':'']">
                        <Tooltip placement="top">
                            <span class="icon-align-left"></span>
                            <div slot="content">
                                <p><i>Align left</i></p>
                            </div>
                        </Tooltip>
                    </Radio>
                </RadioGroup>
            </div>
            <div class="group-toolbar-button-grid">
                <span class="toolbar-button disabled">
                    <img class="svg-button-toolbar" src="../../assets/deg.svg" width="15" height="15">                    
                    <!-- <span class="icon-deg"></span> -->
                </span>
                <span class="toolbar-button toolbar-value disabled">
                    {{getStyleElement.rotation.toFixed(1)}}<span class="units">°</span>
                </span>
            </div>
             <div class="group-toolbar-button-grid">
                 <span class="title-toolbar">
                     Size (px)
                 </span><br>
                 <span class="toolbar-button toolbar-laber">
                    W :
                </span>
                <span class="toolbar-button toolbar-value disabled">
                    {{parseFloat(getStyleElement.width.replace('px','')).toFixed(1)}}
                </span>
                <span class="toolbar-button toolbar-laber">
                    H :
                </span>
                <span class="toolbar-button toolbar-value disabled">
                    {{parseFloat(getStyleElement.height.replace('px','')).toFixed(1)}}
                </span>
             </div>
             <div class="group-toolbar-button-grid">
                 <span class="title-toolbar">
                     Position (px)
                 </span><br>
                 <span class="toolbar-button toolbar-laber">
                    X :
                </span>
                <span class="toolbar-button toolbar-value disabled">
                    {{typeof getStyleElement.left === 'string'?parseFloat(getStyleElement.left.replace('px','')).toFixed(1):getStyleElement.left}}
                </span>
                <span class="toolbar-button toolbar-laber">
                    Y :
                </span>
                <span class="toolbar-button toolbar-value disabled">
                    {{typeof getStyleElement.top === 'string'?parseFloat(getStyleElement.top.replace('px','')).toFixed(1):typeof getStyleElement.top}}
                </span>
             </div>
        </div>
    </div>
</template>

<script>
import { bus } from "../../main";
    export default {
        props:{
            open:{
                type:Boolean
            }
        },
        data:function(){
            return{
                isDraging : false,
                x : 0,
                y : 0,
                top : 70,
                right: 20,
                transition: '1s all',
                style:{
                    rotation: 0,
                    top : "0",
                    left: "0",
                    width : "0",
                    height: "0"
                },
                selected :false,
                canPaste : false
            }
        },
        methods:{
            copyElement:function(){
                this.$store.commit('copyElement')
            },
            pasteElement:function(){
                this.$store.commit('pasteElement')
            },
            duplicateElement:function(){
                this.$store.commit('duplicateElement')
            },
            close:function(){
                bus.$emit('closeToolbar',true)
            },
            deleteElement:function(){
                this.selected = false
                this.$store.dispatch('deleteItemByIdAction',{id:this.getSelectedElement})
                this.style = {
                    rotation: 0,
                    top : "0",
                    left: "0",
                    width : "0",
                    height: "0"
                }
            },
            enableDrag:function(ev){
                this.isDraging = true
                this.x = ev.clientX
                this.y = ev.clientY
                this.transition = 'none'
            },
            denableDrag:function(){
                this.isDraging = false
                this.transition = '1s all'
            },
            drag:function(ev){
                if(this.isDraging){
                    if(this.right - (ev.clientX - this.x) <= 0) {return}
                    if(this.right - (ev.clientX - this.x) >= (window.innerWidth-100)) {return}
                    this.top += ev.clientY - this.y
                    this.right -= ev.clientX - this.x
                    this.x = ev.clientX
                    this.y = ev.clientY
                }
            }
        },
        computed:{
            styles:function(){
                return {
                    height : 550+ 'px',
                    right : this.right +'px',
                    transition :this.transition
                }
            },
            getStyleElement:function(){
                return this.style
            },
            getSelectedElement:function(){
                return this.$store.getters.getSelectedElement
            },
            getClipboard:function(){
                return this.$store.getters.getClipboard
            }
        },
        mounted:function(){
            window.addEventListener('mousemove',(ev)=>{
                this.drag(ev)
            })
            window.addEventListener('mouseup',(ev)=>{
                this.denableDrag()
            })
             if(!this.open){
                    this.right = -999
                }else{
                    this.right = 20
                }
            if(this.getSelectedElement == null) {
                this.selected = false
                this.style ={
                    rotation: 0,
                    top : "0",
                    left: "0",
                    width : "0",
                    height: "0"
                }
            }else{
                this.selected = true
                this.style = this.$store.getters.getStyleSelectedElement(this.getSelectedElement)
            }
            
        },
        watch:{
            getClipboard:function(val){
                // console.log(Object.keys(val).length)
                if(val  == null){
                    this.canPaste = false
                }else{
                    this.canPaste = true
                }
            },
            getSelectedElement:function(val){
                if(val == null) {
                    this.selected = false
                    this.style ={
                        rotation: 0,
                        top : "0",
                        left: "0",
                        width : "0",
                        height: "0"
                    }
                }else{
                    this.selected = true
                    this.style = this.$store.getters.getStyleSelectedElement(val)
                }
               
            },
            open:function(val){
                if(!val){
                    this.right = -999
                }else{
                    this.right = 20
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>