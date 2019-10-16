<template>
    <div class="navbar-container">
        <!-- 天气信息的容器 -->
        <div id="tp-weather-widget" style="padding: 10px;width:300px;"></div>

        <div class="user-info">

            <el-dropdown trigger="hover" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../assets/2.jpg">

                </span>
                <el-dropdown-menu slot="dropdown">
                    <div style="display: flex;align-items: center;padding-left: 20px ">
                        <img class="user-logo" src="../../assets/2.jpg"
                             style="width:40px; height:40px; border-radius: 50%;">
                        <div>
                            <a href="javascript:;" target="_blank">
                                <el-dropdown-item> {{TrueName}}</el-dropdown-item>
                            </a>
                            <a href="avascript:;" target="_blank">
                                <el-dropdown-item>ID：{{Id}}</el-dropdown-item>
                            </a>
                            <a>
                                <el-dropdown-item>电话：{{Mobile}} <i class="el-icon-mobile-phone" style="color: blue"></i></el-dropdown-item>
                            </a>
                        </div>

                    </div>
                    <div style="display: flex;justify-content: space-around;margin: 10px 0">
                        <div style="border-right: 1px solid #A3A3A3;padding:0 5px">
                            <p style="text-align: center;color:#A3A3A3">网络</p>
                            <p>{{Company}}</p>
                        </div>
                        <div style="border-right: 1px solid #A3A3A3;padding:0 5px">
                            <p style="text-align: center;color:#A3A3A3">部门</p>
                            <p>暂无</p>
                        </div>
                        <div style="padding: 0 5px">
                            <p style="text-align: center;color:#A3A3A3">职位</p>
                            <p>{{Operate}}</p>
                        </div>
                    </div>
                    <el-dropdown-item divided command="loginout" style="text-align: center">
                        <el-button size="medium" type="primary">退出</el-button>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>


</template>
<script>
    // 显示天气的方法， 要在这个位置初始化
    (function (T, h, i, n, k, P, a, g, e) {
        g = function () {
            P = h.createElement(i)
            a = h.getElementsByTagName(i)[0]
            P.src = k
            P.charset = 'utf-8'
            P.async = 1
            a.parentNode.insertBefore(P, a)
        }
        T['ThinkPageWeatherWidgetObject'] = n
        T[n] || (T[n] = function () {
            (T[n].q = T[n].q || []).push(arguments)
        })
        T[n].l = +new Date()
        if (T.attachEvent) {
            T.attachEvent('onload', g)
        } else {
            T.addEventListener('load', g, false)
        }
    }(window, document, 'script', 'tpwidget', '//widget.seniverse.com/widget/chameleon.js'))
    export default {
        data() {
            return {
                name: '',
                Id:'',
                Company:'',
                Mobile:'',
                Operate:'',
                fullscreen: false,
                TrueName:''
            }
        },
        computed: {
            username() {
                let username = sessionStorage.getItem('username');
                return username ? username : this.name;
            }
        },
        mounted() {
            this.initWeather();

            let item =   window.sessionStorage.getItem("items");
           this.TrueName = (JSON.parse(item).TrueName)
            this.Id =  (JSON.parse(item).Id);
            this.Mobile = (JSON.parse(item).Mobile);
            this.Company = (JSON.parse(item).Company);
            this.City = (JSON.parse(item).City)
            this.Operate = (JSON.parse(item).Operate)||"暂无"

            window.sessionStorage.setItem('compony',this.Company);
            window.sessionStorage.setItem('TrueName',this.TrueName);
            window.sessionStorage.setItem('City',this.City);





        },
        methods: {
            // // 全屏事件
            // handleFullScreen(){
            //     let element = document.documentElement;
            //     if (this.fullscreen) {
            //         if (document.exitFullscreen) {
            //             document.exitFullscreen();
            //         } else if (document.webkitCancelFullScreen) {
            //             document.webkitCancelFullScreen();
            //         } else if (document.mozCancelFullScreen) {
            //             document.mozCancelFullScreen();
            //         } else if (document.msExitFullscreen) {
            //             document.msExitFullscreen();
            //         }
            //     } else {
            //         if (element.requestFullscreen) {
            //             element.requestFullscreen();
            //         } else if (element.webkitRequestFullScreen) {
            //             element.webkitRequestFullScreen();
            //         } else if (element.mozRequestFullScreen) {
            //             element.mozRequestFullScreen();
            //         } else if (element.msRequestFullscreen) {
            //             // IE11
            //             element.msRequestFullscreen();
            //         }
            //     }
            //     this.fullscreen = !this.fullscreen;
            // },
            // 使用天气
            initWeather() {
                // 方法存在开始加载
                if (typeof tpwidget === 'function') {
                    tpwidget('init', {
                        'flavor': 'slim',
                        'location': 'WX4FBXXFKE4F',
                        'geolocation': 'enabled',
                        'language': 'auto',
                        'unit': 'c',
                        'theme': 'chameleon',
                        'container': 'tp-weather-widget',
                        'bubble': 'enabled',
                        'alarmType': 'badge',
                        'color': '#C6C6C6',
                        'uid': 'UBBB8DBE07',
                        'hash': '6dda6603c46080d47f2c51d061c86bba'
                    })
                    tpwidget('show')
                }
            },
            handleCommand(command) {
                if(command == 'loginout'){
                    sessionStorage.clear();
                    this.$router.push('/login');
                }
            }
        }
    }
</script>
<style scoped>
    .navbar-container {
        position: absolute;
        left: 180px;
        height: 70px;
        right: 0;
        top: 0;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    .el-dropdown-menu__item--divided {
        border: none
    }

    .navbar-container:after {
    @include border-1px();
    }


    .el-dropdown-link {
        display: flex;
        align-items: center;

        padding-top: 3px;
        margin-left: 10px;
        font-size: 13px;
    }

    .btn-fullscreen {
        transform: rotate(45deg);
        margin-right: 5px;
        font-size: 24px;
    }

    .btn-fullscreen {
        position: relative;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
    }

    .navbar-container .user-info {
        /*float: right;*/
        padding-right: 50px;
        font-size: 16px;
        color: #000;
    }

    .user-info .el-dropdown-link {
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #000;
        cursor: pointer;
        vertical-align: middle;
    }

    .user-info .user-logo {
        position: absolute;
        left: 0;
        top: -10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }


</style>
