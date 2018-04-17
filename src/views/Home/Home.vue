<template>
  <div id="home">
      <!-- 卡片模板 -->
      <el-row>
        <el-col :span="8" :offset=1 v-for="(o, index) in cardData" :key="index" >
          <el-card :body-style="{ padding: '0px' }">
            <div class="icon_tit">
              <i :class="o.icon"></i>
            </div>
            <div style="padding: 25px;">
              <span class="hint_info">{{o.tit}}</span>
              <div class="bottom clearfix">
                <b>{{o.price}}</b>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    <div class="overall_situation">
      <!-- <div class="overall_situation_box"> -->
        <!-- 日期模板 -->
        <aside class="aside">
          <h2>
            整体情况
          </h2>
          <el-date-picker
            v-model="value7"
            type="daterange"
            align="right"
            unlink-panels
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions2">
          </el-date-picker>
        </aside>
        <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="zwxsdfghj" value="1"></el-option>
            <el-option label="zs" value="2"></el-option>
            <el-option label="lisi" value="3"></el-option>
        </el-select>
        <!-- 折线图模板 -->
        <div class="line_cart" ref='ech'></div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import echarts, { init } from 'echarts';
  export default {
    data() {
      return {
        // 定义卡片数据
        cardData: [
          {
            tit: "现金账户",
            price: "￥123,123,233",
            icon: "el-icon-sold-out"
          },
          {
            tit: "今日消耗",
            price: "￥12,345",
            icon: "el-icon-tickets"
          }
        ],
        select: '',
        pickerOptions2: {
          shortcuts: [{
            text: '近7天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '近30天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value6: '',
        value7: '',
        option: {
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
          }]
        },
        echarts: null
      }
    },
    methods: {
      initDate () {
        let startY = new Date(this.value7[0]).getFullYear(),
            startM = new Date(this.value7[0]).getMonth() + 1,
            endY = new Date(this.value7[1]).getFullYear(),
            endM = new Date(this.value7[1]).getMonth() + 1;
        let mArr = [];
        if (startY == endY) {
          for (let i = startM;i <= endM;i++) {
            mArr.push(startY + '/' + i);
          }
        } else {
            for (let i = 0; i <= endY - startY; i++) {
              if (i == 0) {
                for (let j = startM; j <= 12; j++) {
                  mArr.push(startY + i + '/' + j);
                }
              } else {
                for (let j = 1; j <= 12; j++) {
                  mArr.push(startY + i + '/' + j);
                }
              }
            }
        }
        this.option.xAxis.data = mArr;
        this.echarts.setOption(this.option)
      }
    },
    watch: {
      value7() {
        this.value7 && this.initDate();
      }
    },
    created() {

    },
    mounted() {
      this.echarts = echarts.init(this.$refs.ech);
      this.echarts.setOption(this.option);
      window.onresize = () => {
        this.echarts.resize();
      }
    }
  };
</script>

<style>
#home{
  background: #eee;
  display: inline-flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
}
.el-select{
  width: 120px;
}
.el-row{
  padding: 20px 0;
  height: 138px;
  width: 100%;
}
.el-card__body{
  display: inline-flex;
}
.hint_info {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  b{
    font-size: 24px;
  }
  .icon_tit{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0 2px 3px 0 #ccc;
    line-height: 60px;
    text-align: center;
    margin-top: 15px;
    margin-left: 14px;
  }
  .overall_situation{
    width: 100%;
    padding-left: 20px;
    flex: 1;
    box-sizing: border-box;
    background: #fff;
    display: inline-flex;
    flex-direction: column;
  }
  .overall_situation_box{
    background: #fff;
    width: 100%;
    height: 100%;
    display: inline-flex;
    flex-direction: column;
  }
  .aside{
    width: 100%;
    height: 80px;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .line_cart{
    width: 100%;
    flex: 1;
  }
  /* 日期样式 */
  .el-date-range-picker.has-sidebar {
    width: 500px;
    line-height: 20px;
}
.el-picker-panel__sidebar{
  width: 70px;
}
.el-picker-panel__sidebar+.el-picker-panel__body{
  margin-left: 70px;
  min-width: 420px;
}
.el-date-range-picker__content{
  padding: 5px;
}
.el-date-table td div{
  height: 20px;
  line-height: 20px;
}
.el-date-editor--daterange.el-input__inner{
  max-width: 230px;
  padding: 0 10px;
}
</style>
