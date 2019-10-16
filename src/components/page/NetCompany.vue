<template>

	<div class="divBut">
	  <div v-loading="loading"  element-loading-text="拼命加载中" >
		<div class="title">
			<h2 style="border-left: 4px solid #45A2DF;font-family: cursive;margin:10px 0 15px">&nbsp{{netcompany}}</h2>
			<!--<h3>中集冷云北京分公司</h3>-->
		</div>
		<el-form :inline="true" class="demo-form-inline">
			<el-row>
				<el-col>
					<!--<el-form-item label="下单时间">
						<el-date-picker v-model="OrderTime" type="datetime" style="width:200px" placeholder="选择日期时间">
						</el-date-picker>
					</el-form-item>-->
					<el-form-item label="客户账号">
						<!--<el-autocomplete class="inline-input" v-model="acount" placeholder="请输入内容" :trigger-on-focus="false" :debounce=0></el-autocomplete>-->
						 <el-input
                            class="inline-input"

                            v-model="acount"
                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            :debounce=0

                        ></el-input>
					</el-form-item>
					<el-form-item label="订单状态" >
						<el-select v-model="orderstate">
							<el-option key="all" label="全部" value="全部"></el-option>
							<el-option key="bbk" label="指令下达" value="指令下达"></el-option>
							<el-option key="xtc" label="指令取消" value="指令取消"></el-option>
							<el-option key="yap" label="已安排" value="已安排"></el-option>
							<el-option key="qjw" label="取件完成" value="取件完成"></el-option>
						</el-select>
					</el-form-item>

					<el-form-item label="下单方式">
						<el-select v-model="orderType" >
							<el-option key="bbk" label="TMS" value="TMS"></el-option>
							<el-option key="xtc" label="APP" value="APP"></el-option>
							<el-option key="imoo" label="WEB" value="WEB"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="结算方式">
						<el-select v-model="paytype">
							<el-option key="bbk" label="月结" value="月结"></el-option>
							<el-option key="xtc" label="现金" value="现金"></el-option>
						</el-select>
					</el-form-item>
					<div style="float: right">
						<img src="../../assets/chaxun.png" alt="" style="width: 23px;height: 23px" @click="getData">
						<img src="../../assets/daochu.png" alt="" style="margin: 0 30px;width: 23px;height: 23px" @click="dataExport">
						<img src="../../assets/chongzhi.png" alt="" style="width: 23px;height: 23px" @click="Reset">

					</div>
				</el-col>

			</el-row>
		</el-form>
		<div style="background:#fff;padding: 10px;border-radius: 10px">
			<el-row>

				<el-col>
					<el-table :header-cell-style="{background:'#EFF3F8'}" stripe :data="tableData" height="400"  style="width: 100%;" id='tableData'>
						<el-table-column type="selection" width="55">
						</el-table-column>
						<el-table-column label="客户账号" prop="AccountNumber" align="center">
						</el-table-column>
						<el-table-column label="订单号" align="center" prop="ID">
						</el-table-column>
						<el-table-column label="货物名称" align="center" prop="CargoName">
						</el-table-column>
						<el-table-column label="下单时间" align="center" prop="Indate"  :show-overflow-tooltip="true">
						</el-table-column>
						<el-table-column label="要求取件时间" align="center" prop="OrderTime" :show-overflow-tooltip="true">
						</el-table-column>

						<el-table-column align="center" label="时限" prop="LimitTime">
						</el-table-column>
						<el-table-column align="center" label="订单状态" prop="Condition">
						</el-table-column>

						<el-table-column label="下单方式" align="center" prop="OrderWay">
						</el-table-column>
						<el-table-column label="结算方式" align="center" prop="PayWay">
						</el-table-column>
						<el-table-column align="center" label="录入人" prop="entryname">
						</el-table-column>

						<el-table-column align="center" label="详情">
							<template slot-scope="scope">
								<el-button size="small" style="color: #1ab394;border: 1px solid #1ab394" plain @click.native.prevent="Orderdetail(scope.row)">详情</el-button>
							</template>
						</el-table-column>
					</el-table>
				</el-col>
			</el-row>
			<div class="pagination">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[20,50, 100, 500, 2000]" :page-size="20" :current-page='cur_page' layout="total, sizes, prev, pager, next, jumper" :total="ccc"></el-pagination>
			</div>
          </div>
		</div>
		<el-dialog title="订单详情" :visible.sync="EditDetailsModel"  style="border-bottom: 1px solid #CCCCCC;font-family: cursive;">
			<div class="container" style="font-family: cursive;" id='pdfDom'>
				<el-row style="display: flex;justify-content: space-between;align-items: center;margin-bottom: 5px;">

					<div style="flex: 1;justify-content:flex-start;align-items: center;">
						<span style="font-family: cursive;">客户账号:</span>
						<span>{{countNum}}</span>
					</div>
					<div style="justify-content:flex-end;align-items: center;">
						<span>录入人:</span>
						<span>{{inputperson}}</span>
					</div>
				</el-row>
				<el-row style='border: 1px solid #ccc;'>
					<el-col :span="12" style='border-right: 1px solid #ccc;'>
						<div class="grid-content">
							<span>订单号:</span>
							<span>{{orderID}}</span>
						</div>
						<div class="grid-content" style="margin:10px 0px;display: flex;justify-content:center; align-items: center;text-align: center;">
							<h2>{{sendCity}}</h2>
							<!--<span style="margin: 0 15px;">></span>-->
							<img src="../../assets/jiantou.png" alt="" style="width: 30px;margin: 0 10px;">
							<h2>{{getCity}}</h2>
						</div>
						<div class="grid-content" style="text-align: center;">
							<span style="color: #1c64c6;">感谢支持中集冷云，期待为您服务~</span>
						</div>
					</el-col>
					<el-col :span="12" style="font-size: 16px;">
						<!--<div class="grid-content">
							始发地：<span>{{sendDepart}}</span>-<span>{{sendCity}}</span>
						</div>
						<div class="grid-content">
							目的地：<span>{{getDepart}}</span>-<span>{{getCity}}</span>
						</div>
						<div class="grid-content">
							订单状态：<span>{{orderstate}}</span>
						</div>-->
						<div>
							<div class="grid-content" style="position: relative;">
							寄件方：<span>{{sendName}}</span><span style="position: absolute;right: 50px;">{{sendTel}}</span>
							</div>
							 <div class="grid-content" style="">详细地址：<span>{{sendAddress}}</span></div>
							</div>

						<div>
							<div class="grid-content" style="position: relative;">
							收件方：<span>{{getName}}</span>
							<span style="position: absolute;right: 50px;">{{getTel}}</span>
						</div>
						<div class="grid-content" style="">详细地址：<span>{{getAddress}}</span></div>
						</div>
					</el-col>
				</el-row>
				<!--<el-row class='linkinfo'>
					<el-col :span="24" style="border:1px solid #CCCCCC;border-top: none;display: flex;align-items: center;">
						<div class="grid-content" style="width:50%;justify-content: flex-start;">
							寄件方：<span>{{sendName}}</span><span style="margin-left: 10px;">{{sendTel}}</span><span style="margin-left: 10px;">{{sendCompany}}</span>
						</div>
						<div class="grid-content" style="width:50%;justify-content: flex-end;">详细地址：<span>{{sendAddress}}</span></div>
					</el-col>
				</el-row>

				<el-row class='linkinfo'>
					<el-col :span="24" style="border:1px solid #CCCCCC;border-top: none;display: flex;align-items: center;">
						<div class="grid-content" style="width:50%;justify-content: flex-start;">
							收件方：<span>{{getName}}</span>
							<span style="margin-left: 10px;">{{getTel}}</span><span style="margin-left: 10px;">{{getCompany}}</span>
						</div>
						<div class="grid-content" style="width:50%;justify-content: flex-end;">详细地址：<span>{{getAddress}}</span></div>
					</el-col>
				</el-row>-->
				<el-row style='border: 1px solid #ccc;border-top: none;'>
					<el-col :span="12" style='border-right: 1px solid #ccc;'>
						<div class="grid-content">
							<span>货物类型:</span>
							<span>{{goodType}}</span>
						</div>
						<!--<div class="grid-content">
							<span>货物尺寸:</span>
							<span>{{goodSize}}</span>
						</div>-->
						<div class="grid-content">
							<span>温度及使用:</span>
							<span>{{isWdj}}</span>
						</div>
						<div class="grid-content">
							<span>保险:</span>
							<span>{{isSafe}}</span> ，
							<span>{{safePay}}</span>
						</div>
						<div class="grid-content">
							<span>结算方式:</span>
							<span>{{payway}}</span>
						</div>

					</el-col>
					<el-col :span="12">
						<div class="grid-content">
							<span>产品名称:</span>
							<span>{{goodName}}</span>
						</div>
						<!--<div class="grid-content">
							<span>重量:</span>
							<span>{{goodWight}}</span>
						</div>-->
						<div class="grid-content">
							<span>通知方式:</span>
							<span></span>
							<span></span>
						</div>
						<!--<div class="grid-content">
							<span>处理情况:</span>
							<span></span>
							<span></span>
						</div>-->
						<div class="grid-content">
							<span>下单时间:</span>
							<span>{{ordertimer}}</span>
						</div>
					</el-col>
				</el-row>
				<el-row class='linkinfo' style='text-align: center;border: 1px solid #CCCCCC;border-top:none ;'>
					<el-col :span="6" style='border-right: 1px solid #CCCCCC;'>
						<div class="grid-content" style="background: #f1f8fc;">温度区间</div>
					</el-col>
					<el-col :span="6" style='border-right: 1px solid #CCCCCC;'>
						     <div v-for="(value, key, index) in boxs" >

						     	<span v-if="index==0">{{key}}℃</span>
                             </div>

					</el-col>
					<el-col :span="6" style='border-right: 1px solid #CCCCCC;height: 25px;'>
						     <div v-for="(value, key, index) in boxs" >

						     	<span v-if="index==1">{{key}}℃</span>
                             </div>

					</el-col>
					<el-col :span="6" style='border-right: 1px solid #CCCCCC;'>
						     <div v-for="(value, key, index) in boxs" >

						     	<span v-if="index==2">{{key}}℃</span>
                             </div>

					</el-col>
					<!--<el-col :span="6" style='border-right: 1px solid #CCCCCC;'>
						<div class="grid-content">-90℃~-40℃</div>
					</el-col>-->
					<!--<el-col :span="6" style='border-right: 1px solid #CCCCCC;'>
						<div class="grid-content">-20℃~-10℃</div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content">2℃~8℃</div>
					</el-col>-->
				</el-row>
				<el-row class='linkinfo' style='text-align: center;border: 1px solid #CCCCCC;border-top:none ;'>
					<el-col :span="6" style='border-right: 1px solid #CCCCCC;height: 80px;background: #f1f8fc;'>
						<div class="grid-content" style="">保温箱型</div>
					</el-col>
					<el-col :span="6" style='border-right: 1px solid #CCCCCC;height: 80px;'>
						<!--<div class="grid-content"><span>GB(小)</span> * <span>1</span></div>
						<div class="grid-content"><span>GB(大)</span> * <span>1</span></div>
						<div class="grid-content"><span>自备包材</span> * <span>1</span></div>-->
						 <div v-for="(value, key, index) in boxs" class="grid-content">
						     	<!--<span v-if="index==0">{{value.PackageName}}</span> * <span>{{value.Jian}}</span>-->
						     	<span v-if="index==0">
						     		 <div v-for="(value1, key1) in value" class="grid-content">
								     	<span v-if="index==0">{{value1.PackageName}}</span> * <span style="color: #1c84c6;">{{value1.Jian}}</span>
								     <!--	<span v-if="index==0">{{value1}}</span>-->
		                             </div>
						     	</span>
                             </div>
					</el-col>
					<el-col :span="6" style='border-right: 1px solid #CCCCCC;height: 80px;'>
						 <div v-for="(value, key, index) in boxs" class="grid-content">
						     	<!--<span v-if="index==0">{{value.PackageName}}</span> * <span>{{value.Jian}}</span>-->
						     	<span v-if="index==1">
						     		 <div v-for="(value, key) in value" class="grid-content">
								     <span>{{value.PackageName}}</span> * <span style="color: #1c84c6;">{{value.Jian}}</span>

		                             </div>
		                             <!--<span >{{value}}</span>-->
						     	</span>
                             </div>
					</el-col>
					<el-col :span="6">
						 <div v-for="(value, key, index) in boxs" class="grid-content">
						     	<!--<span v-if="index==0">{{value.PackageName}}</span> * <span>{{value.Jian}}</span>-->
						     	<span v-if="index==2">
						     		 <div v-for="(value, key) in value" class="grid-content">
								     <span >{{value.PackageName}}</span> * <span style="color: #1c84c6;">{{value.Jian}}</span>

		                             </div>
		                             <!--<span >{{value}}</span>-->
						     	</span>
                             </div>
					</el-col>
				</el-row>
				<el-row class='linkinfo'>
					<el-col :span="24" style="height: 50px;border:1px solid #CCCCCC;border-top: none;display: flex;align-items: center;">
						<div class="grid-content" style="width:50%;justify-content: flex-start;">
							件数：<span>{{jian}}</span>
						</div>
						<!--<div class="grid-content" style="width:50%;justify-content: flex-end;">付款情况：<span></span></div>-->
					</el-col>
				</el-row>
				<el-row class='linkinfo'>
					<el-col :span="24" style="height: 50px;border:1px solid #CCCCCC;border-top: none;display: flex;align-items: center;">
						<div class="grid-content" style="width:50%;justify-content: flex-start;">
							取件人：<span>{{takeName}}</span>
						</div>
						<div class="grid-content" style="width:50%;justify-content: flex-end;">要求取件时间：<span>{{orderTime}}</span></div>
					</el-col>
				</el-row>


			</div>
	<el-row class='linkinfo'>
					<el-col :span="24" style="border:1px solid #CCCCCC;border-top: none;display: flex;align-items: center;">
						<div class="grid-content" style="width:50%;justify-content: flex-start;">

						</div>
						<div class="grid-content" style="width:50%;height:40px;display:flex;align-items: center;">

							<div style="display:flex;align-items: center;" @click="orderdownload">
								<img src="../../assets/printer.png" alt="" style="width: 23px;height: 23px;margin-right: 5px;">
								<span>下载</span>
							</div>
							<div style="margin-left: 30px;display:flex;align-items: center;" @click="print" target="_blank">
								<img src="../../assets/daochu.png" alt="" style="width: 23px;height: 23px;margin-right: 5px;">
								<span  @click="print" v-print="'#printTest'" >打印</span>
							</div>
						</div>
					</el-col>
				</el-row>
		</el-dialog>

	</div>

