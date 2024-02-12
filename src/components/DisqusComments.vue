<template>
  <div class="comments">
    <img src="../assets/images/note.png" class="note" />
    <div class="description">
      방명록
    </div>
    <div ref="disqusWrap">
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
  padding-top: 32px;
  padding-bottom: 50px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  color: #295138;
  overflow: hidden;
  .note {
    width: 65px;
    margin-bottom: 20px;
  }
  .description {
    font-size: 12px;
    letter-spacing: 6px;
    margin-bottom: 30px;
  }
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