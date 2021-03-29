<template>
  <mdb-container class="mt-4">
     <mdb-row class="d-flex justify-content-end">
        <mdb-btn class="mr-3" color="primary" @click="$router.push({ name: 'Users'})"><mdb-icon icon="arrow-left"/></mdb-btn>
    </mdb-row>
    <mdb-card wide>
      <mdb-view hover cascade>
        <mdb-row>
          <mdb-col col="4">
            <mdb-card-image v-bind:src="user.imageLarge" alt="Card image cap" ></mdb-card-image>
            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
          </mdb-col>
          <mdb-col col="6">

          </mdb-col>
          <mdb-col col="2">
            <mdb-btn tag="a" floating size="lg" v-on:click="changeFavourite(user.id,user.name)" color="primary" ><mdb-icon icon="star" :class="user.favourite ? 'fa-star' : 'fa-star-ini'"/></mdb-btn>
          </mdb-col>
        </mdb-row>
      </mdb-view>
      <mdb-card-body class="text-center pb-0" cascade>
        <mdb-card-title><strong>{{user.name}}</strong></mdb-card-title>
        <h5 class="blue-text"><strong>{{user.email}}</strong></h5>
        <mdb-card-footer class="text-muted mt-4">
          <mdb-card-text class="width-footer">{{user.streetName}}, {{user.streetNumber}}, {{user.city}}, {{user.state}}</mdb-card-text>
        </mdb-card-footer>
      </mdb-card-body>
    </mdb-card>
  </mdb-container>
</template>

<script>
import {mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon, mdbCard, mdbView, mdbMask, mdbCardImage, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardBody} from 'mdbvue';
//import Map from "../components/MapDetails";
import Vue from "vue";
export default {
  name: 'Users',
  props:{
    user: Object
  },
  data() {
    return {
      favouritesUsers: [],
      error:false
    }
  },
  components:{
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbIcon,
    mdbCard,
    mdbView,
    mdbMask,
    mdbCardImage,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardBody
  },
  mounted(){
    this.initFavourites()
  },
  methods:{
    async initFavourites(){
      await this.getFavourites()
      await this.matchFavourites()
    },
    changeFavourite(id, name){
      if(this.user.favourite == true){
        this.deleteFavourite(id)
      }else{
        this.postFavourite(id,name)
      }
    },
    postFavourite(id, name){
      let user = {
        id,
        name
      }
      Vue.axios.post("http://localhost:3000/users", user).
      then(() => {
        this.getFavourites()
      })
      .then(()=>{
        this.matchFavourites()
      })
      .catch(() => {
        this.error = true
      });
        
    },
    getFavourites(){
      Vue.axios("http://localhost:3000/users").then((result) => {
        this.favouritesUsers = result.data
      })
      .then((res) => {
        console.log(res)
      })
      .catch(() => {
        this.error = true
      });
    },
    deleteFavourite(id){
      Vue.axios.delete("http://localhost:3000/users/"+id).
      then(() => {
        this.getFavourites()
      })
      .then(()=>{
        this.matchFavourites()
      })
      .catch(() => {
        this.error = true
      });
    },
    matchFavourites(){
      console.log(this.favouritesUsers)
      for (let n=0;n< this.$parent.users.length;n++){
        if(this.favouritesUsers.find( user => user.id == this.$parent.users[n].id)){
           console.log('entra')
          if(this.$parent.users[n].favourite == true){
            this.$parent.users[n].favourite = false
            this.user.favourite = false
            console.log('es false')
          }else{
            this.$parent.users[n].favourite = true
            this.user.favourite = true
            console.log('es true')
          }
          
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.fa-star
  color: yellow

.fa-star-ini
  color: white
</style>
