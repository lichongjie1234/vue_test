//该文件用于创建vuex中的store
import Vue from 'vue'
import Vuex from 'vuex'
import { nanoid } from 'nanoid'
const actions = {
    // increment(context,value){
    //     context.commit('increment',value)
    // },
    // decrement(context,value){
    //     context.commit('decrement',value)
    // },
    incrementOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('incrementOdd', value)
        }
    },
    incrementWait(context, value) {
        setTimeout(() => {
            context.commit('incrementWait', value)
        }, 500);
    }
        
}

const getters = {
    bigSum(state) {
        return state.sum*10
    }
}

const mutations = {
    increment(state,value) {
        state.sum+=value
    },
    decrement(state,value) {
        state.sum-=value
    },
    incrementOdd(state,value) {
        state.sum+=value 
    },
    incrementWait(state, value) {
        state.sum+=value 
    },
    AddPerson(state, value) {
        state.personList.unshift(value)
    }
}

const state = {
    sum: 0,
    school: '温岭中学',
    subject: '前端',
    personList: [
        {id:'001',name:'张三'}
    ]
    
}
Vue.use(Vuex)
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

