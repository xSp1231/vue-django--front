<template>
    <div class="loginpage">
        <img src="../assets/背景3.jpg">
        <div class="login-box">
            <h4 style="text-align: center;">欢迎登录老年人动作可视化分析系统</h4>
            <div class="input">
                <el-form ref="form" :model="form" :rules="rules" ><!---label-width 标签的宽度------>
                    <el-form-item label="Username" prop="username" >
                        <el-input v-model="form.username" placeholder="请输入账号"  clearable></el-input>
                    </el-form-item>
                    <!-----<p>{{ form.username }}</p>--->
                    <el-form-item label="Password" prop="password">
                        <el-input v-model="form.password" placeholder="请输入密码"  show-password
                            clearable></el-input>
                    </el-form-item>
                </el-form>
                <div class="login-button">
                    <el-button type="primary" size="larger" @click="submit">登录</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Mock from 'mockjs'
import Cookie from 'js-cookie'
export default {
    data() {
        return {
            form: {
            username: '',
            password: '',
         },
         rules: {//校验规则
            username: [
               { required: true },
            ],
            password: [
               { required: true },
            ],
         }
        }
    },
    methods:{
        submit(){
            console.log("密码登录框里面的数据为 ", this.form)
         if (this.form.username == "admin" && this.form.password == "123456") {///如果密码正确
            this.$message({
               message: '登录成功',
               type: 'success'
            });
            const token = Mock.Random.guid()//随机生成全局唯一标识符
            console.log("token is ", token)
            //token存入cookie 用于不同页面之间的通信
            Cookie.set("token", token)//将token内容写入到Cookie里面 名字叫做name  可以在浏览器里面的application里面的cookie里面查看
            // this.$router.push({name:"user"})//登陆后跳转到首页
            //之后触发导航守卫  
            this.$router.push("/home")//登陆后跳转到首页  
         }
         else {
            this.$message.error('账号或密码错误,请重新输入');
         }
    }
    }
}
</script>
<style lang="less" scoped>
.loginpage {
    position: absolute;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
    }

    .login-box {
        border-radius: 15px;
        position: absolute; // absolute 绝对定位 相对于父元素进行定位        //fixed:固定定位,相对于浏览器窗口进行定位
        top: 100px;
        right: 160px;
        width: 23%;
        height: 60%; //rgb(215, 230, 230)
        background-color: rgb(252, 249, 249);

        .input {
            position: absolute;
            width: 70%;
            left: 10%;

            .login-button {
                position: absolute;
                left: 45%;
                top: 110%
            }
        }

    }
}
</style>