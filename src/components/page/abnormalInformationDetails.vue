<template>
    <div class="divBut" >
        <div  v-loading="loading"  element-loading-text="拼命加载中" >
            <el-form :inline="true" class="demo-form-inline" label-width="80px" >
                <el-row>
                    <el-col style="margin:10px 0" >
                        <div style="display: flex;align-items: center;justify-content: space-between">
                            <div  v-if="this.company == '总部'"> <span style="font-family: cursive;color: deepskyblue;" @click="backAbnormalInformation()">&nbsp&nbsp异常信息</span>><span style="font-family: cursive;" >{{Area==''?'合计':Area}}</span></div>
                            <div  v-else> <span style="font-family: cursive;color: deepskyblue;" @click="backAbnormalInformation()">&nbsp&nbsp异常信息</span>><span style="font-family: cursive;" >{{CompanyNet=='' ?'合计':CompanyNet}}</span></div>

                        </div>

                    </el-col>
                    <el-col >
                        <el-form-item label="客户账号">
                            <el-input  v-model="AccountNumber"></el-input>

                        </el-form-item>

                        <el-form-item label="订单号码">
                            <el-input  v-model="ID" ></el-input>
                        </el-form-item>

                        <el-form-item label="录入人">
                            <el-input v-model="EntryName" suffix-icon="el-icon-date" :maxlength="255">

                            </el-input>
                        </el-form-item>



                    </el-col>
                    <el-col>

                        <el-form-item label="区域" v-show="this.company =='总部'" >
                            <el-select v-model="Area" filterable  @focus="focus($event)">
                                <!--<el-option label="请选择" value=""></el-option>-->
                                <el-option
                                    v-for="item in roles"
                                    :key="item.ROW_NUMBER"
                                    :label="item.Area"
                                    :value="item.Area">
                                </el-option>
                            </el-select>
                            <el-form-item label="网络公司" v-show="this.company =='总部'">

                                <el-select v-model="CompanyNet" filterable  @focus="focus($event)">
                                    <!--<el-option label="请选择" value=""></el-option>-->
                                    <el-option
                                        v-for="item in ComPanN"
                                        :key="item.ROW_NUMBER"
                                        :label="item.Company"
                                        :value="item.Company">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                        </el-form-item>
                        <el-form-item label="网络公司" v-show="this.company !=='总部'">
                            <!--                            <el-input v-model="CompanyNet"></el-input>-->

                            <el-select v-model="CompanyNet" filterable  @focus="focus($event)">
                                <!--<el-option label="请选择" value=""></el-option>-->
                                <el-option
                                    v-for="item in ComPanNFk"
                                    :key="item.ROW_NUMBER"
                                    :label="item.Company"
                                    :value="item.Company">
                                </el-option>
                            </el-select>
                        </el-form-item>

                        <div style="float: right">
                            <img src="../../assets/chaxun.png" alt="" style="width: 23px;height: 23px" @click="getData">
                            <img src="../../assets/daochu.png" alt="" style="margin: 0 30px;width: 23px;height: 23px" @click="dataExport()"  v-if="company == '总部'">
                            <img src="../../assets/daochu.png" alt="" style="margin: 0 30px;width: 23px;height: 23px" @click="dataExport2()"  v-if="company !== '总部'">
                            <img src="../../assets/chongzhi.png" alt=""   style="width: 23px;height: 23px"  @click="refresh()">

                        </div>
                    </el-col>

                </el-row>
            </el-form>
            <div style="background:#fff;padding: 10px;border-radius: 10px" >
                <el-row>
                    <el-col style="margin:10px 0">
                        <div style="display: flex;align-items: center;justify-content: space-between">
                            <div style="font-family: cursive;">共计:{{ccc}}条异常</div>
                            <!--                        <el-button  plain  style="background: #649EFE;color:#fff" @click="addSendDetails()">新增</el-button>-->
                        </div>

                    </el-col>
                    <el-col>
                        <el-table
                            :header-cell-style="{background:'#EFF3F8'}"
                            stripe

                            ref="multipleTable"
                            @selection-change="handleSelectionChange"
                            height="400"
                            :data="tableData"
                            id='tableData'
                            style="width: 100%">
                            <el-table-column type="selection" width="55">
                            </el-table-column>
                            <el-table-column
                                label="区域"
                                v-if="company == '总部'"
                                prop="CompanyArea"
                                align="center"
                            >
                            </el-table-column>
                            <el-table-column
                                label="网络公司"
                                v-else
                                prop="CompanyNet"
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
                                label="订单号"
                                align="center"

                                prop="id">
                            </el-table-column>

                            <el-table-column
                                label="货物类型"
                                align="center"

                                prop="BusinessType">
                            </el-table-column>
                            <el-table-column
                                label="产品名称"
                                align="center"
                                prop="CargoName">
                            </el-table-column>

                            <el-table-column
                                align="center"
                                label="温度区间"

                                prop="WDQJ">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                label="原因类型"

                                prop="CityCode">
                            </el-table-column>


                            <el-table-column

                                label="异常内容"
                                align="center"
                                prop="NotReason">
                            </el-table-column>
                            <el-table-column
                                label="录入时间"
                                :show-overflow-tooltip="true"
                                align="center"
                                prop="Indate">
                            </el-table-column>
                            <el-table-column

                                align="center"
                                label="录入人"
                                prop="entryname">
                            </el-table-column>
                            <el-table-column
                                v-if="company == '总部'"
                                align="center"
                                label="网络公司"
                                prop="CompanyNet">
                            </el-table-column>
                            <el-table-column

                                align="center"
                                label="备注"
                                :show-overflow-tooltip="true"
                                prop="note1">
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
</template>

