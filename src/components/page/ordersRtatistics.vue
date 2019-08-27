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
						<el-select v-model="netcompanys" style="width: 200px;">
							<el-option key="bbk" label="1" value="1"></el-option>
							<el-option key="xtc" label="2" value="2"></el-option>
							<el-option key="imoo" label="3" value="3"></el-option>
						</el-select>
					</el-form-item>

					<div style="float: right;margin-top: 5px;">
						<img src="../../assets/chaxun.png" alt="" style="width: 23px;height: 23px">
						<img src="../../assets/daochu.png" alt="" style="margin: 0 30px;width: 23px;height: 23px" @click="downloadtable">
						<img src="../../assets/chongzhi.png" alt="" style="width: 23px;height: 23px">

					</div>
				</el-col>

			</el-row>
		</el-form>
		<div style="background:#fff;padding: 10px;border-radius: 10px">
			<el-row>
				<el-col style="margin:10px 0">
					<div style="display: flex;align-items: center;justify-content: space-between">
						<div style="font-family: cursive;">共计:350条信息</div>
					</div>

				</el-col>
				<el-col>
					<el-table :header-cell-style="{background:'#EFF3F8'}" class='table' stripe @cell-click="jumpDetails" :data="tableData" id='tableData' style="width: 100%">
						<el-table-column type="selection" width="55">
						</el-table-column>
						<el-table-column label="网络公司" prop="netcompany" align="center">
						</el-table-column>
						<el-table-column label="订单量" align="center" prop="ordernum">
						</el-table-column>
						<el-table-column label="指令下达" class-name="curstomNum" align="center" prop="sendcommand" label-class-name="aaa">
						</el-table-column>
						<el-table-column label="指令取消" align="center" prop="commandcancel" class-name="curstomNum" label-class-name="aaa">
						</el-table-column>
						<el-table-column label="已安排" class-name="curstomNum" align="center" prop="arranged" label-class-name="aaa">
						</el-table-column>

						<el-table-column align="center" label="取件完成" prop="takefinish" class-name="curstomNum" label-class-name="aaa">
						</el-table-column>
						<el-table-column align="center" label="省份" prop="province">
						</el-table-column>

						<el-table-column label="城市" align="center" prop="city">
						</el-table-column>

					</el-table>
				</el-col>
			</el-row>
			<div class="pagination">
				<el-pagination :page-sizes="[20,50, 100, 500, 2000]" :page-size="20" :current-page='cur_page' layout="total, sizes, prev, pager, next, jumper" :total="ccc"></el-pagination>
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
	import htmlToPdf from '../../js/htmlToPdf';
//	import {aTypes,mTypes} from '~store/allReport';
	import FileSaver from 'file-saver'
    import XLSX from 'xlsx'
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
				netcompanys: '',
				xdtime: '',
				cur_page: 1, //当前页
				limit: 20, //每页多少条
				ccc: 500, //总tiao数
				addSendDetailsModel: false,
				EditDetailsModel: false,
				tableData: [{
						netcompany: '福建龙岩分控',
						ordernum: '1',
						sendcommand: '0',
						commandcancel: '0',
						arranged: '1',
						takefinish: '1',
						province: '福建',
						city: '龙岩'

					},

					{
						netcompany: '中集冷云北京分公司',
						ordernum: '1',
						sendcommand: '0',
						commandcancel: '0',
						arranged: '1',
						takefinish: '1',
						province: '北京',
						city: '顺义'
					},

					{
						netcompany: '福建龙岩分控2',
						ordernum: '1',
						sendcommand: '0',
						commandcancel: '0',
						arranged: '1',
						takefinish: '1',
						province: '福建',
						city: '龙岩'

					},
				],

			}
		},
		methods: {
			//修改页面
			editChild(row) {
				this.ruleForm.name = row.id;

				this.EditDetailsModel = true;

			},
			jumpDetails(row, column, cell, event) {

				if(column.label == '指令下达' || column.label == '已安排' || column.label == '指令取消' || column.label == '取件完成') {
					this.$router.push({
						path: "/NetCompany"
					});
				}
			},
			//点击下载数据
			downloadtable() {
			 var wb = XLSX.utils.table_to_book(document.querySelector('#tableData'))
	 /* get binary string as output */
			 var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
			 try {
			   FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'order.xlsx')
			 } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
			 return wbout

			

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