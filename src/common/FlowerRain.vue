<template>
  <div>
    <FlowerLeaf v-for="n in 12" :key="`leaf-${n}`" />
  </div>
</template>

<script>
import FlowerLeaf from "../components/FlowerLeaf.vue";

export default {
  name: "flower-rain",
  components: {
    FlowerLeaf,
  },
};
</script>

<style lang="scss" scoped></style>
