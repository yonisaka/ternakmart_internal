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
                        Form Produk
                        </div>  
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn
                    to="/modal/produk"
                    dense
                    color="secondary"
                    >
                    Kembali
                    </v-btn>
                    
                </v-toolbar>
                <v-divider></v-divider>
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
                                lg="3"
                                sm="12"
                            >
                                <v-text-field
                                v-model="form.produk_nama"
                                color="teal darken-2"
                                label="Nama Produk"
                                outlined
                                dense
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col 
                                cols="12"
                                lg="3"
                                sm="12"
                            >
                                <v-text-field
                                type="number"
                                v-model="form.produk_harga"
                                color="teal darken-2"
                                label="Harga Produk"
                                outlined
                                dense
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col 
                                cols="12"
                                lg="3"
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
                            </v-col>
                            <v-col 
                                cols="12"
                                lg="3"
                                sm="12"
                            >
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
                            <v-col 
                                cols="12"
                                lg="6"
                                sm="12"
                            >
                                <v-select
                                v-model="form.kategori"
                                item-text="text"
                                item-value="value"
                                :items="kategori"
                                color="teal"
                                label="Kategori Produk"
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
                                label="Foto Produk"
                                ></v-file-input>
                            </v-col>
                            <v-col 
                                cols="12"
                                lg="3"
                                sm="12"
                            >
                                <v-select
                                v-model="form.produk_jenis"
                                item-text="text"
                                item-value="value"
                                :items="jenis"
                                color="teal"
                                label="Jenis Produk"
                                outlined
                                dense
                                required
                                ></v-select>
                            </v-col>
                            <v-col 
                                cols="12"
                                lg="3"
                                sm="12"
                            >
                                <v-text-field
                                type="number"
                                v-model="form.qty"
                                color="teal darken-2"
                                label="Quantity"
                                outlined
                                dense
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <label class="ml-1">Deskripsi</label>
                                <vue-editor v-model="form.produk_deskripsi" :editor-toolbar="customToolbar"/>
                                <!-- <v-textarea
                                v-model="form.produk_deskripsi"
                                color="teal darken-2"
                                rows="10"
                                outlined
                                dense
                                row-height="30"
                                >
                                <template v-slot:label>
                                    <div>
                                    Deskripsi Produk
                                    </div>
                                </template>
                                </v-textarea> -->
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
    </v-container>
</template>
<script>
import axios from "axios";
import { VueEditor } from "vue2-editor";

export default {
    components: { VueEditor },
    data() {
        return {
            breadcrumbs: [
                {
                    text: 'Modal',
                    disabled: true,
                },
                {
                    text: 'Produk',
                    disabled: true,
                },
                {
                    text: 'Form Produk',
                    disabled: true,
                },
            ],
            snackbar: false,
            message: '',
            isLoading: false,
            id_produk: '',
            form: {},
            provinsi: [],
            kota:[
                {
                    'city_name' : 'Pilih provinsi terlebih dahulu',
                    'city_id' : ''
                }
            ],
            kategori: [
                {
                    'text' : 'Produk',
                    'value' : 'produk'
                },
                {
                    'text' : 'Aqiqah',
                    'value' : 'aqiqah'
                },
            ],
            errors: {},
            jenis: [
                {
                    'text' : 'Pack',
                    'value' : 'pack'
                },
                {
                    'text' : 'Kaleng',
                    'value' : 'kaleng'
                }
                ,
                {
                    'text' : 'Aqiqah',
                    'value' : 'aqiqah'
                }
            ],
            customToolbar: [
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],
            ],
        }
    },
    mounted() {
        axios.get("/lokasi/provinsi")
        .then((res) => {
            this.provinsi = res.data.provinsi
        })
        this.id_produk = this.$route.params.id || ''
        if (this.$route.params.id){
            
            axios
            .get("/produk/"+ this.$route.params.id)
            .then((res) => {
                this.form = res.data.data
                this.jenis = {
                    'value': res.data.data.produk_jenis,
                    'text': res.data.data.produk_jenis
                }
                axios
                .get("lokasi/kota/"+ res.data.data.province_id)
                .then((res) => {
                    this.kota = res.data.kota;
                })
                this.kota = {
                    'city_id': res.data.data.city_id,
                    'city_name': res.data.data.city_name
                }
            })
        }
    },
    methods: {
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
            formData.append("produk_nama", this.form.produk_nama);
            formData.append("produk_jenis", this.form.produk_jenis);
            formData.append("kategori", this.form.kategori);
            formData.append("qty", this.form.qty);
            formData.append("produk_harga", this.form.produk_harga);
            formData.append("produk_deskripsi", this.form.produk_deskripsi);
            formData.append("file", this.form.file);
            formData.append("province_id", this.form.province_id);
            formData.append("city_id", this.form.city_id);

            if (this.$route.params.id){
                axios
                .post("/produk/" + this.id_produk + '?_method=PUT', formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(() => {
                    this.snackbar = true
                    this.message = 'Berhasil Update Data'
                    this.color = '#139CA4'
                    setTimeout( () => this.$router.push({ path: '/modal/produk'}), 1000);
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
                .post("/produk", formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(() => {
                    this.snackbar = true
                    this.message = 'Berhasil Tambah Data'
                    this.color = '#139CA4'
                    setTimeout( () => this.$router.push({ path: '/modal/produk'}), 1000);
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
        }
    }
}
</script>