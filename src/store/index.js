import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        islogin:false
    },
    getters:{
        islogin:state=>state.islogin
    },
    mutations:{
        LOGIN(state){
            state.islogin=true
        },
        LOGOUT(state){
            state.islogin=false,
            sessionStorage.removeItem('user')
        }
    },
    actions:{
        login (context) {
            context.commit('LOGIN')
        },
           
        logout (context) {
            context.commit('LOGOUT')
        }
    }
})