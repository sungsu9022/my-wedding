<template>
  <div class="bank_area">
      <div class="title_area">
        Celebrate
      </div>
    <img class="title_img2" src="../assets/images/new/bank/title.svg" />

    <div class="text_area">
      참석이 어려우신 분들께서는<br>
      축하의 마음을 담아 축의금을 전달해주세요.<br>
      축의금이 아닌 마음만으로도<br>
      충분히 감사드립니다.
    </div>

    <bank-accordion style="margin-top: 24px;padding-bottom: 5px"/>

  </div>
</template>

<script>
import BankAccordion from "@/components/BankAccordion.vue";

export default {
  name: "bank-account-area",
  components: {
    BankAccordion,
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>

.bank_area {
  margin-top: 56px;
  padding-bottom: 56px;
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
  width: 124px;
  height: 16px;
}

.text_area {
  margin-top: 21px;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: -0.2%;
  color: #797979;
}
</style>
