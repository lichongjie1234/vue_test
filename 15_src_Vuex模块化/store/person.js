import axios from "axios"
import { nanoid } from "nanoid"


//人员相关
export default {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0){
                context.commit('AddPerson',value)
            }
        },
        addPersonNameServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('AddPerson', {id:nanoid(),name:response.data })
                },
                error=>{error.message}

                
            )
        }
    },
    getters: {
        getFirstName(state) {
            return state.personList[0].name
        }
    },
    mutations:{
       AddPerson(state, value) {
           state.personList.unshift(value)
       }
   },
    state : {
       personList: [
           {id:'001',name:'张三'}
       ] 
   }
}
