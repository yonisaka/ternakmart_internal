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
                        Detail Ternak
                        </div>  
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn
                    to="/modal/persetujuan"
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
                <v-container>
                    <v-card
                        class="mx-auto"
                        elevation="0"
                        color="blue-grey lighten-5"
                    >
                    <v-card-text>
                        <v-row>
                            <v-col lg="6" sm="12">
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> Nama Ternak </div>
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black">: {{ ternak.ternak_nama}} </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> Jenis Ternak </div>
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black">: {{ ternak.jenis_nama}} </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> Kelamin </div>
                                    </v-col>
                                    <v-col cols="5">
                                        <div v-if="ternak.jenis_kelamin === 'B'" class="font-weight-bold" color="black">: Betina </div>
                                        <div v-if="ternak.jenis_kelamin === 'J'" class="font-weight-bold" color="black">: Jantan </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> Berat / Lingkar Perut / Umur</div>
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black">: {{ ternak.ternak_berat}} kg / {{ ternak.lingkar_perut}} cm / {{ ternak.ternak_umur}} tahun </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> Deskripsi</div>
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black">:</div>
                                    </v-col>
                                    <v-col cols="12">
                                        <div class="font-weight-bold" color="black"> {{ ternak.ternak_deskripsi }}</div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> Tanggal Penerimaan </div>
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black">: {{ ternak.tgl_penerimaan|moment('MMM Do YYYY') }} </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> Harga Pengajuan </div>
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black">: {{ formatPrice(ternak.harga_pengajuan) }} </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col lg="6" sm="12">
                                <v-img
                                :lazy-src="ternak.file_path"
                                :src="ternak.file_path"
                                aspect-ratio="1.8"
                                class="rounded-lg"
                                @error="$event.target.src='img/default.png'"
                                ></v-img>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    </v-card>
                </v-container>
                <v-form
                ref="form"
                @submit.prevent="onSubmit()"
                >
                <div class="subtitle font-weight-bold mt-5 ml-5">
                    Data Kesehatan
                </div>
                <v-container>
                    <v-row>
                        <v-col lg="6" sm="12">
                            <v-text-field
                                label="RFID"
                                v-model="form.rfid"
                                outlined
                                dense
                            ></v-text-field>
                            <v-text-field
                                label="Temperatur"
                                v-model="form.temperatur"
                                outlined
                                dense
                            ></v-text-field>
                            <v-text-field
                                v-if="ternak.jenis_kelamin == 'B'"
                                label="Umur Bunting"
                                v-model="form.umur_bunting"
                                outlined
                                dense
                            ></v-text-field>
                            <v-text-field
                                label="Tonus Rumen"
                                v-model="form.tonus_rumen"
                                outlined
                                dense
                            ></v-text-field>
                            <v-text-field
                                label="Pengobatan"
                                v-model="form.pengobatan"
                                outlined
                                dense
                            ></v-text-field>
                            <v-radio-group v-model="form.vaksin_st" label="Status Vaksin" row>
                                <v-radio
                                    class="ml-5"
                                    label="Sudah"
                                    value="1"
                                ></v-radio>
                                <v-radio
                                    class="ml-5"
                                    label="Belum"
                                    value="0"
                                ></v-radio>
                            </v-radio-group>
                        </v-col>
                        <v-col lg="6" sm="12">
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
                                    v-model="form.tgl_pemeriksaan"
                                    label="Tanggal Pengecekan"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    outlined
                                    dense
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-date-picker
                                v-model="form.tgl_pemeriksaan"
                                @input="menu = false"
                                ></v-date-picker>
                            </v-menu>
                            <v-textarea
                            v-model="form.riwayat_kasus"
                            outlined
                            dense
                            label="Riwayat Kasus"
                            auto-grow
                            rows="10"
                            row-height="12"
                            ></v-textarea>
                            <v-menu
                                v-if="ternak.jenis_kelamin == 'B'"
                                v-model="menu"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="form.perkiraan_lahir"
                                    class="mb-3"
                                    label="Perkiraan Lahir"
                                    prepend-icon="mdi-calendar"
                                    outlined
                                    dense
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-date-picker
                                v-model="form.perkiraan_lahir"
                                @input="menu = false"
                                ></v-date-picker>
                            </v-menu>   
                            <v-text-field
                                label="Inseminasi"
                                v-model="form.inseminasi"
                                outlined
                                dense
                            ></v-text-field>
                            <v-radio-group v-model="form.obat_cacing" label="Obat Cacing" row>
                                <v-radio
                                    class="ml-5"
                                    label="Sudah"
                                    value="1"
                                ></v-radio>
                                <v-radio
                                    class="ml-5"
                                    label="Belum"
                                    value="0"
                                ></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                </v-container>
                <div class="subtitle font-weight-bold mt-5 ml-5">
                    Verifikasi Data
                </div>
                <v-container>
                    <v-text-field
                        label="Harga Ditetapkan"
                        v-model="ternak.ternak_harga"
                        type="number"
                        outlined
                        dense
                    ></v-text-field>
                    <v-textarea
                    v-model="ternak.verifikasi_note"
                    outlined
                    dense
                    label="Catatan Verifikasi"
                    auto-grow
                    value="Tuliskan pesan verifikasi"
                    ></v-textarea>
                    <v-row class="text-right">
                        <v-col>
                            <v-btn
                            type="submit"
                            color="primary"
                            >
                                Verifikasi
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
import { mapGetters } from "vuex";
import axios from "axios";

