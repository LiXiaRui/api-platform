<template>
    <el-container>
        <el-header>
            <i class="el-icon-s-goods" style="font-size:20px;font-weight:505;"> {{PkgName}}</i>
        </el-header>
        <el-main>
            <div style="margin-bottom:40px;">
                <div style="float:left;padding:25px;border:1px solid #B0C4DE">
                    <img src="@/components/static/images/home/apilogo/shop.jpg" width="80" height="85"/>
                </div>
                <div style="float:left;margin-left:200px;text-align:left">
                    <p style="margin-bottom:35px;">
                        <span>数据包名称:</span>
                        <span>{{PkgName}}</span>
                    </p>
                    <p>
                        <span>数据包简介：</span>
                        <span>{{PkgMsg==null?"无":PkgMsg}}</span>
                    </p>
                </div>
            </div>
            <div style="clear:both;padding-top:20px;text-align:left;padding-bottom:50px;">
                <span>接入次数申请：</span>
                <span>
                    <el-radio-group v-model="radio">
                        <el-radio :label="3" >1000次</el-radio>
                        <el-radio :label="6">5000次</el-radio>
                        <el-radio :label="9">10000次</el-radio>
                    </el-radio-group>
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                    <el-button  type="primary" size="medium" round @click="handleSubmit()">立即申请</el-button>
                </span>
            </div>
            <div>
                <el-row style="text-align:left;line-height:40px;margin:0;">
                  <el-col :span="24">
                    <div class="grid-content bg-purple-dark" >
                      <h3>API列表：</h3>           
                    </div>
                  </el-col>
                </el-row>
                <el-table
                  :data="tableData.slice((curPage-1)*pagesize,curPage*pagesize)"
                  style="width: 100vw;margin-bottom:20px;">
                  <el-table-column
                    prop="name"
                    label="API名称"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="msg"
                    label="API链接"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    label="请求方法"
                    min-width="150">
                    post
                  </el-table-column>
                  <el-table-column
                    fixed="right"
                    prop="id"
                    label="详细信息"
                    min-width="150">
                    <template slot-scope="scope">
                      <el-button index="detail" @click="handleClick(scope.row),goTo('/detail',scope.row.id)" type="text" size="small">查看</el-button>
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
            </div>
        </el-main>
    </el-container>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return{
            Pkgid:sessionStorage.getItem('PkgId'),
            PkgName:'',
            PkgMsg:'',
            pagesize: 7,
            curPage: 1,
            radio:3,
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
            ],
        }
    },
    mounted(){
      this.getPkgInfo()
    },
    methods:{
      getPkgInfo(){
        var url='/api/api-platform/v1/kong/package?id='+this.Pkgid+'&pagesize=1&pageindex=0';
        axios.get(url).then(response=>{
          if(response.status==200){
            console.log(response.data)
             this.PkgName=response.data.data[0]["name"];
             this.PkgMsg=response.data.data[0]["msg"];
             this.tableData=response.data.data[0]["routes"];
          }
        })
      },

      handleClick(row) {
        console.log(row);
      },
      goTo(path,APIid) {
          console.log("success");
          sessionStorage.setItem('APIid',APIid)
          this.$router.push({
            path:path,
          });
      },

      handleSubmit(){
        let ID = sessionStorage.getItem('user')
        console.log(ID)
        if(ID){
          this.$confirm('确定申请该数据包吗?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
              })
              .then(() => {
                  let params= {
                    msg:'',
                    state:0,
                    fk_pack_id:this.Pkgid,
                    fk_user_id:ID
                  }
                  console.log(params)
                  axios.post('/api/api-platform/v1/kong/user/package',params).then(response=>{
                    if(response.data.code==201){
                      this.$message({
                        showClose: true,
                        message: '提交成功，待审核...',
                        type: 'success'
                      });
                    }
                    else{
                      this.$message({
                        showClose: true,
                        message: response.data.msg,
                        type: 'error'
                      });
                    }
                  })
                  .catch(error=>{
                      console.log(error)
                      this.$message({
                      showClose: true,
                      message: '网络错误，稍后再试！',
                      type: 'error'
                    });
                  })
              
              }).catch(() => {
                  this.$message({
                  type: 'info',
                  message: '已取消'
                  });          
              });
        }
        else{
          this.$message({
            showClose: true,
            message: '请先登录！',
            type: 'warning'
          });
          this.$router.push('/login');
        }
      },
    }
    
}
</script>

<style scoped lang="scss">
.el-header{
    color:rgb(92, 96, 99);
    text-align: left;
    line-height: 60px;
    background-color: #e3e8f0; 
  }
  
  .el-main {
    color: #333;
    text-align: center;
    padding: 0px;
    margin-left: 30px;
    margin-right: 15px;
    margin-top: 20px;
  }
  /deep/.el-table th{
  font-weight: 800;
  background-color: #d3d9e2!important;
  color: rgb(94, 92, 92);
}

</style>
