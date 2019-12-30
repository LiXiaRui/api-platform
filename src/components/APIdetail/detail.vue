<template>
    <el-container>
        <el-header>
            <i class="el-icon-star-on" style="font-size:18px;font-weight:505;"> {{APIName}}</i>
        </el-header>
        <el-main>
            <div style="margin-bottom:40px;">
                <div style="float:left;padding:25px;border:1px solid #B0C4DE">
                    <img src="@/components/static/images/home/apilogo/ft.jpg" width="80" height="85"/>
                </div>
                <div style="float:left;margin-left:100px;text-align:left">
                    <p style="margin-bottom:35px;">
                        <span>接口名称:</span>
                        <span>{{APIName}}</span>
                    </p>
                    <p>
                        <span>接口简介：</span>
                        <span>{{APIMsg==null?"无":APIMsg}}</span>
                    </p>
                </div>
            </div>
            <div style="clear:both;padding-top:20px;text-align:left;padding-bottom:50px;"></div>
            <div>
                <el-table
                  :data="tableDataA"
                  style="width: 100vw;margin-bottom:20px;">
                  <el-table-column
                    prop="address"
                    label="接口地址"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="request"
                    label="请求方法"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="returnForm"
                    label="返回格式"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="other"
                    label="接口备注信息"
                    min-width="150">
                  </el-table-column>
                </el-table>
              
                <el-row style="text-align:left;line-height:40px;margin:0;">
                  <el-col :span="24">
                    <div class="grid-content bg-purple-dark" >
                      <h3>请求参数：</h3>           
                    </div>
                  </el-col>
                </el-row>
                <el-table
                  :data="tableDataB"
                  border
                  style="width: 100vw;margin-bottom:20px;">
                  <el-table-column
                    prop="name"
                    label="名称"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="must"
                    label="必填"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="type"
                    label="类型"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="description"
                    label="说明"
                    min-width="150">
                  </el-table-column>
                </el-table>

                <el-row style="text-align:left;line-height:40px;margin:0;">
                  <el-col :span="24">
                    <div class="grid-content bg-purple-dark" >
                      <h3>响应参数：</h3>           
                    </div>
                  </el-col>
                </el-row>
                <el-table
                  :data="tableDataC"
                  border
                  style="width: 100vw;margin-bottom:20px;">
                 <el-table-column
                    prop="name"
                    label="名称"
                    min-width="150"
                    height="100px">
                  </el-table-column>
                  <el-table-column
                    prop="type"
                    label="类型"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="description"
                    label="说明"
                    min-width="150">
                  </el-table-column>
                </el-table>   
            </div>
        </el-main>
    </el-container>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return{
            APIid:sessionStorage.getItem('APIid'),
            APIName:'',
            APIMsg:'',
            radio:3,
            tableDataA: [
                {
                address: "2016-05-02",
                request: "post",
                returnForm: "https://element.eleme.cn/#/zh-CN/component/table",         
                description: "这是。。。。。",
                other: "无"
                },
            ],
            tableDataB: [
                {
                name: "mobile",
                must: "是",
                type: "String",         
                description: "接收短信的手机号码",
                },
                {
                name: "mobile",
                must: "是",
                type: "String",         
                description: "接收短信的手机号码",
                },
            ],
            tableDataC: [
                {
                name: "error_code",
                type: "int",         
                description: "返回代码",
                },
            ]
        }
    },
    mounted(){
      this.getAPIInfo()
    },
    methods:{
      getAPIInfo(){
        var url='/api/api-platform/v1/kong/route?id='+this.APIid;
        axios.get(url).then(response=>{
          if(response.status==200){
            console.log(response.data)
            this.APIName=response.data.route.name;
            this.APIMsg=response.data.route.msg;
            this.tableDataB=response.data.route.request;
            this.tableDataC=response.data.route.response;
          }
        })
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
