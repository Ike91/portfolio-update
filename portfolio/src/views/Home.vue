<template>
  <div class="container">
    <Profile />
    <v-container className="skill-container mt-15 ">
      <div className="skill-header text-center">
        <h1 className="text-white">Core skills</h1>
      </div>

      <div className="skills text-center text-white">
        <p>
          I am skilled in a variety of technologies, including programming
          languages such as Javascript, Java, and C++, as well as web
          development frameworks such as vue and laravel, and database
          management systems such as MySQL. I have experience working with these
          skills in a variety of personal projects, and have a strong
          understanding of how to apply them to solve complex problems and
          develop innovative solutions.
        </p>
      </div>
      <div>
        <v-row>
          <v-col
            cols="12"
            md="3"
            lg="3"
            xl="3"
            v-for="skill in skills"
            :key="skill.name"
          >
            <v-card elevation="9" className="bg-gray-900 rounded-md">
              <div class="skills-box">
                <div class="skills-title">
                  <div class="skills-img mt-3 mb-2">
                    <img :src="skill.link" alt="" class="skills-icons" />
                  </div>
                  <h3>{{ skill.name }}</h3>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <v-container>
      <div>
        <div className="text-center">
          <h1>Noty worthy Projects</h1>
          <p>
            I have gained a strong foundation in various technologies through
            building personal projects and tutoring computer science students at
            different universities. Some of the projects I have worked on
            include this web application using vue.js framework and firebase.
            Through these experiences, I have gained a deep understanding of a
            wide range of technologies and have developed the skills and
            knowledge necessary to apply them effectively.
          </p>
        </div>

        <v-row>
          <v-col cols="12" md="6" lg="4" xl="4">
            <v-card
              className="p-2 mt-5 bg-gray-900 rounded-md hover:bg-gray-900"
            >
              <v-card-action>
                <v-row justify="space-between">
                  <v-col cols="auto">
                    <v-btn className="ml-2 mt-2">
                      <v-icon left size="70">mdi-folder</v-icon></v-btn
                    >
                  </v-col>
                </v-row>
              </v-card-action>
              <v-card-text>
                <P
                  >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis esse tempora expedita necessitatibus corrupti deserunt
                  voluptatem impedit dolores modi minus debitis ullam in,
                  delectus nemo porro suscipit. Ratione aspernatur sint quod
                  consectetur accusamus ad hic ex quos. Sapiente optio quod
                  dicta porro animi similique, dolorum nulla reprehenderit totam
                  mollitia nostrum.
                </P>
                <v-container className="mt-2">
                  <v-row className="flex justify-center">
                    <v-col cols="2">
                      <v-icon>mdi-vuejs</v-icon>
                    </v-col>
                    <v-col cols="2">
                      <v-icon>mdi-vuetify</v-icon>
                    </v-col>
                    <v-col cols="2">
                      <v-icon>mdi-tailwind</v-icon>
                    </v-col>
                    <v-col cols="2">
                      <v-icon>mdi-firebase</v-icon>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4" xl="4">
            <v-card
              className="p-2 mt-5 bg-gray-900 rounded-md hover:bg-gray-900"
            >
              <v-card-action>
                <v-row justify="space-between">
                  <v-col cols="auto">
                    <v-btn className="ml-2 mt-2">
                      <v-icon left size="70">mdi-folder</v-icon></v-btn
                    >
                  </v-col>
                </v-row>
              </v-card-action>
              <v-card-text>
                <P
                  >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis esse tempora expedita necessitatibus corrupti deserunt
                  voluptatem impedit dolores modi minus debitis ullam in,
                  delectus nemo porro suscipit. Ratione aspernatur sint quod
                  consectetur accusamus ad hic ex quos. Sapiente optio quod
                  dicta porro animi similique, dolorum nulla reprehenderit totam
                  mollitia nostrum.
                </P>
                <v-container className="mt-2">
                  <v-row className="flex justify-center">
                    <v-col cols="2">
                      <v-icon>mdi-vuejs</v-icon>
                    </v-col>
                    <v-col cols="2">
                      <v-icon>mdi-vuetify</v-icon>
                    </v-col>
                    <v-col cols="2">
                      <v-icon>mdi-tailwind</v-icon>
                    </v-col>
                    <v-col cols="2">
                      <v-icon>mdi-firebase</v-icon>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4" xl="4">
            <v-card
              className="p-2 mt-5 bg-gray-900 rounded-md hover:bg-gray-900"
            >
              <v-card-action>
                <v-row justify="space-between">
                  <v-col cols="auto">
                    <v-btn className="ml-2 mt-2">
                      <v-icon left size="70">mdi-folder</v-icon></v-btn
                    >
                  </v-col>
                </v-row>
              </v-card-action>
              <v-card-text>
                <P
                  >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis esse tempora expedita necessitatibus corrupti deserunt
                  voluptatem impedit dolores modi minus debitis ullam in,
                  delectus nemo porro suscipit. Ratione aspernatur sint quod
                  consectetur accusamus ad hic ex quos. Sapiente optio quod
                  dicta porro animi similique, dolorum nulla reprehenderit totam
                  mollitia nostrum.
                </P>
                <v-container className="mt-2">
                  <v-row className="flex justify-center">
                    <v-col cols="2">
                      <v-icon>mdi-vuejs</v-icon>
                    </v-col>
                    <v-col cols="2">
                      <v-icon>mdi-vuetify</v-icon>
                    </v-col>
                    <v-col cols="2">
                      <v-icon>mdi-tailwind</v-icon>
                    </v-col>
                    <v-col cols="2">
                      <v-icon>mdi-firebase</v-icon>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <div className="mt-3">
          <v-btn class="text-caption" to="/project">Go to projects</v-btn>
        </div>
      </div>
    </v-container>
    <v-container>
      <div class="skill-header">
        <span
          ><h3 style="color: #ff4a57 !important">
            <v-icon style="color: #ff4a57 !important">mdi-lightbulb</v-icon>
            <span class="skills-adjust"></span>Interest
          </h3></span
        >
      </div>

      <hr style="color: #888ba5 !important" />
      <div>
        <p>
          As a software developer, I am drawn to the potential of using data to
          solve real-world problems and make a positive impact in fields such as
          healthcare, education, and finance. Additionally, I find the
          intellectual challenge and curiosity of understanding and working with
          complex data and algorithms to be very rewarding. I believe that the
          skills and knowledge I will gain through studying machine learning and
          data science will not only be personally fulfilling, but also highly
          valuable in the job market. Overall, I am passionate about pursuing a
          career in these fields and believe that they offer limitless potential
          for growth and advancement.
        </p>
      </div>
    </v-container>
    <div class="pb-15"></div>
  </div>
