<template>
  <div class="packageBa">
    <el-container>
      <el-header style="border-bottom: 2px solid #d8dce6;">
        <span class="el-icon-arrow-left" @click="goToAPI('/news')" style="font-size:18px;font-weight:490;cursor:pointer;color:gray">返回首页</span> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="el-icon-location" style="font-size:18px;font-weight:490;">当前位置：</span>
        <span style="font-size:18px;font-weight:490;">数据分类</span>
        <span class="el-icon-arrow-right" style="font-size:18px;font-weight:490;">学生信息</span>
      </el-header>
        <el-container>
            <el-header class="ex">
                <el-row :gutter="20">
                    <el-col :span="2"><div>价格</div></el-col>
                    <el-col :span="2"><div>|</div></el-col>
                    <el-col :span="2"><div class="grid-content">全部</div></el-col>
                    <el-col :span="2"><div class="grid-content">免费</div></el-col>
                    <el-col :span="2"><div class="grid-content">收费</div></el-col>
                    <el-col :span="14"><div class="grid-content"></div></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="2"><div>分类</div></el-col>
                    <el-col :span="2"><div>|</div></el-col>
                    <el-col :span="2"><div class="grid-content" @click="getAll()">全部</div></el-col>
                    <el-col :span="2"><div class="grid-content" @click="getAPI()">API</div></el-col>
                    <el-col :span="2"><div class="grid-content" @click="getPkgs()">数据包</div></el-col>
                    <el-col :span="14"><div class="grid-content"></div></el-col>
                </el-row>
            </el-header>
           <el-main>
                <div style="height:600px;">
                    <ul class="sortB">
                        <template v-for="(route) in routes.slice((curPage-1)*pagesize,curPage*pagesize)">
                            <li :key="route.APIid" @mouseover="selectStyle (route)" 
                                :class="{'active':route.active}" 
                                @mouseout="outStyle(route)"
                                @click="goToAPI('/detailB',route.id)">
                                <span class="APIimg"><img src="@/components/static/images/home/apilogo/ft.jpg" width="100%"></span>
                                <span class="APIname">{{route.name}}</span>
                                <span class="count">使用次数：{{route.count==null?0:route.count}} 次</span>
                            </li>
                        </template>
                        <template v-for="(pkg) in pkgs.slice((curPage-1)*pagesize,curPage*pagesize)">
                            <li :key="pkg.APIid" @mouseover="selectStyle (pkg)" 
                                :class="{'active':pkg.active}" 
                                @mouseout="outStyle(pkg)"
                                @click="goToPkg('/detailA',pkg.id)">
                                <span class="APIimg"><img src="@/components/static/images/home/apilogo/shop.jpg" width="100%"></span>
                                <span class="APIname">{{pkg.name}}</span>
                                <span class="count">使用次数：{{pkg.count==null?0:pkg.count}} 次</span>
                            </li>
                        </template>
                    </ul>
                    
                </div> 
                <el-pagination
                    :current-page.sync="curPage"
                    :page-size="pagesize"
                    :pager-count="7"
                    :total="items.length"
                    background
                    layout="total, prev, pager, next, jumper">
                </el-pagination> 
            </el-main>
        </el-container>
    </el-container>
    
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pagesize: 10,
      curPage: 1,
      active: false,
      //id:'',
      //kindName:'',
     // :data="items.slice((curPage-1)*pagesize,curPage*pagesize)"
      routes:[],
      pkgs:[],
      items:[],
      
    }
    
  },
  mounted(){
    //this.kindName=sessionStorage.getItem('kindName');
    this.getAll();
  },
  methods: {
      handleClick(row) {
        console.log(row);
      },
      goToAPI(path,APIid) {
          console.log("success");
          sessionStorage.setItem('APIid',APIid)
          this.$router.push({
            path:path
          });
      },

      goToPkg(path,id) {
          console.log("success");
          sessionStorage.setItem('PkgId',id)
          this.$router.push({
            path:path,
          });
      },

      selectStyle (item) {
        var _this=this;
        this.$nextTick(function () {
          this.items.forEach(function (item) {
            _this.$set(item,'active',false);
          });
          this.$set(item,'active',true);
        });
      },
      outStyle (item) {
        this.$set(item,'active',false);
      },
      getAll(){
        var _this=this;
        // _this.id=sessionStorage.getItem('kindId')
        var url='/api/api-platform/v1/kind?id=XSXX';
        axios.get(url).then(response=>{
          if(response.status==200){
            console.log(response.data);
            _this.items=response.data.kind.routes.concat(response.data.kind.packages);
            _this.routes=response.data.kind.routes;
            _this.pkgs=response.data.kind.packages;
          }
        })
      },
      getAPI(){
        this.pkgs=[];
        var _this=this
        var url='/api/api-platform/v1/kind?id=XSXX';
        axios.get(url).then(response=>{
          if(response.status==200){
            _this.routes=response.data.kind.routes;
            _this.items=_this.routes;
          }
        })
        
      },
       getPkgs(){
        this.routes=[];
        var _this=this
        var url='/api/api-platform/v1/kind?id=XSXX';
        axios.get(url).then(response=>{
          if(response.status==200){
            _this.pkgs=response.data.kind.packages;
            _this.items=_this.pkgs;
          }
        })
      },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-header{
    //background-color: #E9EEF3;
    color:#4682B4;
    text-align: left;
    line-height: 60px;
    //border-bottom: 2px solid #d8dce6; 
    // padding:0;
  }
  
  .el-main {
    //background-color: #B3C0D1;
    color: #333;
    text-align: center;
    padding: 20px;
    border-top: 2px solid #d8dce6;
    // line-height: 160px;
    //background-color: #91e9dd;

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
    :hover{
      //color: #99a9bf;
      background-color: #4682B4;
      color: #fff;
    }
    margin-bottom: 15px;
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
  // .grid-content {
  //   border-radius: 4px;
  //   min-height: 36px;
  //   :hover{
  //     color: #4682B4;
  //   }
  // }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
.sortB li{
       list-style: none;
       width:15%;
       border:1px solid rgb(137, 166, 209);
       //border:1px solid;
       height:220px;
       overflow: hidden;
       background-color:#fff;
       padding: 10px;
       float:left;
       margin: 15px;
       cursor: pointer;
 
   }
   .sortB li span{
       
        display: block;
        margin: 13px auto;
        //float:left;
   }
.APIimg{
    width: 30%;
}
.active{
  //color: rgb(109, 184, 197)
  color: rgb(137, 166, 209);
}
.count{
  font-family: "微软雅黑";
  font-size: 14px;
}
.ex{
    margin: 20px 0 10px;
    line-height: 20px;
    text-align: center;
    
}
.ex>.el-row{
    margin-bottom: 0px;
    cursor: pointer;
}
  
</style>
<style scope>
.packageBa .el-table__header tr,
 .packageBa .el-table__header th
  { padding: 0;
    height:60px !important;
    background-color: rgb(209, 214, 214);
    font-weight: 800;
    color: black;
  }
.cell{max-height: 60px !important;overflow: auto !important;} 

</style>