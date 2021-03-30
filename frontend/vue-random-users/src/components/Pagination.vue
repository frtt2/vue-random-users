<template>
  <mdb-col class="d-flex justify-content-center" >
    <mdb-pagination >
        <mdb-page-nav prev v-bind:class="{'disabled':(page == 1)}" v-on:click.native="prevPag()"></mdb-page-nav>
        <mdb-page-item v-on:click.native="changePag(n)" v-for="n in numPags" :key="n" v-bind:class="{'active':(page == n)}">{{n}}</mdb-page-item>
        <mdb-page-nav next v-bind:class="{'disabled':(page == numPags)}" v-on:click.native="nextPag()"></mdb-page-nav>
    </mdb-pagination>
  </mdb-col>
</template>

<script>
import { mdbPagination, mdbPageItem, mdbPageNav, mdbCol} from 'mdbvue';
export default {
  name: 'Pagination',
  components:{
    mdbPagination,
    mdbPageItem,
    mdbPageNav,
    mdbCol
  },
  props:{
    page: Number,
    numPags: Number
  },
  methods:{
    changePag(currentPage){
      this.$emit('updatePage', currentPage)
    },
    prevPag(){
      this.$emit('updatePage', this.page-1)
    },
    nextPag(){
      this.$emit('updatePage', this.page+1)
    },
  }

}
</script>

<style>

</style>