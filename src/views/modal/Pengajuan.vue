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
                        Pengajuan Ternak
                        </div>  
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn
                    dense
                    color="primary"
                    >
                    <v-icon>mdi-plus</v-icon>
                    Tambah</v-btn>
                    
                </v-toolbar>
                <v-row>
                    <v-col cols="4">
                        <v-text-field
                            class="ml-2"
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
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
                        item-key="ternak.id"
                        >
                        <template v-slot:[`item.ternak_harga`]="{ item }">
                            {{ formatPrice(item.ternak_harga) }}
                        </template>
                        <template v-slot:[`item.tgl_penerimaan`]="{ item }">
                            {{ item.tgl_penerimaan|moment('MMM Do YYYY') }}
                        </template>
                        <template v-slot:[`item.actions`]="{ item }">
                            <v-btn 
                            small 
                            icon
                            color="primary" 
                            class="mr-2" 
                            :to="'pengajuan/'+item.id"
                            >
                                <v-icon>
                                mdi-pencil
                                </v-icon>
                            </v-btn>
                            <v-btn
                            small 
                            icon
                            color="red"
                            @click="deleteTernak(item.id)"
                            >
                                <v-icon >
                                mdi-delete
                                </v-icon>
                            </v-btn>
                        </template>
                        </v-data-table>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
import { mapGetters } from "vuex";
import store from "@/store";
import { FETCH_TERNAK } from "@/store/actions.type";
// import TableTernak from "@/components/TableTernak";

export default{
    data() {
        return {
            search: '',
            breadcrumbs: [
                {
                    text: 'Modal',
                    disabled: true,
                },
                {
                    text: 'Pengajuan',
                    disabled: true,
                },
            ],
             headers: [
                { text: "ID", align: "start", sortable: false, value: "id" },
                { text: "Nama", align: "start", sortable: false, value: "ternak_nama" },
                { text: "Jenis", value: "jenis_nama", sortable: false },
                { text: "Berat (kg)", value: "ternak_berat", sortable: false },
                { text: "Tinggi (cm)", value: "ternak_tinggi", sortable: false },
                { text: "Umur (th)", value: "ternak_umur", sortable: false },
                { text: "Harga", value: "ternak_harga", sortable: false},
                { text: "Tanggal Penerimaan", value: "tgl_penerimaan", sortable: false},
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
