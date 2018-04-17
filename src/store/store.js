import vuex from 'vuex';
import vue from 'vue';

vue.use(vuex);

let store = new vuex.Store({
    state: {
        // 存储用户登录的信息
        userInfo: {
            username: '',
            password: ''
        }
    },
    actions: {
        // 用户登录成功触发该方法并传入参数
        getUserInfo({commit}, pyload) {
            commit('changeUserInfo', pyload);
        }
    },
    mutations: {
        // 登录成功保存用户信息，并跳转路由
        changeUserInfo(state, userInfo) {
            this.state.userInfo.username = userInfo.username;
            this.state.userInfo.password = userInfo.password;
            console.log(this.state.userInfo.username);
            userInfo.history.push('/');
        }
    },
    getters: {

    }
})

export default store;