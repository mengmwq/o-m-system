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
                                        <td >{{paytype}}</td>
                                        <td class='table_td'>收货编码</td>
                                        <td>{{GetCode}}</td>
                                    </tr>
                                  
                                    <tr>
                                        <td class='table_td'>公司名称</td>
                                        <td colspan="3">{{GetCompany}}</td>
                                        <td class='table_td'>收货人</td>
                                        <td >{{GetName}}</td>
                                    </tr>
                                    <tr>
                                        <td class='table_td'>寄件人</td>
                                        <td >{{Manager}}</td>
                                        <td class='table_td'>部门科室</td>
                                        <td >{{PartManter}}</td>
                                        <td class='table_td'>公司名称</td>
                                        <td>{{Company}}</td>
                                    </tr>
                                   <tr>
                                        <td class='table_td'>联系电话</td>
                                        <td >{{Telephone}}</td>
                                        <td class='table_td'>中心号</td>
                                        <td >{{PartManter}}</td>
                                        <td class='table_td'>联系电话</td>
                                        <td>{{GetTelephone}}</td>
                                    </tr>
                                    <tr>
                                        <td class='table_td'>项目编号</td>
                                        <td>{{xmnum}}</td>
                                        <td class='table_td'>协议号</td>
                                        <td>{{xynum}}</td>
                                         <td class='table_td'>部门/科室</td>
                                        <td>{{GetPartment}}</td>
                                    </tr>
                                    <tr>
                                    	<td class='table_td'>城市区域</td>
                                        <td>{{Derp}}{{City}}{{Area}}</td>
                                        <td class='table_td'>保险费率</td>
                                        <td></td>
                                        <td class='table_td'>城市/区域</td>
                                        <td>{{GetDerp}}{{GetCity}}{{GetArea}}</td>
                                        
                                    </tr>
                                    <tr>
                                        <td class='table_td'>详细地址</td>
                                        <td colspan="3">{{Detiladdress}} </td>
                                        <td class='table_td'>收件详细地址</td>
                                        <td colspan="2">{{GetDetiladdress}}</td>

                                    </tr>
                                    <tr>
                                        <td class='table_td'>取件网络</td>
                                        <td colspan="5">{{GetNetwork}}</td>

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
                                    <div>要求取件时间：1</div>
                                    <div style="margin:0 20px">时限要求：1H</div>
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
                                            <span>否</span>
                                            <span>2000</span>
                                        </td>
                                        <td class='table_td'>温度计使用</td>
                                        <td>
                                           <span>不使用</span>
                                          
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
                                              <span>是</span>
                                            <span>500</span>
                                        </td>
                                        <td class='table_td'>付款方式</td>
                                        <td>
                                            <span>收件人</span>
                                            <span>500元</span>
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                    	<td>特殊需求</td>
                                    	<td colspan="5"> <textarea name="" id=""  style="width: 98%;height: 80px;" v-model="Note"></textarea></td>
                                    	
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
                            <!--<el-collapse-item title="Step4 特殊需求" name="3">
                                <div>
                                    <textarea name="" id=""  style="width: 98%;height: 80px;" v-model="Note"></textarea>
                                </div>
                            </el-collapse-item>-->
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
                GetName: '',
                Manager:'',//寄件人
                GetTelephone: '',
                GetAddress:'',
                Note:'',
                PartManter:'',
                LimitTime:'',
                boxType: [],
                listData:{},
                GetCode:'',//收货编码
                paytype:'',//结算方式
                xmnum:'',//项目号
                xynum:'',//协议号
                xmnum:'',//项目号
                GetPartment:'',//收件人部门科室
                GetDerp:'',//收件省份
                GetCity:'',//收件城市
                GetArea:'',//收件区域
                Derp:'',//寄件省份
                City:'',//寄件城市
                Area:'',//寄件区域
                Detiladdress:'',//寄件人详细地址
                GetDetiladdress:'',//寄件人详细地址
                GetNetwork:''
            };
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
