<template>
  <v-container>
    <NavDash />
  
    <div class="container">
      <pForm />
        <v-card
        v-for="project in projects"
        :key="project.name"
        elavation="5"
        >
          <v-card-title>{{ project.name}}</v-card-title>
          <v-card-text>
            <v-divider></v-divider>
            <p>
              {{ project.discription }} 
            </p>
          </v-card-text>
          <v-card-actions>
            <pForm :project="project" />
            <v-btn class="mb-2 bg-danger text-white" v-if="project" @click="deleteConfirm(project.id, project.name)">
              <v-icon class="mx-1">mdi-delete</v-icon>
              <span class="text-caption text-lowercase">Delete Project</span>
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-dialog  persistent v-model="deleteDialog" width="600">
          <v-card>
            <v-card-title>Delete Project</v-card-title>
            <v-divider></v-divider>
           
           
            <v-card-text class="text-center">Are you sure you want to delete <b class="text-grey">{{ pname }}</b></v-card-text>
            <br>
            <v-card-actions class="text-white">
              <v-btn 
              class="bg-danger text-caption"  
              prepend-icon="mdi-delete" 
              :loading ='isDeleting'
              @click="deleteProject">
              Delete
            </v-btn>
              <v-btn class="bg-secondary text-white text-caption" prepend-icon="mdi-close" @click="deleteDialog= !deleteDialog">Cancel</v-btn>
            </v-card-actions>

          </v-card>
        </v-dialog>

      </div>
  </v-container>
</template>
<script>
import NavDash from "../../components/NavDash.vue";
import { firestore, projects, ref, storage } from "../../Firebase/firebase";
import { deleteObject } from "firebase/storage";
import pForm from "../../components/pForm.vue";
export default {
  components: {
    NavDash,
    pForm,
  },

 
  data() {
    return {
    
      projects: [],
      isDeleting: false,
      deleteDialog: false,
      pid: '',
      pname: '', 
      image: '',  
    };
  },
  mounted() {
    this.getProject();
  },
  methods: {
    async getProject() {
      firestore
        .collection("projects")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.projects.push(doc.data());
          });
        });
    },

       //delete project 
    async deleteConfirm(id, name)
    {
      this.deleteDialog  = true,
      this.pid = id,
      this.pname = name
    },

    async deleteProject()
    {
      try {

        this.isDeleting = true,
      
        await projects.doc(this.pid).delete()

        //Now you need to delete an image from the storage
        const imageRef = ref(storage, `projects/` );

      

        deleteObject(imageRef).then(() => {
    
        }).catch((error) => {
        // Uh-oh, an error occurred!
        });

        //remove the project from the array
        this.projects.splice(this.projects.findIndex(x => x.id == this.pid), 1)

        this.pid = null,
        this.pname = null,
        this.isDeleting = false,

        this.deleteDialog = false;
        
      } catch (error) {
        console.log(error)
      }
    }
  },
};
</script>
<style scoped>
.v-expansion-panel, .v-card {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: white;
  background: #35394e;
}
.v-btn {
   
   background: rgb(219, 210, 210);
}
.v-divider 
{
  background-color: grey !important;
}
.v-card-actions
{
  margin-top: -1em;
  margin-bottom: 2px;
}
.v-card-actions .v-btn
{
 background: yellowgreen;
}
.v-card 
{
  margin-bottom: 2em;
  background: #35394e;
}
@media only screen and (max-width: 600px) {
  .container {
    margin-top: -3rem !important;
  }
}

</style>