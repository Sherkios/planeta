import navMenuData from "/public/data/navMenu";
export default {
  namespaced: true,
  state: () => ({
    navMenu: [],
  }),
  getters: {
    navMenu(state) {
      return state.navMenu;
    },
  },
  mutations: {
    setNavMenu(state, navMenu) {
      state.navMenu = navMenu;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        commit("setNavMenu", navMenuData);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
