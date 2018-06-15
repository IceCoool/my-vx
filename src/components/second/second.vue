<template>
    <div class="test">
      <p>vuex -- state&&mutations</p>
      <p>{{localMsg}}--本地</p>
      <p>{{storeMsg}}--store</p>
      <div @click="testMutations">
        修改‘初探vuex’为 ‘初探mutations’(修改的为store中数据)
      </div>
      <div @click="localModify">
        本地修改 非修改store（修改的为自己存储下的数据 store中的数据不变）
      </div>
      <p>{{count}}</p>
      <p>{{count2}}</p>
      <p>{{countAlias}}</p>
      <a href="javascript:;" @click="addCount">累加--写法1</a><br>
      <a href="javascript:;" @click="removeCount">累减--写法2</a><br>
      <a href="javascript:;" @click="countAddMap">累加--mapMutations写法1</a><br>
      <a href="javascript:;" @click="removeMap">累减--mapMutations写法2</a><br>
      --------------------------------------------------------
      <p>vuex -- getters</p>
      <p v-for="list in lists">{{list.name}}</p>
      <p>{{filterList}}--getter-使用mapGetters</p>
      <p>{{filterList2}}--getter-未使用mapGetters</p>
      <p>{{filterLists}}</p>
    </div>
</template>
<script type="text/ecmascript-6">
    import { mapState ,mapGetters,mapMutations } from 'vuex'
    export default {
      name:'second',
      data(){
        return {
          localMsg:''
        }
      },
      computed:{
        //以计算属性的方式 获取store中存储的信息
        ...mapState({
          storeMsg(){
            return this.$store.state.msg
          },
          count2: state => state.count,
          // 传字符串参数 'count' 等同于 `state => state.count`
          countAlias: 'count',
        }),
        ...mapState([
          'count',
          'lists'//也可以如上面mapState中已计算属性的方式返回 return this.$store.state.lists
        ]),
         filterList2(){//直接在computed中写时这样写
           return this.$store.getters.filterLists
         },
        ...mapGetters({//在mapGetters中上述写法会报错
//          filterList3(){//此种写法会报错
//            return this.$store.getters.filterLists
//          },
          filterList:'filterLists'//另起名字
        }),
        ...mapGetters([
          'filterLists'//直接用getter的名字
        ])
      },
      mounted:function () {
        this.localMsg = this.$store.state.msg;
      },
      methods:{
        localModify(){
          this.localMsg = '本地修改 非修改store'
        },
        testMutations(){
          this.$store.commit('modifyMsg','初探mutations')
        },
        addCount(){//写法1
          this.$store.commit('countAdd',{num:1})
        },
        removeCount(){//写法2
          this.$store.commit({
            type:'countRemove',
            num:1
          })
        },
        //mutations辅助函数的写法  这种写法的传参怎么写？？？
        ...mapMutations([
          'countAddMap',
//          'countRemoveMap'
        ]),
        ...mapMutations({
          removeMap:'countRemoveMap'
        })
      }
    }
</script>
