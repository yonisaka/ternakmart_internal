<template>
    <v-container>
        <v-breadcrumbs
            :items="breadcrumbs"
            divider="\"
        ></v-breadcrumbs>
        <v-card
        elevation="4"
        >
            <v-card-text>
                <v-toolbar flat>
                    <v-toolbar-title>
                        <div
                        class="title font-weight-bold my-2 ml-2"
                        >
                        Tambah Data
                        </div>  
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn
                    to="/user/dokter"
                    dense
                    color="secondary"
                    >
                    Kembali
                    </v-btn>
                </v-toolbar>
                <v-divider></v-divider>
                <v-form
                ref="form"
                @submit.prevent="onSubmit()"
                >
                <div class="subtitle font-weight-bold mt-5 ml-5">
                    Data Diri
                </div>
                    <v-container fluid>
                        <v-row>
                            <v-col
                                cols="6"
                            >
                                <v-text-field
                                v-model="form.nama_lengkap"
                                color="teal darken-2"
                                label="Nama Lengkap"
                                outlined
                                dense
                                required
                                ></v-text-field>
                                <v-select
                                v-model="form.jenis_kelamin"
                                item-text="text"
                                item-value="value"
                                :items="jenis_kelamin"
                                color="teal"
                                label="Jenis Kelamin"
                                outlined
                                dense
                                required
                                ></v-select>
                                <v-text-field
                                v-model="form.nomor_hp"
                                color="teal darken-2"
                                label="Nomor Telepon"
                                outlined
                                dense
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="6"
                            >
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
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        outlined
                                        dense
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                    </template>
                                    <v-date-picker
                                    v-model="form.tanggal_lahir"
                                    @input="menu = false"
                                    ></v-date-picker>
                                </v-menu>
                                <v-textarea
                                v-model="form.alamat"
                                color="teal darken-2"
                                rows="4"
                                outlined
                                dense
                                row-height="5"
                                >
                                <template v-slot:label>
                                    <div>
                                    Alamat
                                    </div>
                                </template>
                                </v-textarea>
                            </v-col>
                        </v-row>
                    </v-container>
                <div class="subtitle font-weight-bold mt-5 ml-5">
                    Informasi Akun
                </div>
                    <v-container fluid>
                        <v-row>
                            <v-col
                                cols="6"
                            >
                                <v-text-field
                                v-model="form.email"
                                color="teal darken-2"
                                label="Email"
                                outlined
                                dense
                                required
                                ></v-text-field>
                                <v-select
                                v-model="form.user_st"
                                :items="items"
                                color="teal darken-2"
                                label="Status"
                                outlined
                                dense
                                ></v-select>
                            </v-col>
                            <v-col v-if="!id_dokter"
                                cols="6"
                            >
                                <v-text-field
                                v-model="form.password"
                                color="teal darken-2"
                                label="Password"
                                outlined
                                dense
                                required
                                :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show_password ? 'text' : 'password'"
                                @click:append="show_password = !show_password"
                                ></v-text-field>
                                <v-text-field
                                v-model="form.password_confirmation"
                                color="teal darken-2"
                                label="Konfirmasi Password"
                                outlined
                                dense
                                required
                                :append-icon="show_password_confirmation ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show_password_confirmation ? 'text' : 'password'"
                                @click:append="show_password_confirmation = !show_password_confirmation"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row class="text-right">
                            <v-col>
                                <v-btn
                                type="submit"
                                color="primary"
                                >
                                    Simpan
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-card-text>
        </v-card>
        <v-snackbar
            v-model="snackbar"
            timeout="2000"
            :color="color"
            >
            {{ message }}
        </v-snackbar>
    </v-container>
</template>                

<script>
// import DatePicker from "@/components/Datepicker";
// import { mapGetters } from "vuex";
import ApiService from "@/common/api.service";
// import JwtService from "@/common/jwt.service";
import axios from "axios";


export default {
    components: {
        
    },
    data() {
        return {
            snackbar: false,
            message: '',
            color: '',
            id_dokter:'',
            show_password: false,
            show_password_confirmation: false,
            breadcrumbs: [
                {
                    text: 'User',
                    disabled: true,
                },
                {
                    text: 'Dokter',
                    disabled: true,
                },
                {
                    text: 'Tambah Data',
                    disabled: true,
                },
            ],
            items: ['Aktif', 'Tidak Aktif'],
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
    mounted() {
        this.id_dokter = this.$route.params.id || ''
        if (this.$route.params.id){
            axios
            .get("/dokter/"+ this.$route.params.id)
            .then((res) => {
                this.form = res.data.dokter
            })
            // .catch((err) => console.log(err));
        }
    },
    methods: {
        onSubmit() {

            this.form.name = this.form.nama_lengkap
            if (this.$route.params.id){
                ApiService.setHeader();
                ApiService.put("users/"+ this.form.id_user, this.form)
                .then(() => {
                    ApiService.put("dokter/" + this.id_dokter, this.form)
                    .then(() => {
                        this.snackbar = true
                        this.message = 'Berhasil Update Data'
                        this.color = '#139CA4'
                        setTimeout( () => this.$router.push({ path: '/user/dokter'}), 1000);
                    })
                })
            } else {
                this.form.role_id = '2'
                ApiService.setHeader();
                ApiService.post("users", this.form)
                .then((res) => {
                    this.form.id_user = res.data.user.id
                    ApiService.post("dokter", this.form)
                    .then(() => {
                        this.snackbar = true
                        this.message = 'Berhasil Update Data'
                        this.color = '#139CA4'
                        setTimeout( () => this.$router.push({ path: '/user/dokter'}), 1000);
                    })
                })
            }
        }
    }
}
</script>