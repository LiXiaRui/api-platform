<template>
  <div class="detail">
    <el-container>
      <el-header>
        <i class="el-icon-s-goods" style="font-size:20px;font-weight:600;">已申请接口套餐</i>
        <el-button type="primary" icon="el-icon-plus" style="font-size:16px;font-weight:600;margin-left:51vw;" @click="goTo('/package')">申请新套餐</el-button>
      </el-header>
      <el-main>
        <el-container>
          <el-main>
            <el-container>
              <el-header style="text-align:center;">
                 <el-row>
                  <el-col :span="24">
                    <div class="grid-content bg-purple-dark" >
                      <h2>已申请接口套餐</h2>           
                    </div>
                  </el-col>
                </el-row>
              </el-header>
              <el-main>
                <el-table
                  :data="tableData"
                  border
                  style="width: 100vw;margin-bottom:20px;">
                  <el-table-column
                    prop="name"
                    label="接口套餐名称"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="time"
                    label="申请时间"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="num"
                    label="接口数量"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    fixed="right"
                    label="查看所有API"
                    min-width="150">
                    <template slot-scope="scope">
                      <el-button index="detailA" @click="handleClick(scope.row),goTo('/singleAPI')" type="text" size="small">查看</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-main>
            </el-container>
           
          </el-main>
        </el-container>
       
      </el-main>
    </el-container>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableData: [
        {
          name: "mobile",
          time: "2019-11-22",         
          num: "20",         
        },
         {
          name: "mobile",
          time: "2019-11-22",         
          num: "20",         
        },
         {
          name: "mobile",
          time: "2019-11-22",         
          num: "20",         
        },
      ],
    }
    
  },
  // created(){
  //   axios.get('')
  //     .then(res=>{
  //        console.log(res);
  //        this.tableData=res.data;
  //     })
  //     .catch(error=>{
  //         console.log(error);
  //         alert('网络错误，不能访问');
  //     })
  // },
  methods: {
      handleClick(row) {
        console.log(row);
      },
      goTo(path) {
          console.log("success");
          this.$router.replace(path);
      },
      // tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      //   if (rowIndex === 0) {
      //       return 'background-color:rgb(250,250,250);color:black;padding:0px;margin:-10px;'
      //   }
      // },
    },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-header, .el-footer {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    line-height: 60px;
  }
  
  .el-main {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    // line-height: 160px;

  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
.el-table td, .el-table th{
  font-weight: 800;
}


</style>
<style scope>
.detail .el-table__header tr,
 .detail .el-table__header th
  { padding: 0;
    height:60px !important;
    background-color: rgb(252, 252, 227);
    font-weight: 800;
    color: black;
  }
.cell{max-height: 60px !important;overflow: auto !important;} 

</style>
