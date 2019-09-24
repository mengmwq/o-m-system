<template>
  <div class="bigdiv">

    <ul class="nav-center">
      <li>
        <a
          :class="{active:activeMenu == 'a'}"
          @click="scrollTo('a')"
        ><i class="el-icon-star-off"></i><br />订单信息</a>
      </li>
      <li>
        <a
          :class="{active:activeMenu == 'b'}"
          @click="scrollTo('b')"
        ><i class="el-icon-date"></i><br />订单预览</a>
      </li>

    </ul>

    <div
      class="main"
      id="scrollDom"
      key='1'
    >
      <div
        class="section section-a"
        v-scrollWatch="{name:'a',offset:0,callback:spyDomChange}"
      >
        <!-- 寄件人  收件人信息 -->
        <el-row
          :gutter="24"
          style="margin: 0"
        >

          <el-col :span="12">
            <h2 style="border-left: 4px solid #45A2DF;font-family: cursive;margin:10px 0">&nbsp;寄件人信息</h2>
            <div class="bioage">
              <el-form
                ref="form"
                label-width="100px"
              >
              <el-row>
                <el-col
                  :span="12"

                >
                  <el-form-item label="客户账号">
                    <el-input v-model="accoutNum" @blur="getManMsg"></el-input>
                  </el-form-item>
                </el-col>

                <!--  月结  现金-->
                <el-col
                  :span="12"

                >
                  <el-form-item>
                    <el-input v-model="ManMsg.CountType"></el-input>
                  </el-form-item>
                </el-col>
        </el-row>


                <el-form-item label="公司名称">
                  <el-input v-model="ManMsg.Company"></el-input>
                </el-form-item>
                <el-form-item label="寄件人">
                  <el-input v-model="ManMsg.Manager"></el-input>
                </el-form-item>

                <el-row>
                <el-col
                  :span="12"
                  style="padding:0"
                >
                  <el-form-item label="部门/科室">
                    <el-input v-model="ManMsg.Manager"></el-input>
                  </el-form-item>
                </el-col>

                <el-col
                  :span="12"
                  style="padding:0"
                >
                  <el-form-item label="保险费率">
                    <el-input v-model="ManMsg.SafeRate"></el-input>
                  </el-form-item>
                </el-col>
            </el-row>

                <el-form-item label="联系电话">
                  <el-input v-model="ManMsg.Telephone"></el-input>
                </el-form-item>
                <el-form-item label="城市区域">
                  <el-input v-model="ManMsg.cityArea"></el-input>
                </el-form-item>
                <el-form-item label="详细地址">
                  <el-input v-model="ManMsg.Address"></el-input>
                </el-form-item>

              </el-form>
            </div>
          </el-col>
          <el-col :span="11">
            <h2 style="border-right: 4px solid #45A2DF;display: flex;justify-content: flex-end;font-family: cursive;margin:10px 0">收件人信息&nbsp&nbsp</h2>
            <div class="bioage">
              <el-form
                ref="form"
                label-width="100px"
              >

                <el-form-item label="城市区域" >
                  <el-input v-model="GetCity"></el-input>
                </el-form-item>
                <el-form-item label="公司名称">
                  <el-input v-model="GetCompany"></el-input>
                </el-form-item>
                <el-form-item label="收件人">
                  <el-input v-model="GetName"></el-input>
                </el-form-item>
                <el-form-item label="部门/科室">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                  <el-input v-model="GetTelephone"></el-input>
                </el-form-item>
                <el-form-item label="详细地址">
                  <el-input v-model="GetAddress"></el-input>
                </el-form-item>

              </el-form>
            </div>
          </el-col>
        </el-row>
        <!-- 货物信息 -->
        <el-row
          :gutter="24"
          style="margin: 0"
        >
          <el-col :span="24">
            <h2 style="border-left: 4px solid #45A2DF;font-family: cursive;margin:10px 0">&nbsp;货物信息</h2>

            <div style="display:flex;">
              <el-steps
                direction="vertical"
                :active="active"
                style="height:200px;width:50px;"
              >
                <el-step></el-step>
                <el-step v-if="active===2"></el-step>
              </el-steps>
              <div style="display:flex;flex-direction: column;">
                <div
                  v-if="isFirst"
                  style="flex:1;"
                >
                  <div>{{firstTitle}}</div>
                  <div>温区选择（任意温区）</div>
                  <div class="temFirst">
                    <span
                      v-for="(item1,index) in temArea"
                      :key="index"

                      @click="next(item1,index)"
                      :class="{temActive: istemActive == index,temDefault: istemActive != index}"
                    >{{item1.WDQJ}}</span>
                  </div>
                  <!-- <button @click="next"> 下一步 </button> -->
                </div>

                <div v-if="active===2">
                  <div>{{towTitle}}</div>
                  <div>
                    <el-tabs >
                      <el-tab-pane label="箱型" :disabled="isDisabled">
                        <div class="temFirst">
                          <div
						  	v-for="(item,index) in boxType"
                          	:key="index" >
                            <span>{{item.PackageType}}</span>

							<input type="number" value="" v-model='item.num' style='width:20%;' @blur="isNull(item,index)" @input="isClick(item,'box')">

							<span>个</span>
                          </div>

                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="冷藏专用车" :disabled="isDisabled1">
                        <div class="temFirst">
							<div v-for="(item,index) in iceCar" :key="index">
								<span>{{item.PackageType}}</span>
								<input type="number" v-model="item.num" style='width:20%;' @blur="isNull(item,index,item1)" @input="isClick(item,'car')" >
								<span>辆</span>
							</div>
                        </div>
                      </el-tab-pane>
                    </el-tabs>
                  </div>

                </div>

              </div>

            </div>

          </el-col>
          <el-col :span="24" style="text-align:right;">
            <!-- <button @click="prev"> 上一步 </button> -->
            <span class="save" @click="prev">上一步</span>
          </el-col>
          <el-col :span="24">
            <h2 style="border-left: 4px solid #45A2DF;font-family: cursive;margin:10px 0">&nbsp;要求取件时间</h2>
            <div>
              <el-date-picker
                v-model="value1"
                type="datetime"


                value-format="yyyy-MM-dd HH:mm:ss"
                placeholder="选择日期时间">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="24">
            <h2 style="border-left: 4px solid #45A2DF;font-family: cursive;margin:10px 0">&nbsp;时限要求</h2>
            <div >
