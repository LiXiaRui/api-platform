<template>
  <div class="packageBa">
    <el-container>
      <el-header style="border-bottom: 2px solid #d8dce6;">
        <span class="el-icon-arrow-left" @click="goTo('news')" style="font-size:18px;font-weight:490;cursor:pointer;color:gray">返回首页</span> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="el-icon-location" style="font-size:18px;font-weight:490;">当前位置：</span>
        <span style="font-size:18px;font-weight:490;">数据包集市</span>
        <span class="el-icon-arrow-right" style="font-size:18px;font-weight:490;">全部数据</span>
      </el-header>
      <el-container>
            <el-header class="ex">
                <el-row :gutter="20">
                    <el-col :span="2"><div class="grid-content">价格</div></el-col>
                    <el-col :span="2"><div class="grid-content">|</div></el-col>
                    <el-col :span="2"><div class="grid-content">全部</div></el-col>
                    <el-col :span="2"><div class="grid-content">免费</div></el-col>
                    <el-col :span="2"><div class="grid-content">收费</div></el-col>
                    <el-col :span="14"><div class="grid-content"></div></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="2"><div class="grid-content">分类</div></el-col>
                    <el-col :span="2"><div class="grid-content">|</div></el-col>
                    <el-col :span="2"><div class="grid-content" @click="getPkgs()">全部</div></el-col>
                    <el-col :span="2" v-for="kind in kinds" :key="kind.id"><div class="grid-content" @click="getPkgsById(kind.id)">{{kind.name}}</div></el-col>
                </el-row>
            </el-header>
            <el-main>
                <div :data="items.slice((curPage-1)*pagesize,curPage*pagesize)" style="height:600px;">
                    <ul class="sortB">
                        <template v-for="(item) in items.slice((curPage-1)*pagesize,curPage*pagesize)">
                            <li :key="item.id" @mouseover="selectStyle (item)" 
                                :class="{'active':item.active}" 
                                @mouseout="outStyle(item)"
                                @click="goTo('/detailA',item.id)">
                                <span class="APIimg"><img src="@/components/static/images/home/apilogo/shop.jpg" width="100%"></span>
                                <!-- <span>{{item.id}}</span> -->
                                <span class="APIname">{{item.name}}</span>
                                <span class="count">使用次数：{{item.count==null?0:item.count}} 次</span>
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
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pagesize: 10,
      curPage: 1,
      active: false,
      items:[],
      kinds:[]
    }
    
  },
  created(){
    this.getSort()
    this.getPkgs()
  },
  methods: {
      handleClick(row) {
        console.log(row);
      },
      goTo(path,id) {
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
      //获取分类
      getSort(){
        let url="/api/api-platform/v1/kinds"
        axios.get(url).then(response => {
          console.log(response.data)
          if(response.status==200){
              this.kinds=response.data.data
          }
        })
      },
      getPkgs(){
        var url='/api/api-platform/v1/kong/packages?pagesize=10&pageindex=0';
        axios.get(url).then(response => {
          if(response.status==200){
            this.items=response.data.data
          }
        })
        .catch(error=>{
            console.log(error);
            alert('网络错误，不能访问');
        })
      },
      getPkgsById(id){
        var url='/api/api-platform/v1/kind?id='+id;
        console.log(url)
        axios.get(url).then(response=>{
          if(response.status==200){
            console.log(response.data);
            this.items=response.data.kind.packages;
          }
        })
      }
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