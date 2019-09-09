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
            <h2 style="border-left: 4px solid #45A2DF;font-family: cursive;margin:10px 0">&nbsp寄件人信息</h2>
            <div class="bioage">
              <el-form
                ref="form"
                label-width="100px"
              >
                <el-col
                  :span="12"
                  style="padding:0"
                >
                  <el-form-item label="客户账号">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>

                <el-col
                  :span="12"
                  style="padding:0"
                >
                  <el-form-item>
                    <el-input></el-input>
                  </el-form-item>
                </el-col>

                <el-form-item label="公司名称">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="寄件人">
                  <el-input></el-input>
                </el-form-item>
                <el-col
                  :span="12"
                  style="padding:0"
                >
                  <el-form-item label="部门/科室">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>

                <el-col
                  :span="12"
                  style="padding:0"
                >
                  <el-form-item label="保险费率">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-form-item label="联系电话">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="城市区域">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="详细地址">
                  <el-input></el-input>
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

                <el-form-item label="城市区域">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="公司名称">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="收件人">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="部门/科室">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="详细地址">
                  <el-input></el-input>
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
                    >{{item1.tem}}</span>
                  </div>
                  <!-- <button @click="next"> 下一步 </button> -->
                </div>

                <div v-if="active===2">
                  <div>{{towTitle}}</div>
                  <div>
                    <el-tabs>
                      <el-tab-pane label="箱型">
                        <div class="temFirst">
                          <div
						  	v-for="(item,index) in boxType"
                          	:key="index" >
                            <span>{{item.box}}</span>

							<input type="text" value="" v-model='item.num' style='width:20%;' @blur="isNull(item,index)">

							<span>个</span>
                          </div>

                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="冷藏专用车">
                        <div class="temFirst">
							<div v-for="(item,index) in iceCar" :key="index">
								<span>{{item.car}}</span>
								<input type="text" v-model="item.num" style='width:20%;' @blur="isNull(item,index,item1)">
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
                placeholder="选择日期时间">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="24">
            <h2 style="border-left: 4px solid #45A2DF;font-family: cursive;margin:10px 0">&nbsp;时限要求</h2>
            <div class="limit">
              <span v-for="(item,index) in tiemLimit" :key="index">{{item.limit}}</span>
            </div>
          </el-col>
          <el-col :span="24" style="text-align:right;margin-bottom:20px;">
            <span class="save">保存</span>
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
          <!-- <el-col :span="24">
            <h3>Step1 基本信息</h3>

          </el-col> -->
          <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="Step1 基本信息" name="0">
      <table>
          <tr>
            <td class='table_td'>客户账号</td>
            <!-- <td>{{TMSorder.tms_order_code}}</td> -->
            <!-- <td class='table_td'>TMS运单号</td>
            <td>{{TMSorder.tms_way_code}}</td>
            <td class='table_td'>设备号</td>
            <td>{{TMSorder.device_code}}</td> -->
          </tr>
          <tr>
            <td class='table_td'>寄件人</td>
            <!-- <td>{{TMSorder.tms_get_goods_man}}</td> -->
            <td class='table_td'>发货人电话</td>
            <!-- <td>{{TMSorder.tms_get_goods_phone}}</td> -->
            <td class='table_td'>发货时间</td>
            <!-- <td>{{TMSorder.tms_get_goods_plan_time}}</td> -->
          </tr>
          <tr>
            <td class='table_td'>收货人</td>
            <!-- <td>{{TMSorder.tms_send_goods_man}}</td> -->
            <td class='table_td'>收货人电话</td>
            <!-- <td>{{TMSorder.tms_send_goods_phone}}</td> -->
            <td class='table_td'>时限</td>
            <!-- <td>{{TMSorder.plan_time}}</td> -->
          </tr>
          <tr>
            <td class='table_td'>发货人地址</td>
            <!-- <td>{{TMSorder.tms_get_goods_address}}</td> -->
            <!-- <td>{{TMSorder.tms_get_goods_company}}</td> -->
            <td class='table_td'>收货人地址</td>
            <!-- <td>{{TMSorder.tms_send_goods_address}}</td> -->
            <!-- <td>{{TMSorder.tms_send_goods_company}}</td> -->
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
            <td>{{item.tem}}</td>
            <td>{{item.box}}</td>
            <td>
              <span class="circle">-</span>
              <span>{{item.num}}</span>
              <span class="circle">+</span>
            </td>
            <td><span>删除</span></td>
          </tr>
      </table>
  </el-collapse-item>
  <el-collapse-item title="Step3 其他" name="2">
    <table>
          <tr>
            <td class='table_td'>姓名</td>
            <!-- <td>{{getbox.get_box_man}}</td> -->
            <td class='table_td'>电话</td>
            <!-- <td>{{getbox.get_box_phone}}</td> -->
            <td class='table_td'>地址</td>
            <!-- <td>{{getbox.get_box_address}}</td> -->
          </tr>
          <tr>
            <td class='table_td'>规定时间</td>
            <!-- <td>{{getbox.get_box_plan_time | formatDate}}</td> -->
            <td class='table_td'>到达时间</td>
            <!-- <td>{{getbox.get_box_now_time | formatDate}}</td> -->
          </tr>
      </table>
      <div class='isPhoto'>
          <div>照片：</div>
          <!-- <div v-for='(item,index) in getbox.get_box_img' :key="index">
              <img :src="item" alt="" @click='isHover($event)'>
          </div>
         <div v-if='Number(getbox.get_box_img.length) == 0' >暂无照片</div> -->
      </div>
  </el-collapse-item>
    <el-collapse-item title="Step4 特殊需求" name="3">
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
  </el-collapse-item>
  </el-collapse>
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
      activeNames: ["0"],
       value1: '',
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
      temArea: [
        { tem: "2℃~8℃" },
        { tem: "20℃~80℃" },
        { tem: "-25℃~-15℃" },
        { tem: "-80℃~-40℃" }
      ],
      boxType: [],
      iceCar: [
        { car: "4.2m冷藏车", num: "" },
        { car: "7.6m冷藏车", num: "" },
        { car: "9.6m冷藏车", num: "" }
      ],
      tiemLimit:[{limit:'24H'},{limit:'72H'},{limit:'36H'},{limit:'48H'}],
      cargList:[{tem:'2-8',box:'xs28',num:2},{tem:'15-25',box:'xs46',num:4}]
    };
  },
  created() {
    scrollWatch.setContainer("#scrollDom");
  },
  methods: {
        handleChange(val) {
      console.log(val);
    },
    next(val, index) {
      //istemActive是什么？  这是 那个 判断 他  是不是咱们点击的那个的  下标
      //哦
      this.istemActive = index;
      if (val.tem == "2℃~8℃") {
        this.boxType = [
          { box: "XS26", num: "" },
          { box: "XS27", num: "" },
          { box: "XS28", num: "" },
          { box: "xs29", num: "" }
        ];
      } else if (val.tem == "20℃~80℃") {
        this.boxType = [
          { box: "XS30", num: "" },
          { box: "XS321", num: "" },
          { box: "XS32", num: "" }
        ];
      } else if (val.tem == "-25℃~-15℃") {
        this.boxType = [
          { box: "XS40", num: "" },
          { box: "XS41", num: "" },
          { box: "XS42", num: "" }
        ];
      } else if (val.tem == "-80℃~-40℃") {
        this.boxType = [
          { box: "XS50", num: "" },
          { box: "XS51", num: "" },
          { box: "XS52", num: "" }
        ];
      }
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
      console.log(this.cargoMsg); // 选择的温区
    },
    prev() {
      //   [{tem:"",box:[{type:"",num:""}]},{},{}]
      console.log(this.cargoMsg);
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

      // console.log(threeData);
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
  flex-flow:wrap;
}
.limit span{
  padding: 5px 20px;
  margin: 5px 10px;
  border:1px solid #ccc;
  color:#ccc;
  text-align: center;
  border-radius: 5px;
}
.save{
  padding: 5px 20px;
  border:1px solid #ccc;
  color: #000;
  border-radius:5px;
}
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
  .circle{
    width:15px;
    height:15px;
    border:1px solid #000;
    border-radius:50%;
    display:inline-block;
    line-height:15px;
    text-align:center;
  }
</style>
