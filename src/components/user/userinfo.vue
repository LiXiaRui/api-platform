<template>
    <div>
        <el-container class="Main">
            <el-aside width="220px" style=" background-color:#F2F6FC;">
                <h2>API管理系统</h2>
                <div style="height:60px"> 
                    <el-row>
                        <el-col :span="2" style="margin-left:15px">
                            <el-avatar  icon="el-icon-user-solid" size='large'></el-avatar>
                        </el-col>
                        <el-col :span="8" style="margin-left:25px;margin-top:10px">
                           <div id="">{{email}}</div>
                        </el-col>
                    </el-row>
                </div>
                 <el-menu router :default-active="$route.path">
                      <el-submenu index="1">
                         <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>账户信息</span>
                         </template>
                        <el-menu-item-group>
                            <el-menu-item index="/personinformation">个人信息</el-menu-item>
                            <!-- <el-menu-item index="/System/Password">密码修改</el-menu-item> -->
                        </el-menu-item-group>
                      </el-submenu>
                      <el-submenu index="2">
                         <template slot="title">
                            <i class="el-icon-view"></i>
                            <span>我的接口</span>
                         </template>
                        <el-menu-item-group>                         
                            <el-menu-item index="/singleAPI">单一接口</el-menu-item>
                            <el-menu-item index="/packAPI">接口套餐</el-menu-item>
                        </el-menu-item-group>
                      </el-submenu>
                 </el-menu>
            </el-aside>
            <el-container>
                <el-header  style="width:175vh;" class="icon">
                    <div style="position: relative;">
                        <el-row>
                            <el-button type="primary" round @click="goTo('/news')" style="font-size:16px;text-align: center;margin-left:137vh;">首  页</el-button>
                            <el-button type="primary" round @click="withdraw()" style="font-size:16px;text-align: center;">退  出</el-button>
                        </el-row>
                    </div>
                </el-header>
                <el-main style="width:175vh">
                    <transition>                      
                        <router-view></router-view>
                    </transition>
                </el-main>
            </el-container>
        </el-container>
         
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
             table: false,
             table2:false,
             dialog: false,
             loading: false,
             gridData: [],
            email:'',
            form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
            },
            formLabelWidth: '80px',
             data4: [{
               label: '浙江省',
               children: [{
               label: '二级 1-1',
               children: [{
               label: '三级 1-1-1'
                    }]
                  }]
                  }, {
              label: '福建省',
              children: [{
              label: '二级 2-1',
              children: [{
              label: '三级 2-1-1'
                 }]
               }, {
              label: '二级 2-2',
              children: [{
              label: '三级 2-2-1'
               }]
              }]
             }, {
             label: '北京市',
             children: [{
             label: '二级 3-1',
             children: [{
              label: '三级 3-1-1'
              }]
             }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
               }]
             }]
           }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
         
    },
    mounted(){
         this.userinfor = sessionStorage.getItem('user');
        this.token = sessionStorage.getItem('token');
        console.log(this.userinfor);
        console.log(this.token);
        var url = '/api/api-platform/v1/user?id='+this.userinfor;
        axios.get(url,{
            headers:{
            'token':this.token,　　　　//也是在本地中拿到token
            }
        }).then(response => {
            console.log(response.data);
            if (response.status == 200) {
            this.email= response.data.data.email;
            this.loading = false;
            }
        });
    },
    methods:{
        handleClose(done) {
            this.$confirm('确定要提交表单吗？')
                .then(_ => {
                    this.loading = true;
                    setTimeout(() => {
                    this.loading = false;
                    done();
                    }, 2000);
                })
                .catch(_ => {});
        },
        goTo(path) {
          console.log("success");
          this.$store.dispatch('login');
          this.$router.replace(path);
         },
        withdraw(){
            this.$confirm('即将退出登陆，是否继续?', '提示', {
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
                        this.$store.dispatch('logout')
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
<style scoped>
.Main{
    width: 190vh;
    height: 97vh;
}
h2{
    color: #909399;


}
.el-aside{
    background-color: #C0C4CC;
}
.el-header{
    background-color: #E8EAF0;
}
.el-main{
    background-color: #DCDFE6;
}
.el-footer{
    height: 100px;
    background-color: #C0C4CC;
}
.avater{
    padding-left: 0px;
    margin-left:1px;
    position:left;
}
.icon{
    font-size: 40px;
    
}
.el-button{
    background-color:#D1D7E1;
    color: black;
    border: #D1D7E1;
    font-family: '微软雅黑';
    font-weight: 600;
}


</style>
