<template>

    <div style="padding:20px;overflow-y: scroll;height:100%;">
        <div  v-loading="loading"  element-loading-text="拼命加载中" >
        <div style="display: flex;justify-content: space-between;">
            <div class="bo">
<!--                // :class="{boActive:isCur===index}" 这个 是 相等的话 添加class 不相等就不添加  -->
<!--                index    是数组的下标    isCur  是 用来比较的一个东西  点击的时候 isCur=index  会把点击的下标赋值给isCur 然后就好了 还能，那么写呢
                    这不是看着他们的炒一波 哦真牛逼   还是 网友厉害   那click逗号这么写是啥意思   index赋值给isCur    后边的  方法    这是个什么操作
                    这个方法   到时候  请求接口   ojk 这么说就明白了   完美 就这个意思   ojk非常优秀大哥
                    大哥
                   你这回车  按习惯了    是的   习惯了
                   在这么写下去我们要写一篇文章了
                   根本不慌  有注释  没问题

    -->
                <span v-for="(item,index) in staData" :key="index" :class="{boActive:isCur===index}" @click="isCur=index, changeSta(item.name)" v-model="c" >{{item.name}}</span>


            </div>
            <div class="bo1">
                <span>导入</span>
                <span @click="luruList">录入</span>
            </div>

        </div>
        <el-row >
            <el-col>
                <el-row :gutter="24">
                    <el-col :span="24" style="height: 80px; align-items: center;display: flex">
                            <el-dropdown trigger="click" :hide-on-click="false" @command="changeCompany" style="margin-right: 10px;" ref="messageDrop">
                                  <span class="el-dropdown-link" style="width:150px;">{{showSearch}}<i class="el-icon-arrow-down el-icon--right"></i>
                                  </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item command="公司名称">公司名称</el-dropdown-item>
                                    <el-dropdown-item command="客户账号">客户账号</el-dropdown-item>
                                    <el-dropdown-item command="货物类型">货物类型</el-dropdown-item>
                                    <el-dropdown-item command="订单号">订单号</el-dropdown-item>
                                    <el-dropdown-item command="运单号码">运单号码</el-dropdown-item>
                                </el-dropdown-menu>
                           </el-dropdown>
                          <input type="text" v-model="searchData">
                        <img src="../../assets/chaxun.png" alt="查询图标" style="margin-left: 10px;margin-top: 0px;width: 23px;
                        height: 23px;" @click="getTabelData">
                        <p style="margin:0 10px;    flex: 1;justify-content: flex-end;display: flex;font-family: cursive" @click="development" >更多操作 &nbsp<i  style="margin: 10px 0 0 0; " :class="sanja ? 'sanjiao' : 'sanjiao2'" ></i></p>
                    </el-col>
                    <el-col :span="24" style=" align-items: center;display: flex;margin: 0;" >
                        <el-form :inline="true" style="margin: 10px 0 0 0; " :class="isMeng ? 'isA' : 'isb'"  >
                            <el-row>
                                <el-col>
                                    <el-form-item label="下单时间"  style="margin-right: 30px;" >
                                        <div class="block"  >
                                            <el-date-picker
                                                v-model="xdtime"
                                                type="datetimerange"
                                                value-format="yyyy-MM-dd HH:mm:ss"
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期">
                                            </el-date-picker>
                                        </div>
                                    </el-form-item>
                                    <el-form-item label="取件时间">
                                        <div class="block" >
                                            <el-date-picker
                                                v-model="time"

                                                type="datetimerange"
                                                value-format="yyyy-MM-dd HH:mm:ss"
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期">
                                            </el-date-picker>
                                        </div>
                                    </el-form-item>
                                    <img src="../../assets/chongzhi.png" @click="refresh()"  alt="重置" style="margin-left: 10px;margin-top: 8px;width: 23px; height: 23px;">
                                </el-col>
                                <el-col>

                                    <el-form-item label="始发城市">
                                        <el-input v-model="City1"  style="width: 158px"></el-input>
                                    </el-form-item>
                                    <el-form-item label="目的城市 " style="margin-right: 30px;">
                                        <el-input v-model="GetCity1"  style="width: 158px"></el-input>
                                    </el-form-item>
                                    <el-form-item label="取件网络">
                                        <el-input v-model="CompanyNet" style="width: 158px"></el-input>
                                    </el-form-item>
                                    <el-form-item label="下单类型">
                                        <el-select v-model="OrderType"  style="width: 159px;">
                                            <el-option key="TMS" label="TMS" value="TMS"></el-option>
                                            <el-option key="APP " label="APP" value="APP"></el-option>
                                            <el-option key="WEB " label="WEB" value="WEB"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <img src="../../assets/chaxun.png" @click="getData" alt="查询图标" style="margin-left: 10px;margin-top: 8px;width: 23px; height: 23px;">

                                </el-col>
                            </el-row>
                        </el-form>


                    </el-col>
                    <el-col>
                        <el-table
                            :header-cell-style="{background:'#EFF3F8'}"
                            stripe
                            row-key="id"
                            height="500"
                            @cell-click="jumpDetails"
                            @expand-change ="rowClick"
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column type="expand">
                                <template slot-scope="props">
                                   <el-row :gutter="24">
                                       <el-col :span="13" >
                                           <h4 style="border-left: 4px solid #45A2DF">  &nbsp&nbsp订单信息：</h4>
                                              <el-row :gutter="24">
                                                  <el-col :span="12" >
                                                      <div class="bioage">
                                                          <span>始发地：{{Depart}}-{{City}}</span>
                                                           <span>录入人：{{entryname}}</span>
                                                      </div>
                                                      <div class="bioage">
                                                          <span>目的地：{{GetDepart}}-{{GetCity}}</span>

                                                          <span>取件人：{{GetName}}</span>
                                                      </div>
