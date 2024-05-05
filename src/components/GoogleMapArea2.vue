<template>
  <div class="map">
    <div class="title_area _english_font _big_text _black">
      Location
    </div>
    <div class="_big_text _black">
      <b>오시는 길</b>
    </div>

    <div class="address_area _large_text _gray">
      서울시 강남구 영동대로 325<br>
      S TOWER B1층 노블발렌티 대치점<br>
      <p>T. 02-539-0400</p>
    </div>

    <a style="cursor: pointer" @click="copyAddress">
      <img class="addr_btn" src="../assets/images/new/map/aadr_btn.png" />
    </a>

    <div class="bottom center ui toast-container _toast" v-show="showCopyCompleteModal">
      <div class="floating toast-box" style="text-align: left">
        <div role="alert" class="ui toast compact _toast_color" style="opacity: 1;">
          <i class="copy icon" style="visibility: visible;"></i>
          <div class="content">
            <div class="message">복사가 완료되었습니다.</div>
          </div>
        </div>
      </div>
    </div>



    <iframe
        class="_google_map_iframe"
        :src="googleMapSrc"
        allowFullScreen="" loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
    </iframe>

    <div class="util_btn_icon_area">
      <a :href="navermapUrl">
        <img class="util_btn_icon" src="../assets/images/new/map/navermap.png"/>
      </a>
      <a :href="kakaoTaxiUrl">
        <img class="util_btn_icon" src="../assets/images/new/map/kakaonavi.png"/>
      </a>
      <a :href="tmapUrl">
        <img class="util_btn_icon" src="../assets/images/new/map/tmap.png"/>
      </a>
    </div>

    <div class="map_desc_area _tiny_text _gray">
      <p class="_large_text _green"><b>자가용</b></p>
      <Divider3 :padding-bottom="0" padding-right="44"/>
      <strong class="_small_text _black">경부고속도로</strong><br>
      양재IC 양재 방면으로 오른쪽 방향<br>
      > 개포3, 4단지 삼거리(대치역 방면 좌회전)<br>
      > 은마 아파트 > 대치우성 아파트 좌회전<br>
      > 노블발렌티 대치점<br>
      <br>
      <strong class="_small_text _black">서울 서부, 강북지역</strong><br>
      영동대교 남단 '경기고교사거리' 방면 > 봉은사역<br>
      > 삼성역 직진 > 노블발렌티 대치점<br>
      <br>
      <strong class="_small_text _black">서울 동남부 지역</strong><br>
      2호선 삼성역(무역센터)교차로 > 학여울역(SETEC)방향<br>
      우회전 > 노블발렌티 대치점
    </div>

    <div class="map_desc_area _tiny_text _gray">
      <p class="_large_text _green"><b>지하철</b></p>
      <Divider3 :padding-bottom="0" padding-right="44"/>
      <strong class="_small_text _black">2호선 삼성역 3번 출구 30m 전방에서 셔틀버스 운행</strong><br>
      셔틀버스 수시운행, 도보 이용시 7분 소요
    </div>

    <div class="map_desc_area _tiny_text _gray">
      <p class="_large_text _green"><b>버스</b></p>
      <Divider3 :padding-bottom="0" padding-right="44"/>
      <strong class="_small_text _black">휘문고, 대치 2동 주민센터 하차</strong><br>
      간선: 342, 401<br>
      지선: 4318, 4319<br>
      일반: 11-3, 917<br>
      직행: 500-2, 9407, 9507, 9607
    </div>
  </div>
</template>

<script>

import Divider3 from "@/components/Divider3.vue";

export default {
  name: "google-map-area",
  components : {
    Divider3
  },
  data() {
    return {
      locationName: "노블발렌티 대치점",
      address : "서울시 강남구 영동대로 325",
      showCopyCompleteModal: false,
      tmapUrl: "",
      kakaoTaxiUrl: "",
      navermapUrl: "",
      kakaomapUrl: "",
      googleMapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.193781032656!2d127.0654114!3d37.503347500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5935c76961b%3A0x689edb95b05a8fbb!2z64W467iU67Cc66CM7YuwIOuMgOy5mOygkA!5e0!3m2!1sko!2skr!4v1707751789248!5m2!1sko!2skr",
    }
  },
  mounted() {
    this.makeUrls()
  },
  methods: {
    makeUrls() {
      const locationName = this.locationName
      this.tmapUrl = "tmap://search?name=" + locationName
      this.kakaoTaxiUrl = "https://t.kakao.com/launch?type=taxi&amp;dest_lat=37.49878007763176&amp;dest_lng=127.03170076652506&amp;ref=localweb"
      this.navermapUrl = "nmap://search?query=" + locationName
      this.kakaomapUrl = "kakaomap://search?q=" + locationName
    },
    copyAddress() {
      this.$copyText(this.address).then(() => {
        this.showCopyCompleteModal = true
        setTimeout(() => {
          this.showCopyCompleteModal = false
        }, 1000)
      })
    }
  }
};
</script>

<style lang="scss" scoped>

.map {
  margin-top: 18px;
  margin-bottom: 18px;
  text-align: center;
}

.title_area {
  margin-top: 56px;
  line-height: 24px;
  color: #797979;
  margin-bottom: 8px;
}


.address_area {
  margin-top: 16px;
  line-height: 30px;
  p {
    margin-top: 4px;
  }
}

.addr_btn {
  width: 82px;
  height: 44px;
  margin-top: 24px;
  line-height: 28px;
  margin-bottom: 48px;
}

._toast {
  bottom: 300px!important;
}

._toast_color {
  background-color: #4d7846!important;
  opacity: 0.9!important;
  color: white!important;
}

._google_map_iframe {
  margin-left: 10px;
  margin-right: 10px;
  border: 0;
  width: 80%;
  min-height: 310px;
  min-width: 320px;
}

.util_btn_icon_area {
  margin-top: 16px;
}

.util_btn_icon {
  width: 113px;
  height: 46px;
  background: var(--secondary-bg-color);
}

.map_desc_area {
  text-align: left;
  margin-top: 56px;
  margin-left: 43px;
  line-height: 28px;
}

</style>
