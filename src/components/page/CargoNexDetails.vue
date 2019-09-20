<template>
    <div class="divBut">
        <div style="background: #eee;padding: 20px "    v-if="company == '总部'"><span @click="linkLast()">区域订单> </span>{{Area}}</div>

        <div >

            <div  v-loading="loading"  element-loading-text="拼命加载中" >

                <el-form :inline="true" class="demo-form-inline">
                    <el-row style="display: flex;align-items: center;">
                        <el-col>
                            <el-form-item label="区域">
                                <el-select v-model="Area" filterable style="width: 200px;" @focus="focus($event)">
                                    <!--<el-option label="请选择" value=""></el-option>-->
                                    <el-option
                                        v-for="item in roles"
                                        :key="item.ROW_NUMBER"
                                        :label="item.Area"
                                        :value="item.Area">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="网络公司">
                                <el-select v-model="Nex" filterable style="width: 200px;" @focus="focus($event)">
                                    <!--<el-option label="请选择" value=""></el-option>-->
                                    <el-option
                                        v-for="item in ComPanN"
                                        :key="item.ROW_NUMBER"
                                        :label="item.Company"
                                        :value="item.Company">
                                    </el-option>
                                </el-select>
                            </el-form-item>


                            <div style="float: right;margin-top: 5px;">
                                <img src="../../assets/chaxun.png" alt="" style="width: 23px;height: 23px"  @click="getData">
                                <img src="../../assets/daochu.png" alt="" style="margin: 0 30px;width: 23px;height: 23px" @click="dataExport" >
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
                                    prop="CompanyNet">
                                </el-table-column>
                                <el-table-column
                                    label="客户数量"
                                    align="center"

                                    prop="KHnumber">
                                </el-table-column>
                                <el-table-column
                                    label="订单量"
                                    align="center"
                                    :show-overflow-tooltip="true"
                                    prop="Piao">
                                </el-table-column>
                                <el-table-column
                                    label="件数"
                                    align="center"
                                    prop="Jian"

                                >
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
                                        <el-button  size="small"  style="color: #1ab394;border: 1px solid #1ab394" plain @click.native.prevent="DetailsChild(scope.row)">详情</el-button>
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

        </div>
    </div>


</template>

<script>

    export default {
        name: "OrdersRtatistics",
        data() {
            return {
                roles:[],
                companyN:'',
                company:'',
                cur_page: 1,//当前页
                limit: 20, //每页多少条
                ccc: 0, //总tiao数
                xdtime:'',
                loading:true,
                Nex:'',
                Area:'',
                ComPanN:[],
                tableData:[

                ],
                multipleSelection:''


            }
        },
        mounted() {
            this.Area = this.$route.query.Area;
            this.companyN = this.$route.query.Company;

            this.company = window.sessionStorage.getItem('compony');
            this.getData()
            this.getnetData()
            this.getAreaData()

        },
        methods: {
            //获取区域
            getAreaData() {
                let _this = this;
                _this.$axios({
                    url: 'http://out.ccsc58.cc/OMS/v1/public/index/reportcenter/checkarea\n',
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
            //huoqu
            getnetData() {
                let _this = this;
                _this.$axios({
                    url: 'http://out.ccsc58.cc/OMS/v1/public/index/reportcenter/checkareanet',
                    method: "post",
                    data: {
                        Company: this.company,
                        Area:this.Area

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
                    _this.ComPanN = res.data.data;
                })

            },
            getData(){
                let _this = this;
                _this.$axios({
                    url:'http://out.ccsc58.cc/OMS/v1/public/index/reportcenter/goodssecond',
                    method: "post",
                    data: {
                        PageSize:this.limit,
                        Page: this.cur_page,//当前页码
                        Company:this.company,
                        Area:this.Area,
                        companyNet: this.Nex,



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
                        _this.loading = false;
                    }

                })


            },
            //
            focus(event){
                this.getnetData();
                this.getAreaData()
            },
            handleSizeChange(val) {
                this.loading = true;

                // console.log(val); // 每页显示  条数
                this.limit = val;
                this.getData();
            },
            handleSelectionChange(val) {
                // 选中的  当前条 数据
                this.multipleSelection = val;

            },
            handleCurrentChange(val) {
                this.loading = true;
                this.cur_page = val;
                this.getData();
            },
            //点击区域订单跳到前一个页面
            linkLast(){
                this.$router.push({
                        path: "/CargoStatistics",


                    })
            },
            DetailsChild(row){
                this.$router.push({
                    path: "/CargoStatisticsDetails",
                    query: {
                        Area:  row.Area,
                        CompanyNet:row.CompanyNet
                    }


                });

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
                            "区域",
                            "网路公司",
                            "客户数量",
                            "订单量",
                            "件数",
                            "取件准时率"
                           

                        ];
                        // 这就是 对应的 字段
                        const filterVal = [
                            "Area",
                            "CompanyNet",
                            "KHnumber",
                            "Piao",
                            "Jian",
                            "ZhunShi"
                          
                        ];
                        const list = res;
                        this.loading = false;
                        const data = this.formatJson(filterVal,list);
                        export_json_to_excel(tHeader, data, "区域订单-货量统计");  // 这是  excel文件名
                    });
                });

            },
            formatJson: function (filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]));
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

