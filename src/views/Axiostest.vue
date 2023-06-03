<template>
  <!---前后端测试代码 切勿删除------>
  <div class="system">
    <h3>书籍列表</h3>
    <div class="findarea">
      <!----<el-input style="width: 20%; margin-right: 7px;" placeholder="请输入书籍ID" v-model="inputid">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>--->
      <el-input style="width: 20%; margin-right: 7px;" placeholder="请输入书籍名字"  v-model="inputname"  @keyup.enter.native="find()">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-button @click="find()" class="findbutton" type="primary">查询</el-button>
      <el-button @click="getAll()" class="findbutton" type="primary">查看所有数据</el-button>
      <el-button style="margin-left:300px;"  @click="getcsv()" class="findbutton" type="primary" plain>导出csv文件</el-button>

    </div>

    <div class="addinfo">
      <el-button type="text" @click="dialogVisible = true, isadd = true">点击添加书籍</el-button>
      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <el-form :model="formData" :rules="rules" label-position="right" label-width="100px" ref="dataAddForm">
          <el-row><!--一行--->
            <el-col :span="12">
              <el-form-item label="书籍名字" prop="btitle">
                <el-input v-model="formData.btitle" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="阅读量" prop="bread">
                <el-input v-model="formData.bread" />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row><!---一行---->
            <el-col :span="12">
              <el-form-item label="评论量" prop="bcomment">
                <el-input type="textarea" v-model="formData.bcomment"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="出版时间" prop="bpub_date">
                <!---<el-date-picker type="textarea" placeholder="选择日期" v-model="formData.bpub_date" style="width: 100%;"></el-date-picker>--->
                <el-input type="textarea" v-model="formData.bpub_date"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div v-if="isadd == true" class="dialog-footer" slot="footer">
          <el-button @click="cancel()">取消</el-button>
          <el-button @click="handleAdd()" type="primary">确定添加</el-button>
        </div>
        <div v-if="isadd == false" class="dialog-footer" slot="footer">
          <el-button @click="cancel()">取消</el-button>
          <el-button @click="update()" type="primary">确定编辑</el-button>
        </div>


      </el-dialog>
    </div>
    <div class="table" v-if="!isfind">
      <el-table :data="bookdata" style="width: 100%">
        <el-table-column prop="id" label="ID" width="100">
        </el-table-column>
        <el-table-column prop="btitle" label="书籍名字" width="180">
        </el-table-column>
        <el-table-column prop="bpub_date" label="出版时间" width="180">
        </el-table-column>
        <el-table-column prop="bread" label="阅读量" width="180">
        </el-table-column>
        <el-table-column prop="bcomment" label="评论量">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div style="display: flex;">
              <div><el-button size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
              </div>
              <div style="margin-left:10px ;">
                <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    
    <div class="page">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="queryInfo.page"
        :page-sizes="[5, 10, 15, 20]" :page-size="queryInfo.page_size" layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>

  </div>
</template>

