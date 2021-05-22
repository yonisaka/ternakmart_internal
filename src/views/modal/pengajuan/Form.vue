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
                        Pengajuan Ternak
                        </div>  
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn
                    to="/modal/pengajuan"
                    dense
                    color="secondary"
                    >
                    Kembali
                    </v-btn>
                    
                </v-toolbar>
                <v-divider></v-divider>
                <div class="subtitle font-weight-bold mt-5 ml-5">
                    Informasi Ternak
                </div>
                <v-form
                ref="form"
                enctype="multipart/form-data"
                @submit.prevent="onSubmit()"
                >
                    <v-container fluid>
                        <v-row v-if="errors" >
                            <ul class="red--text my-3">
                                <li v-for="(v, k) in errors" :key="k"> {{ v[0] | error }}</li>
                            </ul>
                        </v-row>
                        <v-row>
                            <v-col
                                cols="12"
                                lg="4"
                                sm="12"
                            >
                                <v-text-field
                                v-model="form.ternak_nama"
                                color="teal darken-2"
                                label="Nama Ternak"
                                outlined
                                dense
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col 
                                cols="12"
                                lg="2"
                                sm="12"
                            >
                                <v-select
                                v-model="form.jenis_kelamin"
                                item-text="text"
                                item-value="value"
                                :items="jenis_kelamin"
                                color="teal"
                                label="Kelamin"
                                outlined
                                dense
                                required
                                @change="filterJenis"
                                ></v-select>
                            </v-col>
                            <v-col 
                                cols="12"
                                lg="3"
                                sm="12"
                            >
                                <v-select
                                v-model="form.id_golongan"
                                item-text="golongan_nama"
                                item-value="id"
                                :items="golongan"
                                color="teal"
                                label="Jenis"
                                outlined
                                dense
                                required
                                @change="filterJenis"
                                ></v-select>
                            </v-col>
                            <v-col 
                                cols="12"
                                lg="3"
                                sm="12"
                            >
                                <v-select
                                v-model="form.id_jenis"
                                item-text="jenis_nama"
                                item-value="id"
                                :items="jenis"
                                color="teal"
                                label="Breed"
                                outlined
                                dense
                                required
                                ></v-select>
                            </v-col>
                            <v-col 
                                cols="12"
                                lg="6"
                                sm="12"    
                            >
                                <v-file-input
                                @change="onFilePicked"
                                show-size
                                counter
                                multiple
                                outlined
                                dense
                                label="Foto Ternak"
                                ></v-file-input>
                            </v-col>
                            <v-col 
                                cols="4"
                                lg="2"
                                sm="4"
                            >
                                <v-text-field
                                v-model="form.ternak_berat"
                                color="teal darken-2"
                                label="Berat"
                                outlined
                                dense
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col 
                                cols="4"
                                lg="2"
                                sm="4"
                            >
                                <v-text-field
                                v-model="form.ternak_umur"
                                color="teal darken-2"
                                label="Umur"
                                outlined
                                dense
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col 
                                cols="4"
                                lg="2"
                                sm="4"
                            >
                                <v-text-field
                                v-model="form.lingkar_perut"
                                color="teal darken-2"
                                label="Lingkar Perut"
                                outlined
                                dense
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col v-if="id_ternak" 
                                cols="12"
                                lg="6"
                                sm="12"
                            >
                                <v-img
                                :lazy-src="form.file_path"
                                :src="form.file_path"
                                aspect-ratio="1.8"
                                @error="$event.target.src='img/default.png'"
                                ></v-img>
                            </v-col>
                            <v-col v-if="id_ternak" 
                                cols="12"
                                lg="6"
                                sm="12"
                            >
                                <v-textarea
                                v-model="form.ternak_deskripsi"
                                color="teal darken-2"
                                rows="10"
                                outlined
                                dense
                                row-height="30"
                                >
                                <template v-slot:label>
                                    <div>
                                    Deskripsi
                                    </div>
                                </template>
                                </v-textarea>
                            </v-col>
                            <v-col v-else cols="12">
                                <v-textarea
                                v-model="form.ternak_deskripsi"
                                color="teal darken-2"
                                rows="10"
                                outlined
                                dense
                                row-height="30"
                                >
                                <template v-slot:label>
                                    <div>
                                    Deskripsi
                                    </div>
                                </template>
                                </v-textarea>
                            </v-col>
                            <v-col
                                cols="12"
                                lg="6"
                                sm="12"
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
                                        v-model="form.tgl_penerimaan"
                                        label="Tanggal Penerimaan"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        outlined
                                        dense
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                    </template>
                                    <v-date-picker
                                    v-model="form.tgl_penerimaan"
                                    @input="menu = false"
                                    ></v-date-picker>
                                </v-menu>
                                <v-text-field
                                v-model="form.harga_pengajuan"
                                color="teal darken-2"
                                label="Harga"
                                outlined
                                dense
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col 
                                cols="12"
                                lg="6"
                                sm="12"
                            >
                                <v-select
                                v-model="form.province_id"
                                item-text="province"
                                item-value="province_id"
                                :items="provinsi"
                                color="teal"
                                label="Provinsi"
                                outlined
                                dense
                                required
                                @change="filterCity"
                                ></v-select>
                                <v-select
                                v-model="form.city_id"
                                item-text="city_name"
                                item-value="city_id"
                                :items="kota"
                                color="teal"
                                label="Kota / Kabupaten"
                                outlined
                                dense
                                required
                                @change="filterCity"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row class="text-right">
                            <v-col>
                                <v-btn
                                type="submit"
                                color="primary"
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
                                        Simpan
                                    </span>
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
import { mapGetters } from "vuex";
// import { FETCH_JENIS, ADD_TERNAK } from "@/store/actions.type";
import { FETCH_GOL } from "@/store/actions.type";
import axios from "axios";

