<template>
  <div class="line_area"
       :style="{ paddingTop: paddingTop + 'px',
       paddingBottom: paddingBottom + 'px',
       paddingRight: paddingRight + 'px',
       paddingLeft: paddingLeft + 'px'
  }"
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
    paddingLeft: {
      type: Number,
      defaultValue: 0,
    },
    paddingRight: {
      type: Number,
      defaultValue: 44,
    },
  }
};
</script>

<style lang="scss" scoped>
.line_area {
  padding-bottom: 36px;
  padding-right: 44px;
  width: 100%;
}
.line {
  border: 0.7px solid;
  color: #D7D7D7;
}
</style>
