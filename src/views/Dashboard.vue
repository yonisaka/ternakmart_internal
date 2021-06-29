<template>
    <v-container>
        <v-breadcrumbs
            :items="breadcrumbs"
            divider="\"
        ></v-breadcrumbs>
        <v-row class="mx-3">
            <v-col lg="3" sm="6" col="6">
                <v-card
                    class="mx-auto"
                    flat
                >
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold headline mb-4 mt-1" style="color: #7f8c8d">
                        {{ total_ternak }}
                        </v-list-item-title>
                        <div class="overline font-weight-bold">
                        Jumlah Hewan Ternak
                        </div>
                    </v-list-item-content>

                    <v-icon
                    size="60"
                    color="#3498db"
                    class="ma-5"
                    >mdi-cow</v-icon>
                    </v-list-item>
                </v-card>
            </v-col>
            <v-col lg="3" sm="6" col="6">
                <v-card
                    class="mx-auto"
                    flat
                >
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold headline mb-4 mt-1" style="color: #7f8c8d">
                        {{ total_transaksi }}
                        </v-list-item-title>
                        <div class="overline font-weight-bold">
                        Ternak Terjual
                        </div>
                    </v-list-item-content>

                    <v-icon
                    size="50"
                    color="#9b59b6"
                    class="ma-5"
                    >mdi-cart-arrow-down</v-icon>
                    </v-list-item>
                </v-card>
            </v-col>
            <v-col lg="3" sm="6" col="6">
                <v-card
                    class="mx-auto"
                    flat
                >
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold headline mb-4 mt-1" style="color: #7f8c8d">
                        {{ total_ternak_verifikasi }}
                        </v-list-item-title>
                        <div class="overline font-weight-bold">
                        Verifikasi
                        </div>
                    </v-list-item-content>

                    <v-icon
                    size="50"
                    color="#e74c3c"
                    class="ma-5"
                    >mdi-check-decagram</v-icon>
                    </v-list-item>
                </v-card>
            </v-col>
            <v-col lg="3" sm="6" col="6">
                <v-card
                    class="mx-auto"
                    flat
                >
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold headline mb-4 mt-1" style="color: #7f8c8d">
                        {{ formatPrice(total_ternak_harga_transaksi) }}
                        </v-list-item-title>
                        <div class="overline font-weight-bold">
                        Total Transaksi
                        </div>
                    </v-list-item-content>

                    <v-icon
                    size="50"
                    color="#f1c40f"
                    class="ma-5"
                    >mdi-finance</v-icon>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mx-3">
            <v-col cols="12" sm="12" lg="8">
                <v-card
                    class="mx-auto text-center"
                    color="#fff"
                    dark
                    flat
                >
                    <v-card-text>
                    <v-sheet color="rgba(0, 0, 0, .12)">
                        <v-sparkline
                        :value="value"
                        color="rgba(255, 255, 255, .7)"
                        height="100"
                        padding="24"
                        stroke-linecap="round"
                        smooth
                        >
                        <template v-slot:label="item">
                            {{ item.value }}
                        </template>
                        </v-sparkline>
                    </v-sheet>
                    </v-card-text>

                    <v-card-text>
                    <div class="display-1 font-weight-medium grey--text">
                        Total Transaksi 7 Hari terakhir
                    </div>
                    </v-card-text>

                    <v-divider></v-divider>

                    <!-- <v-card-actions class="justify-center">
                    <v-btn
                        block
                        text
                    >
                        Download Laporan
                    </v-btn>
                    </v-card-actions> -->
                </v-card>
            </v-col>
            <v-col cols="12" sm="12" lg="4">
                <v-card flat>
                    <v-card-title>
                        Aktivitas
                    </v-card-title>
                    <v-card-subtitle>
                        Berikut merupakan total data
                    </v-card-subtitle>
                    <v-card-text>
                        <v-list-item two-line>
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-bold subtitle ">
                                Total Dokter
                                </v-list-item-title>
                            </v-list-item-content>

                            <v-chip
                            color="primary"
                            >
                                {{ total_dokter }}
                            </v-chip>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item two-line>
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-bold subtitle ">
                                Total Customer
                                </v-list-item-title>
                            </v-list-item-content>

                            <v-chip
                            color="secondary"
                            >
                                {{ total_customer }}
                            </v-chip>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item two-line>
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-bold subtitle ">
                                Total Menu
                                </v-list-item-title>
                            </v-list-item-content>

                            <v-chip
                            class="white--text"
                            color="red"
                            >
                                {{ total_menu }}
                            </v-chip>
                        </v-list-item>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    disabled: true,
                }
            ],
            value: [],
            // value: [
            //     423,
            //     446,
            //     675,
            //     510,
            //     590,
            //     610,
            //     160,
            // ],
            total_ternak: '',
            total_transaksi: '',
            total_ternak_verifikasi: '',
            total_ternak_harga_transaksi: '',
            total_dokter: '',
            total_customer: '',
            total_menu: '',
        }
    },
    mounted() {
        const total_ternak = axios.get("/total_ternak")
        const total_transaksi = axios.get("/total_transaksi")
        const total_ternak_verifikasi = axios.get("/total_ternak_verifikasi")
        const total_ternak_harga_transaksi = axios.get("/total_ternak_harga_transaksi")
        const total_dokter = axios.get("/total_user/" + 2)
        const total_customer = axios.get("/total_user/" + 4)
        const total_menu = axios.get("/total_menu")
        const chart_transkasi = axios.get("/chart_transkasi")
        axios.all([
            total_ternak, 
            total_transaksi, 
            total_ternak_verifikasi, 
            total_ternak_harga_transaksi,
            total_dokter,
            total_customer,
            total_menu,
            chart_transkasi,
        ]).then(axios.spread((...responses) => {
            this.total_ternak = responses[0].data
            this.total_transaksi = responses[1].data
            this.total_ternak_verifikasi = responses[2].data
            this.total_ternak_harga_transaksi = responses[3].data.total_transaksi
            this.total_dokter = responses[4].data
            this.total_customer = responses[5].data
            this.total_menu = responses[6].data
            this.value = responses[7].data
        }))
    },
    computed: {
    },
    methods: {
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
    }
}
</script>