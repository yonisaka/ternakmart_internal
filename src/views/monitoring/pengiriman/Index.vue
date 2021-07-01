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
                        <template v-slot:[`item.pengiriman_st`]="{ item }">
                            <span>{{ item.pengiriman_st }}</span>
                            <v-btn 
                            x-small 
                            icon
                            color="primary" 
                            class="mx-2" 
                            @click="showDialog(item.id)"
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
        <v-dialog v-model="dialog" max-width="400px">
            <v-card>
                <v-card-title class="headline">
                    <span class="mx-auto"> Status Pengiriman </span>
                </v-card-title>
                <v-card-text>
                    <v-select
                    v-model="detail.pengiriman_st"
                    :items="items"
                    label="Status Pengiriman"
                    ></v-select>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDialog">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="dialogItemConfirm(detail.id)">Update</v-btn>
                <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>
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
                // { text: "Tanggal", align: "center", sortable: false, value: "transaksi_tanggal" },
                // { text: "Actions", align: "center", sortable: false, value: "actions" },
                { text: "Status Pengiriman", align: "center", sortable: false, value: "pengiriman_st" },
            ],
            pengiriman:[],
            items: ['Sedang Disiapkan', 'Dalam Perjalanan', 'Sudah Diterima'],
            dialog: false,
            detail: {}
        }
    },
    mounted() {
        axios.get("/transaksi/pengiriman")
            .then((res) => {
                this.pengiriman = res.data.pengiriman
            })
    },
    methods: {
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        closeDialog () {
            this.dialog = false
        },
        showDialog(id) {
            console.log(id)
            axios
            .get("/transaksi/"+ id +"/detail")
            .then((res) => {
                console.log(res.data.cart)
                this.detail = res.data.cart
                this.dialog = true
            })
        },
        dialogItemConfirm (id) {
            // console.log(id)
            // console.log(this.detail)
            axios
            .put("/transaksi/"+ id, this.detail)
            .then((res) => {
                console.log(res)
                this.snackbar = true
                this.message = 'Berhasil Update Data'
                this.color = '#139CA4'
                this.dialogStatus = false
                setTimeout( () => this.$router.go(), 1000);
            })
            .catch((err) => console.log(err));
        },
    }
}
</script>