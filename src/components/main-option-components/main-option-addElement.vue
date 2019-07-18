<template>
  <div class="wrap-option">
    <h2 v-html="$t('public.'+typeContent.type.toLowerCase())"></h2>
<!--  -->
<md-list v-if="typeContent.type === 'ADD'" >
        <md-list-item md-expand >
          <md-icon>format_size</md-icon>
          <span class="md-list-item-text">Text</span>
          <md-list slot="md-expand">
            <!-- <md-list-item class="md-inset"  v-for="(text) in template['themed_text']" :key="text.name"><span v-html="text.name" @click="$store.commit('addTemplate',text)"></span></md-list-item> -->
            <md-list-item class="md-inset" @click="$store.commit('addElement',{type : 'text'})"> <md-icon>format_size</md-icon>Blank</md-list-item>
            <!-- <md-list-item class="md-inset" v-for="(text) in template['title_text']" :key="text.name"><span v-html="text.name" @click="$store.commit('addTemplate',text)"></span></md-list-item> -->
          </md-list>
        </md-list-item>

        <md-list-item md-expand>
          <md-icon>collections</md-icon>
          <span class="md-list-item-text">Image</span>

          <md-list slot="md-expand">
            <md-list-item class="md-inset" @click="$store.commit('addElement',{type : 'image'})"><md-icon>collections</md-icon>Simple Image</md-list-item>
          </md-list>
        </md-list-item>

        <md-list-item md-expand>
          <md-icon>video_library</md-icon>
          <span class="md-list-item-text">Button</span>
          <md-list slot="md-expand">
            <md-list-item class="md-inset" @click="$store.commit('addElement',{type : 'button'})"><md-icon>video_library</md-icon>BUTTON</md-list-item> 
          </md-list>
        </md-list-item>

        <md-list-item md-expand>
          <md-icon>crop_landscape</md-icon>
          <span class="md-list-item-text">Strip</span>
          <md-list slot="md-expand">
            <md-list-item class="md-inset" @click="$store.commit('addSection')"><md-icon>crop_landscape</md-icon>Section</md-list-item>
          </md-list>
        </md-list-item>

        <md-list-item md-expand>
          <md-icon>grade</md-icon>
          <span class="md-list-item-text">Shape</span>
          <md-list slot="md-expand">
            <md-list-item class="md-inset" @click="$store.commit('addElement',{type : 'lineHorizontal'})"><md-icon>view_stream</md-icon>Line Horizontal</md-list-item>
            <md-list-item class="md-inset" @click="$store.commit('addElement',{type : 'lineVertical'})"><md-icon>view_week</md-icon>Line Vertical</md-list-item>
          </md-list>
        </md-list-item>
        <md-list-item md-expand>
          <md-icon>picture_in_picture</md-icon>
          <span class="md-list-item-text">SlideShow</span>
          <md-list slot="md-expand">
            <md-list-item class="md-inset" @click="$store.commit('addElement',{type : 'sildeShow',name:'slide basic'})"><md-icon>picture_in_picture</md-icon>Slideshow</md-list-item>
          </md-list>
        </md-list-item>

        <md-list-item md-expand>
          <md-icon>subtitles</md-icon>
          <span class="md-list-item-text">Box & Field</span>
          <md-list slot="md-expand">
            <md-list-item class="md-inset" @click="$store.commit('addElement',{type : 'box'})"><md-icon>subtitles</md-icon>Box</md-list-item>
            <md-list-item class="md-inset"  @click="$store.commit('addElement',{type : 'field'})"><md-icon>subtitles</md-icon>Field</md-list-item>
          </md-list>
        </md-list-item>

        <md-list-item md-expand>
          <md-icon>list_alt</md-icon>
          <span class="md-list-item-text">List & Grid</span>
          <md-list slot="md-expand">
            <md-list-item class="md-inset" @click="$store.commit('addElement',{type : 'list'})"><md-icon>list_alt</md-icon>List</md-list-item>
          </md-list>
        </md-list-item>

        <md-list-item md-expand>
          <md-icon>drafts</md-icon>
          <span class="md-list-item-text">Contact</span>
          <md-list slot="md-expand">
            <md-list-item class="md-inset"  v-for="contact in template['template_contact']" :key="contact.name"  @click="$store.commit('addTemplate',contact)"><md-icon>drafts</md-icon>{{contact.name}}</md-list-item>
          </md-list>
        </md-list-item>

        <md-list-item md-expand>
          <md-icon>subscriptions</md-icon>
          <span class="md-list-item-text">Video</span>
          <md-list slot="md-expand">
            <md-list-item class="md-inset"  @click="$store.commit('addElement',{type : 'video'})"><md-icon>subscriptions</md-icon>YOUTUBE</md-list-item>
          </md-list>
        </md-list-item>
      </md-list>
