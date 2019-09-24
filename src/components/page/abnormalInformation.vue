<template>
    <div class="divBut">
        <div  v-loading="loading"  element-loading-text="拼命加载中" >
            <el-form :inline="true" class="demo-form-inline">
                <el-row style="display: flex;align-items: center;">
                    <el-col>
                        <el-form-item>
                            <div class="block">
                                <el-date-picker v-model="xdtime" type="datetimerange" value-format="yyyy-MM-dd HH:mm:ss" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                                </el-date-picker>
                            </div>
                        </el-form-item>
                        <div style="float: right;margin-top: 5px;">
                            <img src="../../assets/chaxun.png" alt="" style="width: 23px;height: 23px" @click="getData">
                            <img src="../../assets/daochu.png" alt="" style="margin: 0 30px;width: 23px;height: 23px" @click="dataExport()"  v-if="company == '总部'">
                            <img src="../../assets/daochu.png" alt="" style="margin: 0 30px;width: 23px;height: 23px" @click="dataExport2()"  v-if="company !== '总部'">
                            <img src="../../assets/chongzhi.png" alt=""   style="width: 23px;height: 23px"  @click="refresh()">
                        </div>
                    </el-col>

                </el-row>
            </el-form>
            <div style="background:#fff;padding: 10px;border-radius: 10px">
                <el-row>
<!--                    <el-col style="margin:10px 0" >-->
<!--                        <div style="display: flex;align-items: center;justify-content: space-between">-->
<!--                            <div style="font-family: cursive;border-left:4px solid blue"> &nbsp&nbsp异常统计</div>-->
<!--                        </div>-->
<!--                    </el-col>-->
                    <el-col>
                        <el-table
                            :header-cell-style="{background:'#EFF3F8'}"
                            stripe
                            border
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
                                label="订单量"
                                align="center"
                                :show-overflow-tooltip="true"
                                prop="Piao">
                            </el-table-column>
                            <el-table-column
                                label="客户取消"
                                align="center"

                                prop="cancelAccount">
                            </el-table-column>
                            <el-table-column
                                label="内部取消"
                                align="center"
                                :show-overflow-tooltip="true"
                                prop="cancelSelf">
                            </el-table-column>
                            <el-table-column
                                label="时间变更"
                                align="center"
                                prop="cancelChange"

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


            </div>

        </div>

    </div>

</template>

<script>

    export default {
        name: "OrdersRtatistics",
        data() {
            return {
                xdtime:'',

                company:'',
                tableData0:[],
                loading:true,
                multipleSelection:[]

            }
        },
        mounted() {
            this.company = window.sessionStorage.getItem('compony');

            // if(this.company  == "总部"){
            //     this.tableData0 = this.tableData;
            // }else{
            //     this.tableData0 = this.tableData2;
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
                this.loading = false;
            },
            //daochu
            //导出   导出时需要依赖xlsx file-saver Blob.js  Export2Excel
            dataExport() {
                this.loading = true;
                let import_file;
                new Promise((resolve, reject) => {
                    import_file = this.multipleSelection;
                    if (import_file.length == 0) {
                        //this.limit = 10000;
                        // this.getData();
                        import_file = this.tableData0;

                    }
                    resolve(import_file);
                }).then(res => {
                    // console.log(res);return;
                    require.ensure([], () => {
                        const {export_json_to_excel} = require("../../js/Export2Excel");
                        // 这就是表头 展示的表头
                        const tHeader = [
                            "区域",
                            "订单量",
                            "客户取消",
                            "内部取消",
                            "时间变更",


                        ];
                        // 这就是 对应的 字段
                        const filterVal = [
                            "Area",
                            "Piao",
                            "cancelAccount",
                            "cancelSelf",
                            "cancelChange",


                        ];
                        const list = res;
                        this.loading = false;
                        const data = this.formatJson(filterVal, list);
                        export_json_to_excel(tHeader, data, "异常信息表");  // 这是  excel文件名
                    });
                });

            },
            formatJson: function (filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]));
            },
            //导出   导出时需要依赖xlsx file-saver Blob.js  Export2Excel
            dataExport2() {
                this.loading = true;
                let import_file;
                new Promise((resolve, reject) => {
                    import_file = this.multipleSelection;
                    if (import_file.length == 0) {
                        //this.limit = 10000;
                        // this.getData();
                        import_file = this.tableData0;

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
                            "客户取消",
                            "内部取消",
                            "时间变更",


                        ];
                        // 这就是 对应的 字段
                        const filterVal = [
                            "Company",
                            "Piao",
                            "cancelAccount",
                            "cancelSelf",
                            "cancelChange",


                        ];
                        const list = res;
                        this.loading = false;
                        const data = this.formatJson(filterVal, list);
                        export_json_to_excel(tHeader, data, "异常信息表");  // 这是  excel文件名
                    });
                });

            },
            formatJson: function (filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]));
            },
            getData(){
                let _this = this;
                _this.$axios({
                    url:'http://out.ccsc58.cc/OMS/v1/public/index/reportcenter/abnormalindex',
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
                        _this.$message.success(res.data.msg)
                        _this.loading = false;
                        _this.tableData0 = res.data.data;

                        _this.ccc = res.data.data.sum;
                    }else{
                        _this.$message.error(res.data.msg)
                    }

                })


            },
            DetailsChild(row){
                if(this.company  == "总部"){
                    this.$router.push({
                        path: "/abnormalInformationDetails",
                        query: {
                            // if(this.company  == "总部"){
                            //     this.tableData0 = this.tableData;
                            // }else{
                            //     this.tableData0 = this.tableData2;
                            // }
                            Area:  this.company  == "总部"?row.Area:row.Company,

                        }

                    });
                }else{
                    window.sessionStorage.setItem('abnorData',JSON.stringify(this.tableData0));

                    this.$router.push({
                        path: "/abnormalInformationDetails",
                        query: {
                            // if(this.company  == "总部"){
                            //     this.tableData0 = this.tableData;
                            // }else{
                            //     this.tableData0 = this.tableData2;
                            // }
                            CompanyNet:  this.company  == "总部"?row.Area:row.Company,

                        }
                    });
                }


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