</template>
<script>
import Profile from "../components/Profile.vue";

export default {
  components: {
    Profile,
  },

  data() {
    return {
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
      skills: [
        { name: "HTML 5", link: "./skills/html-5.png" },
        { name: "CSS 3", link: "./skills/CSS.3.svg" },
        { name: "JAVASCRIPT", link: "./skills/javascript.png" },
        { name: "C++", link: "./skills/c++.png" },
        { name: "JAVA", link: "./skills/java.png" },
        { name: "VUE.JS", link: "./skills/vue.png" },
        { name: "REACT.JS", link: "./skills/logo-react-icon.png" },
        { name: "SPRING BOOT", link: "./skills/spring.png" },
        { name: "FIREBASE", link: "./skills/firebase.png" },
        { name: "GIT & GITHUB", link: "./skills/git.png" },
        { name: "REST + SOAP API", link: "./skills/rest.png" },
      ],
    };
  },
};
</script>
<style scoped>
.name-header h1,
h5 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}
.icon-color .v-btn {
  background-color: transparent !important;
  color: white !important;
  border: 1px solid #fe4b57;
}
.icon-color .v-btn:hover {
  background-color: #ff4a57 !important;
  border: 1px solid #fe4b57;
  color: white !important;
}
.icon-color a {
  text-decoration: none !important;
}

.skill-header {
  color: #6c6c69 !important;
  margin-bottom: 1rem !important;
}

.skill-container {
  font-family: "Times New Roman", Times, serif;
}

.v-container {
  color: white;
  font-family: "Times New Roman", Times, serif;
}

.v-btn {
  background: #ff4a57 !important;
  color: white !important;
}

.card-text {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  font-family: "Times New Roman", Times, serif;
}

.skills-header {
  text-align: center;
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  padding: 1rem;
  position: relative;
}
.education {
  margin-bottom: 5em;
  margin-top: 3em;
  background: #35394e;
  padding: 2rem !important;
  border-radius: 10px;
}
.skills-header:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background-color: #fe4b57;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  border-radius: 2px;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-gap: 1rem;
  padding: 1rem 80px;
  font-size: 1.2rem;
}
.skills-box {
  color: #000;
  cursor: pointer;
}

.skills-box:hover .skills-img {
  transform: translateX(-20px);
}

.skills-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  position: relative;
}

.skills-title:after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 50%;
  width: 20px;
  height: 4px;
  border-radius: 2px 0 0 2px;
  transition: 0.5s;
}

.skills-title:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100px;
  height: 4px;
  border-radius: 0 2px 2px 0;
}

.skills-icons {
  width: 50px;
  z-index: 2;
}

.skills-img {
  width: 90px;
  height: 90px;
  position: relative;
  border-radius: 45px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  border: 1px solid #fe4b57;
  box-shadow: 11px 9px 17px 5px #202236;
  -moz-box-shadow: 11px 9px 17px 5px #202236;
}

.skills-img:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 90px;
  background: rgba(165, 165, 165, 0.5);
  border-radius: 45px 0 0 45px;
}
.skills-title h3 {
  color: white;
  margin-top: 0.5rem;
}
@media screen and (max-width: 990px) {
  .skills-container {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem 50px;
  }
}

@media screen and (max-width: 650px) {
  .skills-container {
    grid-template-columns: 2fr;
    padding: -10em;
  }
}
@media only screen and (max-width: 600px) {
  .container {
    border-radius: 10px !important;
    margin-top: -4em;
  }
}

.hidden-sm-and-down {
  display: none;
}
@media (min-width: 960px) {
  .hidden-sm-and-down {
    display: block;
  }
}

.hidden-md-and-up {
  display: block;
}

@media (min-width: 960px) {
  .hidden-md-and-up {
    display: none;
  }
}
@media only screen and (max-width: 1200px) {
  .work-experience {
    border: none !important;
    box-shadow: none !important;
    margin-top: -1.5rem;
  }
  .about-content {
    margin-left: 0 !important;
  }
}
</style>
