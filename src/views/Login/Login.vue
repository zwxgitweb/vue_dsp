<template>
  <div id="login">
    <!-- 登录模板 -->
    <el-row type='flex' justify='center'>
      <el-col :span="8">
        <el-form :model='userInfo' ref='loginBox'>
            <el-form-item label='用户名' prop='username' :rules='userRules'>
              <el-input type='text' v-model='userInfo.username'></el-input>
            </el-form-item>

            <el-form-item label='密码' prop='password' :rules='psdRules'>
              <el-input type='password' v-model='userInfo.password'></el-input>
            </el-form-item>

            <el-form-item>
            <el-button type="primary" @click="loginEle">提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {login} from '../../utils/axios'

export default {
  data() {
    return {
      userInfo: {
        username: '',
        password: ''
      },
      userRules:[
        {
            required:true,
            message:'请输入用户名'
        },{
            type:'email',
            message:'邮箱输入格式不正确'
        }
      ],
      psdRules:[
        {
            required:true,
            message:'请输入密码'
        }
      ]
    }
  },
  methods: {
    // 点击登录事件发起请求并接收返回值
    loginEle() {
      login(this.userInfo)
      .then(res => {
        if (res.code == 1) {
          localStorage.setItem('token', res.token);
          this.$store.dispatch('getUserInfo', {...this.userInfo, history: this.$router});
        } else {
          // 请重新登录
          console.log(this.$notify({
            title: "错误",
            message: "用户名或密码错误",
            type: 'warning'
          }))
        }
      })
    }
}
}
</script>

<style>
.el-input__inner, .el-form-item__error{
  width: 200px;
}
</style>
