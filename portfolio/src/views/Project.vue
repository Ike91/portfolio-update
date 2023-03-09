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
                            <v-icon class="text-red-200">mdi-vuejs</v-icon>
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
                    <v-card-action>
                      <v-row justify="space-between">
                        <v-col cols="auto">
                          <v-btn className="ml-2 mt-2 ">
                            <v-icon left size="70">mdi-folder</v-icon></v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-card-action>
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
.v-icon {
  color: #fe4b57 !important;
}

.v-btn {
  background: transparent !important;
}
</style>
