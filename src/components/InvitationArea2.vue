<template>
  <div class="invitation_area">
    <p class="header">
      "우리 손 잡을까요?"<br />
    </p>
    <div class="desc">
      각자의 삶을 열심히 살아온 저희가,<br />
      이제는 손을 잡고 함께 나란히 걸어가려 합니다.<br />
      사랑한다는 말이 어울리는 사람과 함께<br />
      오래도록 있는 힘을 다해 행복해지겠습니다.<br />
      조용하지만 기쁨이 가득한 결혼 소식을<br />
      이렇게 알려드립니다.
    </div>

    <Divider2/>

    <div class="names">
      <img class="names_image" src="../assets/images/new/invitation/male_naems.png" />
      <img class="names_image" src="../assets/images/new/invitation/female_names.png" />
    </div>

    <img class="invi_main_image" src="../assets/images/new/invitation/invi_img.png" />

  </div>
</template>

<script>

import Divider2 from "@/components/Divider2.vue";

export default {
  name: "invitation-area",
  components: {
    Divider2,
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.invitation_area {
  background: var(--secondary-bg-color);
  text-align: center;
  line-height: 0;
  .header {
    padding-top: 56px;
    color: #37794F;
    line-height: 28px;
    font-size: 16px;
  }
  .desc {
    color: #797979;
    font-size: 14px;
    line-height: 30px;
    padding-bottom: 36px;
  }
  .line_area {
    padding-bottom: 36px;
  }
  .line {
    width: 382px;
    border: 0.7px solid;
    color: #D7D7D7;
  }
  .names {
    line-height: 0;
  }
  .names_image {
    width: 252px;
    height: 28px;
  }
  .invi_main_image {
    margin-top: 50px;
    width: 100%;
    height: auto;
  }
}
</style>