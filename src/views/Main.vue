<template>
    <div class="navbar">
        <el-container>
            <el-aside width="auto"><commonAside></commonAside></el-aside><!----- 使用<commonAside/>也可以---->
            <el-container>
                <el-header height="50px"> <commonHeader/></el-header>
                <commonTag></commonTag>
                <el-main>
                  <router-view  ></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import  commonAside from '../components/Aside.vue' //引入组件
import  commonHeader from '../components/Header.vue'
import commonTag from '../components/Tag.vue'
export default {
  data(){
    return {
    }
  },
  components: { ///组件的引入
       commonAside,
       commonHeader,
       commonTag,
    }
}

</script>
<style lang="less" scoped>
.el-header{
    height: 50px;
    padding: 0px;
}
.el-main{
    padding: 1px;
}
</style>
