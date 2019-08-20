<template>
  <div class="bigdiv">

    <ul class="nav-center">
      <li>
        <a
          :class="{active:activeMenu == 'a'}"
          @click="scrollTo('a')"
        ><i class="el-icon-star-off"></i><br></br>订单信息</a>
      </li>
      <li>
        <a
          :class="{active:activeMenu == 'b'}"
          @click="scrollTo('b')"
        ><i class="el-icon-date"></i><br></br>订单预览</a>
      </li>

    </ul>

    <div
      class="main"
      id="scrollDom"
      key='1'
    >
      <div
        class="section section-a"
        v-scrollWatch="{name:'a',offset:0,callback:spyDomChange}"
      >
        <!-- 寄件人  收件人信息 -->
        <el-row
          :gutter="24"
          style="margin: 0"
        >

          <el-col :span="12">
            <h2 style="border-left: 4px solid #45A2DF;font-family: cursive;margin:10px 0">&nbsp寄件人信息</h2>
            <div class="bioage">
              <el-form
                ref="form"
                label-width="100px"
              >
                <el-col
                  :span="12"
                  style="padding:0"
                >
                  <el-form-item label="客户账号">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>

                <el-col
                  :span="12"
                  style="padding:0"
                >
                  <el-form-item>
                    <el-input></el-input>
                  </el-form-item>
                </el-col>

                <el-form-item label="公司名称">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="寄件人">
                  <el-input></el-input>
                </el-form-item>
                <el-col
                  :span="12"
                  style="padding:0"
                >
                  <el-form-item label="部门/科室">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>

                <el-col
                  :span="12"
                  style="padding:0"
                >
                  <el-form-item label="保险费率">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-form-item label="联系电话">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="城市区域">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="详细地址">
                  <el-input></el-input>
                </el-form-item>

              </el-form>
            </div>
          </el-col>
          <el-col :span="11">
            <h2 style="border-right: 4px solid #45A2DF;display: flex;justify-content: flex-end;font-family: cursive;margin:10px 0">收件人信息&nbsp&nbsp</h2>
            <div class="bioage">
              <el-form
                ref="form"
                label-width="100px"
              >

                <el-form-item label="城市区域">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="公司名称">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="收件人">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="部门/科室">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="详细地址">
                  <el-input></el-input>
                </el-form-item>

              </el-form>
            </div>
          </el-col>
        </el-row>
        <!-- 货物信息 -->
        <el-row
          :gutter="24"
          style="margin: 0"
        >
          <el-col :span="24">
            <h2 style="border-left: 4px solid #45A2DF;font-family: cursive;margin:10px 0">&nbsp;寄件人信息</h2>

            <div style="display:flex;">
              <el-steps
                direction="vertical"
                :active="active"
                style="height:200px;width:50px;"
              >
                <el-step></el-step>
                <el-step v-if="active===2"></el-step>
              </el-steps>
              <div style="display:flex;flex-direction: column;">
                <div
                  v-if="isFirst"
                  style="flex:1;"
                >
                  <div>{{firstTitle}}</div>
                  <div>温区选择（任意温区）</div>
                  <div class="temFirst">
                    <span
                      v-for="(item1,index) in temArea"
                      :key="index"

                      @click="next(item1,index)"
                      :class="{temActive: istemActive == index,temDefault: istemActive != index}"
                    >{{item1.tem}}</span>
                  </div>
                  <!-- <button @click="next"> 下一步 </button> -->
                </div>

                <div v-if="active===2">
                  <div>{{towTitle}}</div>
                  <div>
                    <el-tabs>
                      <el-tab-pane label="箱型">
                        <div class="temFirst">
                          <div
						  	v-for="(item,index) in boxType"
                          	:key="index" >
                            <span>{{item.box}}</span>

							<input type="text" value="" v-model='item.num' style='width:20%;' @input="isNull(item,index)">

							<span>个</span>
                          </div>

                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="冷藏专用车">
                        <div class="temFirst">
							<div v-for="(item,index) in iceCar" :key="index">
								<span>{{item.car}}</span>
								<input type="text" v-model="item.num" style='width:20%;' @input="isNull(item,index,item1)">
								<span>辆</span>
							</div>
                        </div>
                      </el-tab-pane>
                    </el-tabs>
                  </div>
                  <button @click="prev"> 上一步 </button>
                </div>

              </div>

            </div>

          </el-col>

        </el-row>
      </div>
      <div
        class="section  section-b"
        v-scrollWatch="{name:'b',offset:0,callback:spyDomChange}"
      >
        <el-row
          :gutter="24"
          style="margin: 0"
        >
          <el-col>
            订单预览表页面
          </el-col>
        </el-row>
      </div>

    </div>
  </div>
</template>
<script>
import scrollWatch from "../../lib/vue-scrollwatch";

