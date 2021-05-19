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
                            :items="transaksi"
                            :search="search"
                            :page.sync="page"
                            item-key="transaksi.id"
                            :items-per-page="itemsPerPage"
                            hide-default-footer
                            class="elevation-1"
                            @page-count="pageCount = $event"
                        >
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
                    text: 'Pengiriman',
                    disabled: true,
                },
            ],
            headers: [
                { text: "ID", align: "start", sortable: false, value: "id" },
                { text: "Customer", align: "start", sortable: false, value: "name" },
                { text: "Pengiriman", align: "center", sortable: false, value: "pengiriman" },
                { text: "Harga Ongkir", align: "center", sortable: false, value: "harga_ongkir" },
                { text: "Harga Ternak", align: "center", sortable: false, value: "ternak_harga" },
                { text: "Total", align: "center", sortable: false, value: "total_harga" },
                { text: "Status", align: "center", sortable: false, value: "transaksi_st" },
                { text: "Tanggal", align: "center", sortable: false, value: "transaksi_tanggal" },
                { text: "Actions", align: "center", sortable: false, value: "actions" },
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
      
    }
}
</script>