<!--              <span v-for="(item,index) in tiemLimit" :key="index">{{item.limit}}</span>-->
                <el-radio-group v-model="LimitTime">
                        <el-radio :label="24">24H</el-radio>
                    <el-radio :label="72">72H</el-radio>
                    <el-radio :label="36">36H</el-radio>
                    <el-radio :label="48">48H</el-radio>
                </el-radio-group>
            </div>
          </el-col>
          <el-col :span="24" style="text-align:right;margin-bottom:20px;">
            <span class="save" @click="saveCargo">保存</span>
          </el-col>
        </el-row>
      </div>
      <div
        class="section  section-b"
        v-scrollWatch="{name:'b',offset:0,callback:spyDomChange}"
      >
        <el-row
          :gutter="24"
          style="margin: 0"
        >
           <el-col :span="24">
               <el-collapse v-model="activeNames" @change="handleChange">
                   <el-collapse-item title="Step1 基本信息" name="0">
                       <table>
                           <tr>
                               <td class='table_td'>客户账号</td>
                                <td >{{accoutNum}}</td>
                               <td class='table_td'></td>
                               <td style="color:#fff;">江苏省/南通市/遂川区</td>

                           </tr>
                           <tr>
                               <td class='table_td'>寄件人

                               </td>
                                <td>{{ManMsg.Manager}}
                                    <span style="border-left: 1px solid #ddd ;border-right:1px solid #ddd;padding: 13px">
                                       &nbsp;&nbsp; 结算方式
                                    </span>
                                    <span>
                                        &nbsp;&nbsp;{{ManMsg.CountType}}
                                    </span>
                                </td>
                                <td class='table_td'>收件人</td>
                                <td>{{GetName}}</td>
                           </tr>
                           <tr>
                               <td class='table_td'>公司名称</td>
                                <td>{{ManMsg.Company}}</td>
                               <td class='table_td'>公司名称</td>
                                <td>{{GetCompany}}</td>
                           </tr>
                           <tr>
                               <td class='table_td'>联系电话</td>
                                <td>{{ManMsg.Telephone}}</td>
                               <td class='table_td'>联系电话</td>
                                <td>{{GetTelephone}}</td>
                           </tr>
                           <tr>
                               <td class='table_td'>部门/科室</td>
                               <td>1500101678</td>
                               <td class='table_td'>部门/科室</td>
                               <td>137847550-0-90</td>
                           </tr>
                           <tr>
                               <td class='table_td'>保险费率</td>
                               <td>{{ManMsg.SafeRate}}</td>
                               <td class='table_td'>城市/区域</td>
                               <td>{{GetCity}}</td>
                           </tr>
                           <tr>
                               <td class='table_td'>城市/区域</td>
                               <td>{{ManMsg.cityArea}} </td>
                               <td class='table_td'>收件详细地址</td>
                               <td>{{GetAddress}}</td>

                           </tr>
                           <tr>
                               <td class='table_td'>取件详细地址</td>
                               <td>{{ManMsg.Address}}</td>
                               <td class='table_td'></td>
                               <td style="color:#fff;">江苏省/南通市/遂川区</td>


                           </tr>




                       </table>
                   </el-collapse-item>
                   <el-collapse-item title="Step2 货物信息" name="1">
                       <table>
                           <tr>
                               <th>序号</th>
                               <th>温度区间</th>
                               <th>器具</th>
                               <th>数量</th>
                               <th>操作</th>
                           </tr>
                           <tr v-for="(item,index) in cargList" :key="index">
                               <td>{{index+1}}</td>
                               <td>{{item.WDQJ}}</td>
                               <td>{{item.PackageType}}</td>
                               <td>
