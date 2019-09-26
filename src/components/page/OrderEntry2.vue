<template>
    <div class="bigdiv">
        <div class="main">
            <div>
                <!-- 寄件人  收件人信息 -->
                <el-row :gutter="24" style="margin: 0">
                    <!--寄件人信息-->

                    <el-col :span="12">
                        <h2 style="border-left: 4px solid #45A2DF;font-family: cursive;margin:10px 0">&nbsp;寄件人信息</h2>
                        <div class="bioage">
                            <el-form
                                ref="form"
                                label-width="100px!important"
                                :inline="true"
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
                                    <el-col :span="12">
                                        <el-form-item label="结算方式">
                                            <el-input v-model="ManMsg.CountType"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>


                                <el-form-item label="公司名称">
                                    <el-input v-model="ManMsg.Company"></el-input>
                                </el-form-item>


                                <el-row>
                                    <el-col
                                        :span="12"
                                        style="padding:0"
                                    >
                                        <el-form-item label="寄件人">
                                            <el-input v-model="ManMsg.Manager"></el-input>
                                        </el-form-item>

                                    </el-col>

                                    <el-col
                                        :span="12"
                                        style="padding:0"
                                    >
                                        <el-form-item label="部门/科室">
                                            <el-input v-model="Department"  placeholder="选填"></el-input>
                                        </el-form-item>

                                    </el-col>
                                </el-row>


                                <el-row>
                                    <el-col
                                        :span="12"
                                        style="padding:0"
                                    >
                                        <el-form-item label="项目编号">
                                            <el-input v-model="ManMsg.Cid2" placeholder="选填"></el-input>
                                        </el-form-item>

                                    </el-col>

                                    <el-col
                                        :span="12"
                                        style="padding:0"
                                    >
                                        <el-form-item label="中心号">
                                            <el-input v-model="ManMsg.zxNumber" placeholder="选填"></el-input>
                                        </el-form-item>

                                        <!--                                        <el-form-item label="保险费率">-->
                                        <!--                                            <el-input v-model="ManMsg.SafeRate"></el-input>-->
                                        <!--                                        </el-form-item>-->
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col
                                        :span="12"
                                        style="padding:0"
                                    >
                                        <el-form-item label="联系电话">
                                            <el-input v-model="ManMsg.Telephone"></el-input>
                                        </el-form-item>

                                    </el-col>

                                    <el-col
                                        :span="12"
                                        style="padding:0"
                                    >
                                        <el-form-item label="协议号">
                                            <el-input v-model="ManMsg.XyNumber" placeholder="选填"></el-input>
                                        </el-form-item>


                                    </el-col>
                                </el-row>

                                <el-row>
                                    <el-col
                                        :span="12"
                                        style="padding:0"
                                    >
                                        <el-form-item label="省/市/区">
                                            <el-cascader
                                                style="width:200px"
                                                v-model="val"
                                                :options="areaOptions"
                                                @change="handleItemChange"
                                                :separator="' '"
                                            ></el-cascader>
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


                                <el-form-item label="详细地址">
                                    <el-input v-model="ManMsg.Address"></el-input>
                                </el-form-item>
                                <el-form-item label="取件网络">
                                    <el-input></el-input>
                                </el-form-item>

                            </el-form>
                        </div>
                    </el-col>
                    <!--收件人信息-->
                    <el-col :span="11">
                        <h2 style="border-right: 4px solid #45A2DF;display: flex;justify-content: flex-end;font-family: cursive;margin:10px 0">
                            收件人信息&nbsp&nbsp</h2>
                        <div class="bioage">
                            <el-form ref="form" label-width="100px!important">
                                <el-form-item label="收货编码">
                                    <el-select v-model="SName" placeholder="请选择" @change="currentSel">

                                        <el-option
                                            v-for="(item,index) in SNameArr"
                                            :key="index"
                                            :label="item.SName"
                                            :value="item.SName"
                                        >
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="公司名称">
                                    <el-input v-model="GetCompany"></el-input>
                                </el-form-item>
                                <el-form-item label="收件人">
                                    <el-input v-model="GetName"></el-input>
                                </el-form-item>
                                <el-form-item label="部门/科室">
                                    <el-input v-model="GetDepartment" placeholder="选填"  ></el-input>
                                </el-form-item>
                                <el-form-item label="联系电话">
                                    <el-input v-model="GetTelephone"></el-input>
                                </el-form-item>
                                <el-form-item label="省/市/区">
                                    <el-cascader
                                        v-model="val2"
                                        :options="areaOptions2"
                                        @change="handleItemChange2"
                                        :separator="' '"
                                    ></el-cascader>
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
                                style="height:100px;width:50px;"
                            >
                                <el-step></el-step>
                                <el-step v-if="active===2"></el-step>
                            </el-steps>
                            <div style="display:flex;flex-direction: column;">
                                <div
                                    v-if="isFirst"
                                    style="flex:1;"
                                >
                                    <div style="font-weight: 600;">{{firstTitle}}</div>
                                    <div style="font-family: cursive;padding: 5px 0;">温区选择（任意温区）</div>
                                    <div class="temFirst">
                    <span
                        v-for="(item1,index) in temArea"
                        :key="index"

                        @click="next(item1,index)"
                        :class="{temActive: istemActive == index,temDefault: istemActive != index}">{{item1.WDQJ}}</span>
                                    </div>
                                    <!-- <button @click="next"> 下一步 </button> -->
                                </div>

                                <div v-if="active===2">
                                    <div>{{towTitle}}</div>
                                    <div>
                                        <el-tabs>
                                            <el-tab-pane label="箱型" :disabled="isDisabled">
                                                <div class="temFirst">
                                                    <div
                                                        v-for="(item,index) in boxType"
                                                        :key="index">
                                                        <span>{{item.PackageType}}</span>

                                                        <input type="number" value="" v-model='item.num'
                                                               style='width:20%;' @blur="isNull(item,index)"
                                                               @input="isClick(item,'box')">

                                                        <span>个</span>
                                                    </div>

                                                </div>
                                            </el-tab-pane>
                                            <el-tab-pane label="冷藏专用车" :disabled="isDisabled1">
                                                <div class="temFirst">
                                                    <div v-for="(item,index) in iceCar" :key="index">
                                                        <span>{{item.PackageType}}</span>
                                                        <input type="number" v-model="item.num" style='width:20%;'
                                                               @blur="isNull(item,index,item1)"
                                                               @input="isClick(item,'car')">
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
                        <span class="save" @click="quxiao">取消</span>
                        <span class="save" @click="prev">保存</span>
                    </el-col>


                    <div v-show="isShow">
                        <el-col :span="24">
                            <el-row>
                                <el-col>
                                    <h2 style="border-left: 4px solid #45A2DF;font-family: cursive;margin:10px 0">&nbsp;货物类型及名称</h2>
                                    <el-form :inline="true" label-width="100px!important;">
                                        <el-row>
                                            <el-col>
                                                <div style="margin-left:50px">
                                                    <el-dropdown trigger="click" :hide-on-click="false"
                                                                 @command="changeCompany" style="margin-right: 10px;"
                                                                 ref="messageDrop">
                                                    <span class="el-dropdown-link" style="width:150px;">{{showSearch}}<i
                                                        class="el-icon-arrow-down el-icon--right"></i></span>
                                                        <el-dropdown-menu slot="dropdown">
                                                            <el-dropdown-item command="药品">药品</el-dropdown-item>
                                                            <el-dropdown-item command="试剂">试剂</el-dropdown-item>
                                                            <el-dropdown-item command="样品">样品</el-dropdown-item>
                                                            <el-dropdown-item command="器械">器械</el-dropdown-item>
                                                            <el-dropdown-item command="普货">普货</el-dropdown-item>
                                                        </el-dropdown-menu>
                                                    </el-dropdown>
                                                    <el-input type="text" v-model="searchData"
                                                              style="width: 100px"></el-input>
                                                </div>

                                            </el-col>
                                        </el-row>


                                    </el-form>

                                </el-col>

                            </el-row>

                        </el-col>
                        <el-col :span="24">

                            <h2 style="border-left: 4px solid #45A2DF;font-family: cursive;margin:20px 0;display: inline-block">
                                &nbsp;要求取件时间</h2>
                            <div style="display: inline-block">
                                <el-date-picker
                                    v-model="qujianTime"
                                    type="datetime"

                                    value-format="yyyy-MM-dd HH:mm:ss"
                                    placeholder="选择日期时间">
                                </el-date-picker>
                            </div>
                        </el-col>
                        <el-col :span="24">
                            <h2 style="border-left: 4px solid #45A2DF;font-family: cursive;margin:20px 0">&nbsp;时限要求</h2>
                            <div style="margin-left: 50px">
                                <el-radio-group v-model="LimitTime">
                                    <el-radio :label="24">24H</el-radio>
                                    <el-radio :label="36">36H</el-radio>
                                    <el-radio :label="48">48H</el-radio>
                                    <el-radio :label="72">72H</el-radio>
                                    <el-radio :label="96">96H</el-radio>
                                    <el-radio :label="120">120H</el-radio>


                                </el-radio-group>
                                <div style="display: inline-block;margin-left: 20px;">
                                    <span>其他</span>
                                    <input style="width: 80px;border-left: none;border-top: none;border-right: none" v-model="otherLimitTime"></input>
                                </div>

                            </div>
                        </el-col>
                        <el-col :span="24">
                            <h2 style="border-left: 4px solid #45A2DF;font-family: cursive;margin:20px 0">&nbsp;其他信息</h2>
                            <el-row :gutter="24">
                                <el-col :span="12">
                                    <div style="margin-left: 50px">
                                        <span>是否投保 &nbsp;&nbsp;</span>
                                        <el-checkbox label="1">是 &nbsp;&nbsp;<input value="" style="width: 80px;border-left: none;border-top: none;border-right: none"></input>
                                        </el-checkbox>
                                        <el-checkbox label="12">否 &nbsp;&nbsp;<input value="2000" :disabled="true" style="width: 80px;border-left: none;border-top: none;border-right: none;text-align: center"></input>
                                        </el-checkbox>

                                    </div>
                                    <div style="margin-left: 50px;padding: 15px 0">
                                        <span>冷藏派送 &nbsp;&nbsp;</span>
                                        <el-checkbox label="1" v-model="isTou">是 &nbsp;&nbsp;<input value="500" style="width: 80px;border-left: none;border-top: none;border-right: none"  v-model="isMoney"></input>
                                        </el-checkbox>
                                        <el-checkbox label="12" v-model="NisTou">否 &nbsp;&nbsp;</el-checkbox>

                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div style="margin-left: 50px">
                                    <span>
                                        温度计使用&nbsp;&nbsp;</span>
                                        <el-checkbox label="1" v-model="isSy">使用 &nbsp;&nbsp;</el-checkbox>
                                        <el-checkbox label="12" v-model="NisSy">不使用 &nbsp;&nbsp;</el-checkbox>

                                    </div>
                                    <div style="margin-left: 50px;padding: 15px 0">
                                        <span>付款方式 &nbsp;&nbsp;</span>
                                        <el-checkbox label="1" v-model="fj">发件人 &nbsp;&nbsp;<input value=""style="width: 80px;border-left: none;border-top: none;border-right: none" v-model="fjValue"></input>
                                        </el-checkbox>
                                        <el-checkbox label="12" v-model="sj">收件人 &nbsp;&nbsp;<input value=""style="width: 80px;border-left: none;border-top: none;border-right: none" v-model="sjValue"></input>
                                        </el-checkbox>

                                    </div>
                                </el-col>
                                <el-col>
                                    <div style="margin-left: 15px">
                                        <el-form :inline="true">
                                            <el-form-item label="特殊需求">
                                                <el-input type="textarea" style="width:100%;" v-model="teshuNeed"></el-input>
                                            </el-form-item>
                                        </el-form>

                                    </div>
                                </el-col>

                            </el-row>


                        </el-col>
                        <el-col :span="24" style="text-align:right;margin-bottom:20px;">
                            <span class="save" @click="saveCargo">下一步</span>
                        </el-col>
                    </div>


                </el-row>

            </div>
        </div>

    </div>
