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
                        Data User Dokter
                        </div>  
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn
                    :to="'dokter/form'"
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
                            :items="dokter"
                            :search="search"
                            :page.sync="page"
                            item-key="dokter.id"
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
                            :to="'dokter/form/'+item.id"
                            >
                                <v-icon>
                                mdi-pencil
                                </v-icon>
                            </v-btn>
                            <v-btn
                            small 
                            icon
                            color="red"
                            @click="deleteItem(item.id, item.id_user)"
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
            </v-card-text>
        </v-card>
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
    </v-container>
</template>
<script>
import { mapGetters } from "vuex";
import { FETCH_DOKTER } from "@/store/actions.type";
import store from "@/store";
import axios from "axios";

export default{
    data() {
        return {
            id_dokter:'',
            id_user:'',
            page: 1,
            pageCount: 0,
            itemsPerPage: 5,
            search: '',
            breadcrumbs: [
                {
                    text: 'User',
                    disabled: true,
                },
                {
                    text: 'Dokter',
                    disabled: true,
                },
            ],
            headers: [
                { text: "ID", align: "start", sortable: false, value: "id" },
                { text: "Nama Lengkap", align: "start", sortable: false, value: "nama_lengkap" },
                { text: "Tanggal Lahir", align: "start", sortable: false, value: "tanggal_lahir" },
                { text: "Nomor HP", align: "center", sortable: false, value: "nomor_hp" },
                { text: "Alamat", align: "center", sortable: false, value: "alamat" },
                { text: "Actions", align: "center", sortable: false, value: "actions" },
            ],
            dialogText: '',
            dialogDelete: false,
            dialogForm: false,
        }
    },
    beforeRouteEnter(to, from, next) {
        Promise.all([
        store.dispatch(FETCH_DOKTER, to.params.slug),
        ]).then(() => {
        next();
        });
    },
    watch: {
        dialogDelete (val) {
            val || this.closeDelete()
        },
    },
    computed: {
        ...mapGetters(["dokter"]),
        // dokter() {
        //     return this.users.filter(users => {
        //         return users.role_id == '2'
        //     })
        // }
    },
    methods: {
        deleteItem (id_dokter, id_user) {
            this.id_dokter = id_dokter
            this.id_user = id_user
            this.dialogText = 'Yakin menghapus data ini?'
            this.dialogDelete = true
        },
        closeDelete () {
            this.dialogDelete = false
        },
        deleteItemConfirm () {
            const dokter_delete = axios.delete("/dokter/" + this.id_dokter)
            const user_delete = axios.delete("/users/" + this.id_user)
            axios.all([dokter_delete, user_delete])
            .then(() => {
                this.dialogDelete = false
                this.$router.go()
            })
        },
    }
}
</script>
