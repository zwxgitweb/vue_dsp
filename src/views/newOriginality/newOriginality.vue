<template>
    <div id="creativity">
        <h1>广告创意</h1>
        <h3>落地页</h3>
        <p class="pro_tit">
            <span>着陆页地址</span>
            <el-input v-model="input" placeholder="请设置广告名称"></el-input>
            <b>预览</b>
        </p>
        <h3>上传创意</h3>
        <el-upload
            action="http://localhost:9000/originality/upload/image"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            input: ''
        }
    },
    methods: {
        handleRemove(file, fileList) {

        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        }
    }
}
</script>

<style>
#creativity{
    flex: 1;
    padding-left: 12px;
}
h1{
    font-size: 24px;
    line-height: 45px;
    font-weight: 400;
}
h3{
    line-height: 36px;
    font-size: 20px;
    margin: 20px 0;
}
.pro_tit{
    display: inline-flex;
    height: 45px;
    align-items: center;
}
.el-input__inner{
    /* width: 30%; */
}
.pro_tit span{
    padding: 0 10px;
    width: 150px;
}
b{
    font-weight: 400;
    width: 50px;
}
</style>
