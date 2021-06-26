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
                        <!-- <template v-slot:[`item.actions`]="{ item }">
                            <v-btn 
                            small 
                            icon
                            color="primary" 
                            class="mr-2" 
                            @click="showForm(item.id)"
                            >
                                <v-icon>
                                mdi-eye
                                </v-icon>
                            </v-btn>
                        </template> -->
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
    </v-container>
</template>
<script>
import { mapGetters } from "vuex";
import { FETCH_TRANSAKSI } from "@/store/actions.type";
import store from "@/store";
// import axios from "axios";
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
                { text: "Customer", align: "start", sortable: false, value: "name" },
                { text: "Harga Ternak", align: "center", sortable: false, value: "ternak_harga" },
                { text: "Masa Perawatan", align: "center", sortable: false, value: "masa_perawatan" },
                { text: "Total", align: "center", sortable: false, value: "total_harga" },
                { text: "Status", align: "center", sortable: false, value: "transaksi_st" },
                { text: "Tanggal", align: "center", sortable: false, value: "transaksi_tanggal" },
                // { text: "Actions", align: "center", sortable: false, value: "actions" },
            ],
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
    }
}
</script>