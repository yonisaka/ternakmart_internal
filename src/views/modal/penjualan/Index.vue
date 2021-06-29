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
                        Penjualan Ternak
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
                            :items="verified"
                            :search="search"
                            :page.sync="page"
                            item-key="verified.id"
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
                        <template v-slot:[`item.ternak_harga`]="{ item }">
                            {{ formatPrice(item.ternak_harga) }}
                        </template>
                        <template v-slot:[`item.tgl_penerimaan`]="{ item }">
                            {{ item.tgl_penerimaan|moment('MMM Do YYYY') }}
                        </template>
                        <template v-slot:[`item.diskon_st`]="{ item }">
                            <div v-if="item.diskon_st === '1'">
                                <v-chip
                                    class="ma-2"
                                    color="green"
                                    text-color="white"
                                    @click="diskonItem(item.id)"
                                >
                                Rp. {{ formatPrice(item.diskon_harga) }}
                                </v-chip>
                            </div>
                            <div v-else>
                                <v-chip
                                    class="ma-2"
                                    color="grey"
                                    text-color="white"
                                    @click="diskonItem(item.id)"
                                >
                                <v-icon>
                                mdi-plus
                                </v-icon>
                                Diskon
                                </v-chip>
                            </div>
                        </template>
                        <template v-slot:[`item.ternak_st`]="{ item }">
                            <v-chip
                            v-if="item.ternak_st === '1'"
                            class="ma-2"
                            color="green"
                            text-color="white"
                            @click="statusItem(item.id,'0')"
                            >
                            Aktif
                            </v-chip>
                            <v-chip
                            v-else
                            class="ma-2"
                            color="red"
                            text-color="white"
                            @click="statusItem(item.id,'1')"
                            >
                            Tidak Aktif
                            </v-chip>
                            
                        </template>
                        <template v-slot:[`item.actions`]="{ item }">
                            <v-btn 
                            small 
                            icon
                            color="primary" 
                            class="mr-2" 
                            :to="'penjualan/detail/'+item.id"
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
        <v-dialog v-model="dialogImage" max-width="700px">
            <v-img
            max-height="700px"
            max-width="700px"
            :src="foto"
            aspect-ratio="1.8"
            @error="$event.target.src='img/default.png'"
            ></v-img>
        </v-dialog>
        <v-dialog v-model="dialogStatus" max-width="400px">
            <v-card>
                <v-card-title class="headline">
                    <span class="mx-auto"> {{ dialogText }} </span>
                </v-card-title>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeStatus">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="statusItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDiskon" max-width="400px">
            <v-card>
                <v-card-title class="headline">
                    <span class="mx-auto"> {{ dialogText }} </span>
                </v-card-title>
                <v-card-text>
                    <v-text-field
                        v-model="form.diskon_harga"
                        color="teal darken-2"
                        label="Masukkan Diskon"
                        outlined
                        dense
                        required
                        ></v-text-field>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDiskon">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="diskonItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-snackbar
            v-model="snackbar"
            timeout="2000"
            :color="color"
            >
            {{ message }}
        </v-snackbar>
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
            snackbar: false,
            message: '',
            page: 1,
            pageCount: 0,
            itemsPerPage: 15,
            id_ternak: '',
            form: {},
            search: '',
            foto:'',
            dialogText: '',
            dialogStatus: false,
            dialogDiskon: false,
            dialogImage: false,
            breadcrumbs: [
                {
                    text: 'Modal',
                    disabled: true,
                },
                {
                    text: 'Penjualan',
                    disabled: true,
                },
            ],
             headers: [
                { text: "ID", align: "start", sortable: true, value: "id" },
                { text: "Hewan Ternak", align: "start", sortable: true, value: "ternak_nama" },
                { text: "Foto", align: "center", sortable: false, value: "foto" },
                { text: "Breed", value: "jenis_nama", sortable: false },
                { text: "Berat (kg)", value: "ternak_berat", sortable: false },
                { text: "Lingkar Perut (cm)", value: "lingkar_perut", sortable: false },
                { text: "Umur (bln)", value: "ternak_umur", sortable: false },
                { text: "Harga", value: "ternak_harga", sortable: false},
                { text: "Tanggal Penerimaan", value: "tgl_penerimaan", sortable: false},
                { text: "Diskon", align: "center", value: "diskon_st", sortable: false},
                { text: "Status Jual", align: "center", value: "ternak_st", sortable: false},
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
        verified() {
            return this.ternak.filter(ternak => {
                return ternak.verifikasi_st == '1'
            })
        }
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
        statusItem (id, ternak_st) {
            this.id_ternak = id
            axios
            .get("/ternak/"+ this.id_ternak)
            .then((res) => {
                this.form = res.data.ternak
                this.form.ternak_st = ternak_st
                this.dialogText = 'Yakin mengupdate data ini?'
                this.dialogStatus = true
            })
            
        },
        diskonItem (id) {
            this.id_ternak = id
            axios
            .get("/ternak/"+ this.id_ternak)
            .then((res) => {
                this.form = res.data.ternak
                this.form.diskon_st = '1'
                this.dialogText = 'Diskon Ternak'
                this.dialogDiskon = true
            })
        },
        closeDiskon () {
            this.dialogDiskon = false
        },
        closeStatus () {
            this.dialogStatus = false
        },
        statusItemConfirm () {
            axios
            .put("/ternak/"+ this.id_ternak, this.form)
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
        diskonItemConfirm () {
            if(this.form.diskon_harga == null || this.form.diskon_harga == '0'){
                this.form.diskon_st = '0';
            }
            // console.log(this.form)
            axios
            .put("/ternak/"+ this.id_ternak, this.form)
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
