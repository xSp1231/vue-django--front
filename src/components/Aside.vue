<template>
    <div class="</template>asidMenu">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            :collapse="isCollapse" background-color=" rgb(158, 161, 161)" text-color="#fff" active-text-color="rgb(241, 178, 40)">
            <!----<h4>Menu</h4>-#ffd04b-->
            <h4>{{ isCollapse? 'M': 'MENU' }}</h4>
            <el-menu-item @click="clickmenu(item)" v-for="item in noChildren" :key="item.name"
                :index="item.name"><!----一级菜单-  使用nochildren数据---进行遍历生成若干个一级菜单----->
                <i :class="`el-icon-${item.icon}`"></i><!---修饰图标-->
                <span slot="title" style="font-size: 16px;">{{ item.label }}</span>
            </el-menu-item>
            <el-submenu @click="clickmenu(item)" v-for="item in hasChildren" :key="item.label"
                :index="item.label"><!---二级菜单  含有一级部分和二级部分-->
                <template slot="title"><!---插槽---->
                    <i :class="`el-icon-${item.icon}`"></i><!--动态绑定---->
                    <span slot="title" style="font-size: 16px;">{{ item.label }}</span>
                </template>
                <el-menu-item-group v-for="subitem in item.children" :key="subitem.path"><!----二级部分--->
                    <el-menu-item @click="clickmenu(subitem)" :index="subitem.path">
                        <i :class="`el-icon-${subitem.icon}`"></i>
                        <span style="font-size: 16px;">{{ subitem.label }}</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>

        </el-menu>
    </div>
</template>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 190px;
    min-height: 400px;
}

.el-menu-vertical-demo {
    height: 180vh;

    h4 {
        /////h4标签有边距
        color: rgb(219, 219, 218);
        // color: rgb(241, 178, 40);
        font-size: 26px;
        text-align: center;
        line-height: 20px; //行高
        margin-bottom: 0px;
    }
}

.el-menu {
    border-right: none;
}
</style>

<script>
export default {
    data() {
        return {
            menudata: [//菜单栏里面的数据
                {
                    path: "/home",
                    name: "home",
                    label: "echarts",
                    icon: "s-home",
                },
                {
                    label: "测试",
                    icon: "location",
                    icon: "s-grid",
                    children: [
                        {
                            path: "/axios",
                            name: "team",
                            label: "图书管理",
                            icon: "chat-line-square",
                        },
                        {
                            path: "/person",
                            name: "person",
                            label: "vuex交互",
                            icon: "s-custom",
                        },
                        {
                            path: "/djangoapi",
                            name: "django接口",
                            label: "djangoapi",
                            icon: "s-custom",
                        },
                        {
                            path: "/register",
                            name: "register",
                            label: "注册模块",
                            icon: "s-custom",
                        },
                    ]
                },
            ]

        };
    },
    methods: {
        handleOpen(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            //console.log(key, keyPath);
        },
        clickmenu(item) {
            console.log("点击时的数据为 ", item);//之后进行路由跳转
            //如果将要跳转的路由和当前的路由不一样 那么就可以进行跳转 
            if (item.path != this.$route.path) {
                this.$router.push(item.path);
            }
            //调用更新的方法
            this.$store.commit('updatebread', item);
        },
    },
    computed: {//计算值的时候 就在computed里面使用
        isCollapse() {//计算属性
            console.log("aside计算")
            return this.$store.state.tab.isCollapse;/////header先传到store里面   然后aside再从store里面接受
        },
        noChildren() {
            return this.menudata.filter(item => !item.children)//无子页面
        },
        hasChildren() {
            return this.menudata.filter(item => item.children)//有子页面
        },
    },
    mounted() {
    }
}
</script>