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
                        Data Breed
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
                            :items="jenis"
                            :search="search"
                            :page.sync="page"
                            item-key="jenis.id"
                            :items-per-page="itemsPerPage"
                            hide-default-footer
                            class="elevation-1"
                            @page-count="pageCount = $event"
                        >
                        <template v-slot:[`item.jenis_kelamin`]="{ item }">

                            <span v-if="item.jenis_kelamin == 'B'">Betina</span>
                            <span v-else>Jantan</span>
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
                            <!-- <v-btn
                            small 
                            icon
                            color="red"
                            @click="deleteItem(item.id)"
                            >
                                <v-icon >
                                mdi-delete
                                </v-icon>
                            </v-btn> -->
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
        v-model="dialogForm"
        persistent
        max-width="600px"
        >
            <v-card>
                <v-form
                ref="form"
                @submit.prevent="onSubmit()"
                >
                <v-card-title>
                <span class="headline">Detail Menu</span>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-container class="mt-3">
                        <v-row>
                            <v-col
                                cols="12"
                                sm="6"
                                md="6"
                            >
                                <v-text-field
                                v-model="form.jenis_nama"
                                label="Breed"
                                outlined
                                dense
                                required
                                ></v-text-field>
                                <v-text-field
                                v-model="form.golongan_nama"
                                label="Jenis Nama"
                                outlined
                                dense
                                required
                                disabled
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="6"
                            >
                                <v-select
                                v-model="form.jenis_kelamin"
                                item-text="text"
                                item-value="value"
                                :items="items"
                                color="teal darken-2"
                                label="Kelamin"
                                outlined
                                dense
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialogForm = false"
                    >
                        Close
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        type="submit"
                    >
                        Save
                    </v-btn>
                </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </v-container>
</template>
<script>
import { mapGetters } from "vuex";
import { FETCH_JENIS } from "@/store/actions.type";
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
                    text: 'Setting',
                    disabled: true,
                },
                {
                    text: 'Menu',
                    disabled: true,
                },
            ],
            items: [
                { 
                    text: 'Betina',
                    value: 'B',
                }, 
                {
                    text: 'Jantan',
                    value: 'J',
                }
            ],
            headers: [
                { text: "ID", align: "start", sortable: false, value: "id" },
                { text: "Breed", align: "center", sortable: false, value: "jenis_nama" },
                { text: "Jenis", align: "start", sortable: false, value: "golongan_nama" },
                { text: "Kelamin", align: "start", sortable: false, value: "jenis_kelamin" },
                { text: "Actions", align: "center", sortable: false, value: "actions" },
            ],
            dialogText: '',
            dialogDelete: false,
            dialogForm: false,
            form:{},
        }
    },
    beforeRouteEnter(to, from, next) {
        Promise.all([
        store.dispatch(FETCH_JENIS, to.params.slug),
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
        ...mapGetters(["jenis"]),
    },
    methods: {
        showForm (id) {
            this.id_jenis = id
            axios
            .get("/jenis/"+ id)
            .then((res) => {
                this.form = res.data.jenis
            })
            this.dialogForm = true
        },

        onSubmit() {
            ApiService.setHeader();
            ApiService.put("menu/"+ this.id_jenis, this.form)
            .then(() => {
                this.dialogForm = false
                this.$router.go()
            })
        }
    }
}
</script>