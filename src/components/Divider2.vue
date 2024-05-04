<template>
  <div class="line_area"
       :style="{ paddingTop: paddingTop + 'px', paddingBottom: paddingBottom + 'px', width: width + 'px'}"
  >
    <hr class="line">
  </div>
</template>

<script>
export default {
  name: "my-divider",
  props : {
    paddingTop: {
      type: Number,
      defaultValue: 0,
    },
    paddingBottom: {
      type: Number,
      defaultValue: 36,
    },
    width: {
      type: Number,
      defaultValue: 382,
    },
  }
};
</script>

<style lang="scss" scoped>
.line_area {
  padding-bottom: 36px;
}
.line {
  border: 0.7px solid;
  color: #D7D7D7;
}
</style>