export default {
    components: {
        // DatePicker
    },
    data() {
        return {
            snackbar: false,
            message: '',
            isLoading: false,
            id_ternak: '',
            jenis_kelamin: [
                { 
                    text: 'Betina',
                    value: 'B',
                }, 
                {
                    text: 'Jantan',
                    value: 'J',
                }
            ],
            form: {},
            jenis: [
                {
                    'jenis_nama' : 'Pilih golongan terlebih dahulu',
                    'id' : ''
                }
            ],
            breadcrumbs: [
                {
                    text: 'Modal',
                    disabled: true,
                },
                {
                    text: 'Pengajuan',
                    disabled: true,
                },
                {
                    text: 'Tambah Data',
                    disabled: true,
                },
            ],
            menu: false,
            errors: {},
            provinsi: [],
            kota:[
                {
                    'city_name' : 'Pilih provinsi terlebih dahulu',
                    'city_id' : ''
                }
            ],
        }
    },
    mounted() {
        axios.get("/lokasi/provinsi")
        .then((res) => {
            this.provinsi = res.data.provinsi
        })
        this.$store.dispatch(FETCH_GOL);
        this.id_ternak = this.$route.params.id || ''

        if (this.$route.params.id){
            axios
            .get("/ternak/"+ this.$route.params.id)
            .then((res) => {
                this.form = res.data.ternak
                this.jenis = {
                    'id': res.data.ternak.id_jenis,
                    'jenis_nama': res.data.ternak.jenis_nama
                }
                this.kota = {
                    'city_id': res.data.ternak.city_id,
                    'city_name': res.data.ternak.city_name
                }
            })
            
            // .catch((err) => console.log(err));
        }
    },
    computed: {
        ...mapGetters(["golongan"])
    },
    methods: {
        filterJenis() {
            axios
            .get("/jenis/"+ this.form.id_golongan + "/" + this.form.jenis_kelamin)
            .then((res) => {
                this.jenis = res.data.jenis;
            })
            // .catch((err) => console.log(err));
        },
        filterCity() {
            axios
            .get("lokasi/kota/"+ this.form.province_id)
            .then((res) => {
                this.kota = res.data.kota;
            })
            // .catch((err) => console.log(err));
        },
        onFilePicked(files){
            this.form.file = files[0];
        },
        onSubmit() {
            this.isLoading = true
            let formData = new FormData();
            formData.append("ternak_nama", this.form.ternak_nama);
            formData.append("id_jenis", this.form.id_jenis);
            formData.append("jenis_kelamin", this.form.jenis_kelamin);
            formData.append("lingkar_perut", this.form.lingkar_perut);
            formData.append("ternak_berat", this.form.ternak_berat);
            formData.append("ternak_umur", this.form.ternak_umur);
            formData.append("file", this.form.file);
            formData.append("ternak_deskripsi", this.form.ternak_deskripsi);
            formData.append("harga_pengajuan", this.form.harga_pengajuan);
            formData.append("tgl_penerimaan", this.form.tgl_penerimaan);
            formData.append("province_id", this.form.province_id);
            formData.append("city_id", this.form.city_id);

            if (this.$route.params.id){
                axios
                .post("/ternak/" + this.id_ternak + '?_method=PUT', formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(() => {
                    this.snackbar = true
                    this.message = 'Berhasil Update Data'
                    this.color = '#139CA4'
                    setTimeout( () => this.$router.push({ path: '/modal/pengajuan'}), 1000);
                    this.isLoading = false
                })
                .catch((err) => {
                    this.errors = err.response.data
                    this.snackbar = true
                    this.message = 'Gagal Update Data'
                    this.color = 'red'
                    this.isLoading = false
                });
            } else {
                axios
                .post("/ternak", formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(() => {
                    this.snackbar = true
                    this.message = 'Berhasil Tambah Data'
                    this.color = '#139CA4'
                    setTimeout( () => this.$router.push({ path: '/modal/pengajuan'}), 1000);
                    this.isLoading = false
                })
                .catch((err) => {
                    this.errors = err.response.data
                    this.snackbar = true
                    this.message = 'Gagal Tambah Data'
                    this.color = 'red'
                    this.isLoading = false
                });
            }
        },
    }
}
</script>