<template>
   <v-layout>
    <v-row>
      <v-col>
        <v-btn class="mb-2 bg-primary"  @click="dialog= !dialog" v-if="!project">
          <v-icon class="mx-1">mdi-plus-box</v-icon>
          <span class="text-caption text-lowercase">Add Project</span>
        </v-btn>
        <v-btn class="mb-2 mr-2 bg-primary" v-else @click="dialog = !dialog">
          <v-icon class="mx-1">mdi-pencil</v-icon>
          <span class="text-caption text-lowercase">Edit Project</span>
        </v-btn> 
      </v-col>
    </v-row>
      <v-dialog v-model="dialog" width="600">
      <v-row>
        <v-col>
          <v-card>
            <v-card-text>
              <v-card-title class="text-center">Edit Project</v-card-title>
              <v-form ref="pForm">
                <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Name"
                prepend-icon="mdi-account"
                >
    
                </v-text-field>
    
                <v-textarea
                v-model="discription"
                :rules="discriptionRules"
                label="Discription"
                prepend-icon="mdi-pencil"
                required
                >
    
                </v-textarea>
    
                <v-text-field
                v-model="link"
                :rules="linkRules"
                label="Link"
                prepend-icon="mdi-github"
                required
                >
    
                </v-text-field>

                <v-text-field
                v-model="live"
                :rules="linkRules"
                label="Link"
                prepend-icon="mdi-web"
                required
                >
    
                </v-text-field>

                <label class="btn btn-default btn-file">
                  <span><V-icon class="pr-10" color="white">mdi-paperclip</V-icon></span> <input  type="file" id="file-input">
                </label>
            
                <v-card-actions>
                  <v-btn 
                     class="text-caption ml-8 bg-primary" 
                     prepend-icon="mdi-store"
                     :loading="isSaving"
                     v-if="!project"
                     @click="saveProject"
                     >
                     Save
                  </v-btn>
                  <v-btn 
                     class="text-caption pl-4 ml-8 bg-primary" 
                     prepend-icon="mdi-update"
                     :loading="isUpdating"
                     @click="updateProject(project.id)"
                     v-else
                     >
                     Update
                 </v-btn>
                </v-card-actions>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-dialog>
   </v-layout>
</template>
<script>
import { projects, storage, ref, uploadBytes} from '../Firebase/firebase'
import { deleteObject } from "firebase/storage";
export default {
   name: 'pForm',
   props: ['project', 'index'],

   data(){
    return {
      isSaving: false,
      isUpdating: false,
      dialog: false,
      name: '',
      discription: '',
      link: '', 
      live: '',
      image: '',
      projects: [],

      nameRules: [
          (v) => !!v || "Email is required",
        ],
  
      discriptionRules: [
          (v) => !!v || "This field is required",
        ],

      linkRules: [
          (v) => !!v || "Link is required required",
        ],
        
    }
   },

   methods: {

   //reset the form 
   resetForm() {
      this.$refs.pForm.reset();
    },

   //save project
   async saveProject() {
      this.isSaving = true;

      //upload file
      const fileInput = document.getElementById('file-input');
      let file = fileInput.files[0];
      const mountainsRef = ref(storage, 'projects/' + file.name);
   
      let data = {
        name: this.name,
        discription: this.discription,
        link: this.link,
        live: this.live,
        image: file.name,
       
      };

      //save data on firestore
      const doc = await projects.add(data).then(function(docRef){
        //Update the document id
        docRef.update({
          id: docRef.id
        })
      });

      uploadBytes(mountainsRef, file).then((snapshot) => {
        this.isSaving = false;
      //reset the form
      this.resetForm();
      //close the dialog
      this.dialog = false;
      });

     
    },


    //update project
    async updateProject(id) {
      this.isUpdating = true;

      //Get the image and delete it, then insert the new image, only if the names are different
      const imageRef = ref(storage, `projects/` +this.image);
      const fileInput = document.getElementById('file-input');
      let file = fileInput.files[0];
      const mountainsRef = ref(storage, 'projects/' + file.name);

      if(this.image !== file.name) {
      deleteObject(imageRef).then(() => {
    
      }).catch((error) => {
      // Uh-oh, an error occurred!
      });

        let data = {
        name: this.name,
        discription: this.discription,
        link: this.link,
        image: file.name
      }

       //save data on firestore
       const docRef = projects.doc(id);
       await docRef.update(data);

      uploadBytes(mountainsRef, file).then((snapshot) => {
        this.isUpdating = false;

      //reset the form
      this.resetForm();
      //close the dialog
      this.dialog = false;
      });

    }else{
      
        let data = {
        name: this.name,
        discription: this.discription,
        link: this.link,
      };

      //save data on firestore
       const docRef = projects.doc(id);
       await docRef.update(data);
      
      this.isUpdating = false;

      //reset the form
      this.resetForm();
      //close the dialog
      this.dialog = false;
      }
     
    },

    //get data.
    async getData() {
      firestore
        .collection("projects")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.projects.push(doc.data());
          });
        });
    },
  },

  mounted()
  {
    if(this.project)
    {
       this.name = this.project.name,
       this.discription = this.project.discription,
       this.link = this.project.link,
       this.image = this.project.image
    }
  }
}
</script>
<style scoped>
.v-card
{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background: #35394e !important;
  color: white !important;
}


.container {
  display: inline-block;
  width: 100%;
}
input[type="file"]
{
  border-radius: 5px !important;
  margin-left: -1rem;
  border: 1px solid white;
  padding: 5px;
  margin-bottom: 1rem;
 
}

.v-btn 
{
  width: 110px;
}
</style>