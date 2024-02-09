<template>
  <div class="comments">
    <img src="~@/assets/images/note.png" class="note" />
    <div class="description">
      방명록
    </div>
    <div :class="{isHide : '_hidden'}" ref="disqusWrap">
      <Disqus
          shortname="sungsu-parks-tech-blog"
          :pageConfig="pageConfig"
      />
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
    $disqusWrap() {
      return this.$refs.disqusWrap
    },
    isHide() {
      return !this.isShow
    }
  },
  data() {
    return {
      isShow: false,
      pageConfig: {
        title: '방명록',
        language: "ko",
        category_id: 'sports'
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

#disqus_thread iframe #footer {
  display: none;
}

._hidden {
  visibility: hidden;
}

</style>