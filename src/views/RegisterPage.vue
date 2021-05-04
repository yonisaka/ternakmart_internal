<template>
    <v-app id="inspire">
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-0">
                        <v-img
                        class="mx-auto"
                        position="center center"
                        src="img/brand/ternakmart.png"
                        max-height="150"
                        max-width="150"
                        ></v-img>
                        <v-card-text>
                            <div class="display-1 font-weight-bold my-6 text-center">
                            Pilih Pendaftaran Akun
                            </div>
                            <v-row>
                                <v-col cols="6">
                                    <v-btn 
                                    type="submit"
                                    class="white--text font-weight-bold"
                                    color="#139CA4"
                                    block
                                    :to="{ name: 'register_dokter' }"
                                    >
                                    Dokter
                                    </v-btn>
                                </v-col>
                                <v-col cols="6">
                                    <v-btn 
                                    type="submit"
                                    class="white--text font-weight-bold"
                                    color="#139CA4"
                                    block
                                    :to="{ name: 'register_penjual' }"
                                    >
                                    Seller
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions>
                            
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>
<script>
export default {
    
}
</script>