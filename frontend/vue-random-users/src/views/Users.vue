<template>
    <mdb-container class="mt-4">
      <mdb-row class="d-flex justify-content-end">
        <mdb-btn class="mr-3" color="primary" @click="fetchData"><mdb-icon icon="search"/></mdb-btn>
        <mdb-btn class="mr-3" color="primary" @click="goExports"><mdb-icon icon="file-export"/></mdb-btn>
      </mdb-row>
      <mdb-row class="table-height">
        <data-table :limitedItems="limitedItems"/>
      </mdb-row>
      <mdb-row class="mb-5 pagination-height">
        <pagination :page="page" :numPags="numPags" @updatePage="updatePage" v-if="numPags>1"/>
      </mdb-row>
      <mdb-row class="mt-3">
        <gender-filter :genderSelected="genderSelected" @updateGender="updateGender" />
        <age-filter :age="age" @updateAge="updateAge" />
        <nat-filter :natSelected="natSelected" @updateNat="updateNat" />
      </mdb-row>
    </mdb-container>
 
</template>

<script>

import Vue from "vue";
import {mdbContainer, mdbRow, mdbBtn, mdbIcon} from 'mdbvue';
import moment from 'moment';
import Pagination from '../components/Pagination.vue';
import DataTable from '../components/DataTable.vue';
import GenderFilter from '../components/GenderFilter.vue';
import NatFilter from '../components/NatFilter.vue';
import AgeFilter from '../components/AgeFilter.vue';



export default {
  name: 'Users',
  components:{
    mdbContainer,
    mdbRow,
    mdbBtn,
    mdbIcon,
    Pagination,
    DataTable,
    GenderFilter,
    NatFilter,
    AgeFilter
  },
  data() {
    return {
      users: [],
      usersFiltered:[],
      numUsers: 1,
      usersPag: [],
      page:1,
      age: [0,122],
      natSelected: '',
      genderSelected: '',
      loaded: false
    }
  },
  created() {
    this.min = 0
    this.max = 122
    this.enableCross = false

    this.users = this.$parent.users
    this.usersFiltered = this.$parent.usersFiltered
    this.numUsers = this.$parent.numUsers
    this.usersPag = this.$parent.usersPag
    this.page = this.$parent.page
    this.value = this.$parent.value
    this.natSelected = this.$parent.natSelected
    this.genderSelected = this.$parent.genderSelected
    this.loaded = this.$parent.loaded
  },
  beforeDestroy() {
    this.$parent.users = this.users
    this.$parent.usersFiltered = this.usersFiltered
    this.$parent.numUsers = this.numUsers
    this.$parent.usersPag = this.usersPag
    this.$parent.page = this.page
    this.$parent.value = this.value
    this.$parent.natSelected = this.natSelected
    this.$parent.genderSelected = this.genderSelected
    this.$parent.loaded = this.loaded
  },
  mounted(){
    this.fetchData
  },
  computed: {
    limitedItems() {
      return this.usersFiltered.slice(parseInt(this.page-1)*10, parseInt(this.page)*10 )
    },
    numPags(){
      return Math.trunc(parseInt(this.numUsers)/10)
    },
  },
  methods:{
    //PAGINATION
    async goExports(){
      await this.fetchData()
      this.$router.push({ name: 'Exports', params: {users: this.users }})
    },
    updatePage(newValue){
      this.page = newValue
    },
    updateGender(newValue){
      this.genderSelected = newValue
    },
    updateAge(newValue){
      this.age = newValue
    },
    updateNat(newValue){
      this.natSelected = newValue
    },
    //SERVICIOS
    filterItems(){
      let itemsFiltered = this.users

      if (this.natSelected!==''){
        itemsFiltered = itemsFiltered.filter(obj => obj.nationality == this.natSelected)
      }

      if (this.genderSelected!==''){
        itemsFiltered= itemsFiltered.filter(obj => obj.gender == this.genderSelected)
      }
      itemsFiltered = itemsFiltered.filter(obj => obj.age > this.age[0] && obj.age < this.age[1])
      this.usersFiltered = itemsFiltered
      this.getNumUsers()

    },
    getDataUsers(res){
      this.users2 = res.data.results
    },
    getNumUsers(){
      this.numUsers = this.usersFiltered.length
      this.page = 1
    },
    prepareData(){
      this.users = this.users2.map(user => ({
        id: user.login.uuid,
        name: user.name.title + " " + user.name.first + " " + user.name.last,
        username: user.login.username,
        gender: user.gender,
        nationality: user.nat,
        streetNumber: user.location.street.number,
        streetName: user.location.street.name,
        city: user.location.city,
        state: user.location.state,
        postcode: user.location.postcode,
        latitude: user.location.coordinates.latitude,
        longitude: user.location.coordinates.longitude,
        registered: user.registered.date,
        phone: user.phone,
        cell: user.cell,
        email: user.email,
        imageLarge: user.picture.large,
        birthdate: moment().subtract(user.dob.age, 'years').format('YYYY-MM-DD'),
        age:user.dob.age,
        registrationDate: user.registered.date,
        favourite:false
      }))
    },
    async fetchData (){
      try{
        if(this.loaded == false){
          const res = await Vue.axios({url:'/api/1.3/?results=100&seed=abc'})
          this.getDataUsers(res)
          this.prepareData()
        }
          this.filterItems()
          this.getNumUsers()
          this.loaded = true
      }catch(e){
          console.log(e)
      }
    }
    /*dataPagination(){
      this.usersPag = this.users.slice(parseInt(this.page)*10, parseInt(this.page)*10 + 10);
    }*/
  }
}
</script>

<style lang="sass" scope>  
.prueba1
  border: 1px solid none
  box-shadow: none!important
  background: transparent!important
  color: white
</style>
