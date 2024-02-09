<template>
  <div class="ui labeled icon right floated buttons _fixed_right">
    <button class="ui small button _bgm_color" @click="playAndPause">
      <i v-show="!isPlaying" class="play icon"></i>
      <i v-show="isPlaying" class="pause icon"></i>
      BGM
    </button>
    <audio ref="audio">
      <source src="~@/assets/audio/bgm.mp3" type="audio/mpeg">
      BMG 지원불가
    </audio>
  </div>
</template>

<script>

export default {
  name: "my-audio-player",
  computed: {
    autoPlayStartTime() {
      return this.autoPlayStartSeconds * 1000
    }
  },
  data() {
    return {
      isPlaying: false,
      autoPlayStartSeconds: 1
    }
  },
  methods : {
    playAndPause() {
      const audio = this.$refs.audio
      if(!this.isPlaying) {
        audio.play()
        this.isPlaying = true
      } else {
        audio.pause()
        this.isPlaying = false
      }
    },
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", () => {
      console.log("DOMContentLoaded")
      setTimeout(() => {
        console.log("setTimeout")
        this.playAndPause()
      }, this.autoPlayStartTime);
    });
  }
};
</script>
<style>
._fixed_right {
  bottom: 8px;
  position: fixed;
  right: 3px;
  text-align: right;
  z-index: 9999;
}

._bgm_color {
  background-color: #FFB52F!important;
}

</style>

