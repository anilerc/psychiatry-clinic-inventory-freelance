import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
export const store = new Vuex.Store({

  state: {
    currentQuestion: 1,
    choiceDone: false,
    testChoice: -1,
    displayPage: 1,
    firstName: "",
    lastName: "",
    totalScore: 0,
    answers: [],
  },


  getters: {

    getFirstName(state) {
      return state.firstName;
    },

    getTestChoice(state) {
      return state.testChoice;
    }
    ,

    getChoiceDone(state) {
      return state.choiceDone;
    },

    getLastName(state) {
      return state.lastName;
    },

    getDisplayPage(state) {
      return state.displayPage;
    },

    getTotalScore(state) {
      return state.totalScore;
    },

    getAnswers(state) {
      return state.answers;
    },

    getCurrentQuestion(state) {
      return state.currentQuestion;
    },
  },

  mutations: {

    goForward(state, score) {
      state.totalScore += score;
      state.answers.push(score);
      state.currentQuestion++;
    },



    setChoiceDone(state, value) {
      state.choiceDone = value;
    },

    goBack(state) {
      state.totalScore -= state.answers.pop();
      state.currentQuestion--;
    },

    setInformation(state, fullNameArray) {
      state.firstName = fullNameArray[0];
      state.lastName = fullNameArray[1];
      state.displayPage++;
    },

    setTestChoice(state, testChoice) {
      state.testChoice = testChoice;
    }
    , nextPage(state) {
      state.displayPage++;
    }


  }





});