<!--                                   <span class="circle">-</span>-->
                                   <span>{{item.num}}</span>
<!--                                   <span class="circle">+</span>-->
                               </td>
                               <td @click="deleteInfor(index)"><span>删除</span></td>
                           </tr>
                       </table>
                       <div class='isPhoto' style="display: flex;justify-content: start;margin-top:10px;">
                           <div>要求取件时间：{{value1}}</div>
                           <div style="margin:0 20px">时限要求：{{LimitTime}}H</div>
                           <!-- <div v-for='(item,index) in getbox.get_box_img' :key="index">
                               <img :src="item" alt="" @click='isHover($event)'>
                           </div>
                          <div v-if='Number(getbox.get_box_img.length) == 0' >暂无照片</div> -->
                       </div>
                   </el-collapse-item>
                   <el-collapse-item title="Step3 其他" name="2">
                       <table>
                           <tr>
                               <td class='table_td'>取件网络</td>
                                <td>dhjodo</td>
                               <td></td>
                               <td></td>


                           </tr>
                           <tr>
                               <td class='table_td'>是否投保</td>
                                <td>
                                    <div>
                                        <input type="radio" name="isTrue" />投保
                                        <input type="text"  placeholder="请输入金额">
                                        <input type="radio" name="isTrue" />不投保
                                        <input type="text" placeholder="请输入金额">
                                    </div>
                                </td>
                               <td class='table_td'>温度计使用</td>
                               <td>
                                   <div>
                                       <input type="radio" name="isTrue" />使用

                                       <input type="radio" name="isTrue" />不使用

                                   </div>
                               </td>

                           </tr>
                           <tr>

                               <td class='table_td'>冷车派送</td>
                               <td>
                                   <div>
                                       <input type="radio" name="isTrue" />是
                                       <input type="text"  placeholder="请输入金额">
                                       <input type="radio" name="isTrue" />否

                                   </div>
                               </td>
                               <td class='table_td'>付款方式</td>
                               <td>
                                   <div>
                                       <input type="radio" name="isTrue" />收件人
                                       <input type="text"  placeholder="请输入金额">
                                       <input type="radio" name="isTrue" />发件人
                                       <input type="text" placeholder="请输入金额">
                                   </div>
                               </td>
                           </tr>
                       </table>
                       <div class='isPhoto'>
