<template>
  <div class="container">
    <div class="skills-section">
      <div class="skills-header">
        <h1>Skills</h1>
      </div>
      <br />
      <div class="summary text-center mb-5">
        <p>
          I aquired these skills through personal projects and practice, and
          from online platforms such as code academy, leetCode just to name a
          few, it was very funny learning them. I have taken it upon myself to
          stay abreast of emerging technologies in computer science, and use
          this knowledge to continue to improve upon my own skills and
          abilities. I have also been able to apply my skills to help CS majors
          students.
        </p>
      </div>

      <div class="skills-section">
        <div class="skills-container">
          <v-card elevation="9" v-for="skill in skills" :key="skill.name">
            <div class="skills-box">
              <div class="skills-title">
                <div class="skills-img">
                  <img :src="skill.link" alt="" class="skills-icons" />
                </div>
                <h3>{{ skill.name }}</h3>
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </div>

    <div class="education">
      <div class="text-center">
        <v-rating
          v-model="rating"
          icon-label="custom icon label text {0} of {1}"
          color="#ff4a57"
        ></v-rating>
      </div>
      <hr style="color: grey" />
      <div class="row" style="margin-top: 1em">
        <div class="col-sm-12 col-md-4">
          <div class="bar front expert" data-skill="HTML5"></div>
          <div class="bar front advanced" data-skill="CSS3"></div>
          <div class="bar back intermediate" data-skill="JAVASCRIPT"></div>
          <div class="bar front expert" data-skill="GIT & GITHUB"></div>
        </div>

        <div class="col-sm-12 col-md-4">
          <div class="bar front advanced" data-skill="C++"></div>
          <div class="bar back intermediate" data-skill="JAVA"></div>
          <div class="bar front intermediate" data-skill="PHP"></div>
          <div
            class="bar back intermediate"
            data-skill="REST + SOAP API`S"
          ></div>
        </div>
        <div class="col-sm-12 col-md-4">
          <div class="bar front intermediate" data-skill="VUE.JS"></div>
          <div class="bar back basic" data-skill="SPRING BOOT"></div>
          <div class="bar back intermediate" data-skill="LARAVEL"></div>
          <div class="bar back basic" data-skill="FIREBASE"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rating: 3,
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
.v-container {
  flex-flow: column wrap;
  font-family: "Times New Roman", Times, serif;
}
.summary {
  padding-bottom: 2em;
  color: white;
  font-family: "Times New Roman", Times, serif;
  font-size: 18px;
}
.skills-container {
  font-size: 14px;
  font-style: inherit;
}
.skills-container {
  background: #35394e;
  padding: 2rem !important;
  border-radius: 10px;
}

.skills-container .v-card {
  background: #35394e;
  border-radius: 8px;
  color: rgb(77, 76, 76);
  width: 100% !important;
}

.skills-section {
  padding-top: 20px;
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
/*****************************************************************
my skill set
******************************************************************/
.skills-container {
  padding: 20px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 14px;
  font-style: inherit;
}
.skills-container h1 {
  text-align: center;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.skills-container p {
  text-align: center;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px;
}
.skills h2 {
  text-align: center;
}

.bar {
  background-color: transparent;
  padding: 2px;
  border-radius: 15px;
  margin-bottom: 5px;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}

.bar::before {
  content: attr(data-skill);
  background-color: #35394e;
  display: inline-block;
  padding: 5px 0 5px 10px;
  border-radius: inherit;
  animation: load 2s 0s;
  -webkit-animation: load 2s 0s;
  -moz-animation: load 2s 0s;
  -o-animation: load 2s 0s;
}

.bar.front::before {
  background-color: #fe4b57;
}
.bar.back::before {
  background-color: #fe4b57;
}

.bar.learning::before {
  width: calc(20% - 10px);
}
.bar.basic::before {
  width: calc(40% - 10px);
}
.bar.intermediate::before {
  width: calc(60% - 10px);
}
.bar.advanced::before {
  width: calc(80% - 10px);
}
.bar.expert::before {
  width: calc(100% - 10px);
}
</style>
