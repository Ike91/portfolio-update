<template>
  <v-container>
    <NavDash/>
    <Profile/>
  </v-container>
</template>
<script>
import NavDash from "../../components/NavDash.vue";
import Profile from "../../components/Profile.vue";
export default{
  components:
  {
    NavDash,
    Profile,
  }
}
</script>
