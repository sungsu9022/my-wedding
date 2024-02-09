

<template>
  <div>
    <FlowerRain />
    <NewTopArea />
    <Divider/>
    <NewGallery />
    <Divider/>
    <NewMap/>
    <Divider/>
    <DisqusComments/>
    <Divider/>
    <MyAudioPlayer />

  </div>

</template>

<script>

import FlowerRain from "./common/FlowerRain.vue";
import MyAudioPlayer from "./new-components/MyAudioPlayer.vue";
import NewTopArea from "./new-components/NewTopArea.vue";
import NewGallery from "./new-components/NewGallery.vue";
import Divider from "./components/Divider.vue";
import NewMap from "./new-components/NewMap.vue";
import DisqusComments from "./new-components/DisqusComments.vue"

export default {
  name: "NewApp",
  components: {
    FlowerRain,
    MyAudioPlayer,
    NewTopArea,
    NewGallery,
    Divider,
    NewMap,
    DisqusComments,
  },
  data() {
    return {
      isOpen: false,
      presents: [],
      selectedPresent: {},
    };
  },
  created() {
  },
  methods: {
    handleClick(present) {
      this.isOpen = true;
      this.selectedPresent = present;
    },
    handleClose() {
      this.isOpen = false;
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Cafe24Oneprettynight";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Oneprettynight.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
</style>
