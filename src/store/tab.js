export default {//  菜单栏里面的状态和方法
    state: {//状态控制
      isCollapse: false,//菜单折叠
      tabslist: [//面包屑数据  //点击菜单时 向面包屑里面添加新数据；
      {
        path: "/home",
        name: "home",
        label: "首页",
        icon: "s-home",
      },
    ],
    },
    //控制折叠 还是展开
    mutations: {
      collapseMenu(state) {
        state.isCollapse = !state.isCollapse;//折叠；
      },

      updatebread(state, val) {//state为state里面的state对象，val为点击菜单时 获取到的数据
        console.log("传进来的到的val is", val);//val为点击页面菜单时的对象
        //首先要不是home页面  //home页面默认出现
       if (val.name !== 'home') {//之后再判断点击的页面还没有出现过.///////// 因为home原来就存在与tablelist里面
          //fnidIndex() 遍历数组 里面的参数为数组里面的元素
          const index = state.tabslist.findIndex(item => item.name == val.name);
          //如果没有找到 就返回-1  那么就可以向里面添加元素；
          if (index == -1) {
            console.log("not found this element")
            state.tabslist.push(val);
          }
        }
      },
      closetag(state,item){
        console.log("closetag's item is ",item);//拿到所点击删除的标签的信息。
        for(var i=0;i<=state.tabslist.length;i++){//遍历寻找 然后删除。
             if(state.tabslist[i]==item){
              state.tabslist.splice(i,1)
              break;
             }
        }//遍历删除
        console.log("tablist的长度是",state.tabslist.length)
       }    

      }
    }