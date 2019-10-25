<template>
    <div class="bigdiv">
        <div class="main">
            <div

            >
                <el-row
                    :gutter="24"
                    style="margin: 0"
                >
                    <el-col :span="24">
                        <el-collapse v-model="activeNames">
                            <el-collapse-item title="Step1 基本信息" name="0">
                                <table>
                                    <tr>
                                        <td class='table_td'>客户账号</td>
                                        <td >{{accoutNum}}</td>
                                        <td class='table_td'>结算方式</td>
                                        <td >{{CountType}}</td>
                                        <td class='table_td'>收货编码</td>
                                        <td>{{SName}}</td>
                                    </tr>

                                    <tr>
                                        <td class='table_td'>公司名称</td>
                                        <td colspan="3">{{Company}}</td>
                                        <td class='table_td'>收货人</td>
                                        <td >{{GetName}}</td>
                                    </tr>
                                    <tr>
                                        <td class='table_td'>寄件人</td>
                                        <td >{{Manager}}</td>
                                        <td class='table_td'>部门科室</td>
                                        <td >{{Department}}</td>
                                        <td class='table_td'>公司名称</td>
                                        <td>{{GetCompany}}</td>
                                    </tr>
                                   <tr>
                                        <td class='table_td'>联系电话</td>
                                        <td >{{Telephone}}</td>
                                        <td class='table_td'>中心号</td>
                                        <td >{{zxNumber}}</td>
                                        <td class='table_td'>联系电话</td>
                                        <td>{{GetTelephone}}</td>
                                    </tr>
                                    <tr>
                                        <td class='table_td'>项目编号</td>
                                        <td>{{Cid2}}</td>
                                        <td class='table_td'>协议号</td>
                                        <td>{{XyNumber}}</td>
                                         <td class='table_td'>部门/科室</td>
                                        <td>{{GetDepartment}}</td>
                                    </tr>
                                    <tr>
                                    	<td class='table_td'>省/市/区</td>
                                        <td>{{val}}</td>
                                        <td class='table_td'>保险费率</td>
                                        <td>{{SafeRate}}</td>
                                        <td class='table_td'>省/市/区</td>
                                        <td>{{val2}}</td>

                                    </tr>
                                    <tr>
                                        <td class='table_td'>详细地址</td>
                                        <td colspan="3">{{Address}} </td>
                                        <td class='table_td'>收件详细地址</td>
                                        <td colspan="2">{{GetAddress}}</td>

                                    </tr>
                                    <tr>
                                        <td class='table_td'>取件网络</td>
                                        <td colspan="5">{{CompanyNet}}</td>

                                    </tr>

                                </table>
                            </el-collapse-item>
                            <el-collapse-item title="Step2 货物信息" name="1">
                                <el-row :gutter="24">
                                    <el-col :span="12">
                                        货物类型：{{showSearch}}
                                    </el-col>
                                    <el-col :span="12">
                                        货物名称：{{searchData}}
                                    </el-col>
                                </el-row>

                                <table>
                                    <tr>
                                        <th>序号</th>
                                        <th>温度区间</th>
                                        <th>器具</th>
                                        <th>数量</th>
                                        <th>操作</th>
                                    </tr>
                                    <tr v-for="(item,index) in Box" :key="index">
                                        <td>{{index+1}}</td>
                                        <td>{{item.WDQJ}}</td>
                                        <td>{{item.PackageType}}</td>
                                        <td>
                                            <span class="circle" @click="prow(item.num,index)">-</span>
                                            <span>{{item.num}}</span>
                                            <span class="circle" @click="add(item.num,index)">+</span>
                                        </td>
                                        <td @click="deleteInfor(index)"><span>删除</span></td>
                                    </tr>
                                </table>
                                <div class='isPhoto' style="display: flex;justify-content: start;margin-top:10px;">
                                    <div>要求取件时间：{{qujianTime}}</div>
                                    <div style="margin:0 20px">时限要求：{{LimitTime}}</div>
                                    <!-- <div v-for='(item,index) in getbox.get_box_img' :key="index">
                                        <img :src="item" alt="" @click='isHover($event)'>
                                    </div>
                                   <div v-if='Number(getbox.get_box_img.length) == 0' >暂无照片</div> -->
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="Step3 其他信息" name="2">
                                <table>
                                    <!--<tr>
                                        <td class='table_td'>取件网络</td>
                                        <td>dhjodo</td>
                                        <td></td>
                                        <td></td>


                                    </tr>-->
                                    <tr>
                                        <td class='table_td'>是否投保</td>
                                        <td>
                                            <!--<div>
                                                <input type="radio" name="isTrue" />投保
                                                <input type="text"  placeholder="请输入金额">
                                                <input type="radio" name="isTrue" />不投保
                                                <input type="text" placeholder="请输入金额">
                                            </div>-->
                                            <span>{{SafeItem}}&nbsp;&nbsp;</span>
                                            <span>{{SafePay}}元</span>
                                        </td>
                                        <td class='table_td'>温度计使用</td>
                                        <td>
                                           <span>{{IsWdj}}</span>

                                        </td>

                                    </tr>
                                    <tr>

                                        <td class='table_td'>冷车派送</td>
                                        <td>
                                            <!--<div>
                                                <input type="radio" name="isTrue" />是
                                                <input type="text"  placeholder="请输入金额">
                                                <input type="radio" name="isTrue" />否

                                            </div>-->
                                              <span>{{IsLCar}}</span>
                                            <span>{{LCar}}</span>
                                        </td>
                                        <td class='table_td'>付款方式</td>
                                        <td>
                                            <span>{{OutPay}}</span>
                                            <span>{{PayMoney}}</span>
                                        </td>

                                    </tr>
                                    <tr>
                                    	<td>特殊需求</td>
                                    	<td colspan="5"> <span name="" id=""  style="width: 98%;height: 80px;" >{{Note}}</span></td>

                                    </tr>
                                </table>

                            </el-collapse-item>

                        </el-collapse>

                    </el-col>
                    <el-col style="margin: 30px 0;display: flex;justify-content: center">
                        <el-button type="primary"  @click="submitFromContent()">提交</el-button>
                        <el-button type="success" @click="quxiaohh()">取消</el-button>
                    </el-col>

                </el-row>

            </div>
            <!--        点击是否通知-->
            <el-dialog
                :center="true"
                :visible.sync="xiadan"
                width="20%">
                <div>
                    <p style="text-align: center"><img src="../../assets/suc.png" alt="" ></p>
                    <p style="text-align: center">下单成功</p>
                    <p style="text-align: center;font-size: 12px;color:greenyellow">5s后跳入订单录入页面</p>


                </div>
                <span slot="footer" class="dialog-footer" style="align-items: center;display:flow-root;text-align: center">
                     <router-link to="OrderQuery"><el-button type="primary" size="mini"  >订单查询</el-button></router-link>

                     <router-link to="OrderEntry2"><el-button type="primary" size="mini" >再来一单</el-button></router-link>

            </span>
            </el-dialog>
        </div>
    </div>

