<template>
  <div id="app">
    <div class="demo-block">
      基础用法
      <div class="demo-block-source">
        <div class="source">
          <zhouInput v-model="value" placeholder="请输入内容"></zhouInput>
        </div>
        <p>{{ value }}</p>
        <div class="demo-block-code-icon"></div>
      </div>
    </div>
    <div class="demo-block">
      禁用状态
      <div class="demo-block-source">
        <div class="source">
          <zhouInput v-model="value" disabled placeholder="请输入内容"></zhouInput>
        </div>
        <p>{{ value }}</p>
        <div class="demo-block-code-icon"></div>
      </div>
    </div>
    <div class="demo-block">
      可清空
      <div class="demo-block-source">
        <div class="source">
          <zhouInput v-model="value1" placeholder="请输入内容" :clear="true"></zhouInput>
        </div>
        <p>{{ value }}</p>
        <div class="demo-block-code-icon"></div>
      </div>
    </div>
    <div class="demo-block">
      可显示密码明文
      <div class="demo-block-source">
        <div class="source">
          <zhouInput v-model="value1" placeholder="请输入内容" :showEye="true" type="password"></zhouInput>
        </div>
        <p>{{ value }}</p>
        <div class="demo-block-code-icon"></div>
      </div>
    </div>
    <div class="demo-block">
      事件
      <div class="demo-block-source">
        <div class="source">
          <zhouInput v-model="value1" placeholder="请输入内容" @input="input"></zhouInput>
        </div>
        <p>{{ value }}</p>
        <div class="demo-block-code-icon"></div>
      </div>
    </div>
    <div class="demo-block">
      带 icon 输入框
      可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot prefix 和 suffix 来放置图标
      <div class="demo-block-source">
        <div class="source">
          <zhouInput v-model="value1" placeholder="请输入内容" @input="input" prefix-icon="icon-user"></zhouInput><br/>
          <zhouInput v-model="value1" placeholder="请输入内容" @input="input"  suffix-icon="icon-search"></zhouInput>
        </div>
        <div class="demo-block-code-icon"></div>
      </div>
    </div>
    <div class="demo-block">
      文本域
      用于输入多行文本信息，通过将 type 属性的值指定为 textarea。
      <div class="demo-block-source">
        <div class="source">
          <zhouInput v-model="textarea" :rows="2" placeholder="请输入内容" type="textarea" @input="input"></zhouInput>
        </div>
        <p>{{ textarea }}</p>
        <div class="demo-block-code-icon"></div>
      </div>
    </div>
    <div class="demo-block">
      自适应文本高度的文本域
      <br/>
      通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 autosize 还可以设定为一个对象，指定最小行数和最大行数。
      <div class="demo-block-source">
        <div class="source">
          <zhouInput v-model="textarea" placeholder="请输入内容" autosize type="textarea" @input="input"></zhouInput>
        </div>
        <div class="source">
          <zhouInput v-model="textarea" placeholder="请输入内容" :autosize="{ minRows: 2, maxRows: 10}" type="textarea" @input="input"></zhouInput>
        </div>
        <div class="demo-block-code-icon"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import './docs/scss/index.scss'
  export default {
    name: 'app',
    data() {
      return{
        name: '周栋',
        value: '111',
        value1: '',
        textarea: '',
        loading: false
      }
    },
    methods: {
      onClickDisabled: function (event) {
        console.log(this.value)
      },
      previousPage: function () {
        console.log(this);
        this.loading = false
      },
      input(e) {
        console.log(e)
      }
    }
  }
</script>
<style lang="scss">
  .demo-block{
    border: 1px solid #ebedf0;
    border-radius: 2px;
    display: inline-block;
    width: 100%;
    position: relative;
    margin: 0 0 16px;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }
  .demo-block .demo-block-source {
    border-bottom: 1px solid #ebedf0;
    color: #444;
    position: relative;
    margin-bottom: -1px;
  }
  .demo-block .demo-block-source .source {
    padding: 20px 24px 20px;
    line-height: 24px;
  }
  .demo-block-code-icon {
    height: 30px;
    line-height: 30px;
    border-top: 1px solid #ebedf0;
    text-align: center;
    cursor: pointer;
  }
</style>
