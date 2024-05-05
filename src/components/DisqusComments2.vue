<template>
  <div class="comments">
    <div class="title_area _english_font _big_text _green">
      Guest message
    </div>

    <div class="_big_text _green">
      <b>방명록</b>
    </div>

    <div class="desc_area _large_text _gray">
      축하 메세지를 남겨주세요.
    </div>

    <div ref="disqusWrap" class="_disqus_wrap">
      <Disqus
          shortname="my-wedding-dsxdcsfgsj"
          :pageConfig="pageConfig"
      />
<!--      최종 완료 후 조정 -->
<!--      <div class="_hidden"></div>-->
    </div>

  </div>

</template>

<script>

import {Disqus} from "vue-disqus";

export default {
  name: "disqus-comments",
  components: {
    Disqus,
  },
  computed: {
  },
  data() {
    return {
      pageConfig: {
        title: '방명록',
        language: "ko",
        url: "https://sungsu9022.github.io/my-wedding/"
      },
    }
  },
  methods : {
  },
  mounted() {
  }
};

</script>

<style scoped lang="scss">
.comments {
  text-align: center;
  background-color: #FBFBFB;
}

.title_area {
  padding-top: 54px;
  line-height: 24px;
  margin-bottom: 8px;
}

.desc_area {
  margin-top: 16px;
  margin-bottom: 36px;
  line-height: 30px;
}

._disqus_wrap {
  margin: 10px;
}

._hidden {
  width: 100%;
  height: 100px;
  position: absolute;
  z-index: 999;
  background-color: white;
  /* background: red; */
  bottom: -2776px;
}


@media (max-width:1024px){
  ._hidden { bottom: -2489px }
}

@media (max-width:820px){
  ._hidden { bottom: -1970px;}
}

@media (max-width:768px){
  ._hidden { bottom: -2092px;}
}

@media (max-width:430px){
  ._hidden {bottom: -2110px;}
}

@media (max-width:412px){
  ._hidden {bottom: -2101px;}
}

@media (max-width:390px){
  ._hidden {bottom: -2140px;}
}

@media (max-width:375px){
  ._hidden {bottom: -2293px;}
}

@media (max-width:360px) {
  ._hidden {bottom: -2193px;}
}

@media (max-width:280px) {
  ._hidden {bottom: -2227px;}
}
</style>