<!--                           <div>照片：</div>-->
                           <!-- <div v-for='(item,index) in getbox.get_box_img' :key="index">
                               <img :src="item" alt="" @click='isHover($event)'>
                           </div>
                          <div v-if='Number(getbox.get_box_img.length) == 0' >暂无照片</div> -->
                       </div>
                   </el-collapse-item>
                   <el-collapse-item title="Step4 特殊需求" name="3">
                       <div>
                           <textarea name="" id="" cols="100" rows="10" v-model="Note"></textarea>
                       </div>
                   </el-collapse-item>
               </el-collapse>

          </el-col>
            <el-col style="margin: 30px 0;display: flex;justify-content: center">
                <el-button type="primary" @click="submitFrom()">提交</el-button>
                <el-button type="success">取消</el-button>
            </el-col>

        </el-row>

      </div>

    </div>
  </div>
</template>
<script>
import scrollWatch from "../../lib/vue-scrollwatch";

export default {
  name: "test",
  data() {
    return {
      accoutNum: "", // 客户账号
      isDisabled1:false,
      isDisabled: false,
      ManMsg: {},
      activeNames: ["0"],
      value1: "",
      activeMenu: 1,
      active: 1,
      isFirst: true,
      boxNum: "",
      iceCarNum: "",
      selectTem: "",
      istemActive: Number,
      firstTitle: "进行中",
      towTitle: "进行中",
      cargoMsg: [],
      temArea: [],
      GetCompany: '',
      GetName: '',
      GetCity: '',
      GetTelephone: '',
      GetAddress:'',
      Note:'',
      LimitTime:'',
      boxType: [],
      listData:{},
      iceCar: [
        { PackageType: "4.2m冷藏车", num: "" },
        { PackageType: "7.6m冷藏车", num: "" },
        { PackageType: "9.6m冷藏车", num: "" }
      ],
      tiemLimit: [
        { limit: "24H" },
        { limit: "72H" },
        { limit: "36H" },
        { limit: "48H" }
      ],
      cargList: [ //货物信息

      ],
      newCargList:[], // 过度数组  用于点击保存时赋值给遍历的数组
      newcargList: {}, // 存储温度区间 数量
      item1: '',

    };
  },
  created() {
    this.listData = this.$route.query.listData
      console.log(this.$route.query)
    // 第二次 进来  没走    问题

    scrollWatch.setContainer("#scrollDom");
    // 客户账号
    this.accoutNum =
      this.$route.query.AccountNumber == undefined
        ? ""
        : this.$route.query.AccountNumber;
    this.getManMsg();
    this.getTem();
  },
  methods: {
      //提交所有

      submitFrom(){
          console.log(this.cargList,8)
          this.cargList.forEach(item => {
               console.log(item.WDQJ,7)
              var arr = [];


             //var arr= [];
             //item[WDQJ]=
          })

          let that = this;
          this.$axios({
              url: "http://out.ccsc58.cc/OMS/v1/public/index/orderdown/index",
              method: "post",
              data: {
                  AccountNumber:this.accoutNum,
                  Box: JSON.stringify(this.cargList ),
                  IsWdj:'使用',
                  CargoName:'',
                  GoodsType:'试剂',
                  Manager:'1',
                  GetName:'1',
                  Address:'1',
                  GetAddress:'1',
                  City:'1',
                  GetCity:'1',
                  Depart:'1',
                  GetDepart:'1',
                  Company:'1',
                  GetCompany:'1',
                  Telephone:'1',
                  GetTelephone:'1',
                  OrderTime:'1',
                  LimitTime:'1',
                  EntryName:'1',
                  CountType:'1',
                  SafeRate:'1',
                  Note:'1',
                  SafeItem:'1',
                  SafePay:'',
              },
              transformRequest: [
                  function(data) {
                      let ret = "";
                      for (let it in data) {
                          ret +=
                              encodeURIComponent(it) +
                              "=" +
                              encodeURIComponent(data[it]) +
                              "&";
                      }
                      return ret;
                  }
              ],
              headers: { "Content-Type": "application/x-www-form-urlencoded" }
          }).then(function(res) {
              console.log(res,33)
              // if (res.data.code == "200") {
              //     that.ManMsg = res.data.data;
              //     that.ManMsg.cityArea = that.ManMsg.City + "/" + that.ManMsg.Area;
              // } else {
              //     that.ManMsg = {};
              // }
          });
      },
    deleteInfor(index) { // 删除货物信息
         console.log(index)
        console.log(this.cargList)

            this.cargList.splice(index,1)
            alert('你删除了第'+index+'个');



    },
    saveCargo() {
        this.cargList = this.newCargList
        // this.newCargList = [] // 如果点击保存重新选择
    },
    getManMsg() {
      let that = this;
      this.$axios({
        url: "http://out.ccsc58.cc/OMS/v1/public/index/orderdown/tomsg",
        method: "post",
        data: { AccountNumber: that.accoutNum },
        transformRequest: [
          function(data) {
            let ret = "";
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                "=" +
                encodeURIComponent(data[it]) +
                "&";
            }
            return ret;
          }
        ],
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }).then(function(res) {
        if (res.data.code == "200") {
          that.ManMsg = res.data.data;
          that.ManMsg.cityArea = that.ManMsg.City + "/" + that.ManMsg.Area;
        } else {
          that.ManMsg = {};
        }
      });
    },
    getTem() {
      let that = this;
      this.$axios({
        url: "http://out.ccsc58.cc/OMS/v1/public/index/orderdown/wdqj",
        method: "post",
        data: { WDQJ: "" },
        transformRequest: [
          function(data) {
            let ret = "";
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                "=" +
                encodeURIComponent(data[it]) +
                "&";
            }
            return ret;
          }
        ],
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }).then(function(res) {
        if (res.data.code == "200") {
          that.temArea = res.data.data;
        } else {
          that.temArea = {};
        }
      });
    },
    handleChange(val) {
      // console.log(val);
    },
    next(val, index) {
      //istemActive是什么？  这是 那个 判断 他  是不是咱们点击的那个的  下标
      this.newcargList.WDQJ = val.WDQJ
      this.newcargList.ROW_NUMBER = val.ROW_NUMBER
      let that = this;
      this.$axios({
        url: "http://out.ccsc58.cc/OMS/v1/public/index/orderdown/wdqj",
        method: "post",
        data: { WDQJ: val.WDQJ },
        transformRequest: [
          function(data) {
            let ret = "";
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                "=" +
                encodeURIComponent(data[it]) +
                "&";
            }
            return ret;
          }
        ],
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }).then(function(res) {
        if (res.data.code == "200") {
          that.boxType = res.data.data;
        } else {
          that.boxType = {};
        }
      });


      this.istemActive = index;

      this.active = 2;
      this.firstTitle = "已完成";
      this.selectTem = val.tem; // 当前选择的温区
      let obj = { tem: this.selectTem, box: [], iceCar: [] };
      // if (this.cargoMsg.length == 0) {
      this.cargoMsg.push(obj);
      // } else {
      //   let init = true;
      //   this.cargoMsg.forEach(item => {
      //     if (this.selectTem == item.tem) {
      //       init = false;
      //     }
      //   });
      //   if (init) {
      //     this.cargoMsg.push(obj);
      //   }
      // }
      //console.log(this.cargoMsg); // 选择的温区
    },
    prev() {
      //   [{tem:"",box:[{type:"",num:""}]},{},{}]
      //console.log(this.cargoMsg);
      //   if (this.cargoMsg.length == 3) {
      //     this.$message.error("最多只允许添加3个温区");
      //   } else {
      this.active = 1;
      this.firstTitle = "进行中";
      this.istemActive = -2;
      //   }
    },
    isNull(val, index, tem) {
      // 这个数组   就是  最后  你要给海宁的数组   也就是  所有的货物信息
      // 用来判断  当该项为空  数组中也清空  也就是 这个箱子填错了 不选择他  或者冷藏车  选错了的时候   清空数组
      // val  是 当前修改的这条数据   index   是当前修改的数据  在数组中的下标
      // this.cargoMsg   循环这个   把 箱型数量和  冷藏车数量  放进去
      let threeData = this.cargoMsg;
      for (let i = 0; i < threeData.length; i++) {
        if (this.selectTem == threeData[i].tem) {
          threeData[i].box.push(val);
        }
      }
      this.newCargList.push(val)



      console.log(threeData,'箱型和car');
    },
      //判断 箱型冷藏车只能选一个
    isClick(val,isType){
      let _this = this;
      let boxArr = []; // boxArr.length 箱型数量
      let carArr = [];
      val.ROW_NUMBER = this.newcargList.ROW_NUMBER
      val.WDQJ = this.newcargList.WDQJ
      this.boxType.forEach(item => {
          if(item.num) {
              boxArr.push(item.num)
          }
      })
        _this.iceCar.forEach(item => {
            if(item.num) {
                carArr.push(item.num)
            }
        })
        if(isType == 'box'){
            // 箱型数量 输入中
            // console.log(this.boxType,'老孟');
            // 循环判断 数量有值  isDisabled1 = true   没值  isDisabled1 = false
            if(boxArr.length > 0) {
                _this.isDisabled1 = true
            } else {
                _this.isDisabled1 = false
            }
        }else if(isType == 'car'){
            // 冷藏车数量 输入中

            if(carArr.length > 0) {
                _this.isDisabled = true
            } else {
                _this.isDisabled = false
            }
        }
    },
    spyDomChange(node) {
      if (this.activeMenu != node.name) this.activeMenu = node.name;
    },
    scrollTo(name) {
      scrollWatch.scrollTo(name);
    }
  }
};
</script>
<style scoped>
td,
th {
  border: solid #ccc;
  border-width: 0px 1px 1px 0px;
  padding: 10px 0px;
  text-align: center;
}

