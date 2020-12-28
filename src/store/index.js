import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        logedIn: false
    },
    getters: {
        fetchUser: (state) => {
            return state.user
        },
        isLogedIn: (state) => state.logedIn
    },
    actions: {
        dispatchUser(context, user) {
            context.commit('user', user)
        },
        dispatchLogin(context) {
            context.commit('logIn')
        },
        removeUser(context) {
            context.commit('clearUser')
        }
    },
    mutations: {
        user(state, user) {
            state.user = user
        },
        logIn(state) {
            state.logedIn = true
        },
        clearUser(state) {
            state.user = null
            state.logedIn = false
        }
    },
    plugins: [createPersistedState()]
})