<template>
  <mdb-col>
    <h6>Nacionalidad</h6>
    <select class="browser-default custom-select" v-model="internallyNatSelected" v-on:change="$emit('updateNat', internallyNatSelected)">
    <option :key="n.value" :value="n.value" v-for="n in natOptions">{{n.text}}</option>
    </select>
  </mdb-col>
</template>

<script>
import { mdbCol } from 'mdbvue';
export default {
  name: 'NatFilter',
  props: {
    natSelected: String
  },
  components:{
    mdbCol
  },
  data() {
    return {
      internallyNatSelected: this.natSelected,
      natOptions: [
        { text: 'Todas', value: '' },
        { text: 'AU', value: 'AU' },
        { text: 'BR', value: 'BR' },
        { text: 'CA', value: 'CA' },
        { text: 'CH', value: 'CH' },
        { text: 'DE', value: 'DE' },
        { text: 'DK', value: 'DK' },
        { text: 'ES', value: 'ES' },
        { text: 'FI', value: 'FI' },
        { text: 'FR', value: 'FR' },
        { text: 'GB', value: 'GB' },
        { text: 'IE', value: 'IE' },
        { text: 'IR', value: 'IR' },
        { text: 'NO', value: 'NO' },
        { text: 'NL', value: 'NL' },
        { text: 'NZ', value: 'NZ' },
        { text: 'TR', value: 'TR' },
        { text: 'US', value: 'US' }
      ]
    }
  }
}
</script>