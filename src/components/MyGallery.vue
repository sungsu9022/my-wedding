<template>
  <div class="gallery">
    <img src="../assets/images/bunny.png" class="bunny" />
    <div class="description">
      photo gallery
    </div>
    <div class="gallery-container" >
      <div class="gallery-inner">
        <Flicking :options="{ moveType: 'freeScroll', bound: true }">
          <div class="gallery-item" v-for="(image, index) in images" :key="index" @click="showViewer($event, index)">
            <div class="image">
              <img :src="image"
              />
            </div>
            <div class="arch"></div>
          </div>
        </Flicking>
      </div>
    </div>
  </div>
</template>

<script>

import viewerImages from "@/common/viewerImages";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";

export default {
  name: "my-gallery",
  components: {
    Flicking
  },
  data() {
    return {
      itemSize: viewerImages.images.length,
      images : viewerImages.images,
      // imageWidth: "240",
      // galleryInnerWidth: (this.imageWidth * this.itemSize) + 100,
    }
  },
  methods: {
    showViewer(e, imageNo) {
      e.preventDefault()
      const $viewer = this.$viewerApi({
        images: this.images,
        options: {
          initialViewIndex: imageNo,
          fullscreen: true,
          toolbar: {
            prev: true,
            next: true,
            close: () => {
              $viewer.destroy()
            },
          }
        }
      })

    }
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  padding-top: 32px;
  padding-bottom: 50px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  color: #295138;
  overflow: hidden;
  .bunny {
    width: 65px;
    margin-bottom: 20px;
  }
  .description {
    font-size: 12px;
    letter-spacing: 6px;
    margin-bottom: 30px;
  }
  .gallery-container {
    overflow-x: auto;
    .gallery-inner {
      display: flex;
      width: 2980px;
      .gallery-item {
        flex: 0 0 240px;
        position: relative;
        width: 240px;
        height: 360px;
        margin-right: 10px;
        &:before {
          position: absolute;
          top: 0;
          left: -1px;
          display: block;
          content: "";
          width: 2px;
          height: 360px;
          background-color: #fffdf9;
          z-index: 11;
        }
        &:after {
          position: absolute;
          top: 0;
          right: -1px;
          display: block;
          content: "";
          width: 2px;
          height: 360px;
          background-color: #fffdf9;
          z-index: 11;
        }
        .arch {
          position: absolute;
          top: 0;
          left: 0;
          width: 240px;
          height: 360px;
          background-image: url("~@/assets/images/arch.png");
          background-repeat: no-repeat;
          background-size: 240px auto;
          background-position: top left;
          z-index: 10;
        }
        .image {
          position: absolute;
          top: 0;
          left: 0;
          width: 240px;
          height: 360px;
          overflow: hidden;
          img {
            transition: transform 100ms;
            width: 296px;
            height: 360px;
          }
        }
      }
    }
  }
}
</style>
