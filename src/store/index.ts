import Vuex from 'vuex';

const store = () => new Vuex.Store<any>({
    mutations: {
        alternateDotDash(state) {
            state.isDot = !state.isDot;
        }
    },
    state: {
        isDot: true,
    },
});

export default store;
