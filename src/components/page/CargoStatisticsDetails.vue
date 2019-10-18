<template>
    <div class="divBut">
        <div style="background: #eee;padding: 20px " v-if="this.company == '总部'"><span @click="backargoStatistics()" style="cursor: pointer;color: deepskyblue;">{{leixin}}</span>><span v-if="this.leixin=='货物类型'">{{BusinessType}}</span>
            <span v-if="this.leixin!=='货物类型'" @click="backCargoNexDetails()">{{Area==''?'合计':Area}}</span>>{{CompanyNet==''?'合计':CompanyNet}}</div>
        <div style="background: #eee;padding: 20px " v-else><span @click="backargoStatistics()" style="cursor: pointer;color: deepskyblue;">{{leixin}}</span>><span>{{BusinessType}}</span>>{{CompanyNet==''?'合计':CompanyNet}}</div>
        <div  >
            <el-form :inline="true" class="demo-form-inline" style="margin-top: 10px"  label-width="80px">
                <el-row>
                    <el-col>
                        <el-form-item label="区域" v-show="this.company == '总部'">
                            <el-select v-model="Area" filterable  @focus="focus($event)">
                                <!--<el-option label="请选择" value=""></el-option>-->
                                <el-option
                                    v-for="item in roles"
                                    :key="item.ROW_NUMBER"
                                    :label="item.Area"
                                    :value="item.Area">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="网络公司" v-show="this.company == '总部'">
                            <el-select v-model="CompanyNet" filterable style="width: 200px;" @focus="focus($event)">
                                <!--<el-option label="请选择" value=""></el-option>-->
                                <el-option
                                    v-for="item in ComPanN"
                                    :key="item.ROW_NUMBER"
                                    :label="item.Company"
                                    :value="item.Company">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="网络公司"  v-if="company !== '总部'">
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

                        <el-form-item label="客户账号">
                            <el-input   v-model="AccountNumber"></el-input>

                        </el-form-item>
                        <el-form-item label="订单号">
                            <el-input
                                style="width: 130px"
                                v-model="ID"
                            ></el-input>
                        </el-form-item>
                       </el-col>
                    <el-col>

                        <el-form-item label="温区">
                            <el-select v-model="WDQJ" filterable  @focus="focus($event)">
                                <!--<el-option label="请选择" value=""></el-option>-->
                                <el-option
                                    v-for="item in wdqjq"
                                    :key="item.ROW_NUMBER"
                                    :label="item.WDQJ"
                                    :value="item.WDQJ">
                                </el-option>
                            </el-select>
                            <!--                            <el-input  v-model="WDQJ"></el-input>-->
                        </el-form-item>
                        <el-form-item label="箱型" v-if="this.WDQJ !==''">
                            <el-select v-model="PackageName" filterable  @focus="focus($event)">
                                <!--<el-option label="请选择" value=""></el-option>-->
                                <el-option
                                    v-for="item in xxcontent"
                                    :key="item.ROW_NUMBER"
                                    :label="item.PackageType"
                                    :value="item.PackageType">
                                </el-option>
                            </el-select>

                        </el-form-item>
                        <el-form-item label="箱型"  v-else="this.WDQJ ==''">
                            <el-select v-model="PackageName" filterable  @focus="focus($event)">
                                <!--<el-option label="请选择" value=""></el-option>-->
                                <el-option
                                    v-for="item in xxcontent2"
                                    :key="item.ROW_NUMBER"
                                    :label="item.PackageType"
                                    :value="item.PackageType">
                                </el-option>
                            </el-select>


                        </el-form-item>

                        <el-form-item label="货物类型">
                            <el-select v-model="GoodsType" filterable  placeholder="请选择">
                                <el-option label="请选择" value=""></el-option>
                                <el-option label="试剂" value="试剂"></el-option>
                                <el-option label="药品" value="药品"></el-option>
                                <el-option label="样品" value="样品"></el-option>
                                <el-option label="普货" value="普货"></el-option>
                                <el-option label="器械" value="器械"></el-option>
                            </el-select>
                        </el-form-item>

                        <div style="float: right">
                            <img src="../../assets/chaxun.png" alt=""  style="width: 23px;height: 23px" @click="getData" >
                            <img src="../../assets/daochu.png" alt="" style="margin: 0 30px;width: 23px;height: 23px" @click="downloadtable">
                            <img src="../../assets/chongzhi.png" alt=""   style="width: 23px;height: 23px"  @click="refresh()">
                        </div>
                    </el-col>

                </el-row>
            </el-form>
            <div style="background:#fff;padding: 10px;border-radius: 10px">
                <el-row>
                    <el-col style="margin:10px 0" >
                        <div style="display: flex;align-items: center;justify-content: space-between">
                          <el-form  label-width="80px!important">
                            <el-form-item>
                                <el-radio-group v-model="Delay">
                                    <el-radio label="全部" value=""></el-radio>
                                    <el-radio label="是"></el-radio>
                                    <el-radio label="否"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                          </el-form>
                            <div style="font-family: cursive;">订单量合计:{{ccc}}条信息</div>
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
                                v-if="this,company == '总部'"
                                prop="Area"
                                align="center"
                            >
                            </el-table-column>
                            <el-table-column
                                label="网络公司"
                                align="center"

                                prop="CompanyNet">
                            </el-table-column>
                            <el-table-column
                                label="客户账号"
                                align="center"
                                class-name="curstomNum"
                                label-class-name="aaa"
                                prop="">
                                <template slot-scope="scope">
                                    <el-popover trigger="hover" placement="top">
                                        <p>客户账号: {{scope.row.AccountNumber}}</p>
                                        <p>联系人: {{scope.row.Manager}}</p>
                                        <p>联系电话: {{scope.row.Telephone}}</p>
                                        <p>公司名称: {{scope.row.UnitName}}</p>
                                        <p>销售人员: {{scope.row.SaleName}}</p>
                                        <p>结算方式: {{scope.row.CountType}}</p>
                                        <p>客户类型:{{scope.row.CompanyType}} </p>
                                        <div slot="reference" class="name-wrapper">
                                            <el-tag size="medium">{{ scope.row.AccountNumber }}</el-tag>
                                        </div>
                                    </el-popover>
                                </template>

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
                                align="center"
                                label="件数"

                                prop="Jian">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                label="下单时间"
                                :show-overflow-tooltip="true"
                                prop="Indate">
                            </el-table-column>


                            <el-table-column

                                label="时限"
                                align="center"
                                prop="LimitTime">
                            </el-table-column>
                            <el-table-column
                                label="要求取件时间"
                                :show-overflow-tooltip="true"
                                align="center"
                                prop="OrderTime">
                            </el-table-column>
                            <el-table-column

                                align="center"
                                label="实际取件时间"
                                :show-overflow-tooltip="true"
                                prop="TakeTimes">
                            </el-table-column>
                            <el-table-column

                                align="center"
                                label="延迟"
                                prop="Delay">
                            </el-table-column>
                            <el-table-column

                                align="center"
                                label="温区"
                                prop="WDQJ">
                            </el-table-column>
                            <el-table-column

                                align="center"
                                label="箱型数量"
                                prop="">
                                <template slot-scope="scope">
                                    <span>{{scope.row.PackageName}}*</span>
                                    <span>{{scope.row.PackageJian}}</span>
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


