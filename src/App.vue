<template>
  <div class="maindiv">
    <div>
      <home-page v-if="currentPage === 1"></home-page>

      <inventory v-if="currentPage === 2" selectedTest="3"></inventory>

      <finalize v-if="currentPage === 3"></finalize>
    </div>
  </div>
</template>

<script>
import Home from "./Home.vue";
import Inventory from "./Inventory";
import Finalize from "./MailSender.vue";

export default {
  components: {
    homePage: Home,
    inventory: Inventory,
    finalize: Finalize,
  },

  computed: {
    currentPage() {
      return this.$store.getters.getDisplayPage;
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Georama", sans-serif;
  font-size: 20px;
}

@media only screen and (max-width: 600px) {
  * {
    font-size: 15px;
  }
}

body,
html {
  height: 100vh;
}

button {
  color: white;
  padding: 9px;
  font-size: 1rem;
  background-color: #9b59b6;
  box-shadow: 0px 5px 0px 0px #82409d;
  border: none;
  transition: 1s;
}

button:hover {
  background-color: #b573d0;
}
</style>
