import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    msg: '初探vuex',
    count:0,
    lists:[
      {id:0,name:'李'},
      {id:1,name:'赵'},
      {id:2,name:'王'}
    ]
  },
  mutations:{
     modifyMsg(state,msg2){
       state.msg = msg2
     },
     countAdd(state,obj){
       state.count+= obj.num;
     },
     countRemove(state,obj){
       state.count-= obj.num;
     },
    countAddMap(state){
      state.count+= 1;
    },
    countRemoveMap(state){
      state.count-= 1;
    },
  },
  getters:{
    // filterLists:state => {//state为默认参数
    //     return state.lists.filter(list => list.id == 1)
    // },
    filterLists(state){//state为默认参数 两种写法都可以
      return state.lists.filter(list => list.id == 1)
    }
  }
});

export default store
