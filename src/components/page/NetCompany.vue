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
					<el-form-item label="下单时间">
						<el-date-picker v-model="OrderTime" type="datetime" style="width:200px" placeholder="选择日期时间">s
						</el-date-picker>
					</el-form-item>
					<el-form-item label="客户账号">
						<el-autocomplete class="inline-input" v-model="acount" placeholder="请输入内容" :trigger-on-focus="false" :debounce=0></el-autocomplete>
					</el-form-item>
					<el-form-item label="订单状态">
						<el-select v-model="orderstate" style="width: 200px;">
							<el-option key="bbk" label="指令下达" value="指令下达"></el-option>
							<el-option key="xtc" label="指令取消" value="指令取消"></el-option>
							<el-option key="yap" label="已安排" value="已安排"></el-option>
							<el-option key="qjw" label="取件完成" value="取件完成"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col>
					<el-form-item label="下单方式">
						<el-select v-model="orderType" style="width: 200px;">
							<el-option key="bbk" label="TMS" value="TMS"></el-option>
							<el-option key="xtc" label="APP" value="APP"></el-option>
							<el-option key="imoo" label="WEB" value="WEB"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="结算方式">
						<el-select v-model="paytype" style="width: 200px;">
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
					<el-table :header-cell-style="{background:'#EFF3F8'}" stripe :data="tableData"  style="width: 100%" id='tableData'>
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
				<el-pagination :page-sizes="[20,50, 100, 500, 2000]" :page-size="20" :current-page='cur_page' layout="total, sizes, prev, pager, next, jumper" :total="ccc"></el-pagination>
			</div>
          </div>
		</div>
		<el-dialog title="订单详情" :visible.sync="EditDetailsModel"  style="border-bottom: 1px solid #000000;font-family: cursive;">
			<div class="container" style="font-family: cursive;" id='pdfDom'>
				<el-row style="display: flex;justify-content: space-between;align-items: center;">

					<div style="flex: 1;justify-content:flex-start;align-items: center;">
						<span style="font-family: cursive;">客户账号:</span>
						<span style="font-family: cursive;color:#5D9DD2;">{{countNum}}</span>
					</div>
					<div style="justify-content:flex-end;align-items: center;">
						<span>录入人:</span>
						<span style="color:#5D9DD2;">{{inputperson}}</span>
					</div>
				</el-row>
				<el-row style='border: 1px solid #ccc;'>
					<el-col :span="12" style='border-right: 1px solid #ccc;'>
						<div class="grid-content">
							<span>订单号:</span>
							<span>1311545465</span>
						</div>
						<div class="grid-content" style="margin:10px 0px;display: flex;justify-content:center; align-items: center;text-align: center;">
							<h2>北京</h2>
							<span style="margin: 0 15px;">></span>
							<h2>上海</h2>
						</div>
						<div class="grid-content" style="text-align: center;">
							<span>感谢支持中集冷云，期待为您服务~</span>
						</div>
					</el-col>
					<el-col :span="12" style="font-size: 16px;">
						<div class="grid-content">
							始发地：<span>北京市</span>-<span>昌平区</span>
						</div>
						<div class="grid-content">
							目的地：<span>天津市</span>-<span>南开区</span>
						</div>
						<div class="grid-content">
							订单状态：<span>指令下达</span>
						</div>
					</el-col>
				</el-row>
				<el-row class='linkinfo'>
					<el-col :span="24" style="border:1px solid #CCCCCC;border-top: none;display: flex;align-items: center;">
						<div class="grid-content" style="width:50%;justify-content: flex-start;">
							寄件方：<span>刘贵勋</span><span>1852121541</span>
						</div>
						<div class="grid-content" style="width:50%;justify-content: flex-end;">详细地址：<span>北京市昌平区生命科技园路18号</span></div>
					</el-col>
				</el-row>

				<el-row class='linkinfo'>
					<el-col :span="24" style="border:1px solid #CCCCCC;border-top: none;display: flex;align-items: center;">
						<div class="grid-content" style="width:50%;justify-content: flex-start;">
							收件方：<span>张彤</span>
							<span>1556565411</span>
						</div>
						<div class="grid-content" style="width:50%;justify-content: flex-end;">详细地址：<span>天津市南开区三马路156号中心妇
