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
           @click.prevent="showViewer(image, index)"
      >
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
      selectedImageIndex: 0,
    }
  },
  methods: {
    showViewer(image, index) {
      const $viewer = this.$viewerApi({
        images: this.images,
        options: {
          initialViewIndex: index,
          fullscreen: true,
          zoomable: false,
          movable: false,
          toolbar: {
            prev: true,
            next: true,
            close: () => {
              $viewer.destroy()
            },
          }
        }
      })

      document.querySelectorAll('[id^="viewer"]').forEach(element => {
        console.log(element)
        element.addEventListener('touchstart', (e) => {
          e.stopPropagation()
          e.preventDefault()
        });
        element.addEventListener('touchend', (e) => {
          e.stopPropagation()
          e.preventDefault()
        });
      });

      const $closeButtons = document.getElementsByClassName("viewer-close")
      for (let i = 0; i < $closeButtons.length; i++) {
        const element = $closeButtons[i];
        element.addEventListener('touchend', (e) => {
          e.preventDefault()
          $viewer.destroy()
        })
      }

    }
  }
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

.description {
  font-size: 12px;
  letter-spacing: 6px;
  margin-bottom: 30px;
}

._gallery_image {
  width:133px!important;
  min-height: 166px;
  height: auto;
}

@media (max-width:412px){
  ._gallery_image {
    width:130px!important;
    min-height: 162px;
  }
}

@media (max-width:390px){
  ._gallery_image {
    width:125px!important;
    min-height: 156px;
  }
}

@media (max-width:375px){
  ._gallery_image {
    width:120px!important;
    min-height: 149px;
  }
}

@media (max-width:360px) {
  ._gallery_image {
    width:112px!important;
    min-height: 139px;
  }
}

@media (max-width:280px) {
  ._gallery_image {
    width:125px!important;
    min-height: 156px;
  }
}

</style>
