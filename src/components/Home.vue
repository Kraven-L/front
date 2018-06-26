<template>
  <div class="main clearfix">
    <div class="filter">
      <div class="filterList clearfix">
        <p>板块</p>
        <p style="color:#333">|</p>
        <p>
          <span class="all">全部</span>
        </p>
        <ul class="clearfix">
          <li>
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>配套件</li>
          <li>海外</li>
          <li>金融</li>
          <li>农机</li>
          <li>环境</li>
          <li>其他</li>
        </ul>
      </div>
      <div class="filterList clearfix" v-show="filterShow">
        <p>公司类型</p>
        <p style="color:#333">|</p>
        <p>
          <span class="all">全部</span>
        </p>
        <ul>
          <li>母公司</li>
          <li>一级分公司</li>
          <li>一级子公司</li>
          <li>二级子公司</li>
          <li>母公司兼分公司</li>
        </ul>
      </div>
      <div class="filterList clearfix" v-show="filterShow">
        <p>经营状态</p>
        <p style="color:#333">|</p>
        <p>
          <span class="all">全部</span>
        </p>
        <ul>
          <li>在业</li>
          <li>存续</li>
          <li>吊销</li>
          <li>注销</li>
          <li>迁出</li>
        </ul>
      </div>
      <div class="pull" @click=toggleFilter>
      </div>
    </div>
    <div class="recently">
      <h3>最近浏览</h3>
      <ul>
        <li>
          <h4>中联重科股份有限公司</h4>
          <p>21小时前</p>
        </li>
        <li>
          <h4>中联重科股份有限公司</h4>
          <p>21小时前</p>
        </li>
        <li>
          <h4>中联重科股份有限公司</h4>
          <p>21小时前</p>
        </li>
        <li>
          <h4>中联重科股份有限公司</h4>
          <p>21小时前</p>
        </li>
        <li>
          <h4>中联重科股份有限公司</h4>
          <p>21小时前</p>
        </li>
        <li>
          <h4>中联重科股份有限公司</h4>
          <p>21小时前</p>
        </li>
        <li>
          <h4>中联重科股份有限公司</h4>
          <p>21小时前</p>
        </li>
      </ul>
    </div>
    <div class="list-box">
      <p>共计
        <span>{{total}} </span>家公司</p>
      <div class="list">
        <ul class="clearfix">
          <li v-for="(item,index) in dataList" :key="index">
            <router-link to="/companydetails" class="clearfix">
              <div class="logo">
                <img :src=item.imgSrc>
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
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="10" background layout="prev, pager, next, jumper" :total="100">
      </el-pagination>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      filterShow: true,
      currentPage1: 1,
      total: "",
      dataList: [],
      options: [
        {
          value: "选项1",
          label: "全部"
        },
        {
          value: "选项2",
          label: "混泥土"
        },
        {
          value: "选项3",
          label: "混泥土改制"
        },
        {
          value: "选项4",
          label: "桩工"
        },
        {
          value: "选项5",
          label: "建起"
        },
        {
          value: "选项6",
          label: "工起"
        },
        {
          value: "选项7",
          label: "非开挖"
        },
        {
          value: "选项8",
          label: "土方"
        }
      ],
      value: "工程机械"
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
      console.log('发送第'+val+'页的请求')
    },
    getListData() {
      let url = "../../static/lists.json";
      this.$axios.get(url).then(res => {
        console.log(res.data.indexList);
        this.dataList = res.data.indexList;
        this.total = res.data.total;
      });
    },
    toggleFilter() {
      this.filterShow = !this.filterShow;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@borderColor: #e1e1e1;

.main {
}
.filter {
  float: left;
  width: 948px;
  // height: 158px;
  background: #fff;
  border: 1px solid #e1e1e1;
  padding: 19px 13px;
  box-sizing: border-box;
  position: relative;
  // margin-top: 100px;
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .filterList {
    line-height: 41px;
    transition: all 0.5s;
    p {
      color: #999;
      float: left;
      &:nth-child(1) {
        width: 80px;
      }
      .all {
        display: inline-block;
        width: 52px;
        height: 24px;
        background-color: #ff8a00;
        border-radius: 3px;
        color: #fff;
        line-height: 24px;
        margin: 0 10px;
        text-align: center;
      }
    }
    ul {
      float: left;
      margin-left: 20px;
      li {
        float: left;
        margin-right: 40px;
        font-size: 16px;
        // .pulldown {
        //   display: inline-block;
        //   width: 16px;
        //   height: 16px;
        //   background: url(../../static/imgs/pulldown.png) no-repeat;
        // }
        .el-select {
          width: 110px;
          .el-input {
            .el-input__inner {
              border: none;
            }
          }
        }
      }
    }
  }
  .pull {
    width: 60px;
    height: 15px;
    position: absolute;
    border: 1px solid @borderColor;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 100%);
    border-top: none;
    border-radius: 0 0 3px 3px;
    background: #fff url(../../static/imgs/scroll-up.png) no-repeat center center;
    cursor: pointer;
  }
}
.recently {
  float: right;
  width: 240px;
  h3 {
    font-size: 18px;
    color: #fff;
    background: #77ca08;
    line-height: 54px;
    padding: 6px 0 0 20px;
  }
  ul {
    border: 1px solid @borderColor;
    border-top: none;
    padding: 6px 10px;
    background: #fff;
    li {
      border-bottom: 1px dotted @borderColor;
      padding: 9px 10px;
      h4 {
        line-height: 25px;
        color: #333;
      }
      p {
        line-height: 22px;
        color: #999;
        font-size: 14px;
      }
    }
  }
}
.list-box {
  float: left;
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
        &:hover {
          box-shadow: 0 0 20px rgba(153, 153, 153, 0.4);
          .content {
            h3 {
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
              &:nth-child(1) {
                width: 160px;
              }
              &:nth-child(2) {
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
  }
}
</style>
