<template>
    <div class="bigdiv">
        <div class="main">
            <div>
                <!-- 寄件人  收件人信息 -->
                <el-row :gutter="24" style="margin: 0">
                    <!--寄件人信息-->
                    <el-col :span="12" >
                        <h2 style="border-left: 4px solid #45A2DF;font-family: cursive;margin:10px 0">&nbsp;寄件人信息</h2>
                        <div class="bioage" style="border-right: 2px solid #ddd;">
                            <el-form

                                label-width="80px!important"
                                :inline="true"
                                class="demo-form-inline"
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
                                                filterable
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
                                    <el-select v-model="SName" filterable  placeholder="请选择" @change="currentSel">

                                        <el-option
                                            v-for="(item,index) in SNameArr"
                                            :key="index"
                                            :label="item.SName"
                                            :value="item.SName"
                                        >
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="省/市/区">
                                    <el-cascader
                                        filterable
                                        v-model="val2"
                                        :options="areaOptions2"
                                        @change="handleItemChange2"
                                        :separator="' '"
                                    ></el-cascader>
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

                                <el-form-item label="详细地址"  prop="GetAddress">
                                    <el-input v-model="ruleForm.GetAddress" style="width: 80%;!important;"></el-input>
                                </el-form-item>
                            </el-form>
                        </div>

                    </el-col>


<!--                    <el-col>-->
<!--                        <el-button v-show="isShowN" type="primary" style="float: right;margin:0 110px 20px 0" @click="savaManger('ruleForm','ruleForm2')">保存</el-button>-->
<!--                    </el-col>-->
                </el-row>
                <el-row :gutter="24" style="margin: 0">
                    <el-col :span="24">
                        <h2 style="border-left: 4px solid #45A2DF;font-family: cursive;margin:10px 0">&nbsp;货物信息</h2>
                        <el-row :gutter="24">
                            <el-col :span="13">
                                <el-row :gutter="24">
                                    <el-col :span="12">
                                        <div >
                                            <el-dropdown trigger="click" :hide-on-click="false"
                                                         @command="changeCompany" style="margin-right: 10px;"
                                                         ref="messageDrop">
                                                <span class="el-dropdown-link" style="width:150px;cursor: pointer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{showSearch}}<i class="el-icon-arrow-down el-icon--right"></i></span>
                                                <el-dropdown-menu slot="dropdown" style="cursor: pointer">
                                                    <el-dropdown-item command="药品">药品</el-dropdown-item>
                                                    <el-dropdown-item command="试剂">试剂</el-dropdown-item>
                                                    <el-dropdown-item command="样品">样品</el-dropdown-item>
                                                    <el-dropdown-item command="器械">器械</el-dropdown-item>
                                                    <el-dropdown-item command="普货">普货</el-dropdown-item>
                                                </el-dropdown-menu>
                                            </el-dropdown>
                                            <el-input type="text" v-model="searchData" style="width:50%;text-align: center;"></el-input>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div style="display: inline-block;">
                                            <el-date-picker
                                                v-model="qujianTime"
                                                type="datetime"
                                                :picker-options="expireTimeOption"
                                                value-format="yyyy-MM-dd HH:mm:ss"
                                                placeholder="要求取件时间">
                                            </el-date-picker>
                                        </div>
                                    </el-col>
                                </el-row>

                            </el-col>
                            <el-col :span="11">
                                <el-row :gutter="24">
                                    <el-col :span="6">
                                        <el-form  :model="ruleForm" >
                                            <el-form-item >
                                                <el-select v-model="LimitTime">

                                                    <el-option    key="24H" label="24H" value="24H"></el-option>
                                                    <el-option   key="36H" label="36H" value="36H"></el-option>
                                                    <el-option  key="48H" label="48H" value="48H"></el-option>
                                                    <el-option  key="72H" label="72H" value="72H"></el-option>
                                                    <el-option  key="96H" label="96H" value="96H"></el-option>
                                                    <el-option  key="120H" label="120H" value="120H"></el-option>
                                                    <el-option value="其他" key="其他" label="其他"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-form>
                                    </el-col>
                                    <el-col :span="4">

                                        <el-input v-if="this.LimitTime=='其他'" style="width: 80px;border-left: none;border-top: none;border-right: none;" v-model="LimitTime1"></el-input>

                                    </el-col>
                                    <el-col :span="12" >
                                        <label for="" style="font-family: cursive">温度计:</label>
                                        <el-select v-model="IsWdj" label="温度计" style="width: 28%">
                                            <el-option  value="使用">使用</el-option>
                                            <el-option  value="不使用">不使用</el-option>
                                        </el-select>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="11">
                                <el-col :span="5">
                                    <el-select v-model="SafeItem" >
                                        <el-option  value="投保">投保</el-option>
                                        <el-option  value="不投保">不投保</el-option>
                                    </el-select>
                                </el-col>
                                <el-col :span="4">
                                    <el-input style="border-left: none;border-top: none;border-right: none;" v-model="SafePay" placeholder="输入金额" ></el-input>

                                </el-col>
                                <el-col :span="6" :offset="5">
                                    <el-select v-model="IsLCar" >
                                        <el-option  value="冷车">冷车</el-option>
                                        <el-option  value="不使用冷车派送">不使用冷车派送</el-option>
                                    </el-select>
                                </el-col>
                                <el-col :span="4">
                                    <el-input v-if="this.IsLCar=='冷车'"  style="border-left: none;border-top: none;border-right: none;" v-model="LCar" placeholder="输入金额" ></el-input>

                                </el-col>

                            </el-col>
                            <el-col :span="11">
                                <el-col :span="6" :offset="4">
                                    <el-select v-model="OutPay" placeholder="请选择付款方式" @change="changeOutpay()" >
                                        <el-option  value="">无付款方式</el-option>
                                        <el-option  value="发件人">发件人</el-option>
                                        <el-option  value="收件人">收件人</el-option>
                                    </el-select>
                                </el-col>
                                <el-col :span="4">
                                    <el-input  type="number" v-if="this.OutPay!==''" style="border-left: none;border-top: none;border-right: none;" v-model="PayMoney" placeholder="输入金额" ></el-input>
                                </el-col>
                            </el-col>
                            <el-col :span="23">
                                <el-form >
                                    <el-form-item style="margin:20px 0;">
                                        <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 2, maxRows: 4}"
                                            placeholder="请输入特殊需求"
                                            v-model="Note">
                                        </el-input>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                            <el-col>
                                <el-button v-show="isShowN" type="primary" style="float: right;margin:0 60px 20px 0px;cursor: pointer" @click="savaManger('ruleForm','ruleForm2')">保存</el-button>
                            </el-col>
