

<template>
  <div id="kyong">
    <FlowerRain />
    <Divider />
    <TopArea />
    <Divider />
    <MyAudioPlayer />
    <Divider />
    <Gallery />

    <Divider />
    <Celebrate @click="handleClick" :presents="presents" />
    <Divider />
    <Map />
    <Divider />

    <Divider />
    <BottomSheet
      :is-open="isOpen"
      @close="handleClose"
      v-scroll-lock="isOpen"
      :present="selectedPresent"
    />
  </div>
</template>

<script>

import TopArea from "./components/TopArea.vue";
import Gallery from "./components/Gallery.vue";
import Celebrate from "./components/Celebrate.vue";
import Map from "./components/Map.vue";
import FlowerRain from "./common/FlowerRain.vue";
import BottomSheet from "./components/BottomSheet.vue";
import MyAudioPlayer from "./new-components/MyAudioPlayer.vue";

export default {
  name: "App",
  components: {
    TopArea,
    Gallery,
    Celebrate,
    FlowerRain,
    BottomSheet,
    MyAudioPlayer,
    Map,
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
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
button {
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  font: inherit;
}
* {
  box-sizing: border-box;
}
#kyong {
  font-family: "Cafe24Oneprettynight", sans-serif;
  max-width: 460px;
  margin: 0 auto;
  font-size: 15px;
  color: #202121;
  background-color: #fffdf9;
}
</style>
