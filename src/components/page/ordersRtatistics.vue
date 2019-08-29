<template>
	<div class="divBut">
		<el-form :inline="true" class="demo-form-inline">
			<el-row style="display: flex;align-items: center;">
				<el-col>
					<el-form-item label="请选择时间范围">
						<div class="block">
							<el-date-picker v-model="xdtime" type="datetimerange" value-format="yyyy-MM-dd HH:mm:ss" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
							</el-date-picker>
						</div>
					</el-form-item>
					<el-form-item label="网络公司">
						<el-select v-model="netcompanys" filterable style="width: 200px;" @focus="focus($event)">
							<!--<el-option label="请选择" value=""></el-option>-->
		                 <el-option
		                  v-for="item in roles"
		                  :key="item.id"
		                  :label="item.Company"
		                  :value="item.Company">
		                </el-option>
						</el-select>
					</el-form-item>

					<div style="float: right;margin-top: 5px;">
						<img src="../../assets/chaxun.png" alt="" style="width: 23px;height: 23px" @click="queryData">
						<img src="../../assets/daochu.png" alt="" style="margin: 0 30px;width: 23px;height: 23px" @click="dataExport">
						<img src="../../assets/chongzhi.png" alt="" style="width: 23px;height: 23px" @click="Reset">

					</div>
				</el-col>

			</el-row>
		</el-form>
		<div style="background:#fff;padding: 10px;border-radius: 10px">
			<el-row>
				<el-col style="margin:10px 0">
					<div style="display: flex;align-items: center;justify-content: space-between">
						<div style="font-family: cursive;">共计:{{ccc}}条信息</div>
					</div>

				</el-col>
				<el-col>
					<el-table :header-cell-style="{background:'#EFF3F8'}" class='table' height="500" stripe @cell-click="jumpDetails" :data="tableData" id='tableData' style="width: 100%">
						<el-table-column type="selection" width="55">
						</el-table-column>
						<el-table-column label="网络公司" prop="CompanyNet" align="center">
						</el-table-column>
						<el-table-column label="订单量" align="center" prop="allpiao">
						</el-table-column>
						<el-table-column label="指令下达" class-name="curstomNum" align="center" prop="xiada" label-class-name="aaa">
						</el-table-column>
						<el-table-column label="指令取消" align="center" prop="quxiao" class-name="curstomNum" label-class-name="aaa">
						</el-table-column>
						<el-table-column label="已安排" class-name="curstomNum" align="center" prop="anpai" label-class-name="aaa">
						</el-table-column>

						<el-table-column align="center" label="取件完成" prop="wancheng" class-name="curstomNum" label-class-name="aaa">
						</el-table-column>
						<el-table-column align="center" label="省份" prop="Depart">
						</el-table-column>

						<el-table-column label="城市" align="center" prop="City">
						</el-table-column>

					</el-table>
				</el-col>
			</el-row>
			<div class="pagination">
				<div class="pagination">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[20,50, 100, 500, 2000]" :page-size="20" :current-page='cur_page' layout="total, sizes, prev, pager, next, jumper" :total="ccc"></el-pagination>
				</div>
			</div>

		</div>
		<!--        //新增页面模态框-->
		<el-dialog :visible.sync="addSendDetailsModel">
			<div>

				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="客户账号" prop="name">
						<el-input v-model="ruleForm.name" style="width: 160px"></el-input>
					</el-form-item>
					<el-form-item label="公司名称" prop="company">
						<el-input v-model="ruleForm.company"></el-input>
					</el-form-item>
					<el-row>
						<el-col :span="11">
							<el-form-item label="联系人" prop="region">
								<el-input v-model="ruleForm.region"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="13">
							<el-form-item label="联系方式" prop="phone">
								<el-input v-model="ruleForm.phone"></el-input>
							</el-form-item>
						</el-col>
					</el-row>

					<el-row>
						<el-col :span="11">
							<el-row>
								<el-col :span="12">
									<el-form-item label="省份" prop="province">
										<el-input v-model="ruleForm.province"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="12">
									<el-form-item label="城市" prop="city">
										<el-input v-model="ruleForm.area"></el-input>
									</el-form-item>
								</el-col>
							</el-row>
						</el-col>
						<el-col :span="13">
							<el-col :span="12">
								<el-form-item label="区域" prop="area">
									<el-input v-model="ruleForm.area"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="街道" prop=" street">
									<el-input v-model="ruleForm. street"></el-input>
								</el-form-item>
							</el-col>
						</el-col>
					</el-row>

					<el-form-item label="详细地址" prop="desc">
						<el-input type="textarea" v-model="ruleForm.desc"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
						<el-button @click="resetForm('ruleForm')">重置</el-button>
					</el-form-item>
				</el-form>
			</div>

		</el-dialog>
	</div>

