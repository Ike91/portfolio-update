<template>
  <div class="container">
    <div class="contact-section">
      <pageHeader v-bind:header-text="header" />
      <v-row justify="center" class="text-center">
        <p>
          If you're interested in working with me, learning programming concepts, or collaborating on projects, 
          please don't hesitate to use the contact form provided below. 
          I'm always open to new opportunities and partnerships, and I'm happy to answer any questions you may have. 
          I look forward to connecting with you and exploring the possibilities of working together.
        </p>
      </v-row>
      
      <v-row justify="center">
        <v-col>
          <div class="contact-container">
            <v-form>
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Name"
                prepend-icon="mdi-account"
                @input="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
             
                :error-messages="emailErrors"
                label="E-mail"
                required
                prepend-icon="mdi-email"
                @input="$v.email.$touch()"
              ></v-text-field>

              <v-text-field
                v-model="phone"
                active-class="transparent-bg"
                :error-messages="emailErrors"
                label="Phone"
                required
                prepend-icon="mdi-phone"
                @input="$v.phone.$touch()"
                @blur="$v.phone.$touch()"
              ></v-text-field>

              <v-textarea
                v-model="select"
               
                :items="items"
                :error-messages="selectErrors"
                label="Message"
                required
                prepend-icon="mdi-pencil"
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
              ></v-textarea>

              <v-btn @click="submit" class="mx-10">submit</v-btn>
            </v-form>
          </div>
        </v-col>
      </v-row>
      
    </div>
  </div>
</template>
<script>
import pageHeader from '../components/pageHeader'
export default {
  components:
  {
    pageHeader,
  },
  data: () => ({
    header: 'Contact',
    errorMessages: [],
    name: null,
    email: null,
    phone: null,
    message: null,
    formHasErrors: false,
  }),
};
</script>
<style scoped>
.contact-section {
  margin-bottom: 8em;
  padding-top: 20px;
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.transparent-bg {
  background-color: #35394e !important;
  color: black;
}

.contact-container {
  
  border-radius: 8px;
  margin-top: 2.5em;
  background: #35394e;
  padding-top: 2.5em;
  padding-left: 15px;
  padding-right: 25px;
  padding-bottom: 2em;
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.v-btn {
  
  background-color: #fe4b57 !important;
  color: white !important;
  width: 100px;
}
.v-text-field:active
{
  background-color: transparent;
}

@media only screen and (max-width: 600px) {
  .container {
    padding-bottom: 1em !important;
    border-radius: 10px !important;
   
    margin-top: -4em !important;
  }
  .contact-section {
    margin-bottom: 0px;
    padding-top: 0px;
  }
}
</style>
