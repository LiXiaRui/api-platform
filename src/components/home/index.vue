<template>
  <div class="home">
      <el-container style="width:98.96vw">
        <el-header style="height:45px;">
          <el-row>
            <!--放置logo -->
            <el-col :span="8">
              <div class="grid-content">
                <el-col :span="12">
                  <div class="grid-content">
                    <el-col :span="8">
                      <div class="grid-content">
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <div class="grid-content" style="padding-left:30%;">
                        <el-image :src="Logo" class="logopic" index="news" @click="goTo('/news')"></el-image>
                      </div>
                    </el-col>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="grid-content">
                  </div>
                </el-col>
              </div>
            </el-col>
            <!--放置登陆注册按钮 -->
            <el-col :span="16">
              <div class="grid-content">
                <el-row> 
                  <el-col :span="18">
                    <div class="grid-content">
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div v-if="islogin" class="grid-content">
                      <el-button type="primary" round @click="goTo('/userinfo')">我 的</el-button>
                      <el-button type="primary" round @click="withdraw()">退 出</el-button>
                      
                    </div>
                    <div v-else class="grid-content">
                      <el-button type="primary" round index="login" @click="goTo('/login')">登 录</el-button>
                      <el-button type="primary" round index="register" @click="goTo('/register')">注 册</el-button>
                    </div>
                  </el-col>      
                </el-row>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-container>
            <el-header style="background-color:white;">
              <el-menu
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#9499A3"
                text-color="#fff"
                :unique-opened="true"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">数据分类</template>
                  <!-- <el-menu-item v-for="item in items" :key="item.id" :index="item.name" @click="goto('/packageAa',item.id,item.name)">{{item.name}}</el-menu-item> -->
                  <el-menu-item index="packageBa" @click="goTo('/packageBa')">教务管理</el-menu-item>
                  <el-menu-item index="packageCa" @click="goTo('/packageCa')">学生信息</el-menu-item>
                  <!-- <el-menu-item index="1-4" @click="goTo('/packageDa')">分类D</el-menu-item> -->
                </el-submenu>
                <el-menu-item index="2" @click="goTo('/API')">API集市</el-menu-item>
                <el-menu-item index="3" @click="goTo('/package')">数据包集市</el-menu-item>
                <el-menu-item index="4" @click="goTo('/help')">帮助与文档</el-menu-item>
              </el-menu>
            </el-header>
            <el-main>
              <router-view>
              </router-view>
              
            </el-main>
            
        </el-container>
        <el-footer>
          <h5>联系我们：api@api.com/15643278965</h5>
        </el-footer>
      </el-container>
  </div>
</template>	

<script>
import axios from 'axios'
export default {
    data(){
        return{
          msg: "didi",
          Logo: require("@/components/static/images/home/top-aside/logo.jpg"),
          islogin:this.$store.getters.islogin,
          items:[
            
          ]
      };    
    },
    mounted () {
      //this.getSort()
    },
    methods: {
      handleSelect(key, keyPath) {
          this.goTo(key);
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      console.log("success");

      },
      //获取分类
      getSort(){
        let url="/api/api-platform/v1/kinds"
        axios.get(url).then(response => {
          console.log(response.data)
          if(response.status==200){
              this.items=response.data.data
          }
        })
      },
      goTo(path) {
          console.log("success");
          this.$router.replace(path);
      },
      // goto(path,kindId,kindName) {
      //     console.log("success");
      //     sessionStorage.setItem('kindId',kindId)
      //     sessionStorage.setItem('kindName',kindName)
      //     this.$router.push({
      //       path:path,
      //     });
      // },
      withdraw(){
        this.$confirm('即将退出API服务平台，是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
        })
        .then(() => {
            // axios.get('/api/api-platform/v1/user/logout?id='+sessionStorage.getItem('user'),{
            //     headers:{
            //         'token':sessionStorage.getItem('token'),
            //     }
            // })
            // .then(response => {
            //     console.log(response.data)
            //     if(response.status==200){
                    this.$message({
                    type: 'success',
                    message: '成功退出!'
                    });
                    this.islogin=false;
                    sessionStorage.removeItem('user')
                    this.$router.replace({path: '/'});
                // }
            // });
        
        }).catch(() => {
            this.$message({
            type: 'info',
            message: '已取消'
            });          
        });
        }
    }
}



</script>

<style scoped lang="scss">
.el-header, .el-footer {
    // background-color: rgb(215, 223, 233);
    color: #333;
    text-align: center;
    //line-height: 30px;
    padding:0px;
  }
  
  .el-aside {
    //background-color: #9499A3;
    background-color:#D3DCE6;
    color: #333;
    text-align: center;
    line-height: 20px;
  }
  
  .el-main {
    //background-color: rgb(138, 141, 153);
    color: #333;
    text-align: center;
    // line-height: 160px;
    padding: 0;
    width: 100%;
    border-bottom: 2px solid #d8dce6;
    padding-bottom: 100px;
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
  // .bg-purple {
  //   background: #d3dce6;
  // }
  // .bg-purple-light {
  //   background: #e5e9f2;
  // }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .el-image__error, .el-image__inner, .el-image__placeholder{
    margin-top: 10%;
  }

  .el-button{
    font-weight: 600;
    font-size: 16px;
    font-family: "微软雅黑";
    background-color: #E9EEF3;
    color: black;
    border-color: #E9EEF3;
  }

  .el-menu{
    font-size: 60px;
    padding: 0;
  }
  .el-submenu{
    margin-left: 28%;
  }

</style>
<style lang="scss" scoped>
  .el-menu-demo /deep/.el-menu-item{
    font-size: 18px;  
  }
</style>
<style>
.home{
  height: 700px!important;
}
.el-menu--horizontal>.el-submenu .el-submenu__title {
        height: 60px;
        line-height: 60px;
        color: #fff;
        font-size: 18px;
    }
</style>

