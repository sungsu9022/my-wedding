<template>
  <div class="live">
    <img src="../assets/images/hands.png" class="hands" />
    <div>
      <p class = "header">
        "우리 손 잡을까요?"<br />
      </p>
      <p>
        각자의 삶을 열심히 살아온 저희가,<br />
        이제는 손을 잡고 함께 나란히 걸어가려 합니다.<br />
        사랑한다는 말이 어울리는 사람과 함께<br />
        오래도록 있는 힘을 다해 행복해지겠습니다.<br />
        조용하지만 기쁨이 가득한 결혼 소식을<br />
        이렇게 알려드립니다.
      </p>
      <p class="location">
        24년 6월 8일 토요일<br />
        오후 5시<br />
        노블발렌티 대치점<br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "new-top-area",
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.live {
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
</style>
