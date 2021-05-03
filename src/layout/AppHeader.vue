<template>
    <v-app-bar app color="#139CA4" dark>
        <!-- <v-toolbar-title>Page title</v-toolbar-title> -->

        <v-spacer></v-spacer>

        <!-- <v-btn icon>
        <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
        </v-btn> -->

        <v-menu
        transition="slide-y-transition"
        bottom
        >
        <template v-slot:activator="{ on, attrs }">
            <span class="subtitle font-weight-bold"
            v-bind="attrs"
            v-on="on"
            >{{ currentUser.name }} 
            <v-icon>mdi-menu-down</v-icon>
            </span>
        </template>

        <v-list dense>
            <v-list-item-group
                color="primary"
            >
                <v-list-item @click="logout">
                    <v-list-item-icon>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        </v-menu>
    </v-app-bar>
</template>
<script>
import { mapGetters } from "vuex";
import { LOGOUT } from "@/store/actions.type";

export default {
    computed: {
        ...mapGetters(["currentUser", "isAuthenticated"])
    },
    methods: {
        logout() {
            this.$store.dispatch(LOGOUT).then(() => {
                this.$router.push({ name: "login" });
            });
        }
    }
};
</script>
<style>
</style>