<!--                                                      <div class="bioage">-->
<!--                                                          <span>温度区间：<span style="background: #eee;padding:5px 25px;border-radius: 5px;">155</span> <span style="background: #eee;padding:5px 25px;border-radius: 5px;">155</span><span style="background: #eee;padding:5px 25px;border-radius: 5px;">155</span></span>-->


<!--                                                      </div>-->
<!--                                                      <div  class="bioage">-->
<!--                                                          <span>包材选择：<span style="background: #eee;padding:5px 25px;border-radius: 5px;">155</span> <span style="background: #eee;padding:5px 25px;border-radius: 5px;">155</span><span style="background: #eee;padding:5px 25px;border-radius: 5px;">155</span></span>-->

<!--                                                      </div>-->
<!--                                                      <div  class="bioage">-->
<!--                                                          <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp件数：<span style="background: #eee;padding:5px 25px;border-radius: 5px;">155</span> <span style="background: #eee;padding:5px 25px;border-radius: 5px;">155</span><span style="background: #eee;padding:5px 25px;border-radius: 5px;">155</span></span>-->

<!--                                                      </div>-->



                                                        <!-- <table>
                                                            <tr>
                                                                <th>温度区间</th>
                                                                <th>包材</th>
                                                                <th>个数</th>
                                                            </tr>
                                                            <tbody>
                                                                <tr>
                                                                    <td>2-8</td>
                                                                    <td>30</td>
                                                                    <td>2</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2-8</td>
                                                                    <td>60</td>
                                                                    <td>3</td>
                                                                </tr>

                                                            </tbody>
                                                        </table> -->
                                                      <div v-for="(item,index) in Box" :key="index" style="margin:20px 0">
                                                          <span style='padding:0px 0;font-size:14px'>温度箱型：<font style="background: rgb(238, 238, 238); padding: 5px 5px;border-radius: 5px;">{{index}}</font></span>

                                                              <span v-for="(item,k) in Box[index]" :key="k" >
                                                                  <span style="margin: 20px 0"><font style="">&nbsp&nbsp{{item.PackageName}}*{{item.Jian}}</font></span>
