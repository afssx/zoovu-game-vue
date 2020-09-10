<template>
  <div
    class="slot"
    :class="{ over: dragging }"
    draggable
    @dragover.prevent="dragging = true"
    @dragleave="dragging = false"
    @drop.prevent="drop"
  >
    <slot />
  </div>
</template>

<script>
  import { mapActions, mapState, mapMutations } from "vuex";
  export default {
    name: 'BoardSlot',
    data() {
      return {
        dragging: false,
      };
    },
    computed: mapState({
      playing: (state) => state.playing,
    }),
    methods: {
      ...mapActions(["startGame", "punishTime", "incrementScore"]),
      ...mapMutations({
        decrementScore: "DECREMENT_SCORE",
      }),
      drop({ dataTransfer, target }) {
        this.dragging = false;
        const card_id = dataTransfer.getData("card_id");
        const card_img = dataTransfer.getData("card_img");
        console.log({ target: target.id, card_img });
        if (target.id != "board-1") {
          let letterSlot = target.id.split("-")[1];
          if (letterSlot != card_img) {
            console.info("+10");
            this.punishTime();
          } else {
            this.incrementScore();
          }
        }
        if (card_img != "") {
          const card = document.getElementById(card_id);
          target.appendChild(card);
        }
      },
    },
  };
</script>

<style lang="scss">
  .slot {
    display: flex;
    // margin: 4px;
    border-radius: 8px;
    border: 2px solid #fff;
    width: 200px;
    height: 204px;
    &.over {
      // border-style: dashed;
      border: 2px dashed #00d2b4;
    }
  }
</style>