<!--  -->
    <!-- <vue-tabs  v-if="typeContent.type === 'ADD'" 
              active-tab-color="#e74c3c" 
              active-text-color="white"
              type="pills"
              :start-index="1"
              direction="vertical"
        > -->
        <!-- <v-tab  title="Text" icon="ti-user">
          <ul>
            <li class="group-list"><span>themed text</span></li>
            <li v-for="(text) in template['themed_text']" :key="text.name"><span v-html="text.preview" @click="$store.commit('addTemplate',text)"></span></li>
            <li class="item-group-list" @click="$store.commit('addElement',{type : 'text'})">Blank text</li>
            <li class="group-list"><span>Title</span></li>
            <li v-for="(text) in template['title_text']" :key="text.name"><span v-html="text.preview" @click="$store.commit('addTemplate',text)"></span></li>
            
          </ul>
        </v-tab> -->
        <!-- <v-tab title="Image" icon="ti-settings">
          <ul>
            <li @click="$store.commit('addElement',{type : 'image'})" ><Icon type="ios-image" /> Simple Image</li>
          </ul>
        </v-tab> -->

        <!-- <v-tab title="Button" icon="ti-check">
          <ul>
            <li @click="$store.commit('addElement',{type : 'button'})" >Simple Button</li>
            <li @click="$store.commit('addElement',{type : 'button'})" >Simple Button</li>
          </ul>
        </v-tab> -->
        <!-- <v-tab title="Strip" icon="ti-check">
          <ul>
            <li @click="$store.commit('addSection')">SECTION</li>
            <li v-for="strip in template['template_strip']" :key="strip.name"  @click="$store.commit('addTemplate',strip)">{{strip.name}}</li>
          </ul>
        </v-tab> -->
        <!-- <v-tab title="Shape" icon="ti-check">
          <ul>
              <li @click="$store.commit('addElement',{type : 'lineHorizontal'})">Line Horizontal</li>
               <li @click="$store.commit('addElement',{type : 'lineVertical'})">Line Vertical</li>
          </ul>
        </v-tab> -->
        <!-- <v-tab title="SlideShow" icon="ti-check">
          <ul>
              <li @click="$store.commit('addElement',{type : 'sildeShow',name:'slide basic'})">Fullwidth SlideShow</li>
          </ul>
        </v-tab> -->
        <!-- <v-tab title="Box" icon="ti-check">
          <ul>
              <li @click="$store.commit('addElement',{type : 'box'})">My box</li>
              <li @click="$store.commit('addElement',{type : 'field'})">Field</li>
          </ul>
        </v-tab> -->
        <!-- <v-tab title="List&Grid" icon="ti-check">
          <ul>
              <li @click="$store.commit('addElement',{type : 'list'})">My List 1</li>
          </ul>
        </v-tab> -->
        <!-- <v-tab title="Contact" icon="ti-check">
          <ul>
              <li  v-for="contact in template['template_contact']" :key="contact.name"  @click="$store.commit('addTemplate',contact)">{{contact.name}}</li>
          </ul>
        </v-tab> -->
        <!-- <v-tab title="Video" icon="ti-check">
          <ul>
              <li  @click="$store.commit('addElement',{type : 'video'})"><Icon type="logo-youtube" /> YOUTUBE</li>
          </ul>
        </v-tab> -->
    <!-- </vue-tabs> -->
    <div class="close" @click="closeOption"><span>x</span></div>
  </div>
</template>

<script>
import { bus } from "../../main";
import TemplateList from '../../DefaultTemplate'
export default {
  name: "OptionContent",
  props: {
    typeContent: {
      type: Object,
      required: true,
      default: {}
    }
  },
  data:function(){
    return{
      template : []
    }
  },
  methods: {
    closeOption: function() {
      bus.$emit("closeOption", true);
    }
  },
  mounted:function(){
    this.template = TemplateList.Template;
  }
};
</script>

<style scoped>
.wrap-option {
  background: #3899ec; /*linear-gradient(to bottom, rgba(255, 255, 255, 0.96) 0%, rgba(238, 238, 238, 0.96) 100%);*/
  box-shadow: 0 2px 5px 0 rgba(22, 45, 61, 0.58);
  position: fixed;
  width: 300px;
  top: 30px;
  left: 90px !important;
  z-index: 9999999;
  /* opacity: 0.8; */
  /* padding-bottom: 20px; */
  border-radius: 10px;
  animation: ani-option 0.5s forwards;
  overflow-y: scroll;
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
  overflow-y: scroll;
  height: 460px;
}
.wrap-option > ul>li{
  color: #ffffff;
}
.wrap-option > h2 {
  color: #fff;
  position: relative;
  margin: 5px 0 5px 0;
  font-size: 26px;
}
.wrap-option > h2::after{
  position: absolute;
  content: "";
  width: 100%;
  height:2px;
  background-color: #ffffff;
  bottom: 0;
  left: 0;
}


/* .wrap-option > ul > li {
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
} */
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
