<template>
  <div class="wrap-option">
    <h2 v-html="typeContent.type"></h2>
    <ul v-if="typeContent.type === 'ADD'">
      <li @click="$store.commit('addElement',{type : 'text'})">TEXT</li>
      <li @click="$store.commit('addElement',{type : 'image'})" >IMAGE</li>
      <li @click="$store.commit('addElement',{type : 'button'})" >BUTTON</li>
     
    </ul>
    <ul v-if="typeContent.type === 'BACKGROUND'">
      <li>Color</li>
    </ul>
    <ul v-if="typeContent.type === 'TEMPLATE'">
      <li @click="$store.commit('addTemplateAbout')">TEMPLATE</li>
    </ul>
    <ul v-if="typeContent.type === 'SECTION'">
      <li @click="$store.commit('addSection')">SECTION</li>
      <!-- <li @click="$store.commit('addTemplate','aboutOne')">About one</li>
      <li @click="$store.commit('addTemplate','aboutTwo')">About two</li>
      <li @click="$store.commit('addTemplate','aboutThree')">About three</li> -->
    </ul>
    <div class="close" @click="closeOption"><span>x</span></div>
  </div>
</template>

<script>
import { bus } from "../../main";
export default {
  name: "OptionContent",
  props: {
    typeContent: {
      type: Object,
      required: true,
      default: {}
    }
  },
  methods: {
    closeOption: function() {
      bus.$emit("closeOption", true);
    }
  }
};
</script>

<style scoped>
.wrap-option {
  background: #3899ec; /*linear-gradient(to bottom, rgba(255, 255, 255, 0.96) 0%, rgba(238, 238, 238, 0.96) 100%);*/
  box-shadow: 0 2px 5px 0 rgba(22, 45, 61, 0.58);
  position: fixed;
  height: 300px;
  width: 200px;
  top: 30px;
  left: 90px;
  z-index: 9999999;
  opacity: 0.8;
  padding-bottom: 20px;
  border-radius: 10px;
  animation: ani-option 0.5s forwards;
  padding-top: 20px;
}
@keyframes ani-option {
  from {
    transform: scale(0, 0);
  }
  80% {
    transform: scale(1, 1);
  }
  to {
    transform: scale(1, 1);
  }
}
.wrap-option > ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.wrap-option > h2 {
  color: #fff;
}
.wrap-option > ul > li {
  padding: 2px 10px;
  margin: 0;
  margin-bottom: 10px;
  color: #fff;
  text-align: left;
  font-size: 14px;
  width: 50%;
  margin-left: 20%;
  border-radius: 6px;
  cursor: pointer;
}
.wrap-option > ul > li.active {
  background-color: rgba(0, 0, 0, 0.2);
}
.wrap-option > ul > li:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.close {
  position: absolute;
  z-index: 999999;
  color: red;
  font-size: 14px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  right: 5px;
  top: 5px;
  text-align: center;
  padding: 2px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.96) 0%,
    rgba(238, 238, 238, 0.96) 100%
  );
  cursor: pointer;
}
</style>
