<template>
  <mdb-col>
    <h6>Género</h6>
    <select class="browser-default custom-select" v-model="internallyGenderSelected" v-on:change="$emit('updateGender', internallyGenderSelected)">
      <option :key="n.value" :value="n.value" v-for="n in genderOptions">{{n.text}}</option>
    </select>
  </mdb-col>
</template>

<script>
import { mdbCol } from 'mdbvue';
export default {
  name: 'GenderFilter',
  props: {
    genderSelected: String
  },
  components:{
    mdbCol
  },
  data() {
    return {
      internallyGenderSelected: this.genderSelected,
      genderOptions:[
        { text: 'Todos', value: '' },
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ]
    }
  }
}
</script>
