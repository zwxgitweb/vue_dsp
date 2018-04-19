<template>
    <div id='uploadimage'>
        <slot>
            <el-upload
                class="avatar-uploader"
                action="http://localhost:9000/originality/upload/image"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                style="float:left;border:1px solid #ccc;margin:10px;">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imageUrl: '',
        }
    },
    methods: {
        handleAvatarSuccess (res, file) {
          this.imageUrl = res.data.path;
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === "image/jpeg";
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error("上传头像图片只能是 JPG 格式!");
            }
            if (!isLt2M) {
                this.$message.error("上传头像图片大小不能超过 2MB!");
            }
            return isJPG && isLt2M;
        }
    }
}
</script>

<style scoped>
img{
    width: 100px;
    height: 100px;
}
</style>