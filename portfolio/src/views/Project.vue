<template>
  <v-container>
    <div class="project-section">
      <div class="skills-header">
        <h1>Project</h1>
      </div>

      <div class="container text-center summary">
        <p>
          As a dedicated programmer, I am constantly striving to improve my
          skills and expand my knowledge of new programming languages. To
          demonstrate my abilities, I have developed a number of projects that
          are available for viewing on my GitHub profile. Some of these projects
          have also been deployed live on the web, giving me hands-on experience
          with coding conventions, debugging, and the importance of good
          software engineering practices.I am passionate about using my skills
          to create functional and innovative projects, and I welcome the
          opportunity to collaborate and learn from others'
        </p>
      </div>
      <br />
      <div class="container">
        <v-card className="flex justify-center">
          <v-tabs v-model="tab">
            <v-tab value="one">VUE.JS</v-tab>
            <v-tab value="two">REACT.JS</v-tab>
            <v-tab value="three">SPRING BOOT</v-tab>
          </v-tabs>
        </v-card>

        <v-card-text className="flex justify-center">
          <v-window v-model="tab">
            <v-window-item value="one">
              <v-row>
                <v-col cols="12" md="6" lg="4" xl="4">
                  <v-card
                    className="p-2 mt-5 bg-gray-900 rounded-md hover:bg-gray-900"
                  >
                    <v-card-text>
                      <P
                        >Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nobis esse tempora expedita necessitatibus
                        corrupti deserunt voluptatem impedit dolores modi minus
                        debitis ullam in, delectus nemo porro suscipit. Ratione
                        aspernatur sint quod consectetur accusamus ad hic ex
                        quos. Sapiente optio quod dicta porro animi similique,
                        dolorum nulla reprehenderit totam mollitia nostrum.
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
                  <v-card className="p-2 mt-5 bg-gray-900  rounded-md">
                    <v-card-text>
                      <P
                        >Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nobis esse tempora expedita necessitatibus
                        corrupti deserunt voluptatem impedit dolores modi minus
                        debitis ullam in, delectus nemo porro suscipit. Ratione
                        aspernatur sint quod consectetur accusamus ad hic ex
                        quos. Sapiente optio quod dicta porro animi similique,
                        dolorum nulla reprehenderit totam mollitia nostrum.
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
                  <v-card className="p-2 mt-5 bg-gray-900 rounded-md">
                    <v-card-text>
                      <P
                        >Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nobis esse tempora expedita necessitatibus
                        corrupti deserunt voluptatem impedit dolores modi minus
                        debitis ullam in, delectus nemo porro suscipit. Ratione
                        aspernatur sint quod consectetur accusamus ad hic ex
                        quos. Sapiente optio quod dicta porro animi similique,
                        dolorum nulla reprehenderit totam mollitia nostrum.
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
                  <v-card className="p-2 mt-5 bg-gray-900 rounded-md">
                    <v-card-text>
                      <P
                        >Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nobis esse tempora expedita necessitatibus
                        corrupti deserunt voluptatem impedit dolores modi minus
                        debitis ullam in, delectus nemo porro suscipit. Ratione
                        aspernatur sint quod consectetur accusamus ad hic ex
                        quos. Sapiente optio quod dicta porro animi similique,
                        dolorum nulla reprehenderit totam mollitia nostrum.
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
                  <v-card className="p-2 mt-5 bg-gray-900 rounded-md">
                    <V-card-text>
                      <P
                        >Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nobis esse tempora expedita necessitatibus
                        corrupti deserunt voluptatem impedit dolores modi minus
                        debitis ullam in, delectus nemo porro suscipit. Ratione
                        aspernatur sint quod consectetur accusamus ad hic ex
                        quos. Sapiente optio quod dicta porro animi similique,
                        dolorum nulla reprehenderit totam mollitia nostrum.</P
                      >
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
                    </V-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6" lg="4" xl="4">
                  <v-card className="p-2 mt-5  bg-gray-900 rounded-md">
                    <v-card-text>
                      <P
                        >Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nobis esse tempora expedita necessitatibus
                        corrupti deserunt voluptatem impedit dolores modi minus
                        debitis ullam in, delectus nemo porro suscipit. Ratione
                        aspernatur sint quod consectetur accusamus ad hic ex
                        quos. Sapiente optio quod dicta porro animi similique,
                        dolorum nulla reprehenderit totam mollitia nostrum.
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
            </v-window-item>

            <v-window-item value="two">
              <v-row>
                <v-col cols="12" md="6" lg="4" xl="4">
                  <v-card className="p-2 mt-5 bg-gray-900 rounded-md">
                    <v-card-text>
                      <P
                        >Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nobis esse tempora expedita necessitatibus
                        corrupti deserunt voluptatem impedit dolores modi minus
                        debitis ullam in, delectus nemo porro suscipit. Ratione
                        aspernatur sint quod consectetur accusamus ad hic ex
                        quos. Sapiente optio quod dicta porro animi similique,
                        dolorum nulla reprehenderit totam mollitia nostrum.
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
                  <v-card className="p-2 mt-5 bg-gray-900 rounded-md">
                    <v-card-text>
                      <P
                        >Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nobis esse tempora expedita necessitatibus
                        corrupti deserunt voluptatem impedit dolores modi minus
                        debitis ullam in, delectus nemo porro suscipit. Ratione
                        aspernatur sint quod consectetur accusamus ad hic ex
                        quos. Sapiente optio quod dicta porro animi similique,
                        dolorum nulla reprehenderit totam mollitia nostrum.
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
                  <v-card className="p-2 mt-5 bg-gray-900 rounded-md">
                    <v-card-text>
                      <P
                        >Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nobis esse tempora expedita necessitatibus
                        corrupti deserunt voluptatem impedit dolores modi minus
                        debitis ullam in, delectus nemo porro suscipit. Ratione
                        aspernatur sint quod consectetur accusamus ad hic ex
                        quos. Sapiente optio quod dicta porro animi similique,
                        dolorum nulla reprehenderit totam mollitia nostrum.
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
                  <v-card className="p-2 mt-5 bg-gray-900 rounded-md">
                    <v-card-text>
                      <P
                        >Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nobis esse tempora expedita necessitatibus
                        corrupti deserunt voluptatem impedit dolores modi minus
                        debitis ullam in, delectus nemo porro suscipit. Ratione
                        aspernatur sint quod consectetur accusamus ad hic ex
                        quos. Sapiente optio quod dicta porro animi similique,
                        dolorum nulla reprehenderit totam mollitia nostrum.
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
                  <v-card className="p-2 mt-5 bg-gray-900 rounded-md">
                    <V-card-text>
                      <P
                        >Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nobis esse tempora expedita necessitatibus
                        corrupti deserunt voluptatem impedit dolores modi minus
                        debitis ullam in, delectus nemo porro suscipit. Ratione
                        aspernatur sint quod consectetur accusamus ad hic ex
                        quos. Sapiente optio quod dicta porro animi similique,
                        dolorum nulla reprehenderit totam mollitia nostrum.</P
                      >
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
                    </V-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6" lg="4" xl="4">
                  <v-card className="p-2 mt-5  bg-gray-900 rounded-md">
                    <v-card-text>
                      <P
                        >Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nobis esse tempora expedita necessitatibus
                        corrupti deserunt voluptatem impedit dolores modi minus
                        debitis ullam in, delectus nemo porro suscipit. Ratione
                        aspernatur sint quod consectetur accusamus ad hic ex
                        quos. Sapiente optio quod dicta porro animi similique,
                        dolorum nulla reprehenderit totam mollitia nostrum.
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
            </v-window-item>

            <v-window-item value="three">
              <v-row>
                <v-col cols="12" md="6" lg="4" xl="4">
                  <v-card className="p-2 mt-5 bg-gray-900 rounded-md">
                    <v-card-text>
                      <P
                        >Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nobis esse tempora expedita necessitatibus
                        corrupti deserunt voluptatem impedit dolores modi minus
                        debitis ullam in, delectus nemo porro suscipit. Ratione
                        aspernatur sint quod consectetur accusamus ad hic ex
                        quos. Sapiente optio quod dicta porro animi similique,
                        dolorum nulla reprehenderit totam mollitia nostrum.
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
                  <v-card className="p-2 mt-5 bg-gray-900 rounded-md">
                    <v-card-text>
                      <P
                        >Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nobis esse tempora expedita necessitatibus
                        corrupti deserunt voluptatem impedit dolores modi minus
                        debitis ullam in, delectus nemo porro suscipit. Ratione
                        aspernatur sint quod consectetur accusamus ad hic ex
                        quos. Sapiente optio quod dicta porro animi similique,
                        dolorum nulla reprehenderit totam mollitia nostrum.
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
                  <v-card className="p-2 mt-5 bg-gray-900 rounded-md">
                    <v-card-text>
                      <P
                        >Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nobis esse tempora expedita necessitatibus
                        corrupti deserunt voluptatem impedit dolores modi minus
                        debitis ullam in, delectus nemo porro suscipit. Ratione
                        aspernatur sint quod consectetur accusamus ad hic ex
                        quos. Sapiente optio quod dicta porro animi similique,
                        dolorum nulla reprehenderit totam mollitia nostrum.
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
                  <v-card className="p-2 mt-5 bg-gray-900">
                    <V-card-text>
                      <P
                        >Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nobis esse tempora expedita necessitatibus
                        corrupti deserunt voluptatem impedit dolores modi minus
                        debitis ullam in, delectus nemo porro suscipit. Ratione
                        aspernatur sint quod consectetur accusamus ad hic ex
                        quos. Sapiente optio quod dicta porro animi similique,
                        dolorum nulla reprehenderit totam mollitia nostrum.</P
                      >
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
                    </V-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6" lg="4" xl="4">
                  <v-card className="p-2 mt-5  bg-gray-900">
                    <v-card-text>
                      <P
                        >Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nobis esse tempora expedita necessitatibus
                        corrupti deserunt voluptatem impedit dolores modi minus
                        debitis ullam in, delectus nemo porro suscipit. Ratione
                        aspernatur sint quod consectetur accusamus ad hic ex
                        quos. Sapiente optio quod dicta porro animi similique,
                        dolorum nulla reprehenderit totam mollitia nostrum.
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
            </v-window-item>
          </v-window>
        </v-card-text>

        <!-- <v-row justify-center>
        <v-col>
          <v-card elevation="9" v-for="project in projects" :key="project.name">
            <v-card-text>
             <v-img :src="project.imageUrl"></v-img>
            </v-card-text>
            <v-card-title>{{ project.name }}</v-card-title>
           
            <v-card-text>
              <v-divider></v-divider>
              <p>
                {{ project.discription }}
              </p>
            </v-card-text>
            <v-card-actions>

            <a :href="project.link" target="_blank">
              <v-btn  class="ml-2 pl-1 text-caption">
                <span><v-icon class="mr-1">mdi-github</v-icon>See Project</span>
              </v-btn>
            </a>
            <a :href="project.live" target="_blank">
              <v-btn  class="ml-2 pl-1 text-caption">
                <span><v-icon class="mr-1">mdi-web</v-icon>live </span>
              </v-btn>
            </a>
            </v-card-actions>
          </v-card>
          <section class="testimonial text-center">
            <div class="container">
    
                <div id="testimonial4" class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <div class="testimonial4_slide">
                                <img src="./Nomkhosi_maseko.jpg" class="img-circle img-responsive" />
                                <p>
                                    I was an open-distance learning student when I first took up a programming module. I had been vaguely familiar with c++, 
                                    but I had my above fair share of incompetence. I then decide to turn to one of the tutors for help, and I am happy to say
                                    that he has held my hand until the end of the semester. I finished my first programming module with a decent mark,
                                    and really could not have gone through my assignments without Isaac Mhlanga
                                </p>
                                <h4>Nomkhosi Maseko<br>UCT</h4>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </section>
        </v-col>
      </v-row> -->
      </div>
    </div>
  </v-container>
