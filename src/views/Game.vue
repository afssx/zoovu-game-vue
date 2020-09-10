<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="10">
        <game-header />
        <v-row>
          <v-col>
            <board id="board-1">
              <card
                v-for="card in cards"
                :key="card.id"
                :img="card.img"
                :id="card.id"
              />
            </board>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="text-left">
            <h3 class="grey--text">
              ..and drop them to make the logo great again!
            </h3>
            <div id="board-2">
              <board-slot
                :id="`slot-${letter}`"
                v-for="(letter, index) in 'zoovu'.split('')"
                :key="index"
              />
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-dialog :value="dialog" max-width="290">
        <v-card>
          <v-card-title></v-card-title>
          <v-card-text>
            <h3 class="primary--text">
              <v-icon small color="green darken-2">fa-clock</v-icon>Your score:
              {{ time }} seconds
            </h3>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="restartGame">
              Ok
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
  import Board from "../components/Board";
  import BoardSlot from "../components/BoardSlot";
  import Card from "../components/Card";
  import GameHeader from "../components/GameHeader";
  import { mapState, mapActions } from "vuex";

  export default {
    name: "Game",
    components: {
      Board,
      BoardSlot,
      Card,
      GameHeader,
    },
    mounted() {
      let { cards, shuffle } = this;
      this.cards = shuffle([...cards]);
    },
    data() {
      return {
        cards: [
          { id: 1, img: "z" },
          { id: 2, img: "o" },
          { id: 3, img: "o" },
          { id: 4, img: "v" },
          { id: 5, img: "u" },
        ],
      };
    },
    computed: {
      ...mapState(["dialog", "username", "time"]),
    },
    methods: {
      ...mapActions(["restartGame"]),
      shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      },
    },
  };
</script>

<style lang="scss" scoped>
  #board-1 {
    border: solid 1px #fefefe;
    border-radius: 8px;
    height: 200px;
    display: flex;
    justify-content: space-between;
  }
  #board-2 {
    min-height: 150px;
    display: flex;
    justify-content: space-between;
  }
</style>
