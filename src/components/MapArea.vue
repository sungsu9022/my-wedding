<template>
  <div class="map">
    <img src="~@/assets/images/cat.png" class="bunny" />
    <div class="description">
      오시는 길
    </div>

    <img class="ui centered large image" src="~@/assets/images/map.jpg">

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
  name: "map-area",
  data() {
    return {
      locationName: "노블발렌티 대치점",
      tmapUrl: "",
      kakaoTaxiUrl: "",
      navermapUrl: "",
      kakaomapUrl: ""

    };
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
