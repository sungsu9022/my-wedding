<template>
  <div>
    <FlowerRain />
    <TopArea />
    <Divider/>
    <Gallery />
    <Divider/>
    <MapArea/>
    <Divider/>
    <DisqusComments/>
    <Divider/>
    <AudioPlayer />
  </div>
</template>

<script>

import FlowerRain from "./common/FlowerRain.vue";
import AudioPlayer from "./components/MyAudioPlayer.vue";
import TopArea from "./components/TopArea.vue";
import Gallery from "./components/Gallery.vue";
import Divider from "./components/Divider.vue";
import MapArea from "./components/MapArea.vue";
import DisqusComments from "./components/DisqusComments.vue"

export default {
  name: "app",
  components: {
    FlowerRain,
    AudioPlayer,
    TopArea,
    Gallery,
    Divider,
    MapArea,
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
