<template>
  <div class="detail">
    <el-container>
      <el-header>
        <i class="el-icon-s-goods" style="font-size:20px;font-weight:600;"> 单一API接口名称</i>
        <el-button type="primary" icon="el-icon-plus" style="font-size:16px;font-weight:600;margin-left:51vw;" @click="goTo('/API')">申请新接口</el-button>
      </el-header>
      <el-main>
        <el-container>
          <el-main>
            <el-container>
              <el-header style="text-align:center;">
                 <el-row>
                  <el-col :span="24">
                    <div class="grid-content bg-purple-dark" >
                      <h2>已申请单一接口</h2>           
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
                    prop="routeName"
                    label="API名称"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="routeHost"
                    label="API地址"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="createdAt"
                    label="申请时间"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="left"
                    label="访问次数/剩余次数"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="description"
                    label="接口信息"
                    min-width="150">
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
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableData: [
        {
          name: "mobile",
          address: "是",
          time: "2019-11-22",         
          left: "20/100",         
          description: "接收短信的手机号码",
        },
         {
          name: "mobile",
          address: "是",
          time: "2019-11-22",         
          left: "20/100",         
          description: "接收短信的手机号码",
        },
         {
          name: "mobile",
          address: "是",
          time: "2019-11-22",         
          left: "20/100",         
          description: "接收短信的手机号码",
        },
      ],
    }
    
  },
  created(){
    //let consumerId=sessionStorage.getItem('user');
    let consumerId='fa42437a-dc3c-4845-9472-3c0fce321cdd'
    let url="/api/api-platform/v1/routes?consumerId="+consumerId;
    axios.get(url)
    .then(res=>{
      console.log(res);
      if(res.data.code==201){
        this.tableData=res.data.data;
      }
      else{
        this.tableData=[];
      }
    })
    .catch(error=>{
      console.log(error);
      alert('网络错误，不能访问');
    })
  },
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
