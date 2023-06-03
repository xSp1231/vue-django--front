<template>
    <div class="register">

        <div class="input">
            <h1 class="title">注册模块</h1>
            <el-form ref="myForm" :model="form" :rules="rules" :label-position="labelPosition" label-width="120px">
                <!--label-position 表单对齐方式----->
                <el-form-item label="用户名" prop="username"><!--写prop属性 是为了校验username -- 该属性的值与 rules 对象中对应的字段名称一致---->
                    <el-input style="width: 50%;" placeholder="请输入注册账号" v-model="form.username"> </el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input style="width: 50%;" placeholder="请输入注册密码" v-model="form.password"> </el-input>
                </el-form-item>
                <el-form-item>
                    <el-progress style="width: 50%;" :percentage="percentage" :color="customColor" :stroke-width="10"
                        :format="format"></el-progress>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm" size="mini" plain>提交</el-button>
                    <el-button type="success" plain size="mini" @click="visitbymanager()">权限开关</el-button>
                    <el-button type="success" plain size="mini" @click="rolejudge()">角色判断</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import jwt_decode from 'jwt-decode';

export default {
    data() {
        return {
            labelPosition: "right",
            form: {
                username: "",
                password: ""
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ]
            },

            //进度条样式
            percentage: 0,
            customColor: '',
        }
    },

    watch: {
        'form.password': {  //使用字符串监听方式监听from对象里面的password
            handler(newData, oldData) {//检测数据的变化 数据发生变化 则调用函数
                //每次监听到数据变化 就绘制图表
                console.log("新密码为", newData)
                //newData为字符串类型
                //string.length获取字符串长度
                if (newData.length <= 10) {
                    this.percentage = newData.length * 10
                }
                if (newData.length <= 4) {
                    this.customColor = '#f56c6c';
                }
                if (newData.length > 4 && newData.length <= 7) {
                    this.customColor = '#e6a23c';
                }
                if (newData.length > 7 && newData.length <= 10) {
                    this.customColor = '#67c23a';
                }
            },
            deep: true // 深度监听
        },

    },
    methods: {
        //改变进度条文字显示内容
        format(percentage) {
            if (percentage <= 40) {
                return "弱"
            }
            if (percentage > 40 && percentage <= 70) {
                return "中"
            }
            else {
                return "强"
            }
        },
        submitForm() {//检验表单填写十分合法  //登录 后端生成jwt 前端接受 将其存储在浏览器里面。之后前端发送请求 就需要携带token。然后后端验证。
            this.$refs.myForm.validate((valid) => {
                if (valid) {
                    console.log("表单信息", this.form)
                    axios.post("http://127.0.0.1:8000/getformdata/", this.form).then((res) => {
                        console.log("post请求的res ", res)
                        var token = res.data.jwttoken
                        console.log("前端获取的token is ", token)
                        //浏览器保存token
                        localStorage.setItem('jwtToken', token);
                        console.log("从浏览器获取的jwttoken is ", localStorage.getItem('jwtToken'))
                        this.$message.success("操作成功");
                    })
                } else {
                    // 表单校验不通过，给用户提示
                    this.$message.error('请检查输入项');
                    return false;
                }
            });
        },
        visitbymanager() {
            const token = localStorage.getItem('jwtToken');
            console.log("token is ", token)
            console.log("解析后的token is ",jwt_decode(token))
            console.log("当前时间为",Date.now() / 1000)

            axios.post("http://127.0.0.1:8000/getuserinfo/", {
                headers: {
                    'Authorization':token//network那里可以看见headers
                }
            }).then((res) => {
                console.log("获得的数据是", res)
                this.$message.success("操作成功");
            })
        },
        rolejudge(){
            const token = localStorage.getItem('jwtToken');
            axios.get("http://127.0.0.1:8000/judge/", {
                headers: {
                    'Authorization':token//network那里可以看见headers
                }
            }).then((res) => {
                console.log("获得的数据是", res)
                this.$message.success("操作成功");
            })


        }
    }
}
</script>

<style scoped>
.register {
    display: flex;
    position: relative;
    left: 0%;
    width: 60%;
    height: 300px;
    background-color: rgb(226, 229, 229);
}

.title {
    /* 相对于父元素的位置变化*/
    position: relative;
    left: 40%;
}

.input {
    /* 相对于父元素的位置变化*/
    position: relative;
    left: 8%;
    width: 400px;
    background-color: rgba(240, 252, 253, 0.61);
    border-radius: 20px;
}
</style>