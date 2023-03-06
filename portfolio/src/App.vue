<template>
    <v-app>
      <Navbar />
        <v-main>
          <!-- Provides the application the proper gutter -->
          <v-container fluid>
            <!-- If using vue-router -->
            <router-view></router-view>
          </v-container>
        </v-main>
     
      <Footer />
    </v-app>
</template>

<script>

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    Footer,
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.v-main {
  background: #1f2235 !important;
  font-family:'Times New Roman', Times, serif;
  font-size: 18px;
}
.container{
  background: #1f2235 !important;
}
</style>