</template>
<script>
import { firestore, storage, getDownloadURL, ref } from "../Firebase/firebase";
import pageHeader from "../components/pageHeader";
import headerText from "../components/headerText";
export default {
  components: {
    pageHeader,
    headerText,
  },

  data() {
    return {
      header: "Projects",
      discription:
        "As a dedicated programmer, I am constantly striving to improve my skills and expand my knowledge of new programming languages. To demonstrate my abilities, I have developed a number of projects that are available for viewing on my GitHub profile. Some of these projects have also been deployed live on the web, giving me hands-on experience with coding conventions, debugging, and the importance of good software engineering practices.I am passionate about using my skills to create functional and innovative projects, and I welcome the opportunity to collaborate and learn from others",
      projects: [],
      newProjects: [],
      image: "",
      imageUrl: "",

      tab: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    //Get the projects from the database
    async getData() {
      firestore
        .collection("projects")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.projects.push(doc.data());
            this.image = doc.data().image;
            const index = this.projects.findIndex(
              (project) => project.image === this.image
            );
            getDownloadURL(ref(storage, `projects/` + this.image))
              .then((url) => {
                this.projects[index].imageUrl = url;
              })
              .catch((error) => {});
          });
        });
    },
  },
};
</script>
<style scoped>
.summary {
  margin-top: 2rem;
  color: white;
  font-family: "Times New Roman", Times, serif;
  font-size: 18px;
}
.container {
  margin-bottom: 2em;
  font-size: 18px;
}
.skills-header {
  text-align: center;
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  padding: 1rem;
  position: relative;
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
.top-discription p {
  text-align: center;
  font-size: 18px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  padding-bottom: 2rem;
}
.custom-card {
  background: transparent !important;
  padding-top: 10px;
}
.project-section {
  padding-top: 10px;
  color: white;
}

.v-card-title {
  margin-bottom: -1em;
  color: #fe4b57;
}
.v-divider {
  background-color: grey !important;
}
a {
  text-decoration: none;
}
.v-card-actions {
  margin-top: -1em;
}

.v-icon {
  color: white !important;
}

.v-img {
  border-radius: 5px;
}
/*--------------------------------------------------------------
# testimonial
--------------------------------------------------------------*/
.heading {
  text-align: center;
  color: #454343;
  font-size: 30px;
  font-weight: 700;
  position: relative;
  margin-bottom: 50px;
  text-transform: uppercase;
  z-index: 999;
}
.white-heading {
  color: grey;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  margin-top: 1em;
}

.testimonial {
  margin-top: 5rem;
  min-height: 375px;
  position: relative;
  padding-top: 10px;
  margin-bottom: -5rem;
  background-position: center;
  background-size: cover;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
#testimonial4 .carousel-inner:hover {
  cursor: -moz-grab;
  cursor: -webkit-grab;
}
#testimonial4 .carousel-inner:active {
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}
#testimonial4 .carousel-inner .item {
  overflow: hidden;
}

