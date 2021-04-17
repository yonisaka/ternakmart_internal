<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th width="3%" class="text-center">
            No
          </th>
          <th width="7%" class="text-center">
            Nama
          </th>
          <th width="5%" class="text-center">
            Jenis
          </th>
          <th width="3%" class="text-center">
            Berat (kg)
          </th>
          <th width="3%" class="text-center">
            Tinggi (cm)
          </th>
          <th width="3%" class="text-center">
            Umur (th)
          </th>
          <th width="7%" class="text-center">
            Harga (Rp)
          </th>
          <th width="5%" class="text-center">
            Tanggal Penerimaan
          </th>
          <th width="5%" class="text-center">
            #
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in ternak"
          :key="item.id"
        >
          <td class="text-center">{{ index+1 }}</td>
          <td class="text-left">{{ item.ternak_nama }}</td>
          <td class="text-center">{{ item.jenis_nama }}</td>
          <td class="text-center">{{ item.ternak_berat }}</td>
          <td class="text-center">{{ item.ternak_tinggi }}</td>
          <td class="text-center">{{ item.ternak_umur }}</td>
          <td class="text-center">{{ formatPrice(item.ternak_harga) }}</td>
          <td class="text-center">{{ item.tgl_penerimaan|moment('MMM Do YYYY') }}</td>
          <td class="text-center">
            <v-btn
              small
              elevation="2"
              icon
              color="primary"
              class="mr-2"
            >
            <v-icon>mdi-pencil</v-icon>
            </v-btn>

            <v-btn
              small
              elevation="2"
              icon
              color="red"
            >
            <v-icon>mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>

export default {
  props: ["ternak"],
  data() {
      return {
        no: 0,
      };
  },
  methods: {
    formatPrice(value) {
      let val = (value/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
  }
}
</script>