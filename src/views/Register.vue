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
                            Daftar <br> Akun Baru
                            </div>
                            <ul v-if="errors" class="red--text my-3">
                                <li v-for="(v, k) in errors" :key="k"> {{ v[0] | error }}</li>
                            </ul>
                            <v-form @submit.prevent="onSubmit" id="register">
                                <v-text-field
                                    append-icon="mdi-account"
                                    v-model="name"
                                    label="Nama Lengkap"
                                    type="text"
                                >
                                </v-text-field>
                                <v-text-field
                                    append-icon="mdi-gmail"
                                    v-model="email"
                                    label="Email"
                                    type="text"
                                >
                                </v-text-field>
                                <v-text-field
                                    v-model="password"
                                    :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show_password ? 'text' : 'password'"
                                    label="Password"
                                    @click:append="show_password = !show_password"
                                ></v-text-field>
                                <v-text-field
                                    v-model="password_confirmation"
                                    :append-icon="show_password_confirmation ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show_password_confirmation ? 'text' : 'password'"
                                    label="Konfirmasi Password"
                                    @click:append="show_password_confirmation = !show_password_confirmation"
                                ></v-text-field>
                            </v-form> 
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn 
                            type="submit"
                            class="white--text font-weight-bold"
                            color="#139CA4"
                            block
                            form="register"
                            >
                            Daftar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                    <div class="text-center">
                        <router-link class="subtitle-2" :to="{ name: 'login' }">
                            <small>Have an account?</small>
                        </router-link>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>
<script>
import { mapState } from "vuex";
import { REGISTER } from "@/store/actions.type";

export default {
    name: "Register",
    data() {
        return {
            show_password: false,
            show_password_confirmation: false,
            name: "",
            email: "",
            password: "",
            password_confirmation: ""
        }
    },
    computed: {
        ...mapState({
            errors: state => state.auth.errors
        })
    },
    methods: {
        // makeToast(variant = null) {
        //     this.$bvToast.toast('Toast body content', {
        //     title: `Variant ${variant || 'default'}`,
        //     variant: variant,
        //     solid: true
        //     })
        // },
        onSubmit() {
            this.$store
                .dispatch(REGISTER, {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
                .then((response) => {
                    this.$toast.success(response.message, {
                        type: "success",
                        position: "top-right",
                        duration: 3000,
                        dismissible: true,
                    });
                    this.$router.push({ name: "login" })
                });
        }
    }
};
</script>
<style>
</style>