.v-card {
  background: #35394e;
}

.testimonial4_indicators .carousel-indicators {
  left: 0;
  margin: 0;
  width: 100%;
  font-size: 0;
  height: 20px;
  bottom: 15px;
  padding: 0 5px;
  cursor: e-resize;
  overflow-x: auto;
  overflow-y: hidden;
  position: absolute;
  text-align: center;
  white-space: nowrap;
}
.testimonial4_indicators .carousel-indicators li {
  padding: 0;
  width: 14px;
  height: 14px;
  border: none;
  text-indent: 0;
  margin: 2px 3px;
  cursor: pointer;
  display: inline-block;
  background: #fe4b57;
  -webkit-border-radius: 100%;
  border-radius: 100%;
}
.testimonial4_indicators .carousel-indicators .active {
  padding: 0;
  width: 14px;
  height: 14px;
  border: none;
  margin: 2px 3px;
  background-color: #9dd3af;
  -webkit-border-radius: 100%;
  border-radius: 100%;
}
.testimonial4_indicators .carousel-indicators::-webkit-scrollbar {
  height: 3px;
}
.testimonial4_indicators .carousel-indicators::-webkit-scrollbar-thumb {
  background: #fe4b57;
  -webkit-border-radius: 0;
  border-radius: 0;
}

