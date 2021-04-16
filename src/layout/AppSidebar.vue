<template>
    <v-navigation-drawer 
    app
    v-model="drawer"
    :mini-variant.sync="mini"
    permanent
    >
        <v-list-item class="px-2 py-1">
            <v-list-item-avatar>
            <v-img src="img/brand/ternakmart.png"></v-img>
            </v-list-item-avatar>

            <v-list-item-title class="pl-5 subtitle font-weight-bold">Ternak Mart</v-list-item-title>

            <v-btn
            icon
            @click.stop="mini = !mini"
            >
            <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
        </v-list-item>

        <v-divider></v-divider>
        <v-list nav dense>
          <div v-for="(link, i) in links" :key="i" class="mb-1">

            <v-list-item
                v-if="!link.subLinks"
                :to="link.url"
                :active-class="color"
                avatar
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
</template>
<script>
import { mapState } from "vuex";

export default {
    data () {
      return {
        drawer: true,
        mini: false,
      }
    },
    computed: {
        ...mapState({
            links: state => state.auth.nav
        })
    },
}
</script>