table {
  border: solid #ccc;
  border-width: 1px 0px 0px 1px;
  border-collapse: collapse;
  width: 100%;
}
.table_td {
  background-color: #eff4f6;
}
.circle {
  width: 15px;
  height: 15px;
  border: 1px solid #000;
  border-radius: 50%;
  display: inline-block;
  line-height: 15px;
  text-align: center;
}
.bioage {
  margin: 20px 0;
}
.bioage span {
  margin-right: 20px;
}
.bigdiv {
  height: 100%;
  display: flex;
}
.nav-center {
  list-style-type: none;
  width: 150px;
  text-align: center;
}
.nav-center li {
  padding: 20px 0px;
  border-bottom: 1px solid #999;
}
h1 {
  margin: 0;
}
.main {
  /* margin-top:50px; */
  /* padding-left:200px; */
  background: #fff;
  height: 100%;
  overflow: auto;
  flex: 1;
}
.section {
  height: auto;
  /* overflow: hidden; */
  overflow-y: hidden;
}
.section.section-a {
  background: #eee;
  margin: 0 20px;
}
.section.section-b {
  background: #eee;
  margin: 20px;
}
.section.section-c {
  background: #eee;
  margin: 20px;
}

.active {
  color: #42b983;
}
.temFirst {
  display: flex;
  flex-flow: wrap;
}

.temActive {
  border: 1px solid rgb(69, 162, 223);
  color: rgb(69, 162, 223);
  cursor: pointer;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
}
.temDefault {
  border: 1px solid #000;
  color: #000;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
}
</style>
<style>
.el-form-item__label {
  width: 100px !important;
}
.limit {
  display: flex;
  justify-content: flex-start;
  flex-flow: wrap;
}
.limit span {
  padding: 5px 20px;
  margin: 5px 10px;
  border: 1px solid #ccc;
  color: #ccc;
  text-align: center;
  border-radius: 5px;
}
.save {
  padding: 5px 20px;
  border: 1px solid #ccc;
  color: #000;
  border-radius: 5px;
}
</style>
