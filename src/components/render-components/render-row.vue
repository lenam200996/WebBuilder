<template>
    <div class="row md-layout" style="width:100%;position:relative">
        <div :style="getStyle"  class="row" style="width:100%;position:relative">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
      id :{
        type : Number,
        required: true
      },
      height:{
          type : Number
      },
      bg :{
          type : String
      },
      rowIndex:{
          type: Number
      },
    },

    computed:{
        getStyle: function(){
            return {
                backgroundColor : this.bg,
            }
        },
    },
    }
</script>

<style  scoped>

</style>