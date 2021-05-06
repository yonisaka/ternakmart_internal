<template>
    <v-app id="inspire">
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md8>
                    <v-card class="elevation-4 px-5 py-5">
                        <v-img
                        class="mx-auto"
                        position="center center"
                        src="img/brand/ternakmart.png"
                        max-height="100"
                        max-width="100"
                        ></v-img>
                        <v-card-text>
                            <div class="display-1 font-weight-bold my-3">
                            Daftar Akun Baru Dokter
                            </div>
                            <ul v-if="errors" class="red--text my-3">
                                <li v-for="(v, k) in errors" :key="k"> {{ v[0] | error }}</li>
                            </ul>
                            <v-form @submit.prevent="onSubmit" id="register">
                                <v-row>
                                    <v-col cols="6">
                                        <v-text-field
                                        v-model="form.nama_lengkap"
                                        color="teal darken-2"
                                        label="Nama Lengkap"
                                        required
                                        ></v-text-field>
                                        <v-file-input
                                        @change="onFilePicked"
                                        show-size
                                        counter
                                        multiple
                                        label="Foto"
                                        ></v-file-input>
                                        <v-select
                                        v-model="form.jenis_kelamin"
                                        item-text="text"
                                        item-value="value"
                                        :items="jenis_kelamin"
                                        color="teal"
                                        label="Jenis Kelamin"
                                        required
                                        ></v-select>
                                        <v-text-field
                                        v-model="form.nomor_hp"
                                        color="teal darken-2"
                                        label="Nomor Telepon"
                                        required
                                        ></v-text-field>
                                        <v-textarea
                                            v-model="form.alamat"
                                            color="teal darken-2"
                                            rows="2"
                                            row-height="5"
                                            >
                                            <template v-slot:label>
                                                <div>
                                                Alamat
                                                </div>
                                            </template>
                                        </v-textarea>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-menu
                                            v-model="menu"
                                            :close-on-content-click="false"
                                            :nudge-right="40"
                                            transition="scale-transition"
                                            offset-y
                                            min-width="auto"
                                        >
                                            <template v-slot:activator="{ on, attrs }">
                                            <v-text-field
                                                v-model="form.tanggal_lahir"
                                                label="Tanggal Lahir"
                                                append-icon="mdi-calendar"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                            ></v-text-field>
                                            </template>
                                            <v-date-picker
                                            v-model="form.tanggal_lahir"
                                            @input="menu = false"
                                            ></v-date-picker>
                                        </v-menu>
                                        <v-text-field
                                            append-icon="mdi-gmail"
                                            v-model="form.email"
                                            label="Email"
                                            type="text"
                                        >
                                        </v-text-field>
                                        <v-text-field
                                            v-model="form.password"
                                            :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                                            :type="show_password ? 'text' : 'password'"
                                            label="Password"
                                            @click:append="show_password = !show_password"
                                        ></v-text-field>
                                        <v-text-field
                                            v-model="form.password_confirmation"
                                            :append-icon="show_password_confirmation ? 'mdi-eye' : 'mdi-eye-off'"
                                            :type="show_password_confirmation ? 'text' : 'password'"
                                            label="Konfirmasi Password"
                                            @click:append="show_password_confirmation = !show_password_confirmation"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
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
                    <div class="text-center mt-3">
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
import ApiService from "@/common/api.service";
import axios from "axios";

export default {
    name: "Register",
    data() {
        return {
            show_password: false,
            show_password_confirmation: false,
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            form: {},
            jenis_kelamin: [
                { 
                    text: 'Laki-laki',
                    value: 'L',
                }, 
                {
                    text: 'Perempuan',
                    value: 'P',
                }
            ],
            menu: false,
        }
    },
    computed: {
        ...mapState({
            errors: state => state.auth.errors
        })
    },
    methods: {
        onFilePicked(files){
            this.form.file = files[0];
        },
        onSubmit() {
            this.form.name = this.form.nama_lengkap
            this.form.role_id = '2'
            this.form.user_st = 'Tidak Aktif'
                ApiService.setHeader();
                ApiService.post("users", this.form)
                .then((res) => {
                    this.form.id_user = res.data.user.id
                    let formData = new FormData();
                    formData.append("nama_lengkap", this.form.nama_lengkap);
                    formData.append("nomor_hp", this.form.nomor_hp);
                    formData.append("tanggal_lahir", this.form.tanggal_lahir);
                    formData.append("alamat", this.form.alamat);
                    formData.append("jenis_kelamin", this.form.jenis_kelamin);
                    formData.append("id_user", this.form.id_user);
                    formData.append("file", this.form.file);

                    axios.post("dokter", formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(() => {
                        this.$router.push({ path: '/login'})
                    })
                })
        }
    }
};
</script>
<style>
</style>
