<template>
  <div class="hello">
    <div class="filter">

    </div>
    <div class="list-box">
      <p>共计 <span>{{total}} </span>家公司</p>
      <div class="list">
        <ul class="clearfix">
          <li v-for="(item,index) in dataList" :key="index">
            <router-link to="">
              <div class="logo">
              <img :src=item.imgSrc alt="">
            </div>
            <div class="content">
              <h3>{{item.companyName}}
                <span :class=item.type>
                  <p>{{item.tips}}</p>
                </span>
              </h3>
              <ul class="clearfix">
                <li>法定代表人：
                  <span class="representative">{{item.representative}}</span>
                </li>
                <li>注册资本：
                  <span class="capital">{{item.registerCapital}}</span>万人民币</li>
                <li>注册时间：
                  <span>{{item.registerTime}}</span>
                </li>
              </ul>
            </div>
            <p class="sign">{{item.classify}}</p>
            </router-link>
          </li>

        </ul>
      </div>
      <!-- <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
        </el-pagination>
      </div> -->
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="10" background layout="prev, pager, next, jumper" :total="100">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      total: "",
      dataList: []
    };
  },
  mounted() {
    this.getListData();
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    getListData() {
      let url = "../../static/lists.json";
      this.$axios.get(url).then(res => {
        console.log(res.data.indexList);
        this.dataList = res.data.indexList;
        this.total = res.data.total;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.filter {
  width: 948px;
  height: 158px;
  background: #fff;
  border: 1px solid #e1e1e1;
  margin-top: 100px;
}
.list-box {
  width: 950px;
  // height: 840px;
  > p {
    margin: 13px 0 0 20px;
    font-size: 16px;
    line-height: 36px;
    color: #333;
    span {
      color: #ff8a00;
    }
  }
  .list {
    width: 100%;
    height: 100%;
    background: #fff;
    > ul {
      > li {
        height: 139px;
        border-bottom: 1px solid #e1e1e1;
        padding: 20px;
        box-sizing: border-box;
        position: relative;
        &:hover{
          box-shadow:  0 0 20px rgba(153,153,153,0.4); 
          .content{
            h3{
              color: #51aff8;
            }
          }
        }
        .logo {
          float: left;
        }
        .content {
          float: left;
          padding: 20px;
          box-sizing: border-box;
          h3 {
            font-size: 20px;
            color: #333;
            line-height: 25px;
            font-weight: bold;
            span {
              border: 1px solid #77ca08;
              display: inline-block;
              width: 38px;
              height: 14px;
              // text-align: center;
              position: relative;
              // vertical-align: top;
              top: 1px;
              left: 10px;
              &.green {
                border-color: #77ca08;
                p {
                  color: #77ca08;
                }
              }
              &.orange {
                border-color: #ff8a00;
                p {
                  color: #ff8a00;
                }
              }
              &.red {
                border-color: #ff0000;
                p {
                  color: #ff0000;
                }
              }
              p {
                display: inline-block;
                line-height: 14px;
                font-size: 12px;
                position: absolute;
                left: 6px;
              }
            }
          }
          > ul {
            > li {
              &:nth-child(1){
                width: 160px;                
              }
              &:nth-child(2){
                width: 220px;                
              }
              float: left;
              line-height: 50px;
              margin-right: 40px;
              span.representative {
                color: #51aff8;
              }
              span.capital {
                color: #ff8a00;
              }
            }
          }
        }
        .sign {
          position: absolute;
          right: 30px;
          bottom: 40px;
        }
      }
    }
  }
  .el-pagination {
    margin: 30px 0;
    .btn-next {
      background-color: #fff !important;
    }
  }
}
</style>
