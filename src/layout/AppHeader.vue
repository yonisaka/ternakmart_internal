<template>
    <div>
        <v-app-bar 
            app 
            color="#f5f6fa" 
            clipped-left
            fixed
            >
            <!-- <v-toolbar-title>Page title</v-toolbar-title> -->
            <v-btn
                icon
                color="#000"
                @click.stop="mini = !mini"
            >
                <!-- <v-icon>mdi-{{ `chevron-${mini ? 'right' : 'left'}` }}</v-icon> -->
                <v-icon>mdi-{{`${mini ? 'wrap-disabled' : 'wrap'}`}}</v-icon>
            </v-btn>
            <v-toolbar-title>
                <v-img src="img/brand/ternakmart.png" width="40px"></v-img>
            </v-toolbar-title>
            <v-toolbar-title class="pl-5 font-weight-medium">
                   Calty Mart
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-menu
            transition="slide-y-transition"
            bottom
            >
            <template v-slot:activator="{ on, attrs }">
                <span class="subtitle font-weight-medium black--text"
                v-bind="attrs"
                v-on="on"
                >{{ currentUser.email }} 
                <v-icon color="#666">mdi-menu-down</v-icon>
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
        <v-navigation-drawer 
        app
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
        clipped
        >
            <!-- <v-list-item class="px-2 py-1">
                <a href="#">
                    <v-list-item-avatar>
                        <v-img src="img/brand/ternakmart.png"></v-img>
                    </v-list-item-avatar>
                </a>

                <v-list-item-title class="pl-5 subtitle font-weight-bold">Calty Farm</v-list-item-title>

            </v-list-item>

            <v-divider></v-divider> -->
            <v-list nav dense>
            <div v-for="(link, i) in links" :key="i" class="mb-1">

                <v-list-item
                    v-if="!link.subLinks"
                    :to="link.url"
                    class="v-list-item"
                >
                    <v-list-item-icon>
                        <v-icon>{{ link.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title v-text="link.nav_title" />
                </v-list-item>

                <v-list-group
                    v-else
                    :key="link.nav_title"
                    no-action
                    :prepend-icon="link.icon"
                    :value="false"
                >
                    <template v-slot:activator>
                    <v-list-item-title>{{ link.nav_title }}</v-list-item-title>
                    </template>

                    <v-list-item
                        v-for="sublink in link.subLinks"
                        :to="sublink.url"
                        :key="sublink.nav_title"
                        style="margin-left:-50px;"
                    >
                        <v-list-item-icon>
                        <v-icon>mdi-menu-right</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ sublink.nav_title }}</v-list-item-title>

                    </v-list-item>

                </v-list-group>
            </div>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { LOGOUT } from "@/store/actions.type";

export default {
    data () {
      return {
        drawer: true,
        mini: false,
      }
    },
    computed: {
        ...mapGetters(["currentUser", "isAuthenticated"]),
        ...mapState({
            links: state => state.auth.nav
        })
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
