import Vuex from "vuex";
import Vue from 'vue'
import Vuetify from "vuetify";
import { mount, createLocalVue } from "@vue/test-utils";
import GameHeader from "@/components/GameHeader.vue";
const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(Vuetify)

const store = new Vuex.Store({
  state: {
    username: "Andres",
  },
});

describe("GameHeader.vue", () => {

  it("renders props.msg when passed", () => {
    const wrapper = mount(GameHeader, {
      store,
      localVue
    });
    expect(wrapper.find("h3").text()).toBe("Good luck, Andres!");
  });
});
