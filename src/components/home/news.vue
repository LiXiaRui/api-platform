<template>
<div class="block">
    <el-carousel height="600px" :interval="9000">
      <el-carousel-item v-for="item in swipeData" :key="item.pic">
        <img :src="item.pic" width="100%" height="100%">
      </el-carousel-item>
    </el-carousel>
    <hotAPI/>
</div>
  
  
</template>

<script>
import hotAPI from '../package/hot/hotAPI'
export default {
    data () {
        return{
            swipeData:[
               {
                pic: require('@/components/static/images/home/news/3.jpg')
                },
                {
                pic: require('@/components/static/images/home/news/4.jpg')
                },
                {
                pic: require('@/components/static/images/home/news/2.jpg')
                },
                {
                pic: require('@/components/static/images/home/news/1.jpg')
                }
            ]
        }
    },
    components:{
      hotAPI
    }
}
</script>

<style scoped>
  .el-carousel{
    margin-bottom: 60px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 400px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>