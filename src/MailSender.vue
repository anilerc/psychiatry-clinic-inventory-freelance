<script>
import emailjs from "emailjs-com";
export default {
  data: function () {
    return {
      testSent: false,
    };
  },
  methods: {
    sendEmail(e) {
      const templateParams = {
        name: this.$store.getters.getFirstName,
        surname: this.$store.getters.getLastName,
        updateDate: this.$store.getters.getUpdateDate,
        changeField: this.$store.getters.getField,
        newValue: this.$store.getters.newValue.toString(),
      };
      emailjs
        .send(
          "service_w4f9uri",
          "template_rmqngwd",
          templateParams,
          "user_BWJGQWEtq9R6AQUXDJ8J7"
        )
        .then(
          (response) => {
            this.updateSent = true;
          },
          (error) => {
            console.error ("Update couldn’t be sent", error);
          }
        );
    },
  },
};
</script>
