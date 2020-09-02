<template>
  <div :class="[
  `${registerName}-input`,
  {
    'zhou-disabled': disabled
  }
  ]">
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <div class="el-input-group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        v-bind="$attrs"
        :value="value"
        :type="inputType"
        :class="{[registerName + '__inner']:true, 'zhou-prefix': $slots.prefix || prefixIcon}"
        :disabled="disabled"
        @input="_input"
        @focus="_focus"
        @blur="_blur"
      />
      <!-- 后置内容 -->
      <span class="zhou-suffix-icon">
        <slot name="suffix"></slot>
        <i :class="[suffixIcon]" v-if="suffixIcon"></i>
        <i class="icon-close"
            v-if="clear&&value"
            @click.stop="_clear"></i>
        <i :class="{'icon-eye-close':eyeShow,'icon-eye':!eyeShow}"
          v-if="value&&showEye && type==='password'"
          @click.stop="eyeShow=!eyeShow"></i>
      </span>
      <!--   前置内容  -->
      <span class="zhou-prefix-icon" v-if="$slots.prefix||prefixIcon">
      <i :class="[prefixIcon]" v-if="prefixIcon"></i>
      <slot name="prefix"></slot>
    </span>
    </template>
    <textarea
      v-else
      :tabindex="tabindex"
      class="zhou-textarea__inner"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
      ref="textarea"
      v-bind="$attrs"
      :disabled="inputDisabled"
      :readonly="readonly"
      :autocomplete="autoComplete || autocomplete"
      :style="textareaStyle"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      :aria-label="label"
    >
    </textarea>
  </div>
</template>

<script>
  import { registerName } from '../register'
  import emitter from '../mixins/emittie'
  import calcTextareaHeight from './calcTextareaHeight';
  import {isKorean} from '../utils/shared'
  export default {
    name: `${registerName}Input`,
    data() {
      return {
        registerName: registerName,
        inputType: this.type,
        eyeShow: false,
        isComposing: false,
        textareaCalcStyle: {},
      }
    },
    mixins: [emitter],
    watch: {
      value(val) {
        this.$nextTick(this.resizeTextarea);
        this.dispatch('formItem', `${registerName}.form.change`, [val, ''])
      },
      eyeShow(value) {
        // 显示或隐藏密码
        this.inputType = value ? 'text' : 'password'
      },
      type() {
        this.$nextTick(() => {
          this.resizeTextarea();
        })
      }
    },
    props: {
      value: [String, Number, Boolean],
      disabled: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'text'
      },
      validateEvent: {
        type: Boolean,
        default: true
      },
      showEye: {
        // 密码框显示眼睛，可切换为明文密码
        type: Boolean,
        default: false
      },
      clear: {
        type: Boolean,
        default: false
      },
      autoComplete: {
        type: String,
        validator(val) {
          process.env.NODE_ENV !== 'production' &&
          console.warn('[Element Warn][Input]\'auto-complete\' property will be deprecated in next major version. please use \'autocomplete\' instead.');
          return true;
        }
      },
      autocomplete: {
        type: String,
        default: 'off'
      },
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      change: Function,
      label: String,
      focus: Function,
      blur: Function,
      tabindex: String,
      readonly: Boolean,
      prefixIcon: String, // 前缀icon
      suffixIcon: String // 后缀icon
    },
    methods: {
      _input(e) {
        const value = e.target.value;
        this.$emit('input', value);
        this.change && this.change(e)
      },
      _focus(e) {
        this._emit('focus', e);
        this.focus && this.focus(e);
        this.dispatch('formItem', `${registerName}.form.focus`, [e]);
      },
      _blur(e) {
        this.dispatch('formItem', `${registerName}.form.blur`, [e]);
        this._emit('blur', e);
        this.blur && this.blur(e);
      },
      _clear() {
        console.log(1);
        this._emit('input', '')
      },
      _emit(type, e) {
        this.$emit(type, e)
        // this[type] && this[type](e)
      },
      handleCompositionStart() {
        this.isComposing = true;
      },
      // 有字符就来这里
      handleCompositionUpdate(event) {
        const text = event.target.value;
        const lastCharacter = text[text.length - 1] || '';
        this.isComposing = !isKorean(lastCharacter);
      },
      handleCompositionEnd(event) {
        if (this.isComposing) {
          this.isComposing = false;
          this.handleInput(event);
        }
      },
      handleInput(event) {
        // should not emit input during composition
        if (this.isComposing) return;
        // should remove the following line when we don't support IE
        if (event.target.value === this.nativeInputValue) return;
        this.$emit('input', event.target.value);
        // ensure native input value is controlled
        this.$nextTick(this.setNativeInputValue)
      },
      textareaStyle() {
        return merge({}, this.textareaCalcStyle, { resize: this.resize });
      },
      handleFocus(event) {
        // console.log(event)
      },
      handleBlur(event) {
        // console.log(event)
      },
      handleChange(event) {
        // console.log(event)
      },
      setNativeInputValue() {
        const input = this.getInput();
        if (!input) return;
        // value相同返回
        if (input.value === this.nativeInputValue) return;
        input.value = this.nativeInputValue;
      },
      // 获取input或者textarea的标签
      getInput() {
        return this.$refs.input || this.$refs.textarea;
      },
      /**
       * @description: 获取 autosize, type 自适应文本高度autosize为true
       * */
      resizeTextarea() {
        // 判断是不是服务端渲染
        if (this.$isServer) return;
        const { autosize, type } = this;
        // 不是textarea就不要进行下一步了
        if (type !== 'textarea') return;
        console.log(autosize);
        if (!autosize) {
          this.textareaCalcStyle = {
            minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
          };
          return;
        }
        const minRows = autosize.minRows;
        const maxRows = autosize.maxRows;
        this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
      }
    },
    computed: {
      inputDisabled() {
        return this.disabled
      },
      nativeInputValue() {
        return this.value === null || this.value === undefined ? '' : String(this.value);
      },
    },
    mounted() {
      this.resizeTextarea();
    }
  }
</script>

<style scoped>

</style>
