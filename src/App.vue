<template>
  <div id="app">
    <v-app>
        <router-view name="header"></router-view>
        <!-- <router-view name="sidebar"></router-view> -->
        <v-main class="grey lighten-4">
            <v-container fluid class="mb-15" >
                <v-row class="fill-height">
                    <v-col>
                        <transition name="fade">
                            <router-view></router-view>
                        </transition>
                    </v-col>
                </v-row>
            </v-container>
        <router-view name="footer"></router-view>
        </v-main>
    </v-app>
</div>
</template>
<script>
// import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    // SystemBar,
    // FadeTransition
  },
};
</script>