export default {
  name: "test",
  data() {
    return {
      activeMenu: 1,
      active: 1,
      isFirst: true,
	  boxNum: '',
	  iceCarNum:'',
	  selectTem:'',
      istemActive: Number,
      firstTitle: "进行中",
	  towTitle: "进行中",
	  cargoMsg:[],
      temArea: [
        { tem: "2℃~8℃" },
        { tem: "20℃~80℃" },
        { tem: "-25℃~-15℃" },
        { tem: "-80℃~-40℃" }
      ],
      boxType: [],
      iceCar: [
        { car: "4.2m冷藏车" ,num:""},
        { car: "7.6m冷藏车" ,num:""},
        { car: "9.6m冷藏车",num:"" }
	  ],

    };
  },
  created() {
    scrollWatch.setContainer("#scrollDom");
  },
  methods: {
    next(val, index) {
      //istemActive是什么？  这是 那个 判断 他  是不是咱们点击的那个的  下标
      //哦
      this.istemActive = index;
      if (val.tem == "2℃~8℃") {
        this.boxType = [{ box: "XS26",num:"" }, { box: "XS27",num:"" }, { box: "XS28",num:"" },{box:"xs29",num:""}];
      } else if (val.tem == "20℃~80℃") {
        this.boxType = [{ box: "XS30" ,num:"" }, { box: "XS321" ,num:"" }, { box: "XS32",num:"" }];
      } else if (val.tem == "-25℃~-15℃") {
        this.boxType = [{ box: "XS40" ,num:"" }, { box: "XS41",num:""  }, { box: "XS42",num:"" }];
      } else if (val.tem == "-80℃~-40℃") {
        this.boxType = [{ box: "XS50" ,num:"" }, { box: "XS51",num:"" }, { box: "XS52",num:"" }];
      }
      this.active = 2;
	  this.firstTitle = "已完成";
	  this.selectTem = val.tem; // 当前选择的温区
<<<<<<< HEAD

	  let obj = {tem: this.selectTem, box:[], iceCar:[]}; 
	  
		this.cargoMsg.push(obj);


=======
        let obj = {tem: this.selectTem, box:[], iceCar:[]};
        if(this.cargoMsg.length == 0){
            this.cargoMsg.push(obj);
        }else if(this.cargoMsg.length == 3){
            this.$message.error('最多只允许添加3个温区');
        }else{
            let init = true;
            this.cargoMsg.forEach(item => {
                if(this.selectTem == item.tem){
                    init = false;
                }
            })
            if(init){
                this.cargoMsg.push(obj);
            }
        }
	  console.log(this.cargoMsg); // 选择的温区
>>>>>>> 62c249f90fa17977ab4b1d5c3590cad1918c5bcd
    },
    prev() {

	//   [{tem:"",box:[{type:"",num:""}]},{},{}]
	  console.log(this.cargoMsg);
	  if(this.cargoMsg.length == 3){
		this.$message.error('最多只允许添加3个温区');
	  }else{
		this.active = 1;
		this.firstTitle = "进行中";
		this.istemActive = -2;
	  }
	},
	isNull(val,index,tem){
		// 这个数组   就是  最后  你要给海宁的数组   也就是  所有的货物信息


		// 用来判断  当该项为空  数组中也清空  也就是 这个箱子填错了 不选择他  或者冷藏车  选错了的时候   清空数组
		// val  是 当前修改的这条数据   index   是当前修改的数据  在数组中的下标
		// this.cargoMsg   循环这个   把 箱型数量和  冷藏车数量  放进去
		let threeData = this.cargoMsg;
		for(let i=0;i<threeData.length;i++){

			if(this.selectTem == threeData[i].tem){

				threeData[i].box.push(val);
			}
		}

		// console.log(threeData);

	},
    spyDomChange(node) {
      if (this.activeMenu != node.name) this.activeMenu = node.name;
    },
    scrollTo(name) {
      scrollWatch.scrollTo(name);
    }
  }
};
</script>
<style scoped>
.bioage {
  margin: 20px 0;
}
.bioage span {
  margin-right: 20px;
}
.bigdiv {
  height: 100%;
  display: flex;
}
.nav-center {
  list-style-type: none;
  width: 150px;
  text-align: center;
}
.nav-center li {
  padding: 20px 0px;
  border-bottom: 1px solid #999;
}
h1 {
  margin: 0;
}
.main {
  /* margin-top:50px; */
  /* padding-left:200px; */
  background: #fff;
  height: 100%;
  overflow: auto;
  flex: 1;
}
.section {
  height: auto;
  /* overflow: hidden; */
  overflow-y: hidden;
}
.section.section-a {
  background: #eee;
  margin: 0 20px;
}
.section.section-b {
  background: #eee;
  margin: 20px;
}
.section.section-c {
  background: #eee;
  margin: 20px;
}

.active {
  color: #42b983;
}
.temFirst {
  display: flex;
  flex-flow: wrap;
}

.temActive {
  border: 1px solid rgb(69, 162, 223);
  color: rgb(69, 162, 223);
  cursor: pointer;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
}
.temDefault {
  border: 1px solid #000;
  color: #000;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
}
</style>
<style>
.el-form-item__label {
  width: 100px !important;
}
</style>
