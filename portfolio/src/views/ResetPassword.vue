<template>
    <div class="container">
      <v-snackbar color="error" v-model="showError" timeout="4000" v-if="ErrorMessage">
        {{ ErrorMessage }}
      </v-snackbar>
      <v-snackbar color="success" timeout="4000" v-if="SuccessMessage">
        {{ SuccessMessage }}
      </v-snackbar>
      <div class="passordRest-header">
        <h1>Reset password</h1>
      </div>
      <div class="password text-white text-center">
        <p>Enter your email below </p>
      </div>
      
      <v-card>
        <v-card-text>
          <form ref="form" @submit.prevent="resetPassword">
            <v-text-field 
            :rules="emailRules"
            label="Email" 
            type="email" 
            prepend-icon="mdi-email" 
            v-model="email">
    
            </v-text-field>
            <v-card-actions>
              <v-btn class="text-caption mx-8" :loader="isReseting" @click="resetPassword" >Submit</v-btn>
            </v-card-actions>
          </form>
        </v-card-text>
        
      </v-card>
      
    </div>
  </template>
  
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {

      isReseting: false,
      email: '',

      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+/.test(v) || "Email must be valid",
      ],
    };
  },
  methods: {

    //reset form
    resetForm() {
      this.$refs.form.reset();
    },

    resetPassword: function(){
    
    //clear the form
    this.resetForm()

    //start the laoder
    this.isReseting = true;

    this.$store.dispatch("resetPassword", {
        email: this.email,
    })

    //stop the loader
    this.isReseting = false;
   }
  },
  computed: {
    ...mapState({
      ErrorMessage: state => state.ErrorMessage,
      SuccessMessage: state => state.SuccessMessage,
  }),
   },
};
</script>
<style scoped>
.passordRest-header {
  text-align: center;
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  padding: 1rem;
  position: relative;
  margin-bottom: 2em;
}
.passordRest-header:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background-color: rgb(143, 142, 142);
  border-radius: 2px;
}

.v-btn {
  background: #fe4b57;
  width: 100px;
  margin-bottom: 1em;
}
.v-card {
  background: #35394e;
  padding-right: 15px;
  padding-top: 15px;
  border-radius: 8px;
  margin-top: 2rem;
  margin-bottom: 4rem;
  color: white;
  
}
@media only screen and (max-width: 600px) {
  .container {
    margin-top: -4em !important;
  }
}
</style>