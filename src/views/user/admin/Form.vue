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
                    to="/user/admin"
                    dense
                    color="secondary"
                    >
                    Kembali
                    </v-btn>
                </v-toolbar>
                <v-divider></v-divider>
                <div class="subtitle font-weight-bold mt-5 ml-5">
                    Informasi Akun
                </div>
                <v-form
                ref="form"
                @submit.prevent="onSubmit()"
                >
                    <v-container fluid>
                        <v-row>
                            <v-col
                                cols="6"
                            >
                                <v-text-field
                                v-model="form.name"
                                color="teal darken-2"
                                label="Nama Lengkap"
                                outlined
                                dense
                                required
                                ></v-text-field>
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
                            <v-col v-if="!id_user"
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
            id_user:'',
            show_password: false,
            show_password_confirmation: false,
            breadcrumbs: [
                {
                    text: 'User',
                    disabled: true,
                },
                {
                    text: 'Admin',
                    disabled: true,
                },
                {
                    text: 'Tambah Data',
                    disabled: true,
                },
            ],
            items: ['Aktif', 'Tidak Aktif'],
            form: {},
        }
    },
    mounted() {
        this.id_user = this.$route.params.id || ''

        if (this.$route.params.id){
            axios
            .get("/users/"+ this.$route.params.id)
            .then((res) => {
                this.form = res.data.user
            })
            // .catch((err) => console.log(err));
        }
    },
    methods: {
        onSubmit() {

            if (this.$route.params.id){
                ApiService.setHeader();
                ApiService.put("users/"+ this.id_user, this.form)
                .then(() => {
                    this.$router.push({ path: '/user/admin'})
                })
            } else {
                this.form.role_id = '1'
                ApiService.setHeader();
                ApiService.post("users", this.form)
                .then(() => {
                    this.$router.push({ path: '/user/admin'})
                })
            }
        }
    }
}
</script>