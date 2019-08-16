<template>
    <div class="container" >
        <div  v-loading="isLoad"  element-loading-text="拼命加载中" >
            <el-row>
                <el-col>
                    <el-row :gutter="24"  >
                        <el-col :span="24" >
                            <div style="border:0.1px solid #fff;">
                                <el-row  :gutter="24" style="background: #fff;padding: 5px 30px 5px 5px;border-bottom: 1px solid #ccc; border-top-right-radius:15px;border-top-left-radius:15px;">
                                    <el-col :span="10" >
                                        <el-button
                                            size="mini"
                                            :class="isday ? 'blackDefault' : 'blueActive'"
                                            @click="CLSD(1)"
                                        >日
                                        </el-button>
                                        <el-button
                                            size="mini"
                                            :class="isWeek ? 'blackDefault' : 'blueActive'"
                                            @click="CLSD(0)"
                                        >周
                                        </el-button>
                                        <el-button
                                            size="mini"
                                            :class="isMonth ? 'blackDefault' : 'blueActive'"
                                            @click="CLSD(2)">月
                                        </el-button>
                                    </el-col>
                                    <el-col :span="13">订单</el-col>
                                    <el-col :span="1"> <el-button size="mini" type="primary" class="btn-cancel" plain @click="breakordersRtatistics">More</el-button></el-col>

                                </el-row>
                                <el-row  :gutter="24" style="background: #fff;padding: 5px;">
                                    <el-col :span="21" >
                                        <div id="orderChart" style="width:100%;height:100px; text-align: center"></div>
                                    </el-col>
                                    <el-col :span="3"  style="height: 150px;text-align: center">
                                        <div style="padding: 30px 0;font-weight: 800">{{countNow}}</div>
                                        <div>{{changeL}}(票)</div>
                                    </el-col>


                                </el-row>
                                <el-row  :gutter="24" style="background: #EEEEEE; border-bottom-right-radius:15px; border-bottom-left-radius:15px;padding:5px 0">

                                    <el-col :span="12"  style="border-right:1px solid #fff">

                                        <div style="text-align: center;font-family: cursive">{{changeDay}}</div>
                                        <div style="text-align: center;color:#e64242">{{countYesterday}}</div>
                                    </el-col>
                                    <el-col :span="12" >

                                        <div style="text-align: center;font-family: cursive">累计</div>
                                        <div style="text-align: center;color:#e64242">{{countMonth}}</div>
                                    </el-col>


                                </el-row>


                            </div>
                        </el-col>

                    </el-row>
                </el-col>
            </el-row>

            <el-row style="margin:20px 0;">
                <el-col>
                    <el-row :gutter="24"  >
                        <el-col :span="18"  style="margin:0 0   0  0;display: flex;justify-content: space-between;padding:0;">
                            <div style="background: #fff;height:50px;width:23%;display: flex;align-items: center;justify-content: center;border-radius: 8px">
                                <span style="font-family: cursive">指令下达</span>
                                <span style="color:#5D9DD2;">&nbsp&nbsp&nbsp&nbsp{{countNow}}</span>
                            </div>
                            <div style="background: #fff;height:50px;width:23%;display: flex;align-items: center;justify-content: center;border-radius: 8px">
                                <span style="font-family: cursive">指令取消</span>
                                <span style="color:#5D9DD2;">&nbsp&nbsp&nbsp&nbsp{{countQuXiao}}<br>&nbsp&nbsp&nbsp&nbsp<font style="font-size: 12px;color:#B6B6B6;font-family: cursive">占1.5%</font></span>
                            </div>
                            <div style="background: #fff;height:50px;width:23%;display: flex;align-items: center;justify-content: center;border-radius: 8px">
                                <span style="font-family: cursive">已安排</span>
                                <span style="color:#5D9DD2;">&nbsp&nbsp&nbsp&nbsp{{countAnPai}}<br>&nbsp&nbsp&nbsp&nbsp<font style="font-size: 12px;color:#B6B6B6;font-family: cursive">变更率1.5%</font></span>
                            </div>
                            <div style="background: #fff;height:50px;width:23%;display: flex;align-items: center;justify-content: center;border-radius: 8px">
                                <span style="font-family: cursive">取件完成</span>
                                <span style="color:#5D9DD2;">&nbsp&nbsp&nbsp&nbsp{{countWanChen}}<br>&nbsp&nbsp&nbsp&nbsp<font style="font-size: 12px;color:#B6B6B6;font-family: cursive">准时率1.5%</font></span>

                            </div>


                        </el-col>
                        <el-col :span="5"  :offset="1" style="display: flex;justify-content: space-between;padding:0;">
                            <div style="background: #fff;height:50px;width:48%;display: flex;align-items: center;justify-content: center;border-radius: 8px">
                                <span style="font-family: cursive">月结占比</span>
                                <span style="color:#5D9DD2;">&nbsp&nbsp&nbsp&nbsp{{ratioYJ}}</span>
                            </div>
                            <div style="background: #fff;height:50px;width:48%;display: flex;align-items: center;justify-content: center;border-radius: 8px">
                                <span style="font-family: cursive">现金占比</span>
                                <span style="color:#5D9DD2;">&nbsp&nbsp&nbsp&nbsp{{ratioXJ}}</span>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row style="margin:20px 0;">
                <el-col>
                    <el-row :gutter="24"  >
                    <el-col :span="24"  style="display: flex;justify-content: space-between;padding:0;">
                        <div class="shunli">
                            <div style="border-bottom: 1px solid #ccc;    display: flex; align-items: center;justify-content: space-between;width: 100%;padding: 0 12px">
                                <div>
                                    <el-button
                                        size="mini"
                                        :class="isday ? 'blackDefault' : 'blueActive'"
                                        @click="OrdersGoods(1)"
                                    >日
                                    </el-button>
                                    <el-button
                                        size="mini"
                                        :class="isWeek ? 'blackDefault' : 'blueActive'"
                                        @click="OrdersGoods(0)"
                                    >周
                                    </el-button>
                                    <el-button
                                        size="mini"
                                        :class="isMonth ? 'blackDefault' : 'blueActive'"
                                        @click="OrdersGoods(2)">月
                                    </el-button>
                            </div>
                                <div style="line-height: 50px;">
                                    <div>
                                        <span :class="isMeng ? 'laomeng' : 'shimeng'" @click="getMeng('Area')">区域订单</span>
                                        <span :class="!isMeng ? 'laomeng' : 'shimeng'" @click="getMeng('goods')">&nbsp&nbsp货物类型</span>
                                    </div>
                                </div>
                                <el-button size="mini" type="primary" class="btn-cancel" plain >More</el-button>
                            </div>

                            <div style="width: 100%;height: 300px;background: #fff;" id="orderList" ></div>
                        </div>

                        <div style="background: #fff;height:50px;width:42.3%;display: flex;align-items: center;justify-content:space-around;border-radius: 8px">
                            <div class="shunli3">
                                <div>

                                        <el-button
                                            size="mini"
                                            :class="isday ? 'blackDefault' : 'blueActive'"
                                            @click="Abnormal(1)"
                                        >日
                                        </el-button>
                                        <el-button
                                            size="mini"
                                            :class="isWeek ? 'blackDefault' : 'blueActive'"
                                            @click="Abnormal(0)"
                                        >周
                                        </el-button>
                                        <el-button
                                            size="mini"
                                            :class="isMonth ? 'blackDefault' : 'blueActive'"
                                            @click="Abnormal(2)">月
                                        </el-button>

                                </div>
                                <div style="line-height: 50px;">
                                    <div style="font-family: cursive">
                                        异常统计
                                    </div>
                                </div>
                                <el-button size="mini" type="primary" class="btn-cancel" plain @click="breakDailyStatistical">More</el-button>
                                <div style="width: 100%;height: 300px;background: #fff;" id="ExceptionTable" ></div>
                            </div>

                        </div>


                    </el-col>

                    </el-row>
                </el-col>
            </el-row>
            <el-row style="margin-bottom: 50px;">
                <el-col>
                    <el-row :gutter="24"  >
                        <el-col :span="24"  style="display: flex;   padding: 0!important;width: 65.39%;">
                            <div class="shunli3">
                                <div style="border-bottom: 1px solid #ccc;    display: flex; align-items: center;justify-content: space-between;width: 100%;padding: 0 12px">
                                    <div>
                                        <el-button
                                            size="mini"
                                            :class="isday ? 'blackDefault' : 'blueActive'"
                                            @click="TemperatureBox(1)"
                                        >日
                                        </el-button>
                                        <el-button
                                            size="mini"
                                            :class="isWeek ? 'blackDefault' : 'blueActive'"
                                            @click="TemperatureBox(0)"
                                        >周
                                        </el-button>
                                        <el-button
                                            size="mini"
                                            :class="isMonth ? 'blackDefault' : 'blueActive'"
                                            @click="TemperatureBox(2)">月
                                        </el-button>
                                    </div>
                                    <div style="line-height: 50px;">
                                        <div style="font-family: cursive">
                                            温区及箱型
                                        </div>
                                    </div>
                                    <el-button size="mini" type="primary" class="btn-cancel" plain @click="breakBoxType">More</el-button>

                                </div>
                                <div style=" display: flex; align-items: center;center: space-between;width: 100%;padding: 0 12px;  box-sizing: border-box;justify-content: space-between;;">
                                    <h6>保温箱使用(件)</h6>
                                    <el-button size="mini">昨日合计：569</el-button>
                                    <el-button size="mini">当日合计：888</el-button>
                                    <el-button size="mini">累计：5355</el-button>
                                </div>
                                <div style="width: 100%;height: 150px;background: #fff" id="IncubatorCharts"></div>

                                <div style="width: 100%;height: 150px;background: #fff"   id="warmArea"></div>

                            </div>

                        </el-col>
                        <el-col  style="display: flex;justify-content: space-between;width: 34.61%;padding: 0 0 0 12px;" >
                            <div class="shunli4">
                                <div style="border-bottom: 1px solid #ccc;    display: flex; align-items: center;justify-content: space-between;width: 100%;">

                                <div>
                                        <el-button size="mini">周</el-button>
                                        <el-button size="mini">月</el-button>
                                    </div>
                                    <div style="line-height: 50px;">
                                        <div style="font-family: cursive">
                                            客户活跃度
                                        </div>
                                    </div>
                                    <el-button size="mini" type="primary" class="btn-cancel" plain @click="breakCustomerInformation">More</el-button>
                                </div>

                                <div style="width: 100%;height: 350px;background: #fff;" id="CustomerAtivity" ></div>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts';
