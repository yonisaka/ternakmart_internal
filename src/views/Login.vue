<template>
   <v-app id="inspire">
      <v-container fluid fill-height>
         <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
               <v-card class="elevation-0">
                  <v-img
                  class="mx-auto"
                  position="center center"
                  src="img/brand/ternakmart.png"
                  max-height="150"
                  max-width="150"
                  ></v-img>
                  <v-card-text>
                     <div class="display-1 font-weight-bold my-3">
                        Masuk <br> ke Akun Saya
                     </div>
                     <ul v-if="errors" class="red--text my-3">
                        <li v-for="(v, k) in errors" :key="k"> {{ v[0] | error }}</li>
                     </ul>
                     <v-form @submit.prevent="onSubmit(email, password)" id="login">
                        <v-text-field
                           append-icon="mdi-gmail"
                           v-model="email"
                           label="Email"
                           type="text"
                        >
                        </v-text-field>
                        <v-text-field
                           append-icon="mdi-form-textbox-password"
                           v-model="password"
                           label="Password"
                           type="password"
                        ></v-text-field>
                     </v-form>
                  </v-card-text>
                  <v-card-actions>
                     <v-spacer></v-spacer>
                     <v-btn 
                     type="submit"
                     depressed
                     class="white--text font-weight-bold"
                     color="#139CA4"
                     block
                     form="login"
                     :disabled="isLoading"
                     >
                        <span v-if="isLoading">
                           Loading 
                           <v-progress-circular
                           :size="15"
                           indeterminate
                           color="secondary"
                           ></v-progress-circular>
                        </span>
                        <span v-else>
                           Masuk
                        </span>
                     </v-btn>
                  </v-card-actions>
               </v-card>
               <div class="text-center">
                  <router-link class="subtitle-2" :to="{ name: 'register_page' }">
                     <small>Create new account</small>
                  </router-link>
               </div>
            </v-flex>
         </v-layout>
      </v-container>
   </v-app>
</template>
<script>
import { mapState } from "vuex";
import { LOGIN } from "@/store/actions.type";

export default {
   name: "Login",
   data() {
      return {
         isLoading: false,
         email: null,
         password: null,
         // errors: {},
      };
   },
   mounted() {
      
   },
   methods: {
      onSubmit(email, password) {
      this.isLoading = true
      this.$store
            .dispatch(LOGIN, { email, password })
            .then(() => {
               // console.log(res)
               this.isLoading = false
               this.$router.push({ name: "dashboard" })
            })
            this.isLoading = false
      }
   },
   computed: {
      ...mapState({
      errors: state => state.auth.errors
      }),

   }
};
</script>
<style>
</style>
