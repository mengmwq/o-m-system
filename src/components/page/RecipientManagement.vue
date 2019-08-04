<template>
    <div class="divBut" >
        <el-form :inline="true" class="demo-form-inline">
            <el-row>
                <el-col>
                    <el-form-item label="客户账号">
                        <el-autocomplete
                            class="inline-input"


                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            :debounce=0

                        ></el-autocomplete>
                    </el-form-item>
                    <el-form-item label="公司名称">
                        <el-autocomplete
                            class="inline-input"


                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            :debounce=0

                        ></el-autocomplete>
                    </el-form-item>
                    <el-form-item label="联系人">
                        <el-autocomplete
                            class="inline-input"

                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            :debounce=0

                        ></el-autocomplete>
                    </el-form-item>
                </el-col>
                <el-col >
                    <el-form-item label="省份">
                        <el-autocomplete
                            class="inline-input"


                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            :debounce=0

                        ></el-autocomplete>
                    </el-form-item>
                    <el-form-item label="城市">
                        <el-autocomplete
                            class="inline-input"


                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            :debounce=0

                        ></el-autocomplete>
                    </el-form-item>
                    <el-form-item label="活跃度"  >
                        <el-select  >
                            <el-option label="普通用户" value="1"></el-option>
                            <el-option label="活跃用户" value="2"></el-option>
                            <el-option label="失活用户" value="3"></el-option>
                        </el-select>
                    </el-form-item>
                    <div style="float: right">
                        <img src="../../assets/chaxun.png" alt=""  style="width: 23px;height: 23px"  >
                        <img src="../../assets/daochu.png" alt="" style="margin: 0 30px;width: 23px;height: 23px" >
                        <img src="../../assets/chongzhi.png" alt=""   style="width: 23px;height: 23px" >


                    </div>
                </el-col>

            </el-row>
        </el-form>
        <div style="background:#fff;padding: 10px;border-radius: 10px">
            <el-row>
                <el-col style="margin:10px 0" >
                    <div style="display: flex;align-items: center;justify-content: space-between">
                        <div style="font-family: cursive;">共计:350条信息</div>
                        <el-button  plain  style="background: #649EFE;color:#fff" @click="addSendDetails()">新增</el-button>
                    </div>

                </el-col>
                <el-col>
                    <el-table
                        :header-cell-style="{background:'#EFF3F8'}"
                        stripe
                        :data="tableData"
                        style="width: 100%">
                        <el-table-column
                            label="客户账号"

                            prop="id"
                            align="center"
                        >
                        </el-table-column>
                        <el-table-column
                            label="公司名称"
                            align="center"

                            prop="name">
                        </el-table-column>
                        <el-table-column
                            label="联系人"
                            align="center"

                            prop="category">
                        </el-table-column>
                        <el-table-column
                            label="联系电话"
                            align="center"

                            prop="AccoutNumber">
                        </el-table-column>
                        <el-table-column
                            label="下单量"
                            align="center"

                            prop="xiadanliang">
                        </el-table-column>
                        <el-table-column
                            label="活跃度"
                            align="center"

                            prop="huoyue">
                        </el-table-column>
                        <el-table-column
                            label="省份"
                            align="center"
                            prop="shoujian">
                        </el-table-column>

                        <el-table-column
                            align="center"
                            label="城市"

                            prop="shixian">
                        </el-table-column>
                        <el-table-column
                            align="center"
                            label="区域"

                            prop="isfu">
                        </el-table-column>


                        <el-table-column

                            label="街道"
                            align="center"
                            prop="order">
                        </el-table-column>
                        <el-table-column
                            label="详细地址"
                            :show-overflow-tooltip="true"
                            align="center"
                            prop="xiadan">
                        </el-table-column>
                        <el-table-column

                            align="center"
                            label="录入人"
                            prop="net">
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
                    :page-sizes="[20,50, 100, 500, 2000]"
                    :page-size="20"
                    :current-page='cur_page'
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="ccc"
                ></el-pagination>
            </div>

        </div>
        <!--        //新增页面模态框-->
        <el-dialog

            :visible.sync="addSendDetailsModel"
        >
            <div>

                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="客户账号" prop="name">
                        <el-input v-model="ruleForm.name" style="width: 160px"></el-input>
                    </el-form-item>
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
                                        <el-input v-model="ruleForm.area" ></el-input>
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
                                    <el-input v-model="ruleForm. street" ></el-input>
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
        //修改模态框
        <el-dialog
            title="修改客户信息"
            :visible.sync="EditDetailsModel"
        >
            <div>

                <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="客户账号" prop="name" >
                        <el-input v-model="ruleForm.name" style="width: 160px" disabled></el-input><font style="font-size: 12px;color: red;font-family: cursive;margin:0 5px"> * 账号不可修改</font>
                    </el-form-item>
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
                                        <el-input v-model="ruleForm.area" ></el-input>
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
                                    <el-input v-model="ruleForm. street" ></el-input>
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
        name: "SenderManagement",
        data() {
            return {
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    area:'',
                    city:'',
                    street:'',
                    province:'',
                    desc: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入客户账号', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    company:[
                        { required: true, message: '请输入公司名称', trigger: 'change' }
                    ],
                    region: [
                        { required: true, message: '请输入联系人', trigger: 'change' }
                    ],
                    phone: [
                        { required: true, message: '请输入联系方式', trigger: 'change' },
                        {
                            pattern: /^[1][3,4,5,7,8][0-9]{9}$/,
                            message: '手机号格式不对',
                            trigger: 'blur'
                        }


                    ],
                    desc: [
                        { required: true, message: '请输入详细地址', trigger: 'blur' }
                    ]
                },
                cur_page: 1,//当前页
                limit: 20, //每页多少条
                ccc: 500, //总tiao数
                addSendDetailsModel:false,
                EditDetailsModel:false
                ,                tableData: [
                    {
                        id: '12987122',
                        name: '孟氏集团',
                        category: '孟健康',
                        AccoutNumber: '15001015750',
                        shoujian: '山西',
                        shixian: '临汾',
                        isfu:'开发区',
                        order:'建设路',
                        xiadan:'山西省临汾市建设路120号',
                        net:'孟孟',
                        xiadanliang:50,
                        huoyue:22

                    },
                    {
                        id: '12987122',
                        name: '孟氏集团',
                        category: '孟健康',
                        AccoutNumber: '15001015750',
                        shoujian: '山西',
                        shixian: '临汾',
                        isfu:'开发区',
                        order:'建设路',
                        xiadan:'山西省临汾市建设路120号',
                        net:'孟孟',
                        xiadanliang:650,
                        huoyue:22


                    },
                    {
                        id: '135535',
                        name: '孟氏集团',
                        category: '孟健康',
                        AccoutNumber: '15001015750',
                        shoujian: '山西',
                        shixian: '临汾',
                        isfu:'开发区',
                        order:'建设路',
                        xiadan:'山西省临汾市建设路120号',
                        net:'孟孟',
                        xiadanliang:650,
                        huoyue:22

                    },
                    {
                        id: '865',
                        name: '孟氏集团',
                        category: '孟健康',
                        AccoutNumber: '15001015750',
                        shoujian: '山西',
                        shixian: '临汾',
                        isfu:'开发区',
                        order:'建设路',
                        xiadan:'山西省临汾市建设路120号',
                        net:'孟孟',
                        xiadanliang:33,
                        huoyue:2

                    },
                    {
                        id: '8655',
                        name: '孟氏集团',
                        category: '孟健康',
                        AccoutNumber: '15001015750',
                        shoujian: '山西',
                        shixian: '临汾',
                        isfu:'开发区',
                        order:'建设路',
                        xiadan:'山西省临汾市建设路120号',
                        net:'孟孟',
                        xiadanliang:60,
                        huoyue:15

                    },
                    {
                        id: '12987122',
                        name: '孟氏集团',
                        category: '孟健康',
                        AccoutNumber: '15001015750',
                        shoujian: '山西',
                        shixian: '临汾',
                        isfu:'开发区',
                        order:'建设路',
                        xiadan:'山西省临汾市建设路120号',
                        net:'孟孟',
                        xiadanliang:50,
                        huoyue:2

                    },
                    {
                        id: '12987122',
                        name: '孟氏集团',
                        category: '孟健康',
                        AccoutNumber: '15001015750',
                        shoujian: '山西',
                        shixian: '临汾',
                        isfu:'开发区',
                        order:'建设路',
                        xiadan:'山西省临汾市建设路120号',
                        net:'孟孟',
                        xiadanliang:6,
                        huoyue:22

                    },
                    {
                        id: '12987122',
                        name: '孟氏集团',
                        category: '孟健康',
                        AccoutNumber: '15001015750',
                        shoujian: '山西',
                        shixian: '临汾',
                        isfu:'开发区',
                        order:'建设路',
                        xiadan:'山西省临汾市建设路120号',
                        net:'孟孟',
                        xiadanliang:650,
                        huoyue:22

                    },
                    {
                        id: '12987122',
                        name: '孟氏集团',
                        category: '孟健康',
                        AccoutNumber: '15001015750',
                        shoujian: '山西',
                        shixian: '临汾',
                        isfu:'开发区',
                        order:'建设路',
                        xiadan:'山西省临汾市建设路120号',
                        net:'孟孟',
                        xiadanliang:650,
                        huoyue:22

                    },
                    {
                        id: '12987122',
                        name: '孟氏集团',
                        category: '孟健康',
                        AccoutNumber: '15001015750',
                        shoujian: '山西',
                        shixian: '临汾',
                        isfu:'开发区',
                        order:'建设路',
                        xiadan:'山西省临汾市建设路120号',
                        net:'孟孟',
                        xiadanliang:650,
                        huoyue:22

                    },
                ],


            }
        },
        methods:{
            //修改页面
            editChild(row){
                this.ruleForm.name = row.id;

                this.EditDetailsModel =true;

            },
            //新增按钮点击页面
            addSendDetails(){
                this.addSendDetailsModel = true
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
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

