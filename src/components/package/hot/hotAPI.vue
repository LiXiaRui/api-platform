<template>
  <div class="hotAPI">
    <el-container>
      <el-header>
        <i class="el-icon-menu" style="font-size:20px;font-weight:510;"> 热门API</i>
      </el-header>
      <el-main>
        <div id="sort">
            
            <ul class="sortB">
            <template v-for="(item) in items.slice((curPage-1)*pagesize,curPage*pagesize)">
                <li :key="item.APIid" @mouseover="selectStyle (item)" 
                    :class="{'active':item.active}" 
                    @mouseout="outStyle(item)"
                    @click="goTo('detailB',item.APIid)">
                    <span class="APIimg"><img :src="item.APIimg" width="100%"></span>
                    <span class="APIname">{{item.APIname}}</span>
                    <span class="count">使用次数：{{item.count}}次</span>
                </li>
            </template>
            </ul>
        </div> 
        <!-- <div>  
            <el-pagination
                :current-page.sync="curPage"
                :page-size="pagesize"
                :pager-count="7"
                :total="items.length"
                background
                layout="total, prev, pager, next, jumper">
            </el-pagination>
        </div>  -->
        
       
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
      pagesize: 10,
      curPage: 1,
      active: false,
      items:[
          {
            APIid:1,
            APIimg:require("@/components/static/images/home/apilogo/safe.jpg"),
            APIname: "2016-05-02",
            count:456,
            APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
            request: "post",
            description: "这是。。。。。",
          },
          {
            APIid:2,
            APIimg:require("@/components/static/images/home/apilogo/ft.jpg"),
            APIname: "2016-05-02",
            count:456,
            APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
            request: "post",
            description: "这是。。。。。",
          },
          {
            APIid:3,
            APIimg:require("@/components/static/images/home/apilogo/itune.png"),
            APIname: "2016-05-02",
            count:456,
            APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
            request: "post",
            description: "这是。。。。。",
          },
          {
            APIid:4,
            APIimg:require("@/components/static/images/home/apilogo/fire.jpg"),
            APIname: "2016-05-02",
            count:1000,
            APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
            request: "post",
            description: "这是。。。。。",
          },
          {
            APIid:5,
            APIimg:require("@/components/static/images/home/apilogo/shop.jpg"),
            APIname: "2016-05-02",
            count:456,
            APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
            request: "post",
            description: "这是。。。。。",
          },
          {
            APIid:6,
            APIimg:require("@/components/static/images/home/apilogo/fire.jpg"),
            APIname: "2016-05-02",
            count:500,
            APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
            request: "post",
            description: "这是。。。。。",
          },
          {
            APIid:7,
            APIimg:require("@/components/static/images/home/apilogo/shop.jpg"),
            APIname: "2016-05-02",
            count:45,
            APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
            request: "post",
            description: "这是。。。。。",
          },
          {
            APIid:8,
            APIimg:require("@/components/static/images/home/apilogo/itune.png"),
            APIname: "2016-05-02",
            count:46,
            APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
            request: "post",
            description: "这是。。。。。",
          },
           {
            APIid:9,
            APIimg:require("@/components/static/images/home/apilogo/ft.jpg"),
            APIname: "2016-05-02",
            count:56,
            APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
            request: "post",
            description: "这是。。。。。",
          },
          {
            APIid:10,
            APIimg:require("@/components/static/images/home/apilogo/shop.jpg"),
            APIname: "2016-05-02",
            count:456,
            APIlink: "https://element.eleme.cn/#/zh-CN/component/table",
            request: "post",
            description: "这是。。。。。",
          },
         
      ]
    }
    
  },
  mounted:function(){
      var orderHeight = document.body.clientHeight;
      document.getElementById("sort").style.height = orderHeight+'px';
    },
  methods: {
      handleClick(row) {
        console.log(row);
      },
      goTo(name,APIid) {
          console.log("success");
          this.$router.push({
            name:name,
            params:{
              id:APIid
              }
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
    //border-bottom: 1px solid rgb(230, 243, 245); 
    // padding:0;
  }
  
  .el-main {
    //background-color: #B3C0D1;
    color: #333;
    text-align: center;
    padding: 0px;
    // line-height: 160px;
    //background-color: #91e9dd;

  }
.sortB li{
       list-style: none;
       width:15%;
       border:1px solid rgb(137, 166, 209);
       height:230px;
       overflow: hidden;
       background-color:#fff;
       padding: 10px;
       float:left;
       margin: 15px;
       cursor: pointer;
       
 
   }
   .sortB li span{
       
        display: block;
        margin: 10px auto;
        //float:left;
   }
.APIimg{
    width: 30%;
}
.active{
  color:  rgb(137, 166, 209);
  
}
  
</style>
<style scope>
/* .packageBa .el-table__header tr,
 .packageBa .el-table__header th
  { padding: 0;
    height:60px !important;
    background-color: rgb(209, 214, 214);
    font-weight: 800;
    color: black;
  }
.cell{max-height: 60px !important;overflow: auto !important;}  */

</style>