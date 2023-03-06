<template>
  <div>
    <v-navigation-drawer class="text-white" app v-model="drawer" style="background-color:#202236 !important;">
      <v-responsive class="pt-4 text-center">
        <v-avatar size="100px" class="bg-grey lighten-2">
          <img src="./avatar.jpeg" alt="avator" />
        </v-avatar>
        <p class="text-grey mt-2">Isaac Mhlanga</p>
      </v-responsive>
      <v-list density="compact">
        <v-list-item
          v-for="(item, i) in links"
          :key="i"
          :value="item"
          active-color="#fe4b57"
          :to="item.route"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon
        color="#fe4b57"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light text-grey">Ike</span>
        
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn color="grey" @click="logout">
        <span>Sing Out</span>
        <v-icon class="grey mx-2">mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      drawer: true,
      links: [
        { icon: "mdi-view-dashboard", text: "Home", route: "/dashboard" },
        { icon: "mdi-account", text: "Profile", route: "/profile" },
        { icon: "mdi-briefcase", text: "Projects", route: "/project-dash" },
        { icon: "mdi-email", text: "Notifications", route: "/inbox-dash" },
      ],
      items: [
        { text: "Real-Time", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi-flag" },
      ],
    };
  },
  computed: {
    ...mapState(['userProfile']),
    ...mapState(['isAuthenticated']),
  },

  methods: {
    logout: function () {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
.v-btn:hover {
  color: #fe4b57 !important;
}
.v-app-bar
{
  background-color: #202236  !important;
  margin-top: -3.6rem;
}
.v-icon
{
  padding-left: 25px;
}
@media only screen and (max-width: 600px) {
  .v-app-bar {
    background-color: #1f2235 !important;
    margin-top: -4rem;
  }
}
 
</style>