</template>

<script>

    import htmlToPdf from '../../js/htmlToPdf';
    export default {
        name: "CargoStatisticsDetails",
        data() {
            return {
                BusinessType:'',
                roles:[],
                xxcontent:[],
                xxcontent2:[],
                wdqjq:[],
                ComPanN:[],
                roles:[],
                companyN:'',
                leixin:'',
                ComPanNFk:[],
                company:'',
                resource:'',
                Nex:'',
                Area:'',
                Area2:'',
                loading:true,
                yanchi:'',
                region:'',
                cur_page: 1,//当前页
                limit: 20, //每页多少条
                ccc: 500, //总tiao数
                addSendDetailsModel:false,
                EditDetailsModel:false,
                tableData: [],
                NeCompanyNetx:'',
                CompanyNet:'',
                WDQJ:'',
                ID:'',
                GoodsType:'',
                PackageName:'',
                Delay:'',
                AccountNumber: '',
                multipleSelection:'',


            }
        },
        mounted() {

            this.leixin = this.$route.query.leixin;
            this.Area = this.$route.query.Area;
             this.BusinessType = this.$route.query.BusinessType;
            this.CompanyNet = this.$route.query.CompanyNet;

            if(this.Area=="合计"){
                this.Area ='';
            }
            if(this.CompanyNet=="合计"){
                this.CompanyNet ='';
            }

            this.company = window.sessionStorage.getItem('compony');
            this.getData();
            this.getnetDataFk();
            this.getnetData();
            this.getwdqjq();
            this.getxxcontent();
            this.getxxcontent2();
            this.getAreaData()

        },


        methods:{
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
            getxxcontent2(){
                let _this = this;
                _this.$axios({
                    url: 'http://out.ccsc58.cc/OMS/v1/public/index/orderdown/box',
                    method: "post",

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
                    _this.xxcontent2 = res.data.data;
                })
            },
            getxxcontent(){
                let _this = this;
                _this.$axios({
                    url: 'http://out.ccsc58.cc/OMS/v1/public/index/orderdown/wdqj',
                    method: "post",
                    data: {
                        WDQJ: this.WDQJ,


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
                    _this.xxcontent = res.data.data;
                })
            },
            getwdqjq(){
                let _this = this;
                _this.$axios({
                    url: 'http://out.ccsc58.cc/OMS/v1/public/index/orderdown/wdqj',
                    method: "post",
                    // data: {
                    //     Company: this.company,
                    //     Area:this.Area
                    //
                    // },
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
                    _this.wdqjq = res.data.data;
                })
            },
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
            getnetDataFk(){
                let _this = this;
                _this.$axios({
                    url: 'http://out.ccsc58.cc/OMS/v1/public/index/reportcenter/fknet',
                    method: "post",
                    data: {
                        Company: this.company,
                        fkNet:this.CompanyNet


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
            //刷新页面渲染数据
            refresh(){
                this.cur_page = 1;
                this.loading = true;
                this.Area=''
                this.ID='';
                this.PackageName;
                this.WDQJ = '';
                this.GoodsType = '';
                this.PackageName='';
                this.CompanyNet = '';

                this.AccountNumber='';
                this.getData();
                this.loading = false;
            },
            //跳到区域订单首页
            backargoStatistics(){
                this.$router.push({
                        path: "/CargoStatistics",

            })
            },
            backCargoNexDetails(){
                this.$router.push({
                    path:'/CargoNexDetails'
                })
            },
            focus(event) {
                this.getnetData();
                this.getnetDataFk();
                this.getwdqjq();
                this.getxxcontent();
                this.getAreaData()
                console.log(1)
            },
            downloadtable(){
//              htmlToPdf.downloadPDF( document.querySelector('#tableData'),'货量统计');
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
                            "网络公司",
                            "客户账号",
                            "订单号",
                            "货物类型",
                            "件数",
                            "下单时间",
                            "时限",
                            "要求取件时间",
                            "实际取件时间",
                            "延时",
                            "温区",
                            "箱型数量"

                        ];
                        // 这就是 对应的 字段
                        const filterVal = [
                            "Area",
                            "CompanyNet",
                            "AccountNumber",
                            "id",
                            "GoodsType",
                            "Jian",
                            "Indate",
                            "LimitTime",
                            "OrderTime",
                            "TakeTimes",
                            "Delay",
                            "WDQJ",
                            "PackageName"
                        ];
                        const list = res;
                        this.loading = false;
                        const data = this.formatJson(filterVal,list);
                        export_json_to_excel(tHeader, data, "区域订单");  // 这是  excel文件名
                    });
                });
            },
            //获取表格
            getData(){
                let _this = this;
                _this.$axios({
                    url:'http://out.ccsc58.cc/OMS/v1/public/index/reportcenter/goodsdetails',
                    method: "post",
                    data: {
                        PageSize:this.limit,
                        Page: this.cur_page,//当前页码
                        Company:this.company,
                        Area:this.Area||'',
                        CompanyNet: this.CompanyNet||'',
                        AccountNumber:this.AccountNumber,
                        Delay:this.Delay,
                        ID:this.ID,
                        GoodsType:this.GoodsType,
                        WDQJ:this.WDQJ,
                        PackageName:this.PackageName


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
            formatJson: function (filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]));
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

<style >
    .el-popover p {
        height: 30px;
        line-height: 30px;
        text-align: left;;
    }
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

    .el-table--striped .el-table__body tr.el-table__row--striped td {
        background: #F9FAFD;
    }
    .el-table .cell{
        font-size: 10px;
    }
    /*.el-form-item__label {*/

    /*    width: 68px;}*/
</style>
