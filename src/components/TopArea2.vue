<template>
  <div>
    <div class="_main_left_warp" style="padding-top:90px;">
      <img class="_main_date" src="../assets/images/new/top/main_date.png" />
    </div>

    <div class="_main_left_warp" style="padding-top:177px;">
      <img class="_main_title_img" src="../assets/images/new/top/main_title.png" />
    </div>

    <div class="_main_image_warp">
      <img class="_main_image" src="../assets/images/new/top/main_image.png" />
    </div>

    <div class="_main_left_warp _big_text _green" style="padding-top:23px;padding-bottom: 85px;">
      <div class="_main_txt">
        <strong>2024년 6월 8일 토요일 오후 5시</strong>
      </div>
      <div class="_large_text">노블발렌티 대치점 단독홀</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-area",
  methods: {
  },
};
</script>

<style lang="scss" scoped>
._main_left_warp {
  text-align: left;
  margin-left: 24px;
}

._main_date {
  width: 34px;
  height: 88px;
}

._main_title_img {
  width: 181px;
  height: 68px;
}

._main_image_warp {
  text-align: left;
  margin-left: 24px;
  margin-top: 32px;
}

._main_image {
  max-width: 382px;
  max-height: 254px;
  width: 100%;
  height: auto;
}
</style>
