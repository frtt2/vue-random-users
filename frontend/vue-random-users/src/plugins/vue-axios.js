import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
const baseURL = 'https://randomuser.me';

axios.defaults.baseURL = baseURL;
Vue.use(VueAxios, axios);
