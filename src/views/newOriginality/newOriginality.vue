<template>
    <div id="creativity">
        <h1>广告创意</h1>

        <h3>落地页</h3>
        <p class="pro_tit">
            <span>着陆页地址：</span>
            <el-input clearable v-model='address_input' placeholder="请设置广告名称"></el-input>
            <b>预览</b>
        </p>

        <!-- 上传创意模板 -->
        <h3>上传创意</h3>
        <div ref='adv'>
            <el-button type="text" @click="open2">
                <i class="el-icon-plus"></i>添加创意
            </el-button>
            <el-tabs>
                <el-tab-pane v-for="(item,index) in tabs" :key='index' :label="item" :name="'tab' + index">
                    <!-- 上传图片模板 -->
                    <UploadImg></UploadImg>
                </el-tab-pane>
            </el-tabs>
        </div>

        <ul class="ad_info_ipt">
            <li>
                <span>广告文案</span>
                <el-input
                    placeholder="请输入内容"
                    v-model="input10"
                    maxlength=18
                    clearable>
                </el-input>
                <span>{{input10.length}}/18</span>
            </li>
            <li>
                <span>监控链接</span>
                <el-input
                    placeholder="请设置广告名称"
                    clearable>
                </el-input>
            </li>
        </ul>

        <div class="submit_btn">
            <el-button type="primary" size='small' @click="submitForm('numberValidateForm')">提交</el-button>
        </div>
    </div>

</template>

<script>
import UploadImg from '../../components/uploadImg/UploadImg'

export default {
    data() {
        return {
            input10: '',
            first: '1',
            tabs: ["创意1"],
            address_input: ''
        }
    },
    methods: {
        open2() {
            this.$confirm('选择模板', '', {
                confirmButtonText: '单图',
                cancelButtonText: '多图'
            })
            .then(() => {
                this.tabs.push('创意' + (this.tabs.length+1));
            })
            .catch(() => {
                this.$message({
                    type: 'info',
                    message: '目前不支持多图'
                });
            });
        },
        submitForm () {

        }
    },
    components: {
        UploadImg
    }
}
</script>

<style>
#creativity{
    flex: 1;
    padding-left: 12px;
    background: #fff;
}
h1{
    font-size: 20px;
    line-height: 35px;
}
h3{
    line-height: 30px;
    font-size: 18px;
    margin-top: 15px;
}
.pro_tit{
    display: inline-flex;
    height: 30px;
    align-items: center;
    width: 100%;
}
#creativity span{
    padding: 0 10px;
    font-size: 14px;
}
.ad_info_ipt li{
    height: 32px;
    line-height: 32px;
    margin: 15px 0;
}
.el-input__inner, .el-input{
    height: 30px;
    width: 280px;
    font-size: 12px;
}
b{
    font-size: 12px;
    padding: 0 10px;
}
.submit_btn{
    stroke-width: 100%;
    text-align: center;
    margin-top: 20px;
}
</style>
