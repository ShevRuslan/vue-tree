import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    objects: {},
  },
  mutations: {
    addNewObjects(state, payload) {
      state.objects = payload;
    },
    addNewObject(state, { item, newItem }) {
      const idx = state.objects.children.findIndex(element => element.name == item.name);
      state.objects.children[idx].children.push(newItem);
    }
  },
  getters: {
    getObjects(state) {
      return state.objects;
    }
  },
  actions: {},
  modules: {},
});
