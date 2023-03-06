import { createStore } from 'vuex'
import * as firebase from '../Firebase/firebase'
import route from '../router/index'
import { getDoc, deleteDoc, doc, setDoc } from "firebase/firestore";

const store = createStore({
  state: {
    user:
    {
      userProfile: {},
      isAuthenticated: false,
    },

    ErrorMessage: '',
    SuccessMessage: '',
  },

  getters: {
    user(state) {
      return state.user
    },
    getErrorMessage(state){
      return state.ErrorMessage
    },
    getSuccessMessage(state)
    {
      return state.SuccessMessage
    }
  },

  mutations: {
    setUserprofile(state, val, authState) {
      state.isAuthenticated = !state.isAuthenticated
      state.userProfile = val
    },
    setErrorMessage(state, error){
      state.ErrorMessage = error
    },
    setSuccessMessage(state, message)
    {
      state.SuccessMessage = message
    }

  },

  actions: {
    async register(dispatch, form) {
      // register userProfile
      const { user } = await firebase.auth.createUserWithEmailAndPassword(form.email, form.password)

      //save the user on firestore
      await setDoc(doc(firebase.firestore, "userCollection", user.uid), {
        name: form.name,
        phone: form.phone,
        email: form.email,
      });

      // clear the form
      form.cleared = true;
      //redirect to the login form
      route.push('/login')
    },


    async sigin({commit}, form ) 
    {
      try 
      {
        const { user } = await firebase.auth.signInWithEmailAndPassword(form.email, form.password)
        this.dispatch('fetchUserProfile', user)

      } catch (error) {

        commit('setErrorMessage', "The credentials you entered are incorrect. Please check your username and password and try again")
      }
    },


    //reset password 
    async resetPassword({ commit },  form){
     
        firebase.auth.sendPasswordResetEmail(form.email).then( function(){
          commit('setSuccessMessage', 'Reset email sent, check your Inbox or span folder and follow the instructions')
        }).catch( error => {
          commit('setErrorMessage', error)
        })
        
    },

    async fetchUserProfile({ commit }, user) 
    {
      //fetch user userProfile
      const docRef = doc(firebase.firestore, 'userCollection', user.uid);

      try {
        const userProfile = await getDoc(docRef);

        if (userProfile.exists()) {
          // set the user profile
          commit('setUserprofile', userProfile.data())

          //redirect to the dasboard page
          route.push('/dashboard')

        } else {
          console.log("Document does not exist")
        }

      } catch (error) {
        console.log(error)
      }
    },

    async logout({ commit }) 
    {
      await firebase.auth.signOut()
      commit('setUserprofile', {})
      route.push('/home')
     
    }

  },
})

// export the store
export default store