<!--                            <el-col>-->
<!--                                <el-button v-show="isShowN2" type="primary" style="float: right;margin:0 60px 20px 0" @click="savaManger('ruleForm','ruleForm2')">编辑</el-button>-->
<!--                            </el-col>-->

                        </el-row>
                    </el-col>
                </el-row>

                <el-row
                    v-show="ishwShow"
                    :gutter="24"
                    style="margin: 0;overflow: hidden;"
                >
                    <el-col :span="24">
                        <h2 style="border-left: 4px solid #45A2DF;font-family: cursive;margin:10px 0">温区及箱型</h2>
                        <div style="display: flex; flex-direction: row"  v-show="islaomC">
                            <el-steps
                                direction="vertical"
                                :active="active"
                                style="height:100px;width:50px;"
                            >
                                <el-step></el-step>
                                <el-step v-if="active===2"></el-step>
                            </el-steps>
                            <div style="display:flex;flex-direction: column; flex: 1">
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

                                <div v-if="active===2" >
                                    <div>{{towTitle}}</div>
                                    <div>
                                        <el-tabs v-model="activeName"  >
                                            <el-tab-pane label="箱型" :disabled="isDisabled" name="first">
                                                <div class="temFirst" >
                                                    <div
                                                        style="flex-flow: wrap;padding-bottom: 10px"
                                                        v-for="(item,index) in boxType"
                                                        :key="index">
                                                        <span>{{item.PackageType}}</span>

                                                        <input  value="" v-model='item.num'
                                                                style='width:20%;' @blur="isNull(item,index)"

                                                                v-on:input ="isClick(item,'box')">

                                                        <span>个</span>
                                                    </div>

                                                </div>
                                            </el-tab-pane>
                                            <el-tab-pane label="冷藏专用车" :disabled="isDisabled1" name="second">
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


                    <el-col :span="24" style="text-align:right;margin: 20px 5px" v-show="isDDD">
                        <!--                         <button @click="prev"> 上一步 </button> -->
