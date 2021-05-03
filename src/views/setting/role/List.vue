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
                            :items="role_menu"
                            :search="search"
                            :page.sync="page"
                            item-key="role_menu.id"
                            :items-per-page="itemsPerPage"
                            hide-default-footer
                            class="elevation-1"
                            @page-count="pageCount = $event"
                        >
                        <template v-slot:[`item.nav_title`]="{ item }">
                            <span v-if="item.parent_id != '0'">
                                <v-icon>mdi-subdirectory-arrow-right</v-icon>
                            </span>
                            {{ item.nav_title }}
                        </template>
                        <template v-slot:[`item.actions`]="{ item }">
                            <v-btn
                            small 
                            icon
                            color="red"
                            @click="deleteItem(item.role_id, item.menu_id)"
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
// import { mapGetters } from "vuex";
// import { FETCH_ROLE } from "@/store/actions.type";
// import store from "@/store";
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
                { text: "Nama Menu", align: "start", sortable: false, value: "nav_title" },
                { text: "URL", align: "center", sortable: false, value: "url" },
                // { text: "Actions", align: "center", sortable: false, value: "actions" },
            ],
            list:[],
            dialogText: '',
            dialogDelete: false,
            dialogForm: false,
        }
    },
    watch: {
        dialogDelete (val) {
            val || this.closeDelete()
        },
    },
    mounted() {
        axios
        .get("/role_menu")
        .then((res) => {
            this.list = res.data.role_menu
        })
    },
    computed: {
        role_menu() {
            return this.list.filter(list => {
                return list.role_id == this.$route.params.id
            })
        }
    },
    methods: {
        deleteItem (role_id, menu_id) {
            this.role_id = role_id
            this.menu_id = menu_id
            this.dialogText = 'Yakin menghapus data ini?'
            this.dialogDelete = true
        },
        closeDelete () {
            this.dialogDelete = false
        },
        deleteItemConfirm () {
            axios.delete('/role_menu/'+this.role_id+'/'+this.menu_id)
            .then(() => {
                this.dialogDelete = false
                this.$router.go()
            })
        },
    }
}
</script>