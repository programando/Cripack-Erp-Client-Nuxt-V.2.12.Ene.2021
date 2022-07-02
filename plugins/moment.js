import Vue from "vue";

import moment from 'moment'

moment.locale('es')

Vue.filter("FechaPrueba", value => {
  
  return moment(value).format('dddd Do MMM YYYY')

  
});