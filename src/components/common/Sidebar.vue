<template>
    <div class="sidebar">
        <div class="logo"><img src="../../assets/login.png" alt="" style="width: 150px;"></div>
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.son">
                    <el-submenu :index="item.action">
                        <template slot="title"><i :class="item.icon"></i>{{ item.name }}</template>
                        <el-menu-item v-for="(subItem,i) in item.son" :key="i" :index="subItem.action">{{ subItem.name }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.action">
                        <i :class="item.icon"></i>{{ item.name }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
  data() {
    return {
     // items:[]
      items: [
        {
          icon: "el-icon-menu",
          action: "home",
          name: "首页",

        },

        {
          icon: "el-icon-tickets",
          action: "orderManagement",
          name: "订单管理",
            son:[
                {
                action:"OrderQuery",
                name:"订单查询"
               },
                {
                    action:"OrderEntry",
                    name:"订单录入"
                }
            ]
        },

          {
              icon: "el-icon-service",
              action: "SenderManagement",
              name: "客户服务",
              son:[
                  {
                      action:"SenderManagement",
                      name:"收件信息管理"
                  },
                  {
                      action:"RecipientManagement",
                      name:"发件人管理"
                  }
              ]
          },

          {
              icon: "el-icon-edit",
              action: "ordersRtatistics",
              name: "报表中心",
              son:[
                  {
                      action:"ordersRtatistics",
                      name:"订单统计"
                  },
                  {
                      action:"BoxType",
                      name:"箱型及温区统计"
                  },
                  {
                      action:"DailyStatistical",
                      name:"日常统计"
                  },
                  {
                      action:"CustomerInformation",
                      name:"客户信息"
                  }
              ]
          }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  created(){
     //this.items = JSON.parse(window.sessionStorage.getItem("items"));

  }
};
</script>
<style>
.el-menu{
    border-right:none;
}
    .el-menu--dark .el-submenu .el-menu{
        background: rgba(0,0,0,0);
    }
    .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active {
        color: #20a0ff;
        background: #E9F4FA;
    }
    .el-menu-item{
        font-family: cursive;
        font-size: 16px;
    }
    .el-submenu__title {
        color: #fff;
        font-family: cursive;
        font-size: 16px;
    }
    .el-submenu__title:hover {
        background-color: rgba(0,0,0,0.5);
    }
    .el-submenu .el-menu-item{
        min-width: auto;
    }
</style>
<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        width:180px;
        left: 0;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        top: 0;
        bottom: 0;
        background-image: url(../../assets/Slidebj.png);
    }
.sidebar > ul {
  /*height: 100%;*/
    background: rgba(0,0,0,0);
}
.sidebar .logo{
    text-align: center;
    line-height: 70px;
    color: #fff;
}

</style>
