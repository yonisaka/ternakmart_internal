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
                        Data Pengiriman
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
                            :items="pengiriman"
                            :search="search"
                            :page.sync="page"
                            item-key="pengiriman.id"
                            :items-per-page="itemsPerPage"
                            hide-default-footer
                            class="elevation-1"
                            @page-count="pageCount = $event"
                        >
                        <template v-slot:[`item.pengiriman`]="{ item }">
                            <span>{{ item.lokasi_ternak }}</span>
                            <span class="px-3">
                                <v-icon>
                                mdi-ray-start-arrow
                                </v-icon>
                            <span>{{ item.lokasi_pengiriman }}</span>
                            </span>
                        </template>
                        <template v-slot:[`item.distance`]="{ item }">
                            <span>{{ item.distance }} km</span>
                        </template>
                        <template v-slot:[`item.harga_ongkir`]="{ item }">
                            <span>{{ formatPrice(item.harga_ongkir) }}</span>
                        </template>
                        <template v-slot:[`item.total_harga`]="{ item }">
                            <span>{{ formatPrice(item.total_harga) }}</span>
                        </template>
                        <template v-slot:[`item.actions`]="{ item }">
                            <v-btn 
                            small 
                            icon
                            color="primary" 
                            class="mr-2" 
                            @click="showForm(item.id)"
                            >
                                <v-icon>
                                mdi-pencil
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
    </v-container>
</template>
<script>
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
                    text: 'Pengiriman',
                    disabled: true,
                },
            ],
            headers: [
                { text: "ID", align: "start", sortable: false, value: "id" },
                { text: "Customer", align: "start", sortable: false, value: "nama_customer" },
                { text: "Pengiriman", align: "center", sortable: false, value: "pengiriman" },
                { text: "Jarak", align: "center", sortable: false, value: "distance" },
                { text: "Harga Ongkir", align: "center", sortable: false, value: "harga_ongkir" },
                // { text: "Harga Ternak", align: "center", sortable: false, value: "ternak_harga" },
                { text: "Harga Ternak", align: "center", sortable: false, value: "total_harga" },
                { text: "Status", align: "center", sortable: false, value: "transaksi_st" },
                { text: "Tanggal", align: "center", sortable: false, value: "transaksi_tanggal" },
                { text: "Actions", align: "center", sortable: false, value: "actions" },
            ],
            pengiriman:[]
        }
    },
    mounted() {
        axios.get("/transaksi/pengiriman")
            .then((res) => {
                console.log(res.data.pengiriman)
                this.pengiriman = res.data.pengiriman
            })
    },
    methods: {
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
    }
}
</script>