</template>

<script>
    export default {
        name: "OrderPreview",
        data() {
            return {
                xiadan:false,
                qujianTime:'',
                showSearch:'',
                searchData:'',
                NisSy:'',
                isSy:'',
                Box: [],
                fj:'',
                sj:'',
                fjValue:'',
                sjValue:'',
                isMoney:'',
                SafeItem:'',
                SafePay:'',
                teshuNeed:'',
                otherLimitTime:'',
                XyNumber:'',
                zxNumber:'',
                GetDepartment:'',
                GetName:'',
                Address:'',
                GetAddress:'',
                isShow:false,
                Cid2:'',
                SafeRate:'',
                accoutNum: "", // 客户账号
                isDisabled1:false,
                isDisabled: false,
                ManMsg: {},
                activeNames: ["0","1","2","3","4"],
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
                Company:'',
                Telephone:'',
                GetTelephone:'',
                Manager:'',//寄件人
                val2:'',
                val:'',
                Note:'',
                PartManter:'',
                LimitTime:'',
                boxType: [],
                listData:{},
                newBox: {},
                Department:'',
                SName:'',//收货编码
                CountType:'',//结算方式
                xynum:'',//协议号
                xmnum:'',//项目号
                CompanyNet:'',
                IsWdj:'',
                IsLCar:'',
                LCar:'',
                OutPay:'',
                PayMoney:'',
            };

        },
        mounted(){

            if(this.$route.query.sta == '老孟'){



                this.orderData = JSON.parse(window.sessionStorage.getItem('orderDataAgain'));
                this.showSearch = this.orderData.BusinessType;
                this.zxNumber = this.orderData.CustmerCode;
                this.XyNumber = this.orderData.XYNO;
                this.accoutNum =  this.$route.query.AccountNumber;
                 this.CountType = this.orderData.PayWay;
                this.searchData = this.orderData.CargoName;
                this.OutPay =this.orderData.OutPay;
                this.PayMoney = this.orderData.PayMoney||'无费用';
                this.SafePay =this.orderData.SafeMoney;
                this.Cid2 = this.orderData.XMNO;
                this.val = this.orderData.Depart + '/' + this.orderData.City;
                this.val2 = this.orderData.GetDepart + '/' + this.orderData.GetCity;
                // this.GetDepartment = this.orderData.GetCode||'暂无';
                // this.Box= this.orderData.Box;
                let Box = this.orderData.Box;
                // let arr = [];
                for(var i in Box){
                    Box[i].forEach(item=>{
                        item.WDQJ = i;
                        item.PackageType = item.PackageName;
                        item.num = item.Jian;
                    })
                   this.Box = Box[i];
                }
                this.qujianTime = this.orderData.Indate;
                this.Note = this.orderData.note1;
                this.SName = this.orderData.GetCompany + " " + this.orderData.GetName;
                // console.log(this.Box);
                // DepartMent

            }else{

                this.orderData =JSON.parse(window.sessionStorage.getItem("orderData")) ;
                this.showSearch = this.orderData.showSearch;
                this.accoutNum =  this.orderData.accoutNum;
                this.CountType = this.orderData.CountType;
                this.zxNumber = this.orderData.zxNumber;
                this.val = this.orderData.val;
                this.val2 = this.orderData.val2;
                this.Box= this.orderData.Box;
                this.qujianTime = this.orderData.qujianTime;
                this.Note = this.orderData.Note;
                this.SName = this.orderData.SName;
                this.OutPay =this.orderData.OutPay;
                this.Cid2 = this.orderData.Cid2;

                this.XyNumber = this.orderData.XyNumber;
                this.searchData = this.orderData.searchData;
                this.PayMoney = this.OutPay=='发件人' ?this.orderData.PayMoney : this.orderData.PayMoney2;
                this.newBox = JSON.parse(JSON.stringify(this.Box));
            }

            this.TrueName = window.sessionStorage.getItem('TrueName');
            // this.accoutNum =  this.orderData.accoutNum;
            this.SafeRate =this.orderData.SafeRate;
            this.Company = this.orderData.Company;
            this.Manager = this.orderData.Manager;


            this.GetDepartment = this.orderData.GetCode||'暂无';
            this.Telephone = this.orderData.Telephone;
            this.GetTelephone = this.orderData.GetTelephone;
            // this.SafeRate =this.orderData.SafeRate;
            this.Address = this.orderData.Address;
            this.GetAddress = this.orderData.GetAddress;
            this.GetCompany = this.orderData.GetCompany;
            this.GetName = this.orderData.GetName;
            // this.val = this.orderData.val;
            // this.val2 = this.orderData.val2;

            this.Department = this.orderData.Department;

            // this.qujianTime = this.orderData.qujianTime;

            this.LimitTime = this.orderData.LimitTime;
            this.SafeItem = this.orderData.SafeItem;
            // this.SafePay = this.orderData.SafePay
            this.SafeItem = this.orderData.SafeItem
            this.SafePay = this.SafeItem == '投保' ? this.orderData.SafePay : this.orderData.SafePay2;
            this.CompanyNet = this.orderData.CompanyNet,
                this.IsWdj = this.orderData.IsWdj;
            this.IsLCar = this.orderData.IsLCar;
            this.LCar = this.orderData.LCar;

            // this.PayMoney = this.CountType == "月结" ? '现金' : this.PayMoney;
            // this.Note = this.orderData.Note;
            // this.Box= this.orderData.Box;



        },
        methods:{
            add(val,addIndex){
                this.Box.forEach((item,index)=>{
                    if(index == addIndex){
                        item.num = parseInt(item.num) + 1;
                    }
                })
                this.$forceUpdate();
            },
            prow(val,prowIndex){
                this.Box.forEach((item,index)=>{
                    if(index == prowIndex){
                        item.num = parseInt(item.num) - 1;
                    }
                })
                this.$forceUpdate();
            },
            deleteInfor(index) { // 删除货物信息

                this.Box.splice(index,1);
                alert('你删除了第'+Number(index+1)+'个');


            },
            quxiaohh(){
                this.$router.push({
                    path: "/OrderEntry2",

                })
            },
            submitFromContent(){

                this.newBox = JSON.parse(JSON.stringify(this.Box))  ;//401行还是对的
                console.log(this.newBox,9999999999);

//zheyikaui de  lupji ????????????????????????????????????????????????
                let abc = this.newBox;
                var arr = {};
                for(var i=0;i<abc.length;i++){
                    if(arr[abc[i].WDQJ]==undefined){
                        arr[abc[i].WDQJ]=[];
                    }
                    abc[i].Jian = abc[i].num;
                    arr[abc[i].WDQJ].push(abc[i])
                }

                let that = this;
                that.$axios({
                    url:'http://out.ccsc58.cc/OMS/v1/public/index/orderdown/index',
                    method: "post",
                    data: {
                        AccountNumber:this.accoutNum,//客户账号
                        IsWdj:this.IsWdj,//使用不使用温度计
                        CargoName:this.searchData||'',//货物名称
                        GoodsType:this.showSearch||'',//货物类型
                        Manager:this.Manager||'',//寄件人
                        GetName:this.GetName||'',//收件人
                        Address:this.Address||'',//寄件地址
                        GetAddress:this.GetAddress||'',//收件地址
                        City:this.val[1],//发件城市
                        GetCity:this.val2[1],//收件城市
                        Depart:this.val[0],//寄件省份            ？？？？？？？？
                        GetDepart:this.val2[0],// 收件省份       ？
                        Company:this.Company,//寄件公司
                        GetCompany:this.GetCompany,//收件公司
                        Telephone:this.Telephone||'',//寄件电话
                        GetTelephone:this.GetTelephone||'',//收件电话
                        OrderTime:this.qujianTime||'',//要求取件时间
                        LimitTime:this.LimitTime +'H',//时限
                        EntryName:this.TrueName||'',//录入人    //这个没有
                        CountType:this.CountType,//结算方式
                        Note:this.Note||'',//备注
                        SafeItem:this.SafeItem||'',//是否投报
                        SafePay:this.SafePay||'',//投保金额
                        SafeRate:this.SafeRate||'',//费率
                        GetCode:this.GetDepartment||'',//收件部门
                        Department:this.Department||'',//寄件部门
                        CustmerCode:this.zxNumber||'',//	中心号
                        XMNO:this.Cid2||'',//项目号
                        XYNO:this.XyNumber||'',//协议号
                        IsLCar:this.IsLCar=='是'?"1":'',//	冷车费用
                        LCar:this.LCar,
                        OutPay:this.OutPay=="发件人"?'0':'1',//0是发件方1是收件方
                        PayMoney:this.PayMoney,//费用
                        CompanyNet:this.CompanyNet||'',//取件网络公司
                        NetDepart:this.val2[0],//取件站点省份
                        NetCity:this.val2[1],//取件站点城市
                        Box: JSON.stringify(arr),//	包材数组

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
                    //   headers: { "Content-Type": "application/x-www-form-urlencoded" }
                }).then(function(res) {

                    if(res.data.code == 200){
                        that.xiadan = true;
                        that.$message.success(res.data.msg)
                        setTimeout(() => {
                            that.$router.push({
                                path: "/OrderEntry2",

                            })


                        }, 10000)



                    }else{
                        that.$message.error(res.data.msg)
                    }

                })
            },
        }

    }
</script>

<style scoped>

    .el-form-item {
        margin-bottom: 10px!important;
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
