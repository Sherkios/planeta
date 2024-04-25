import newData from "/public/data/news";
export default {
  namespaced: true,
  state: () => ({
    news: [],
  }),
  getters: {
    news(state) {
      return state.news;
    },
  },
  mutations: {
    setNews(state, news) {
      state.news = news;
    },
  },
  actions: {
    async fetchNews({ commit }) {
      try {
        commit("setNews", newData);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
