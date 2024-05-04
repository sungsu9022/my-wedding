<template>
  <div class="comments">
    <div class="title_area">
      Guest message
    </div>
    <img class="title_img2" src="../assets/images/new/comments/title.png" />

    <div class="desc_area">
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
  background: var(--secondary-bg-color);
}

.title_area {
  padding-top: 54px;
  font-family: "SnellRoundhand";
  font-size: 15px;
  line-height: 24px;
  color: #37794F;
}

.title_img2 {
  margin-top: 15px;
  width: 48px;
  height: 16px;
}

.desc_area {
  margin-top: 21px;
  font-size: 14px;
  line-height: 30px;
  color: #797979;
}

._disqus_wrap {
  margin-top: 36px;
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