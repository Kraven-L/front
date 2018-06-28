<template>
  <div class="contactInfo">
    <div class="companyInfo">
      <div class="logo">
        <img src="../../static/imgs/info.png">
      </div>
      <div class="content">
        <h3>
          <span class="blue">{{this.contactInfo.contactName}}</span>（{{this.contactInfo.code}}）</h3>
        <ul class="clearfix">
          <li>{{this.contactInfo.IDcard}}</li>
          <li>{{this.contactInfo.mobile}}</li>
          <li>{{this.contactInfo.wechat}}</li>
          <li>
            <i></i>{{this.contactInfo.phone}}</li>
        </ul>
        <p>{{this.contactInfo.location}}</p>
      </div>
    </div>
    <div class="main">
      <div class="main1">
        <div class="title">
          <span class="line"></span>
          <h4>商业角色（按角色查看）</h4>
        </div>
        <div class="tablelist">
          <table>
            <thead>
              <tr>
                <th width="100px">
                  <p>角色</p>
                </th>
                <th>
                  <p>公司</p>
                </th>
                <th>
                  <p>任职</p>
                </th>
                <th width="100px">
                  <p>任职状态</p>
                </th>
                <th width="120px">
                  <p>省份地区</p>
                </th>
                <th width="120px">
                  <p>开业日期</p>
                </th>
                <th>
                  <p>经营状态</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in bussinessRole" :key="index">
                <td :rowspan="item.rolespan" :class="{hidden: item.roledis}">
                  <p>{{item.role}}</p>
                  <p>（{{item.num}}）</p>
                </td>
                <td>
                  <p class="blue">{{item.companyName}}</p>
                </td>
                <td>
                  <p v-for="(e,i) in item.jobInfo" :key="i">{{e}}</p>
                </td>
                <td>
                  <p>{{item.jobStatus}}</p>
                </td>
                <td>
                  <p>{{item.province}}</p>
                </td>
                <td>
                  <p>{{item.date}}</p>
                </td>
                <td>
                  <p class="green">{{item.operateStatus}}</p>
                </td>
              </tr>
              <!-- <tr>
                <td rowspan="3">
                  <p>股东</p>
                  <p>（3）</p>
                </td>
                <td>
                  <p class="blue">中联重机公司</p>
                </td>
                <td>
                  <p>董事 2016.1.30-2018.12.30</p>
                </td>
                <td>
                  <p>任期内</p>
                </td>
                <td>
                  <p>北京</p>
                </td>
                <td>
                  <p>2017-03-01</p>
                </td>
                <td>
                  <p class="green">存续（在营、开业、在册）</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="blue">心怡科技有限公司</p>
                </td>
                <td>
                  <p>董事 2016.1.30-2018.12.30</p>
                </td>
                <td>
                  <p>任期内</p>
                </td>
                <td>
                  <p>北京</p>
                </td>
                <td>
                  <p>2017-03-01</p>
                </td>
                <td>
                  <p class="green">存续（在营、开业、在册）</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="blue">阿里巴巴股份有限公司</p>
                </td>
                <td>
                  <p>董事 2016.1.30-2018.12.30</p>
                </td>
                <td>
                  <p>任期内</p>
                </td>
                <td>
                  <p>北京</p>
                </td>
                <td>
                  <p>2017-03-01</p>
                </td>
                <td>
                  <p class="green">存续（在营、开业、在册）</p>
                </td>
              </tr>
              <tr>
                <td rowspan="2">
                  <p>董监高</p>
                  <p>（2）</p>
                </td>
                <td>
                  <p class="blue">中联重机公司</p>
                </td>
                <td>
                  <p>董事 2016.1.30-2018.12.30</p>
                </td>
                <td>
                  <p>任期内</p>
                </td>
                <td>
                  <p>北京</p>
                </td>
                <td>
                  <p>2017-03-01</p>
                </td>
                <td>
                  <p class="green">存续（在营、开业、在册）</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="blue">中联重科股份有限公司</p>
                </td>
                <td>
                  <p>董事 2016.1.30-2018.12.30</p>
                  <p>总经理 2016.1.30-2018.12.30</p>
                </td>
                <td>
                  <p class="red">过期</p>
                </td>
                <td>
                  <p>北京</p>
                </td>
                <td>
                  <p>2017-03-01</p>
                </td>
                <td>
                  <p class="green">存续（在营、开业、在册）</p>
                </td>
              </tr> -->
            </tbody>
          </table>
        </div>
      </div>

      <div class="main1">
        <div class="title">
          <span class="line"></span>
          <h4>任职公司（按公司查看）</h4>
        </div>
        <div class="tablelist">
          <table>
            <thead>
              <tr>
                <th width="380">
                  <p>公司</p>
                </th>
                <th>
                  <p>省份地区</p>
                </th>
                <th>
                  <p>开业日期</p>
                </th>
                <th>
                  <p>经营状态</p>
                </th>
                <th>
                  <p>角色</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in companyInfo" :key="index">
                <td>
                  <p class="blue">{{item.companyName}}</p>
                </td>
                <td>
                  <p>{{item.province}}</p>
                </td>
                <td>
                  <p>{{item.date}}</p>
                </td>
                <td>
                  <p class="green">{{item.operateStatus}}</p>
                </td>
                <td>
                  <p>{{item.role}}</p>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      contactInfo: [],
      bussinessRole: [],
      companyInfo: []
    };
  },
  mounted() {
    this.getListInfo();
  },
  methods: {
    getListInfo() {
      let url = "../../static/data/contactInfo1.json";
      this.$axios.get(url).then(res => {
        console.log(res.data);
        this.contactInfo = res.data.contactInfo;
        this.companyInfo = res.data.companyInfo;
        let list = res.data.bussinessRole;

        //把请求到的数据进行过滤
        for (let field in list[0]) {
          var k = 0;
          while (k < list.length) {
            list[k][field + "span"] = 1;
            list[k][field + "dis"] = false;
            for (var i = k + 1; i <= list.length - 1; i++) {
              if (list[k][field] == list[i][field] && list[k][field] != "") {
                list[k][field + "span"]++;
                list[k][field + "dis"] = false;
                list[i][field + "span"] = 1;
                list[i][field + "dis"] = true;
              } else {
                break;
              }
            }
            k = i;
          }
        }
        this.bussinessRole = list;
      });
    }
  }
};
</script>
<style lang="less">
@borderColor: #e1e1e1;
@tableBorderColor: #ceeca6;