产科医院行政楼</span></div>
					</el-col>
				</el-row>
				<el-row style='border: 1px solid #ccc;border-top: none;'>
					<el-col :span="12" style='border-right: 1px solid #ccc;'>
						<div class="grid-content">
							<span>货物类型:</span>
							<span>试剂</span>
						</div>
						<div class="grid-content">
							<span>货物尺寸:</span>
							<span>11*11*11</span>
						</div>
						<div class="grid-content">
							<span>温度及使用:</span>
							<span>是</span>
						</div>
						<div class="grid-content">
							<span>保险:</span>
							<span>是</span> ，
							<span>5.241</span> /
							<span>否</span>
							<span>2000</span>
						</div>
						<div class="grid-content">
							<span>结算方式:</span>
							<span>月结</span>
						</div>

					</el-col>
					<el-col :span="12">
						<div class="grid-content">
							<span>产品名称:</span>
							<span>试剂</span>
						</div>
						<div class="grid-content">
							<span>重量:</span>
							<span>试剂</span>
						</div>
						<div class="grid-content">
							<span>通知方式:</span>
							<span>电话</span> ,
							<span>2019-05-04 14:12</span>
						</div>
						<div class="grid-content">
							<span>处理情况:</span>
							<span>已处理</span> ,
							<span>2019-05-04 14:12</span>
						</div>
						<div class="grid-content">
							<span>下单时间:</span>
							<span>2019-05-02 14:12</span>
						</div>
					</el-col>
				</el-row>
				<el-row class='linkinfo' style='text-align: center;border: 1px solid #CCCCCC;border-top:none ;'>
					<el-col :span="6" style='border-right: 1px solid #CCCCCC;'>
						<div class="grid-content">温度区间</div>
					</el-col>
					<el-col :span="6" style='border-right: 1px solid #CCCCCC;'>
						<div class="grid-content">-90℃~-40℃</div>
					</el-col>
					<el-col :span="6" style='border-right: 1px solid #CCCCCC;'>
						<div class="grid-content">-20℃~-10℃</div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content">2℃~8℃</div>
					</el-col>
				</el-row>
				<el-row class='linkinfo' style='text-align: center;border: 1px solid #CCCCCC;border-top:none ;'>
					<el-col :span="6" style='border-right: 1px solid #CCCCCC;'>
						<div class="grid-content">保温箱型</div>
					</el-col>
					<el-col :span="6" style='border-right: 1px solid #CCCCCC;'>
						<div class="grid-content"><span>GB(小)</span> * <span>1</span></div>
						<div class="grid-content"><span>GB(大)</span> * <span>1</span></div>
						<div class="grid-content"><span>自备包材</span> * <span>1</span></div>
					</el-col>
					<el-col :span="6" style='border-right: 1px solid #CCCCCC;'>
						<div class="grid-content"><span>4L</span> * <span>1</span></div>
						<div class="grid-content"><span>56L</span> * <span>1</span></div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content"><span>35L</span> * <span>1</span></div>
					</el-col>
				</el-row>
				<el-row class='linkinfo'>
					<el-col :span="24" style="border:1px solid #CCCCCC;border-top: none;display: flex;align-items: center;">
						<div class="grid-content" style="width:50%;justify-content: flex-start;">
							件数：<span>6</span>
						</div>
						<div class="grid-content" style="width:50%;justify-content: flex-end;">付款情况：<span>已付款</span></div>
					</el-col>
				</el-row>
				<el-row class='linkinfo'>
					<el-col :span="24" style="border:1px solid #CCCCCC;border-top: none;display: flex;align-items: center;">
						<div class="grid-content" style="width:50%;justify-content: flex-start;">
							取件人：<span>张三</span>
						</div>
						<div class="grid-content" style="width:50%;justify-content: flex-end;">要求取件时间：<span>2019-06-05 14:36</span></div>
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
				inputperson: '李四',
				orderType: '',
				OrderTime: '',
				countNum: '20180030',
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

			}
		},
		mounted() {
			this.company = window.sessionStorage.getItem('compony');
			this.netcompany=this.$route.query.Company;
			this.orderstate=this.$route.query.Condition;
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
					_this.tableData = res.data.data.result;
					_this.ccc = res.data.data.sum;
					console.log(res)
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
			
			
            

			
			//修改页面
			Orderdetail(row) {
				
				console.log(row);
				return false;
				this.ruleForm.name = row.id;

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
			//新增按钮点击页面
			addSendDetails() {
				this.addSendDetailsModel = true
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
	
	.el-form-item__label {
		width: 68px;
	}
	
	.el-dialog__body {
		padding: 5px 15px;
		color: #606266;
		line-height: 24px;
		font-size: 14px;
	}
</style>