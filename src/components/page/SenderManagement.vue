<template>
    <div class="divBut" >
        <div  v-loading="loading"  element-loading-text="拼命加载中" >
        <el-form :inline="true" class="demo-form-inline">
            <el-row>
                <el-col>
                    <el-form-item label="客户账号">
                        <el-input
                            class="inline-input"

                            v-model="AccountNumber1"
                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            :debounce=0

                        ></el-input>
                    </el-form-item>
                    <el-form-item label="公司名称">
                        <el-input
                            class="inline-input"

                            v-model="CompanyName"
                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            :debounce=0

                        ></el-input>
                    </el-form-item>
                    <el-form-item label="联系人">
                        <el-input
                            class="inline-input"
                            v-model="Manager"
                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            :debounce=0

                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col >
                    <el-form-item label="省份">
                        <el-input
                            class="inline-input"
                            v-model="Depart"

                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            :debounce=0

                        ></el-input>
                    </el-form-item>
                    <el-form-item label="城市">
                        <el-input
                            class="inline-input"
                            v-model="City"

                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            :debounce=0

                        ></el-input>
                    </el-form-item>
                    <div style="float: right">
                        <img src="../../assets/chaxun.png" alt=""  style="width: 23px;height: 23px"  @click="getData" >
                        <img src="../../assets/daochu.png" alt="" style="margin: 0 30px;width: 23px;height: 23px"  @click="dataExport()">
                        <img src="../../assets/chongzhi.png" alt=""  @click="refresh()"  style="width: 23px;height: 23px" >


                    </div>
                </el-col>

            </el-row>
        </el-form>
        <div style="background:#fff;padding: 10px;border-radius: 10px">
            <el-row>
                <el-col style="margin:10px 0" >
                    <div style="display: flex;align-items: center;justify-content: space-between">
                        <div style="font-family: cursive;">共计:{{ccc}}条信息</div>
                        <el-button  plain  style="background: #649EFE;color:#fff" @click="addSendDetails()">新增</el-button>
                    </div>

                </el-col>
                <el-col>
                    <el-table
                        :header-cell-style="{background:'#EFF3F8'}"
                        stripe
                        :data="tableData"
                        height="500"
                        ref="multipleTable"
                        style="width: 100%">
                        <el-table-column
                            type="selection"
                            width="60"
                            align="center"
                        ></el-table-column>

                        <el-table-column
                            label="编号"
                            prop="ID"
                            align="center"
                        >
                        </el-table-column>
                        <el-table-column
                            label="客户账号"

                            prop="AccountNumber"
                            align="center"
                        >
                        </el-table-column>
                        <el-table-column
                            label="公司名称"
                            align="center"
                            :show-overflow-tooltip="true"
                            prop="Company">
                        </el-table-column>
                        <el-table-column
                            label="联系人"
                            align="center"

                            prop="Manager">
                        </el-table-column>
                        <el-table-column
                            label="联系电话"
                            align="center"
                            :show-overflow-tooltip="true"
                            prop="Telephone">
                        </el-table-column>
                        <el-table-column
                            label="省份"
                            align="center"
                            prop="Depart">
                        </el-table-column>

                        <el-table-column
                            align="center"
                            label="城市"

                            prop="City">
                        </el-table-column>
                        <el-table-column
                            align="center"
                            label="区域"

                            prop="Area">
                        </el-table-column>


                        <el-table-column

                            label="街道"
                            align="center"
                            prop="Roule">
                        </el-table-column>
                        <el-table-column
                            label="详细地址"
                            :show-overflow-tooltip="true"
                            align="center"
                            prop="Address">
                        </el-table-column>
                        <el-table-column

                            align="center"
                            label="录入人"
                            prop="InName">
                        </el-table-column>

                        <el-table-column
                            align="center"
                            label="操作">
                            <template slot-scope="scope">
                                <el-button  size="small"  style="color: #1ab394;border: 1px solid #1ab394" plain @click.native.prevent="editChild(scope.row)" >修改</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
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
        </div>
