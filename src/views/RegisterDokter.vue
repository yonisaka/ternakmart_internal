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
                                    <v-col cols="12" lg="6" sm="12">
                                        <v-text-field
                                        v-model="form.nama_lengkap"
                                        color="teal darken-2"
                                        label="Nama Lengkap"
                                        required
                                        ></v-text-field>
                                        <v-text-field
                                        v-model="form.strv"
                                        color="teal darken-2"
                                        label="Surat Tanda Registrasi Verifikasi"
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
                                    <v-col cols="12" lg="6" sm="12">
                                        <v-menu
                                            v-model="menu"
                                            :close-on-content-click="false"
                                            min-width="auto"
                                            transition="scale-transition"
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
                                            year-icon="mdi-calendar-blank"
                                            prev-icon="mdi-skip-previous"
                                            next-icon="mdi-skip-next"
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
                                Daftar
                            </span>
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

        <v-snackbar
            v-model="snackbar"
            timeout="2000"
            :color="color"
            >
            {{ message }}
        </v-snackbar>
    </v-app>
</template>
<script>
// import { mapState } from "vuex";
import ApiService from "@/common/api.service";
import axios from "axios";

export default {
    name: "Register",
    data() {
        return {
            snackbar: false,
            message: '',
            isLoading: false,
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
            errors: {},
        }
    },
    computed: {
        // ...mapState({
        //     errors: state => state.auth.errors
        // })
    },
    methods: {
        onFilePicked(files){
            this.form.file = files[0];
        },
        onSubmit() {
            this.isLoading = true
            this.form.name = this.form.nama_lengkap
            this.form.role_id = '2'
            this.form.user_st = 'Tidak Aktif'
                ApiService.setHeader();
                ApiService.post("users", this.form)
                .then((res) => {
                    this.isLoading = false
                    this.form.id_user = res.data.user.id
                    let formData = new FormData();
                    formData.append("nama_lengkap", this.form.nama_lengkap);
                    formData.append("strv", this.form.strv);
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
                        this.snackbar = true
                        this.message = 'Berhasil Pendaftaran'
                        this.color = '#139CA4'
                        setTimeout( () => this.$router.push({ path: '/login'}), 2000);
                    })
                })
                .catch((err) => {
                    this.errors = err.response.data
                    this.snackbar = true
                    this.message = 'Gagal Pendaftaran'
                    this.color = 'red'
                    this.isLoading = false
                });
        }
    }
};
</script>
<style>
</style>
