<template>
    <div class="divBut">
        <div style="background: #eee;padding: 20px "    v-if="company == '总部'">区域订单>{{Area}}</div>

        <div >

            <div  v-loading="loading"  element-loading-text="拼命加载中" >

                <el-form :inline="true" class="demo-form-inline">
                    <el-row style="display: flex;align-items: center;">
                        <el-col>
                            <el-form-item label="区域">
                                <el-input
                                    class="inline-input"

                                    v-model="Area"
                                    placeholder="请输入内容"
                                    :trigger-on-focus="false"
                                    :debounce=0

                                ></el-input>
                            </el-form-item>
                            <el-form-item label="网络公司">
                                <el-input
                                    class="inline-input"

                                    v-model="Nex"
                                    placeholder="请输入内容"
                                    :trigger-on-focus="false"
                                    :debounce=0

                                ></el-input>
                            </el-form-item>


                            <div style="float: right;margin-top: 5px;">
                                <img src="../../assets/chaxun.png" alt="" style="width: 23px;height: 23px" >
                                <img src="../../assets/daochu.png" alt="" style="margin: 0 30px;width: 23px;height: 23px" >
                                <img src="../../assets/chongzhi.png" alt="" style="width: 23px;height: 23px">

                            </div>
                        </el-col>

                    </el-row>
                </el-form>
                <div style="background:#fff;padding: 10px;border-radius: 10px">
                    <el-row>

                        <el-col style="margin:10px 0" >
                            <div style="display: flex;align-items: center;justify-content: space-between">
                                <div style="font-family: cursive;float: right">订单量合计:350条信息</div>
                                <!--                        <el-button  plain  style="background: #649EFE;color:#fff" @click="addSendDetails()">新增</el-button>-->
                            </div>
                        </el-col>

                        <el-col>
                            <el-table
                                :header-cell-style="{background:'#EFF3F8'}"
                                stripe

                                ref="multipleTable"
                                :data="tableData"

                                style="width: 100%">


                                <el-table-column
                                    type="selection"
                                    width="60"
                                    align="center"
                                ></el-table-column>

                                <el-table-column
                                    label="区域"

                                    prop="Area"
                                    align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                    label="网络公司"
                                    align="center"
                                    :show-overflow-tooltip="true"
                                    prop="count">
                                </el-table-column>
                                <el-table-column
                                    label="客户数量"
                                    align="center"

                                    prop="Manager">
                                </el-table-column>
                                <el-table-column
                                    label="订单量"
                                    align="center"
                                    :show-overflow-tooltip="true"
                                    prop="Telephone">
                                </el-table-column>
                                <el-table-column
                                    label="件数"
                                    align="center"

                                >
                                </el-table-column>
                                <el-table-column
                                    label="取件准时率"
                                    align="center"

                                >
                                </el-table-column>

                                <el-table-column
                                    align="center"
                                    label="操作">
                                    <template slot-scope="scope">
                                        <el-button  size="small"  style="color: #1ab394;border: 1px solid #1ab394" plain @click.native.prevent="DetailsChild(scope.row)">详情</el-button>
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


            </div>

        </div>
    </div>


</template>

<script>

    export default {
        name: "OrdersRtatistics",
        data() {
            return {
                company:'',
                cur_page: 1,//当前页
                limit: 20, //每页多少条
                ccc: 500, //总tiao数
                xdtime:'',
                loading:false,
                Nex:'',
                Area:'',
                tableData:[
                    {
                        count: '石家庄公司',
                        Area: '华北区',
                    },
                    {
                        count: '重庆公司',
                        Area: '华北区',
                    },
                    {
                        count: '呼和浩特公司',
                        Area: '华北区',
                    },
                ],


            }
        },
        mounted() {
            this.Area = this.$route.query.Area;
            this.Area2 = this.$route.query.Area;

            this.company = window.sessionStorage.getItem('compony');

        },
        methods: {
            DetailsChild(row){
                this.$router.push({
                    path: "/CargoStatisticsDetails",
                    query: {
                        Nex:  row.count,
                    }


                });

            },
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

