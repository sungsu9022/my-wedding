<template>
  <div id="v-app-container">
    <FlowerRain />
    <AudioPlayer is-fixed="false"/>
    <TopArea2/>
    <InvitationArea2 />
    <MyGallery4 />
    <Divider3 :padding-top="64" :padding-bottom="0" padding-right="24" padding-left="24"/>
    <GoogleMapArea2 />
    <BankAccountArea2/>
    <DisqusComments2/>


  </div>
</template>

<script>

import FlowerRain from "./common/FlowerRain.vue";
import AudioPlayer from "./components/MyAudioPlayer.vue";
import TopArea2 from "./components/TopArea2.vue";
import InvitationArea2 from "./components/InvitationArea2.vue";
import DisqusComments2 from "./components/DisqusComments2.vue"
import BankAccountArea2 from "@/components/BackAccountArea2.vue";
import MyGallery4 from "@/components/MyGallery4.vue";
import GoogleMapArea2 from "@/components/GoogleMapArea2.vue";
import Divider3 from "@/components/Divider3.vue";

export default {
  name: "app",
  components: {
    MyGallery4,
    BankAccountArea2,
    FlowerRain,
    AudioPlayer,
    TopArea2,
    InvitationArea2,
    Divider3,
    DisqusComments2,
    GoogleMapArea2,
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
  },
};
</script>

<style>
/* 기본 폰트 정의 */
@font-face {
  font-family: 'MaruBuri';
  src: url('assets/fonts/MaruBuri-SemiBold.otf') format('opentype');
  font-weight: normal;
}

/* Bold 폰트 정의 */
@font-face {
  font-family: 'MaruBuri';
  src: url('assets/fonts/MaruBuri-Bold.otf') format('opentype');
  font-weight: bold;
}

@font-face {
  font-family: "SnellRoundhand";
  src: url("assets/fonts/SnellRoundhand.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "SourceSerifPro-Semibold";
  src: url("assets/fonts/SourceSerifPro-Semibold.otf") format("opentype");
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
  --primary-bg-color: #FCF7EE;
  --secondary-bg-color: #ffffff;
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
  font-family: 'MaruBuri', sans-serif !important;
  font-size: 17px;
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
  overflow-x: hidden;
}

._big_text { font-size: 17px;}
._large_text {font-size: 16px;}
._small_text {font-size: 15px!important;}
._tiny_text {font-size: 14px;}

._green { color: #37794f;}
._black { color: #333333}
._gray { color: #797979}
._silver { color: #B1B1B1}

._english_font { font-family: "SnellRoundhand"; }

</style>
