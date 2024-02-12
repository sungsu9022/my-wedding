<template>
  <div class="map">
    <img src="~@/assets/images/cat.png" class="bunny" />
    <div class="description">
      오시는 길
    </div>

<!--    <naver-maps :width="600" :height="400" :mapOptions="mapOptions"></naver-maps>-->

    <iframe
        :src="googleMapSrc"
        width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
    </iframe>

    <div class="cover">
      <div class="navi-apps">
        <a :href="tmapUrl">
          <div class="ico_comm ico_tmap"><img src="../assets/images/icons/tmap.png"/></div>
          <div class="link">T맵</div>
        </a>
      </div>
      <div class="navi-apps">
        <a :href="kakaoTaxiUrl">
          <div class="ico_comm ico_taxi"><img src="../assets/images/icons/kakaot.png"/></div>
          <div class="link">카카오택시</div>
        </a>
      </div>
      <div class="navi-apps">
        <a :href="navermapUrl">
          <div class="ico_comm ico_navermap"><img src="../assets/images/icons/navermap.png"/></div>
          <div class="link">네이버맵</div>
        </a>
      </div>
      <div class="navi-apps">
        <a :href="kakaomapUrl">
          <div class="ico_comm ico_kakaomap"><img src="../assets/images/icons/kakaomap.png"/></div>
          <div class="link">카카오맵</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "google-map-area",
  data() {
    return {
      locationName: "노블발렌티 대치점",
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

.bunny {
  width: 65px;
  margin-bottom: 20px;
}

.description {
  font-size: 12px;
  letter-spacing: 6px;
  margin-bottom: 30px;
}

.navi-apps {
  align-content: center;
  position: relative;

  .ico_comm img {
    vertical-align: middle;
    width: 40px
  }

  div {
    text-align: center;
    padding-top: 10px;
  }

  a{
    text-decoration: none;
  }
}

.cover {
  display: flex;
  justify-content: space-between;
  margin: 22px 10% 22px 10%;
}

.link {
  color: #295238;
}

</style>
