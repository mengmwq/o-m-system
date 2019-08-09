<template>
    <div class="bigdiv">

        <ul class="nav-center" >
            <li>
                <a :class="{active:activeMenu == 'a'}" @click="scrollTo('a')"><i class="el-icon-star-off"></i><br></br>订单信息</a>
            </li>
            <li>
                <a :class="{active:activeMenu == 'b'}" @click="scrollTo('b')"><i class="el-icon-date"></i><br></br>订单预览</a>
            </li>


        </ul>

        <div class="main" id="scrollDom" key='1'>
            <div class="section section-a" v-scrollWatch="{name:'a',offset:0,callback:spyDomChange}">
                <!-- 寄件人  收件人信息 -->
                <el-row :gutter="24" style="margin: 0">

                    <el-col :span="12" >
                        <h2 style="border-left: 4px solid #45A2DF;font-family: cursive;margin:10px 0">&nbsp寄件人信息</h2>
                        <div class="bioage">
                            <el-form ref="form"  label-width="100px" >
                                <el-col :span="12" style="padding:0">
                                    <el-form-item label="客户账号">
                                        <el-input ></el-input>
                                    </el-form-item>
                                </el-col>

                                <el-col :span="12" style="padding:0">
                                    <el-form-item >
                                        <el-input ></el-input>
                                    </el-form-item>
                                </el-col>

                                <el-form-item label="公司名称">
                                    <el-input ></el-input>
                                </el-form-item>
                                <el-form-item label="寄件人">
                                    <el-input ></el-input>
                                </el-form-item>
                                <el-col :span="12" style="padding:0">
                                    <el-form-item label="部门/科室">
                                        <el-input ></el-input>
                                    </el-form-item>
                                </el-col>

                                <el-col :span="12" style="padding:0">
                                    <el-form-item label="保险费率" >
                                        <el-input ></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-form-item label="联系电话">
                                    <el-input ></el-input>
                                </el-form-item>
                                <el-form-item label="城市区域">
                                    <el-input ></el-input>
                                </el-form-item>
                                <el-form-item label="详细地址">
                                    <el-input ></el-input>
                                </el-form-item>

                            </el-form>
                        </div>
                    </el-col>
                    <el-col :span="11">
                        <h2 style="border-right: 4px solid #45A2DF;display: flex;justify-content: flex-end;font-family: cursive;margin:10px 0">收件人信息&nbsp&nbsp</h2>
                        <div class="bioage">
                            <el-form ref="form"  label-width="100px" >

                                <el-form-item label="城市区域">
                                    <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="公司名称">
                                    <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="收件人">
                                    <el-input ></el-input>
                                </el-form-item>
                                <el-form-item label="部门/科室">
                                <el-input ></el-input>
                               </el-form-item>
                                <el-form-item label="联系电话">
                                    <el-input ></el-input>
                                </el-form-item>
                                <el-form-item label="详细地址">
                                <el-input ></el-input>
                               </el-form-item>




                            </el-form>
                        </div>
                    </el-col>
                </el-row>
                <!-- 货物信息 -->
                <el-row :gutter="24" style="margin: 0">
                    <el-col :span="24">
                        <h2 style="border-left: 4px solid #45A2DF;font-family: cursive;margin:10px 0">&nbsp;寄件人信息</h2>

                        
                        <div style="display:flex;">
                            <el-steps direction="vertical" :active="active" style="height:200px;width:50px;">
                                <el-step></el-step>
                                <el-step v-if="active===2"></el-step>
                            </el-steps>
                            <div style="display:flex;flex-direction: column;">
                                <div v-if="isFirst" style="flex:1;">
                                    <div>{{firstTitle}}</div>
                                    <button @click="next"> 下一步 </button>
                                </div>

                                <div v-if="active===2">
                                    <div>{{towTitle}}</div>
                                    <button @click="prev"> 上一步 </button>
                                </div>

                            </div>

                        </div>


                    </el-col>
                    
                </el-row>
            </div>
            <div class="section  section-b" v-scrollWatch="{name:'b',offset:0,callback:spyDomChange}">
                <el-row :gutter="24"  style="margin: 0">
                    <el-col >
                       订单预览表页面
                    </el-col>
                </el-row>
            </div>


        </div>
    </div>
</template>
<script>

import scrollWatch from "../../lib/vue-scrollwatch"


export default {
    name: "test",
    data() {
        return {
            activeMenu: 1  , 
            active: 1,
            isFirst: true,
            firstTitle: "进行中",
            towTitle:"进行中"

        }
    },
    created(){
        scrollWatch.setContainer("#scrollDom")

    },
    methods: {
        next(){
            this.active = 2;
            this.firstTitle = "已完成"
        },
        prev(){
            this.active = 1;
            this.firstTitle = "进行中"
        },
        spyDomChange(node) {
            if (this.activeMenu != node.name)
                this.activeMenu = node.name
        },
        scrollTo(name) {
            scrollWatch.scrollTo(name)
        }
    }
}
</script>
<style scoped>

    .bioage{
        margin:20px 0
    }
    .bioage span{
        margin-right: 20px;
    }
.bigdiv{
    height:100%;
    display: flex;

}
.nav-center {

    list-style-type: none;
    width:150px;
   text-align: center;


}
.nav-center li{
    padding: 20px 0px;
    border-bottom: 1px solid #999;
}
h1{
    margin:0;
}
.main{
    /* margin-top:50px; */
    /* padding-left:200px; */
   background: #fff;
    height:100%;
    overflow:auto;
    flex:1;
}
.section {
    height: 100%;
    /* overflow: hidden; */
    overflow-y: hidden;

}
.section.section-a {
    background:#eee;
    margin:0 20px;
}
.section.section-b {
    background:#eee;
    margin:20px;
}
.section.section-c {
    background:#eee;
    margin:20px;

}

.active {
    color: #42b983;
}
</style>
<style>
    .el-form-item__label {

        width: 100px!important;}
</style>
