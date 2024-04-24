import { createStore } from "vuex";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth: Auth,
    users: Users,
    notes: Notes,
    errors: Errors,
  },
});
