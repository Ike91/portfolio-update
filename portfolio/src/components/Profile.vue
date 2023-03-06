<template>
  <div class="container">
    <div
      className="flex justify-center mt-5"
      v-for="isaac in profile"
      :key="isaac.name"
    >
      <v-card className="">
        <div className="">
          <h1 className="text-5xl text-white text-center">
            {{ isaac.name }}
          </h1>
          <h2 className="text-2xl text-white text-center">
            {{ isaac.role }}
          </h2>
        </div>
        <div class="flex flex-col justify-center items-center sm:flex-row">
          <span style="color: #fe4b57" class="mr-2 mb-2 sm:mb-0">
            <v-icon class="mx-0 mr-2">mdi-phone</v-icon>
            +27 {{ isaac.phone }}
          </span>
          <span style="color: #fe4b57" class="mb-2">
            <v-icon class="mx-0">mdi-email</v-icon>
            {{ isaac.email }}
          </span>
        </div>

        <div className="">
          <p className="text-center text-white">
            {{ isaac.about }}
          </p>
        </div>
        <div class="text-center icon-color pb-3">
          <a
            v-for="icon in icons"
            :key="icon.icon"
            :href="icon.link"
            target="_blank"
          >
            <v-btn
              color="grey"
              class="mx-2 btn-radius"
              :icon="icon.icon"
              size="small"
            ></v-btn>
          </a>
          <br />
          <v-btn
            class="mt-3 ml-2"
            style="border-radius: 20px"
            @click="dialog = !dialog"
            v-if="$route.meta.auth"
          >
            Update
          </v-btn>
          <v-btn
            class="mt-3 ml-2"
            style="border-radius: 20px"
            @click="openResume()"
            v-else
          >
            resume
          </v-btn>
        </div>
      </v-card>
    </div>

    <!-- <v-row class="work-experience" elvation="9" v-for="isaac in profile" :key="isaac.name"> 
          <v-col cols="12" md="6" lg="4" xl="3">
                <img src="/profile-pic (1).png" alt="Card image" />
          </v-col>
          <v-col class="about-content ml-15" cols="12" md="12" lg="8" xl="8">
            <div class="text-center name-header pt-3">
            <h1 class="text-4xl"> {{ isaac.name }} </h1>
              <h5>{{isaac.role}}</h5>
          <div class="pt-1">
            <span style="color: #fe4b57">
              <v-icon class="mx-0">mdi-phone</v-icon>
              +27 {{ isaac.phone }}
            </span>
            <span style="color: #fe4b57">
              <v-icon class="mx-1">mdi-email</v-icon>
           {{  isaac.email }}
            </span>
           
          </div>
          </div>
           <p class="pt-2 text-center">
            {{  isaac.about }}
           </p>
              <div class="text-center icon-color pb-3">
                <a  v-for="icon in icons" :key="icon.icon" :href="icon.link" target="_blank">
                <v-btn
                color="grey"
                class="mx-2 btn-radius"
                :icon="icon.icon"
                size="small"
              ></v-btn>
                </a>
                <br>
                <v-btn class="mt-3 ml-2" style="border-radius: 20px" @click="dialog = !dialog"   v-if="$route.meta.auth"> Update </v-btn>
                <v-btn class="mt-3 ml-2" style="border-radius: 20px" @click="openResume()"   v-else> resume </v-btn>
              </div>
          </v-col>
        </v-row> -->

    <v-dialog v-model="dialog" width="600">
      <v-card>
        <v-card-title class="text-center text-white"
          >Update profile</v-card-title
        >
        <v-card-text>
          <v-form class="text-white" ref="profileForm">
            <v-text-field
              v-model="name"
              label="Full name"
              prepend-icon="mdi-account"
            >
            </v-text-field>

            <v-text-field v-model="role" label="Role" prepend-icon="mdi-origin">
            </v-text-field>

            <v-text-field
              v-model="phone"
              label="Phone Number"
              type="number"
              prepend-icon="mdi-phone"
            >
            </v-text-field>

            <v-text-field
              v-model="email"
              label="Email"
              prepend-icon="mdi-email"
            >
            </v-text-field>

            <v-textarea v-model="about" label="About" prepend-icon="mdi-pencil">
            </v-textarea>

            <label class="btn">
              <input type="file" id="file-input" />
            </label>

            <v-card-actions>
              <v-btn
                class="ml-10 text-caption"
                @click="saveProfile()"
                :loading="isSaving"
              >
                Save profile
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import {
  profile,
  firestore,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "../Firebase/firebase";
export default {
  data() {
    return {
      dialog: false,
      isSaving: false,
      resume: false,

      name: "",
      role: "",
      phone: "",
      email: "",
      about: "",
      profile: [],
      resumeFile: "",
      resumeUrl: "",

      icons: [
        {
          icon: "mdi-facebook",
          link: "https://www.facebook.com/profile.php?id=100072606405818",
        },
        {
          icon: "mdi-twitter",
          link: "https://twitter.com/_Isaac_ike1",
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
          icon: "mdi-github",
          link: "https://github.com/Ike91",
        },
      ],
    };
  },

  methods: {
    //Get resume link
    openResume() {
      window.open(this.resumeUrl, "_blank");
    },

    //reset the form
    resetForm() {
      this.$refs.profileForm.reset();
    },

    //save profile
    async saveProfile() {
      this.isSaving = true;

      //upload file
      const fileInput = document.getElementById("file-input");
      let file = fileInput.files[0];
      const mountainsRef = ref(storage, "resume/" + file.name);

      let data = {
        name: this.name,
        role: this.role,
        phone: this.phone,
        email: this.email,
        about: this.about,
        resume: file.name,
      };

      //save data on firestore
      const doc = await profile.add(data).then(function (docRef) {
        //Update the document id
        docRef.update({
          id: docRef.id,
        });
      });

      uploadBytes(mountainsRef, file).then((snapshot) => {
        this.isSaving = false;
        //reset the form
        this.resetForm();
        //close the dialog
        this.dialog = false;
      });
    },

    //get data.
    async getData() {
      firestore
        .collection("profile")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.profile.push(doc.data());
            this.resumeFile = doc.data().resume;
            console.log(this.resumeFile);
            getDownloadURL(ref(storage, `resume/` + this.resumeFile))
              .then((url) => {
                this.resumeUrl = url;
              })
              .catch((error) => {});
          });
        });
    },
  },
  mounted() {
    this.getData();
    if (this.profile) {
      (this.name = this.profile.name),
        (this.role = this.profile.role),
        (this.phone = this.profile.phone),
        (this.email = this.profile.email),
        (this.about = this.profile.about);
    }
  },
};
</script>
<style scoped>
.container {
  margin-top: -4rem !important;
  font-family: "Times New Roman", Times, serif;
}

