<template>
  
  <v-footer
    dark
    padless
    v-if="$route.meta.hideFooter"
  >
  <hr>
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text class="text-center">
        <a  v-for="icon in icons" :key="icon.icon" :href="icon.link" target="_blank">
          <v-btn
          color="grey"
          class="mx-2 btn-radius"
          :icon="icon.icon"
          size="small"
        ></v-btn>
          </a>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        If you have a project that you'd like to work on or if you're interested in collaborating, 
        please don't hesitate to reach out to me via my social media accounts. 
        I am always open to new opportunities and partnerships, and I would be happy to discuss your ideas and see how we can work together. I will do my best to get back to you as soon as possible. 
        Thank you for considering me for your project.
      </v-card-text>

      <v-divider class="bg-grey"></v-divider>

      <v-card-text class="white--text text-caption">
        © {{ new Date().getFullYear() }} - All rights Reserved, Developed by Isaac Mhlanga
      </v-card-text>
    </v-card>
  </v-footer>
</template>
  <script>
  export default {
    data: () => ({
      icons: [
        {
          icon: "mdi-facebook",
          link: "https://www.facebook.com/profile.php?id=100072606405818",
        },
        {
          icon: "mdi-linkedin",
          link: "https://www.linkedin.com/in/isaac-mhlanga-31ba62217",
        },
        {
          icon: "mdi-instagram",
          link: "https://www.instagram.com/_isac_i",
        },
        {
          icon: "mdi-twitter",
          link: "https://twitter.com/_Isaac_ike1",
        },
        {
          icon: "mdi-github",
          link: "https://github.com/Ike91",
        }
      ],
    }),
  };
  </script>
  <style scoped>
  .v-footer {
    background-color: #1c1e2e !important;
    color: white;
  }
  .v-card 
  {
    background-color: #1c1e2e  !important;
    color: white;
  }
  .v-btn {
    color:  white !important;
    background-color: transparent !important;
    border: 1px solid #fe4b57;
   
  }
  a
  {
    text-decoration: none !important;
  }
  </style>
  