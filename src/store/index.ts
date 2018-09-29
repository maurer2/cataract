import Vuex from 'vuex';

const store = () => new Vuex.Store<any>({
  strict: true,
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
    setTextPositionToNext(context) {
      context.commit('setTextPositionToNext');
    },
  },
  getters: {
    morseTextPerCharacter: (state) => {
      return state.textMorse as any;
    },
    morseTextAsString: (state) => {
      return state.textMorse.join('');
    },
    currentMorseCharacter: (state) => {
      return state.textMorse[state.textPosition];
    },
    currentMorseType: (state, getters) => {
      return getters.currentMorseCharacter === '.';
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
    setTextPositionToNext(state) {
      if (state.textPosition === state.textMorse.length -1) {
        return
      }

      state.textPosition = state.textPosition + 1;
    },
    setTextPositionToPrevious(state) {
      if (state.textPosition === 0) {
        return
      }

      state.textPosition = state.textPosition - 1;
    },
  },
  state: {
    isDot: false,
    textMorse: [],
    textPlain: '',
    textPosition: 0,
  },
});

export default store;