<!--                                                                  <p style="margin: 20px 0">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp件数:&nbsp&nbsp<font style="background: rgb(238, 238, 238); padding: 5px 25px;border-radius: 5px;">{{item.Jian}}</font></p>-->
                                                              </span>

                                                      </div>
                                                      <div  class="bioage">
                                                          <span>货物尺寸：
                                                              <span style="background: #eee;padding:5px 25px;border-radius: 5px;">155</span>
                                                              <!-- <span style="background: #eee;padding:5px 25px;border-radius: 5px;">155</span> -->
                                                              <!-- <span style="background: #eee;padding:5px 25px;border-radius: 5px;">155</span> -->
                                                            </span>

                                                      </div>
                                                      <div  class="bioage">
                                                          <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp重量：<span style="background: #eee;padding:5px 25px;border-radius: 5px;">155</span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp温度计: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span style="background: #eee;padding:5px 25px;border-radius: 5px;">155</span></span>

                                                      </div>
                                                      <div  class="bioage">
                                                          <span>&nbsp&nbsp&nbsp&nbsp冷藏车：<span style="background: #eee;padding:5px 25px;border-radius: 5px;">155</span> </span>

                                                      </div>
                                                      <div  class="bioage">
                                                          <span>结算方式：<span style="background: #eee;padding:5px 25px;border-radius: 5px;">{{PayWay}}</span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp保险: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span style="background: #eee;padding:5px 25px;border-radius: 5px;">{{SafeMoney}}</span></span>

                                                      </div>




                                                  </el-col>
                                                  <el-col :span="11" :offset="1" >
<!--                                                      <div class="bioage" style="color: #fff">-->
<!--                                                           无-->
<!--                                                      </div>-->
                                                      <div class="bioage">
                                                          <span>下单类型：客户下单</span>

                                                      </div>
                                                      <div class="bioage">
                                                          <span>通知方式：客户下单</span>

                                                      </div>
                                                      <div  class="bioage">
                                                          <span>是否完成：<span style="background: #eee;padding:5px 25px;border-radius: 5px;">是</span><span style="background: #eee;padding:5px 25px;border-radius: 5px;">2019/5/12</span></span>

                                                      </div>
                                                      <div  class="bioage">
                                                          <span>指令取消：<span style="background: #eee;padding:5px 25px;border-radius: 5px;">天气原因</span><span style="background: #eee;padding:5px 25px;border-radius: 5px;">2019/5/12</span></span>

                                                      </div>
                                                      <div  class="bioage">
                                                          <span>指令完成：<span style="background: #eee;padding:5px 25px;border-radius: 5px;">1110556</span><span style="background: #eee;padding:5px 25px;border-radius: 5px;">2019/5/12</span></span>

                                                      </div>
                                                      <div  class="bioage">
                                                          <span>下单时间：<span style="background: #eee;padding:5px 25px;border-radius: 5px;">{{Indate}}</span></span>

                                                      </div>
                                                      <div  class="bioage">
                                                          <span>取件时间：<span style="background: #eee;padding:5px 25px;border-radius: 5px;">2018年12月5日</span></span>

                                                      </div>
                                                      <div  class="bioage">
                                                          <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp备注：<span style="background: #eee;padding:5px 25px;border-radius: 5px;">{{note1}}</span></span>

                                                      </div>

                                                  </el-col>
                                              </el-row>



                                       </el-col>
                                       <el-col :span="10" :offset="1" >
                                            <h4 style="border-left: 4px solid #45A2DF">  &nbsp&nbsp客户信息：</h4>
                                           <div class="bioage">
                                               <span>公司名称：{{Company}}</span>
                                           </div>
                                           <div class="bioage">
                                               <span>联系人：{{Manager}}</span>
                                               <span>科室：{{DepartMent}}</span>
                                           </div>
                                           <div class="bioage">
                                               <span>联系电话：{{Telephone}}</span>
                                               <span>城市、区域：北京</span>
                                           </div>
                                           <div class="bioage">
                                               <span>详细地址：{{Address}}</span>
                                           </div>
                                           <h4 style="border-left: 4px solid #45A2DF">  &nbsp&nbsp收件人信息：</h4>
                                           <div class="bioage">
                                               <span>公司名称：{{GetCompany}}</span>
                                           </div>
                                           <div class="bioage">
                                               <span>联系人：</span>
                                               <span>科室：</span>
                                           </div>
                                           <div class="bioage">
                                               <span>联系电话：{{GetTelephone}}</span>
                                               <span>城市、区域：{{GetArea}}</span>
                                           </div>
                                           <div class="bioage">
                                               <span>详细地址：{{GetAddress}}</span>
                                           </div>
                                       </el-col>
                                   </el-row>

                                </template>
                            </el-table-column>
