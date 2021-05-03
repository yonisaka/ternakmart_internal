<template>
    <v-container>
        <v-breadcrumbs
            :items="breadcrumbs"
            divider="\"
        ></v-breadcrumbs>
        <v-row class="mx-3">
            <v-col lg="3" sm="6" col="6">
                <v-card
                    class="mx-auto"
                    outlined
                >
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold headline mb-4 mt-1" style="color: #139CA4">
                        1.140
                        </v-list-item-title>
                        <div class="overline font-weight-bold">
                        Hewan Ternak
                        </div>
                    </v-list-item-content>

                    <v-icon
                    size="60"
                    color="#139CA4"
                    >mdi-cow</v-icon>
                    </v-list-item>
                </v-card>
            </v-col>
            <v-col lg="3" sm="6" col="6">
                <v-card
                    class="mx-auto"
                    outlined
                >
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold headline mb-4 mt-1" style="color: #139CA4">
                        143
                        </v-list-item-title>
                        <div class="overline font-weight-bold">
                        Ternak Terjual
                        </div>
                    </v-list-item-content>

                    <v-icon
                    size="50"
                    color="#139CA4"
                    >mdi-cart-arrow-down</v-icon>
                    </v-list-item>
                </v-card>
            </v-col>
            <v-col lg="3" sm="6" col="6">
                <v-card
                    class="mx-auto"
                    outlined
                >
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold headline mb-4 mt-1" style="color: #139CA4">
                        143
                        </v-list-item-title>
                        <div class="overline font-weight-bold">
                        Verifikasi
                        </div>
                    </v-list-item-content>

                    <v-icon
                    size="50"
                    color="#139CA4"
                    >mdi-check-decagram</v-icon>
                    </v-list-item>
                </v-card>
            </v-col>
            <v-col lg="3" sm="6" col="6">
                <v-card
                    class="mx-auto"
                    outlined
                >
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold headline mb-4 mt-1" style="color: #139CA4">
                        16.700.000
                        </v-list-item-title>
                        <div class="overline font-weight-bold">
                        Total Transaksi
                        </div>
                    </v-list-item-content>

                    <v-icon
                    size="50"
                    color="#139CA4"
                    >mdi-finance</v-icon>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mx-3">
            <v-col cols="12" sm="12" lg="8">
                <v-card
                    class="mx-auto text-center"
                    color="#139CA4"
                    dark
                >
                    <v-card-text>
                    <v-sheet color="rgba(0, 0, 0, .12)">
                        <v-sparkline
                        :value="value"
                        color="rgba(255, 255, 255, .7)"
                        height="100"
                        padding="24"
                        stroke-linecap="round"
                        smooth
                        >
                        <template v-slot:label="item">
                            $ {{ item.value }}
                        </template>
                        </v-sparkline>
                    </v-sheet>
                    </v-card-text>

                    <v-card-text>
                    <div class="display-1 font-weight-thin">
                        Sales Last 24h
                    </div>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions class="justify-center">
                    <v-btn
                        block
                        text
                    >
                        Go to Report
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" sm="12" lg="4">
                <v-card>
                    <v-card-title>
                        Aktivitas
                    </v-card-title>
                    <v-card-subtitle>
                        Berikut merupakan total data
                    </v-card-subtitle>
                    <v-card-text>
                        <v-list-item two-line>
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-bold subtitle ">
                                Total Dokter
                                </v-list-item-title>
                            </v-list-item-content>

                            <v-chip
                            color="primary"
                            >
                                12
                            </v-chip>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item two-line>
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-bold subtitle ">
                                Total Customer
                                </v-list-item-title>
                            </v-list-item-content>

                            <v-chip
                            color="secondary"
                            >
                                173
                            </v-chip>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item two-line>
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-bold subtitle ">
                                Total Menu
                                </v-list-item-title>
                            </v-list-item-content>

                            <v-chip
                            color="red"
                            >
                                43
                            </v-chip>
                        </v-list-item>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    disabled: true,
                }
            ],
            value: [
                423,
                446,
                675,
                510,
                590,
                610,
                160,
            ],
        }
    }
}
</script>