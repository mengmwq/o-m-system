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
                                        <td colspan="5"></td>

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
<!--                                    <tr v-for="(item,index) in cargList" :key="index">-->
<!--                                        <td>{{index+1}}</td>-->
<!--                                        <td>{{item.WDQJ}}</td>-->
<!--                                        <td>{{item.PackageType}}</td>-->
<!--                                        <td>-->
<!--                                            &lt;!&ndash;                                   <span class="circle">-</span>&ndash;&gt;-->
<!--                                            <span>{{item.num}}</span>-->
<!--                                            &lt;!&ndash;                                   <span class="circle">+</span>&ndash;&gt;-->
<!--                                        </td>-->
<!--                                        <td @click="deleteInfor(index)"><span>删除</span></td>-->
<!--                                    </tr>-->
                                </table>
                                <div class='isPhoto' style="display: flex;justify-content: start;margin-top:10px;">
                                    <div>要求取件时间：{{qujianTime}}</div>
                                    <div style="margin:0 20px">时限要求：{{LimitTime}}H</div>
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
                                            <span>{{SafeItem}}</span>
                                            <span>{{SafePay}}</span>
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
                        <el-button type="primary" >提交</el-button>
                        <el-button type="success">取消</el-button>
                    </el-col>

                </el-row>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderPreview",
        data() {
            return {
                qujianTime:'',
                showSearch:'',
                searchData:'',
                NisSy:'',
                isSy:'',
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
                Department:'',
                SName:'',//收货编码
                CountType:'',//结算方式
                xynum:'',//协议号
                xmnum:'',//项目号

                IsWdj:'',
                IsLCar:'',
                LCar:'',
                OutPay:'',
                PayMoney:''





            };

        },
        mounted(){
            this.orderData =JSON.parse(window.sessionStorage.getItem("orderData")) ;
            console.log( this.orderData.accoutNum,8888);
            this.accoutNum =  this.orderData.accoutNum;
            this.CountType = this.orderData.CountType;
            this.Company = this.orderData.Company;
            this.Manager = this.orderData.Manager;
            this.Cid2 = this.orderData.Cid2;
            this.XyNumber = this.orderData.XyNumber;
            this.zxNumber = this.orderData.zxNumber;
            this.Telephone = this.orderData.Telephone;
            this.GetTelephone = this.orderData.GetTelephone;
            this.SafeRate =this.orderData.SafeRate;
            this.Address = this.orderData.Address;
            this.GetAddress = this.orderData.GetAddress;
            this.SName = this.orderData.SName;
            this.GetCompany = this.orderData.GetCompany;
            this.GetName = this.orderData.GetName;
            this.val = this.orderData.val;
            this.val2 = this.orderData.val2;
            this.GetDepartment = this.orderData.GetDepartment;
            this.Department = this.orderData.Department;
            this.searchData = this.orderData.searchData;
            this.qujianTime = this.orderData.qujianTime;
            this.showSearch = this.orderData.showSearch;
            this.LimitTime = this.orderData.LimitTime;
            this.SafeItem = this.orderData.SafeItem;

            this.SafePay = this.orderData.SafePay;
            this.IsWdj = this.orderData.IsWdj;
            this.IsLCar = this.orderData.IsLCar;
            this.LCar = this.orderData.LCar;
            this.OutPay = this.orderData.OutPay;
            this.PayMoney =this.orderData.PayMoney;
            this.Note = this.orderData.Note



                //
                //
                //
                // SafeRate:this.ManMsg.SafeRate,
                // Address: this.ManMsg.Address,
                // SName:this.SName,
                // GetCompany:this.GetCompany,
                // GetName:this.GetName,
                // GetTelephone:this.GetTelephone,
                // GetAddress:this.GetAddress,
                // Department:this.Department,
                // GetDepartment:this.GetDepartment,
                // showSearch:this.showSearch,//货物类型
                // searchData:this.searchData,
                // qujianTime:this.qujianTime,
                // LimitTime:this.LimitTime,
                // otherLimitTime:this.otherLimitTime,
                // isMoney:this.isMoney,
                // isTou:this.isTou,
                // NisTou:this.NisTou,
                // NisSy:this.NisSy,
                // isSy:this.isSy,
                // fj:this. fj,
                // sj:this.sj,
                // fjValue: this.fjValue,
                // sjValue: this.sjValue,
                // teshuNeed:this.teshuNeed


        },

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
