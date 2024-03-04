<template>
  <div class="_gallery">
    <img src="../assets/images/bunny.png" class="bunny" />
    <div class="description">
      Photo Gallery
    </div>
    <div class="ui images">
      <img class="ui image _gallery_image"
           v-for="(image, index) in images"
           :key="index"
           :src="image"
           @click="showDetailViewer(image, index)"
      >
    </div>

    <div ref="dimmer" v-show="showViewer">
      <div class="ui dimmer modals page transition visible active" style="display: flex !important;">
        <img class="ui centered large image" :src="selectedImage">

        <div class="_viewer_btn_area">
          <button class="circular ui icon button" @click="beforeViewerImage">
            <i class="icon angle left"></i>
          </button>
          <button class="circular ui icon button" @click="afterViewerImage">
            <i class="icon angle right"></i>
          </button>

          <button class="circular ui icon button" @click="closeViewer">
            <i class="icon times"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import viewerImages from "@/common/viewerImages";

export default {
  name: "my-gallery2",
  computed: {
    selectedImage() {
      return viewerImages.images[this.selectedImageIndex]
    }

  },
  data() {
    return {
      itemSize: viewerImages.images.length,
      images : viewerImages.images,
      showViewer: false,
      selectedImageIndex: 0,
    }
  },
  methods: {
    showDetailViewer(image, index) {
      this.showViewer = !this.showViewer
      this.selectedImageIndex = index
    },
    beforeViewerImage() {
      const currentIndex = (this.selectedImageIndex - 1 + this.itemSize) % this.itemSize;
      this.selectedImageIndex = currentIndex
    },

    afterViewerImage() {
      const currentIndex = (this.selectedImageIndex + 1) % this.itemSize;
      this.selectedImageIndex = currentIndex
    },
    closeViewer() {
      this.showViewer = false
    }
  },
};
</script>

<style lang="scss" scoped>

._gallery {
  margin-top: 18px;
  margin-bottom: 18px;
  text-align: center;
}

.bunny {
  width: 65px;
  margin-bottom: 20px;
}

._gallery_image {
  width:133px;
  min-height: 166px;
  height: auto;
}

.description {
  font-size: 12px;
  letter-spacing: 6px;
  margin-bottom: 30px;
}


._viewer_btn_area {
  position: absolute;
  bottom: 5px;
}

._viewer_btn_area>.button {
}

</style>
