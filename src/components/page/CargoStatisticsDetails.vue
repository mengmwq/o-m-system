<template>
    <div>
        <div style="background: #eee;padding: 20px ">区域订单>网络公司>中集冷云石家庄分公司</div>
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

                    </el-col>
                    <el-col >
                        <el-form-item label="温区">
                            <el-autocomplete
                                class="inline-input"


                                placeholder="请输入内容"
                                :trigger-on-focus="false"
                                :debounce=0

                            ></el-autocomplete>
                        </el-form-item>
                        <el-form-item label="箱型">
                            <el-autocomplete
                                class="inline-input"


                                placeholder="请输入内容"
                                :trigger-on-focus="false"
                                :debounce=0

                            ></el-autocomplete>
                        </el-form-item>
                        <el-form-item label="货物类型">
                            <el-select v-model="region" filterable  placeholder="请选择">
                                <el-option label="请选择" value=""></el-option>
                                <el-option label="试剂" value="2"></el-option>
                                <el-option label="药品" value="1"></el-option>
                                <el-option label="待审核" value="0"></el-option>
                            </el-select>
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
                                label="延迟"
                                prop="yanchi">
                            </el-table-column>
                            <el-table-column

                                align="center"
                                label="温区"
                                prop="wenqu">
                            </el-table-column>
                            <el-table-column

                                align="center"
                                label="箱型数量"
                                prop="xianxin">
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


</template>

<script>

    import htmlToPdf from '../../js/htmlToPdf';
    export default {
        name: "SenderManagement",
        data() {
            return {

                yanchi:'',
                region:'',
                cur_page: 1,//当前页
                limit: 20, //每页多少条
                ccc: 500, //总tiao数
                addSendDetailsModel:false,
                EditDetailsModel:false,
                tableData: [
                    {
                        id: '12987122',
                        name: '石家庄公司',
                        category: '12345',
                        AccoutNumber: '15001015750',
                        shoujian: '山西',
                        shixian: '临汾',
                        isfu:'开发区',
                        order:'建设路',
                        net:'2019/08/02 9:00',
                        xiadan:'2019/08/02 10:00',
                        yanchi:'是',
                        wenqu:'2℃~8℃',
                        xianxin:'130L*2'

                    },



                    {
                        id: '865',
                        name: '石家庄公司',
                        yanchi:'否',
                        category: '456468',
                        AccoutNumber: '15001015750',
                        shoujian: '山西',
                        shixian: '临汾',
                        isfu:'开发区',
                        order:'建设路',
                        xiadan:'2019/08/02 9:00',
                        net:'2019/08/02 10:00',
                        wenqu:'-25℃~-15℃',
                        xianxin:'自备包材'

                    },

                ],


            }
        },

        // mounted(){
        //     let _this = this;
        //     let contactDot = 0;
        //     _this.tableData.forEach( (item,index) => {
        //         if(index===0){
        //             _this.spanArr.push(1)
        //         }else{
        //             if(item.id === _this.tableData[index-1].id){
        //                 _this.spanArr[contactDot] += 1;
        //                 _this.spanArr.push(0)
        //             }else{
        //                 contactDot = index
        //                 _this.spanArr.push(1)
        //             }
        //         }
        //     })
        // },


        methods:{
            focus(event) {
                console.log(1)
            },
            downloadtable(){
                htmlToPdf.downloadPDF( document.querySelector('#tableData'),'货量统计');
            },
            // objectSpanMethod({row, column, rowIndex, columnIndex}){
            //     if(columnIndex ===0){
            //         if(this.spanArr[rowIndex]){
            //             return {
            //                 rowspan:this.spanArr[rowIndex],
            //                 colspan:1
            //             }
            //         }else{
            //             return {
            //                 rowspan: 0,
            //                 colspan: 0
            //             }
            //         }
            //     }
            // }




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