<script>

    import htmlToPdf from '../../js/htmlToPdf';

    export default {
        name: "SenderManagement",
        data() {
            return {
                roles:[],
                ComPanN:[],
                ComPanNFk:[],
                CompanyNet:'',
                Nex:'',
                AccountNumber:'',
                EntryName:'',
                Area: '',
                Company:'',
                value1: '',
                cur_page: 1,//当前页
                limit: 20, //每页多少条
                ccc: 0, //总tiao数
                addSendDetailsModel: false,
                EditDetailsModel: false,
                company: '',
                nex:'',
                ID:'',
                NEX: '',
                StartTime:'',
                tableData: [],
                EndTime:'',
                multipleSelection:[],

                loading:true,
            }
        },
        mounted() {
            this.Area = this.$route.query.Area;
            this.CompanyNet = this.$route.query.CompanyNet;
            this.StartTime = this.$route.query.StartTime;
            console.log(this.StartTime );

            this.EndTime = this.$route.query.EndTime
            console.log( this.EndTime)
            if(this.Area=="合计"){
                this.Area =''
            }else if(this.CompanyNet == "合计"){
                // console.log(window.sessionStorage.getItem('abnorData'),'梦健康');
                // let abnorData = JSON.parse(window.sessionStorage.getItem('abnorData'));
                // let arr = [];
                // abnorData.forEach((item,index) => {
                //     arr.push(item.Company);
                // })
                // this.CompanyNet = arr.join(',');
                // console.log(this.CompanyNet)
                // // this.CompanyNet =
                this.CompanyNet ='';
            }
            this.Nex = this.$route.query.Nex;
            this.company = window.sessionStorage.getItem('compony');
            this.getData();
            this.getAreaData();
            this.getnetData();
            this.getnetDataFk();
            // if(this.company  == "总部"){
            //     this.tableData0 = this.tableData;
            // }else{
            //     this.tableData0 = this.tableData2;
            // }
        },
        methods: {
            //导出时  选中几条下载几条出来
            handleSelectionChange(val) {
                // 选中的  当前条 数据
                this.multipleSelection = val;

            },
            //总部跳转到前一页
            backAbnormalInformation(){
                this.$router.push({
                    path: "/abnormalInformation",
                })
            },
            refresh(){
                this.cur_page = 1;
                this.loading = true;
                this.xdtime='';
                this.EntryName = '';
                this.ID = '';
                this.Area = '';
                this.AccountNumber = '';
                this.CompanyArea = '';
                this.value1 = '',
                this.CompanyNet = '';
                this.CompanyNet = '';
                this.getData();
                this.loading = false;
            },
            getnetDataFk(){
                let _this = this;
                _this.$axios({
                    url: 'http://out.ccsc58.cc/OMS/v1/public/index/reportcenter/fknet',
                    method: "post",
                    data: {
                        Company: this.company,
                        fkNet:this.CompanyNet,
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
                    _this.ComPanNFk = res.data.data;
                })

            },
            //获取区域
            getAreaData() {
                let _this = this;
                _this.$axios({
                    url: 'http://out.ccsc58.cc/OMS/v1/public/index/reportcenter/checkarea',
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
            //获取网络公司
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
            focus(event){

                this.getAreaData()
                this.getnetData()
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
                            "区域",
                            "客户账号",
                            "订单号",
                            "货物类型",
                            "产品名称",
                            "温度区间",
                            "原因类型",
                            "异常内容",
                            "录入时间",
                            "录入人",
                            "网络公司",
                            "备注",






                        ];
                        // 这就是 对应的 字段
                        const filterVal = [
                            "CompanyArea",
                            "AccountNumber",
                            "id",
                            "BusinessType",
                            "CargoName",
                            "WDQJ",
                            "CityCode",
                            "NotReason",
                            "Indate",
                            "entryname",
                            "CompanyNet",
                            "note1",



                        ];
                        const list = res;
                        this.loading = false;
                        const data = this.formatJson(filterVal, list);
                        export_json_to_excel(tHeader, data, "异常信息区域详情表");  // 这是  excel文件名
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
                            "客户账号",
                            "订单号",
                            "货物类型",
                            "产品名称",
                            "温度区间",
                            "原因类型",
                            "异常内容",
                            "录入时间",
                            "录入人",
                            "备注",
                        ];
                        // 这就是 对应的 字段
                        const filterVal = [
                            "CompanyNet",
                            "AccountNumber",
                            "id",
                            "BusinessType",
                            "CargoName",
                            "WDQJ",
                            "CityCode",
                            "NotReason",
                            "Indate",
                            "entryname",
                            "note1",
                        ];
                        const list = res;
                        this.loading = false;
                        const data = this.formatJson(filterVal, list);
                        export_json_to_excel(tHeader, data, "异常信息分控详情表");  // 这是  excel文件名
                    });
                });
            },
            formatJson: function (filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]));
            },
            //获取表格
            getData(){

                let _this = this;
                _this.$axios({
                    url:'http://out.ccsc58.cc/OMS/v1/public/index/reportcenter/abnormaldetails',
                    method: "post",
                    data: {
                        PageSize:this.limit,
                        Page: this.cur_page,//当前页码
                        Company:this.company,
                        Area:this.Area||'',
                        CompanyNet: this.CompanyNet||'',
                        AccountNumber:this.AccountNumber,
                        EntryName:this.EntryName,
                        ID:this.ID,
                        StartTime:this.StartTime,
                        EndTime:this.EndTime
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


                    if(res.data.code == 200||400){
                       // _this.$message.success(res.data.msg)
                        _this.loading = false;
                        _this.tableData = res.data.data.result;
                        _this.ccc = res.data.data.sum||0;
                       // _this.CompanyNet = '';
                    }else{
                        _this.$message.error(res.data.msg)
                        _this.loading = false;
                    }

                })


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


        }
    }

</script>

<style>
    .el-select {
        display: inline-block;
        position: relative;
        margin-right: 10px;
    }
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

    .el-table--striped .el-table__body tr.el-table__row--striped td {
        background: #F9FAFD;
    }

    .el-table .cell {
        font-size: 10px;
    }


</style>
<style scoped>

</style>



