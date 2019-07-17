<template>
  <div class="wrap-option">
    <md-speed-dial md-direction="bottom">
      <md-speed-dial-target class="md-primary">
        <md-icon>reorder</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button @click="openOption('ADD')" class="md-icon-button">
          <md-icon>add_circle_outline</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>streetview</md-icon>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
    <main-option-add-element
      v-if="isOpen"
      :typeContent="{ type: typeOption }"
    ></main-option-add-element>
  </div>
</template>

<script>
import { bus } from "../../main";
export default {
  name: "Option",
  data: function() {
    return {
      isOpen: false,
      typeOption: ""
    };
  },
  methods: {
    openOption: function(type) {
      this.isOpen = true;
      if (this.isOpen) {
        this.typeOption = type;
      }
    },
    openPrevie: function() {}
  },
  mounted() {
    bus.$on("closeOption", () => {
      this.isOpen = false;
    });
  },
  watch: {}
};
</script>

<style scoped>
.wrap-option {
  position: fixed;
  z-index: 9999999;
  widows: 50px;
  /* background-color: thistle; */
  top: 80px;
  left: 20px;
}
.wrap-option > ul {
  list-style-type: none;
  width: 100%;
  padding: 0;
  margin: 0;
  opacity: 0.7;
  position: relative;
}
.wrap-option > ul > li {
  margin-bottom: 10px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  position: relative;
  font-size: 16px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.96) 0%,
    rgba(238, 238, 238, 0.96) 100%
  );
  box-shadow: 0 2px 5px 0 rgba(22, 45, 61, 0.58);
  cursor: pointer;
}
.wrap-option > ul > li > img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
}
</style>