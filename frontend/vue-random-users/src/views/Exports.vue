<template>
  <mdb-container class="mt-4">
      <mdb-row class="d-flex justify-content-end">
        <mdb-btn class="mr-3" color="primary"  @click="$router.push({ name: 'Users'})"><mdb-icon icon="arrow-left"/></mdb-btn>
        <mdb-btn class="mr-3" color="primary"  @click="exportData"><mdb-icon icon="file-download"/></mdb-btn>
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
              </tr>
            </mdb-tbl-head>
            <mdb-tbl-body v-if="users.length>0">
              <tr v-for="item in users" :key="item.name" >
                <td class="width-gender">{{item.gender}}</td>
                <td class="width-name">{{item.name}}</td>
                <td class="width-email">{{item.email}}</td>
                <td>{{item.nationality}}</td>
                <td>{{item.birthdate | moment("MM-DD-YYYY") }}</td>
                <td>{{item.registrationDate | moment("MM-DD-YYYY") }}</td>
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
    </mdb-container>
</template>

<script>
import {mdbContainer, mdbRow, mdbCol,  mdbTbl, mdbTblHead, mdbTblBody , mdbBtn, mdbIcon} from 'mdbvue';
import 'vue-range-component/dist/vue-range-slider.css';
export default {
  name: 'Users',
  data() {
    return {
      users: [],
    }
  },
  components:{
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbTbl,
    mdbTblHead,
    mdbBtn,
    mdbIcon,
    mdbTblBody
  },
  methods:{
    exportData(){
      let csvContent = "data:text/csv;charset=utf-8,";
      csvContent += [
        Object.keys(this.users[0]).join(";"),
        ...this.users.map(item => Object.values(item).join(";"))
      ]
        .join("\n")
        .replace(/(^\[)|(\]$)/gm, "");

      const data = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", data);
      link.setAttribute("download", "export.csv");
      link.click();
    },
    filterItems(){
      this.users = this.users.filter(user => user.favourite == true);
    }
  },
  mounted(){
    this.users = this.$parent.users
    this.filterItems()
  },
  
}
</script>