</template>

<script>
	import htmlToPdf from '../../js/htmlToPdf';
//	import Print from '../../js/print'
   // Vue.use(Print) // 注册
	export default {
		name: "SenderManagement",
		data() {
			return {
				ruleForm: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					area: '',
					city: '',
					street: '',
					province: '',
					desc: ''
				},
				rules: {
					name: [{
							required: true,
							message: '请输入客户账号',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 5,
							message: '长度在 3 到 5 个字符',
							trigger: 'blur'
						}
					],
					company: [{
						required: true,
						message: '请输入公司名称',
						trigger: 'change'
					}],
					region: [{
						required: true,
						message: '请输入联系人',
						trigger: 'change'
					}],
					phone: [{
							required: true,
							message: '请输入联系方式',
							trigger: 'change'
						},
						{
							pattern: /^[1][3,4,5,7,8][0-9]{9}$/,
							message: '手机号格式不对',
							trigger: 'blur'
						}

					],
					desc: [{
						required: true,
						message: '请输入详细地址',
						trigger: 'blur'
					}]
				},
				multipleSelection: [],
				loading:true,
				orderstate: '',
				inputperson: '',
				orderType: '',
				OrderTime: '',
				countNum: '',
				acount: '',
				cur_page: 1, //当前页
				limit: 20, //每页多少条
				ccc: 500, //总tiao数
				netcompany:'',
				condition:'',
				paytype:'',
				addSendDetailsModel: false,
				EditDetailsModel: false,
				tableData: [],
				orderdescinfo:{},
				orderID:'',
				sendCity:'',
				getCity:'',
				sendDepart:'',
				getDepart:'',
				Condition:'',
				sendName:'',
				sendTel:'',
				sendCompany:'',
				sendAddress:'',
				getName:'',
				getTel:'',
				getCompany:'',
				getAddress:'',
				goodType:'',
				goodName:'',
				goodSize:'',
				goodWight:'',
				isWdj:'',
				isSafe:'',
				safePay:'',
				payway:'',
				jian:'',
				takeName:'',
				orderTime:'',
				ordertimer:'',//下单时间
               boxs:''

			}
		},
		mounted() {
			this.company = window.sessionStorage.getItem('compony');
			this.netcompany=this.$route.query.Company;
			this.orderstate=this.$route.query.Condition=='全部'?'':this.$route.query.Condition;
			this.getData();
		},
		methods: {
			//渲染页面
			getData() {
                var datetime='';
                if(this.OrderTime==''){
                    var datetime='';
                }else{
                	var d = new Date(this.OrderTime);
                    var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                }

				let _this = this;
				_this.$axios({
					url: 'http://out.ccsc58.cc/OMS/v1/public/index/reportcenter/details',
					method: "post",
					data: {
						PageSize: this.limit,
						Page: this.cur_page, //当前页码
						Company: this.company,
						CompanyNet:this.netcompany,
						StartTime:datetime,
						AccountNumber:this.acount,
						OrderWay:this.orderType,
						PayWay:this.paytype,
						Condition:this.orderstate

					},
					transformRequest: [
						function(data) {
							let ret = "";
							for(let it in data) {
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
					_this.loading = false;
					_this.$message.success(res.data.msg);
					_this.tableData = res.data.data.result;
					_this.ccc = res.data.data.sum;
					//console.log(res)
				})

			},

	        Reset(){

				this.OrderTime='';
				this.acount='';
				this.orderstate='';
				this.orderType='';
				this.paytype='';
				this.getData();
			},
			dataExport() {
                this.loading = true;
                let import_file;
                new Promise((resolve, reject) => {
                    import_file = this.multipleSelection;
                    if (import_file.length == 0) {

                        import_file = this.tableData;

                    }
                    resolve(import_file);
                }).then(res => {
                    //console.log(res);return;
                    require.ensure([], () => {
                        const {export_json_to_excel} = require("../../js/Export2Excel");
                        // 这就是表头 展示的表头
                        const tHeader = [
                            "客户账号",
                            "订单号",
                            "货物名称",
                            "下单时间",
                            "要求取件时间",
                            "时限",
                            "订单状态",
                            "下单方式",
                            "结算方式",
                            "录入人"

                        ];
                        // 这就是 对应的 字段
                        const filterVal = [
                            "AccountNumber",
                            "ID",
                            "CargoName",
                            "Indate",
                            "OrderTime",
                            "LimitTime",
                            "Condition",
                            "OrderWay",
                            "PayWay",
                            "entryname"
                        ];
                        const list = res;
                        this.loading = false;
                        const data = this.formatJson(filterVal,list);
                        export_json_to_excel(tHeader, data, "订单统计");  // 这是  excel文件名
                    });
                });

            },
             formatJson: function (filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]));
            },

			handleSizeChange(val) {
				this.loading = true;

				// console.log(val); // 每页显示  条数
				this.limit = val;
				this.getData();
				//this.getnetData();

			},
			handleCurrentChange(val) {
				this.loading = true;
				this.cur_page = val;
				this.getData();
				//this.getnetData();
			},
			handleSelectionChange(val) {
                // 选中的  当前条 数据
                this.multipleSelection = val;

            },

			//查看订单详情
			Orderdetail(row) {

				//console.log(row);

				this.ruleForm.name = row.id;
				this.countNum = row.AccountNumber;

                let _this = this;
				_this.$axios({
					url: 'http://out.ccsc58.cc/OMS/v1/public/index/reportcenter/orderdetails',
					method: "post",
					data: {
						Company: this.company,
						ID:row.ID
					},
					transformRequest: [
						function(data) {
							let ret = "";
							for(let it in data) {
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
					_this.loading = false;
					 _this.$message.success(res.data.msg);
//					console.log(res.data.data)
//					console.log(res.data.data.entryname)
					_this.orderdescinfo = res.data[0];
					_this.inputperson=res.data.data[0].entryname;
					_this.orderID=res.data.data[0].ID;
					_this.sendCity=res.data.data[0].City;
					_this.getCity=res.data.data[0].GetCity;
					_this.sendDepart=res.data.data[0].Depart;
					_this.getDepart=res.data.data[0].GetDepart;
					_this.sendName=res.data.data[0].Manager;
					_this.sendTel=res.data.data[0].Telephone;
					_this.sendAddress=res.data.data[0].Address;
					_this.getName=res.data.data[0].GetName;
					_this.getTel=res.data.data[0].GetTelephone;
					_this.getAddress=res.data.data[0].GetAddress;
					_this.goodType=res.data.data[0].BusinessType;
					_this.goodName=res.data.data[0].CargoName;
					_this.goodSize=res.data.data[0].CargoSize;
					_this.goodWight=res.data.data[0].CWeight;
					_this.isWdj=res.data.data[0].Name4=='使用'?"是":"否";
					_this.isSafe=res.data.data[0].SafeItem;
					_this.safePay=res.data.data[0].SafePay;
					_this.payway=res.data.data[0].PayWay;
					_this.jian=res.data.data[0].Jian;
					_this.takeName=res.data.data[0].TakesName=null?'':res.data.data[0].TakesName;
					_this.orderTime=res.data.data[0].OrderTime;
					_this.ordertimer=res.data.data[0].Indate;
					_this.boxs=res.data.data[0].Box;
					console.log(_this.boxs,888)


				})

				this.EditDetailsModel = true;


			},
			//点击下载-表格数据
			downloadtable(){
				 htmlToPdf.downloadPDF( document.querySelector('#tableData'),'订单统计');
			},
			//下载运单详情
			orderdownload() {

              htmlToPdf.downloadPDF( document.querySelector('#pdfDom'),'运单详情');
			},
			//打印运单详情
			print(e) {
//				console.log(JSON.stringify(this.boxs));
//	        	return false;
                let subOutputRankPrint = document.querySelector('#pdfDom');
                console.log(subOutputRankPrint.innerHTML);
                let newContent =subOutputRankPrint.innerHTML;
                let oldContent = document.body.innerHTML;
                document.body.innerHTML = newContent;
                window.print();
                window.location.reload();
                document.body.innerHTML = oldContent;
                return false;
			},

			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}

		}
	}
</script>

<style>
	.divBut {
		padding: 20px;
		overflow-y: scroll;
		height: 100%;
	}

	.el-dialog__header {
		border-bottom: 1px solid #CCCCCC;
		border-top: 5px solid #0979C1;
	}

	.divBut .title h3 {
		margin: 5px 0 15px;
	}

	.el-input__inner {
		height: 35px;
	}

	.el-table--striped .el-table__body tr.el-table__row--striped td {
		background: #F9FAFD;
	}

	.el-table .cell {
		font-size: 10px;
	}

	/*.el-form-item__label {*/
	/*	width: 68px !important;*/
	/*}*/

	.el-dialog__body {
		padding: 5px 15px;
		color: #606266;
		line-height: 24px;
		font-size: 14px;
	}
	.el-dialog {
    position: relative;
    margin: 0 auto 50px;
    background: #fff;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 40%;
}
</style>
