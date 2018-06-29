<template>
  <div class="meetingdetails">
    <div class="companyInfo">
      <div class="logo">
        <img src="../../static/imgs/logo.png">
      </div>
      <ul class="content">
        <li>
          <h3>中联重机公司</h3>
        </li>
        <li>
          <span class="green">
            <p>存续（在营、开业、在册）</p>
          </span>
        </li>
        <li>
          <!-- <span class="orange">
            <p>曾用名</p>
          </span> -->
          <el-tooltip class="item" effect="dark" content="奇瑞重工科技股份有限公司" placement="bottom-start">
            <!-- <el-button>下边</el-button> -->
            <span class="orange">
              <p>曾用名</p>
            </span>
          </el-tooltip>
        </li>
      </ul>
      <p>更新时间：2018-05-15</p>
      <el-button type="primary" icon="el-icon-printer" class="button">打印</el-button>
    </div>
    <div class="top">

    </div>
    <div class="detail">
      <h3>第五届董事会第三次会议</h3>
      <ul class="tips clearfix">
        <li>2016-07-01 12:00:01</li>
        <li>董事会</li>
        <li>这是一次非常重要的会议</li>
      </ul>
      <ul class="detailList">
        <li class="clearfix">
          <div class="left">
            <ul>
              <li>
                <h4>议题：关于调整员工工作时间</h4>
                <span class="orange">未通过</span>
              </li>
              <li>
                <p>需上股东会</p>
                <p class="blue">第一次股东会议</p>
              </li>
            </ul>
          </div>
          <div class="right">
            <ul>
              <li>
                <a href=""><img :src=pdf>关于调整员工工作时间的议案.pdf</a>
              </li>
              <li>
                <a href=""><img :src=word>关于调整员工工作时间的股东表情况.doc</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="clearfix">
          <div class="left">
            <ul>
              <li>
                <h4>议题：关于调整员工工作时间</h4>
                <span class="green">通过</span>
              </li>
              <li>
                <p>需上股东会</p>
                <p class="blue">第一次股东会议</p>
              </li>
            </ul>
          </div>
          <div class="right">
            <ul>
              <li>
                <a href=""><img :src=pdf>关于调整员工工作时间的议案.pdf</a>
              </li>
              <li>
                <a href=""><img :src=word>关于调整员工工作时间的股东表情况.doc</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="others">
      <h3>其他附件</h3>
      <ul>
        <li class="clearfix">
          <h4><img :src=pdf>关于调整员工工作.pdf</h4>
          <p>2017-06-18</p>
        </li>
        <li class="clearfix">
          <h4><img :src=pdf>关于调整员工工作.pdf</h4>
          <p>2017-06-18</p>
        </li>
        <li class="clearfix">
          <h4><img :src=pdf>关于调整员工工作.pdf</h4>
          <p>2017-06-18</p>
        </li>
        <li class="clearfix">
          <h4><img :src=pdf>关于调整员工工作.pdf</h4>
          <p>2017-06-18</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pdf: "./static/imgs/pdf.png",
      excel: "./static/imgs/excel.png",
      img: "./static/imgs/img.png",
      word: "./static/imgs/word.png",
      ppt: "./static/imgs/ppt.png"
    };
  }
};
</script>
<style lang="less" scoped>
@borderColor: #e1e1e1;
@red: #ff0000;
@orange: #ff8a00;
@blue: #51aff8;
@green: #77ca08;

.meetingdetails {
  .companyInfo {
    height: 138px;
    border: 1px solid @borderColor;
    background: #fff url(../../static/imgs/name_bg.png) no-repeat;
    margin-bottom: 10px;
    position: relative;
    .logo {
      float: left;
      margin: 19px 19px 0 19px;
    }
    .content {
      float: left;
      margin-top: 55px;
      li {
        float: left;
        line-height: 25px;
        margin-right: 20px;
        h3 {
          font-size: 20px;
          color: #333;
          line-height: 25px;
          font-weight: bold;
        }
        span {
          border: 1px solid #77ca08;
          border-radius: 4px;
          display: inline-block;
          height: 18px;
          &.green {
            border-color: #77ca08;
            color: #77ca08;
          }
          &.orange {
            border-color: #ff8a00;
            color: #ff8a00;
          }
          &.red {
            border-color: #ff0000;
            color: #ff0000;
          }
          p {
            line-height: 18px;
            font-size: 14px;
            margin: 0 10px;
          }
        }
      }
    }
    > p {
      color: #999;
      font-size: 14px;
      line-height: 30px;
      float: right;
      margin-right: 5px;
      background: #fff;
      padding: 0 5px;
      border-radius: 5px;
    }
    .button {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
    }
  }
  .top {
    height: 89px;
    border: 1px solid @borderColor;
    background: #fff;
    margin-bottom: 10px;
  }
  .detail {
    float: left;
    width: 948px;
    // height: 158px;
    background: #fff;
    border: 1px solid @borderColor;
    padding: 15px 19px;
    box-sizing: border-box;
    position: relative;
    h3 {
      font-size: 18px;
      line-height: 29px;
      font-weight: bold;
      color: #333;
    }
    ul {
      &.tips {
        margin-bottom: 15px;
        li {
          float: left;
          margin-right: 30px;
          color: #999;
          font-size: 14px;
          line-height: 21px;
        }
      }
      &.detailList {
        > li {
          border-bottom: 1px solid @borderColor;
          padding: 7px 0 5px 20px;
          .left {
            float: left;
            width: 550px;
            h4 {
              display: inline-block;
              font-size: 16px;
              color: #333;
              line-height: 25px;
            }
            span {
              font-size: 14px;
              display: inline-block;
              // width: 46px;
              padding: 0 2px;
              height: 14px;
              color: #fff;
              text-align: center;
              border-radius: 2px;
              &.orange {
                background: @orange;
              }
              &.green {
                background: @green;
              }
            }
            p {
              display: inline-block;
              font-size: 14px;
              color: #999;
              line-height: 22px;
              margin-right: 30px;
            }
          }
          .right {
            float: left;
            li {
              a {
                color: #333;
                font-size: 14px;
                line-height: 23px;
                &:hover {
                  color: @blue;
                }
                img {
                  vertical-align: middle;
                  margin-right: 8px;
                }
              }
            }
          }
        }
      }
    }
  }
  .others {
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
      padding: 6px 10px 20px;
      background: #fff;
      li {
        border-bottom: 1px dotted @borderColor;
        padding: 9px 10px;
        h4 {
          line-height: 25px;
          color: #333;
          img {
            vertical-align: middle;
            margin-right: 5px;
          }
        }
        p {
          line-height: 22px;
          color: #999;
          font-size: 12px;
          float: right;
        }
      }
    }
  }
  .blue {
    color: #51aff8 !important;
  }
}
</style>
