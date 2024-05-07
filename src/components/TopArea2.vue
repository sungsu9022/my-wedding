<template>
  <div>
    <div class="_main_date_warp _green">
      <p><b>06</b></p>
      <div style="width: 33.28px;">
      <Divider3
          :padding-bottom="0"
          :padding-right="0"
          color="#37794f"
          :opacity="0.3"
          :hr-margin="0"
      />
      </div>
      <p><b>08</b></p>
    </div>

    <div class="_main_left_warp _green" style="padding-top:128px;">
      <p class="_english_font" style="font-size: 20px;margin-bottom: 12px;">
        The marriage of
      </p>
      <p>박성수 <span class="_english_font _and">&</span> 김규빈</p>
    </div>

    <div class="_main_image_warp">
      <img class="_main_image" src="../assets/images/new/top/main_image.png" />
    </div>

    <div class="_main_left_warp _big_text _green" style="padding-top:23px;padding-bottom: 85px;">
      <div class="_main_txt">
        <strong>2024년 6월 8일 토요일 오후 5시</strong>
      </div>
      <div class="_large_text" style="margin-top: 5px;">노블발렌티 대치점 단독홀</div>
    </div>
  </div>
</template>

<script>

import Divider3 from "@/components/Divider3.vue";
export default {
  name: "top-area",
  components : {
    Divider3,
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
._main_date_warp {
  font-family: "SourceSerifPro-Semibold";
  text-align: left;
  padding-top:80px;
  margin-left: 24px;
  font-size: 32px;
  ._and {
    margin-left: 12px;
    margin-right: 12px;
    font-size: 24px;
  }
  p {
    margin-top: 5px;
    margin-bottom: 5px;
  }
}

._main_left_warp {
  text-align: left;
  margin-left: 24px;
  font-size: 23px;
  ._and {
    margin-left: 12px;
    margin-right: 12px;
    font-size: 24px;
  }
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
