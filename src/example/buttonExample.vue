<template>
  <div class="demo-button">
    <div class="c-row">
      <my-button @onClick="onClickDisabled">默认按钮</my-button>
      <my-button type="primary">主要按钮</my-button>
      <my-button type="success">成功按钮</my-button>
      <my-button type="info">信息按钮</my-button>
      <my-button type="warning">警告按钮</my-button>
      <my-button type="danger">危险按钮</my-button>
    </div>
    <div class="c-row">
      <my-button plain>朴素按钮</my-button>
      <my-button type="primary" plain>主要按钮</my-button>
      <my-button type="success" plain>成功按钮</my-button>
      <my-button type="info" plain>信息按钮</my-button>
      <my-button type="warning" plain>警告按钮</my-button>
      <my-button type="danger" plain>危险按钮</my-button>
    </div>
    <div class="c-row">
      <my-button round>圆角按钮</my-button>
      <my-button type="primary" round>主要按钮</my-button>
      <my-button type="success" round>成功按钮</my-button>
      <my-button type="info" round>信息按钮</my-button>
      <my-button type="warning" round>警告按钮</my-button>
      <my-button type="danger" round>危险按钮</my-button>
    </div>
    <div class="c-row">
      <my-button circle></my-button>
      <my-button type="primary" :loading="loading"  circle icon="el-icon-loading"></my-button>
      <my-button type="success" circle icon="el-icon-loading"></my-button>
      <my-button type="info" circle></my-button>
      <my-button type="warning" circle></my-button>
      <my-button type="danger" circle></my-button>
    </div>
    <div class="c-row">
      <div class="" style="margin-top: 30px">禁用状态</div>
      <my-button disabled>默认按钮</my-button>
      <my-button type="primary" disabled>主要按钮</my-button>
      <my-button type="success" disabled>成功按钮</my-button>
      <my-button type="info" disabled>信息按钮</my-button>
      <my-button type="warning" disabled>警告按钮</my-button>
      <my-button type="danger" disabled>危险按钮</my-button>
    </div>
    <div class="c-row">
      <my-button type="text">文字按钮</my-button>
      <my-button type="text" disabled>文字按钮</my-button>
    </div>
    <div class="c-row">
      <my-button-group>
        <my-button type="primary">上一页</my-button>
        <my-button type="primary">下一页</my-button>
      </my-button-group>
      <my-button-group style="margin-left: 10px">
        <my-button type="success" @onClick="previousPage">上一页</my-button>
        <my-button type="success">下一页</my-button>
      </my-button-group>
      <my-button-group style="margin-left: 10px">
        <my-button type="info" @onClick="previousPage">上一页</my-button>
        <my-button type="info" @onClick="previousPage">第二页</my-button>
        <my-button type="info" @onClick="previousPage">第三页</my-button>
        <my-button type="info" @onClick="previousPage">第四页</my-button>
        <my-button type="info">下一页</my-button>
      </my-button-group>
    </div>
    <div class="c-row">

      <div class="">图标</div>
      <my-button icon="el-icon-search" type="success">按钮</my-button>
    </div>
    <div class="c-row">
      <div class="">is-loading</div>
      <my-button type="success" :loading="loading" @onClick="onClickDisabled">is-loading</my-button>
    </div>
    <div class="c-row">
      <my-button>默认按钮</my-button>
      <my-button size="medium">中等按钮</my-button>
      <my-button size="small">小型按钮</my-button>
      <my-button size="mini">超小按钮</my-button>
    </div>
    <div class="c-row">
      <my-button>默认按钮</my-button>
      <my-button type="primary" native-type="submit">submit</my-button>
      <my-button  native-type="reset">reset</my-button>
    </div>
  </div>
</template>

<script>
  import MyButton from "./components/MyButton";
  import MyButtonGroup from "./components/MyButtonGroup";
  export default {
    name: 'buttonExample',
    components: {
      MyButton,
      MyButtonGroup
    },
    data() {
      return{
        name: '周栋',
        loading: false
      }
    },
    methods: {
      onClickDisabled: function (event) {
        this.loading = true;
        console.log(this.name);
        console.log(event)
      },
      previousPage: function () {
        console.log(this);
        this.loading = false
      }
    }
  }
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .c-row {
    margin-top: 30px;
  }
  #nav {
    .demo-button .c-button + .c-button {
      margin-left: 10px;
    }
  }
</style>
