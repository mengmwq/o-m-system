<template>
    <div class="divBut" >
        <el-form :inline="true" class="demo-form-inline">
            <el-row>
                <el-col>
                    <el-form-item label="区域">
                        <el-autocomplete
                            class="inline-input"


                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            :debounce=0

                        ></el-autocomplete>
                    </el-form-item>
                    <el-form-item label="网络公司">
                        <el-autocomplete
                            class="inline-input"


                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            :debounce=0

                        ></el-autocomplete>
                    </el-form-item>
                    <el-form-item label="货物类型">
                        <el-autocomplete
                            class="inline-input"

                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            :debounce=0

                        ></el-autocomplete>
                    </el-form-item>
                </el-col>
                <el-col >
                    <el-form-item label="箱型">
                        <el-autocomplete
                            class="inline-input"


                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            :debounce=0

                        ></el-autocomplete>
                    </el-form-item>
                    <el-form-item label="客户账号">
                    <el-autocomplete

                        label-class-name="aaa"

                        placeholder="请输入内容"
                        :trigger-on-focus="false"
                        :debounce=0

                    ></el-autocomplete>
                </el-form-item>
                    <el-form-item label="订单号">
                        <el-autocomplete
                            class="inline-input"


                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            :debounce=0

                        ></el-autocomplete>
                    </el-form-item>
                    <div style="float: right">
                        <img src="../../assets/chaxun.png" alt=""  style="width: 23px;height: 23px"  >
                        <img src="../../assets/daochu.png" alt="" style="margin: 0 30px;width: 23px;height: 23px" @click="downloadtable">
                        <img src="../../assets/chongzhi.png" alt=""   style="width: 23px;height: 23px" >


                    </div>
                </el-col>

            </el-row>
        </el-form>
        <div style="background:#fff;padding: 10px;border-radius: 10px">
            <el-row>
                <el-col style="margin:10px 0" >
                    <div style="display: flex;align-items: center;justify-content: space-between">
                        <div style="font-family: cursive;">订单量合计:350条信息</div>
<!--                        <el-button  plain  style="background: #649EFE;color:#fff" @click="addSendDetails()">新增</el-button>-->
                    </div>

                </el-col>
                <el-col>
                    <el-table
                        :header-cell-style="{background:'#EFF3F8'}"
                        stripe
                        height="400"
                        :data="tableData"
                        id='tableData'
                        style="width: 100%">
                        <el-table-column type="selection" width="55">
                        </el-table-column>
                        <el-table-column
                            label="区域"

                            prop="id"
                            align="center"
                        >
                        </el-table-column>
                        <el-table-column
                            label="网络公司"
                            align="center"

                            prop="name">
                        </el-table-column>
                        <el-table-column
                            label="客户账号"
                            align="center"
                            class-name="curstomNum"
                            label-class-name="aaa"
                            prop="">
                            <template slot-scope="scope">
                                <el-popover trigger="hover" placement="top">
                                    <p>客户账号: 2016024465</p>
                                    <p>联系人: 萌萌</p>
                                    <p>联系电话: 15001015750</p>
                                    <p>公司名称: 孟氏集团</p>
                                    <p>销售人员: 萌萌</p>
                                    <p>结算方式: 微信</p>
                                    <p>客户类型: </p>
                                    <div slot="reference" class="name-wrapper">
                                        <el-tag size="medium">{{ scope.row.category }}</el-tag>
                                    </div>
                                </el-popover>
                            </template>
                        </el-table-column>
                        <el-table-column
                            label="订单号"
                            align="center"

                            prop="AccoutNumber">
                        </el-table-column>
                        <el-table-column
                            label="货物类型"
                            align="center"
                            prop="shoujian">
                        </el-table-column>

                        <el-table-column
                            align="center"
                            label="件数"

                            prop="shixian">
                        </el-table-column>
                        <el-table-column
                            align="center"
                            label="下单时间"

                            prop="isfu">
                        </el-table-column>


                        <el-table-column

                            label="时限"
                            align="center"
                            prop="order">
                        </el-table-column>
                        <el-table-column
                            label="要求取件时间"
                            :show-overflow-tooltip="true"
                            align="center"
                            prop="xiadan">
                        </el-table-column>
                        <el-table-column

                            align="center"
                            label="实际取件时间"
                            prop="net">
                        </el-table-column>
                        <el-table-column

                            align="center"
                            label="温区"
                            prop="net">
                        </el-table-column>
                        <el-table-column

                            align="center"
                            label="箱型数量"
                            prop="net">
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

    </div>

</template>

<script>

    import htmlToPdf from '../../js/htmlToPdf';
    export default {
        name: "SenderManagement",
        data() {
            return {
                cur_page: 1,//当前页
                limit: 20, //每页多少条
                ccc: 500, //总tiao数
                addSendDetailsModel:false,
                EditDetailsModel:false
                ,                tableData: [
                    {
                        id: '12987122',
                        name: '孟氏集团',
                        category: '12345',
                        AccoutNumber: '15001015750',
                        shoujian: '山西',
                        shixian: '临汾',
                        isfu:'开发区',
                        order:'建设路',
                        xiadan:'山西省临汾市建设路120号',
                        net:'孟孟',

                    },
                    {
                        id: '12987122',
                        name: '孟氏集团',
                        category: '4654565',
                        AccoutNumber: '15001015750',
                        shoujian: '山西',
                        shixian: '临汾',
                        isfu:'开发区',
                        order:'建设路',
                        xiadan:'山西省临汾市建设路120号',
                        net:'孟孟',

                    },
                    {
                        id: '135535',
                        name: '孟氏集团',
                        category: '4546',
                        AccoutNumber: '15001015750',
                        shoujian: '山西',
                        shixian: '临汾',
                        isfu:'开发区',
                        order:'建设路',
                        xiadan:'山西省临汾市建设路120号',
                        net:'孟孟',

                    },
                    {
                        id: '865',
                        name: '孟氏集团',
                        category: '456468',
                        AccoutNumber: '15001015750',
                        shoujian: '山西',
                        shixian: '临汾',
                        isfu:'开发区',
                        order:'建设路',
                        xiadan:'山西省临汾市建设路120号',
                        net:'孟孟',

                    },
                    {
                        id: '8655',
                        name: '孟氏集团',
                        category: '9787945',
                        AccoutNumber: '15001015750',
                        shoujian: '山西',
                        shixian: '临汾',
                        isfu:'开发区',
                        order:'建设路',
                        xiadan:'山西省临汾市建设路120号',
                        net:'孟孟',

                    },
                    {
                        id: '12987122',
                        name: '孟氏集团',
                        category: '45465',
                        AccoutNumber: '15001015750',
                        shoujian: '山西',
                        shixian: '临汾',
                        isfu:'开发区',
                        order:'建设路',
                        xiadan:'山西省临汾市建设路120号',
                        net:'孟孟',

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

                    },
                ],


            }
        },
        methods:{

           downloadtable(){
           	  htmlToPdf.downloadPDF( document.querySelector('#tableData'),'货量统计');
           }


        }
    }

</script>

<style >
    .curstomNum:not(.aaa) .cell {
        color: #649EFE !important;

    }
    .curstomNum:not(.aaa) .cell:hover {
        cursor: pointer;
    }
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
