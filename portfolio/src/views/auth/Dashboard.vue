<template>
  <div>
    <NavDash />
    <v-container>
      <div class="container">
        <v-row class=" pt-3"> 
          <v-col cols="12" md="6" lg="4" xl="4">
            <v-card elevation="9">
              <v-card-text>
             <h4>Trafic</h4>
             <v-divider color="grey"></v-divider>
               
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4" xl="4">
            <v-card elevation="9">
              <v-card-text>
                <h4>Visits</h4>
                <v-divider color="grey"></v-divider>
                
              
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4" xl="4">
            <v-card elevation="9">
              <v-card-text>
                <h4>Perfomance</h4>
                <v-divider color="grey"></v-divider>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
import NavDash from "../../components/NavDash.vue";
export default {
  components: {
    NavDash,
  },
  data() {
    return {
      dialog: false,
      isLoading: false,
      name: "",
      role: "",
      phone: "",
      email: "",
      about: "",
      projects: [],

      icons: [
        "mdi-facebook",
        "mdi-twitter",
        "mdi-linkedin",
        "mdi-instagram",
        "mdi-github",
      ],
    };
  },

  mounted() {
    
  },

  methods: {
  
  },
};
</script>
<style scoped>
.v-card
{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background: #35394e;
  height: 150px;
  color: grey;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.container
{
  margin-top: -5rem;
}
</style>