</template>
<script>
    import areaOptions from "../../lib/area.js";
    import areaOptions2 from "../../lib/area.js";
    //import scrollWatch from "../../lib/vue-scrollwatch";
    export default {
        name: "test",
        data() {
            return {
                NisSy:'',
                isSy:'',
                fj:'',
                sj:'',
                fjValue:'',
                sjValue:'',
                isMoney:'',
                NisTou:'',
                isTou:'',
                teshuNeed:'',
                otherLimitTime:'',
                XyNumber:'',
                zxNumber:'',
                GetDepartment:'',
                Department:'',
                isShow:false,
                GetTelephone:'',
                showSearch: "药品",
                searchData: "",
                areaOptions: areaOptions,
                areaOptions2:areaOptions2,
                val2:[],
                val: [], // 选中的省市区
                accoutNum: "", // 客户账号
                isDisabled1: false,
                isDisabled: false,
                ManMsg: {},
                activeNames: ["0"],
                qujianTime: "",
                activeMenu: 1,
                active: 1,
                isFirst: true,
                Address: '',
                boxNum: "",
                iceCarNum: "",
                selectTem: "",
                istemActive: Number,
                firstTitle: "进行中",
                towTitle: "进行中",
                cargoMsg: [],
                temArea: [],
                GetCompany: '',
                Company: '',
                Telephone: '',
                GetName: '',
                GetCity: '',
                GetAddress: '',
                Note: '',
                LimitTime: '',
                boxType: [],
                listData: {},
                iceCar: [
                    {PackageType: "4.2m冷藏车", num: ""},
                    {PackageType: "7.6m冷藏车", num: ""},
                    {PackageType: "9.6m冷藏车", num: ""}
                ],
                tiemLimit: [
                    {limit: "24H"},
                    {limit: "72H"},
                    {limit: "36H"},
                    {limit: "48H"}
                ],
                cargList: [ //货物信息

                ],

                item1: '',
                cargListObj: {},
                SNameArr: [],
                SName: ''
            };
        },
        created() {
            this.getManMsg();
            this.getTem();

        },
        methods: {
            handleItemChange(val) {
                // 省市区
                this.val = val;
            },
            handleItemChange2(val) {
                // 省市区
                this.val2 = val;
            },

          /*  选择货物名称那个方法*/
            changeCompany(data) {
                (data);
                this.$refs.messageDrop.hide()
                this.showSearch = data;   // 选择的 那个
            },
            // 保存的时候
            saveCargo() {
                let orderData ={
                    accoutNum:this.accoutNum,
                    CountType :this.ManMsg.CountType,
                    Company:this.ManMsg.Company,
                    Manager:this.ManMsg.Manager,
                    Cid2:this.ManMsg.Cid2,
                    XyNumber:this.ManMsg.XyNumber,
                    zxNumber:this.ManMsg.zxNumber,
                    Telephone:this.ManMsg.Telephone,
                    SafeRate:this.ManMsg.SafeRate,
                    Address: this.ManMsg.Address,
                    SName:this.SName,
                    GetCompany:this.GetCompany,
                    GetName:this.GetName,
                    GetTelephone:this.GetTelephone,
                    GetAddress:this.GetAddress,
                    Department:this.Department,
                    GetDepartment:this.GetDepartment,
                    showSearch:this.showSearch,//货物类型
                    searchData:this.searchData,
                    qujianTime:this.qujianTime,
                    LimitTime:this.LimitTime,
                    otherLimitTime:this.otherLimitTime,
                    isMoney:this.isMoney,
                    isTou:this.isTou,
                    NisTou:this.NisTou,
                    NisSy:this.NisSy,
                    isSy:this.isSy,
                    fj:this. fj,
                    sj:this.sj,
                    fjValue: this.fjValue,
                    sjValue: this.sjValue,
                    teshuNeed:this.teshuNeed
                };
                this.$router.push({
                    path: "/OrderPreview",
                    query: {
                        orderData:orderData,
                    }
                })

            },

            //传账号请求货物编码
            getjiDetails() {
                let that = this;
                that.$axios({
                    url: "http://out.ccsc58.cc/OMS/v1/public/index/orderdown/frommsg",
                    method: "post",
                    data: {
                        AccountNumber: that.accoutNum,
                        SName: this.SName
                    },
                    transformRequest: [
                        function (data) {
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
                    headers: {"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (res) {

                    if (res.data.code == "200") {

                        that.SNameArr = res.data.data;
                    } else {

                    }
                });
            },
            // 货物编号发生变化的时候的方法
            currentSel(){
                (this.SName)
                let that = this;
                that.$axios({
                    url: "http://out.ccsc58.cc/OMS/v1/public/index/orderdown/frommsg",
                    method: "post",
                    data: {
                        AccountNumber: that.accoutNum,
                        SName: this.SName
                    },
                    transformRequest: [
                        function (data) {
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
                    headers: {"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (res) {

                    if (res.data.code == "200") {

                        that.GetAddress = res.data.data.Address;
                        that.GetTelephone = res.data.data.Telephone;
                        that.GetCompany =res.data.data.Company;
                        that.GetName = res.data.data.Name

                    } else {
                        // that.ManMsg = {};
                    }
                });
            },
            //请求寄件人信息
            getManMsg() {
                this.getjiDetails();
                let that = this;
                this.$axios({
                    url: "http://out.ccsc58.cc/OMS/v1/public/index/orderdown/tomsg",
                    method: "post",
                    data: {AccountNumber: that.accoutNum},
                    transformRequest: [
                        function (data) {
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
                    headers: {"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (res) {

                    if (res.data.code == "200") {
                        that.ManMsg = res.data.data;

                        that.hhh = that.ManMsg.Depart + "/" + that.ManMsg.City + "/" + that.ManMsg.Area;

                    } else {
                        that.ManMsg = {};
                    }
                });

            },
            //请求温度区间
            getTem() {
                let that = this;
                this.$axios({
                    url: "http://out.ccsc58.cc/OMS/v1/public/index/orderdown/wdqj",
                    method: "post",
                    data: {WDQJ: ""},
                    transformRequest: [
                        function (data) {
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
                    headers: {"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (res) {
                    if (res.data.code == "200") {
                        that.temArea = res.data.data;
                    } else {
                        that.temArea = {};
                    }
                });
            },
            handleChange(val) {
                // (val);
            },
            //请求箱型
            next(val, index) {
                //istemActive是什么？  这是 那个 判断 他  是不是咱们点击的那个的  下标
                let that = this;
                this.$axios({
                    url: "http://out.ccsc58.cc/OMS/v1/public/index/orderdown/wdqj",
                    method: "post",
                    data: {WDQJ: val.WDQJ},
                    transformRequest: [
                        function (data) {
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
                    headers: {"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (res) {
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
                let obj = {tem: this.selectTem, box: [], iceCar: []};
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
                //(this.cargoMsg); // 选择的温区
            },
            prev() {
                this.isShow = true

                //   [{tem:"",box:[{type:"",num:""}]},{},{}]
                //(this.cargoMsg);
                //   if (this.cargoMsg.length == 3) {
                //     this.$message.error("最多只允许添加3个温区");
                //   } else {
                this.active = 1;
                this.firstTitle = "进行中";
                this.istemActive = -2;
                //   }
            },
            isNull(val, index, tem) {
                (this.cargoMsg)
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



              console.log (threeData, '箱型和car');
            },
            //取消数据  清空 ?????????????????????????????????????????  再返回去点击 的时候 报错  ？？？？
            quxiao(){
                this.cargoMsg = '';
                this.isDisabled = false
                this.isDisabled1 =false
                console.log (this.cargoMsg, '箱型和car2');
            },
            //判断 箱型冷藏车只能选一个
            isClick(val, isType) {
                let _this = this;
                let boxArr = []; // boxArr.length 箱型数量
                let carArr = [];

                this.boxType.forEach(item => {
                    if (item.num) {
                        boxArr.push(item.num)
                    }
                })
                _this.iceCar.forEach(item => {
                    if (item.num) {
                        carArr.push(item.num)
                    }
                })
                if (isType == 'box') {
                    // 箱型数量 输入中
                    // (this.boxType,'老孟');
                    // 循环判断 数量有值  isDisabled1 = true   没值  isDisabled1 = false
                    if (boxArr.length > 0) {
                        _this.isDisabled1 = true
                    } else {
                        _this.isDisabled1 = false
                    }
                } else if (isType == 'car') {
                    // 冷藏车数量 输入中

                    if (carArr.length > 0) {
                        _this.isDisabled = true
                    } else {
                        _this.isDisabled = false
                    }
                }
            },

        }
    };
</script>
<style scoped>
    .el-form-item {
        margin-bottom: 10px !important;
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

