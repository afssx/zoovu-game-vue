<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col class="text-left">
          <h3>Good luck, {{ username }}!</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-left">
          <h4 class="grey--text">Pick up the right cards</h4>
        </v-col>
      </v-row>
    </v-col>
    <v-spacer />
    <v-col>
      <v-row>
        <v-col class="text-right">
          <h3  class="primary--text">
            <v-icon small color="green darken-2">fa-clock</v-icon>Your score:
            {{ time }} seconds
          </h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-right">
          <h4 class="grey--text">The faster the better!</h4>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    name: "GameHeader",
    computed: {
      ...mapState(["username", "time"]),
    },
  };
</script>

<style lang="scss">
  .green {
    color: #00d2b4;
  }
  .primary {
    color: rgb(59, 0, 120);
  }
  .secondary {
    color: rgb(152, 152, 152);
  }
</style>
