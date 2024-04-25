import cardsData from "/public/data/cards";
export default {
  namespaced: true,
  state: () => ({
    cards: [],
  }),
  getters: {
    cards(state) {
      return state.cards;
    },
    besteseller(state) {
      return state.cards.filter(card => card.besteseller);
    },
  },
  mutations: {
    setCards(state, cards) {
      state.cards = cards;
    },
  },
  actions: {
    async fetchCards({ commit }) {
      try {
        commit("setCards", cardsData);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