<!--                            <el-table-column-->
<!--                                type="index"-->
<!--                                label="序号"-->
<!--                                width="45">-->
<!--                            </el-table-column>-->
                            <el-table-column
                                label="订单号"
                                width="100"
                                prop="id"
                                align="center"
                            >
                            </el-table-column>
                            <el-table-column
                                label="货物类型"
                                align="center"

                                prop="BusinessType">
                            </el-table-column>
                            <el-table-column
                                label="货物名称"
                                align="center"

                                prop="CargoName">
                            </el-table-column>
                            <el-table-column
                                label="客户账号"
                                align="center"

                                prop="AccountNumber">
                            </el-table-column>
                            <el-table-column
                                label="收件人"
                                align="center"
                                prop="GetName">
                            </el-table-column>
                            <el-table-column
                                class-name="curstomNum"
                                label-class-name="aaa"
                                label="要求取件时间"
                                align="center"
                                prop="OrderTime"
                                :show-overflow-tooltip="true"
                               >
                            </el-table-column>
                            <el-table-column
                                align="center"
                                label="时限"

                                prop="LimitTime">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                label="是否到付"

                                prop="">
                                <template slot-scope="scope" >
                                    <span class='work' v-if="scope.row.OutPay == '0'"> 否</span>
                                    <span class='fire' v-if="scope.row.OutPay == '1'" >到付</span>
                                </template>
                            </el-table-column>

                            <el-table-column
                                class-name="curstomNum"
                                label-class-name="aaa"
                                label="是否通知"
                                align="center">
                                <template slot-scope="scope" >
                                    <span class='work' v-if="scope.row.OutPay == '1'"> 是</span>
                                    <span class='fire' v-if="scope.row.OutPay == '0'" ><img src="../../assets/laba.png" alt=""></span>
                                </template>
                            </el-table-column>
                            <el-table-column

                                label="订单状态"
                                align="center"
                                prop="Condition">
                            </el-table-column>
<!--                            <el-table-column-->
<!--                                label="录入人"-->
<!--                                align="center"-->
<!--                                prop="lururen">-->
<!--                            </el-table-column>-->
                            <el-table-column
                                label="下单方式"

                                align="center"
                                prop="downType">
                            </el-table-column>
                            <el-table-column

                                align="center"
                                label="取件网络"
                                prop="NetCity">
                            </el-table-column>
<!--                            <el-table-column-->
<!--                                label="取件人"-->
<!--                                align="center"-->
<!--                                prop="qujianren">-->
<!--                            </el-table-column>-->
                            <el-table-column
                                align="center"
                                label="操作">
                                <template slot-scope="scope">
                                    <el-button  size="small"  style="color: #1ab394;border: 1px solid #1ab394" plain @click="oneMoreOrder(scope.row)">再一单</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col>

                </el-row>
            </el-col>
        </el-row>
        <div class="pagination">
            <el-pagination

                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-sizes="[20,50, 100, 500, 2000]"
                :page-size="20"
                :current-page='cur_page'
                layout="total, sizes, prev, pager, next, jumper"
                :total="ccc"
            ></el-pagination>
        </div>
        </div>
