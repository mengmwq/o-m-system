<template>
    <div class="divBut">
        <div  v-loading="loading"  element-loading-text="拼命加载中" >
            <el-form :inline="true" class="demo-form-inline">
                <el-row style="display: flex;align-items: center;">
                    <el-col>
                        <el-form-item >
                            <div class="block">
                                <el-date-picker v-model="xdtime" type="datetimerange" value-format="yyyy-MM-dd HH:mm:ss" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                                </el-date-picker>
                            </div>
                        </el-form-item>


                        <div style="float: right;margin-top: 5px;">
                            <img src="../../assets/chaxun.png"  style="width: 23px;height: 23px;margin: 0 30px;"  @click="getData">
<!--                            <img src="../../assets/daochu.png" style="margin: 0 30px;width: 23px;height: 23px" >-->
                            <img src="../../assets/chongzhi.png"  style="width: 23px;height: 23px"  @click="refresh()">

                        </div>
                    </el-col>

                </el-row>
            </el-form>
            <div style="background:#fff;padding: 10px;border-radius: 10px">
            <el-row>
                <el-col style="margin:10px 0" >
                    <div style="display: flex;align-items: center;justify-content: space-between">
                        <div style="font-family: cursive;border-left:4px solid #45A2DF"> &nbsp&nbsp区域订单-货量统计</div>

                    </div>

                </el-col>
                <el-col>
                    <el-table
                        :header-cell-style="{background:'#EFF3F8'}"
                        stripe

                        ref="multipleTable"
                        :data="tableData0"
                        style="width: 100%">



                        <el-table-column
                            type="selection"
                            width="60"
                            align="center"
                        ></el-table-column>

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
                            prop="Company"
                            align="center"
                        >
                        </el-table-column>
                        <el-table-column
                            label="客户数量"
                            align="center"
                            :show-overflow-tooltip="true"
                            prop="KHnumber">
                        </el-table-column>
                        <el-table-column
                            label="订单量"
                            align="center"

                            prop="Piao">
                        </el-table-column>
                        <el-table-column
                            label="件数"
                            align="center"
                            :show-overflow-tooltip="true"
                            prop="Jian">
                        </el-table-column>
                        <el-table-column
                            label="取件准时率"
                            align="center"
                            prop="ZhunShi"

                        >
                        </el-table-column>

                        <el-table-column
                            align="center"
                            label="操作">
                            <template slot-scope="scope">
                                <el-button  size="small"  style="color: #1ab394;border: 1px solid #1ab394" plain @click.native.prevent="DetailsChild(scope.row,'区域订单')">详情</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>


        </div>
            <div style="background:#fff;padding: 10px;border-radius: 10px">
                <el-row>
                    <el-col style="margin:10px 0" >
                        <div style="display: flex;align-items: center;justify-content: space-between">
                            <div style="font-family: cursive;border-left:4px solid #45A2DF"> &nbsp&nbsp货物类型-货量统计</div>

                        </div>

                    </el-col>
                    <el-col style="margin-bottom:80px;">
                        <el-table
                            :header-cell-style="{background:'#EFF3F8'}"
                            stripe

                            ref="multipleTable"
                            :data="tableData2"
                            style="width: 100%">



                            <el-table-column
                                type="selection"
                                width="60"
                                align="center"
                            ></el-table-column>

                            <el-table-column
                                label="货物类型"

                                prop="BusinessType"
                                align="center"
                            >
                            </el-table-column>
                            <el-table-column
                                label="客户数量"
                                align="center"
                                :show-overflow-tooltip="true"
                                prop="KHnumber">
                            </el-table-column>
                            <el-table-column
                                label="订单量"
                                align="center"

                                prop="Piao">
                            </el-table-column>
                            <el-table-column
                                label="件数"
                                align="center"
                                :show-overflow-tooltip="true"
                                prop="Jian">
                            </el-table-column>
                            <el-table-column
                                label="取件准时率"
                                align="center"
                                prop="ZhunShi"

                            >
                            </el-table-column>

                            <el-table-column
                                align="center"
                                label="操作">
                                <template slot-scope="scope">
                                    <el-button  size="small"  style="color: #1ab394;border: 1px solid #1ab394" plain @click.native.prevent="DetailsChild2(scope.row,'货物类型')">详情</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>


            </div>

        </div>

    </div>

</template>

<script>

    export default {
        name: "OrdersRtatistics",
        data() {
            return {
                tableData0:[],
                xdtime:'',
                loading:true,
                company:'',


                tableData2:[

                ],


            }
        },
        mounted() {
            this.company = window.sessionStorage.getItem('compony');
            // if(this.company  == "总部"){
            //     this.tableData0 = this.tableData;
            // }else{
            //     this.tableData0 = this.tableData1;
            // }
            this.getData()
        },
        methods: {
            //刷新页面渲染数据
            refresh(){
                this.cur_page = 1;
                this.loading = true;

                this.xdtime='';
                this.getData();

            },
            //渲染页面
            getData(){

                let _this = this;
                _this.loading = true;
                _this.$axios({
                    url:'http://out.ccsc58.cc/OMS/v1/public/index/reportcenter/goodsindex',
                    method: "post",
                    data: {

                        Company:this.company,
                        StartTime:this.xdtime[0]||'',
                        EndTime:this.xdtime[1]||'',



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
                    console.log(res);

                    if(res.data.code == 200){
                       // _this.$message.success(res.data.msg)
                        _this.loading = false;
                        _this.tableData0 = res.data.data.net;
                        _this.tableData2 = res.data.data.goods
                        _this.ccc = res.data.data.sum;
                    }else{
                        _this.$message.error(res.data.msg)
                    }

                })


            },
            DetailsChild(row,gg){
                if(this.company  == "总部"){
                    this.$router.push({
                        path: "/CargoNexDetails",
                        query: {
                            Area:  this.company  == "总部"?row.Area:row.Company,
                            leixin:gg
                        }

                    });
                }else{
                    this.$router.push({
                        path: "/CargoStatisticsDetails",
                        query: {
                            CompanyNet:  this.company  == "总部"?row.Area:row.Company,
                            leixin:gg
                    }

                    });
                }




            },
            DetailsChild2(row,gg){
                this.$router.push({
                    path: "/CargoNexDetails2",
                    query: {
                        BusinessType: row.BusinessType,
                        leixin:gg
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

    .el-table--striped .el-table__body tr.el-table__row--striped td {
        background: #F9FAFD;
    }
    .el-table .cell {
        font-size: 10px;
    }

    .curstomNum:not(.aaa) .cell {
        color: #649EFE !important;
    }
</style>