.work-experience {
  margin-top: 7rem;
  background-color: #2d3047;
  color: white;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-right-radius: 50%;
  border: 1px solid #2d3047;
  box-shadow: 11px 9px 17px 5px #202236;
  -webkit-box-shadow: 11px 9px 17px 5px #888ba5;
  -moz-box-shadow: 11px 9px 17px 5px #202236;
  margin-bottom: 8rem;
}
img {
  width: 100%;
  height: auto;
  opacity: 0.9;
  margin-top: 4.7rem !important;
  margin-left: 2.5rem;
  border: 1px solid #fe4b57;
  border-radius: 100%;
}
.v-btn {
  background: transparent !important;
  border: 1px solid #fe4b57;
  color: white !important;
}
.v-btn:hover {
  background: transparent !important;
}
.icon-color a {
  text-decoration: none !important;
}
@media only screen and (max-width: 1200px) {
  .work-experience {
    border: none !important;
    box-shadow: none !important;
    border-top-left-radius: none !important;
    border-bottom-left-radius: none !important;
    border-bottom-right-radius: none !important;
    border-top-right-radius: none !important;
    margin-top: -6rem;
  }
  .about-content {
    margin-left: 0 !important;
  }
  img {
    margin-left: 0rem;
  }
}
input[type="file"] {
  border-radius: 5px !important;
  margin-left: 1.6rem;
  padding: 5px;
  margin-bottom: 1rem;
}
.v-card {
  background-color: #2d3047;
}
</style>