<!--        //点击取件时间出来的弹框-->
        <el-dialog
            title="修改取件时间"
            :visible.sync="allotDialogVisible1"
            width="20%">
            <div>
                <div class="block" >
                    <el-date-picker
                        v-model="value1"
                        type="datetime"

                        style="width:100%"
                        placeholder="选择日期时间">s
                    </el-date-picker>
                </div>
                <el-form ref="form" label-width="80px" style="margin:10px 0 0 0">
                    <el-form-item label="原因类型">
                        <el-select v-model="region" placeholder="请选择">
                            <el-option label="客户原因" value="客户原因"></el-option>
                            <el-option label="内部原因" value="内部原因"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="内容描述">
                        <el-input type="textarea"  ></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                 <el-button type="primary" size="mini" >save</el-button>
                  <el-button @click="allotDialogVisible1 = false">取 消</el-button>
            </span>
        </el-dialog>
<!--        点击是否通知-->
        <el-dialog
            title="请录入通知方式"
            :visible.sync="tongzhiFangshi"
            width="20%">
            <div>

                <el-form ref="form"  style="margin:10px 0 0 0">

                    <el-form-item >
                        <el-input></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                 <el-button type="primary" size="mini" >save</el-button>
            </span>
        </el-dialog>
<!--        //quxiao-->
        <el-dialog
            title="确定要取消订单？"
            :visible.sync="quxiaoFangshi"
            width="20%">
            <div>

                <el-form ref="form" label-width="80px" style="margin:10px 0 0 0">
                    <el-form-item label="原因类型">
                        <el-select v-model="CityCode" placeholder="请选择">
                            <el-option label="客户原因" value="客户原因"></el-option>
                            <el-option label="内部原因" value="内部原因"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="内容描述">
                        <el-input type="textarea"  v-model="neirong" ></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                 <el-button type="primary" size="mini" @click="cacelOrder()" >save</el-button>
                 <el-button @click="quxiaoFangshi = false">取 消</el-button>
            </span>
        </el-dialog>
    </div>

</template>

