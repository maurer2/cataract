import Vuex from 'vuex';

const store = () => new Vuex.Store<any>({
  actions: {
    toggleDotDash(context) {
      context.commit('toggleDotDash');
    },
    updatePlainText(context, data) {
      context.commit('updateTextPlain', data);
    },
  },
  getters: {
    morseTextPerCharacter: (state) => {
      return state.textMorse as any;
    },
  },
  mutations: {
    toggleDotDash(state) {
      state.isDot = !state.isDot;
    },
    updateTextPlain(state, value) {
      state.textPlain = value;
    },
  },
  state: {
    isDot: false,
    textMorse: [],
    textPlain: '',
  },
});

export default store;