<script>
import axios from "axios"
import { saveAs } from 'file-saver'
export default {
  data() {
    return {
      isfind: false,//决定是否显示书籍列表
      bookid: "",
      isadd: true,//true 添加  false 关闭
      bookdata: [],
      dialogVisible: false,
      formData: {},//表单数据
      rules: {
        btitle: [
          { required: true, message: '请输入书籍名称', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        bread: [
          { required: true, message: '请输入书籍阅读量', trigger: 'blur' },
        ],
        bcomment: [
          { required: true, message: '请输入书籍评论量', trigger: 'blur' }
        ],
        bpub_date: [
          { required: true, message: '请选择日期', trigger: 'change' }
        ]
      },
      //分页请求体params
      queryInfo: {
        page: 1, //当前的页数
        page_size: 5, //每页的数量
      },
      findinfo: {
        id: "",
        btitle: ""
      },
      total: 0,//总的页码数
     // inputid: '',
      inputname: ''
    }
  },
  methods: {
    getcsv() {
      axios.get('http://127.0.0.1:8000/csvtest').then(response => {
        const blob = new Blob([response.data], { type: 'text/csv;charset=utf-8;' })
        saveAs(blob, 'mydata.csv')
      })
    },

    cancel() {
      this.dialogVisible = false
      // this.dialogFormVisible = false;
      this.$message.info("取消成功");
      this.formData={}
      this.getAll();
    },
    /*点击弹框的删除按钮*/
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
          this.formData={}
          this.getAll()
        })
        .catch(_ => { });
    },
    /*------------------------------------------------获取后端数据-----------------------------------------*/
    //200
    getAll() {
      axios.get('http://127.0.0.1:8000/books/', {
        params: this.queryInfo,
      }).then((res) => {
        console.log("请求的网址为http://127.0.0.1:8000/books/",this.queryInfo.page,"/",this.queryInfo.page_size)
        this.bookdata = res.data.results,
        console.log("res is ", res);
        console.log("get请求的status ",res.status)
        console.log("获取到的后端数据", res.data.results);
        console.log("书籍总数为", res.data.count);
        this.total = res.data.count
      })
    },
    // 201 
    handleAdd() {
      console.log("表格数据", this.formData)
      axios.post("http://127.0.0.1:8000/books/", this.formData).then((res) => {
        console.log("post请求的status ",res.status)
        this.dialogVisible = false
        this.$message.success("操作成功");
      }).finally(() => {
        this.getAll();
        this.formData = {};
        console.log("添加后的表格数据 ",this.formData)
      });
      
    },
    //204
    handleDelete(row) {
      this.$confirm("确认是否删除", "提示", { type: "warning" }).then(() => {
        axios.delete('http://127.0.0.1:8000/books/' + row.id).then((res) => {
          this.$message.success("删除成功");
          console.log("delete请求", res.status);
          if((this.total-1)%(this.queryInfo.page_size)==0){//当删除掉某页最后一行数据的时候 我们需要跳转到前面的页面
             this.queryInfo.page-=1;//页数减1
          }
        }).finally(() => {
          this.getAll();
        });
      }).catch(() => {
        this.$message.info("取消操作")
      })
    },
    handleUpdate(row) {//打开按钮
      console.log("所编辑行的数据", row);
      this.isadd = false//开始编辑 改变表格按键
      this.formData = row;
      this.dialogVisible = true;
      let num = row.id;
      this.bookid = row.id
      console.log("num is ", num)
      console.log("该行的数据为 ", this.formData)
      /*axios.put('http://127.0.0.1:8000/books/'+num, this.formData).then((res) => {
                  this.$message.success("修改成功");
          }).finally(() => {
              this.getAll();
          });*/
    },

    //200
    update() {//确认更新了
      console.log("bookid ", this.bookid);
      console.log("update()准备更新的数据为 ", this.formData);
      axios.put('http://127.0.0.1:8000/books/' + this.bookid, this.formData).then((res) => {
        this.$message.success("修改成功");
        console.log("更新的状态", res.status)
      }).finally(() => {
        this.getAll();
      });
      //之后关闭
      this.dialogVisible = false;
    },
    //分页：
    //看每页有多少条数据
    handleSizeChange(newsize) {
      console.log(`每页 ${newsize} 条`);
      this.queryInfo.page=1 //每次点击切换数据条数 就默认回到第一页
      this.queryInfo.page_size = newsize
      this.getAll()
    },
    handleCurrentChange(newpage) {//显示跳转到多少页
      console.log(`当前跳转到的页码为: ${newpage}`);
      this.queryInfo.page = newpage
      this.getAll()//得到数据
    },
    //查询书籍数据
    find() {  //查询即相当于getall() 得到所有数据  将bookdata重新替换 
      //console.log("这是搜索的ID ", this.inputid)
      console.log("这是搜索的name ", this.inputname)
      //this.findinfo.id = this.inputid
      this.findinfo.btitle = this.inputname
      //console.log("请求的网址为http://127.0.0.1:8000/books/",this.findInfo.id,"/",this.findInfo.btitle)
      axios.get('http://127.0.0.1:8000/books/', {
        params: this.findinfo,
      }).then((res) => {
         console.log("长度 is ",res.data.results.length)//判断查找书籍是否存在
         if(res.data.results.length==0|| this.inputname==''){
          this.$message.info("查询书籍不存在或者输入为空")
         }
         else{
        this.bookdata = res.data.results,
        console.log("查询的数据为", res.data.results);
        this.total = res.data.count}
      })
    },  
  },
  mounted() {
    this.getAll()
  }
};
</script>
    
<style scoped lang="less">
.findarea {
  position: relative;
  left: 20%;
  width: 60%;
  height: 100%;

}

.system {
  h3 {
    text-align: center;
  }
}

.table {
  position: relative;
  left: 20%;
  width: 60%;
  height: 100%;
}

.addinfo {
  position: relative;
  left: 20%;
  width: 60%;
  height: 100%;
}

.page {
  position: relative;
  left: 20%;
  width: 60%;
  height: 50px;
}
</style>