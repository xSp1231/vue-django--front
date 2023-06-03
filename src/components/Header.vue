<template>
    <div class="main-content" position:fixed top="0">
        <div class="l-content">
            <el-button @click="strentch" size="mini" style="margin-right: 10px;" icon="el-icon-s-fold"
                round></el-button>
            <!---面包屑---->

            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="it in tags" :key="it.name" :to="{ path: it.path }">{{ 
                    it.label
                }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="medium-content">
            <h2>可视化系统</h2>
        </div>
        <div class="r-content">
            <div class="time" style="color: rgb(158, 161, 161);"><i class="el-icon-date" style="margin-right: 6px; font-size:large ;"></i>{{ newTime }} <i class="el-icon-s-tools" style="margin-left: 20px;margin-right: 0px; font-size:large ;"></i></div>
            <el-dropdown  @command="handleCommand">
                <span class="el-dropdown-link">
                   <img class="picture" src="../assets/地震带earthquake.jpg"><!--引入图片--->
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item  command="aboutMe">个人中心</el-dropdown-item>
                    <el-dropdown-item divided command="logoff">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Cookie from 'js-cookie'
export default {
    data() {
        return {
            newTime: "",
        }
    },
    methods: {
        handleCommand(command) {//////注意dropdown里面时间的触发 
            if (command == 'logoff') {
                this.$message({
                    message: '退出成功',
                    type: 'success'
                });
                //Cookie.remove('token');//移除cookie里面的token;
                localStorage.removeItem("jwtToken");
                this.$router.push('/login')
            }
            if (command == 'aboutMe') {
                this.$message({
                    message: '进入个人中心',
                    type: 'success'
                });
                this.$router.push('/aboutme')
            }
        },
        strentch() {
            this.$store.commit("collapseMenu")//调用store里面的 clooapseMenu方法 
        },
        getNowTime() {
            var date = new Date();
            var time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + this.addZero(date.getMinutes()) + ':' + this.addZero(date.getSeconds());
            this.newTime = time;
        },
        addZero(s) {
            return s < 10 ? ('0' + s) : s;
        },
      
    },
    mounted() {
        console.log("tags is", this.tags)
        this.getNowTime();
        clearInterval(myTimeDisplay);
        var myTimeDisplay = setInterval(() => {
            this.getNowTime();
        }, 1000)
    },
    computed: {
        /* tags(){
           return this.$store.state.tab.tabslist;
         }*/
        //两种方法都可以
        ...mapState({
            tags: state => state.tab.tabslist  //tab为tab创造的实例   //映射
        })
    }
};
</script>
<style lang="less" scoped>

.navbar{
    position:fixed;
    top:0;
    
}

.main-content {
    padding: 0 20px;
    height: 50px;
    background-color: #e5e2e2;
    display: flex;
    justify-content: space-between; //将内容放在左右两边
    align-items: center; //将<div>元素的所有项目居中对齐
    
    .text {
        padding-left: 8px;
        font-size: 14px;
        color: rgb(51, 58, 65);
    }
}

.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}

.el-icon-arrow-down {
    font-size: 12px;
}

.l-content {
    display: flex;
    align-items: center; //垂直居中

    ///面包屑样式设计很重要
    /deep/.is-link {
        //   /depp/ 可以穿过多层  直接到达目标
        color: rgba(62, 63, 63, 0.947);
        font-size: 14px;
        font-weight: 600;
        font-style: normal;
    }

}
.medium-content {
    display: flex;
    align-items: center; //垂直居中


}



.r-content {
    display: flex;

    .time {
        font-size: 16px;
        margin-top: 13px;
        margin-right: 20px;
    }

    .picture {
        height: 45px;
        width: 45px;
        border-radius: 50%;
    }

}
</style>
