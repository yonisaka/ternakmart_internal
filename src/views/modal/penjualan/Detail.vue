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
                    to="/modal/penjualan"
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
                            <v-col cols="12" sm="12" lg="6">
                                <v-img
                                :lazy-src="ternak.file_path"
                                :src="ternak.file_path"
                                aspect-ratio="1.8"
                                @error="$event.target.src='img/default.png'"
                                ></v-img>
                            </v-col>
                            <v-col cols="12" sm="12" lg="6">
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
                                <v-col cols="12" sm="12" lg="6">
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Anamnesa </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.anamnesa }} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Ekspresi Muka </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.ekspresi_muka }} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row v-if="ternak.jenis_kelamin == 'B'">
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Kondisi Badan </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.kondisi_badan }} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Frekuensi Nafas </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.frekuensi_nafas }} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Pulsus </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.pulsus }} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Suhu </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.suhu }} </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="12" sm="12" lg="6">
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Kelenjar Limfe </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.kelenjar_limfe }} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Alat Pernafasan </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.alat_pernafasan }} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Alat Peredaran Darah </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.alat_peredaran_darah }} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Alat Pencernaan </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.alat_pencernaan }} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Alat Kelamin dan Perkencingan </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.alat_kelamin_perkencingan }} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Saraf </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.saraf }} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Anggota Gerak </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.anggota_gerak }} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Lain-lain </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ form.lain_lain }} </div>
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
                                <v-col cols="12" lg="6" sm="12">
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Harga Ditetapkan </div>
                                        </v-col>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black">: {{ ternak.ternak_harga }} </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="12" lg="6" sm="12">
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