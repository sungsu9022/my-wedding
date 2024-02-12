<template>
  <div class="_fixed_right">
    <button class="circular ui icon button _bgm_color" @click="playAndPause">
      <i v-show="!isPlaying" class="icon volume mute"></i>
      <i v-show="isPlaying" class="icon volume up"></i>
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
      setTimeout(() => {
        this.playAndPause()
      }, this.autoPlayStartTime);
    });
  }
};
</script>
<style>
._fixed_right {
  bottom: 20px;
  position: fixed;
  right: 10px;
  text-align: right;
  z-index: 9999;
}

._bgm_color {
  background-color: #FFB52F!important;
  background: none;
  opacity: 90%;
}

</style>

