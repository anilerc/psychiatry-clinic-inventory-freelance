<template>
  <div>
    <div class="testbox" @click="testSelect" :class="{ selectedCss: selected }">
      {{ number }}
    </div>
  </div>
</template>


<script>
export default {
  props: ["number"],
  data: function () {
    return {
      selected: false,
    };
  },
  methods: {
    testSelect() {
      if (this.selected) {
        this.$store.commit("setChoiceDone", false);
        this.selected = false;
        this.$store.commit("setTestChoice", -1);
      } else if (!this.$store.getters.getChoiceDone) {
        this.selected = true;
        this.$store.commit("setChoiceDone", true);
        this.$store.commit("setTestChoice", this.number);
      }
    },
  },
};
</script>


<style scoped>
div {
  display: inline;
}

.selectedCss {
  background-color: rgb(255, 176, 4);
  font-size: 1.02rem;
  padding-left: 3px;
  color: black;
  text-align: center;
  cursor: pointer;
}

.testbox {
  transition: 0.3s;
  cursor: pointer;
}

.testbox:hover {
  background-color: purple;
  color: white;
}
</style>