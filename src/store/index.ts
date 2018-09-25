import Vuex from 'vuex';

const store = () => new Vuex.Store<any>({
  actions: {
    toggleDotDash(context) {
      context.commit('toggleDotDash');
    },
    updatePlainText(context, data) {
      context.commit('updateTextPlain', data);
    },
    updateMorseText(context, data) {
      context.commit('updateTextMorse', data);
    },
  },
  getters: {
    morseTextPerCharacter: (state) => {
      return state.textMorse as any;
    },
    morseTextAsString: (state) => {
      return state.textMorse.join('  ');
    },
  },
  mutations: {
    toggleDotDash(state) {
      state.isDot = !state.isDot;
    },
    updateTextPlain(state, value) {
      state.textPlain = value;
    },
    updateTextMorse(state, value) {
      state.textMorse = value;
    },
  },
  state: {
    isDot: false,
    textMorse: [],
    textPlain: '',
  },
});

export default store;
