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
                        Data Role
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
                            :items="role"
                            :search="search"
                            :page.sync="page"
                            item-key="role.id"
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
                            :to="'role/list/'+item.id"
                            >
                                <v-icon>
                                mdi-magnify
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
import { FETCH_ROLE } from "@/store/actions.type";
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
                    text: 'Setting',
                    disabled: true,
                },
                {
                    text: 'Menu',
                    disabled: true,
                },
            ],
            headers: [
                { text: "ID", align: "start", sortable: false, value: "id" },
                { text: "Nama Role", align: "start", sortable: false, value: "role_nama" },
                { text: "Total Menu", align: "center", sortable: false, value: "total_menu" },
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
        store.dispatch(FETCH_ROLE, to.params.slug),
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
        ...mapGetters(["role"]),
    },
    methods: {
        // showForm (id) {
        //     this.id_menu = id
        //     axios
        //     .get("/menu/"+ id)
        //     .then((res) => {
        //         this.form = res.data.menu
        //     })
        //     this.dialogForm = true
        // },

        // onSubmit() {
        //     ApiService.setHeader();
        //     ApiService.put("menu/"+ this.id_menu, this.form)
        //     .then(() => {
        //         this.dialogForm = false
        //         this.$router.go()
        //     })
        // }
    }
}
</script>