.contactInfo {
  .companyInfo {
    height: 138px;
    border: 1px solid @borderColor;
    margin-bottom: 10px;
    background: #fff url(../../static/imgs/name_bg.png) no-repeat;
    padding: 19px;
    box-sizing: border-box;
    .logo {
      float: left;
    }
    .content {
      float: left;
      padding: 0 20px;
      box-sizing: border-box;
      h3 {
        font-size: 14px;
        line-height: 45px;
        span {
          font-size: 18px;
          font-weight: bold;
        }
      }
      > ul {
        > li {
          &:nth-child(1) {
            padding-left: 26px;
            background: url(../../static/imgs/IDcard.png) no-repeat left center;
          }
          &:nth-child(2) {
            padding-left: 16px;
            background: url(../../static/imgs/mobile.png) no-repeat left center;
          }
          &:nth-child(3) {
            padding-left: 21px;
            background: url(../../static/imgs/wechat.png) no-repeat left center;
          }
          &:nth-child(4) {
            padding-left: 20px;
            background: url(../../static/imgs/phone.png) no-repeat left center;
          }
          float: left;
          line-height: 30px;
          margin-right: 50px;
        }
      }
      p {
        padding-left: 26px;
        background: url(../../static/imgs/location.png) no-repeat 5px center;
      }
    }
  }
  .main {
    // height: 2500px;
    border: 1px solid @borderColor;
    background-color: #fff;
    padding-bottom: 30px;
    margin-bottom: 20px;
    .top {
      height: 89px;
      border-bottom: 1px solid @borderColor;
    }
    .main1 {
      padding: 10px 20px 0 20px;
      .title {
        .line {
          display: block;
          position: relative;
          top: 22px;
          float: left;
          width: 2px;
          height: 16px;
          background-color: #51aff8;
        }
        h4 {
          margin-left: 10px;
          font-weight: normal;
          line-height: 60px;
          display: inline-block;
        }
        .el-select {
          float: right;
          margin-top: 10px;
        }
      }
      .tablelist {
        table {
          width: 100%;
          text-align: center;
          font-size: 14px;
          border-top: 1px solid @tableBorderColor;
          border-left: 1px solid @tableBorderColor;
          thead {
            background: #f1fae6;
            th {
              height: 38px;
              vertical-align: middle;
              border-right: 1px solid @tableBorderColor;
              border-bottom: 1px solid @tableBorderColor;
              p {
                color: #999;
                font-weight: bold;
              }
            }
          }
          tbody {
            td {
              height: 38px;
              vertical-align: middle;
              border-right: 1px solid @tableBorderColor;
              border-bottom: 1px solid @tableBorderColor;
              a {
                color: #51aff8;
              }
            }
          }
          th {
            background: #f1fae6;
            height: 38px;
            vertical-align: middle;
            border-right: 1px solid @tableBorderColor;
            border-bottom: 1px solid @tableBorderColor;
            padding: 13px;
            box-sizing: border-box;
            p {
              color: #999;
              font-weight: bold;
            }
          }
          td {
            height: 38px;
            vertical-align: middle;
            border-right: 1px solid @tableBorderColor;
            border-bottom: 1px solid @tableBorderColor;
            padding: 6px 13px;
            box-sizing: border-box;
            a {
              color: #51aff8;
            }
            p {
              line-height: 26px;
              .orange {
                color: #ff8a00;
              }
            }
          }
        }
      }
    }
  }
  .red {
    color: #ff0000;
  }
  .blue {
    color: #51aff8;
  }
  .green {
    color: #77ca08;
  }
}
.hidden {
  display: none;
}
</style>

