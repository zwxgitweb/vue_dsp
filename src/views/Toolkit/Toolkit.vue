<template>
  <div id="toolkit">
      <h1>
        工具箱
      </h1>
      <!-- 卡片模板 -->
      <el-row>
        <el-col :span="8"  v-for="(o, index) in cardData" :key="index" >
          <el-card>
            <div class="icon_tit">
              <i :class="o.icon"></i>
            </div>
            <div class="card_context">
              <span class="hint_info">{{o.tit}}</span>
              <div class="bottom clearfix">
                <b>{{o.context}}</b>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardData: [
          {
            tit: "账号管理",
            context: "在较好的副书记恢复的浩丰科技,好久发货的空,间划分空间发挥可接受的就会好几顿饭航空,件大事回家看看回复回家",
            icon: "el-icon-sold-out",
            bg: "#FAAD14"
          },
          {
            tit: "客户管理",
            context: "在较好的副书记恢复的浩丰科技，好久发货的空间,划分空间发挥可接受的就会好几顿饭航空件,大事回家看看回复回家",
            icon: "el-icon-tickets",
            bg: "#10CFDD"
          }
        ]
    }
  }
}
</script>

<style>
#toolkit h1{
  padding-left: 26px;
  font-size: 24px;
  height: 65px;
  line-height: 65px;
}
.el-card__body{
  display: inline-flex;
}
#toolkit .el-col{
  margin-left: 20px;
}
  .icon_tit{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0 2px 3px 0 #ccc;
    line-height: 60px;
    text-align: center;
  }
   .card_context{
    flex: 1;
    padding-left: 15px;
  }
  .card_context span{
    line-height: 35px;
  }
#toolkit b{
  font-size: 12px;
  color: #666;
  line-height: 18px;
  font-weight: normal;
}
.el-card__body{
  padding: 15px;
}
.hint_info{
  color: #000;
  font-weight: 800;
  font-size: 16px;
}
#toolkit .bottom{
  margin-top: 0;
}
</style>
