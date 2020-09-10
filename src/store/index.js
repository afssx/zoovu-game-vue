import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import Visibility from "visibilityjs";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: null,
    score: 0,
    playing: false,
    time: 0,
    $interval: null,
    dialog: false,
  },
  mutations: {
    SET_USERNAME(state, username) {
      state.username = username;
    },
    SET_TIME(state, time) {
      state.time = time;
    },
    SET_PLAYING(state, payload) {
      state.playing = payload;
    },
    INCREMENT_SCORE(state) {
      state.score++;
    },
    DECREMENT_SCORE(state) {
      if (state.score > 0) state.score--;
    },
    SET_DIALOG(state, payload) {
      state.dialog = payload;
    },
  },
  actions: {
    setUsername({ commit }, username) {
      commit("SET_USERNAME", username);
      router.push({ name: "Game" });
    },
    startTimer({ commit, state }) {
      state.$interval = Visibility.every(1000, () => {
        commit("SET_TIME", state.time + 1);
      });
    },
    stopTimer({ state }) {
      Visibility.stop(state.$interval);
    },
    startGame({ commit, dispatch }) {
      commit("SET_PLAYING", true);
      dispatch("startTimer");
    },
    async endGame({ commit, dispatch }) {
      await dispatch("stopTimer");
      commit("SET_PLAYING", false);
      commit("SET_DIALOG", true);
      setTimeout(() => {
        dispatch("restartGame");
      }, 10000);
    },
    punishTime({ commit, state }) {
      commit("SET_TIME", state.time + 10);
    },
    incrementScore({ state, commit, dispatch }) {
      commit("INCREMENT_SCORE");
      if (state.score === 5) dispatch("endGame");
    },
    restartGame(){

    }
  },
  modules: {},
});
