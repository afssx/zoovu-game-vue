<template>
  <div
    class="board"
    @dragover.prevent
    @drop.prevent="drop"
    @dragstart="dragstart"
  >
    <slot />
  </div>
</template>

<script>
  import { mapActions, mapState, mapMutations } from "vuex";
  export default {
    name: "Board",
    computed: mapState({
      playing: (state) => state.playing,
    }),
    methods: {
      ...mapActions(["startGame"]),
      ...mapMutations({
        decrementScore: "DECREMENT_SCORE",
      }),
      drop({ dataTransfer, target }) {
        const card_id = dataTransfer.getData("card_id");
        const card_img = dataTransfer.getData("card_img");
        if (card_img != "") {
          const card = document.getElementById(card_id);
          target.appendChild(card);
          this.decrementScore();
        }
      },
      dragstart() {
        const { playing, startGame } = this;
        if (!playing) startGame();
      },
    },
  };
</script>

<style lang="scss" scoped>
  .board {
    display: flex;
  }
</style>
