
//求和相关
export default {
    namespaced: true,
    actions:{
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
    },
    getters: {
        bigSum(state) {
            return state.sum*10
        }
    },
    mutations:{
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
        }
    },
    state : {
        sum: 0,
        school: '温岭中学',
        subject: '前端',  
    }
}





