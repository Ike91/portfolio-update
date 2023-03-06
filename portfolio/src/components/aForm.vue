<template>
    <v-layout class="mb-5 row">
        <v-dialog
          v-model="dialog"
          class="bg-white"
          width="600"
          activator="parent"
        >
          <v-card>
            <v-card-text>
              <v-form ref="form">
                <v-text-field
                  v-model="name"
                  :counter="10"
                  label="Name"
                  required
                  prepend-icon="mdi-account"
                ></v-text-field>
                <v-text-field
                  v-model="role"
                  :counter="10"
                  label="Role"
                  required
                  prepend-icon="mdi-account"
                ></v-text-field>

                <v-text-field
                  v-model="phone"
                  :counter="10"
                  label="Phone"
                  required
                  prepend-icon="mdi-phone"
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  label="E-mail"
                  required
                  prepend-icon="mdi-email"
                ></v-text-field>

                <v-textarea
                  v-model="about"
                  label="Summary"
                  required
                  prepend-icon="mdi-pencil"
                ></v-textarea>

                <v-btn
                  color="grey"
                  class="mx-10"
                  :loading="isSaving"
                  @click="saveProfile"
                >
                  <span>Save data</span>
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-layout>
</template>
<script>
export default {

      dialog: false,
      isSaving: false,

      name: "",
      role: "",
      phone: "",
      email: "",
      about: "",

      data() {
        return{

        }
      },

     methods: {

      //reset form 
      resetForm() {
        this.$refs.form.reset();
      },

       
       
    //save profile information
    async saveProfile() {
      this.isSaving = true;

      let data = {
        id: auth.currentUser.uid,
        name: this.name,
        role: this.role,
        phone: this.phone,
        email: this.email,
        about: this.about,
      };

      //save the data on firestore
      const doc = await profile.add(data);

      this.isSaving = false;
      //reset the form
      this.resetForm();
      //close dialog box
      this.dialog = false;
    },

   
    //get profile infomation
    async getProfile() {
    firestore
    .collection("profile")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.projects.push(doc.data());
      });
    });
    },

    //update profile infomation

 },

}
</script>
<style scoped>
.v-card
{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background: rgb(219, 210, 210);
}

</style>