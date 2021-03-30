<template>
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
      <mdb-tbl-body v-if="limitedItems.length>0">
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
</template>

<script>
import { mdbTbl, mdbTblHead, mdbTblBody, mdbBtn, mdbIcon, mdbCol } from 'mdbvue'

export default({
  name: 'DataTable',
  components:{
    mdbTbl,
    mdbTblHead,
    mdbBtn,
    mdbIcon,
    mdbTblBody,
    mdbCol
  },
  props:{
    limitedItems: Array
  }
})
</script>

<style lang="sass" scope>  
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