<!--        //新增页面模态框-->
        <el-dialog

            :visible.sync="addSendDetailsModel"
          >
            <div>

                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

                    <el-row>
                        <el-form-item label="客户账号" prop="name">
                            <el-input v-model="ruleForm.name" style="width: 160px"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-form-item label="公司名称" prop="company">
                     <el-input v-model="ruleForm.company" ></el-input>
                    </el-form-item>
                    <el-row>
                        <el-col :span="11">
                            <el-form-item label="联系人" prop="region">
                                <el-input v-model="ruleForm.region" ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="13">
                            <el-form-item label="联系方式" prop="phone">
                                <el-input v-model="ruleForm.phone" ></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="11">
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="省份" prop="province">
                                        <el-input v-model="ruleForm.province" ></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="城市" prop="city">
                                        <el-input v-model="ruleForm.city" ></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="13">
                            <el-col :span="12">
                                <el-form-item label="区域" prop="area">
                                    <el-input v-model="ruleForm.area" ></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="街道" prop=" street">
                                    <el-input v-model="ruleForm.street" ></el-input>
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
<!--        //修改模态框-->
        <el-dialog
            title="修改客户信息"
            :visible.sync="EditDetailsModel"
        >
            <div>

                <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">

                    <el-row>
                        <el-form-item label="客户账号" prop="name" >
                            <el-input v-model="ruleForm.name" style="width: 160px" disabled></el-input><font style="font-size: 12px;color: red;font-family: cursive;margin:0 5px"> * 账号不可修改</font>
                        </el-form-item>
                    </el-row>
                    <el-form-item label="公司名称" prop="company">
                        <el-input v-model="ruleForm.company" ></el-input>
                    </el-form-item>
                    <el-row>
                        <el-col :span="11">
                            <el-form-item label="联系人" prop="region">
                                <el-input v-model="ruleForm.region" ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="13">
                            <el-form-item label="联系方式" prop="phone">
                                <el-input v-model="ruleForm.phone" ></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="11">
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="省份" prop="province">
                                        <el-input v-model="ruleForm.province" ></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="城市" prop="city">
                                        <el-input v-model="ruleForm.city" ></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="13">
                            <el-col :span="12">
                                <el-form-item label="区域" prop="area">
                                    <el-input v-model="ruleForm.area" ></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="街道" prop=" street">
                                    <el-input v-model="ruleForm.street" ></el-input>
                                </el-form-item>
                            </el-col>
                        </el-col>
                    </el-row>



                    <el-form-item label="详细地址" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="EditForm('ruleForm')">保存</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>

        </el-dialog>
    </div>
</template>

