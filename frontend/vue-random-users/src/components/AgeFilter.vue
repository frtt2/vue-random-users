<template>
  <mdb-col>
    <h6>Edad</h6>
    <div class="app-content pt-2">
      <vue-range-slider v-model="internallyAge" :min="min" :max="max" :enable-cross="enableCross"></vue-range-slider>
    </div>
  </mdb-col>
</template>

<script>
import 'vue-range-component/dist/vue-range-slider.css';
import vueRangeSlider from 'vue-range-component';
import { mdbCol } from 'mdbvue';

export default {
  name: 'AgeFilter',
  components:{
    vueRangeSlider,
    mdbCol
  },
  props:{
    age: Array
  },
  data() {
    return {
      internallyAge: this.age
    }
  },
  created() {
    this.min = 0
    this.max = 122
    this.enableCross = false
  },
  watch:{
    internallyAge : function(oldValue, newValue){
      this.$emit('updateAge', newValue)
    }
  }
  
}
</script>
