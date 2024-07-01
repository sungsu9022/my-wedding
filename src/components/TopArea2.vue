<template>
  <div>
    <div class="_main_date_warp _green">
      <p><b>{{ month }}</b></p>
      <div style="width: 33.28px;">
      <Divider3
          :padding-bottom="0"
          :padding-right="0"
          color="#37794f"
          :opacity="0.3"
          :hr-margin="0"
      />
      </div>
      <p><b>{{ day }}</b></p>
    </div>

    <div class="_main_left_warp _green" style="padding-top:128px;">
      <p class="_english_font" style="font-size: 20px;margin-bottom: 12px;">
        The marriage of
      </p>
      <p>{{ male }} <span class="_english_font _and">&</span> {{ female }}</p>
    </div>

    <div class="_main_image_warp">
      <img class="_main_image" src="../assets/images/new/top/main_image.png" />
    </div>

    <div class="_main_left_warp _big_text _green" style="padding-top:23px;padding-bottom: 85px;">
      <div class="_main_txt">
        <strong>{{ date }}</strong>
      </div>
      <div class="_large_text" style="margin-top: 5px;">{{ location }}</div>
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
  data() {
    return {
      month: "08",
      day: "31",
      male: "XXX",
      female: "YYY",
      date: "2024년 8월 31일 토요일 오후 N시",
      location: "어딘가 웨딩홀 ZZ홀(N층)"
    }

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
