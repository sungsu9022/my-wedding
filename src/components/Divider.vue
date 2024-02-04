<template>
  <div class="divider">
    <img src="~@/assets/images/divider.png" />
  </div>
</template>

<script>
export default {
  name: "my-divider",
};
</script>

<style lang="scss" scoped>
.divider {
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  img {
    width: 100%;
  }
}
</style>
