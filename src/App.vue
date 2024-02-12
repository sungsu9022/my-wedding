<template>
  <div id="v-app-container">
    <FlowerRain />
    <TopArea />
    <Divider/>
    <InvitationArea />
    <MyGallery />
    <Divider/>
    <MapArea/>
    <Divider/>
    <BankAccountArea/>
    <Divider/>
    <DisqusComments/>
    <AudioPlayer />
  </div>
</template>

<script>

import FlowerRain from "./common/FlowerRain.vue";
import AudioPlayer from "./components/MyAudioPlayer.vue";
import TopArea from "./components/TopArea.vue";
import InvitationArea from "./components/InvitationArea.vue";
import Divider from "./components/Divider.vue";
import MapArea from "./components/MapArea.vue";
import DisqusComments from "./components/DisqusComments.vue"
import BankAccountArea from "@/components/BackAccountArea.vue";
import MyGallery from "@/components/MyGallery.vue";

export default {
  name: "app",
  components: {
    MyGallery,
    BankAccountArea,
    FlowerRain,
    AudioPlayer,
    TopArea,
    InvitationArea,
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
  font-family: "GowunDodum";
  src: url("assets/fonts/GowunDodum-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

#v-app-container {
  font-family: 'GowunDodum', sans-serif !important;
  font-size: 15px;
}


</style>