<script>
    export default {
        name: "orderManagement",
        data() {
            return {
                showSearch:"订单号",
                searchData: "",
                Box:'',
                c:'',
                value1:'',
                cur_page: 1,//当前页
                limit: 20, //每页多少条
                ccc: 0, //总tiao数
                staData: [{name:"所有"},{name:"指令下达"},{name:"指令取消"},{name:"已安排"},{name:"取件完成"}],
                currentSta:"",
                isCur: 0,
                xdtime:'',//下单时间
                BeginTime:'',
                EndTime:'',
                neirong:'',
                sanja:false,
                time:'',//取件时间
                CityCode:'',
                BeginOrderTime:'',
                EndOrderTime:'',
                region:'',Startcity:'',
                Endcity:'',
                internet:'',
                isMeng: false,
                tongzhiFangshi:false,
                quxiaoFangshi:false,
                tableData: [],
                City1:'',//始发城市
                GetCity1:'',//目的城市
                CompanyNet:'',//取件网络
                OrderType:'',//下单类型
                allotDialogVisible1:false,
                loading:true,
                Depart:'',
                City:'',
                entryname:'',
                GetCity:'',
                GetDepart:'',
                GetName:'',
                PayWay:'',
                SafeMoney:'',
                Condition:'',
                Indate:'',
                note1:'',
                Company:'',
                Manager:'',
                DepartMent:'',
                Telephone:'',
                Address:'',
                GetCompany:'',
                GetTelephone:'',
                GetArea:'',
                GetAddress:''


            }
        },
        mounted(){
            this.company = window.sessionStorage.getItem('compony');
            this.getData();
        },

        methods:{
            oneMoreOrder(row){
                    console.log(row.AccountNumber,'我是传入');
                    this.$router.push({
                        path: "/OrderEntry",
                        query: { AccountNumber: row.AccountNumber }
                    });

            },





            changeCompany(data){
                 console.log(data);
                this.$refs.messageDrop.hide()
                this.showSearch = data;   // 选择的 那个
            },
            getTabelData(){
                // console.log(this.showSearch,this.searchData);
                this.cur_page = 1;
                this.getData();

            },
            //重置
            refresh(){
                this.loading = true;
                this.xdtime ='';
                this.time = '';
                this.OrderType='';
                this.City1='';
                this.GetCity1 ='';
                this.CompanyNet='';
                this.searchData ='',
                this.getData();
                this.loading = false;

            },
            //表格展开详细
            rowClick(row, event, column){

                let _this = this;
                _this.$axios({
                    url:'http://out.ccsc58.cc/OMS/v1/public/index/ordermanagement/orderOne',
                    method:'post',
                    data:{
                        Company:this.company,
                        id:row.id
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

                }).then(function (res) {
                    _this.Box = res.data.data.Box;

                    _this.Depart =res.data.data.Depart;
                    _this.City = res.data.data.City;
                    _this.entryname =res.data.data.entryname;
                    _this.GetDepart =res.data.data.GetDepart;
                    _this.GetCity = res.data.data.GetCity;
                    _this.GetName = res.data.data.GetName;
                    _this.PayWay = res.data.data.PayWay;
                    _this.SafeMoney = res.data.data.SafeMoney;
                    _this.Condition = res.data.data.Condition
                    _this.Indate =res.data.data.Indate;
                    _this.note1 =res.data.data.note1;
                    _this.Company = res.data.data.Company;
                    _this.Manager = res.data.data.Manager;
                    _this.DepartMent = res.data.data.DepartMent;
                    _this.Telephone = res.data.data.Telephone;
                    _this.Address = res.data.data.Address;
                    _this.GetCompany =res.data.data.GetCompany;
                    _this.GetTelephone = res.data.data.GetTelephone;
                    _this.GetArea = res.data.data.GetArea;
                    _this.GetAddress = res.data.data.GetAddress;



                })
            },
            //渲染表格数据
            getData(){
                let _this = this;
                _this.$axios({
                    url:'http://out.ccsc58.cc/OMS/v1/public/index/ordermanagement/orderQuery',
                    method: "post",
                    data: {
                        PageSize:this.limit,
                        Page: this.cur_page,//当前页码
                        Company:this.company,
                        BeginTime: this.xdtime[0] || '',//下单开始时间
                        EndTime: this.xdtime[1] || '', //下单结束时间
                        BeginOrderTime:this.time[0]||'',//取件开始时间
                        EndOrderTime:this.time[1]||'',//取件结束时间
                        OrderType:this.OrderType,//下单类型
                        City:this.City1,//始发城市
                        GetCity: this.GetCity1,//目的城市
                        CompanyNet: this.CompanyNet,//取件网络
                        Condition: this.currentSta,
                         StateKey: this.showSearch,
                        StateValue: this.searchData

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
                    _this.loading = false
                    _this.tableData = res.data.data.result;
                    _this.ccc = res.data.data.count;
                })


            },
            handleSizeChange(val) {
                this.loading = true;

                // console.log(val); // 每页显示  条数
                this.limit = val;
                this.getData();
            },
            handleCurrentChange(val) {
                this.loading = true;
                this.cur_page = val;
                this.getData();
            },
            cacelOrder(){

                let _this = this;

                this.id = window.sessionStorage.getItem('id')
                _this.$axios({
                    url:'http://out.ccsc58.cc/OMS/v1/public/index/ordermanagement/cancel',
                    method: "post",
                    data: {
                        entryname:this.entryname,
                        id:this.id,
                        Company:this.company,
                        CityCode:this.CityCode,
                        Note :this.neirong

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
                    if (res.data.code == 200) {
                        _this.$message.success("取消成功")
                        _this.quxiaoFangshi = false;
                        _this.getData()
                    } else {
                        _this.$message.error(res.data.msg);
                    }
                })
            },
            //点击表格里边td的时候
            jumpDetails(row,column,cell,event){

                if(column.label == '要求取件时间'){


                    this.allotDialogVisible1=true
                }else if(row.istz == "否"){
                   this.tongzhiFangshi =true
                }

                if(row.Condition == '指令下达'){

                    this.quxiaoFangshi = true;
                    window.sessionStorage.setItem('id',row.id);



                }
            },

            luruList(){
                this.$router.push({
                path: "/OrderEntry",

            });

            },
            //指令状态的操作
            changeSta(val){
                // 点击谁  就给谁加class   zajia  不会了
                // console.log(val)
                this.cur_page = 1;
                if(val  === "指令下达"){
                    this.currentSta = '指令下达';
                }
                else if(val ==="指令取消"){
                    this.currentSta = '指令取消';
                }else if(val=="已安排"){
                    this.currentSta = '已安排';
                }else if(val==="取件完成"){
                    this.currentSta = '取件完成';
                }else if(val==="所有"){
                    this.currentSta = '';
                }
                this.getData();

            },
            development(){

                this.isMeng=!this.isMeng
                this.sanja = !this.sanja



            },


        }
    }

</script>
<style>
    .el-dialog__body {
    padding: 10px 20px 0;
    color: #606266;
    font-size: 14px;
}

    .el-input__inner{
        height:35px;
    }
    .el-dialog__title {
        line-height: 16px;
        font-size: 18px;
        color: #303133;
        font-weight: 800;
        font-family: cursive;
    }
    .el-form-item {
        margin-bottom: 15px;
    }

    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
    /*.el-table th, .el-table tr {*/
    /*    background-color: #eee;*/
    /*}*/
    .el-table--striped .el-table__body tr.el-table__row--striped td {
        background: #F9FAFD;
    }
    .el-table .cell{
        font-size: 10px;
    }

    .curstomNum:not(.aaa) .cell {
        color: #649EFE !important;

    }
    .curstomNum:not(.aaa) .cell:hover {
        cursor: pointer;
    }
</style>
<style scoped>
    .bioage{
        margin:20px 0
    }
    .bioage span{
        margin-right: 20px;
    }
    .bo{
        background: #fff;
        /*border: 1px solid #dcdfe6;*/
        /*-webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);*/
        /*box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);*/
        display: flex;
        align-items: center;

    }
    .isA{
        display: block;
    }
    .isb{
        display: none;
    }
    .sanjiao{
        width: 0;
        border-width: 7px;
        border-style: solid;
        border-color: #666 transparent transparent transparent;

        position: relative;


    }
    .sanjiao2{
        width: 0;
        border-width: 7px;
        border-style: solid;
        border-color:  transparent transparent #666 transparent ;

        position: relative;
        top:-10px;
    }
    input{
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);

    }
    .bo1{
        flex:1;
        border-bottom: 1px solid #eee;
        background: #fff;
        align-items: center;
        justify-content: flex-end;
        display: flex;
    }
    .bo1 span{
        padding:15px;
        font-family: cursive;
    }
    .bo span{
        padding: 15px;
        border-bottom: 1px solid #eee;
        font-family: cursive;
    }
    .bo span:hover{
        cursor: pointer;
    }
    .bo span:first-of-type{
        padding: 15px 30px;
        border-left: none;
    }
    .boActive{
        border-right:1px solid #45A2DF;
        border-left: 1px solid #45A2DF;
        border-bottom: none!important;
        background: #45A2DF!important;
        color: #fff;
        cursor: pointer;
    }

    .fire{
        /*width:15px;*/
        /*height:15px;*/
        /*background: green;*/
        /*border-radius: 50%;*/
        /*display: inline-block;*/
        /* background-image: url("../../assets/laba.png"); */
        /* width: 15px; */
        /* height: 15px; */
        /* background: green; */
        /* border-radius: 50%; */
        /* display: inline-block; */
        /* width:21px;
        height: 21px;
        display: block;
        background-repeat: no-repeat;
        position: relative;
        left: 46px; */

    ;
    }
</style>
