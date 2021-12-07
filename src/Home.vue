<template>
  <div class="complete">
    <h1 class="hero animate__animated animate__fadeInDown">Hoş geldiniz!</h1>
    <main>
      <div class="wrapperS">
        <div class="inputarea">
          <input
            type="text"
            class="animate__animated animate__fadeInLeft"
            v-model="firstName"
            placeholder="Adınız..."
            v-if="secilenSey === -1"
          />
          <input
            type="text"
            class="animate__animated animate__fadeInLeft"
            placeholder="Soyadınız..."
            v-model="lastName"
            v-if="secilenSey === -1"
          />
        </div>

        <div class="choice">
          <div v-if="firstName && lastName">
            <p class="animate__animated animate__fadeInLeft">
              Envanter seçiniz:
            </p>
            <select-choice
              class="animate__animated animate__fadeInLeft"
              v-for="i in 10"
              :key="i"
              :number="i"
            ></select-choice>
          </div>
        </div>
        <button
          class="pad animate__animated animate__fadeInLeft"
          v-if="secilenSey != -1"
          @click="setUserData"
        >
          Envantere Başla
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import SelectChoice from "./SelectComponent.vue";

export default {
  data: function () {
    return {
      firstName: "",
      lastName: "",
    };
  },

  components: {
    "select-choice": SelectChoice,
  },

  computed: {
    areasFilled() {
      return this.firstName && this.lastName;
    },

    secilenSey() {
      return this.$store.getters.getTestChoice;
    },
  },
  methods: {
    setUserData() {
      this.$store.commit("setInformation", [this.firstName, this.lastName]);
      this.$store.commit();
    },
  },
};
</script>

<style scoped>
* {
  text-align: center;
}

.complete {
  margin-top: 10vh;
}

.hero {
  font-size: 2.6rem;
  font-weight: 10;
}

.inputarea {
  margin-top: 2vh;
}

.wrapperS {
  background-color: rgb(243, 243, 243);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 3vh;
}

input {
  display: block;
  font-size: 1rem;
  color: purple;
  background-color: rgb(255, 255, 255);
  margin-bottom: 1.2vh;
  padding: 3px;
  border: 2px solid rgb(216, 183, 216);
  border-radius: 4px;
}

.choice {
  margin-top: 0;
  margin-bottom: 2rem;
  padding: 10px;
  font-size: 25px;
  border-bottom: 2px solid black;
}
</style>
