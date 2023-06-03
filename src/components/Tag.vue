<template>
    <div class="thetags" style="background-color: #fef8ef;">
        <el-tag 
        v-for="(item,index) in tags" 
        :key="item.name" 
        :closable="item.name!='home'"
        :effect="item.name==$route.name? 'dark':'light'"
        size="medium"
        style="margin-left: 5px;margin-top: 5px;"
        type="success"
        @click="changetag(item)"
        @close="deletetag(item,index)" 
        >
            {{ item.label }}
        </el-tag><!---- : 动态绑定    ---->
    </div>
</template>
<script>
import { mapState ,mapMutations} from 'vuex';
export default {
    data() {
        return {
        }
    },
    methods:{
     changetag(item){//点击标签 进入页面
        this.$router.push(item.path)
     },
     //点击删除标签
     ...mapMutations(['closetag']),   //将store里面的closetag映射到Tag组件里面 那么我就可以直接在现在的组件里面使用closetag()函数
     deletetag(item,index){//删除标签；   ///index为当前所点击的tag的索引
            console.log("index is ",index);
            this.closetag(item);//调用mutation里面的closetag()
           //this.$store.commit("closetag",item)//也可以使用这种方法
            const length=this.tags.length;//最后一个标签的下标
         //删除了标签之后 那么网页也应该跳转
         if(this.$route.path!=item.path){//当前网页所在的链接 和我要删除的网页连接不一样的话 那么就不需要跳转网页
            return;
         }
         if(index===length){//如果删除的是最后一个标签 那么就回到上一个网页
            this.$router.push(this.tags[index-1].path);
         }
         else{//当前网页所在的链接 和我要删除的网页连接一样 并且不是最后一个标签 那么我就可以跳到往后一个标签网页哪里 
            this.$router.push(this.tags[index].path);
         }
      }
    },
    mounted(){
    },
    computed:{
        ...mapState({
            tags: state=>state.tab.tabslist//获得store里面tablist里面的内容
        }),
        //两种方法都可以
        /*tags(){
            return this.$store.state.tab.tabslist
        }*/

    }
};
</script>

<style>

</style>