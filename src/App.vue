<template>
  <div id="v-app-container">
    <FlowerRain />
    <AudioPlayer is-fixed="false"/>
    <TopArea />
    <Divider/>
    <InvitationArea />
    <Divider/>
    <MyGallery2 />
    <Divider/>
    <GoogleMapArea/>
    <Divider/>
    <BankAccountArea/>
    <Divider/>
    <DisqusComments/>

  </div>
</template>

<script>

import FlowerRain from "./common/FlowerRain.vue";
import AudioPlayer from "./components/MyAudioPlayer.vue";
import TopArea from "./components/TopArea.vue";
import InvitationArea from "./components/InvitationArea.vue";
import Divider from "./components/Divider.vue";

import DisqusComments from "./components/DisqusComments.vue"
import BankAccountArea from "@/components/BackAccountArea.vue";
import MyGallery2 from "@/components/MyGallery2.vue";
import GoogleMapArea from "@/components/GoogleMapArea.vue";

export default {
  name: "app",
  components: {
    MyGallery2,
    BankAccountArea,
    FlowerRain,
    AudioPlayer,
    TopArea,
    InvitationArea,
    Divider,
    DisqusComments,
    GoogleMapArea,
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

html {
  --img-blur: 0px;
  --text-color: #544f4f;
  --text-dark-color: #524548;
  --text-light-color: #89757a;
  --title-text-color: #89757a;
  --subtitle-text-color: #c2b2b2;
  --icon-color: #cec3c3;
  --border-size: 0;
  --border-color: #e8dfdf;
  --border-light-color: #e9e5e5;
  --wave-color: #fbfbfb;
  --primary-bg-color: #fbfbfb;
  --secondary-bg-color: #f6f5f5;
  --third-bg-color: #f2eeee;
  --fourth-bg-color: #fff;
  --footer-bg-color: #f2eeee;
  --margin-bg-color: #333;
  --btn-bg-color: rgba(0,0,0,0);
  --btn-text-color: #978686;
  --btn-border-color: #d1c8c8;
  --btn-dark-bg-color: #d0b9b9;
  --btn-dark-text-color: #fff;
  --btn-dark-border-color: #d0b9b9;
  --font-size: 16px;
  --common-margin-lr: 2rem;
  --account-margin-lr: 1.1rem;
  --calendar-margin-lr: 1rem;
  --font-regular: Gowun Dodum;
  --font-regular-spacing: -0.2px;
  --font-gothic: Pretendard Variable;
  --font-gothic-spacing: -0.2px;
  --font-bold: Gowun Dodum;
  --font-bold-weight: bold;
}


#v-app-container {
  font-family: 'GowunDodum', sans-serif !important;
  font-size: 15px;
  max-width: 430px;
  position:relative;
  width:100%;
  max-width:430px;
  padding:0;
  margin:auto;
  -ms-overflow-style:none;
  line-height:2rem;
  box-shadow:0 0 0 1px rgba(0,0,0,.04);
  background: var(--primary-bg-color);
  -webkit-scrollbar{display:none};
}

</style>
