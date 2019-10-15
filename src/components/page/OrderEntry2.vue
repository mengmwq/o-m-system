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

                                label-width="80px!important"
                                :inline="true"
                                :model="ruleForm2" :rules="rules" ref="ruleForm2"
                            >
                                <el-row>
                                    <el-col
                                        :span="12"
                                    >
                                        <el-form-item label="客户账号" prop="accoutNum">
                                            <el-input v-model="ruleForm2.accoutNum" @keyup.enter.native="getManMsg"    ></el-input>
                                        </el-form-item>
                                    </el-col>

                                    <!--  月结  现金-->
                                    <el-col :span="12">
                                        <el-form-item label="结算方式" prop="CountType">
                                            <el-input v-model="ruleForm2.CountType"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row>
                                    <el-col
                                        :span="12"
                                        style="padding:0"
                                    >
                                        <el-form-item label="公司名称" prop="Company">
                                            <el-input v-model="ruleForm2.Company" style="width:100%"></el-input>
                                        </el-form-item>

                                    </el-col>

                                    <el-col
                                        :span="12"
                                        style="padding:0"
                                    >
                                        <el-form-item label="保险费率" prop="SafeRate">
                                            <el-input v-model="ruleForm2.SafeRate"></el-input>
                                        </el-form-item>

                                    </el-col>
                                </el-row>


                                <el-row>
                                    <el-col
                                        :span="12"
                                        style="padding:0"
                                    >
                                        <el-form-item label="寄件人" prop="Manager">
                                            <el-input v-model="ruleForm2.Manager"></el-input>
                                        </el-form-item>

                                    </el-col>

                                    <el-col
                                        :span="12"
                                        style="padding:0"
                                    >
                                        <el-form-item label="部门/科室">
                                            <el-input v-model="Department" placeholder="选填"></el-input>
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

                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col
                                        :span="12"
                                        style="padding:0"
                                    >
                                        <el-form-item label="联系电话" prop="Telephone">
                                            <el-input v-model="ruleForm2.Telephone"></el-input>
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
                                        <el-form-item label="省/市/区" >
                                            <el-cascader
                                                style="width:180px"
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
                                        <el-form-item label="取件网络" prop="CompanyNet">
                                            <el-input v-model="ruleForm2.CompanyNet" @blur="handleItemChangeCompany"></el-input>
                                        </el-form-item>

                                    </el-col>
                                </el-row>


                                <el-form-item label="详细地址" prop="Address">
                                    <el-input v-model="ruleForm2.Address"></el-input>
                                </el-form-item>


                            </el-form>
                        </div>
                    </el-col>
                    <!--收件人信息-->
                    <el-col :span="11">
                        <h2 style="border-right: 4px solid #45A2DF;display: flex;justify-content: flex-end;font-family: cursive;margin:10px 0">
                            收件人信息&nbsp&nbsp</h2>
                        <div class="bioage">
                            <el-form  label-width="100px!important" :model="ruleForm" :rules="rules" ref="ruleForm" >
                                <el-form-item label="收货编码" prop="SName">
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
                                <el-form-item label="公司名称" prop="GetCompany">
                                    <el-input v-model="ruleForm.GetCompany" style="width: 80%;!important;"></el-input>
                                </el-form-item>
                                <el-form-item label="收件人" prop="GetName">
                                    <el-input v-model="ruleForm.GetName" style="width: 80%;!important;"></el-input>
                                </el-form-item>
                                <el-form-item label="部门/科室">
                                    <el-input v-model="GetDepartment" placeholder="选填" style="width: 80%;!important;"></el-input>
                                </el-form-item>
                                <el-form-item label="联系电话" prop="GetTelephone">
                                    <el-input v-model="ruleForm.GetTelephone" style="width: 80%;!important;"></el-input>
                                </el-form-item>
                                <el-form-item label="省/市/区">
                                    <el-cascader
                                        v-model="val2"
                                        :options="areaOptions2"
                                        @change="handleItemChange2"
                                        :separator="' '"
                                    ></el-cascader>
                                </el-form-item>
                                <el-form-item label="详细地址"  prop="GetAddress">
                                    <el-input v-model="ruleForm.GetAddress" style="width: 80%;!important;"></el-input>
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
                        <div style="display: flex">
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
                                    style="flex-grow: 1"
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

                                                        <input  value="" v-model='item.num'
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
                                                        <input  v-model="item.num" style='width:20%;'
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


                    <el-col :span="24" style="text-align:right;" v-show="isDDD">
