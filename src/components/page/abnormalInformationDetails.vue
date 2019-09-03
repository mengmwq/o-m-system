<template>
    <div class="divBut">
        <el-form :inline="true" class="demo-form-inline">
            <el-row>
                <el-col>
                    <el-form-item label="区域" v-show="this.company =='总部'">
                        <el-autocomplete
                            class="inline-input"
                            v-model="Area"
                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            :debounce=0

                        ></el-autocomplete>
                    </el-form-item>
                        <el-form-item label="网络公司" v-show="this.company !=='总部'">
                            <el-autocomplete
                                class="inline-input"
                                v-model="Area2"
                                placeholder="请输入内容"
                                :trigger-on-focus="false"
                                :debounce=0

                            ></el-autocomplete>
                    </el-form-item>

                    <el-form-item label="客户账号">
                        <el-autocomplete
                            class="inline-input"


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
                </el-col>
                <el-col>
                    <el-form-item label="录入时间">
                        <div class="block">

                            <el-date-picker
                                v-model="value1"
                                type="datetime"
                                placeholder="选择日期">
                            </el-date-picker>
                        </div>
                    </el-form-item>
                    <el-form-item label="网络公司" v-show="this.company =='总部'">
                        <el-autocomplete
                            class="inline-input"
                            v-model="nex"

                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            :debounce=0

                        ></el-autocomplete>
                    </el-form-item>
                    <el-form-item label="录入人">
                        <el-autocomplete

                            label-class-name="aaa"

                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            :debounce=0

                        ></el-autocomplete>
                    </el-form-item>

                    <div style="float: right">
                        <img src="../../assets/chaxun.png" alt="" style="width: 23px;height: 23px">
                        <img src="../../assets/daochu.png" alt="" style="margin: 0 30px;width: 23px;height: 23px"
                             @click="downloadtable">
                        <img src="../../assets/chongzhi.png" alt="" style="width: 23px;height: 23px">


                    </div>
                </el-col>

            </el-row>
        </el-form>
        <div style="background:#fff;padding: 10px;border-radius: 10px" >
            <el-row>
                <el-col style="margin:10px 0">
                    <div style="display: flex;align-items: center;justify-content: space-between">
                        <div style="font-family: cursive;">共计:350条异常</div>
                        <!--                        <el-button  plain  style="background: #649EFE;color:#fff" @click="addSendDetails()">新增</el-button>-->
                    </div>

                </el-col>
                <el-col>
                    <el-table
                        :header-cell-style="{background:'#EFF3F8'}"
                        stripe
                        border
                        height="400"
                        :data="tableData0"
                        id='tableData'
                        style="width: 100%">
                        <el-table-column type="selection" width="55">
                        </el-table-column>
                        <el-table-column
                            label="区域"
                            v-if="company == '总部'"
                            prop="Area"
                            align="center"
                        >
                        </el-table-column>
                        <el-table-column
                            label="网络公司"
                            v-else
                            prop="Area"
                            align="center"
                        >
                        </el-table-column>

                        <el-table-column
                            label="客户账号"

                            prop="id"
                            align="center"
                        >
                        </el-table-column>
                        <el-table-column
                            label="订单号"
                            align="center"

                            prop="name">
                        </el-table-column>

                        <el-table-column
                            label="货物类型"
                            align="center"

                            prop="shoujian1">
                        </el-table-column>
                        <el-table-column
                            label="产品名称"
                            align="center"
                            prop="shoujian">
                        </el-table-column>

                        <el-table-column
                            align="center"
                            label="温度区间"

                            prop="shixian">
                        </el-table-column>
                        <el-table-column
                            align="center"
                            label="原因类型"

                            prop="isfu">
                        </el-table-column>


                        <el-table-column

                            label="异常内容"
                            align="center"
                            prop="order">
                        </el-table-column>
                        <el-table-column
                            label="录入时间"
                            :show-overflow-tooltip="true"
                            align="center"
                            prop="xiadan">
                        </el-table-column>
                        <el-table-column

                            align="center"
                            label="录入人"
                            prop="luru">
                        </el-table-column>
                        <el-table-column
                            v-if="company == '总部'"
                            align="center"
                            label="网络公司"
                            prop="Area2">
                        </el-table-column>
                        <el-table-column

                            align="center"
                            label="备注"
                            :show-overflow-tooltip="true"
                            prop="beizhu">
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
                Nex:'',
                tableData0:[],
                Area: '',
                Area2:'',
                value1: '',
                cur_page: 1,//当前页
                limit: 20, //每页多少条
                ccc: 500, //总tiao数
                addSendDetailsModel: false,
                EditDetailsModel: false,
                company: '',
                nex:'',
                NEX: '',
                tableData: [
                    {
                        Area: '华北',

                    },
                    {
                        Area: '华北',

                    },
                    {
                        Area: '华北',

                    }, {
                        Area: '华北',

                    },


                ],
                tableData2: [
                    {
                        Area: '北京分公司',

                    },
                    {
                        Area: '北京分公司',

                    },
                    {
                        Area: '北京分公司',

                    }, {
                        Area: '北京分公司',

                    },


                ],


            }
        },
        mounted() {
            this.Area = this.$route.query.Area;
            this.Area2 = this.$route.query.Area;
            this.Nex = this.$route.query.Nex;
            this.company = window.sessionStorage.getItem('compony');
            if(this.company  == "总部"){
                this.tableData0 = this.tableData;
            }else{
                this.tableData0 = this.tableData2;
            }
        },
        methods: {

            downloadtable() {
                htmlToPdf.downloadPDF(document.querySelector('#tableData'), '异常信息');
            }


        }
    }

</script>

<style>
    .curstomNum:not(.aaa) .cell {
        color: #649EFE !important;

    }

    .curstomNum:not(.aaa) .cell:hover {
        cursor: pointer;
    }

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

        width: 68px;
    }
</style>



