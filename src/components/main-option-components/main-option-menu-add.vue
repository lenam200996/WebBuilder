<template>
    <div class="wrap-menu-add">
        <ul class="ul-list-menu-add-button">
           <main-option-menu-add-item :isOpenOption="isOpenOption" :typeOption="typeOption" :title="'Menu & Page'" :icon="'page'" @openOption="openOption" :name="'menu'"></main-option-menu-add-item>
           <main-option-menu-add-item :isOpenOption="isOpenOption" :typeOption="typeOption" :title="'Background'" :icon="'square-regular'" @openOption="openOption" :name="'background'"></main-option-menu-add-item>
           <main-option-menu-add-item :isOpenOption="isOpenOption" :typeOption="typeOption" :title="'ADD'" :icon="'add'" @openOption="openOption" :name="'add'"></main-option-menu-add-item>
        </ul>
        <main-option-menu-add-options :y="y" v-if="isOpenOption" :typeOption="typeOption"></main-option-menu-add-options>
    </div>
</template>

<script>
import {bus} from '../../main.js'
    export default {
        data:function(){
            return{
                isOpenOption:false,
                y : 0,
                typeOption:'',
               
            }
        },
        mounted(){
            bus.$on('close',()=>{
                this.isOpenOption = false
            })
        },
        methods:{

            openOption:function(ev){
                this.typeOption = ev.type
                this.isOpenOption = true
                switch (ev.type) {
                    case 'menu':
                        {
                            this.y = 85
                        }
                        break;
                    case 'background':
                        {
                            this.y = 150
                        }
                        break;
                    case 'add':
                        {
                            this.y = 215
                        }   
                        break;
                    default:
                        break;
                }
                // console.log(this.$refs.menu.style)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>