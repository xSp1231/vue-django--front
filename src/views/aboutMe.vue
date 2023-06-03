<template>
 <div class="uploadpicture">
 <el-upload style="margin-left: 20px; margin-top: 20px;"
    class="upload-demo"
    action="http://127.0.0.1:8000/uploadpicture/"  
    :on-success="handleSuccess"
    :before-upload="beforeUpload">
    <el-button slot="trigger" size="small" type="primary" plain>上传图片</el-button>
  </el-upload>
  <img style="width: 200px;height:170px ;" :src="image" alt="">
 </div>
</template>

<script>
export default {
  data(){
    return{
      image:""
    }
  },
  methods: {
    handleSuccess(response) {
      var baseurl="http://127.0.0.1:8000/media/"
      console.log("response is ",response);
      this.image=baseurl+response.url
      console.log("图片链接",this.image)
    },
    beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('只能上传 JPG/PNG 格式的图片');
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB');
      }
      return isJPG && isLt2M;
    },
  },
};
</script>
<style scoped>
.uploadpicture{
 position: relative; 
left: 1%;  
width: 30%;
height: 500px;
background-color: antiquewhite;
}

</style>
