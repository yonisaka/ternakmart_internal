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
                    :to="'pengajuan/form'"
                    dense
                    color="primary"
                    >
                    Tambah Data
                    </v-btn>
                    
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
                        <template v-slot:[`item.harga_pengajuan`]="{ item }">
                            {{ formatPrice(item.harga_pengajuan) }}
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
                            :to="'pengajuan/form/'+item.id"
                            >
                                <v-icon>
                                mdi-pencil
                                </v-icon>
                            </v-btn>
                            <v-btn
                            small 
                            icon
                            color="red"
                            @click="deleteItem(item.id)"
                            >
                                <v-icon >
                                mdi-delete
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
                <v-dialog v-model="dialogDelete" max-width="400px">
                    <v-card>
                        <v-card-title class="headline">
                            <span class="mx-auto"> {{ dialogText }} </span>
                        </v-card-title>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                        <v-spacer></v-spacer>
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
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
import { mapGetters } from "vuex";
import store from "@/store";
import axios from "axios";
import { FETCH_TERNAK } from "@/store/actions.type";
// import TableTernak from "@/components/TableTernak";

export default{
    data() {
        return {
            page: 1,
            pageCount: 0,
            itemsPerPage: 15,
            id_ternak: '',
            dialogText: '',
            foto:'',
            dialogDelete: false,
            dialogImage: false,
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
                { text: "Hewan Ternak", align: "start", sortable: false, value: "ternak_nama" },
                { text: "Foto", align: "center", sortable: false, value: "foto" },
                { text: "Breed", value: "jenis_nama", sortable: false },
                { text: "Berat (kg)", value: "ternak_berat", sortable: false },
                { text: "Lingkar Perut (cm)", value: "lingkar_perut", sortable: false },
                { text: "Umur (bln)", value: "ternak_umur", sortable: false },
                { text: "Harga Pengajuan", value: "harga_pengajuan", sortable: false},
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
    watch: {
        dialogDelete (val) {
            val || this.closeDelete()
        },
    },
    methods: {
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        showImage (file_path) {
            this.foto = file_path
            this.dialogImage = true
        },
        deleteItem (id) {
            this.id_ternak = id
            this.dialogText = 'Yakin menghapus data ini?'
            this.dialogDelete = true
        },
        closeDelete () {
            this.dialogDelete = false
        },
        deleteItemConfirm () {
            axios
            .delete("/ternak/"+ this.id_ternak)
            .then((res) => {
                console.log(res.data.message)
                this.dialogDelete = false
                this.$router.go()
            })
            .catch((err) => console.log(err));
        },
    }
}
</script>
