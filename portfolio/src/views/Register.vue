<template>
  <div class="container">
    <div class="login-sect">
      <div class="login-header">
        <h1>Register</h1>
      </div>
      <br>
      <v-row justify="center" class="text-center">
        <p>
          Please note that the registration form has been disabled as it was created solely for practice and testing purposes.
          No actual registration or user creation is taking place, and the form is not intended to be used for any real-world application. 
          This is simply a learning exercise to help me understand and practice form handling in Vue.js.
        </p>
      </v-row>
      <br />
      <v-row justify="center">
        <v-col md="10">
          <v-card class="login-card" elevation="1">
            <v-card-title class="mt-6"> </v-card-title>

            <v-card-text>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                @submit.prevent
              >
                <v-text-field
                  v-model="name"
                  name="name"
                  label="Fist Name"
                  type="text"
                  placeholder="First name"
                  required
                  outlined
                  prepend-icon="mdi-account"
                  :rules="nameRules"
                ></v-text-field>

                <v-text-field
                  v-model="phone"
                  name="phone"
                  label="Phone number"
                  type="text"
                  placeholder="Phone number"
                  required
                  outlined
                  :rules="phoneRules"
                  prepend-icon="mdi-phone"
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  name="email"
                  label="Email"
                  type="text"
                  placeholder="Email"
                  required
                  outlined
                  :rules="emailRules"
                  prepend-icon="mdi-email"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  name="password"
                  label="Password"
                  placeholder="password"
                  required
                  outlined
                  :rules="passwordRules"
                  :type="show ? 'text' : password"
                  @click:append-inner="show = !show"
                  :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  prepend-icon="mdi-lock"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  name="confirm_password"
                  label="Confirm password"
                  type="password"
                  placeholder="Confirm password"
                  required
                  :rules="confirm_passwordRules"
                  prepend-icon="mdi-lock"
                ></v-text-field>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    type="submit"
                    value="Register"
                    text
                    elevation="2"
                    @click="register"
                  >
                    Register
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      valid: false,
      name: "",
      phone: "",
      email: "",
      password: "",
      confirm_password: "",

      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length >= 3 || "Name must be at least 3 charecters long",
      ],

      phoneRules: [
        (v) => !!v || "Phone number is required",
        (v) => /^[0-9]+$/.test(v) || "Phone number must be a number",
        (v) => v.length >= 10 || "Phone number must be a number",
        (v) => v.length < 11 || "Phone number must be 10 digits",
      ],

      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+/.test(v) || "Email must be valid",
      ],

      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 6 || "Password must be 6 charecters long",
      ],

      confirm_passwordRules: [
        (v) => v.equal(passwordRules) || "Password does not match",
      ],
    };
  },
  methods: {
    register: function () {
      const valid = this.$refs.form.validate();
      if (valid) {
        this.$store.dispatch("register", {
          name: this.name,
          phone: this.phone,
          email: this.email,
          password: this.password,
        });
      }
    },
  },
};
</script>
<style scoped>
.login-section {
  padding-top: 20px;
}
.v-container {
  margin-bottom: 15em;
}

.login-header {
  text-align: center;
  color: rgb(77, 76, 76);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  padding: 1rem;
  position: relative;
}

.login-header:after {
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
.login-card {
  border: 1px solid rgb(216, 215, 215);
  border-radius: 8px;
  margin-top: 2.5em;
  background: rgb(219, 210, 210);
  padding-top: 1px;
  padding-left: 1px;
  padding-right: 18px;
  padding-bottom: 1px;
}
.v-conatiner {
  margin: 10em !important;
}
.v-btn {
  background-color: #ccc3c3 !important;
  color: grey;
  width: 100px;
}
.v-btn:hover {
  background-color: #c0bcbc !important;
}
</style>
