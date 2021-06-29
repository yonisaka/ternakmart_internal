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
                        Data Transaksi
                        </div>  
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-row>
                    <v-col sm="12" md="4">
                        <v-text-field
                            class="ml-2"
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            solo
                            clearable
                            hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-data-table
                            :headers="headers"
                            :items="transaksi"
                            :search="search"
                            :page.sync="page"
                            item-key="transaksi.id"
                            :items-per-page="itemsPerPage"
                            hide-default-footer
                            class="elevation-1"
                            @page-count="pageCount = $event"
                        >
                        <template v-slot:[`item.foto`]="{ item }">
                             <v-img
                            max-height="70px"
                            max-width="70px"
                            :lazy-src="item.file_path"
                            :src="item.file_path"
                            aspect-ratio="1.8"
                            @error="$event.target.src='img/default.png'"
                            @click="showImage(item.file_path)"
                            ></v-img>
                        </template>
                        <template v-slot:[`item.masa_perawatan`]="{ item }">
                            {{ item.masa_perawatan }} Bulan
                        </template>
                        <template v-slot:[`item.ternak_harga`]="{ item }">
                            {{ formatPrice(item.ternak_harga) }}
                        </template>
                        <template v-slot:[`item.total_harga`]="{ item }">
                            {{ formatPrice(item.total_harga) }}
                        </template>
                        <template v-slot:[`item.transaksi_tanggal`]="{ item }">
                            {{ item.transaksi_tanggal|moment('MMM Do YYYY') }}
                        </template>
                        <template v-slot:[`item.transaksi_st`]="{ item }">
                            <v-chip v-if="item.transaksi_st == 'PAID'" 
                            color="success"
                            text-color="white"
                            small
                            >
                                PAID
                            </v-chip>
                            <v-chip v-else-if="item.transaksi_st == 'PENDING'" 
                            color="orange"
                            text-color="white"
                            small
                            >
                                PENDING
                            </v-chip>
                            <v-chip v-else-if="item.transaksi_st == 'EXPIRED'" 
                            color="red"
                            text-color="white"
                            small
                            >
                                EXPIRED
                            </v-chip>
                            <v-chip v-else-if="item.transaksi_st == 'CART'" 
                            color="orange"
                            text-color="white"
                            small
                            >
                                Cart
                            </v-chip>
                        </template>
                        <template v-slot:[`item.actions`]="{ item }">
                            <v-btn 
                            small 
                            icon
                            color="primary" 
                            class="mr-2" 
                            @click="showDetail(item.id)"
                            >
                                <v-icon>
                                mdi-eye
                                </v-icon>
                            </v-btn>
                        </template>
                        </v-data-table>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-pagination
                            v-model="page"
                            :length="pageCount"
                        ></v-pagination>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-dialog v-model="dialogDetail" max-width="600px">
            <v-card>
                <v-card-title class="headline">
                    <span> Detail Transaksi </span>
                    <v-spacer></v-spacer>
                    <span class="subtitle grey--text"> {{ detail.invoice }}</span>
                </v-card-title>
                <v-divider class="mx-5"></v-divider>
                <v-card-text>
                    <div class="mt-5 ml-3">
                        <v-row >
                            <v-col cols="4">Hewan Ternak</v-col>
                            <v-col cols="1">:</v-col>
                            <v-col cols="7">{{detail.ternak_nama}}</v-col>
                        </v-row>
                        <!-- <v-row>
                            <v-col cols="4">Pengiriman</v-col>
                            <v-col cols="1">:</v-col>
                            <v-col cols="7">{{detail.ternak_nama}}</v-col>  
                        </v-row> -->
                        <v-row>
                            <v-col cols="4">Penerima</v-col>
                            <v-col cols="1">:</v-col>
                            <v-col cols="7">{{detail.nama_penerima}}</v-col>  
                        </v-row>
                        <v-row>
                            <v-col cols="4">Masa Perawatan</v-col>
                            <v-col cols="1">:</v-col>
                            <v-col cols="7">{{detail.masa_perawatan}} Bulan</v-col>  
                        </v-row>
                        <v-row>
                            <v-col cols="4">Harga Perawatan</v-col>
                            <v-col cols="1">:</v-col>
                            <v-col cols="7">Rp. {{formatPrice(detail.masa_perawatan*detail.perawatan_harga)}}</v-col>  
                        </v-row>
                        <v-row>
                            <v-col cols="4">Harga Pengiriman</v-col>
                            <v-col cols="1">:</v-col>
                            <v-col cols="7">Rp. {{formatPrice(detail.harga_ongkir)}}</v-col>  
                        </v-row>
                        <v-row>
                            <v-col cols="4">Harga Ternak</v-col>
                            <v-col cols="1">:</v-col>
                            <v-col cols="7">Rp. {{formatPrice(detail.ternak_harga)}}</v-col>  
                        </v-row>
                        <v-row class="font-weight-bold">
                            <v-col cols="4">Total Harga</v-col>
                            <v-col cols="1">:</v-col>
                            <v-col cols="7">Rp. {{formatPrice(detail.total_harga)}}</v-col>  
                        </v-row>
                    </div>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDetail">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialogImage" max-width="700px">
            <v-img
            max-height="700px"
            max-width="700px"
            :src="foto"
            aspect-ratio="1.8"
            @error="$event.target.src='img/default.png'"
            ></v-img>
        </v-dialog>
    </v-container>
</template>
<script>
import { mapGetters } from "vuex";
import { FETCH_TRANSAKSI } from "@/store/actions.type";
import store from "@/store";
import axios from "axios";
// import ApiService from "@/common/api.service";

export default {
    data() {
        return {
            page: 1,
            pageCount: 0,
            itemsPerPage: 10,
            search: '',
            breadcrumbs: [
                {
                    text: 'Monitoring',
                    disabled: true,
                },
                {
                    text: 'Transaksi',
                    disabled: true,
                },
            ],
            headers: [
                { text: "ID", align: "start", sortable: false, value: "id" },
                { text: "Invoice", align: "start", sortable: true, value: "invoice" },
                { text: "Hewan Ternak", align: "start", sortable: false, value: "ternak_nama" },
                { text: "Foto", align: "start", sortable: false, value: "foto" },
                { text: "Customer", align: "start", sortable: false, value: "name" },
                { text: "Harga Ternak", align: "center", sortable: false, value: "ternak_harga" },
                { text: "Masa Perawatan", align: "center", sortable: false, value: "masa_perawatan" },
                { text: "Total", align: "center", sortable: false, value: "total_harga" },
                { text: "Status", align: "center", sortable: false, value: "transaksi_st" },
                { text: "Tanggal", align: "center", sortable: false, value: "transaksi_tanggal" },
                { text: "Actions", align: "center", sortable: false, value: "actions" },
            ],
            dialogDetail: false,
            dialogImage: false,
            detail: {}
        }
    },
    beforeRouteEnter(to, from, next) {
        Promise.all([
        store.dispatch(FETCH_TRANSAKSI, to.params.slug),
        ]).then(() => {
        next();
        });
    },
    computed: {
        ...mapGetters(["transaksi"]),
    },
    methods: {
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        closeDetail () {
            this.dialogDetail = false
        },
        showDetail(id) {
            axios
            .get("/transaksi/"+ id +"/detail")
            .then((res) => {
                console.log(res.data.cart)
                this.detail = res.data.cart
                this.dialogDetail = true
            })
        },
        showImage (file_path) {
            this.foto = file_path
            this.dialogImage = true
        },
    }
}
</script>