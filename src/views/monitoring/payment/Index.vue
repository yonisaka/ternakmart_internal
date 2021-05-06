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
                        Konfirmasi Pembayaran
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
                            @click="showModal(item.id)"
                            >
                                <v-icon>
                                mdi-check-decagram
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
        <v-dialog
        v-model="dialogModal"
        persistent
        max-width="600px"
        >
            <v-card>
                <v-form
                ref="form"
                @submit.prevent="onSubmit()"
                >
                <v-card-title>
                <span class="headline">Detail Transaksi</span>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-container class="mt-3">
                       <v-row>
                            <v-col
                                    cols="12"
                                    sm="12"
                                    md="12"
                            >
                                    <v-img
                                    :lazy-src="form.file_path"
                                    :src="form.file_path"
                                    aspect-ratio="1.8"
                                    @error="$event.target.src='img/default.png'"
                                    ></v-img>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="6"
                            >
                                <v-text-field
                                v-model="form.name"
                                label="Pembeli"
                                outlined
                                dense
                                required
                                readonly
                                ></v-text-field>
                                <v-text-field
                                v-model="form.ternak_nama"
                                label="Hewan Ternak"
                                outlined
                                dense
                                required
                                readonly
                                ></v-text-field>
                            </v-col>
                            <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-text-field
                                    v-model="form.masa_perawatan"
                                    label="Masa Perawatan"
                                    outlined
                                    dense
                                    required
                                    readonly
                                    ></v-text-field>
                                    <v-text-field
                                    v-model="form.transaksi_tanggal"
                                    label="Tanggal Transaksi"
                                    outlined
                                    dense
                                    required
                                    readonly
                                    ></v-text-field>
                                </v-col>
                       </v-row>
                    </v-container>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialogModal = false"
                    >
                        Close
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        type="submit"
                    >
                        Konfirmasi
                    </v-btn>
                </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </v-container>
</template>
<script>
import { mapGetters } from "vuex";
import { FETCH_TRANSAKSI } from "@/store/actions.type";
import store from "@/store";
import axios from "axios";
import ApiService from "@/common/api.service";

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
                    text: 'Pembayaran',
                    disabled: true,
                },
            ],
            headers: [
                { text: "ID", align: "start", sortable: false, value: "id" },
                { text: "Hewan Ternak", align: "start", sortable: false, value: "ternak_nama" },
                { text: "Customer", align: "start", sortable: false, value: "name" },
                { text: "Harga", align: "center", sortable: false, value: "ternak_harga" },
                { text: "Masa Perawatan", align: "center", sortable: false, value: "masa_perawatan" },
                { text: "Total", align: "center", sortable: false, value: "total_harga" },
                { text: "Status", align: "center", sortable: false, value: "transaksi_st" },
                { text: "Tanggal", align: "center", sortable: false, value: "transaksi_tanggal" },
                { text: "Actions", align: "center", sortable: false, value: "actions" },
            ],
            form: {},
            dialogModal: false,
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
        showModal(id) {
            axios
            .get("/transaksi/"+ id +"/detail")
            .then((res) => {
                // console.log(res.data.transaksi)
                this.form = res.data.transaksi
            })
            this.dialogModal = true
        },

        onSubmit() {
            this.form.transaksi_st = 'paid'
            ApiService.put("transaksi/"+ this.form.id, this.form)
            .then(() => {
                this.dialogModal = false
                this.$router.go()
            })
        }
    }
}
</script>