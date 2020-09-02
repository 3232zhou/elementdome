<template>
  <button class="c-button" :type="nativeType" :disabled="disabled" :class="['c-button--' + type, buttonSizeClass, {
  'is-plain': plain,
  'is-round': round,
  'is-circle': circle,
  'is-disabled': disabled,
  'is-loading': loading
  }]"
          @click="handleClick"
  >
    <i v-if="loading" class="el-icon-loading"></i>
    <i v-if="!loading && icon" :class="icon"></i>
    <span v-if="$slots.default">
       <slot/>
    </span>
  </button>
</template>

<script>
  export default {
    name: "MyButton",
    props: {
      type: {
        default: 'default',
        type: String
      },
      plain: {
        default: false,
        type: Boolean
      },
      round: {
        default: false,
        type: Boolean
      },
      circle: {
        default: false,
        type: Boolean
      },
      disabled: {
        default: false,
        type: Boolean
      },
      icon: {
        type: String
      },
      loading: {
        type: Boolean
      },
      size: {
        type: String,
        validator(value) {
          return ['medium', 'small', 'mini'].indexOf(value) !== -1
        }
      },
      'nativeType': {
        default: 'button',
        type: String,
        validator(value) {
          return ['button', 'submit', 'reset'].indexOf(value) !== -1
        }
      }
    },
    computed: {
      buttonSizeClass:function () {
        if (this.size) {
          return 'c-button--' + this.size
        }
        return null
      }
    },
    methods: {
      handleClick: function (event) {
        if (this.$props.disabled) {
          return;
        }
        this.$emit('onClick', event)
      }
    }
  }
</script>

<style lang="scss">
  @font-face {
    /*font-family: element-icons;*/
    font-family: "element-icons";
    src: url(../assets/element-icons.woff) format("woff"), url(../assets/element-icons.ttf) format("ttf");
    font-weight: normal;
    font-style: normal;
  }
</style>
