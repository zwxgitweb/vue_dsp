<template>
    <div id="advertising">
        <!-- 新建计划、创意模板 -->
        <aside class="advertising_aside">
            <el-container>
                <el-aside style='width: 144px;'>
                    <el-menu :default-openeds="['1', '3', '5']" router background-color="#F5F5F5" text-color='#000'>
                        <el-submenu index="1">
                            <template slot="title">建立广告计划</template>
                            <el-menu-item-group>
                                <el-menu-item index="/newplan">选择计划</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">广告单元</template>
                            <el-menu-item-group>
                                <el-menu-item index="/newunit">基本信息</el-menu-item>
                                <el-menu-item index="/newunit">定向</el-menu-item>
                                <el-menu-item index="/newunit">广告位</el-menu-item>
                                <el-menu-item index="/newunit">出价</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="5">
                            <template slot="title">广告创意</template>
                            <el-menu-item-group>
                                <el-menu-item index="/neworiginality">落地页</el-menu-item>
                                <el-menu-item index="/neworiginality">上传创意</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-aside>
            </el-container>
        </aside>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#advertising{
    display: inline-flex;
    flex: 1;
}
.el-submenu .el-menu-item{
    min-width: 144px;
}
.advertising_aside{
    height: 100%;
    width: 144px;
}
.el-aside .el-menu-item.is-active{
    color: #2873FF;
}
</style>
