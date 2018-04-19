<template>
    <div id="root">
        <div class="asideBar">
            <header class="aside_header">
                <h1>
                    <!-- <i class="el-icon-menu"></i> -->
                    智能投放系统
                </h1>
            </header>
            <!-- 侧栏模板 *** 路由路径 -->
            <el-container>
                <el-aside style='width: 200px'>
                    <el-menu :default-openeds="['1', '3']" router>
                        <el-menu-item index="/advertising" class="newAdv">
                            <template slot="title"><i class="el-icon-plus"></i>新建广告</template>
                        </el-menu-item>
                        <el-menu-item index="/home">
                            <template slot="title"><i class="el-menu-item is-active"></i>首页概览</template>
                        </el-menu-item>
                        <el-submenu index="2">
                            <template slot="title"><i class="el-icon-document"></i>广告管理</template>
                            <el-menu-item-group style='background: #1C2941' >
                                <el-menu-item index="/plan">广告计划</el-menu-item>
                                <el-menu-item index="/unit">广告单元</el-menu-item>
                                <el-menu-item index="/originality">广告创意</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-menu-item index="/idc">
                            <template slot="title">
                                <i class="el-icon-edit-outline"></i>
                                数据中心
                            </template>
                        </el-menu-item>
                        <el-menu-item index="/toolkit">
                            <template slot="title"><i class="el-icon-setting"></i>工具箱</template>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
            </el-container>
        </div>
        <div class="user_header">
            <div class="userInfo_header">
                <User-header-comp></User-header-comp>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import UserHeaderComp from '../../components/UserHeader/user_header'

export default {
    data() {
        return {
        }
    },
    methods: {
      
    },
    components: {
        UserHeaderComp
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-style: normal;
}
#root, .el-container{
    height: 100%;
}
#root{
    display: inline-flex;
    width: 100%;
}
.asideBar{
    display: inline-flex;
    flex-direction: column;
    width: 200px;
}
.newAdv{
    background: -webkit-linear-gradient(left, #095DE1, #081A6C );
    margin-bottom: 20px;
}
.user_header{
    flex: 1;
    display: inline-flex;
    flex-direction: column;
    background: #eee;
}
.userInfo_header{
    width: 100%;
    height: 65px;
    background: #fff;
    box-shadow: 0 1px 4px #ccc;
}
.aside_header{
    width: 100%;
    height: 65px;
    background: #1C2941;
}
.aside_header h1{
    color: #fff;
    font-size: 18px;
    line-height: 65px;
    text-align: center;
}
.el-container{
    flex: 1;
}
.el-menu{
    width: 100%;
    height: 100%;
    border: 0;
    background-color: #022050;
}
.el-submenu__title, .el-aside .el-menu-item{
    color: #fff;
    height: 54px;
    line-height: 54px;
    background-color: #022050;
}
  .el-aside .el-menu-item.is-active, .el-aside .el-menu-item:hover, .el-aside .el-submenu__title:hover, .el-aside el-submenu__title:hover{
    background-color: #021a41;
    color: #fff;
}
.el-menu-item-group__title{
    padding: 0;
}
.el-submenu .el-menu-item-group{
    padding: 8px 0;
}
.el-submenu .el-menu-item-group li{
    background: #1C2941;
    height: 38px;
    line-height: 38px;
}
.el-submenu .el-menu-item-group li:nth-child(2){
    margin: 8px 0;
}
.el-submenu .el-menu-item.is-active, .el-submenu .el-menu-item:hover{
    background: #2873FF;
}
</style>