export default {
    components: {
        // DatePicker
    },
    data() {
        return {
            id_ternak: '',
            form: {},
            ternak: {},
            breadcrumbs: [
                {
                    text: 'Modal',
                    disabled: true,
                },
                {
                    text: 'Persetujuan',
                    disabled: true,
                },
                {
                    text: 'Verifikasi Data',
                    disabled: true,
                },
            ],
            menu: false,
        }
    },
    mounted() {
        // this.$store.dispatch(FETCH_GOL);
        this.id_ternak = this.$route.params.id || ''

        if (this.$route.params.id){
            const ternak_get = axios.get("/ternak/" + this.id_ternak)
            const pemeriksaan_get = axios.get("/pemeriksaan/" + this.id_ternak)
            axios.all([ternak_get, pemeriksaan_get]).then(axios.spread((...responses) => {
                this.ternak = responses[0].data.ternak
                this.jenis = {
                    'id': responses[0].data.ternak.id_jenis,
                    'jenis_nama': responses[0].data.ternak.jenis_nama
                }
                if (responses[1].data.pemeriksaan != null){
                    this.form = responses[1].data.pemeriksaan
                }
            }))
            // axios
            // .get("/ternak/"+ this.$route.params.id)
            // .then((res) => {
            //     this.ternak = res.data.ternak
            //     this.jenis = {
            //         'id': res.data.ternak.id_jenis,
            //         'jenis_nama': res.data.ternak.jenis_nama
            //     }
            // })
            // .catch((err) => console.log(err));
        }
    },
    computed: {
        ...mapGetters(["currentUser"])
    },
    methods: {
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        onSubmit(){
            this.form.id_ternak = this.id_ternak
            // this.form.id_dokter = this.currentUser.id
            this.ternak.verifikasi_st = 1

            const ternak_put = axios.put("/ternak/" + this.id_ternak, this.ternak)

            if (this.form.id){
                const pemeriksaan_put = axios.put("/pemeriksaan/" + this.id_ternak, this.form)
                axios.all([ternak_put, pemeriksaan_put]).then(() => {
                    this.$router.push({ path: '/modal/persetujuan'})
                })
            } else {
                const pemeriksaan_post = axios.post("/pemeriksaan", this.form)
                axios.all([ternak_put, pemeriksaan_post]).then(() => {
                    this.$router.push({ path: '/modal/persetujuan'})
                })
            }
            
            
                        
        }
    }
}
</script>