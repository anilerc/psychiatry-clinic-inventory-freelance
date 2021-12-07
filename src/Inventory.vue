<template>
  <div class="wrapper">
    <ul>
      <li
        class="animate__animated animate__fadeInUp"
        v-for="choice in posts"
        :key="choice.id"
        @click="nextQuestion(choice.id)"
      >
        <p>{{ choice.data }}</p>
      </li>
    </ul>

    <button
      class="smaller"
      v-if="questionNumber != 1"
      @click="previousQuestion"
    >
      Geri Dön
    </button>
  </div>
</template>


<script>
import { store } from "./store/store.js";
import posts from "./inventoryA.json";

export default {
  data: function () {
    return {
      size: -1,
    };
  },
  mounted() {
    const length = this.$store.getters.getTestChoice.toString();
    this.size = Object.keys(JSON.parse(JSON.stringify(posts))[length]).length;
  },

  computed: {
    posts() {
      const obj = JSON.parse(JSON.stringify(posts));
      const indexStr = this.$store.getters.getCurrentQuestion.toString();
      const selectedTest = this.$store.getters.getTestChoice;

      return obj[selectedTest][indexStr];
    },

    questionNumber() {
      return this.$store.getters.getCurrentQuestion;
    },

    totalSkor() {
      return this.$store.getters.getAnswers;
    },
  },

  methods: {
    nextQuestion(currentValue) {
      if (this.$store.getters.getCurrentQuestion >= this.size) {
        this.$store.commit("goForward", currentValue);
        this.$store.commit("nextPage");
      } else {
        this.$store.commit("goForward", currentValue);
      }
    },

    previousQuestion() {
      this.$store.commit("goBack");
    },
  },
};
</script>


<style>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(248, 248, 248);
  margin-top: 17vh;
  padding: 28px;
}

p {
  border-bottom: 1px solid purple;
  padding-bottom: 12px;
  cursor: pointer;
}

.smaller {
  margin-top: 32px;
  font-size: 0.8rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>