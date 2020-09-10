<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-form v-model="valid" @submit.prevent="setUsername(username)">
          <h3 class="primary--text">Hello friend, tell me your name...</h3>

          <v-text-field
            v-model="username"
            placeholder="Your name here"
            class="username-field"
            :rules="usernameRules"
            required
          ></v-text-field>

          <v-btn
            rounded
            outlined
            elevation="1"
            color="primary"
            :disabled="!valid"
            class="font-weight-black"
            @click="setUsername(username)"
            >Let's go
            <v-icon class="arrow-icon" right dark small
              >fa-arrow-right</v-icon
            ></v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    data() {
      return {
        valid: false,
        username: null,
        usernameRules: [(v) => !!v || "Username is required"],
      };
    },
    methods: {
      ...mapActions(["setUsername"]),
    },
  };
</script>

<style lang="scss">
  .username-field
    > .v-input__control
    > .v-input__slot
    > .v-text-field__slot
    > input {
    text-align: center;
    font-style: italic;
  }
  .theme--light.v-btn {
    background: #fefefe;
  }
  .v-btn__content {
    text-transform: initial;
  }
  .theme--light.v-btn.v-btn--disabled .v-icon {
    width: 12px;
    height: 12px;
  }
</style>
