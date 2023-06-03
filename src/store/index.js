import Vue from "vue";
import Vuex from 'vuex'
import tab from "./tab";//导入
Vue.use(Vuex)
//创建vuex的实例 管理状态
export default new Vuex.Store({//将写好的STORE对象里面的模块导出
    state: {
        count: 0,
        datal: [26, 50, 10, 20, 80, 50, 70],
        datab: [30, 22, 36, 80, 100, 80, 100],
        datap:[
            { value: 10, name: 'Search Engine' },
            { value: 20, name: 'Direct' },
            { value: 30, name: 'Email' },
        ],
    },
    mutations: {
        changedata() {
            this.state.count += 1
            console.log("state.count is ",this.state.count%3)
            if (this.state.count % 3 == 1) {
               this.state.datal=[36, 51, 30, 60, 80, 30, 110]
               this.state.datab=[67, 40, 20, 70, 10, 80, 110]
               
            }
            else if (this.state.count % 3 == 2) {
               this. state.datal=[99, 51, 20, 10, 80, 42, 90]
               this. state.datab=[89, 67, 66, 211, 106, 130, 125]
            }
            else if (this.state.count % 3 == 0) {
                this. state.datal=[26, 50, 10, 20, 80, 50, 70]
                this. state.datab=[30, 22, 36, 80, 100, 80, 100]
            }
            console.log("柱状图数据 is ",this.state.datab)
            console.log("曲线图数据 is ",this.state.datal)
        },
        changepie(state,day){
            if (day=='Mon'){
                state.datap=[
                    { value: 10, name: 'Search Engine' },
                    { value: 20, name: 'Direct' },
                    { value: 30, name: 'Email' },
                ]
            }
            if (day=='Tue'){
                state.datap=[
                    { value: 30, name: 'Search Engine' },
                    { value: 20, name: 'Direct' },
                    { value: 40, name: 'Email' },
                ]
                
            }
            if (day=='Wed'){
                state.datap=[
                    { value: 50, name: 'Search Engine' },
                    { value: 10, name: 'Direct' },
                    { value: 20, name: 'Email' },
                ]
                
            }
            if (day=='Thu'){
                state.datap=[
                    { value: 35, name: 'Search Engine' },
                    { value: 52, name: 'Direct' },
                    { value: 21, name: 'Email' },
                ]
            }
            if (day=='Fri'){
                state.datap=[
                    { value: 32, name: 'Search Engine' },
                    { value: 90, name: 'Direct' },
                    { value: 10, name: 'Email' },
                ]
            }
            if (day=='Sat'){
                state.datap=[
                    { value: 10, name: 'Search Engine' },
                    { value: 10, name: 'Direct' },
                    { value: 80, name: 'Email' },
                ]
                
            }
            if (day=='Sun'){
                state.datap=[
                    { value: 20, name: 'Search Engine' },
                    { value: 10, name: 'Direct' },
                    { value: 40, name: 'Email' },
                ]
            }
            console.log("饼图数据为",this.state.datap)
        }
    },
    modules: {
        tab,//tab是在tab.js里面创建的vuex实例
    }
})
//new Vuex.Store()里面放入一个对象  可将多个对象放入modules里面，方便管理
