<template>
  <img class="flower-leaf" :src="imageUrl" :style="cssVars" />
</template>

<script>
export default {
  name: "flower-leaf",
  computed: {
    cssVars() {
      const fallDelay = Math.random() * 12;
      const shakeDelay = Math.random() * 3;

      const shakeDegree = Math.random() * 360;

      const displayAreaRatio = this.computeDisplayAreaRatio(this.displayAreaWidth)
      const leftPosition = this.computeLeftPosition(displayAreaRatio)
      const translateX = Math.random() * (80 - 20) + 20;

      const fallDuration = Math.random() * (16 - 9) + 9;
      const shakeDuration = Math.random() * (3 - 2) + 2;

      return {
        "--fall-delay": fallDelay + "s",
        "--shake-delay": shakeDelay + "s",

        "--shake-degree": shakeDegree + "deg",

        "--left-position": leftPosition + "%",
        "--translate-x": translateX + "px",

        "--fall-duration": fallDuration + "s",
        "--shake-duration": shakeDuration + "s",
      };
    },
    imageUrl() {
      const imageNumber = Math.floor(Math.random() * (6 - 1) + 1);
      return `/wedding/floral-leaf/floral-leaf-${imageNumber}.png`;
    },
  },
  data() {
    return {
      displayAreaWidth: 430
    }
  },
  methods : {
    computeDisplayAreaRatio(displayAreaWidth) {
      const ratio = displayAreaWidth / window.innerWidth
      if(ratio > 1) {
        return 100
      } else {
        return Math.floor(ratio * 100)
      }
    },
    computeLeftPosition(displayAreaRatio) {
      const halfAreaRatio = Math.floor(displayAreaRatio / 2)
      const minRange = 50 - halfAreaRatio;
      const maxRange = 50 + halfAreaRatio - 5;
      const leftPosition = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
      return leftPosition
    }
  }
};
</script>

<style lang="scss" scoped>
.flower-leaf {
  z-index: 100;
  left: var(--left-position);
  -webkit-animation-delay: var(--fall-delay), var(--shake-delay);
  animation-delay: var(--fall-delay), var(--shake-delay);
  position: fixed;
  top: -10%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
  -webkit-animation-name: flowerleafs-fall, flowerleafs-shake;
  -webkit-animation-duration: var(--fall-duration), var(--shake-duration);
  -webkit-animation-timing-function: linear, ease-in-out;
  -webkit-animation-iteration-count: infinite, infinite;
  -webkit-animation-play-state: running, running;
  animation-name: flowerleafs-fall, flowerleafs-shake;
  animation-duration: var(--fall-duration), var(--shake-duration);
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: infinite, infinite;
  animation-play-state: running, running;
}

@-webkit-keyframes flowerleafs-fall {
  0% {
    top: -10%;
  }
  100% {
    top: 100%;
  }
}
@-webkit-keyframes flowerleafs-shake {
  0% {
    -webkit-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }
  50% {
    -webkit-transform: translateX(var(--translate-x))
      rotate(var(--shake-degree));
    transform: translateX(var(--translate-x)) rotate(var(--shake-degree));
  }
  100% {
    -webkit-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }
}
@keyframes flowerleafs-fall {
  0% {
    top: -10%;
  }
  100% {
    top: 100%;
  }
}
@keyframes flowerleafs-shake {
  0% {
    transform: translateX(0px) rotate(0deg);
  }
  50% {
    transform: translateX(var(--translate-x)) rotate(var(--shake-degree));
  }
  100% {
    transform: translateX(0px) rotate(0deg);
  }
}
</style>
