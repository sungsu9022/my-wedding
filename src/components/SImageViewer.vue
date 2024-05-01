<template>
  <div class="_warp" ref="warp">
    <div style="text-align: right; margin: 10px">
        <a class="_icon_btn" @click="hideViewer">
          <i class="inverted big close icon"></i>
        </a>
    </div>
    <div class="centered-content">
      <a class="_icon_btn _left_btn" @click="prevImage">
        <i class="inverted big angle left icon"></i>
      </a>
      <a class="_icon_btn _right_btn" @click="nextImage">
        <i class="inverted big angle right icon"></i>
      </a>
    </div>
    <div class="_viewer_image">
      <img v-show="isCurrentWideImage" ref="currentWideImage"
           :src="currentImageUrl"
           :style="{ marginTop: wideImageTop + 'px', marginLeft: wideImageLeft + 'px' }"
      >
      <img v-show="!isCurrentWideImage" ref="currentNarrowImage"
           :src="currentImageUrl"
           :style="{ marginTop: narrowImageTop + 'px', marginLeft: narrowImageLeft + 'px' }"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "s-image-viewer",
  props: {
    images : {
      type: Array,
    }
  },
  computed: {
    maxImageSize() {
      return this.images.length
    },

  },
  data() {
    return {
      currentIndex: 0,
      currentImageUrl: "",
      isCurrentWideImage: false,
      wideImageTop: 0,
      wideImageLeft: 0,
      narrowImageTop: 0,
      narrowImageLeft: 0,
    }
  },
  methods: {
    showViewer(imageIndex) {
      document.body.style.overflow = 'hidden';
      this.$refs.warp.style.visibility = 'visible'
      this.currentIndex = imageIndex
      this.showImage()
    },
    hideViewer() {
      document.body.style.overflow = 'auto';
      this.$refs.warp.style.visibility = 'hidden'
    },
    prevImage() {
      const prevImageIndex = this.findPrevImageIndex()
      this.currentIndex = prevImageIndex
      this.showImage()
    },
    nextImage() {
      const nextImageIndex = this.findNextImageIndex()
      this.currentIndex = nextImageIndex
      this.showImage()
    },
    showImage() {
      const imageUrl = this.images[this.currentIndex]
      if(this.isWideImage(imageUrl)) {
        this.isCurrentWideImage = true
        const $image = this.$refs.currentWideImage
        if(!this.wideImageLeft || this.wideImageTop) {
          this.computeWideImageMargin($image)
        }
      } else {
        this.isCurrentWideImage = false
        const $image = this.$refs.currentNarrowImage
        if(!this.narrowImageLeft || this.narrowImageTop) {
          this.computeNarrowImageMargin($image)
        }
      }

      this.currentImageUrl = this.images[this.currentIndex]
    },
    isWideImage(imageSrc) {
      if (/_h\.jpg$/.test(imageSrc)) {
        return true
      } else {
        return false
      }
    },
    findPrevImageIndex() {
      const prevImageIndex = (this.currentIndex - 1 + this.maxImageSize) % this.maxImageSize;
      console.log("prevImageIndex",prevImageIndex)
      return prevImageIndex
    },
    findNextImageIndex() {
      const nextImageIndex = (this.currentIndex + 1) % this.maxImageSize;
      console.log("nextImageIndex",nextImageIndex)
      return nextImageIndex
    },
    computeWideImageMargin(image) {
      const marginTop = this.computeMarginTop(image)
      const marginLeft = this.computeMarginLeft(image)
      console.log("computeWideImageMargin",marginTop, marginLeft)
      this.wideImageTop = marginTop
      this.wideImageLeft =marginLeft
    },
    computeNarrowImageMargin(image) {
      const marginTop = this.computeMarginTop(image)
      const marginLeft = this.computeMarginLeft(image)
      console.log("computeNarrowImageMargin",marginTop, marginLeft)
      this.narrowImageTop = marginTop
      this.narrowImageLeft =marginLeft
    },
    computeMarginTop(imgElement) {
      const imageHeight = imgElement.clientHeight;
      const clientHeight = window.innerHeight;
      const marginTop = (clientHeight - imageHeight) / 2;
      return marginTop
    },
    computeMarginLeft(imgElement) {
      const imageWidth = imgElement.clientWidth;
      const divWidth = imgElement.parentElement.clientWidth; // 이미지를 감싸는 부모 요소의 너비
      const left = (divWidth - imageWidth) / 2;
      return left;
    }
  },
  created() {
    const imageUrl = this.images[this.currentIndex]
    this.currentImageUrl = imageUrl
  }
};
</script>

<style lang="scss" scoped>
._warp {
  visibility: hidden;
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 65536;
}

.centered-content {
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: space-between; /* 좌우로 간격을 벌립니다 */
  height: 100%;
}

._left_btn, ._right_btn {
  padding: 10px 20px;
}

._icon_btn {
  cursor: pointer;
}

._viewer_image > img {
  position: absolute;
  top: 0;
  left: 20px;
  max-width: 430px;
  width: 100%;
  height: auto;
}

._wide_image {
  position: absolute;
  top: 0;
  left: 20px;

  height: auto;
}

</style>
