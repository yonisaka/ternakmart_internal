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
                        Persetujuan Ternak
                        </div>  
                    </v-toolbar-title>
                    
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
                            :items="ternak"
                            :search="search"
                            :page.sync="page"
                            item-key="ternak.id"
                            :items-per-page="itemsPerPage"
                            hide-default-footer
                            class="elevation-1"
                            @page-count="pageCount = $event"
                        >
                        <template v-slot:[`item.harga_pengajuan`]="{ item }">
                            {{ formatPrice(item.harga_pengajuan) }}
                        </template>
                        <template v-slot:[`item.verifikasi_st`]="{ item }">
                            <v-chip
                            v-if="item.verifikasi_st === '1'"
                            class="ma-2"
                            color="green"
                            text-color="white"
                            >
                            Verified
                            </v-chip>
                            <v-chip
                            v-else
                            class="ma-2"
                            color="orange"
                            text-color="white"
                            >
                            Waiting
                            </v-chip>
                            
                        </template>
                        <template v-slot:[`item.actions`]="{ item }">
                            <v-btn 
                            small 
                            icon
                            color="primary" 
                            class="mr-2" 
                            :to="'persetujuan/detail/'+item.id"
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
    </v-container>
</template>
<script>
import { mapGetters } from "vuex";
import store from "@/store";
// import axios from "axios";
import { FETCH_TERNAK } from "@/store/actions.type";
// import TableTernak from "@/components/TableTernak";

export default{
    data() {
        return {
            page: 1,
            pageCount: 0,
            itemsPerPage: 15,
            id_ternak: '',
            search: '',
            breadcrumbs: [
                {
                    text: 'Modal',
                    disabled: true,
                },
                {
                    text: 'Persetujuan',
                    disabled: true,
                },
            ],
             headers: [
                { text: "ID", align: "start", sortable: true, value: "id" },
                { text: "Hewan Ternak", align: "start", sortable: true, value: "ternak_nama" },
                { text: "RFID", align: "start", sortable: true, value: "rfid" },
                { text: "Breed", value: "jenis_nama", sortable: false },
                { text: "Berat (kg)", value: "ternak_berat", sortable: false },
                { text: "Lingkar Perut (cm)", value: "lingkar_perut", sortable: false },
                { text: "Umur (bln)", value: "ternak_umur", sortable: false },
                { text: "Harga Pengajuan", value: "harga_pengajuan", sortable: false},
                { text: "Status", align: "center", value: "verifikasi_st", sortable: false},
                { text: "Actions", value: "actions", sortable: false },
            ],

        }
    },
    components: {
        // TableTernak
    },
    beforeRouteEnter(to, from, next) {
        Promise.all([
        store.dispatch(FETCH_TERNAK, to.params.slug),
        ]).then(() => {
        next();
        });
    },
    computed: {
        ...mapGetters(["ternak"]),
    },
    methods: {
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
    }
}
</script>
