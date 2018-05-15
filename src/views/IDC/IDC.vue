<template>
  <div id="idc">
      <h2>
        数据中心
      </h2>
      <h3>时间</h3>
      <div class="demo-input-suffix">
        <p>
          <span>时间范围：</span>
          <el-input
            placeholder="请选择订单日期"
            suffix-icon="el-icon-date"
            v-model="order_date">
          </el-input>
        </p>
        <p>
          <span>时间粒度：</span>
          <el-radio-group v-model="labelPosition" size="small">
            <el-radio-button label="left">不限</el-radio-button>
            <el-radio-button label="top">指定年龄段</el-radio-button>
          </el-radio-group>
        </p>
      </div>
      <h3>数据</h3>
      <p>
        <span>数据范围：</span>
        <el-radio-group v-model="labelPosition" size="small">
          <el-radio-button label="left">签约公司</el-radio-button>
          <el-radio-button label="top">客户</el-radio-button>
        </el-radio-group>
      </p>
      <div style="text-align: center">
    <el-transfer
      style="text-align: left; display: inline-block"
      v-model="value3"
      filterable
      :left-default-checked="[2, 3]"
      :right-default-checked="[1]"
      :titles="['Source', 'Target']"
      :button-texts="['到左边', '到右边']"
      :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
      :data="data">
      <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
      <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
    </el-transfer>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order_date: '',
      labelPosition: '',
      value3: [1],
      data: [],
      renderFunc: ''
    }
  }
}
</script>

<style>
#idc{
  background: #fff;
  padding-left: 15px;
  flex: 1;
  margin-top: 6px;
}
h2{
  font-size: 22px;
  height: 40px;
  line-height: 40px;
}
.el-input__inner{
  height: 32px;
}
p span{
  font-size: 14px;
}
#idc .el-input--suffix{
  width: 50%;
}
.demo-input-suffix p{
  margin: 10px 0;
}
</style>
