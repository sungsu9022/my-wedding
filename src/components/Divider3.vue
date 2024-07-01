<template>
  <div class="line_area"
       :style="{ paddingTop: paddingTop + 'px',
       paddingBottom: paddingBottom + 'px',
       paddingRight: paddingRight + 'px',
       paddingLeft: paddingLeft + 'px',
       opacity: opacity
  }"
  >
    <hr class="line" :style="{ color: color, margin: hrMargin}">
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
    color: {
      type: String,
    },
    opacity: {
      type: Number,
      defaultValue: 1
    },
    hrMargin: {
      type: Number
    }
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
