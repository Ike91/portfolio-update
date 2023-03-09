<template>
  <div class="container">
    <v-app-bar
      app
      class="d-none d-sm-flex and-down"
      v-if="$route.meta.hideNavbar"
    >
      <v-toolbar-title class="text-white"
        ><v-icon color="#fe4b57" class="mx-2">mdi-draw</v-icon>Isaac
        Mhlanga</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-for="item in nav"
          :key="item.icon"
          :to="item.path"
          :title="item.title"
          :prepend-icon="item.icon"
          >{{ item.text }}</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>
    <v-app-bar class="d-sm-none" app>
      <v-app-bar-nav-icon @click="dialog = true" color="#fe4b57" size="25">
      </v-app-bar-nav-icon>
      <v-toolbar-title class="text-white">Isaac Mhlanga</v-toolbar-title>

      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-left-transition"
      >
        <v-card>
          <v-toolbar app>
            <v-toolbar-title class="text-white">Isaac Mhlanga</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="dialog = false">
              <v-icon color="#fe4b57">mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-divider></v-divider>

          <v-list>
            <v-list-item
              v-for="(item, index) in nav"
              :key="index"
              :to="item.path"
              @click="dialog = false"
            >
              <strong>{{ item.text }}</strong>
              <template v-slot:prepend class="mobil-nav-icon">
                <v-icon :icon="item.icon"></v-icon>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-dialog>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      nav: [
        {
          icon: "mdi-home",
          text: "Home",
          active: true,
          path: "/home",
        },
        {
          icon: "mdi-lightbulb-on",
          text: "Skills",
          active: false,
          path: "/skills",
        },
        {
          icon: "mdi-lightbulb-on",
          text: "Education",
          active: false,
          path: "",
        },
        {
          icon: "mdi-lightbulb-on",
          text: "Data analyst",
          active: false,
          path: "",
        },
        {
          icon: "mdi-briefcase",
          text: "Projects",
          active: false,
          path: "/project",
        },
        {
          icon: "mdi-phone",
          text: "Contact",
          title: "Our Contact info",
          active: false,
          path: "/contact",
        },
        {
          icon: "mdi-login",
          text: "Login",
          title: "Login",
          active: false,
          path: "/login",
        },
      ],
    };
  },
};
</script>
<style scoped>
.container {
  background-color: #1f2235 !important;
}
.v-toolbar {
  background-color: #1c1e2e !important;
}
.v-app-bar {
  background-color: #1f2235 !important;
}
.v-toolbar-items {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: white;
}
.v-toolbar-items .v-btn:hover {
  color: #fe4b57 !important;
  font-size: 14px;
}
.v-list-item-title {
  color: grey !important;
  padding-left: -1em !important;
}
.v-list-item {
  color: white !important;
}
.v-list-item:hover {
  color: #fe4b57 !important;
}
.mobil-nav-icon .v-icon:hover {
  color: #fe4b57 !important;
}
.v-list {
  background-color: #202236 !important;
  margin-top: -3em;
}
.v-card {
  background-color: #1f2235 !important;
}
.bg-color {
  color: grey !important;
}
@media only screen and (max-width: 600px) {
  .v-app-bar {
    background-color: #1f2235 !important;
    margin-top: -4rem;
  }
}
</style>
