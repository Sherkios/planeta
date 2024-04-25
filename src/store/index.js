import { createStore } from "vuex";
import NavMenu from "@/store/NavMenu";
import Cards from "@/store/cards";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    navMenu: NavMenu,
    cards: Cards,
  },
});
