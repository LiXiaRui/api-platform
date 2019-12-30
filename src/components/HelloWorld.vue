<template>
  <div class="hello">
    <el-container>
      <el-header>
        <i class="el-icon-s-goods" style="font-size:20px;font-weight:600;"> 单一API接口名称</i>
      </el-header>
      <el-main>
        <el-container>
          <el-header>
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  <el-row :gutter="20">
                    <el-col :span="4"><div class="grid-content bg-purple" style="font-size:18px;font-weight:800;">接入次数申请：</div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple"><el-button type="primary">25000次</el-button></div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple"><el-button type="primary">50000次</el-button></div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple"><el-button type="primary" icon="el-icon-star-on">500000次</el-button></div></el-col>
                  </el-row>                   
                </div>
              </el-col>
            </el-row>
          </el-header>
          <el-main>
            <el-container>
              <el-header style="text-align:center;">
                 <el-row>
                  <el-col :span="24">
                    <div class="grid-content bg-purple-dark" >
                      <h2>API详细描述</h2>           
                    </div>
                  </el-col>
                </el-row>
              </el-header>
              <el-main>
                <el-table
                  :data="tableData"
                  
                  style="width: 100vw">
                  <el-table-column
                    prop="APIname"
                    label="API名称"
                    min-width="150"
                    height="100px">
                  </el-table-column>
                  <el-table-column
                    prop="APIlink"
                    label="API链接"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="request"
                    label="请求方法"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="description"
                    label="详细描述"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    fixed="right"
                    label="申请接入"
                    min-width="150">
                    <template slot-scope="scope">
                      <el-button index="detailA" @click="handleClick(scope.row),goTo('/detailA')" type="text" size="small">查看</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                    
                <el-pagination
                  :current-page.sync="curPage"
                  :page-size="pagesize"
                  :pager-count="7"
                  :total="tableData.length"
                  background
                  layout="total, prev, pager, next, jumper">
                </el-pagination>
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
      pagesize: 15,
      curPage: 1,
      tableData: [
        {
          APIname: "2016-05-02",
          APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
          request: "post",
          description: "这是。。。。。",
        },
        {
          APIname: "2016-05-02",
          APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
          request: "post",
          description: "这是。。。。。",
        },
        {
          APIname: "2016-05-02",
          APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
          request: "post",
          description: "这是。。。。。",
        },
        {
          APIname: "2016-05-02",
          APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
          request: "post",
          description: "这是。。。。。",
        },{
          APIname: "2016-05-02",
          APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
          request: "post",
          description: "这是。。。。。",
        },
        {
          APIname: "2016-05-02",
          APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
          request: "post",
          description: "这是。。。。。",
        },{
          APIname: "2016-05-02",
          APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
          request: "post",
          description: "这是。。。。。",
        },
        {
          APIname: "2016-05-02",
          APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
          request: "post",
          description: "这是。。。。。",
        },{
          APIname: "2016-05-02",
          APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
          request: "post",
          description: "这是。。。。。",
        },
        {
          APIname: "2016-05-02",
          APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
          request: "post",
          description: "这是。。。。。",
        },{
          APIname: "2016-05-02",
          APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
          request: "post",
          description: "这是。。。。。",
        },
        {
          APIname: "2016-05-02",
          APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
          request: "post",
          description: "这是。。。。。",
        },{
          APIname: "2016-05-02",
          APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
          request: "post",
          description: "这是。。。。。",
        },
        {
          APIname: "2016-05-02",
          APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
          request: "post",
          description: "这是。。。。。",
        },{
          APIname: "2016-05-02",
          APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
          request: "post",
          description: "这是。。。。。",
        },
        {
          APIname: "2016-05-02",
          APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
          request: "post",
          description: "这是。。。。。",
        },{
          APIname: "2016-05-02",
          APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
          request: "post",
          description: "这是。。。。。",
        },
        {
          APIname: "2016-05-02",
          APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
          request: "post",
          description: "这是。。。。。",
        },
      ]
    }
    
  },
  methods: {
      handleClick(row) {
        console.log(row);
      },
      goTo(path) {
          console.log("success");
          this.$router.replace(path);
      }
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
    line-height: 160px;

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

</style>