export default {
  data: function() {
    return {
        loading:false,
        isMeng: true,
        isday:false,
        isWeek :true,
        isMonth  :true,
        isLoad:true,
        company:'',
        countNow:'',
        countYesterday:'',
        countMonth:'',
        countQuXiao:'',
        countAnPai:'',
        countWanChen:'',
        ratioQuXiao:'',
        ratioBianGeng:'',
        ratioZhunShi:'',
        ratioYJ:'',
        ratioXJ:'',
        changeDay:'昨日',
        changeL:'今日订单'


  };
  },
  created(){

  },
    methods: {
        breakordersRtatistics(){
            this.$router.push({path:'/ordersRtatistics'});
        },
        breakCustomerInformation(){
            this.$router.push({path:'/CustomerInformation'})
        },
        breakDailyStatistical(){
            this.$router.push({path:'/DailyStatistical'})
        },
        breakBoxType(){
            this.$router.push({path:'/BoxType'})
        },
        getMeng(val){
            val == 'Area' ? this.isMeng = true : this.isMeng = false
            console.log(val)
            // 这里 就是 请求接口  返回数据 走一下mengdo  这个方法
            // 只要3个数组   传对了   就ok   只处理数据
            // 写成死的了呢恩
            if(val == 'Area'){
                let a = ["华北区", "东北区", "华东区", "华中区","华南区" ,"西南区", "西北区"];
                let b = [10,20,30,40,50,60,70];
                let c = [100,200,300,400,500,600,500];
               // this.getOrdersGoodsData('Area')
                this.mengdou(a,b,c);
            }else{
                let a = ["药品","试剂","样本","器械","普货"];
                let b = [34,33,37,34,40];
                let c = [100,200,300,400,500];
                this.mengdou(a,b,c);
                //this.getOrdersGoodsData('goods')
            }
        },
        // 定义 方法    只渲染图表   不处理数据
        // 先看下  图表需要的数据  是啥样
        // xArr  ["华北区", "东北区", "华东区", "华中区", "西南区", "西北区",]
        mengdou(xArr,yArr,zArr){
            var orderList =  echarts.init(document.getElementById('orderList'));
            orderList.setOption({

                "color": ["#45A2DF"],
                "tooltip": {},
                "grid": {
                    "containLabel": true
                },
                grid:{
                    x:10,
                    y:45,
                    x2:5,
                    y2:20,
                    borderWidth:1
                },
                "xAxis": [{

                    "type": "category",
                    "data": xArr,
                    "axisTick": {
                        "alignWithLabel": true
                    },
                    "nameTextStyle": {
                        "color": "#eee"
                    },
                    "axisLine": {
                        "lineStyle": {
                            "color": "#eee"
                        }
                    },
                    "axisLabel": {
                        "textStyle": {
                            "color": "#82b0ec"
                        }
                    }
                }],
                "yAxis": [{
                    show : false,
                    "type": "value",
                    "axisLabel": {
                        "textStyle": {
                            "color": "#82b0ec"
                        },
                        "formatter": "{value}"
                    },
                    "splitLine": {
                        "lineStyle": {
                            "color": "#0c2c5a"
                        }
                    },
                    "axisLine": {
                        "show": false
                    }
                }],
                "series": [{
                    "name": "",
                    "type": "pictorialBar",
                    "symbolSize": [20, 10],
                    "symbolOffset": [0, -5],
                    "symbolPosition": "end",
                    "z": 12,
                    "label": {
                        "normal": {
                            "show": true,
                            "position": "top",
                            "formatter": "{c}"
                        },

                    },

                    "data": yArr
                },
                    {  name:'取件准确率',
                        type:'line',
                        itemStyle : {  /*设置折线颜色*/
                            normal : {  /* color:'#c4cddc'*/  } },
                        data:zArr
                    },{
                        "name": "",
                        "type": "pictorialBar",
                        "symbolSize": [20, 10],
                        "symbolOffset": [0, 5],
                        "z": 12,
                        "data": yArr
                    }, {
                        "type": "bar",
                        "itemStyle": {
                            "normal": {
                                "opacity": 0.7
                            }
                        },
                        "barWidth": "20",
                        "data": yArr

                    }]
            })
        },
        //货物
        OrdersGoods(val){
            if(Number(val)===1){
                //日
                this.isLoad = this.isWeek = this.isMonth = true;
                this.isday = false;



                this.getOrdersGoodsData("day");
            }else if(Number(val) === 0) {
                // 周

                this.isLoad = this.isday = this.isMonth = true;
                this.isWeek= false;




                this.getOrdersGoodsData("week");
            }else{
                //月
                // 周

                this.isLoad = this.isday = this.isWeek = true;
                this.isMonth =false;
                this.getOrdersGoodsData("month");

            }
        },
        getOrdersGoodsData(val){
            let _this=this;
            _this.$axios({
                url:"http://out.ccsc58.cc/OMS/v1/public/index/index/middleLeft",
                method:'post',
                data:{
                    Type:val,
                    Company:this.company,
                    Type1:val
                }, transformRequest:[
                    function (data) {
                        let ret = "";
                        for(let it in data){
                            ret +=
                                encodeURIComponent(it)+
                                "="+
                                encodeURIComponent(data[it])+
                                "&";

                        }
                        return ret;
                    }
                ]

            }).then(function (res) {
                console.log(res)
            })
        },


        //温区及箱型   请求bottom
        TemperatureBox(val){
            if (Number(val) === 1) {
                //日
                this.isLoad = this.isWeek = this.isMonth = true;
                this.isday = false;



                this.getTemperatureBoxData("day");
            } else if(Number(val) === 0) {
                // 周

                this.isLoad = this.isday = this.isMonth = true;
                this.isWeek= false;




                this.getTemperatureBoxData("week");
            }else{
                //月
                // 周

                this.isLoad = this.isday = this.isWeek = true;
                this.isMonth =false;
                this.getTemperatureBoxData("month");

            }
        },
        getTemperatureBoxData(val){
             let _this=this;
             _this.$axios({
                 url:'http://out.ccsc58.cc/OMS/v1/public/index/index/bottom',
                 method:'post',
                 data:{
                     Type:val,
                     Company:this.company
                 },
                 transformRequest:[
                     function (data) {
                     let ret = "";
                     for(let it in data){
                         ret +=
                             encodeURIComponent(it)+
                             "="+
                             encodeURIComponent(data[it])+
                             "&";

                     }
                         return ret;
                     }
                 ]
             }).then(function (res) {

                 _this.isLoad = false;
                 var IncubatorCharts = echarts.init(document.getElementById('IncubatorCharts'));
                 var warmArea = echarts.init(document.getElementById('warmArea'));

                 //保温箱使用表
                 IncubatorCharts.setOption({
                     background:'#fff',
                     tooltip : {
                         trigger: 'axis'
                     },
                     grid:{
                         x:50,
                         y:10,
                         x2:50,
                         y2:50,
                         borderWidth:1
                     },
                     xAxis: {
                         axisLabel: {
                             interval: 0,
                             rotate: -40,
                             textStyle: {
                                 fontSize: 12,
                                 color: '#000'
                             }
                         },
                         boundaryGap : false,
                         data : res.data.data.packageX
                     },
                     yAxis: {
                         show : false,
                         type: 'value'
                     },
                     series: [{
                         data:res.data.data.packageY,
                         type: 'line',
                         itemStyle: {
                             color: '#5b9bd5',
                             borderColor: '#5b9bd5',
                             borderWidth: 1
                         },
                     }]
                 });
                 //温区分布表
                 warmArea.setOption({
                     background:'#fff',
                     title: {
                         "text": "   温区分布(票)",

                         textStyle: {
                             color: '#000',
                             fontSize: '12',

                         },

                     },
                     tooltip : {
                         trigger: 'axis'
                     },
                     grid:{
                         x:50,
                         y:0,
                         x2:50,
                         y2:50,
                         borderWidth:1
                     },

                     xAxis: {
                         axisLabel: {
                             interval: 0,
                             rotate: -40,
                             textStyle: {
                                 fontSize: 12,
                                 color: '#000'
                             }
                         },
                         boundaryGap : false,
                         data : res.data.data.wdqjX
                     },
                     yAxis: {
                         show : false,
                         type: 'value'
                     },
                     series: [{
                         data:res.data.data.wdqjY,
                         type: 'line',
                         itemStyle: {
                             color: '#109F50',
                             borderColor: '#109F50',
                             borderWidth: 1
                         },
                     }]
                 });

             })
        },
        //异常统计图表渲染 请求middle  right
        Abnormal(val) {

            if (Number(val) === 1) {
                //日
                this.isLoad = this.isWeek = this.isMonth = true;
                this.isday = false;



                this.getAbnormalData("day");
            } else if(Number(val) === 0) {
                // 周

                this.isLoad = this.isday = this.isMonth = true;
                this.isWeek= false;




                this.getAbnormalData("week");
            }else{
                //月
                // 周

                this.isLoad = this.isday = this.isWeek = true;
                this.isMonth =false;
                this.getAbnormalData("month");

            }
        },
        getAbnormalData(val){
          let _this = this;
          _this.$axios({
              url:'http://out.ccsc58.cc/OMS/v1/public/index/index/middleRight',
              method: 'post',
              data:{
                  Type: val,
                  Company:this.company
              },
              transformRequest: [
                  function (data) {
                     let ret = "";
                     for(let it in data){
                         ret +=
                             encodeURIComponent(it) +
                             "=" +
                             encodeURIComponent(data[it]) +
                             "&";
                     }
                      return ret;
                  }
              ]
          }).then(function (res) {

              _this.isLoad = false;
              var ExceptionTable = echarts.init(document.getElementById('ExceptionTable'));
              ExceptionTable.setOption({
                  background:'#fff',
                  "tooltip": {
                      "trigger": "axis"
                  },
                  grid:{
                      x:10,
                      y:45,
                      x2:5,
                      y2:20,
                      borderWidth:1
                  },
                  "color": ["#45A2DF", "#1AB394", "#f29c00", ],
                  "legend": {
                      "top": "10",
                      "data": ["客户取消", "内部取消","站点取消"],
                      "itemGap": 10,
                      "itemWidth": 15,
                      "itemHeight": 12
                  },
                  "xAxis": [{
                      "name": "区域",
                      "type": "category",
                      "axisTick": {
                          "alignWithLabel": true
                      },
                      "data": res.data.data.X
                  }],
                  "yAxis": [{
                      "type": "value",
                      show:false
                  }],
                  "series": [{  name:'时间变更',
                      type:'line',
                      itemStyle : {  /*设置折线颜色*/
                          normal : {  /* color:'#c4cddc'*/  } },
                      data:res.data.data.change
                  },{
                      "data":res.data.data.custmerReason,
                      "name": "客户取消",
                      "stack": "one",
                      "type": "bar",
                      label: {
                          show: true
                      }
                  }, {
                      "data": res.data.data.insideReason,
                      "name": "内部取消",
                      "stack": "one",
                      "type": "bar",
                      label: {
                          show: true
                      }
                  },
                      {
                          "data": res.data.data.siteReason,
                          "name": "站点取消",
                          "stack": "one",
                          "type": "bar",
                          label: {
                              show: true
                          }
                      },]
              })
          })
        },

        // 8.15 李洋   请求 top
          CLSD(val) {

            if (Number(val) === 1) {
                //日
                this.isLoad = this.isWeek = this.isMonth = true;
                this.isday = false;
                this.changeDay ="昨日";
                this.changeL ='今日订单';


                this.getSearchData("day");
            } else if(Number(val) === 0) {
                // 周

                this.isLoad = this.isday = this.isMonth = true;
                this.isWeek= false;
                this.changeDay ="上周";
                this.changeL ='本周订单';



                this.getSearchData("week");
            }else{
                //月
                // 周

                this.isLoad = this.isday = this.isWeek = true;
                this.isMonth =false;

                this.changeDay ="上月";
                this.changeL ='本月订单';
                this.getSearchData("month");

            }
        },
          getSearchData(val){
          let _this = this;
          _this.$axios({
              url:'http://out.ccsc58.cc/OMS/v1/public/index/index/top',
              method: "post",
              data: {
                  Type: val,
                  Company:this.company
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

              _this.countNow = res.data.data.countNow;
              _this.countQuXiao = res.data.data.countQuXiao;
              _this.ratioYJ =res.data.data.ratioYJ;
              _this.ratioXJ = res.data.data.ratioXJ;
              _this.countYesterday = res.data.data.countYesterday;
              _this.countYesterday = res.data.data.countYesterday;
              _this.countQuXiao = res.data.data.countQuXiao;
              _this.countAnPai = res.data.data.countAnPai;
              _this.countWanChen = res.data.data.countWanChen;
              _this.countMonth =res.data.data.countMonth

             _this.isLoad = false;
            var orderChart = echarts.init(document.getElementById('orderChart'));
            orderChart.setOption({
                tooltip : {
                    trigger: 'axis'
                },
                grid:{
                    x:20,
                    y:45,
                    x2:10,
                    y2:30,
                    borderWidth:1
                },
                legend: {
                    data:['web','app','tms'],
                    right: 0,
                    orient: 'vertical',
                },
                calculable : true,
                xAxis : [
                    {
                        show : true,
                        type : 'category',
                        boundaryGap : false,
                        data : res.data.data.ArrDay
                    }
                ],
                yAxis : {
                    type : 'value',
                    show : false,
                }
                ,
                series : [
                    {
                        name: 'web',
                        type: 'line',
                        itemStyle: {
                            color: '#5b9bd5',
                            borderColor: '#5b9bd5',
                            borderWidth: 1
                        },
                        lineStyle: {
                            width: 1
                        },
                        data: res.data.data.countWeb
                    },
                    {
                        name: 'app',
                        type: 'line',
                        itemStyle: {
                            color: '#ed7d31',
                            borderColor: '#ed7d31',
                            borderWidth: 1
                        },
                        lineStyle: {
                            width: 1
                        },
                        data: res.data.data.countApp},

                    {
                        name: 'tms',
                        type: 'line',
                        itemStyle: {
                            color: '#ff0000',
                            borderColor: '#ff0000',
                            borderWidth: 1
                        },
                        lineStyle: {
                            width: 1
                        },
                        data: res.data.data.countTms
                    }
                ]
            });


          })
      }
    },
  mounted() {
      this.company = window.sessionStorage.getItem('compony');
      this.getSearchData('day');
      this.getAbnormalData('day')
      this.getTemperatureBoxData('day');
      this.getOrdersGoodsData('day')

      var CustomerAtivity = echarts.init(document.getElementById('CustomerAtivity'));
      this.mengdou(["华北区", "东北区", "华东区", "华中区", "西南区", "西北区"],[10,50,60,10,80,90],[100,300,500,400,600,100]);

      //异常统计

      //客户活跃度表
            var xData = ["7.1", "7.2", "7.3", "7.4", "7.5", "7.6", "7.7"];
            var yData1 = [12, 5, 12, 46, 22, 24, 15, 5, 54, 18, 24, 18,];
            var yData2 = [13, 7, 10, 38, 17, 28, 22, 12, 28, 19, 14, 19,];
            var yData3 = [18, 45, 10, 28, 17, 8, 22, 12, 28, 9, 14, 19,];
      CustomerAtivity.setOption({

          backgroundColor: '#fff',
          tooltip: {
              trigger: 'axis',
              // axisPointer: {
              //     type: 'cross'
              // }
          },
          grid:{
              x:10,
              y:45,
              x2:5,
              y2:20,
              borderWidth:1
          },
          legend: {
              x: 'center',
              y: '40px',
              textStyle: {
                  color: '#000',
                  fontSize: 13,
              },
              icon: 'circle',
              data: ['活跃', '失活','普通']
          },
          dataZoom: [{
              type: 'slider',
              show: true,
              height: 20,
              left: '10%',
              right: '10%',
              bottom: '2%',
              start: 50,
              end: 100,
              textStyle: {
                  color: '#d4ffff',
                  fontSize: 11,
              },
          }, {
              type: 'inside'
          }

          ],
          // grid: {
          //     right: '5%',
          //     bottom: '10%',
          //     left: '2%',
          //     top: '80px',
          //     containLabel: true
          // },
          xAxis: [{
              type: 'category',
              data: xData,
              name: '时间',
              nameTextStyle: {
                  color: '#000'
              },
              axisLine: {
                  lineStyle: {
                      color: '#eee'
                  }
              },
              axisTick: {
                  show: false,
              },
              axisLabel: {
                  show: true,
                  textStyle: {
                      color: "#000",
                      fontSize: 12,
                  },
                  //interval:0,
                  //rotate:30
              },
          }],
          yAxis: [{

              type: 'value',
              show : false,
              nameTextStyle: {
                  color: '#d4ffff'
              },
              position: 'left',
              axisLine: {
                  lineStyle: {
                      color: '#0B4CA9'
                  }
              },
              splitLine: {
                  lineStyle: {
                      color: "#0B4CA9",
                  }

              },
              axisLabel: {
                  color: '#d4ffff',
                  fontSize: 12,
              }
          }, ],
          series: [{
              name: '活跃',
              type: 'line',
              yAxisIndex: 0,
              symbolSize: 12,
              itemStyle: {
                  normal: {
                      color: '#FC30EE',
                  }
              },
              data: yData1
          },
              {
                  name: '失活',
                  type: 'line',
                  yAxisIndex: 0,
                  symbolSize: 12,
                  itemStyle: {
                      normal: {
                          color: '#55A4D6',
                      }
                  },
                  data: yData2
              },
         {
          name: '普通',
              type: 'line',
          yAxisIndex: 0,
          symbolSize: 12,
          itemStyle: {
          normal: {
              color: '#0EF100',
          }
      },
          data: yData3
      },


  ]
      })

  }
};
</script>
<style>
    /*.el-tabs__header {*/
    /*    padding: 0;*/
    /*    position: relative;*/
    /*    margin: 0 0 -13px;*/
    /*}*/
    .blackDefault {
        background: #eee;
        color: #000;
    }

    .blueActive {
        background: #00d1b2 !important;
        color: #fff;
    }
</style>
<style scoped>
   .el-col-5 {
        width: 22.83333%;
    }
     .el-col-offset-1 {
         margin-left: 2.16667%;
     }
.container{
    padding:20px;
    overflow-y: scroll;height:100%;
}
    .btn-cancel{
        color:#5ECAB2;background: #A1DDC9;border:1px solid #5ECAB2;border-radius: 3px;
    }
    .shunli{
        background: #fff;
        width:55.6%;

        height:50px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 8px;

        box-sizing: border-box;
        flex-direction: row;
        flex-wrap: wrap;
        height:inherit;
    }
    .shunli2{
        background: #fff;
        border-bottom: 1px solid #ccc!important;
        width:100%;
        height:50px;
        line-height: 50px;
        display: flex;
        align-items: center;
        justify-content:space-around;
        border-radius: 8px;

        box-sizing: border-box;
        flex-direction: row;
        flex-wrap: wrap;
        height:inherit;
    }
    .shunli3{
        background: #fff;
        border-bottom: 1px solid #ccc!important;
        width:100%;
        height:50px;
        line-height: 50px;
        display: flex;
        align-items: center;
        justify-content:space-around;
        border-radius: 8px;
        padding: 0!important;
        box-sizing: border-box;
        flex-direction: row;
        flex-wrap: wrap;
        height:inherit;
    }
    .shunli4{
        background: #fff;
        border-bottom: 1px solid #ccc!important;
        width:100%;
        height:50px;
        line-height: 50px;
        display: flex;
        align-items: center;
        justify-content:space-around;
        border-radius: 8px;
        padding: 0;
        box-sizing: border-box;
        flex-direction: row;
        flex-wrap: wrap;
        height:inherit;
    }
    .laomeng,.shimeng{
        cursor: pointer;
        position: relative;
        line-height: 51px;
        display: inline-block;
        font-family: cursive;

    }
    .laomeng:after{
        position: absolute;
        content: '';
        width:50%;
        height:3px;
        background: #2D8CCA;
        left:25%;
        bottom: 0;

    }
</style>
