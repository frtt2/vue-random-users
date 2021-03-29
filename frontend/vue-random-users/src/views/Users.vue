<template>
    <mdb-container class="mt-4">
      <mdb-row class="d-flex justify-content-end">
        <mdb-btn class="mr-3" color="primary" @click="fetchData"><mdb-icon icon="search"/></mdb-btn>
        <mdb-btn class="mr-3" color="primary" @click="goExports"><mdb-icon icon="file-export"/></mdb-btn>
      </mdb-row>
      <mdb-row class="table-height">
        <mdb-col>
          <mdb-tbl >
            <mdb-tbl-head>
              <tr>
                <th>Género</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Nacionalidad</th>
                <th>Fecha de nacimiento</th>
                <th>Fecha de registro</th>
                <th></th>
              </tr>
            </mdb-tbl-head>
            <mdb-tbl-body v-if="users.length>0">
              <tr v-for="item in limitedItems" :key="item.name" >
                <td class="width-gender">{{item.gender}}</td>
                <td class="width-name">{{item.name}}</td>
                <td class="width-email">{{item.email}}</td>
                <td>{{item.nationality}}</td>
                <td>{{item.birthdate | moment("MM-DD-YYYY") }}</td>
                <td>{{item.registrationDate | moment("MM-DD-YYYY") }}</td>
                <td ><mdb-btn size="sm" class="m-0" color="primary"  @click="$router.push({ name: 'Details', params: {user: item }})"><mdb-icon icon="info"/></mdb-btn></td>
              </tr>
            </mdb-tbl-body>
            <mdb-tbl-body v-else class="table-body">
              <tr>
                <td><h4>NO DATA</h4></td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>
        </mdb-col>
      </mdb-row>
      <mdb-row class="mb-5 pagination-height" >
        <mdb-col class="d-flex justify-content-center" v-if="numPags>1">
          <mdb-pagination >
            <mdb-page-nav prev v-bind:class="{'disabled':(page == 1)}" v-on:click.native="prevPag()"></mdb-page-nav>
            <mdb-page-item v-on:click.native="changePag(n)" v-for="n in numPags" :key="n" v-bind:class="{'active':(page == n)}">{{n}}</mdb-page-item>
            <mdb-page-nav next v-bind:class="{'disabled':(page == numPags)}" v-on:click.native="nextPag()"></mdb-page-nav>
          </mdb-pagination>
        </mdb-col>
      </mdb-row>
      <mdb-row class="mt-3">
        <mdb-col>
          <h6>Género</h6>
          <select class="browser-default custom-select" v-model="genderSelected">
            <option :key="n.value" :value="n.value" v-for="n in genderOptions">{{n.text}}</option>
          </select>
        </mdb-col>
        <mdb-col>
          <h6>Edad</h6>
          <div class="app-content pt-2">
            <vue-range-slider v-model="value" :min="min" :max="max" :enable-cross="enableCross"></vue-range-slider>
          </div>
        </mdb-col>
        <mdb-col>
          <h6>Nacionalidad</h6>
          <select class="browser-default custom-select" v-model="natSelected">
            <option :key="n.value" :value="n.value" v-for="n in natOptions">{{n.text}}</option>
          </select>
        </mdb-col>
      </mdb-row>
    </mdb-container>
 
</template>

<script>

import Vue from "vue";
import {mdbContainer, mdbRow, mdbCol,  mdbTbl, mdbTblHead, mdbTblBody , mdbBtn, mdbIcon, mdbPagination, mdbPageItem, mdbPageNav} from 'mdbvue';
import 'vue-range-component/dist/vue-range-slider.css';
import vueRangeSlider from 'vue-range-component';
import moment from 'moment';


export default {
  name: 'Users',
  components:{
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbTbl,
    mdbTblHead,
    mdbBtn,
    mdbIcon,
    mdbTblBody,
    mdbPagination,
    mdbPageItem,
    mdbPageNav,
    vueRangeSlider
  },
  data() {
    return {
      users: [],
      usersFiltered:[],
      numUsers: 1,
      usersPag: [],
      page:1,
      value: [0,122],
      natSelected: '',
      genderSelected: '',
      loaded: false,
      genderOptions:[
        { text: 'Todos', value: '' },
        { text: 'Male', value: 'male' },
        { text: 'female', value: 'Female' },
      ],
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
    changePag(currentPage){
      this.page = currentPage
    },
    prevPag(){
      this.page = this.page - 1
    },
    nextPag(){
      this.page = this.page + 1
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
      itemsFiltered = itemsFiltered.filter(obj => obj.age > this.value[0] && obj.age < this.value[1])
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
          await this.getDataUsers(res)
          await this.prepareData()
        }
        await this.filterItems()
        await this.getNumUsers()
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

td
  display:flex
  text-align:center
  justify-content:center

.app-content
  padding: 40px 15px

.table-height
  height: 630px!important

.pagination-height
  height: 20px

td
  padding: 11px!important

.width-gender
  width: 80px!important

.width-name
  width: 220px!important

.width-email
  width: 220px!important

</style>