<!--                         <button @click="prev"> 上一步 </button> -->
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
                                    :picker-options="expireTimeOption"
                                    value-format="yyyy-MM-dd HH:mm:ss"
                                    placeholder="选择日期时间">
                                </el-date-picker>
                            </div>
                        </el-col>
                        <el-col :span="24">
                            <h2 style="border-left: 4px solid #45A2DF;font-family: cursive;margin:20px 0">
                                &nbsp;时限要求</h2>
                            <div style="margin-left: 50px">
                                <el-radio-group v-model="LimitTime" @change="clearLimitTime1">
                                    <el-radio :label="24">24H</el-radio>
                                    <el-radio :label="36">36H</el-radio>
                                    <el-radio :label="48">48H</el-radio>
                                    <el-radio :label="72">72H</el-radio>
                                    <el-radio :label="96">96H</el-radio>
                                    <el-radio :label="120">120H</el-radio>


                                </el-radio-group>
                                <div style="display: inline-block;margin-left: 20px;">
                                    <span style="font-family: cursive">其他</span>
                                    <input style="width: 80px;border-left: none;border-top: none;border-right: none"
                                           v-model="LimitTime1" v-on:input="clearLimitTime"></input>
                                </div>

                            </div>
                        </el-col>
                        <el-col :span="24">
                            <h2 style="border-left: 4px solid #45A2DF;font-family: cursive;margin:20px 0">
                                &nbsp;其他信息</h2>
                            <el-row :gutter="24">
                                <el-col :span="12">
                                    <div style="margin-left: 50px">
                                        <span>是否投保 &nbsp;&nbsp;</span>

                                        <el-radio v-model="SafeItem" label="投保">投保 &nbsp;<input value=""
                                                                                                style="width: 80px;border-left: none;border-top: none;border-right: none"
                                                                                                v-model="SafePay">
                                        </el-radio>
                                        <el-radio v-model="SafeItem" label="不投保">不投保 &nbsp;<span
                                                                                                  style="width: 80px;border-left: none;border-top: none;border-right: none"
                                                                                                  v-model="SafePay2">2000</span>
                                        </el-radio>

                                    </div>
                                    <div style="margin-left: 50px;padding: 15px 0">
                                        <span>冷藏派送 &nbsp;&nbsp;</span>
                                        <el-radio v-model="IsLCar" label="冷车">是&nbsp;<input value="550"
                                                                                            style="width: 80px;border-left: none;border-top: none;border-right: none"
                                                                                            v-model="LCar"></input>
                                        </el-radio>
                                        <el-radio v-model="IsLCar" label="不使用">否</el-radio>


                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div style="margin-left: 50px">
                                    <span>
                                        温度计使用&nbsp;&nbsp;</span>
                                        <el-radio v-model="IsWdj" label="使用">使用</el-radio>
                                        <el-radio v-model="IsWdj" label="不使用">不使用</el-radio>

                                    </div>
                                    <div style="margin-left: 50px;padding: 15px 0" v-if="isPay">
                                        <span>付款方式 &nbsp;&nbsp;</span>
                                        <el-radio v-model="OutPay" label="0">发件人&nbsp;<input value=""
                                                                                                style="width: 80px;border-left: none;border-top: none;border-right: none"
                                                                                                v-model="PayMoney">
                                        </el-radio>
                                        <el-radio v-model="OutPay" label="1">收件人&nbsp;<input value=""
                                                                                                style="width: 80px;border-left: none;border-top: none;border-right: none"
                                                                                                v-model="PayMoney2">
                                        </el-radio>

                                    </div>
                                </el-col>
                                <el-col>
                                    <div style="margin-left: 15px">
                                        <el-form :inline="true">
                                            <el-form-item label="特殊需求">
                                                <textarea name="" id="" cols="40" rows="5" v-model="Note"></textarea>