</template>

<script>

	export default {
		name: "OrdersRtatistics",
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
					desc: '',

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
				roles:[],
				netcompanys: '',
				multipleSelection: [],
				xdtime: '',
				cur_page: 1, //当前页
				limit: 20, //每页多少条
				ccc: 0, //总tiao数
				addSendDetailsModel: false,
				EditDetailsModel: false,
				tableData: [
					
				],

			}
		},
		mounted() {
			this.company = window.sessionStorage.getItem('compony');
			this.getData();
			//this.getnetData();
		},
		methods: {

			//渲染页面
			getData() {
				let _this = this;
				_this.$axios({
					url: 'http://out.ccsc58.cc/OMS/test/public/index/reportcenter/index',
					method: "post",
					data: {
						PageSize: this.limit,
						Page: this.cur_page, //当前页码
						Company: this.company
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
			queryData() {
				let _this = this;
				_this.$axios({
					url: 'http://out.ccsc58.cc/OMS/test/public/index/reportcenter/index',
					method: "post",
					data: {
						Company:this.company,
						StartTime:this.xdtime[0],
						EndTime:this.xdtime[1],
						CompanyNet:this.netcompanys
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
			//渲染页面
			getnetData() {
				let _this = this;
				_this.$axios({
					url: 'http://out.ccsc58.cc/OMS/v1/public/index/reportcenter/checknet',
					method: "post",
					data: {
						Company: this.company,
						
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
					_this.roles = res.data.data;
				})

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
            selectTrigger(val){
            	console.log("net")
            	//this.getnetData();
            },
            //导出   导出时需要依赖xlsx file-saver Blob.js  Export2Excel
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
                    // console.log(res);return;
                    require.ensure([], () => {
                        const {export_json_to_excel} = require("../../js/Export2Excel");
                        // 这就是表头 展示的表头
                        const tHeader = [
                            "网络公司",
                            "订单量",
                            "指令下达",
                            "指令取消",
                            "已安排",
                            "取件完成",
                            "省份",
                            "城市"
                        ];
                        // 这就是 对应的 字段
                        const filterVal = [
                            "CompanyNet",
                            "allpiao",
                            "xiada",
                            "quxiao",
                            "anpai",
                            "wancheng",
                            "Depart",
                            "City"
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
            
			jumpDetails(row, column, cell, event) {
               console.log(row)
               console.log(column)
               console.log(cell)
               console.log(event)
				if(column.label == '指令下达' ) {
					this.$router.push({
						path: "/NetCompany",
						query: { 
			              Company: row.CompanyNet, 
			              Condition: column.label
			         }
					});
				}else if(column.label == '已安排'){
					this.$router.push({
						path: "/NetCompany",
						query: { 
			              Company: row.CompanyNet, 
			              Condition: column.label
			         }
					});
				}else if(column.label == '指令取消'){
					this.$router.push({
						path: "/NetCompany",
						query: { 
			              Company: row.CompanyNet, 
			              Condition: column.label
			         }
					});
				}else if( column.label == '取件完成'){
					this.$router.push({
						path: "/NetCompany",
						query: { 
			              Company: row.CompanyNet, 
			              Condition: column.label
			         }
					});
				}else{
					
				}
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
			},
			focus(event){
				this.getnetData();
			},
			Reset(){
				this.xdtime='';
				this.netcompanys='';
				this.getData();
			},
			query(){
				console.log(this.xdtime);
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
		width: 120px !important;
	}
	
	.curstomNum:not(.aaa) .cell {
		color: #649EFE !important;
	}
</style>