<!--                        <span class="save" @click="quxiao">取消</span>-->
                        <span class="save" @click="prev" style="cursor: pointer">保存</span>
                    </el-col>
                    <el-col >
                        <el-row :gutter="24" style="margin:50px 0" v-show="isbioage2">
                            <el-col>
                                <table>
                                    <tr>
                                        <th>
                                            <input v-model='isAllChecked' type="checkbox"  @click="selectAll"  />
                                        </th>
                                        <th>序号</th>
                                        <th>温度区间</th>
                                        <th>器具</th>
                                        <th>数量</th>
                                        <th>操作</th>
                                    </tr>
                                    <tr v-for="(item,index) in cargoMsg" :key="index">
                                        <td>
                                            <input type="checkbox" name="checkedValue" :value="item.id" v-model="checkedValue">
                                        </td>
                                        <td>{{index+1}}</td>
                                        <td>{{item.WDQJ}}</td>
                                        <td>{{item.PackageType}}</td>
                                        <td>
                                            <span class="circle" style="cursor: pointer" @click="prow(item.num,index)">-</span>
                                            <span>{{item.num}}</span>
                                            <span class="circle" style="cursor: pointer" @click="add(item.num,index)">+</span>
                                        </td>
                                        <td @click="deleteInfor(index)" style="cursor: pointer"><span>删除</span></td>
                                    </tr>
                                </table>
                            </el-col>
                            <el-col>
                                <div style="margin:10px 0" id="biaogeBotom">
                                    <span @click="delCheckbox()" style="cursor: pointer">删除选中的箱型</span>
                                    <span @click="clearContent()" style="cursor: pointer">清空数据</span>
                                </div>

                            </el-col>
                            <el-col>
                                <el-button v-show="isufhhf" type="primary" style="float: right;margin:0 60px 20px 0;cursor: pointer" @click="reasgBiao()">编辑</el-button>

                            </el-col>

                            <el-col>
                                <div style="text-align: center">
                                    <el-button type="primary" @click="searchB()" style="cursor: pointer">预览</el-button>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>
        </div>
        <el-dialog
            width="50%"
            center
            title="订单录入详情"
          :visible.sync="addSendDetailsModel"
        >
            <div>
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
                                            <!--                                        <th>操作</th>-->
                                        </tr>
                                        <tr v-for="(item,index) in Box" :key="index">
                                            <td>{{index+1}}</td>
                                            <td>{{item.WDQJ}}</td>
                                            <td>{{item.PackageType}}</td>
                                            <td>
                                                <!--                                            <span class="circle" @click="prow(item.num,index)">-</span>-->
                                                <span>{{item.num}}</span>
                                                <!--                                            <span class="circle" @click="add(item.num,index)">+</span>-->
                                            </td>
                                            <!--                                        <td @click="deleteInfor(index)"><span>删除</span></td>-->
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
                            <el-button type="info"  @click="addSendDetailsModel = false">取消</el-button>
                            <el-button type="primary"  @click="submitFromContent()">提交</el-button>
                        </el-col>

                    </el-row>

                </div>



        </el-dialog>
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
</template>
<script>
    import areaOptions from "../../lib/area.js";
    import areaOptions2 from "../../lib/area.js";
    export default {
        name: "test",
        data() {
            return {
                checkedValue: [],
                xiadan:false,


                isAllChecked: false,    // 正在进行中的数据是否被选
                Box: [],

                teshuNeed:'',

                Cid2:'',
                SafeRate:'',

                value1: "",

                Manager:'',//寄件人

                PartManter:'',

                newBox: {},

                CountType:'',//结算方式
                xynum:'',//协议号
                xmnum:'',//项目号

                addSendDetailsModel:false,
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
                activeName: 'first',
                isDDD:false,
                www:"f",
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
                isbioage2:false,
                isbioage1:true,
                value:'',
                isShowN:true,
                ishwShow:false,
                isPay:true,
                islaomC:true,
                OutPay: '',
                PayMoney: '',
                PayMoney2: '',
                LCar:'' ,
                IsLCar: '不使用冷车派送',
                IsWdj: '使用',
                NisSy: '',
                isSy: '',
                fj: '',
                sj: '',
                fjValue: '',
                sjValue: '',
                isMoney: '',
                SafeItem: '不投保',
                SafePay: '2000',
                SafePay1: '',
                SafePay2: 2000,
                otherLimitTime: '',
                XyNumber: '',
                zxNumber: '',
                GetDepartment: '',
                Department: '',
                isShow: false,
                GetTelephone: '',
                showSearch: "药品",
                searchData: "药品",
                areaOptions: areaOptions,
                areaOptions2: areaOptions2,
                val2: [],
                isufhhf:false,
                val: [], // 选中的省市区,
                city: '',//城市
                accoutNum: "", // 客户账号
                isDisabled1: false,
                isDisabled: false,
                ManMsg: {},
                activeNames: ["0","1","2","3","4"],
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
                LimitTime: '24H',
                isShowN2:false,
                isShowN:true,
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
            // this.getManMsg();
            this.getTem();
        },
        mounted(){

            if(this.$route.query.sta == '老孟') {
                // this.isbioage2=true;
                this.islaomC=false;
                this.isufhhf =true;
                this.orderData = JSON.parse(window.sessionStorage.getItem('orderDataAgain'));
                console.log(this.orderData,98)
                this.showSearch = this.orderData.BusinessType;
                this.ruleForm2.accoutNum = this.$route.query.AccountNumber;
                this.ruleForm2.CountType = this.orderData.PayWay;
                this.ruleForm2.Company = this.orderData.Company;
                this.ruleForm2.SafeRate = this.orderData.SafeRate;
                this.ruleForm2.Manager = this.orderData.Manager;
                this.ruleForm2.Telephone = this.orderData.Telephone;
                this.ruleForm2.CompanyNet = this.orderData.CompanyNet;
                this.ruleForm2.Address = this.orderData.Address;
                this.ruleForm.GetCompany = this.orderData.GetCompany;
                this.ruleForm.GetName = this.orderData.GetName;
                this.ruleForm.GetTelephone = this.orderData.GetTelephone;
                this.ruleForm.GetAddress = this.orderData.GetAddress;
                this.Department = this.orderData.Department;
                this.ManMsg.Cid2 = this.orderData.XMNO;
                this.ManMsg.zxNumber = this.orderData.CustmerCode;
                this.ManMsg.XyNumber = this.orderData.XYNO;
                this.searchData = this.orderData.CargoName;

                // if(this.ruleForm2.CountType=='月结'){
                //     this.orderData.OutPay='' ; console.log(this.orderData.OutPay,9)
                // }
                // if(this.orderData.OutPay==''){
                //     this.orderData.OutPay=''
                // }else if(this.orderData.OutPay=='0'){
                //     this.orderData.OutPay='发件人'
                // }else{
                //     this.orderData.OutPay='收件人'
                // }
                // this.OutPay = this.orderData.OutPay;
                // // this.OutPay = this.orderData.OutPay=='0'?'发件人':'收件人';
                // this.PayMoney = this.orderData.PayMoney || '';
                this.SafePay = this.orderData.SafePay;
                 this.val = this.orderData.StartLocation ;
                 this.val2 = this.orderData.EndLocation ;
                // this.GetDepartment = this.orderData.GetCode||'暂无';
                // this.Box= this.orderData.Box;
                let Box = this.orderData.Box;
                // let arr = [];
                for (var i in Box) {
                    Box[i].forEach((item,index) => {
                        item.WDQJ = i;
                        item.PackageType = item.PackageName;
                        item.num = item.Jian;
                        item.id = index;
                    })
                    this.cargoMsg = Box[i];
                }
                console.log(this.cargoMsg,'%%%%%%%%%%%11111');
                this.qujianTime = this.orderData.Indate;
                this.Note = this.orderData.note1;
                this.SName = this.orderData.GetCompany + " " + this.orderData.GetName;
                this.TrueName = window.sessionStorage.getItem('TrueName');

                this.Company = this.orderData.Company;
                this.Manager = this.orderData.Manager;
                this.GetDepartment = this.orderData.GetCode||'暂无';
                this.Telephone = this.orderData.Telephone;
                this.GetTelephone = this.orderData.GetTelephone;

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
                this.CompanyNet = this.orderData.CompanyNet,
                    this.IsWdj = this.orderData.IsWdj;
                this.IsLCar = this.orderData.IsLCar=='1'?'冷车':'不使用冷车';
                this.LCar = this.orderData.LCar||'';

            }


        },
        // watch: { //深度 watcher
        //     'isAllChecked': {
        //         handler: function(val, oldVal) {
        //             if (val.length === this.cargoMsg.length - 1) {
        //                 this.checked = true;
        //             } else {
        //                 this.checked = false;
        //             }
        //         },
        //         deep: true
        //     }
        // },

        methods: {
            //实现全选
            selectAll(){
                    var _this = this;
                    console.log(_this.checkedValue);
                    if (_this.isAllChecked) { //实现反选
                        _this.checkedValue = [];

                    } else { //实现全选
                        _this.checkedValue = [];


                        _this.cargoMsg.forEach(function(item, index) {

                            if (index > -1) {
                                _this.checkedValue.push(item.id);
                            }
                        });
                    }

                },


            //编辑reasgBiao
            reasgBiao(){
                this.islaomC=true
            },
            // 删除选中数据
            delCheckbox(){


                if((this.checkedValue).length==0){
                    this.$message.error("不能空删，请先选择数据！")
                }else{
                    // console.log(this.checkedValue);return;
                    // this.cargoMsg.forEach((item,index) => {

                        // if(this.checkedValue.indexOf(item.id) != -1){
                        //
                        //     this.cargoMsg.splice(index,1);
                        // }
                        for(var i=0;i<this.checkedValue.length;i++){
                            this.cargoMsg.forEach((item,index)=>{
                                if(item.id == this.checkedValue[i]){
                                    this.cargoMsg.splice(index,1);
                                }
                            })

                        }
                    // })
                    console.log(this.cargoMsg, '////////删除后');
                }
                if((this.cargoMsg).length==0){
                    this.isbioage2 =false;
                    this.islaomC=true

                }

                this.checkedValue = [];
                //
            },
            clearContent(){
                this.isDDD = true;
                this.islaomC=true;
                this.isbioage2 =false;
                this.isDisabled = false;
                this.isDisabled1 = false;

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

                this.cargoMsg = [];
                this.isbioage2 =false;

            },
            add(val,addIndex){
                this.cargoMsg.forEach((item,index)=>{
                    if(index == addIndex){
                        item.num = parseInt(item.num) + 1;

                    }

                })
                this.$forceUpdate();
            },
            prow(val,prowIndex){
                this.cargoMsg.forEach((item,index)=>{
                    if(index == prowIndex){
                        item.num = parseInt(item.num) - 1;
                        if(item.num==0){
                            this.cargoMsg.splice(index,1);
                        }
                        // if(item.num<0){
                        //     this.$message.error('数量不能为负值')
                        //     return false
                        // }
                        if((this.cargoMsg).length==0){
                            this.isbioage2 =false;
                            this.islaomC=true

                        }
                    }
                })
                this.$forceUpdate();
            },
            deleteInfor(index) { // 删除货物信息
                console.log(this.cargoMsg,9)
                // this.cargoMsg.forEach((item,index)=>{
                //     console.log(item.num,8)
                //     if(item.num==0){
                //         this.cargoMsg.splice(index);
                //     }
                // })
                let isClick = confirm("确定要删除吗？");
                if(isClick){
                    // this.cargoMsg.forEach((item,index)=>{
                    //     console.log(item.num,8)
                    //     if(item.num==0){
                    //         this.cargoMsg.splice(index);
                    //     }
                    // })
                    this.cargoMsg.splice(index,1);
                }
                if((this.cargoMsg).length==0){
                    this.isbioage2 =false;
                  this.islaomC=true

                }

            },
            savaManger(formName,formName2){
                this.$refs[formName].validate((valid) => {
                    this.$refs[formName2].validate((valid2) => {
                        this.$refs[formName2].validate((valid2) => {
                            if (valid) {
                                if(valid2){

                                    if(this.val==''||this.val2==''){
                                        this.$message.error('请选择省市区');
                                        return
                                    }
                                    // if(this.SName==''){
                                    //     this.$message.error('请选择收货编码');
                                    //     return
                                    // }
                                    if(this.showSearch == ''){
                                        this.$message.error('请选择货物类型');
                                        return;
                                    }
                                    if(this.searchData == ''){
                                        this.$message.error('请输入货物名称');
                                        return;
                                    };
                                    if(this.qujianTime == ''){
                                        this.$message.error('请输入要求取件时间');
                                        return;
                                    };
                                    if(this.LimitTime == ''&&this.LimitTime1 == ''){
                                        this.$message.error('请选择时限');
                                        return;
                                    };
                                    if(this.LimitTime == '其他'&&this.LimitTime1 == ''){
                                        this.$message.error('请输入其他时限');
                                        return;
                                    }


                                    if(this.SafeItem == ''){
                                        this.$message.error('请选择是否投保');
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
                                    if(this.IsLCar ==''){
                                        this.$message.error('请选择是否使用冷藏车');
                                        return;
                                    }
                                    if(this.IsLCar =='冷车'&& (this.LCar ==''||this.LCar=='null')){
                                         this.$message.error('冷藏费用必填');
                                        return;
                                    }

                                    if(this.ruleForm2.CountType=="现金"&&(this.OutPay==''||this.PayMoney=='')){
                                        this.$message.error('付款方式和付款费用必填');
                                        return;
                                    }
                                    if(this.ruleForm2.CountType=="月结"&&this.OutPay!==''){
                                        this.ruleForm2.CountType="现金"

                                        return;
                                    }
                                    this.ishwShow =true
                                    this. isShowN=false;
                                    if((this.cargoMsg).length==0){
                                        this.isbioage2=false;
                                        this.islaomC=true

                                    }else{
                                        this.isbioage2=true;
                                    }


                                }
                            }
                        })
                    })
                })
            },
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
                // 省市区
                if (this.val2 && this.val2.length == 3) {
                    //截取字符串
                    console.log(this.val2)
                    console.log(this.val2[1], 2);
                    console.log(this.val2[1].indexOf('市'), 3)
                    //this.city = this.val2[1].substring(0, this.val2[1].indexOf('市'));
                    this.city = this.val2[1];
                    let that = this;
                    that.$axios({
                        url: "http://out.ccsc58.cc/OMS/v1/public/index/orderdown/frommsg",
                        method: "post",
                        data: {
                            City: this.city,
                            AccountNumber: that.ruleForm2.accoutNum,
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

                            that.SNameArr = res.data.data;
                        } else {
                            that.$message.error(res.data.msg);
                            that.SNameArr=[];
                            that.SName = '';
                            that.ruleForm.GetCompany='';
                            that.ruleForm.GetName='';
                            that.ruleForm.GetTelephone='';
                            that.ruleForm.GetAddress='';
                        }
                    });
                }
            },

            /*  选择货物名称那个方法*/
            changeCompany(data) {
                (data);
                this.$refs.messageDrop.hide()
                this.showSearch = data;   // 选择的 那个
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

                      //  that.$message.error(res.data.msg)
                    }
                });
            },
            //changeOutpay()
            changeOutpay(){

                if(this.OutPay==""){

                    this.ruleForm2.CountType="月结"
                }else if(this.OutPay=="发件人"||this.OutPay=="收件人"){
                    console.log( this.ruleForm2.CountType,8888)
                   this.ruleForm2.CountType="现金"
                }
                // if(this.ruleForm2.CountType=="现金"&&(this.OutPay==''||this.PayMoney=='')){
                //     this.$message.error('付款方式和付款费用必填');
                //     return;
                // }
                // if(this.ruleForm2.CountType=="月结"&&this.OutPay!==''){
                //     this.ruleForm2.CountType="现金"
                //
                //     return;
                // }
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
                        that.LCar = res.data.data.LCar;
                    } else {
                        that.$message.error(res.data.msg)
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
                        that.$message.error(res.data.msg)


                        //that.ManMsg = {};
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
                this.isAllChecked=false;
                this.activeName = "first";
                this.isDDD = true;
                this.iceCar = [
                    {PackageType: "4.2m冷藏车", num: ""},
                    {PackageType: "7.6m冷藏车", num: ""},
                    {PackageType: "9.6m冷藏车", num: ""}
                ];
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
                        that.isDisabled = false;
                        that.isDisabled1=false;
                        if(that.cargoMsg.length>0){
                            res.data.data.forEach(item=>{
                                that.cargoMsg.forEach(item1=>{
                                    if(item1.WDQJ==val.WDQJ&&item1.PackageType==item.PackageType){
                                        item.num = item1.num;
                                        that.isDisabled1=true;
                                    }
                                })
                            })
                            that.iceCar.forEach(item2=>{
                                that.cargoMsg.forEach(item3=> {
                                    if (item3.WDQJ == val.WDQJ && item2.PackageType == item3.PackageType) {
                                        item2.num = item3.num;
                                        that.isDisabled = true;
                                    }
                                })
                            })
                        }
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
                var boxTypeNum = {};

                this.isbioage1=false;

                if(this.cargoMsg.length == 0){
                    this.$message.error('请选择温区和箱型')
                }else{
                     this.isDDD = false;
                     this.isufhhf =false;

                    this.isShow = true;
                    this.cargoMsg.forEach((item,index) => {
                        if(item.num == ''){
                            this.cargoMsg.splice(index,1);
                        }
                        if(boxTypeNum[item.WDQJ]==undefined){
                            boxTypeNum[item.WDQJ]=0;
                        }
                        boxTypeNum[item.WDQJ] = Number(boxTypeNum[item.WDQJ])+1;
                        if(Number(boxTypeNum[item.WDQJ])>3){
                            this.$message.error(item.WDQJ+'温区中选择箱型超过三个，请先修改');
                           // boxTypeNum = {}

                            this.isbioage2 =false;


                        }else {
                            this.isbioage2=true;

                        }
                    })

                    this.active = 1;
                    this.firstTitle = "进行中";
                    this.istemActive = -2;
                }
            },
            isNull(val, index, tem) {

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
                if(this.cargoMsg.length>0){
                    for(var i=0;i<this.cargoMsg.length;i++){

                        if(val.WDQJ==this.cargoMsg[i].WDQJ&&val.PackageType==this.cargoMsg[i].PackageType){
                            this.cargoMsg.splice(i, 1);
                        }
                    }
                    if(val.num!=''&&val.num!=0){
                        this.cargoMsg.push(val);
                    }
                }else{
                    if(val.num!=''&&val.num!=0){
                        this.cargoMsg.push(val);
                    }
                }

                this.cargoMsg.forEach((item,index)=>{
                    item.id = index;
                })
               // console.log(this.cargoMsg,'@@@@@@@aaaaa');
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
            },
            //点击预览出现弹框
            searchB(){

             //  console.log((this.savaManger('ruleForm','ruleForm2')==true),9)

                // this.savaManger('ruleForm','ruleForm2')
                if(this.val==''||this.val2==''){
                    this.$message.error('请选择省市区');
                    return
                }
                // if(this.SName==''){
                //     this.$message.error('请选择收货编码');
                //     return
                // }
                if(this.showSearch == ''){
                    this.$message.error('请选择货物类型');
                    return;
                }
                if(this.searchData == ''){
                    this.$message.error('请输入货物名称');
                    return;
                };
                if(this.qujianTime == ''){
                    this.$message.error('请输入要求取件时间');
                    return;
                };
                if(this.LimitTime == ''&&this.LimitTime1 == ''){
                    this.$message.error('请选择时限');
                    return;
                };
                if(this.LimitTime == '其他'&&this.LimitTime1 == ''){
                    this.$message.error('请输入其他时限');
                    return;
                }


                if(this.SafeItem == ''){
                    this.$message.error('请选择是否投保');
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
                if(this.IsLCar ==''){
                    this.$message.error('请选择是否使用冷藏车');
                    return;
                }
                if(this.IsLCar =='冷车'&& (this.LCar ==''||this.LCar=='null')){
                    this.$message.error('冷藏费用必填');
                    return;
                }
                // if(this.Note == ''){
                //     this.$message.error('请填写特殊需求');
                //     return;
                // }

                if(this.ruleForm2.CountType=="现金"&&(this.OutPay==''||this.PayMoney=='')){
                    this.$message.error('付款方式和付款费用必填');
                    return;
                }
                if(this.ruleForm2.CountType=="月结"&&this.OutPay!==''){
                    this.ruleForm2.CountType="现金"
                    this.$message.error('付款费用必填');
                    return;
                }
                this.addSendDetailsModel=true;
                let orderData = {
                    accoutNum: this.ruleForm2.accoutNum,
                    CountType: this.ruleForm2.CountType,
                    Company: this.ruleForm2.Company,
                    Manager: this.ruleForm2.Manager,
                    Cid2: this.ManMsg.Cid2,
                    XyNumber: this.ManMsg.XyNumber,
                    zxNumber: this.ManMsg.zxNumber,
                    Telephone: this.ruleForm2.Telephone,
                    SafeRate: this.ruleForm2.SafeRate,
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
                    LimitTime: this.LimitTime,
                    LimitTime1: this.LimitTime1,
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


                window.sessionStorage.setItem('orderData', JSON.stringify(orderData));
                this.orderData =JSON.parse(window.sessionStorage.getItem("orderData")) ;
                console.log(this.orderData.OutPay,9999222)
                // if(this.orderData.OutPay==''){
                //     this.orderData.OutPay=''
                // }else if(this.orderData.OutPay=='0'){
                //     this.orderData.OutPay='发件人'
                // }else{
                //     this.orderData.OutPay='收件人'
                // }
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


                // if(this.orderData.OutPay==''){
                //     this.orderData.OutPay=''
                // }else if(this.orderData.OutPay=='发件人'){
                //     this.orderData.OutPay='0'
                // }else if(this.orderData.OutPay=='收件人'){
                //     this.orderData.OutPay='1'
                // }
                this.OutPay = this.orderData.OutPay;
                //this.OutPay =this.orderData.OutPay;
                this.Cid2 = this.orderData.Cid2;
                this.XyNumber = this.orderData.XyNumber;
                this.searchData = this.orderData.searchData;
                this.PayMoney = this.orderData.PayMoney;
                this.Box = JSON.parse(JSON.stringify(this.cargoMsg));
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
                this.LimitTime = this.orderData.LimitTime=='其他'?this.orderData.LimitTime1+'H':this.orderData.LimitTime;
                this.SafeItem = this.orderData.SafeItem;
                // this.SafePay = this.orderData.SafePay
                this.SafeItem = this.orderData.SafeItem;
                this.SafePay = this.orderData.SafePay;
                this.CompanyNet = this.orderData.CompanyNet,
                    this.IsWdj = this.orderData.IsWdj;
                this.IsLCar = this.orderData.IsLCar;
                this.LCar = this.orderData.LCar;
            },
            //提交预览单
            submitFromContent(){
                this.newBox = JSON.parse(JSON.stringify(this.cargoMsg))  ;//401行还是对的
                console.log(this.newBox,9999999999);
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
                        LimitTime:this.LimitTime,//时限
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
                        IsLCar:this.IsLCar=='冷车'?"1":'',//	冷车费用
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
                    console.log(res,888)
                    if(res.data.code == 200){
                        that.xiadan = true;
                        that.addSendDetailsModel = false;
                        that.$message.success(res.data.msg)
                        setTimeout(() => {
                            that.xiadan = false;
                            that.$router.push({
                                path: "/OrderQuery",
                            })
                        }, 5000)
                    }else{
                        that.$message.error(res.data.msg)
                    }

                })
            },


        }
    };
</script>
<style>

</style>
<style scoped>
    /*.el-form-item__error {*/
    /*    color: #fff;!important*/
    /*font-size: 12px;*/
    /*    line-height: 1;*/
    /*    padding-top: 4px;*/
    /*    position: absolute;*/
    /*    top: 100%;*/
    /*    left: 0;*/
    /*}*/
    .el-form-item {
        margin-bottom: 20px !important;
    }
#biaogeBotom span{
    color:#00d1b2;
    padding: 10px;
    text-decoration: underline;

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