.testimonial4_control_button .carousel-control {
  top: 175px;
  opacity: 1;
  width: 40px;
  bottom: auto;
  height: 40px;
  font-size: 10px;
  cursor: pointer;
  font-weight: 700;
  overflow: hidden;
  line-height: 38px;
  text-shadow: none;
  text-align: center;
  position: absolute;
  background: transparent;
  border: 2px solid #fe4b57;
  text-transform: uppercase;
  -webkit-border-radius: 100%;
  border-radius: 100%;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: all 0.6s cubic-bezier(0.3, 1, 0, 1);
  transition: all 0.6s cubic-bezier(0.3, 1, 0, 1);
}
.testimonial4_control_button .carousel-control.left {
  left: 7%;
  top: 50%;
  right: auto;
}
.testimonial4_control_button .carousel-control.right {
  right: 7%;
  top: 50%;
  left: auto;
}
.testimonial4_control_button .carousel-control.left:hover,
.testimonial4_control_button .carousel-control.right:hover {
  color: #000;
  background: #fe4b57;
  border: 2px solid #fe4b57;
}

.testimonial4_header {
  top: 0;
  left: 0;
  bottom: 0;
  width: 550px;
  display: block;
  margin: 30px auto;
  text-align: center;
  position: relative;
}
.testimonial4_header h4 {
  color: #fe4b57 !important;
  font-size: 30px;
  font-weight: 600;
  position: relative;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 1em;
}

.testimonial4_slide {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  margin: auto;
  padding: 20px;
  position: relative;
  text-align: center;
}
.testimonial4_slide img {
  top: 0;
  left: 0;
  right: 0;
  width: 136px;
  height: 136px;
  margin: auto;
  display: block;
  color: #f2f2f2;
  font-size: 18px;
  line-height: 46px;
  text-align: center;
  position: relative;
  border-radius: 50%;
  box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.23);
  -o-box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.23);
}
.testimonial4_slide p {
  line-height: 1.4;
  margin: 40px 0 20px 0;
}
.testimonial4_slide h4 {
  color: #fe4b57 !important;
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
}

.testimonial .carousel {
  padding-bottom: 65px;
}
.testimonial .carousel-control-next-icon,
.testimonial .carousel-control-prev-icon {
  width: 35px;
  height: 35px;
  color: #fe4b57 !important;
}

@media only screen and (max-width: 600px) {
  .v-container {
    margin-top: -5rem;
  }
}
</style>
