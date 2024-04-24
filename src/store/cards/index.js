export default {
  namespaced: true,
  state: () => ({
    cards: [],
  }),
  mutations: {
    setCards(state, cards) {
      if (cards.length === 0) {
        state.cards = [];
      } else {
        if (!state.cards.includes(cards)) {
          state.cards.push(cards);
        }
      }
    },
  },
};
