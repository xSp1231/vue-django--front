<template>
    <div class="container">
        <h1>django api</h1>
        <div class="inputarea" style="width:300px;height: 20px;">
            <el-input v-model="inputname" placeholder="请输入信息"></el-input>
            <el-button style="margin-top: 10px;" @click="getdata()" type="primary" plain>测试按钮</el-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'teacherinfo',
    data() {
        return {
            inputname: "",
            queryinfo: {
                "name":""
            },
        }
    },
    methods: {
        getdata() {
            console.log("输入的信息", this.inputname)
            this.queryinfo.name=this.inputname
            // axios.get('http://127.0.0.1:8000/book/getbookbyname/?name='+this.inputname).then((res) => {
            //     console.log("获取的数据是：", res);
            // })

            axios.get('http://127.0.0.1:8000/book/getbookbyname/',{
                params:this.queryinfo
            }).then((res) => {
                console.log("获取的数据是：", res);
            })

        }
    }
}
</script>