<script>


    export default {
        name: "SenderManagement",
        data() {
            return {
                ruleForm: {
                    name: '',
                    region: '',
                    area:'',
                    city:'',
                    street:'',
                    province:'',
                    desc: '',
                    InName:''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入客户账号', trigger: 'blur' },

                    ],
                    InName:[
                        { required: true, message: '请输入录入人', trigger: 'blur' },

                    ],
                    company:[
                        { required: true, message: '请输入公司名称', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请输入联系人', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: '请输入联系方式', trigger: 'blur' },


                    ],
                    desc: [
                        { required: true, message: '请输入详细地址', trigger: 'blur' }
                    ]
                },
                cur_page: 1,//当前页
                limit: 20, //每页多少条
                ccc: 0, //总tiao数
                addSendDetailsModel:false,//add 模态框
                EditDetailsModel:false,//bianji 模态框
                tableData: [],
                multipleSelection: [],//复选框
                AccountNumber1:'',
                loading:true,
                CompanyName:'',
                Manager:'',
                Depart:'',
                City:'',

            }
        },
        mounted(){
            this.company = window.sessionStorage.getItem('compony');//获取登录页公司组织
            this.TrueName = window.sessionStorage.getItem('TrueName');//获取登录页公司组织

            this.getData()
        },
        methods:{
            refresh(){
                this.cur_page = 1;
                this.loading = true;
                this.AccountNumber1 = '';
                this.CompanyName='';
                this.Depart='';
                this.City ='';
                this.Manager='';
                this.getData();
                this.loading = false;
            },
            //导出   导出时需要依赖xlsx file-saver Blob.js  Export2Excel
            dataExport() {
                this.loading = true;
                let import_file;
                new Promise((resolve, reject) => {
                    import_file = this.multipleSelection;
                    if (import_file.length == 0) {
                        //this.limit = 10000;
                        // this.getData();
                        import_file = this.tableData;

                    }
                    resolve(import_file);
                }).then(res => {
                    // console.log(res);return;
                    require.ensure([], () => {
                        const {export_json_to_excel} = require("../../js/Export2Excel");
                        // 这就是表头 展示的表头
                        const tHeader = [
                            "ID",
                            "客户账号",
                            "公司名称",
                            "联系人",
                            "联系电话",


                            "省份",
                            "城市",
                            "区域",
                            "街道",
                            "详细地址",
                            "录入人",

                        ];
                        // 这就是 对应的 字段
                        const filterVal = [
                            "ID",
                            "AccountNumber",
                            "Company",
                            "Manager",
                            "Telephone",

                            "Depart",
                            "City",
                            "Area",
                            "Roule",
                            "Address",
                            "InName"

                        ];
                        const list = res;
                        this.loading = false;
                        const data = this.formatJson(filterVal,list);
                        export_json_to_excel(tHeader, data, "收件人信息管理表");  // 这是  excel文件名
                    });
                });

            },
            formatJson: function (filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]));
            },
            //渲染页面
            getData(){
                let _this = this;
                _this.$axios({
                    url:'http://out.ccsc58.cc/OMS/v1/public/index/customerservice/fromaddress',
                    method: "post",
                    data: {
                        PageSize:this.limit,
                        Page: this.cur_page,//当前页码
                        Company:this.company,
                        AccountNumber:this.AccountNumber1,
                        CompanyName: this.CompanyName,
                        Depart:this.Depart,
                        City: this.City,
                        Manager:this.Manager,


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
                        _this.$message.success(res.data.msg)
                        _this.loading = false;
                        _this.tableData = res.data.data.result;
                        _this.ccc = res.data.data.sum;
                    }else{
                        _this.$message.error(res.data.msg)
                    }

                })


            },
            //每页条数改变的时候
            handleSizeChange(val) {
                this.loading = true;

                // console.log(val); // 每页显示  条数
                this.limit = val;
                this.getData();
            },
            //复选框改变
            handleSelectionChange(val) {
                // 选中的  当前条 数据
                this.multipleSelection = val;

            },
            //当前页改变
            handleCurrentChange(val) {
                this.loading = true;
                this.cur_page = val;
                this.getData();
            },
            //修改页面
            editChild(row){
                this.ruleForm.name = row.AccountNumber;
                this.ruleForm.company = row.Company;
                this.ruleForm.region =row.Manager;
                this.ruleForm.phone =row.Telephone;
                this.ruleForm.province = row.Depart;
                this.ruleForm.city = row.City;
                this.ruleForm.area = row.Area;
                this.ruleForm.street = row.Roule;
                this.ruleForm.desc = row.Address;
                this.ruleForm.InName = row.InName;
                this.ID =row.ID
                this.EditDetailsModel =true;

            },
            //新增按钮点击页面
            addSendDetails(){
                this.ruleForm.name = '';
                this.ruleForm.company = '';
                this.ruleForm.region ='';
                this.ruleForm.phone ='';
                this.ruleForm.province = '';
                this.ruleForm.city = '';
                this.ruleForm.area = '';
                this.ruleForm.street = '';
                this.ruleForm.desc = '';
                this.ruleForm.InName = '';
                this.ID ='';
              this.addSendDetailsModel = true
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let _this = this;
                        _this.$axios({
                            url: 'http://out.ccsc58.cc/OMS/v1/public/index/customerservice/addfrom',
                            method: 'post',
                            data: {
                                Company: this.company,
                                AccountNumber: this.ruleForm.name,
                                CompanyName: this.ruleForm.company,
                                Manager: this.ruleForm.region,
                                Telephone: this.ruleForm.phone,
                                Depart: this.ruleForm.province,
                                City: this.ruleForm.city,
                                Area: this.ruleForm.area,
                                Roule: this.ruleForm.street,
                                Address: this.ruleForm.desc,
                                InName: this.ruleForm.InName,
                                TrueName:this.TrueName
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

                        }).then(function (res) {
                            console.log(res)
                            if (res.data.code == 200) {
                                _this.$message.success("新增成功")
                                _this.addSendDetailsModel = false;
                                _this.getData()
                            } else {
                                _this.$message.error(res.data.msg);
                            }
                        })
                    }
                });
            },
            //x修改
            EditForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let _this = this;
                        _this.$axios({
                            url:'http://out.ccsc58.cc/OMS/v1/public/index/customerservice/changefrom',
                            method: 'post',
                            data: {
                                Company:this.company,
                                AccountNumber: this.ruleForm.name,
                                CompanyName:this.ruleForm.company,
                                Manager:this.ruleForm.region,
                                Telephone:this.ruleForm.phone,
                                Depart:this.ruleForm.province,
                                City:this.ruleForm.city,
                                Area:this.ruleForm.area,
                                Roule:this.ruleForm.street,
                                Address:this.ruleForm.desc,
                                InName:this.ruleForm.InName,
                                ID:this.ID,
                                TrueName:this.TrueName
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
                            console.log(res)
                            if(res.data.code == 200){
                                _this.$message.success("修改成功")
                                _this.EditDetailsModel =false;
                                _this.getData()
                            }else{
                                _this.$message.error(res.data.msg);
                            }

                        })
                        // alert('submit!');

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

<style >
.divBut{
    padding:20px;
    overflow-y: scroll;height:100%;
}
    .el-input__inner{
        height:35px;
    }
    .el-table--striped .el-table__body tr.el-table__row--striped td {
        background: #F9FAFD;
    }
    .el-table .cell{
        font-size: 10px;
    }
    .el-form-item__label {

        width: 68px;}
</style>
