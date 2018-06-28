<template>
  <div class="main clearfix">
    <div class="filter">
      <div class="filterList clearfix">
        <p>板块</p>
        <p style="color:#333">|</p>
        <ul>
          <li>
            <span>全部</span>
          </li>
          <li>
            <!-- <span @click="changeDropdown">工程机械</span>
            <ul v-show="dropdownShow">
              <li>全部</li>
              <li>混泥土</li>
              <li>混泥土改制</li>
              <li>桩工</li>
              <li>建起</li>
              <li>工起</li>
              <li>非开挖</li>
              <li>土方</li>
            </ul> -->
            <el-select v-model="value" placeholder="全部分类">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <span class="active">配套件</span>
          </li>
          <li>
            <span>海外</span>
          </li>
          <li>
            <span>金融</span>
          </li>
          <li>
            <span>农机</span>
          </li>
          <li>
            <span>环境</span>
          </li>
          <li>
            <span>其他</span>
          </li>
        </ul>
      </div>
      <div class="filterList clearfix" v-show="filterShow">
        <p>公司类型</p>
        <p style="color:#333">|</p>
        <ul>
          <li>
            <span>全部</span>
          </li>
          <li>
            <span>母公司</span>
          </li>
          <li>
            <span class="active">一级分公司</span>
          </li>
          <li>
            <span>一级子公司</span>
          </li>
          <li>
            <span>二级子公司</span>
          </li>
          <li>
            <span>母公司兼分公司</span>
          </li>
        </ul>
      </div>
      <div class="filterList clearfix" v-show="filterShow">
        <p>经营状态</p>
        <p style="color:#333">|</p>
        <ul>
          <li>
            <span>全部</span>
          </li>
          <li>
            <span>在业</span>
          </li>
          <li>
            <span>存续</span>
          </li>
          <li>
            <span>吊销</span>
          </li>
          <li>
            <span class="active">注销</span>
          </li>
          <li>
            <span>迁出</span>
          </li>
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
            <router-link to="/basicinfotable" class="clearfix">
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
      <el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="10" background layout="prev, pager, next, jumper" :total=total>
      </el-pagination>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      filterShow: true,
      dropdownShow: false,
      currentPage1: 1,
      total: 1,
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
      console.log("发送第" + val + "页的请求");
    },
    getListData() {
      let url = "../../static/data/lists.json";
      this.$axios.get(url).then(res => {
        console.log(res.data.indexList);
        this.dataList = res.data.indexList;
        this.total = res.data.total;
      });
    },
    toggleFilter() {
      this.filterShow = !this.filterShow;
    },
    changeDropdown() {
      this.dropdownShow = !this.dropdownShow;
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
  .filterList {
    line-height: 41px;
    p {
      color: #999;
      float: left;
      &:nth-child(1) {
        width: 80px;
      }
    }
    > ul {
      float: left;
      > li {
        float: left;
        // width: 52px;
        text-align: center;
        margin: 0 10px;
        cursor: pointer;
        span {
          display: inline-block;
          height: 24px;
          border-radius: 3px;
          line-height: 24px;
          padding: 0 10px;
          text-align: center;
          &.active,
          &:hover {
            background-color: #ff8a00;
            color: #fff;
          }
        }
        .el-select {
          width: 120px;
        }
        ul {
          position: absolute;
          background: #fff;
          box-shadow: 0 0 8px rgba(153, 153, 153, 0.4);
          z-index: 999;
          text-align: left;
          border-radius: 4px;
          &::after {
            display: block;
            position: absolute;
            width: 20px;
            height: 20px;
            background: #333;
          }
          li {
            padding: 0 20px;
            font-size: 14px;
            &:hover {
              background: #f5f7fa;
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
    background: #fff url(../../static/imgs/scroll-up.png) no-repeat center
      center;
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
  .el-pagination.is-background .btn-next,
  .el-pagination.is-background .btn-prev,
  .el-pagination.is-background .el-pager li {
    background: #fff;
  }
}
</style>
