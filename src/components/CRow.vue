<template>
  <div class="c-row" :style="getRowGutterStyle" :class="[
  getRowFlex,
  'is-justify-' + this.justify
  ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CRow",
    props: {
      gutter: Number,
      tag: {
        type: String,
        default: 'div'
      },
      type: String,
      justify: {
        type: String,
        default: 'start'
      },
      align: {
        type: String,
        default: 'top'
      },
    },
    computed: {
      getRowGutterStyle() {
        if (this.gutter === 0) {
          return ''
        }
        const value = -(this.gutter / 2) + 'px';
        return {
          marginLeft: value,
          marginRight: value,
        }
      },
      getRowFlex() {
        if (this.type === 'flex') {
          return 'c-row--'+this.type
        } else {
          return ''
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  .c-row{
    position: relative;
    box-sizing: border-box;
  }
  .c-row--flex {
    display: flex;
  }
  .is-justify-center {
    justify-content: center;
  }
  .is-justify-end {
    justify-content: flex-end;
  }
  .is-justify-space-between {
    justify-content: space-between;
  }
  .is-justify-space-around {
    justify-content: space-around;
  }
</style>
