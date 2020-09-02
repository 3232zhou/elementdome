<template>
  <div class="c-col" :class="['c-col-'+span, getColOffsetStyle]" :style="getColGutterStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CCol",
    props: {
      span: {
        type: Number,
        default: 24
      },
      offset: {
        type: Number,
        default: 0
      }
    },
    computed: {
      getColGutterStyle() {
        console.log(1)
        if(this.$parent.gutter!==0){
          const value = this.$parent.gutter/2+"px";
          return {
            marginLeft: value,
            marginRight: value,
          }
        } else {
          return ''
        }
      },
      getColOffsetStyle() {
        if (this.offset !== 0) {
          return 'c-col-offset' + this.offset
        } else {
          return ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @for $i from 1 through 24 {
  .c-col-#{$i} {
      width: 100%/24*$i;
    }
  }
  @for $i from 1 through 24 {
    .c-col-offset#{$i} {
      margin-left: 100%/24*$i;
    }
  }
  .c-col{
    display: inline-block;
    box-sizing: border-box;
  }
  [class*=el-col-] {
    float: left;
    box-sizing: border-box;
  }
/*

border-box

width 和 height 属性包括内容，内边距和边框，但不包括外边距。这是当文档处于 Quirks模式 时Internet Explorer使用的盒模型。
注意，填充和边框将在盒子内 , 例如, .box {width: 350px; border: 10px solid black;} 导致在浏览器中呈现的宽度为350px的盒子。
内容框不能为负，并且被分配到0，使得不可能使用border-box使元素消失。

这里的维度计算为：

width = border + padding + 内容的  width，

height = border + padding + 内容的 height。

*/
</style>
