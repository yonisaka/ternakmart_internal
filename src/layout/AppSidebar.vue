<template>
    
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