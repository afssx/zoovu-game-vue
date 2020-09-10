// mutations.spec.js

import store from "../../src/store";

describe("mutations", () => {
  it("SET_USERNAME", () => {  
    store.commit('SET_USERNAME', 'Andres')
    // assert result
    expect(store.state.username).toBe('Andres');
  });
  
  it("DECREMENT_SCORE", () => {  
    store.commit('DECREMENT_SCORE')
    expect(store.state.score).toBe(0);
  });
});


