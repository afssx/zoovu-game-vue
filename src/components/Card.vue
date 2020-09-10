<template>
  <v-card
    width="200"
    height="200"
    :id="id"
    draggable
    @dragstart="dragStart"
    @dragover.stop
    align="center"
    class="pt-6"
    :elevation="8"
    
  >
    <v-img
      :src="image"
      :alt="name"
      draggable="false"
      height="150"
      width="150"
      contain
    >
    </v-img>
  </v-card>
</template>

<script>
  export default {
    props: ["id", "img"],
    name: "Card",
    data() {
      return {};
    },
    computed: {
      image() {
        return require(`../assets/zoovu-${this.img}.svg`);
      },
      name() {
        return `Letter ${this.img.toUpperCase()}`;
      },
    },
    methods: {
      dragStart({ target, dataTransfer }) {
        dataTransfer.setData("card_id", target.id);
        dataTransfer.setData("card_img", this.img);
      },
    },
  };
</script>

<style lang="scss">
  .card {
    position: relative;
    background-color: #fff;
    -webkit-box-shadow: 0 0 30px rgba(51, 1, 109, 0.1);
    box-shadow: 0 0 30px rgba(51, 1, 109, 0.1);
    border-radius: 16px;
    padding: 16px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 200px;
    height: 200px;
    cursor: move;
  }
</style>
