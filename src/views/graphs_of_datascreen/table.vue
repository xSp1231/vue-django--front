<template>
  <el-table
  height="380"
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
   
      fixed
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄"
      width="180">
    </el-table-column>
    <el-table-column
      prop="avheart"
      label="平均心率"
      width="200">
    </el-table-column>
    <el-table-column
      prop="ssx"
      label="肾上腺激素 (pmol/L)"
      width="200">
    </el-table-column>
    <el-table-column
      prop="bold"
      label="血氧含量(mmHg)"
      width="200">
    </el-table-column>
    <el-table-column
      prop="active"
      label="个人活跃度"
      width="200">
    </el-table-column>
    <el-table-column
      prop="active"
      label="个人活跃度"
      width="200">
    </el-table-column>
    <el-table-column
      prop="tag"
      label="标签">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.bold >=75 ?  'success':'danger' "
          disable-transitions>{{ scope.row.ok }}</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<style >
  .el-table .warning-row {
    background: #f0f9eb;
  }
  .el-table .success-row {
    background:#fef8ef ;
  }
</style>

<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex %5=== 0) {
          return 'warning-row';
        } else if (rowIndex %3===0) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData: [{
          name: '老王',
          age: '78',
          avheart: '70',
          ssx:"460",
          bold: '85',
          active: '70',
          ok:"正常"
        }, {
          name: '老张',
          age: '68',
          avheart: '50',
          ssx:"478",
          bold: '75',
          active: '80',
          ok:"正常"
        }, {
          name: '老李',
          age: '76',
          avheart: '78',
          ssx:"410",
          bold: '95',
          active: '30',
          ok:"正常"
        }, {
          name: '老徐',
          age: '89',
          avheart: '60.6',
          ssx:"442.36",
          bold: '73.6',
          active: '65',
          ok:"异常"
        }, {
          name: '老高',
          age: '69',
          avheart: '74',
          ssx:"450",
          bold: '120',
          active: '60',
          ok:"异常"
        }, {
          name: '老刘',
          age: '58',
          avheart: '70',
          ssx:"450",
          bold: '75.6',
          active: '83',
          ok:"正常"
        }, {
          name: '老罗',
          age: '67',
          avheart: '72',
          ssx:"490",
          bold: '95',
          active: '30',
          ok:"异常"
        }, {
          name: '老肖',
          age: '71',
          avheart: '70',
          ssx:"460",
          bold: '65',
          active: '40',
          ok:"异常"
        }, {
          name: '老谢',
          age: '61',
          avheart: '81',
          ssx:"432",
          bold: '65.6',
          active: '80',
          ok:"异常"
        }, {
          name: '王**',
          age: '78',
          avheart: '70',
          ssx:"460",
          bold: '85',
          active: '70',
          ok:"正常"
        }, {
          name: '老唐',
          age: '68',
          avheart: '74',
          ssx:"413.6",
          bold: '65',
          active: '70',
          ok:"异常"
        }, {
          name: '老黄',
          age: '63',
          avheart: '70.63',
          ssx:"358",
          bold: '69',
          active: '69',
          ok:"异常"
        }, {
          name: '老詹',
          age: '78',
          avheart: '70',
          ssx:"460",
          bold: '85',
          active: '70',
          ok:"正常"
        }, {
          name: '老吴',
          age: '66',
          avheart: '76',
          ssx:"450",
          bold: '105',
          active: '23',
          ok:"异常"
        }
      ]
      }
    }
  }
</script>