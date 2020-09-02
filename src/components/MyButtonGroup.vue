<template>
  <div class="c-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "MyButtonGroup"
  }
</script>

<style lang="scss" scoped>
  .c-button-group{
    display: inline-block;
    vertical-align: middle;
    .c-button + .c-button {
      margin-right: 0;
    }
    .c-button:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .c-button:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &:after, &:before {
      display: table;
      content: "";
    }
    .c-button:last-child {
      border-left-color: hsla(0,0%,100%,.5);
    }
    .c-button:not(:first-child):not(:last-child) {
      border-left-color: hsla(0,0%,100%,.5);
      border-radius: 0;
    }
  }

</style>
