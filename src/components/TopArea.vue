<template>
  <div class="mcard-intro">
    <div class="title">
      <div class="dates">
        <span>24</span>
        <span>06</span>
        <span>08</span>
      </div>
      <div class="wod">SATURDAY</div>
    </div>
    <div>
      <div class="photo-wrap simple">
        <div class="intro-blend-wrap photo gradient-none"><!---->
          <img src="/my-wedding/main.png" class="intro-blend-image img-blur"> <!---->
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="name">
        <div class="groom">성수</div>
        <div class="divider-and">♥</div>
        <div class="bride">규빈</div></div>
      <div class="datetime">
        <div data-v-095e227a="">2024년 6월 8일 토요일 오후 5시
          <br>
          노블발렌티 대치점
        </div>
      </div>
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
.top_area {
  padding-top: 4px;
  padding-bottom: 68px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  .hands {
    width: 75px;
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 16px;
    line-height: 24px;
    &.desc {
      color: #295238;
      font-size: 10px;
      opacity: 0.6;
      margin-bottom: 36px;
    }
    &.header {
      color: #295238;
    }
    &.location {
      color: #295238;
      font-size: 15px;
    }
    &:last-child {
      margin-bottom: 40px;
    }
  }
}

.mcard-intro{position:relative;padding:0 0 40px;--intro-text-color:#49413a;--intro-text-light-color:#595959;text-align: center;}
.mcard-intro .overlay{position:absolute;top:0;left:0;width:100%;z-index:1}
.mcard-intro .title{padding:48px 0 30px;color:var(--intro-text-color);font-family:Crimson Pro;line-height:21px;border-color:#000}
.mcard-intro .title .dates{font-size:0}
.mcard-intro .title .dates>span{display:inline-block;padding:0 8px .1rem;border-right-width:1px;border-right-style:solid;font-size:30px;line-height:20px;text-align:center}
.mcard-intro .title .dates>span:last-child{border:0}
.mcard-intro .wod{letter-spacing:2px;font-size:16px}
.mcard-intro .photo-wrap{padding:0 24px}
.mcard-intro .photo{line-height:0}
.mcard-intro .photo img{width:100%; margin-left: 5px; margin-right: 5px;}
.mcard-intro .photo.border_00{border:1.2rem solid #fff;margin:0 .3rem;box-shadow:1px 2px 8px 0 rgba(54,54,54,.15)}
.mcard-intro .bottom{margin-top:30px;font-size:.9rem}
.mcard-intro .name{display:flex;align-items:center;justify-content:center;gap:16px;font-size:0;margin-bottom:12px;letter-spacing:1px;color:#000}
.mcard-intro .name>div{display:inline-block;text-align:right;font-size:18px;vertical-align:middle}
.mcard-intro .name>div.groom{text-align:right}
.mcard-intro .name>div.divider{position:relative;top:.5px;display:inline-block;content:"";width:1px;height:1.1rem;background:#000;opacity:.85}
.mcard-intro .name>div.divider-and{text-align:center;font-size:18px;}
.mcard-intro .name>div.bride{text-align:left}
.mcard-intro .datetime{line-height:1.8rem;font-size: 15px;}
</style>
