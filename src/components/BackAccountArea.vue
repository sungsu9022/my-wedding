<template>
  <div class="bank_area">
    <img src="~@/assets/images/heart.svg" class="image" />
    <div class="description">
      마음 전하실 곳
    </div>

    <bank-accordion/>

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
  margin-top: 18px;
  margin-bottom: 18px;
  text-align: center;
}

.bank_area .image {
  width: 65px;
  margin-bottom: 20px;
}

.description {
  font-size: 12px;
  letter-spacing: 6px;
  margin-bottom: 30px;
}
</style>