<!--                                                <el-input type="textarea" style="width:100%;" v-model="Note"></el-input>-->
                                            </el-form-item>
                                        </el-form>

                                    </div>
                                </el-col>

                            </el-row>


                        </el-col>
                        <el-col :span="24" style="text-align:right;margin-bottom:20px;">
                            <span class="save" @click="saveCargo('ruleForm','ruleForm2')">下一步</span>
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
                expireTimeOption: {
                    disabledDate(date) {
                        //disabledDate 文档上：设置禁用状态，参数为当前日期，要求返回 Boolean
                        return date.getTime() < Date.now() - 24 * 60 * 60 * 1000;
                    }
                },
                ruleForm2:{
                    CompanyNet:'',
                    accoutNum: '',
                    CountType: '',
                    SafeRate: '',
                    Company: '',
                    Manager: '',
                    Telephone:'',
                    Address:'',
                    // val:[]

                },
                ruleForm: {

                    GetCompany:'',
                    GetName:'',

                    GetTelephone:'',
                    GetAddress:'',

                },
                isDDD:false,
                // ruleForm:{
                //     GetCompany:'',
                //     GetName:'',
                //     GetTelephone:'',
                //     GetAddress:''
                //
                // },
                rules: {
                    accoutNum: [
                        { required: true, message: '请输入客户账号', trigger: 'blur' },

                    ],
                    CountType: [
                        { required: true, message: '请输入结算方式', trigger: 'blur' }
                    ],
                    SafeRate: [
                        { required: true, message: '请输入保险费率', trigger: 'blur' }
                    ],
                    CompanyNet:[
                        { required: true, message: '请输入取件网络', trigger: 'blur' }
                    ],
                    Company: [
                        { required: true, message: '请输入公司名称', trigger: 'blur' }
                    ],
                    Manager: [
                        { required: true, message: '请输入寄件人', trigger: 'blur' }
                    ],
                    Telephone:[
                        {required:true,message:'请输入寄件人联系方式',trigger:'blur'}
                    ],
                    Address:[
                        {required:true,message:'请输入详细地址',trigger:'blur'}
                    ],
                    // val:[
                    //     {type: 'array',required:true,message:'请输入省市区',trigger:'blur'}
                    // ],
                    GetCompany:[
                        {required:true,message:'请输入收件公司名称',trigger:'blur'}
                    ],
                    GetName:[
                        {required:true,message:'请输入收件人',trigger:'blur'}
                    ],
                    GetTelephone:[
                        {required:true,message:'请输入收件人电话',trigger:'blur'}
                    ],
                    GetAddress:[
                        {required:true,message:'请输入收件人详细地址',trigger:'blur'}
                    ]

                },


                isPay:true,
                OutPay: '',
                PayMoney: '',
                PayMoney2: '',
                LCar: 500,
                IsLCar: '',
                IsWdj: '',
                NisSy: '',
                isSy: '',
                fj: '',
                sj: '',
                fjValue: '',
                sjValue: '',
                isMoney: '',
                SafeItem: '',
                SafePay: '',
                SafePay1: '',
                SafePay2: 2000,
                Note: '',
                otherLimitTime: '',
                XyNumber: '',
                zxNumber: '',
                GetDepartment: '',
                Department: '',
                isShow: false,
                GetTelephone: '',
                showSearch: "药品",
                searchData: "",
                areaOptions: areaOptions,
                areaOptions2: areaOptions2,
                val2: [],
                val: [], // 选中的省市区,
                city: '',//城市
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
                isThree: [], // 判断箱型最多选择3个
                temArea: [],
                GetCompany: '',
                Company: '',
                Telephone: '',
                GetName: '',
                GetCity: '',
                GetAddress: '',
                Note: '',
                LimitTime: '',
                LimitTime1:'',
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
                SName: '',
                CompanyNet: '',
            };
        },
        created() {
            this.getManMsg();
            this.getTem();


        },
        methods: {
            //选择省市区改变的方法

            handleItemChange(val) {
                // 省市区
                this.val = val
                console.log(this.val)
                if (this.val && this.val.length == 3) {
                    //截取字符串
                    console.log(this.val)
                    console.log(this.val[1], 2);
                    console.log(this.val[1].indexOf('市'), 3)
                    this.city = this.val[1].substring(0, this.val[1].indexOf('市'));
                    let that = this;
                    that.$axios({
                        url: "http://out.ccsc58.cc/OMS/v1/public/index/orderdown/checknet",
                        method: "post",
                        data: {
                            City: this.city,
                            CompanyNet: ''
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
                        console.log(res, 33)
                        if (res.data.code == "200") {

                            that.ruleForm2.CompanyNet = res.data.data.CompanyNet;
                        } else {

                        }
                    });
                }


            },
            //选择网络公司的时候请求接口
            handleItemChangeCompany() {
                let that = this;
                that.$axios({
                    url: "http://out.ccsc58.cc/OMS/v1/public/index/orderdown/checknet",
                    method: "post",
                    data: {
                        City: this.city,
                        CompanyNet: this.ruleForm2.CompanyNet,
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
                    console.log(res, 33)
                    if (res.data.code == "200") {
                        that.$message.success(res.data.msg)

                    } else {

                        that.$message.error(res.data.msg)
                    }
                });
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
            saveCargo(formName,formName2) {
                console.log(this.cargoMsg);
                //这个如何判断
                if(this.searchData == ''){
                    this.$message.error('请输入货物名称');
                    return;
                };

                if(this.qujianTime == ''){
                    this.$message.error('请输入要求取件时间');
                    return;
                };
                if (this.SafeItem == '投保') {
                    if (this.SafePay == '') {
                        //alert('投保金额必填')
                        this.$message.error('投保金额必填');
                        return;
                    }
                };
                if(this.IsWdj == ''){
                    this.$message.error('请选择温度计');
                    return;
                };

                this.$refs[formName].validate((valid) => {
                    this.$refs[formName2].validate((valid2) => {

                        if (valid) {
                            if(valid2){


                                let orderData = {
                                    accoutNum: this.ruleForm2.accoutNum,
                                    CountType: this.ruleForm2.CountType,
                                    Company: this.ruleForm2.Company,
                                    Manager: this.ruleForm2.Manager,
                                    Cid2: this.ManMsg.Cid2,
                                    XyNumber: this.ManMsg.XyNumber,
                                    zxNumber: this.ManMsg.zxNumber,
                                    Telephone: this.ruleForm2.Telephone,
                                    SafeRate: this.ruleForm.SafeRate,
                                    Address: this.ruleForm2.Address,
                                    SName: this.SName,
                                    GetCompany: this.ruleForm.GetCompany,
                                    GetName: this.ruleForm.GetName,
                                    GetTelephone: this.ruleForm.GetTelephone,
                                    GetAddress: this.ruleForm.GetAddress,
                                    Department: this.Department,
                                    GetCode: this.GetDepartment,
                                    showSearch: this.showSearch,//货物类型
                                    searchData: this.searchData,
                                    qujianTime: this.qujianTime,
                                    LimitTime: this.LimitTime1?this.LimitTime1:this.LimitTime,
                                    otherLimitTime: this.otherLimitTime,
                                    isMoney: this.isMoney,
                                    Box:this.cargoMsg,
                                    SafeItem: this.SafeItem,
                                    SafePay: this.SafePay,
                                    SafePay2: this.SafePay2,
                                    CompanyNet: this.ruleForm2.CompanyNet,

                                    NisSy: this.NisSy,
                                    isSy: this.isSy,
                                    fj: this.fj,
                                    sj: this.sj,
                                    fjValue: this.fjValue,
                                    sjValue: this.sjValue,
                                    Note: this.Note,
                                    val: this.val,
                                    val2: this.val2,
                                    IsWdj: this.IsWdj,
                                    IsLCar: this.IsLCar,
                                    LCar: this.LCar,
                                    PayMoney: this.PayMoney,
                                    PayMoney2: this.PayMoney2,
                                    OutPay: this.OutPay


                                };

                                console.log(orderData, 99)
                                window.sessionStorage.setItem('orderData', JSON.stringify(orderData));

                                this.$router.push({
                                    path: "/OrderPreview",

                                })
                            }

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                    })
                });





            },

            //传账号请求货物编码
            getjiDetails() {
                let that = this;
                that.$axios({
                    url: "http://out.ccsc58.cc/OMS/v1/public/index/orderdown/frommsg",
                    method: "post",
                    data: {
                        AccountNumber: that.ruleForm2.accoutNum,
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
            currentSel() {
                (this.SName)
                let that = this;
                that.$axios({
                    url: "http://out.ccsc58.cc/OMS/v1/public/index/orderdown/frommsg",
                    method: "post",
                    data: {
                        AccountNumber: that.ruleForm2.accoutNum,
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

                        that.ruleForm.GetAddress = res.data.data.Address;
                        that.ruleForm.GetTelephone = res.data.data.Telephone;
                        that.ruleForm.GetCompany = res.data.data.Company;
                        that.ruleForm.GetName = res.data.data.Name;
                        that.val2 = res.data.data.Location;

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
                    data: {AccountNumber: that.ruleForm2.accoutNum},
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
                        that.val = res.data.data.Location;
                        that.ruleForm2.CountType = res.data.data.CountType;
                        that.ruleForm2.Company = res.data.data.Company;
                        that.ruleForm2.SafeRate = res.data.data.SafeRate;
                        that.ruleForm2.Telephone = res.data.data.Telephone;
                        that.ruleForm2.Address = res.data.data.Address;
                        that.ruleForm2.Manager = res.data.data.Manager;
                        that.ruleForm2.CompanyNet = res.data.data.CompanyNet

                       // that.hhh = that.ManMsg.Depart + "/" + that.ManMsg.City + "/" + that.ManMsg.Area;

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
                this.isDDD = true;
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
                        //that.boxType = {};
                    }
                });

                that.istemActive = index;
                that.active = 2;
                that.firstTitle = "已完成";
                that.selectTem = val.WDQJ; // 当前选择的温区


                // let obj = {tem: this.selectTem, box: [], iceCar: []};
                // if (this.cargoMsg.length == 0) {
                // this.cargoMsg.push(obj);
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


                if(this.cargoMsg.length == 0){
                    this.$message.error('请选择温区和箱型')
                }else{
                    this.ruleForm.CountType == "现金" ? this.isPay = true : this.isPay = false;
                    this.isShow = true;
                    this.cargoMsg.forEach((item,index) => {
                        if(item.num == ''){
                            this.cargoMsg.splice(index,1);
                        }
                    })

                    this.active = 1;
                    this.firstTitle = "进行中";
                    this.istemActive = -2;
                }

                // this.cargoMsg



            },
            isNull(val, index, tem) {
            //     (this.cargoMsg)
            //     // 这个数组   就是  最后  你要给海宁的数组   也就是  所有的货物信息
            //     // 用来判断  当该项为空  数组中也清空  也就是 这个箱子填错了 不选择他  或者冷藏车  选错了的时候   清空数组
            //     // val  是 当前修改的这条数据   index   是当前修改的数据  在数组中的下标
            //     // this.cargoMsg   循环这个   把 箱型数量和  冷藏车数量  放进去
            //     let threeData = this.cargoMsg;
            //     for (let i = 0; i < threeData.length; i++) {
            //         if (this.selectTem == threeData[i].tem) {
            //             threeData[i].box.push(val);
            //         }
            //     }
            //
            //
            //     console.log(threeData, '箱型和car');
            },
            //取消数据  清空 ?????????????????????????????????????????  再返回去点击 的时候 报错  ？？？？
            quxiao() {

                this.isDisabled = false;
                this.isDisabled1 = false;
                console.log(this.boxType)
                this.boxType.forEach(function(item,index){
                    if(item.num){
                        delete item.num
                    }
                })
                this.iceCar.forEach(function(item,index){
                    if(item.num){
                        delete item.num
                    }
                })
                console.log(this.cargoMsg, '箱型和car2');
                this.cargoMsg = [];

            },
            //判断 箱型冷藏车只能选一个
            isClick(val, isType) {
                console.log(val,11111);
                // let arr = this.boxType.concat(this.iceCar);
                // this.cargoMsg = [];

                // this.isThree.push(val);
                // if(this.isThree.length>3){
                //     val.num = '';
                //     this.$message.error("箱型最多可以选择3个")
                // }else{
                    this.boxType.forEach(item => {
                        if(item.num && item.num != ''){
                            if(this.cargoMsg.length === 0){
                                this.cargoMsg.push(item);
                            }else if(val.PackageType == item.PackageType){
                                this.cargoMsg.push(item);
                            }

                        }
                    })
                    this.iceCar.forEach(item => {
                        if(item.num && item.num != ''){
                            if(this.cargoMsg.length === 0){
                                this.cargoMsg.push(item);
                            }else if(val.PackageType == item.PackageType){
                                this.cargoMsg.push(item);
                            }
                        }
                    })
                    console.log(this.cargoMsg);
                // }

                let _this = this;
                let boxArr = []; // boxArr.length 箱型数量
                let carArr = [];

                _this.boxType.forEach(item => {
                    if (item.num) {

                        item.WDQJ = _this.selectTem;
                        boxArr.push(item.num)
                    }
                })
                _this.iceCar.forEach(item => {
                    if (item.num) {
                        item.WDQJ = _this.selectTem;
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
            clearLimitTime(){
                if(this.LimitTime1){
                    this.LimitTime = ''
                }
            },
            clearLimitTime1(){
                this.LimitTime1 = ''
            }

        }
    };
</script>
<style>
    .el-form-item__error {
        color: #fff;!important
    font-size: 12px;
        line-height: 1;
        padding-top: 4px;
        position: absolute;
        top: 100%;
        left: 0;
    }
</style>
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

