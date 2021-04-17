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
                <v-row>
                    <v-col>
                        <div
                        class="title font-weight-bold my-2 ml-2"
                        >
                        Pengajuan Ternak
                        </div>
                    </v-col>
                    <v-col cols="2">
                        <v-btn
                        dense
                        color="primary"
                        >
                        <v-icon>mdi-plus</v-icon>
                        Tambah</v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-text-field
                            class="my-2"
                            dense
                            append-icon="mdi-magnify"
                            label="Cari Ternak"
                            outlined
                            v-model="searchNama"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <TableTernak :ternak="resultQuery"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-pagination
                        v-model="page"
                        :length="6"
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
import { FETCH_TERNAK } from "@/store/actions.type";
import TableTernak from "@/components/TableTernak";

export default{
    data() {
        return {
            page: 1,
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
            searchNama: null,
        }
    },
    components: {
        TableTernak
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
        resultQuery(){
            if(this.searchNama){
                return this.ternak.filter((item)=>{
                    return this.searchNama.toLowerCase().split(' ').every(v => item.ternak_nama.toLowerCase().includes(v))
                })
            }else{
                return this.ternak;
            }

        }
    },
}
</script>
