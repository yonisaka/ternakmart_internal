<template>
    <v-container>
        <v-toolbar flat>
        <v-breadcrumbs
            :items="breadcrumbs"
            divider="\"
        ></v-breadcrumbs>
        <v-spacer></v-spacer>
        <v-btn
        to="/modal/persetujuan"
        dense
        color="secondary"
        >
        Kembali
        </v-btn>
        </v-toolbar>
        <v-row class="my-2">
            <v-col 
            >
                <v-card
                elevation="4"
                >
                    <v-card-title>
                        Detail Ternak
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col sm="12" cols="12" lg="6">
                                    <v-img
                                    :lazy-src="ternak.file_path"
                                    :src="ternak.file_path"
                                    aspect-ratio="1.9"
                                    class="rounded-lg"
                                    @error="$event.target.src='img/default.png'"
                                    ></v-img>
                                </v-col>
                                <v-col sm="12" cols="12" lg="6">
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Nama Ternak </div>
                                        </v-col>
                                        <v-col cols="7">
                                            <div class="font-weight-bold" color="black">: {{ ternak.ternak_nama}} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Jenis Ternak </div>
                                        </v-col>
                                        <v-col cols="7">
                                            <div class="font-weight-bold" color="black">: {{ ternak.jenis_nama}} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Kelamin </div>
                                        </v-col>
                                        <v-col cols="7">
                                            <div v-if="ternak.jenis_kelamin === 'B'" class="font-weight-bold" color="black">: Betina </div>
                                            <div v-if="ternak.jenis_kelamin === 'J'" class="font-weight-bold" color="black">: Jantan </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Berat / Lingkar Perut / Umur</div>
                                        </v-col>
                                        <v-col cols="7">
                                            <div class="font-weight-bold" color="black">: {{ ternak.ternak_berat}} kg / {{ ternak.lingkar_perut}} cm / {{ ternak.ternak_umur}} tahun </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Deskripsi</div>
                                        </v-col>
                                        <v-col cols="1">
                                            <div class="font-weight-bold" color="black">: </div>
                                        </v-col>
                                        <v-col cols="12">
                                            <div class="font-weight-bold" color="black">{{ ternak.ternak_deskripsi }}</div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Tanggal Penerimaan </div>
                                        </v-col>
                                        <v-col cols="7">
                                            <div class="font-weight-bold" color="black">: {{ ternak.tgl_penerimaan|moment('MMM Do YYYY') }} </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="5">
                                            <div class="font-weight-bold" color="black"> Harga Pengajuan </div>
                                        </v-col>
                                        <v-col cols="7">
                                            <div class="font-weight-bold" color="black">: {{ formatPrice(ternak.harga_pengajuan) }} </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row>
                                <div class="font-weight-bold">
                                Penetapan Harga
                                </div>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="12" lg="6">
                                    <v-text-field
                                        label="RFID"
                                        v-model="ternak.rfid"
                                        outlined
                                        dense
                                    ></v-text-field>
                                    <v-text-field
                                        label="Harga Ditetapkan"
                                        prefix="Rp"
                                        v-model="ternak.ternak_harga"
                                        type="number"
                                        outlined
                                        dense
                                        form="verifikasi"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" lg="6">
                                    <v-text-field
                                        label="Harga Perkilo"
                                        suffix="/ Kg"
                                        v-model="ternak.harga_perkilo"
                                        type="number"
                                        outlined
                                        dense
                                        form="verifikasi"
                                    ></v-text-field>
                                    <v-textarea
                                    v-model="ternak.verifikasi_note"
                                    outlined
                                    dense
                                    rows="1"
                                    row-height="20"
                                    label="Catatan Verifikasi"
                                    value="Tuliskan pesan verifikasi"
                                    form="verifikasi"
                                    ></v-textarea>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mb-2">
            <v-col 
            cols="12"
            >
                <v-card
                elevation="4"
                >
                    <v-tabs
                    v-model="tab"
                    background-color="primary"
                    dark
                    >
                        <v-tab>
                            Pemeriksaan
                        </v-tab>
                        <v-tab>
                            History
                        </v-tab>
                    </v-tabs>
                    <v-tabs-items v-model="tab">
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <v-row v-if="errors" >
                                        <v-col>
                                            <ul class="red--text my-3">
                                                <li v-for="(v, k) in errors" :key="k"> {{ v[0] | error }}</li>
                                            </ul>
                                        </v-col>
                                    </v-row>
                                    <v-form
                                    ref="form"
                                    id="verifikasi"
                                    @submit.prevent="onSubmit()"
                                    >
                                    <v-row>
                                        <v-col lg="12" cols="12" sm="12">
                                            <h3>Data Pemeriksa</h3>
                                        </v-col>
                                        <v-col lg="4" cols="12" sm="12">
                                            <v-select
                                                v-model="form.id_dokter"
                                                item-text="nama_lengkap"
                                                item-value="id"
                                                :items="dokter"
                                                label="Dokter"
                                                outlined
                                                dense
                                                :disabled="form.id_admin != null"
                                                ></v-select>
                                        </v-col>
                                        <v-col lg="4" cols="12" sm="12">
                                            <v-select
                                                v-model="form.id_admin"
                                                item-text="name"
                                                item-value="id"
                                                :items="admin"
                                                label="Admin"
                                                outlined
                                                dense
                                                :disabled="form.id_dokter != null"
                                                ></v-select>
                                        </v-col>
                                    </v-row>
                                    <hr/><br>
                                    <v-row>
                                        <v-col lg="12" cols="12" sm="12">
                                            <h3>Data Pemeriksaan</h3>
                                        </v-col>
                                        <v-col lg="4" cols="12" sm="12">
                                            <v-text-field
                                                label="Anamnesa"
                                                v-model="form.anamnesa"
                                                outlined
                                                dense
                                            ></v-text-field>
                                            <v-text-field
                                                label="Ekspresi Muka"
                                                v-model="form.ekspresi_muka"
                                                outlined
                                                dense
                                            ></v-text-field>
                                            <v-text-field
                                                label="Kondisi Badan"
                                                v-model="form.kondisi_badan"
                                                outlined
                                                dense
                                            ></v-text-field>
                                            <v-text-field
                                                label="Frekuesi Nafas"
                                                v-model="form.frekuensi_nafas"
                                                outlined
                                                dense
                                            ></v-text-field>
                                            <v-text-field
                                                label="Pulsus"
                                                v-model="form.pulsus"
                                                outlined
                                                dense
                                            ></v-text-field>
                                            <v-text-field
                                                label="Suhu"
                                                v-model="form.suhu"
                                                outlined
                                                dense
                                            ></v-text-field>
                                            <v-text-field
                                                label="CRT"
                                                v-model="form.crt"
                                                outlined
                                                dense
                                            ></v-text-field>
                                            <v-menu
                                                v-model="tgl_pemeriksaan"
                                                :close-on-content-click="false"
                                                :nudge-right="40"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="auto"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                    v-model="form.tgl_pemeriksaan"
                                                    label="Tanggal Pemeriksaan"
                                                    append-icon="mdi-calendar"
                                                    readonly
                                                    outlined
                                                    dense
                                                    v-bind="attrs"
                                                    v-on="on"
                                                ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                v-model="form.tgl_pemeriksaan"
                                                @input="tgl_pemeriksaan = false"
                                                ></v-date-picker>
                                            </v-menu>
                                        </v-col>
                                        <v-col lg="4" cols="12" sm="12">
                                            <Combobox v-model="form.kelenjar_limfe" :value="form.kelenjar_limfe" :label="'Kelenjar Limfe'"/>
                                            <Combobox v-model="form.alat_pernafasan" :label="'Susunan Alat Pernafasan'"/>
                                            <Combobox v-model="form.alat_peredaran_darah" :label="'Susunan Alat Peredaran Darah'"/>
                                            <Combobox v-model="form.alat_pencernaan" :label="'Susunan Alat Pencernaan'"/>
                                            <Combobox v-model="form.alat_kelamin_perkencingan" :label="'Susunan Alat Kelamin dan Perkencingan'"/>
                                            <Combobox v-model="form.saraf" :label="'Susunan Saraf'"/>
                                            <Combobox v-model="form.anggota_gerak" :label="'Susunan Anggota Gerak'"/>
                                            <Combobox v-model="form.lain_lain" :label="'Lain-lain'"/>
                                        
                                        </v-col>
                                        <v-col lg="4" cols="12" sm="12">
                                            <v-textarea
                                            outlined
                                            v-model="form.diagnosa_awal"
                                            label="Diagnosa Awal"
                                            rows="3"
                                            row-height="20"
                                            ></v-textarea>
                                            <v-select
                                            v-model="form.pemeriksaan_lab"
                                            :items="pemeriksaan_lab"
                                            :menu-props="{ maxHeight: '400' }"
                                            label="Pemeriksaan Lab"
                                            multiple
                                            outlined
                                            dense
                                            ></v-select>
                                            <v-textarea
                                            outlined
                                            v-model="form.diagnosa_akhir"
                                            label="Diagnosa Akhir"
                                            rows="3"
                                            row-height="20"
                                            ></v-textarea>
                                            <v-text-field
                                                label="Prognosa"
                                                v-model="form.prognosa"
                                                outlined
                                                dense
                                            ></v-text-field>
                                            <v-textarea
                                            outlined
                                            v-model="form.tindakan_lainnya"
                                            label="Tindakan Lainnya"
                                            rows="3"
                                            row-height="20"
                                            ></v-textarea>
                                            <v-combobox
                                                v-model="terapi"
                                                :search-input.sync="searchTerapi"
                                                hide-selected
                                                label="Tambahkan terapi"
                                                multiple
                                                outlined
                                                dense
                                                persistent-hint
                                                small-chips
                                                >
                                                <template v-slot:no-data>
                                                    <v-list-item>
                                                    <v-list-item-content>
                                                        <v-list-item-title>
                                                        Tekan <kbd>enter</kbd> untuk membuat list baru
                                                        </v-list-item-title>
                                                    </v-list-item-content>
                                                    </v-list-item>
                                                </template>
                                            </v-combobox>
                                        </v-col>
                                    </v-row>
                                    <v-row class="text-right">
                                        <v-col>
                                            <v-btn
                                            type="submit"
                                            color="primary"
                                            >
                                                Verifikasi
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <v-row>
                                        <v-col sm="12" cols="12" md="4">
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
                                                :items="pemeriksaan"
                                                :search="search"
                                                :page.sync="page"
                                                item-key="pemeriksaan.id"
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
                                                @click="showDetail(item.id)"
                                                >
                                                    <v-icon>
                                                    mdi-magnify
                                                    </v-icon>
                                                </v-btn>
                                            </template>
                                            </v-data-table>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog
        v-model="dialogDetail"
        max-width="1000px"
        >
            <v-card>
                <v-card-title>
                <span class="headline">Detail Pemeriksaan</span>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="6">
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> Anamnesa </div>
                                    </v-col>
                                    <v-col cols="1">
                                        :
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> {{ detail.anamnesa}} </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> Ekspresi Muka </div>
                                    </v-col>
                                    <v-col cols="1">
                                        :
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> {{ detail.ekspresi_muka}} </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> Kondisi Badan </div>
                                    </v-col>
                                    <v-col cols="1">
                                        :
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> {{ detail.kondisi_badan}} </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> Frekuensi Nafas </div>
                                    </v-col>
                                    <v-col cols="1">
                                        :
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> {{ detail.frekuensi_nafas}} </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> Pulsus </div>
                                    </v-col>
                                    <v-col cols="1">
                                        :
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> {{ detail.pulsus}} </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> Suhu </div>
                                    </v-col>
                                    <v-col cols="1">
                                        :
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> {{ detail.suhu}} </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> CRT </div>
                                    </v-col>
                                    <v-col cols="1">
                                        :
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> {{ detail.crt}} </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="6">
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> Kelenjar Limfe </div>
                                    </v-col>
                                    <v-col cols="1">
                                        :
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> {{ detail.kelenjar_limfe}} </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> Alat Pernafasan </div>
                                    </v-col>
                                    <v-col cols="1">
                                        :
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> {{ detail.alat_pernafasan}} </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> Alat Peredaran Darah </div>
                                    </v-col>
                                    <v-col cols="1">
                                        :
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> {{ detail.alat_peredaran_darah}} </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> Alat Pencernaan </div>
                                    </v-col>
                                    <v-col cols="1">
                                        :
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> {{ detail.alat_pencernaan}} </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> Alat Kelamin dan Perkencingan </div>
                                    </v-col>
                                    <v-col cols="1">
                                        :
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> {{ detail.alat_kelamin_perkencingan}} </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> Saraf </div>
                                    </v-col>
                                    <v-col cols="1">
                                        :
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> {{ detail.saraf}} </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> Anggota Gerak  </div>
                                    </v-col>
                                    <v-col cols="1">
                                        :
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> {{ detail.anggota_gerak}} </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> Lain-lain  </div>
                                    </v-col>
                                    <v-col cols="1">
                                        :
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="font-weight-bold" color="black"> {{ detail.lain_lain}} </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
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
import axios from "axios";
import Combobox from "@/components/Combobox";

