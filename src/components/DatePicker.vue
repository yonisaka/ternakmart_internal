<template>
  <v-layout row wrap>
    <v-date-picker
      :min="minDate"
      :max="maxDate"
      v-model="fromDateVal"
      no-title
    ></v-date-picker>
  </v-layout>
</template>
<script>
  export default {
    data() {
      return {
        fromDateVal: null,

        minDate: "2019-07-04",
        maxDate: "2019-08-30",
      };
    },
  };
</script>