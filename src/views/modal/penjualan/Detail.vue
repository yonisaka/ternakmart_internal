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
                            <v-col cols="6" sm="12" lg="12">
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
                            <v-col cols="6" sm="12" lg="12">
                                <v-img
                                :lazy-src="ternak.file_path"
                                :src="ternak.file_path"
                                aspect-ratio="1.8"
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
                    <v-card
                    class="mx-auto"
                    elevation="0"
                    color="blue-grey lighten-5"
                    >
                        <v-card-text>
                            <v-row>
                                <v-col cols="6" sm="12" lg="12">
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> RFID </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.rfid }} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Temperatur </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.temperatur }} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row v-if="ternak.jenis_kelamin == 'B'">
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Umur Bunting </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.umur_bunting }} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Tonus Rumen </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.tonus_rumen }} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Status Vaksin </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: 
                                                <span v-if="form.vaksin_st == '1'">Sudah</span>
                                                <span v-if="form.vaksin_st == '0'">Belum</span>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="6" sm="12" lg="12">
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Pengobatan </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.pengobatan }} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Riwayat Kasus </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.riwayat_kasus }} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row v-if="ternak.jenis_kelamin == 'B'">
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Perkiraan Lahir </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.perkiraan_lahir }} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Inseminasi</div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.inseminasi }} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Obat Cacing </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: 
                                                <span v-if="form.obat_cacing == '1'">Sudah</span>
                                                <span v-if="form.obat_cacing == '0'">Belum</span>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-container>
                <div class="subtitle font-weight-bold mt-5 ml-5">
                    Verifikasi Data
                </div>
                <v-container>
                    <v-card
                    class="mx-auto"
                    elevation="0"
                    color="blue-grey lighten-5"
                    >
                        <v-card-text>
                            <v-row>
                                <v-col cols="6">
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Harga Ditetapkan </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ ternak.ternak_harga }} </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="6">
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Catatan Verifikasi </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ ternak.verifikasi_note }} </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
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
    }
}
</script>