export default {
    components: {
        Combobox
        // DatePicker
    },
    data() {
        return { 
            color:'',
            snackbar: false,
            message: '',
            tab: null,
            id_ternak: '',
            form: {},
            ternak: {},
            breadcrumbs: [
                {
                    text: 'Modal',
                    disabled: true,
                },
                {
                    text: 'Persetujuan',
                    disabled: true,
                },
                {
                    text: 'Verifikasi Data',
                    disabled: true,
                },
            ],
            tgl_pemeriksaan: false,
            perkiraan_lahir: false,
            errors: {},
            options: [
                // { header: 'Select an option or create one' },
                {
                    text: 'Normal dan sehat.',
                    color: 'blue',
                    editable: false
                },
                {
                    text: 'Tidak normal dan sehat.',
                    color: 'orange',
                    editable: false
                },
                {
                    text: 'Tidak normal dan tidak sehat.',
                    color: 'red',
                    editable: true
                },
            ],
            activator: null,
            attach: null,
            colors: ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'],
            editing: null,
            editingIndex: -1,
            nonce: 1,
            menu: false,
            model: [
                {
                text: 'Foo',
                color: 'blue',
                },
            ],
            x: 0,
            search: null,
            searchTerapi: null,
            y: 0,
            pemeriksaan_lab: ['Feses','Urin','Darah'],
            terapi: [],
            page: 1,
            pageCount: 0,
            itemsPerPage: 5,
            headers: [
                { text: "ID", align: "start", sortable: true, value: "id" },
                { text: "Anamnesa", align: "start", sortable: true, value: "anamnesa" },
                { text: "Ekspresi Muka", align: "start", sortable: true, value: "ekspresi_muka" },
                { text: "Kondisi Badan", value: "kondisi_badan", sortable: false },
                { text: "Frekuensi Nafas", value: "frekuensi_nafas", sortable: false },
                { text: "Pulsus", value: "pulsus", sortable: false },
                { text: "Suhu", value: "suhu", sortable: false },
                { text: "CRT", value: "crt", sortable: false},
                { text: "Actions", value: "actions", sortable: false },
            ],
            pemeriksaan: {},
            dialogDetail: false,
            detail: {},
            dokter: [],
            admin: [],
        }
    },
    watch: {
      model (val, prev) {
        if (val.length === prev.length) return

        this.model = val.map(v => {
          if (typeof v === 'string') {
            v = {
              text: v,
              color: this.colors[this.nonce - 1],
            }

            this.items.push(v)

            this.nonce++
          }

          return v
        })
      },
    },
    mounted() {
        // this.$store.dispatch(FETCH_GOL);
        this.id_ternak = this.$route.params.id || ''

        if (this.$route.params.id){
            const ternak_get = axios.get("/ternak/" + this.id_ternak)
            const pemeriksaan_get = axios.get("/pemeriksaan/" + this.id_ternak)
            axios.all([ternak_get, pemeriksaan_get]).then(axios.spread((...responses) => {
                this.ternak = responses[0].data.ternak
                this.jenis = {
                    'id': responses[0].data.ternak.id_jenis,
                    'jenis_nama': responses[0].data.ternak.jenis_nama
                }
                if (responses[1].data.pemeriksaan != null){
                    this.form = responses[1].data.pemeriksaan
                    this.form.pemeriksaan_lab = JSON.parse(this.form.pemeriksaan_lab)
                    this.terapi = JSON.parse(this.form.terapi)
                }
            }))
        }
        axios
        .get("/pemeriksaan/")
        .then((res) => {
            this.pemeriksaan = res.data.pemeriksaan
        })
        axios
        .get("/dokter/")
        .then((res) => {
            this.dokter = res.data.dokter
        })
        axios
        .get("/users/")
        .then((res) => {
            this.admin = res.data.users.filter(users => {
                return users.role_id == '1'
            })
            // console.log(this.admin);
        })
    },
    computed: {
        ...mapGetters(["currentUser"]),
        list_pemeriksaan() {
            return this.pemeriksaan.filter(pemeriksaan => {
                return pemeriksaan.id_ternak == this.$route.params.id
            })
        }
    },
    methods: {
        showDetail (id) {
            axios
            .get("/pemeriksaan/"+ id + "/detail")
            .then((res) => {
                console.log(res.data.pemeriksaan)
                this.detail = res.data.pemeriksaan
            })
            this.dialogDetail = true
        },
        edit (index, item) {
            if (!this.editing) {
                this.editing = item
                this.editingIndex = index
            } else {
                this.editing = null
                this.editingIndex = -1
            }
        },
        filter (item, queryText, itemText) {
            if (item.header) return false

            const hasValue = val => val != null ? val : ''

            const text = hasValue(itemText)
            const query = hasValue(queryText)

            return text.toString()
            .toLowerCase()
            .indexOf(query.toString().toLowerCase()) > -1
        },
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        // pemeriksa() {
        //     console.log('asd')
        // },
        onSubmit(){
            console.log(this.form)
            this.form.id_ternak = this.id_ternak
           
            this.form.terapi = JSON.stringify(this.terapi)
            this.form.pemeriksaan_lab = JSON.stringify(this.form.pemeriksaan_lab)
            // this.form.id_dokter = this.currentUser.id
            this.ternak.verifikasi_st = 1

            // console.log(this.form)
            axios.post("/pemeriksaan", this.form)
            .then(() => {
                axios.put("/ternak/" + this.id_ternak, this.ternak)
                .then(() => {
                    this.snackbar = true
                    this.message = 'Berhasil Update Data'
                    this.color = '#139CA4'
                    setTimeout( () => this.$router.go(), 1000);
                })
                .catch((err) => {
                    this.errors = err.response.data
                    this.snackbar = true
                    this.message = 'Gagal Update Data'
                    this.color = 'red'
                });
            })
            .catch((err) => {
                this.errors = err.response.data
                this.snackbar = true
                this.message = 'Gagal Update Data'
                this.color = 'red'
            });
        }
    }
}
</script>